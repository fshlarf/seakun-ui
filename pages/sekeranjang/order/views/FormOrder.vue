<template>
  <div class="max-w-[632px] mx-auto tn:pt-20 tn:px-4">
    <div
      role="button"
      @click="backToProductDetail"
      class="flex max-w-max space-x-2 items-center"
    >
      <img
        class="w-[32px] h-[32px]"
        src="/images/icons/atoms/back-arrow.svg"
        alt="go back icon"
      />
      <p class="text-[20px] tn:p-0 tn:m-0">Kembali</p>
    </div>

    <h1 class="text-[32px] font-bold tn:mt-6">Pesanan</h1>
    <p class="tn:mt-4">
      Silahkan isi terlebih dahulu sebelum melakukan pemesanan
    </p>

    <h3 class="text-[20px] font-bold tn:mt-6">Detail Produk</h3>
    <ProductOrderCard
      :is-loading="isLoadingProduct"
      :product="dataDetailProduct"
      class="tn:mt-4"
    />

    <h3 class="text-[20px] font-bold tn:mt-8">Detail Promo</h3>
    <PromoCard
      :is-loading="isLoadingProduct"
      :product="dataDetailProduct"
      class="tn:mt-4"
    />

    <h3 class="text-[20px] font-bold tn:mt-8">Data Pemesan</h3>
    <InputForm
      label="Nama Lengkap"
      placeholder="Masukkan nama lengkap"
      class="tn:mt-2 md:mt-4 text-[16px]"
      v-model="fullName"
      id="fullName"
      @change="setLocalStorage('fullName')"
      @keyup="validationForm('fullName')"
      :error="errorForm.fullName"
    />
    <InputForm
      label="Email"
      placeholder="cth. abc@gmail.com"
      class="tn:mt-2 md:mt-4 text-[16px]"
      v-model="email"
      id="email"
      @change="setLocalStorage('email')"
      @keyup="validationForm('email')"
      :error="errorForm.email"
    />

    <div class="tn:mt-4">
      <p class="tn:pb-2 tn:text-sm">
        Nomor Whatsapp (Pastikan nomor sudah benar dan aktif)
      </p>
      <div class="grid grid-cols-6 gap-2 items-center">
        <div class="tn:col-span-2 md:col-span-1">
          <ButtonDrop
            :btnText="codeNumber"
            @click="isShowCodeNumber = !isShowCodeNumber"
          />
        </div>
        <div class="tn:col-span-4 md:col-span-5">
          <InputForm
            placeholder="cth. 8123456789"
            v-model="phoneNumber"
            :error="errorForm.phoneNumber"
            id="phoneNumber"
            @change="setLocalStorage('phoneNumber')"
            @keyup="validationForm('phoneNumber')"
          />
        </div>
      </div>
      <div class="w-9/12 mt-1">
        <DropdownCodeNumber
          :dataList="internationalPhoneNumbers"
          :show="isShowCodeNumber"
          @onClikcItem="onClickItemCodeNumber"
        />
      </div>
    </div>

    <InputForm
      label="Alamat Lengkap"
      placeholder="Masukkan alamat lengkap"
      class="tn:mt-2 md:mt-4 text-[16px]"
      v-model="address"
      id="address"
      @change="setLocalStorage('address')"
      @keyup="validationForm('address')"
      :error="errorForm.address"
    />

    <hr class="tn:mt-6" />
    <div class="flex items-start space-x-2 tn:pt-2 tn:mt-4">
      <div class="cursor-pointer w-[24px]" @click="isAgreeTos = !isAgreeTos">
        <CheckedBox v-if="isAgreeTos" />
        <UncheckBox v-else />
      </div>
      <p>
        Menyetujui
        <a
          class="text-secondary font-bold ml-0 text-[14px]"
          href="/terms-of-use"
          target="_blank"
          >syarat & ketentuan</a
        >
        yang dibuat oleh Seakun
      </p>
    </div>

    <Button
      label="Ikut pre-order sekeranjang"
      variant="primary"
      :disabled="!isAgreeTos"
      class="font-bold tn:py-5 tn:mt-6 w-full"
      @click="onClickOrder"
    />
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
import CheckedBox from '~/assets/images/icon/checked-box.svg?inline';
import UncheckBox from '~/assets/images/icon/uncheck-box.svg?inline';
import ButtonDrop from '~/components/atoms/ButtonDropDownNew';
import DropdownCodeNumber from './DropdownCodeNumber.vue';
import ProductOrderCard from './ProductOrderCard.vue';
import PromoCard from './PromoCard.vue';
import { internationalPhoneNumbers } from '~/constants/code-phone.js';
import InputForm from '~/components/atoms/Input.vue';
import MasterService from '~/services/MasterServices.js';

