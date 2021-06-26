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
          <div class="my-4">
            <InputForm
              label="Sumber Transfer (Bank / Ewallet)"
              class="mt-4"
              placeholder="Pilih Bank yang digunakan, atau ketik bila tidak ada pilihan"
              v-model="bankCustomer"
              :value="bankCustomer"
              @click="showPaymentList('paymentUsage')"
              @keyup="paymentUsage = false"
              :error="error_bank_customer"
            >
              <template #iconLeft>
                <DownArrowIcon />
              </template>
            </InputForm>
          </div>
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

        <div>
          <InputForm
            label="Tujuan Pembayaran"
            placeholder="Pilih Bank tujuan milik Seakun.id"
            class="mt-4"
            @click="showPaymentList('bankDirection')"
            @keyup="bankDirection = false"
            :value="bankSeakun"
            v-model="bankSeakun"
            :error="error_bank_seakun"
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

        <div class="my-4">
          <InputForm
            label="Nominal Pembayaran"
            v-model="nominal"
            :value="nominal"
            class="text-grey-400 mt-4"
            :error="error_nominal"
          />
        </div>

        <InputForm
          label="Nama Pemilik Rekening"
          placeholder="Masukan Nama Pemilik Rekening"
          v-model="holder"
          :value="holder"
          :error="error_holder"
        />
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
          :error="error_upload_image"
        />

        <div class="mb-4 mx-auto" :class="{ hidden: !isUpload }">
          <img class="mx-auto" id="previewImage" alt="your image" />
        </div>

        <Button
          class="w-full bg-green-seakun text-white"
          label="Simpan"
          :is-loading="isLoadingSubmit"
          @click="clickSubmit"
        />
      </div>
    </div>
  </div>
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
import axios from 'axios';

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
    bankSeakun: '',
    bankCustomer: '',
    dateTime: null,
    photoUrl: '',
    isUpload: false,
    paymenDestination: false,
    paymentUsage: false,
    packet_id: '',
    order_id: '',
    provider: '',
    email: '',
    whatsapp: '',
    holder: '',
    nominal: '',
    packet: '',
    dataDetailPacket: {},
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
      ],
      ewallet: [
        {
          name: 'GoPay',
          value: 'gopay',
        },
        {
          name: 'OVO',
          value: 'ovo',
        },
        {
          name: 'DANA',
          value: 'dana',
        },
        {
          name: 'LinkAja',
          value: 'linkaja',
        },
      ],
    },
    time1: moment().format('YYYY-MM-DD').toString(),
    imageFile: null,
    error_bank_seakun: {
      isError: false,
      message: 'Bank tujuan harus dipilih',
    },
    error_bank_customer: {
      isError: false,
      message: 'Bank yang digunakan harus dipilih',
    },
    error_nominal: {
      isError: false,
      message: 'Nominal pembayaran harus diisi',
    },
    error_holder: {
      isError: false,
      message: 'Nama harus diisi',
    },
    error_upload_image: {
      isError: false,
      message: 'Mohon upload bukti pembayaran',
    },
  }),
  created() {
    const {
      packet_id,
      provider,
      order_id,
      email,
      whatsapp,
      holder,
      nominal,
    } = this.$router.history.current.query;

    if (order_id) {
      this.order_id = order_id;
    }

    this.packet_id = packet_id;
    this.provider = provider;
    this.email = email;
    this.whatsapp = whatsapp;
    this.holder = holder;
    this.nominal = nominal;
  },
  mounted() {
    const { provider } = this.$router.history.current.query;
    this.getDataDetailPacket(provider);
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
    getDataDetailPacket(provider) {
      axios
        .get(
          `https://seakun-packet-api-v2.herokuapp.com/${provider}/${this.packet_id}`
        )
        .then((res) => {
          this.dataDetailPacket = res.data;
          provider === 'sequrban'
            ? (this.packet = this.dataDetailPacket.packageCode)
            : (this.packet = this.dataDetailPacket.name);
        })
        .catch((err) => console.log(err));
    },
    validateInput() {
      this.error_bank_seakun.isError = !this.bankSeakun;
      this.error_bank_customer.isError = !this.bankCustomer;
      this.error_nominal.isError = !this.nominal;
      this.error_holder.isError = !this.holder;
      this.error_upload_image.isError = !this.imageFile;
    },
    clickSubmit() {
      this.validateInput();
      if (
        this.bankSeakun &&
        this.bankCustomer &&
        this.nominal &&
        this.holder &&
        this.imageFile
      ) {
        this.submitConfirmation();
      }
    },
    submitConfirmation() {
      this.isLoadingSubmit = true;

      const formData = new FormData();

      formData.append('order_id', 'xxxx');
      formData.append('from', this.bankCustomer);
      formData.append('to', this.bankSeakun);
      formData.append('user_holder', this.holder);
      formData.append('email', this.email);
      formData.append('whatsapp', this.whatsapp);
      formData.append('provider', this.provider);
      formData.append('packet', this.packet);
      formData.append('payment_date', this.time1);
      formData.append('nominal_payment', this.nominal);
      formData.append('file', this.imageFile);

      axios
        .post(
          `https://seakun-api.herokuapp.com/confirm-payment/${
            this.provider.toLowerCase() === 'sequrban' ? 'on-demand' : 'digital'
          }`,
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          }
        )

        .then((res) => {
          this.toThankyouPage();
          this.isLoadingSubmit = false;
          // this.executeApiMailSeakun(payload);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toThankyouPage() {
      this.$router.push(
        `/thankyou?holder=${this.holder}&from=${this.bankCustomer}&to=${this.bankSeakun}`
      );
    },
    getPaymentImage(file) {
      if (file) {
        this.isUpload = true;
        this.imageFile = file;
        const imageUpload = document.getElementById('previewImage');
        imageUpload.src = URL.createObjectURL(this.imageFile);
      }
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
