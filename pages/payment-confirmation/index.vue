<template>
  <div
    class="container tn:bg-white md:bg-transparent w-full mx-auto md:pt-4 tn:-mb-12 md:mb-0"
  >
    <div
      class="wrapper-form w-full bg-white mx-auto xl:max-w-2xl md:rounded-3xl md:shadow-xl py-4 tn:px-3 md:px-5"
    >
      <div class="header-confirmation">
        <h3 class="font-bold text-2xl">Konfirmasi & Upload Bukti Pembayaran</h3>
        <p class="my-2 text-sm">
          Silakan isi terlebih dahulu sebelum melakukan pemesanan
        </p>
        <div
          v-if="orderNumber"
          class="order-code bg-green-seakun-secondary w-full rounded-lg mt-2 px-4 pt-3 pb-1"
        >
          <div
            v-for="(item, index) in orderData"
            :key="index"
            class="flex justify-between"
          >
            <p v-if="orderData.length > 1" class="order-code__label mb-2">
              Kode pemesanan {{ index + 1 }}
            </p>
            <p v-else class="order-code__label mb-2">Kode pemesanan</p>
            <p class="order-code__code text-green-seakun-dark font-bold">
              {{ item.orderNumber }}
            </p>
          </div>
        </div>
      </div>
      <div class="form-confirmation mt-7">
        <div>
          <div class="mt-4">
            <InputForm
              label="Sumber Transfer (Bank / Ewallet)"
              class="mt-4"
              placeholder="Pilih bank yang kamu gunakan"
              v-model="bankCustomer"
              :value="bankCustomer"
              @click="showPaymentList('paymentUsage')"
              @keyup="validateInput('bankCustomer')"
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
            :bankListCustomer="dataFilter"
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
            @keyup="validateInput('bankSeakun')"
            :error="errorForm.bankSeakun"
          />
          <div class="w-full">
            <PopUpPayment
              :bankListSeakun="paymentDestinationList"
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
          <p class="text-sm mb-2">Tanggal Pembayaran</p>
          <DatePicker
            class="datepicker"
            v-model="time1"
            valueType="format"
            :disabled-date="(time1) => time1 >= new Date()"
            @change="validateInput('paymentDate')"
          ></DatePicker>
          <p
            v-if="errorForm.paymentDate.isError"
            class="text-red-500 text-xs pt-1 italic"
          >
            {{ errorForm.paymentDate.message }}
          </p>
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

        <div
          class="mb-4 mx-auto hidden"
          :class="{
            block:
              isUpload &&
              /(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(fileExtension),
          }"
        >
          <img class="mx-auto" id="previewImage" alt="your image" />
        </div>
        <div
          class="mb-4 mx-auto hidden"
          :class="{ block: isUpload && fileExtension === 'pdf' }"
        >
          <a
            class="cursor-pointer mx-auto d-flex justify-center w-full text-center bg-yellow-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            target="_blank"
            id="previewPdf"
            alt="your image"
          >
            <svg
              class="mr-2"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              <path
                d="M13.172,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8.828c0-0.53-0.211-1.039-0.586-1.414l-4.828-4.828 C14.211,2.211,13.702,2,13.172,2z M15,18H9c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h6c0.552,0,1,0.448,1,1v0 C16,17.552,15.552,18,15,18z M15,14H9c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h6c0.552,0,1,0.448,1,1v0 C16,13.552,15.552,14,15,14z M13,9V3.5L18.5,9H13z"
              />
            </svg>
            Preview pdf
          </a>
        </div>

        <Button
          class="w-full bg-green-seakun text-white py-2 mb-2"
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
import PaymentService from '~/services/PaymentServices.js';