export default {
  components: {
    Button,
    InputForm,
    ButtonDrop,
    DropdownCodeNumber,
    ProductOrderCard,
    CheckedBox,
    UncheckBox,
    PromoCard,
  },
  data() {
    return {
      internationalPhoneNumbers,
      MasterService,
      productUid: '',
      isLoadingProduct: true,
      dataDetailProduct: {},
      isShowCodeNumber: false,
      codeNumber: '+62',
      codePhone: 62,
      fullName: '',
      email: '',
      phoneNumber: '',
      address: '',
      isAgreeTos: false,
      errorForm: {
        fullName: {
          isError: false,
          message: '',
        },
        email: {
          isError: false,
          message: '',
        },
        phoneNumber: {
          isError: false,
          message: '',
        },
        address: {
          isError: false,
          message: '',
        },
      },
      isFormValid: true,
    };
  },
  mounted() {
    this.MasterService = new MasterService(this);
    const { product_id } = this.$router.history.current.query;
    this.productUid = product_id;
    this.getProductByUid(this.productUid);
    this.setFieldValueFromLocalStorage();
  },
  methods: {
    async getProductByUid(uid) {
      this.isLoadingProduct = true;
      const { MasterService } = this;
      try {
        const fetchDetailProduct = await MasterService.getProductByUid(uid);
        if (fetchDetailProduct.data) {
          this.dataDetailProduct = fetchDetailProduct.data.data;
        } else {
          throw new Error(fetchDetailProduct);
        }
      } catch (e) {
        console.log(e);
      }
      this.isLoadingProduct = false;
    },
    backToProductDetail() {
      this.$router.push(
        `/sekeranjang/product-detail?product_id=${this.productUid}`
      );
    },
    onClickOrder() {
      this.validationForm();
      if (this.isFormValid) {
        this.$router.push(
          `/sekeranjang/order-success?product_id=${this.productUid}`
        );
      }
    },
    toLocalDate(date) {
      return moment(date).locale('id').format('D MMMM YYYY');
    },
    onClickItemCodeNumber(item) {
      this.codeNumber = item.dialCode;
      this.codePhone = item.dialCode.slice(1);
      this.isShowCodeNumber = false;
    },
    validationForm(input) {
      const nameFormat = /^[A-Za-z][A-Za-z\s]*$/;
      const idnPhoneFormat = /^[8][0-9]*$/;
      const globalPhoneFormat = /^[0-9]*$/;
      if (input === 'fullName' || !input) {
        if (this.fullName === '') {
          this.errorForm.fullName = {
            isError: true,
            message: 'Nama harus diisi',
          };
          this.isFormValid = false;
        } else if (!this.fullName.match(nameFormat)) {
          this.errorForm.fullName = {
            isError: true,
            message: 'Format nama salah',
          };
          this.isFormValid = false;
        } else {
          this.errorForm.fullName.isError = false;
          this.isFormValid = true;
        }
      }
      if (input === 'email' || !input) {
        if (this.email === '') {
          this.errorForm.email = {
            isError: true,
            message: 'Email harus diisi',
          };
          this.isFormValid = false;
        } else if (!this.validateEmail(this.email)) {
          this.errorForm.email = {
            isError: true,
            message: 'Format email salah',
          };
          this.isFormValid = false;
        } else {
          this.errorForm.email.isError = false;
          this.isFormValid = true;
        }
      }
      if (input === 'phoneNumber' || !input) {
        const phoneNumber = this.phoneNumber;
        if (
          this.codeNumber === '+62' &&
          phoneNumber.length > 1 &&
          phoneNumber.charAt(0) == '0'
        ) {
          this.phoneNumber = phoneNumber.slice(1, phoneNumber.length);
        }
        if (this.phoneNumber === '') {
          this.errorForm.phoneNumber = {
            isError: true,
            message: 'Nomor whatsapp harus diisi',
          };
          this.isFormValid = false;
        } else if (
          this.codeNumber === '+62' &&
          !this.phoneNumber.match(idnPhoneFormat)
        ) {
          this.errorForm.phoneNumber = {
            isError: true,
            message: 'Format nomor whatsapp salah. cth: 81234567890',
          };
          this.isFormValid = false;
        } else if (
          this.codeNumber !== '+62' &&
          !this.phoneNumber.match(globalPhoneFormat)
        ) {
          this.errorForm.phoneNumber = {
            isError: true,
            message: 'Format nomor whatsapp salah',
          };
          this.isFormValid = false;
        } else {
          this.errorForm.phoneNumber.isError = false;
          this.isFormValid = true;
        }
      }
      if (input === 'address' || !input) {
        if (this.address === '') {
          this.errorForm.address = {
            isError: true,
            message: 'Alamat harus diisi',
          };
          this.isFormValid = false;
        } else {
          this.errorForm.address.isError = false;
          this.isFormValid = true;
        }
      }
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    setFieldValueFromLocalStorage() {
      const registeredProductCustomer = JSON.parse(
        localStorage.getItem('registered_product_customer')
      );
      if (registeredProductCustomer) {
        this.fullName = registeredProductCustomer.fullName;
        this.email = registeredProductCustomer.email;
        this.phoneNumber = registeredProductCustomer.phoneNumber;
        this.address = registeredProductCustomer.address;
      }
    },
    setLocalStorage(id) {
      const dataOrderProduct = {
        fullName: this.fullName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        address: this.address,
      };
      localStorage.setItem(
        'registered_product_customer',
        JSON.stringify(dataOrderProduct)
      );
    },
  },
};
</script>

<style></style>
