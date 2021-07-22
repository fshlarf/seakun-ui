<template>
  <div class="container md:max-w-[1000px] w-full mx-auto py-4">
    <div class="wrapper-form w-full bg-white rounded-xl shadow-xl py-4 px-4">
      <div class="header-confirmation">
        <h3 class="font-bold text-2xl">Konfirmasi Pembayaran</h3>
        <p class="my-2 text-sm">
          Silakan isi terlebih dahulu sebelum melakukan pemesanan
        </p>
        <div
          v-if="orderNumber"
          class="order-code bg-green-seakun-secondary w-full rounded-lg mt-2 flex justify-between px-4 py-3"
        >
          <p class="order-code__label">Kode pemesanan</p>
          <p class="order-code__code text-green-seakun-dark font-bold">
            {{ orderNumber }}
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
              @keyup="
                paymentUsage = false;
                validateInput('bankCustomer');
              "
              :error="errorForm.bankCustomer"
            >
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="enable-background: new 0 0 512 512"
                xml:space="preserve"
                class="w-2 h-2"
              >
                <path
                  d="M509.121,125.966c-3.838-3.838-10.055-3.838-13.893,0L256.005,365.194L16.771,125.966c-3.838-3.838-10.055-3.838-13.893,0
			c-3.838,3.838-3.838,10.055,0,13.893l246.18,246.175c1.842,1.842,4.337,2.878,6.947,2.878c2.61,0,5.104-1.036,6.946-2.878
			l246.17-246.175C512.959,136.021,512.959,129.804,509.121,125.966z"
                />
              </svg>
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

        <div class="mt-4">
          <p class="pb-1 tn:text-sm">Tujuan Pembayaran</p>
          <ButtonDrop
            :btnText="bankSeakun"
            @click="showPaymentList('bankDirection')"
            @keyup="
              bankDirection = false;
              validateInput('bankSeakun');
            "
            :error="errorForm.bankSeakun"
          />
          <div class="w-full">
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
        </div>

        <div class="my-4">
          <InputForm
            label="Nominal Pembayaran"
            v-model="nominal"
            :value="nominal"
            class="text-grey-400 mt-4"
            @keyup="validateInput('nominal')"
            :error="errorForm.nominal"
          />
        </div>

        <InputForm
          label="Nama Pemilik Rekening"
          placeholder="Masukan Nama Pemilik Rekening"
          v-model="userName"
          @keyup="validateInput('userName')"
          :error="errorForm.userName"
        />
        <div class="my-4">
          <p>Tanggal Pembayaran</p>
          <DatePicker
            class="datepicker"
            v-model="time1"
            valueType="format"
            :disabled-date="(time1) => time1 >= new Date()"
          ></DatePicker>
        </div>

        <UploadPayment
          v-model="photoUrl"
          label="Upload Pembayaran"
          name="paymetNote"
          id="payment-img"
          @get-image="getPaymentImage"
          @keyup="validateInput('uploadPayment')"
          :error="errorForm.uploadImage"
        />

        <div class="mb-4 mx-auto" :class="{ hidden: !isUpload }">
          <img class="mx-auto" id="previewImage" alt="your image" />
        </div>

        <Button
          class="w-full bg-green-seakun text-white"
          label="Konfirmasi"
          :is-loading="isLoadingSubmit"
          @click="clickSubmit"
        />
      </div>
    </div>
    <Snackbar ref="snackbar" />
  </div>
</template>

<script>
import ButtonDrop from '~/components/atoms/ButtonDropDownNew';
import Snackbar from '~/components/mollecules/Snackbar.vue';
import InputForm from '~/components/atoms/Input.vue';
import DownArrowIcon from '~/assets/images/icon/down-arrow.svg?inline';
import Button from '~/components/atoms/Button';
import PopUpPayment from './views/PopUpPaymentMethod.vue';
import UploadPayment from './views/UploadPayment.vue';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import moment from 'moment';
import Input from '../../components/atoms/Input.vue';
import { currencyFormat } from '~/helpers';
import axios from 'axios';
import OrderService from '~/services/OrderServices.js';
import MasterService from '~/services/MasterServices.js';