export default {
  name: 'paymentConfirmation',
  layout: 'new',
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
      PaymentService,
      moment,
      isLoadingSubmit: false,
      bankSeakun: 'Pilih Bank tujuan milik Seakun.id',
      bankCustomer: '',
      dateTime: null,
      photoUrl: '',
      isUpload: false,
      isImage: false,
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
      paymentFromList: [],
      paymentDestinationList: [],
      paymentToUid: '',
      paymentFromUid: '',
      time1: moment().format('YYYY-MM-DD').toString(),
      fileExtension: '',
      imageFile: {},
      orderData: [],
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
        paymentDate: {
          isError: false,
          message: '',
        },
      },
    };
  },
  computed: {
    dataFilter() {
      const { bankCustomer, paymentFromList } = this;
      let newArr = paymentFromList?.filter((item) =>
        item.bank?.toLowerCase().includes(bankCustomer.toLowerCase())
      );
      const othersIndex = paymentFromList
        .map((element) => element.bank)
        .indexOf('Lainnya');
      const othersOption = [paymentFromList[othersIndex]];
      if (newArr.length > 0) {
        return newArr;
      } else {
        return othersOption;
      }
    },
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
    this.PaymentService = new PaymentService(this);
    const {
      provider,
      order_uid,
      customer_uid,
      additionalOrder,
    } = this.$router.history.current.query;

    if (order_uid && customer_uid) {
      this.getDataPayment(order_uid, customer_uid, additionalOrder);
    }
    this.getSeakunPayment();
    this.getSeakunPaymentFrom();
    // if(provider == `sequrban`)
    // this.getDataDetailPacket(provider);
  },
  methods: {
    showPaymentList(type) {
      if (type == 'bankDirection') {
        this.paymenDestination = !this.paymenDestination;
        this.paymentUsage = false;
      }

      if (type == 'paymentUsage') {
        this.paymentUsage = true;
        this.paymenDestination = false;
      }
    },
    onClickItemBank(type, value) {
      if (type == 'bankDirection') {
        this.bankSeakun = value.bank;
        this.paymentToUid = value.uid;
        this.paymenDestination = false;
        this.errorForm.bankSeakun.isError = false;
      }

      if (type == 'paymentUsage') {
        this.bankCustomer = value.bank;
        this.paymentFromUid = value.uid;
        this.paymentUsage = false;
        this.errorForm.bankCustomer.isError = false;
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
            this.paymentDestinationList.push(element);
          });
        } else {
          throw new Error(fetchSeakunPayment);
        }
      } catch (error) {
        console.log(error);
      }
      this.isShowLoading = false;
    },
    async getSeakunPaymentFrom() {
      const { MasterService } = this;
      this.isShowLoading = true;
      try {
        const fetchSeakunPaymentFrom = await MasterService.getSeakunPaymentFrom(
          this.paramSeakunPayment
        );
        if (fetchSeakunPaymentFrom.data) {
          const dataResult = fetchSeakunPaymentFrom.data.data;
          dataResult.forEach((element) => {
            this.paymentFromList.push(element);
          });
        } else {
          throw new Error(fetchSeakunPaymentFrom);
        }
      } catch (error) {
        console.log(error);
      }
      this.isShowLoading = false;
    },
    async getDataPayment(orderUid, customerUid, additionalOrder) {
      const { OrderService } = this;

      this.isShowLoading = true;
      try {
        const fetchPayment = await OrderService.getPaymentConfirmation(
          orderUid,
          customerUid,
          additionalOrder
        );
        if (fetchPayment.data) {
          const dataResult = fetchPayment.data.data;
          const { moreOrder, ...rest } = dataResult;
          this.dataDetailPayment = dataResult;
          this.orderNumber = dataResult.orderNumber;
          let newOrder = [
            {
              ...rest,
              disable: true,
              checked: true,
            },
          ];
          if (moreOrder && moreOrder.length > 0) {
            const moreData = moreOrder.map(({ ...res }) => ({
              ...res,
              disable: false,
              checked: false,
            }));
            let orders = [...newOrder, ...moreData];
            this.orderData = orders;
            let total = 0;
            for (let i = 0; i < moreData.length; i++) {
              total += moreData[i].provider.package.variant.grandTotal;
            }
            this.nominal =
              total +
              dataResult.provider.package.variant.grandTotal +
              dataResult.payment.uniqueCode;
          } else {
            this.orderData = newOrder;
            this.nominal =
              rest.provider.package.variant.grandTotal +
              rest.payment.uniqueCode;
          }
        } else {
          throw new Error(fetchPayment);
        }
      } catch (error) {
        if (error.response?.status == 404) {
          this.$refs.snackbar.showSnackbar({
            message: `Order Anda Tidak Ditemukan / Sudah Terbayarkan dan sedang diproses `,
            className: '',
            color: 'bg-red-400',
            duration: 5000,
          });
          setTimeout(
            function () {
              this.$router.push('/');
            }.bind(this),
            5000
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
      const {
        nominal,
        bankCustomer,
        bankSeakun,
        imageFile,
        userName,
        time1,
      } = this;
      const nameFormat = /^[A-Za-z][A-Za-z\s]*$/;
      const nominalFormat = /^[0-9]*$/;
      let bankList = [];
      this.paymentFromList.forEach((item) => {
        bankList.push(item.bank);
      });
      let validateBank = bankList.filter((item) =>
        item.toLowerCase().includes(bankCustomer.toLowerCase())
      );
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
        paymentDate: {
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
        } else if (validateBank.length === 0) {
          errorTemp.bankCustomer = {
            isError: true,
            message:
              'Bank yang kamu cari tidak tersedia. Silakan pilih lainnya',
          };
          isValid = false;
        }
      }

      if (input === 'bankSeakun' || !input) {
        if (bankSeakun === 'Pilih Bank tujuan milik Seakun.id') {
          errorTemp.bankSeakun = {
            isError: true,
            message: 'Bank tujuan harus dipilih',
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

      if (input === 'paymentDate' || !input) {
        if (time1 === null) {
          errorTemp.paymentDate = {
            isError: true,
            message: 'Tanggal pembayaran harus diisi',
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
      const { PaymentService } = this;
      this.isLoadingSubmit = true;
      const formDataDigital = new FormData();
      for (let i = 0; i < this.orderData.length; i++) {
        formDataDigital.append('orderUid', this.orderData[i].orderUid);
      }
      formDataDigital.append('paymentTo', this.paymentToUid);
      formDataDigital.append('paymentFromBank', this.paymentFromUid);
      formDataDigital.append('paymentFromName', this.userName);
      formDataDigital.append('paymentAmount', parseInt(this.nominal));
      formDataDigital.append('paymentAt', moment(this.time1).unix());
      formDataDigital.append('file', this.imageFile);
      formDataDigital.append('customerUid', this.dataDetailPayment.customerUid);

      try {
        const fetchConfirmPayment = await PaymentService.createPaymentConfirmation(
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
        if (error.response?.status == 400) {
          this.$refs.snackbar.showSnackbar({
            message: `Order Anda Tidak Ditemukan / Sudah Terbayarkan dan sedang diproses `,
            className: '',
            color: 'bg-red-400',
            duration: 5000,
          });
          setTimeout(
            function () {
              this.$router.push('/');
            }.bind(this),
            5000
          );
        }
      }
      this.isLoadingSubmit = false;
    },
    toThankyouPage() {
      const {
        order_uid,
        customer_uid,
        additionalOrder,
      } = this.$router.history.current.query;
      const orderUids = `${order_uid},${additionalOrder}`;
      this.$router.push(
        `/thankyou?&order_uid=${orderUids}&customer_uid=${customer_uid}`
      );
    },
    getPaymentImage(file) {
      if (file) {
        this.isUpload = true;
        const fileExtension = this.getFileExtension(file.name);
        this.fileExtension = fileExtension;
        this.imageFile = file;

        if (fileExtension !== 'pdf') {
          // this.imageFile = {...this.imageFile,urlImage : URL.createObjectURL(this.imageFile) }
          const imageUpload = document.getElementById('previewImage');
          imageUpload.src = URL.createObjectURL(this.imageFile);
        } else {
          const imageUpload = document.getElementById('previewPdf');
          imageUpload.href = URL.createObjectURL(this.imageFile);
        }

        this.errorForm.uploadImage.isError = false;
      }
    },
    executeApiMailConfirmPayment() {
      const { SEAKUN_MAIL_API } = this;
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
        .post(`${SEAKUN_MAIL_API}/payment-confirm`, payload)
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
    getFileExtension(filename) {
      return filename.substring(filename.lastIndexOf('.') + 1);
    },
  },
};
</script>

<style lang="scss" scoped>
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

.block {
  display: block !important;
}
</style>
