<template>
  <div class="container md:max-w-[1000px] w-full mx-auto mt-10 py-8">
    <div class="wrapper-form w-full bg-white rounded-xl shadow-xl py-4 px-4">
      <div class="header-confirmation">
        <h3 class="font-bold text-2xl">Konfirmasi Pembayaran</h3>
        <p class="my-3">
          Silahkan Isi Terlebih Dahulu sebelum memasukan pemesanan
        </p>
        <div
          v-if="order_id"
          class="order-code bg-green-seakun-secondary w-full flex justify-between px-3 py-2"
        >
          <p class="order-code__label">Kode pemesanan</p>
          <p class="order-code__code text-green-seakun-dark font-bold">
            NET100002020
          </p>
        </div>
      </div>
      <div class="form-confirmation mt-7">
        <div>
          <InputForm
            label="Tujuan Pembayaran"
            placeholder="Pilih Bank Tujuan"
            @click="showPaymentList('bankDirection')"
            :value="bankSeakun"
            v-model="bankSeakun"
          >
            <template #iconLeft>
              <DownArrowIcon />
            </template>
          </InputForm>
          <PopUpPayment
            :dataList="paymentDestinationList"
            :show="paymenDestination"
            @onClickItem="
              (value) => {
                onClickItemBank('bankDirection', value);
              }
            "
          />
        </div>

        <div>
          <InputForm
            label="Metode Pembayaran"
            placeholder="Pilih Bank Yang Digunakan"
            v-model="bankCustomer"
            :value="bankCustomer"
            @click="showPaymentList('paymentUsage')"
          >
            <template #iconLeft>
              <DownArrowIcon />
            </template>
          </InputForm>
          <PopUpPayment
            :dataList="paymentDestinationList"
            :show="paymentUsage"
            @onClickItem="
              (value) => {
                onClickItemBank('paymentUsage', value);
              }
            "
          />
        </div>

        <InputForm
          label="Nominal Pembayaran"
          v-model="nominalPayment"
          disabled
          class="text-grey-400"
        >
        </InputForm>

        <InputForm
          label="Nama Pemilik Rekening"
          placeholder="Masukan Nama Pemilik Rekening"
          v-model="holder"
        >
        </InputForm>
        <div class="my-4">
          <p>Tanggal Pembayaran</p>
          <DatePicker
            class="datepicker"
            v-model="time1"
            valueType="format"
          ></DatePicker>
        </div>

        <UploadPayment
          v-model="photoUrl"
          label="Upload Pembayaran"
          name="paymetNote"
          id="payment-img"
          @get-image="getPaymentImage"
        />

        <Button
          class="w-full bg-green-seakun text-white"
          label="Simpan"
          :is-loading="isLoadingSubmit"
          @click="submitConfirmation"
        />
      </div>
    </div>
  </div>
  <!-- <div class="container container-payment max-w-xl w-full mx-auto mt-10 bg-white">

  </div> -->
</template>

<script>
import InputForm from '~/components/atoms/Input.vue';
import DownArrowIcon from '~/assets/images/icon/down-arrow.svg?inline';
import Button from '~/components/atoms/Button';
import PopUpPayment from './views/PopUpPaymentMethod.vue';
import UploadPayment from './views/UploadPayment.vue';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import moment from 'moment';
import Input from '../../components/atoms/Input.vue';
import { currencyFormat } from '../../helpers/word-transformation.js';

export default {
  name: 'paymentConfirmation',
  components: {
    InputForm,
    DownArrowIcon,
    PopUpPayment,
    Button,
    UploadPayment,
    DatePicker,
    Input,
  },
  data: () => ({
    moment,
    isLoadingSubmit: false,
    accountName: '',
    bankSeakun: '',
    bankCustomer: '',
    dateTime: null,
    photoUrl: '',
    paymenDestination: false,
    paymentUsage: false,
    nominalPayment: '',
    order_id: '',
    provider: '',
    email: '',
    whatsapp: '',
    holder: '',
    nominal: '',
    packet: '',
    paymentDestinationList: {
      transferBank: [
        {
          name: 'BCA',
          value: 'bca',
        },
        {
          name: 'Mandiri',
          value: 'mandiri',
        },
        {
          name: 'Bri',
          value: 'bca',
        },
      ],
      virtiualPayment: [
        {
          name: 'OVO',
          value: 'ovo',
        },
        {
          name: 'GoPay',
          value: 'gopay',
        },
      ],
    },
    time1: moment().format('YYYY-MM-DD').toString(),
  }),
  created() {
    const {
      provider,
      order_id,
      email,
      whatsapp,
      holder,
      nominal,
      packet,
    } = this.$router.history.current.query;
    if (order_id) {
      this.order_id = order_id;
    }
    this.provider = provider;
    this.email = email;
    this.whatsapp = whatsapp;
    this.holder = holder;
    this.nominalPayment = currencyFormat(nominal);
    this.nominal = nominal;
    this.packet = packet;
  },

  methods: {
    showPaymentList(type) {
      if (type == 'bankDirection') {
        this.paymenDestination = !this.paymenDestination;
      }

      if (type == 'paymentUsage') {
        this.paymentUsage = !this.paymentUsage;
      }
    },
    onClickItemBank(type, value) {
      if (type == 'bankDirection') {
        this.bankSeakun = value.name;
        this.paymenDestination = false;
      }

      if (type == 'paymentUsage') {
        this.bankCustomer = value.name;
        this.paymentUsage = false;
      }
    },
    submitConfirmation() {
      //   this.isLoadingSubmit = true;
      //   const dataParamConfirmation = {
      //     order_id: this.order_id,
      //     from: this.bankCustomer,
      //     to: this.bankSeakun,
      //     user_holder: this.holder,
      //     email: this.email,
      //     whatsapp: this.whatsapp,
      //     payment_date: this.time1,
      //     nominal_payment: this.nominal,
      //     provider: this.provider,
      //     packet: this.packet,
      //   };
      //   const imageFile = document.querySelector('#payment-img');
      //   imagefile.addEventListener('change', updateImageDisplay);
      //   const image = imageFile.files;
      //   const params = {};
      //   params.append('file', image.files[0]);
      //   console.log(params);
      //   dataParamConfirmation.append('image', imagefile.files[0]);
      //   axios
      //     .post(
      //       'https://seakun-api.herokuapp.com/confirm-payment/on-demand',
      //       dataParamConfirmation
      //     )
      //     .then((res) => {
      //       this.toThankyouPage();
      //       this.isLoadingSubmit = false;
      //       // this.executeApiMailSeakun(payload);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
    },
    getPaymentImage() {
      console.log('tes');
    },
  },
  layout: 'navigationBlank',
};
</script>

<style lang="scss">
.datepicker {
  width: 100% !important;
  input {
    padding: 20px 20px;
    margin-top: 15px;
  }
  svg {
    margin-top: 16px;
  }
}
</style>