export default {
  name: 'paymentConfirmation',
  layout: 'navigationBlank',
  components: {
    InputForm,
    DownArrowIcon,
    PopUpPayment,
    Button,
    ButtonDrop,
    UploadPayment,
    DatePicker,
    Input,
    Snackbar,
  },
  data() {
    return {
      OrderService,
      MasterService,
      moment,
      isLoadingSubmit: false,
      bankSeakun: 'Pilih Bank tujuan milik Seakun.id',
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
      userName: '',
      nominal: '',
      packet: '',
      orderNumber: '',
      dataDetailPacket: {},
      dataDetailPayment: {},
      paramSeakunPayment: {
        page: 1,
        limit: 10,
      },
      paymentDestinationList: {
        transferBank: [],
        ewallet: [],
      },
      paymentToUid: '',
      time1: moment().format('YYYY-MM-DD').toString(),
      imageFile: null,
      errorForm: {
        bankSeakun: {
          isError: false,
          message: '',
        },
        bankCustomer: {
          isError: false,
          message: '',
        },
        nominal: {
          isError: false,
          message: '',
        },
        userName: {
          isError: false,
          message: '',
        },
        uploadImage: {
          isError: false,
          message: '',
        },
      },
    };
  },
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
    this.OrderService = new OrderService(this);
    this.MasterService = new MasterService(this);
    const {
      provider,
      order_uid,
      customer_uid,
    } = this.$router.history.current.query;

    this.getSeakunPayment();
    // if(provider == `sequrban`)
    // this.getDataDetailPacket(provider);
    if (order_uid && customer_uid) {
      this.getDataPayment(order_uid, customer_uid);
    }
  },
  methods: {
    showPaymentList(type) {
      if (type == 'bankDirection') {
        this.paymenDestination = !this.paymenDestination;
        this.paymentUsage = false;
      }

      if (type == 'paymentUsage') {
        this.paymentUsage = !this.paymentUsage;
        this.paymenDestination = false;
      }
    },
    onClickItemBank(type, value) {
      if (type == 'bankDirection') {
        this.bankSeakun = value.bankName;
        this.paymentToUid = value.uid;
        this.paymenDestination = false;
      }

      if (type == 'paymentUsage') {
        this.bankCustomer = value.bankName;
        this.paymentUsage = false;
      }
    },
    async getSeakunPayment() {
      const { MasterService } = this;
      this.isShowLoading = true;
      try {
        const fetchSeakunPayment = await MasterService.getSeakunPayment(
          this.paramSeakunPayment
        );
        if (fetchSeakunPayment.data) {
          const dataResult = fetchSeakunPayment.data.data;
          dataResult.forEach((element) => {
            if (element.paymentTypeId === 1) {
              this.paymentDestinationList.transferBank.push(element);
            } else if (element.paymentTypeId === 2) {
              this.paymentDestinationList.ewallet.push(element);
            }
          });
        } else {
          throw new Error(fetchSeakunPayment);
        }
      } catch (error) {
        console.log(error);
      }
      this.isShowLoading = false;
    },
    async getDataPayment(orderUid, customerUid) {
      const { OrderService } = this;

      this.isShowLoading = true;
      try {
        const fetchPayment = await OrderService.getPaymentConfirmation(
          orderUid,
          customerUid
        );
        if (fetchPayment.data) {
          const dataResult = fetchPayment.data.data;
          this.nominal = dataResult.payment.payment;
          this.dataDetailPayment = dataResult;
          this.orderNumber = dataResult.orderNumber;
        } else {
          throw new Error(fetchPayment);
        }
      } catch (error) {
        if (error.response?.status == 404) {
          this.$refs.snackbar.showSnackbar({
            message: `Order Anda Tidak Ditemukan / Sudah Terbayarkan dan sedang diproses `,
            className: '',
            color: 'red-400',
            duration: 5000,
          });
          setTimeout(
            function () {
              this.$router.push('/');
            }.bind(this),
            3500
          );
        }
      }
      this.isShowLoading = false;
    },
    // getDataDetailPacket(provider) {
    //   axios
    //     .get(
    //       `https://seakun-packet-api-v2.herokuapp.com/${provider}/${this.packet_id}`
    //     )
    //     .then((res) => {
    //       this.dataDetailPacket = res.data;
    //       provider === 'sequrban'
    //         ? (this.packet = this.dataDetailPacket.packageCode)
    //         : (this.packet = this.dataDetailPacket.name);
    //     })
    //     .catch((err) => console.log(err));
    // },
    validateInput(input) {
      const { nominal, bankCustomer, bankSeakun, imageFile, userName } = this;
      const nameFormat = /^[A-Za-z][A-Za-z\s]*$/;
      const nominalFormat = /^[0-9]*$/;
      let isValid = true;
      let errorTemp = {
        bankSeakun: {
          isError: false,
          message: '',
        },
        bankCustomer: {
          isError: false,
          message: '',
        },
        nominal: {
          isError: false,
          message: '',
        },
        userName: {
          isError: false,
          message: '',
        },
        uploadImage: {
          isError: false,
          message: '',
        },
      };

      if (input === 'bankCustomer' || !input) {
        if (bankCustomer === '') {
          errorTemp.bankCustomer = {
            isError: true,
            message: 'Bank yang digunakan harus diisi',
          };
          isValid = false;
        }
      }

      if (input === 'bankSeakun' || !input) {
        if (bankSeakun === 'Pilih Bank tujuan milik Seakun.id') {
          errorTemp.bankSeakun = {
            isError: true,
            message: 'Bank yang tujuan harus dipilih',
          };
          isValid = false;
        }
      }

      if (input === 'userName' || !input) {
        if (userName === '') {
          errorTemp.userName = {
            isError: true,
            message: 'Nama lengkap harus diisi',
          };
          isValid = false;
        } else if (!userName.match(nameFormat)) {
          errorTemp.userName = {
            isError: true,
            message: 'Format nama salah',
          };
          isValid = false;
        }
      }

      if (input === 'nominal' || !input) {
        if (nominal === 0) {
          errorTemp.nominal = {
            isError: true,
            message: 'Nominal pembayaran harus diisi',
          };
          isValid = false;
        } else if (!nominal.toString().match(nominalFormat)) {
          errorTemp.nominal = {
            isError: true,
            message: 'Format nominal salah',
          };
          isValid = false;
        }
      }

      if (input === 'uploadPayment' || !input) {
        if (imageFile === null) {
          errorTemp.uploadImage = {
            isError: true,
            message: 'Bukti pembayaran harus diisi',
          };
          isValid = false;
        }
      }

      this.errorForm = { ...errorTemp };
      return isValid;
    },
    clickSubmit() {
      if (this.validateInput()) {
        if (this.provider) {
          this.submitConfirmationSequrban();
        } else {
          this.submitConfirmationDigital();
        }
      }
    },
    submitConfirmationSequrban() {
      this.isLoadingSubmit = true;

      const formData = new FormData();

      formData.append('order_id', 'xxxx');
      formData.append('from', this.bankCustomer);
      formData.append('to', this.bankSeakun);
      formData.append('user_holder', this.userName);
      formData.append('email', this.email);
      formData.append('whatsapp', this.whatsapp);
      formData.append('provider', this.provider);
      formData.append('packet', this.packet);
      formData.append('payment_date', this.time1);
      formData.append('nominal_payment', this.nominal);
      formData.append('file', this.imageFile);

      axios
        .post(
          'https://seakun-api.herokuapp.com/confirm-payment/on-demand',
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          }
        )

        .then((res) => {
          if (this.provider.toLowerCase() === 'sequrban') {
            this.executeApiMailConfirmPayment();
          } else {
            this.toThankyouPage();
            this.isLoadingSubmit = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async submitConfirmationDigital() {
      const { OrderService } = this;
      this.isLoadingSubmit = true;
      const formDataDigital = new FormData();

      formDataDigital.append('orderUid', this.dataDetailPayment.orderUid);
      formDataDigital.append('paymentTo', this.paymentToUid);
      formDataDigital.append('paymentFromBank', this.bankCustomer);
      formDataDigital.append('paymentFromName', this.userName);
      formDataDigital.append('paymentAt', moment(this.time1).unix());
      formDataDigital.append('file', this.imageFile);
      formDataDigital.append('customerUid', this.dataDetailPayment.customerUid);

      try {
        const fetchConfirmPayment = await OrderService.updatePaymentConfirmation(
          formDataDigital
        );

        if (fetchConfirmPayment.data) {
          localStorage.removeItem('swo');
          this.toThankyouPage();
        } else {
          throw new Error(fetchConfirmPayment);
        }
      } catch (error) {
        console.log(error);
      }
      this.isLoadingSubmit = false;
    },
    toThankyouPage() {
      this.$router.push(
        `/thankyou?holder=${this.userName}&from=${this.bankCustomer}&to=${this.bankSeakun}`
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
    executeApiMailConfirmPayment() {
      let payload = {
        type: 'downpayment',
        provider: this.provider,
        from: this.bankCustomer,
        holder: this.userName,
        nominal: this.formatMoneyRupiah(this.nominal),
        email: this.email,
        date: this.time1,
      };
      axios
        .post(
          'https://seakun-mail-api-v2.herokuapp.com/payment-confirm',
          payload
        )
        .then((res) => {
          this.toThankyouPage();
          this.isLoadingSubmit = false;
        })
        .catch((err) => {
          console.log(err);
          this.isLoadingSubmit = false;
        });
    },
    formatMoneyRupiah(num) {
      return currencyFormat(num);
    },
  },
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
