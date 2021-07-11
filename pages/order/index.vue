<template>
  <div class="container-payment max-w-2xl w-full mx-auto md:mt-10 px-4">
    <div class="tn:pt-8 md:pt-10 px-2">
      <h2 class="md:text-2xl tn:text-lg font-bold">Pesanan</h2>
      <p class="md:text-lg tn:text-base mt-3">
        Silahkan isi terlebih dahulu sebelum melakukan pemesanan.
      </p>
    </div>
    <div class="flex justify-between items-center px-2 mt-10 mb-4">
      <p class="md:text-xl tn:text-lg font-bold">Produk Yang dipesan</p>
      <p
        class="md:text-sm tn:text-base text-green-seakun cursor-pointer"
        @click="onClickChangePacket"
      >
        Ubah Paket
      </p>
    </div>
    <div>
      <ProductHighLightLoading v-if="isLoadingProduct" class="mt-4" />
      <div v-else v-for="(provider, id) in dataProviders" :key="id">
        <div v-for="(detail, variantId) in provider.variants" :key="variantId">
          <div v-if="detail && detail.uid === variantUid">
            <ProductHighLight
              :provider="provider.slug"
              :isLoading="isLoadingProduct"
              :packageName="detail.name"
              :grandTotal="longSubcribe.grandTotal"
              :total-month="longSubcribe.month"
            />
          </div>
        </div>
      </div>

      <div class="mt-4">
        <p class="pb-1 tn:text-sm">Pilih Masa Berlangganan</p>
        <ButtonDrop
          :btnText="longSubcribe.name"
          :disabled="dataVariants.length <= 0"
          @click="isShowPriceList = !isShowPriceList"
        />
        <div class="w-full">
          <DropDownPricesListSubcribe
            :show="isShowPriceList"
            :dataList="dataVariants"
            @onClikcItem="onClickItemPrice"
          />
        </div>
      </div>
    </div>
    <div class="mt-6 pt-2">
      <h2 class="md:text-xl tn:text-lg font-bold">Informasi Pengguna</h2>
    </div>
    <div class="order-form">
      <InputForm
        label="Nama lengkap"
        placeholder="Masukkan nama"
        class="mt-4"
        v-model="userName"
        id="name"
        @change="setLocalStorage('name')"
        @keyup="validationForm('fullname')"
        :error="errorForm.name"
      />
      <InputForm
        label="Email"
        class="mt-4"
        placeholder="Masukkan email"
        :error="errorForm.email"
        v-model="email"
        id="email"
        @change="setLocalStorage('email')"
        @keyup="validationForm('userEmail')"
      />
      <div class="mt-4">
        <p class="pb-1 tn:text-sm">Nomor telepon</p>
        <div class="grid grid-cols-8 gap-2 items-center">
          <div class="col-span-2">
            <ButtonDrop
              :btnText="codeNumber"
              @click="isShowCodeNumber = !isShowCodeNumber"
            />
          </div>
          <div class="col-span-6">
            <InputForm
              placeholder="Masukkan nomor whatsapp"
              v-model="phoneNumber"
              :error="errorForm.phoneNumber"
              id="phone"
              @change="setLocalStorage('phone')"
              @keyup="validationForm('userPhone')"
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
      <div class="ml-2 mt-6">
        <label
          class="space-x-1 md:text-base tn:text-sm"
          style="display: inline-block"
          ><input
            v-model="isAgreeTos"
            style="vertical-align: middle"
            type="checkbox"
            class="tn:mr-1 tn:-mt-1"
          />
          Menyetujui
          <a class="text-green-seakun ml-0" href="/terms-of-use" target="_blank"
            >aturan</a
          >
          yang dibuat oleh Seakun.id
        </label>
      </div>

      <Button
        :disabled="!isAgreeTos"
        @click="submitOrder"
        class="w-full bg-green-seakun text-white py-2 mt-8"
        label="Konfirmasi pesanan"
        :is-loading="isShowLoading"
      />

      <div v-for="(providers, id) in dataProviders" :key="id">
        <ModalPackages
          v-if="provider === providers.slug"
          :is-show="isShowModalPackages"
          :provider="providers"
          @on-close="onCloseModalPackages"
          :slug="provider"
          @choose-packet="choosePacket"
          :is-loading="isLoadingVariant"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import OrderService from '~/services/OrderServices.js';
import MasterService from '~/services/MasterServices.js';
import ButtonDrop from '~/components/atoms/ButtonDropDownNew';
import ProductHighLightLoading from '~/components/mollecules/ProductHighlightLoading.vue';
import ProductHighLight from '~/components/mollecules/ProductHighLight.vue';
import InputForm from '~/components/atoms/Input.vue';
import DropdownCodeNumber from './views/DropdownCodeNumber.vue';
// import Voucher from './views/Voucher.vue';
import Button from '~/components/atoms/Button';
import DropDownPricesListSubcribe from './views/DropDownPricesListSubcribe.vue';
import { internationalPhoneNumbers } from '~/constants/code-phone.js';
import {
  currencyFormat,
  capitalizeFirstLetter,
  fullDate,
} from '~/helpers/word-transformation.js';
import ModalPackages from '~/components/organisms/ProductSection/views/ModalPackages.vue';
import moment from 'moment';

export default {
  name: 'OrderPage',
  layout: 'new',
  components: {
    ProductHighLightLoading,
    ProductHighLight,
    InputForm,
    ButtonDrop,
    Button,
    DropdownCodeNumber,
    DropDownPricesListSubcribe,
    // Voucher,
    ModalPackages,
  },
  data: () => ({
    OrderService,
    MasterService,
    provider: '',
    detailOrder: {
      isHost: 0,
      isPo: 0,
    },
    email: '',
    userName: '',
    phoneNumber: '',
    longSubcribe: {
      name: 'Pilih Masa Berlangganan',
      month: 0,
      price: 0,
      grandTotal: 0,
    },
    isShowLoading: false,
    codeNumber: '+62',
    codePhone: 62,
    isShowCodeNumber: false,
    isShowPriceList: false,
    isAgreeTos: false,
    internationalPhoneNumbers,
    currencyFormat,
    errorForm: {
      email: {
        isError: false,
        message: '',
      },
      name: {
        isError: false,
        message: '',
      },
      phoneNumber: {
        isError: false,
        message: '',
      },
    },
    price: 0,
    subcriptionDuration: 1,
    isShowModalPackages: false,
    dataVariants: [],
    dataProviders: [],
    paramGetProviderList: {
      page: 1,
      limit: 20,
    },
    variantUid: '',
    packageUid: '',
    isLoadingProduct: false,
    isLoadingVariant: false,
    registeredUser: {
      name: '',
      email: '',
      phone: '',
    },
  }),
  watch: {
    codeNumber() {
      this.validationForm('userPhone');
    },
  },
  mounted() {
    this.OrderService = new OrderService(this);
    this.MasterService = new MasterService(this);
    this.getProviders();
    const {
      provider,
      variant_id,
      package_id,
    } = this.$router.history.current.query;
    if (provider) {
      this.provider = provider;
      this.variantUid = variant_id;
      this.packageUid = package_id;
      this.getDetailVariant(this.packageUid);
    }
    this.setFieldValueFromLocalStorage();
  },
  methods: {
    async getProviders() {
      this.isLoadingProduct = true;
      const { MasterService, paramGetProviderList } = this;
      try {
        const fetchProviderList = await MasterService.getProvider(
          paramGetProviderList
        );
        if (fetchProviderList.data) {
          const { data } = fetchProviderList.data;
          this.dataProviders = data;
          this.dataProviders.forEach((element) => {
            if (element.slug === this.provider) {
              element.variants.forEach((variant) => {
                if (variant.uid === this.variantUid) {
                  this.detailOrder = {
                    isHost: variant.iHost,
                    isPo: variant.isPo,
                  };
                }
              });
            }
          });
        } else {
          throw new Error(fetchProviderList);
        }
      } catch (error) {
        console.log(error);
      }
      this.isLoadingProduct = false;
    },
    async getDetailVariant(uid) {
      this.isLoadingVariant = true;
      const { MasterService } = this;
      try {
        const fetchDetailVariant = await MasterService.getVariantByPackageUid(
          uid
        );
        if (fetchDetailVariant.data) {
          const { data } = fetchDetailVariant.data;
          this.dataVariants = data;
          const rupiah = currencyFormat(this.dataVariants[0].grandTotal);
          this.longSubcribe = {
            name: `${this.dataVariants[0].duration} bulan ( ${rupiah} )`,
            month: this.dataVariants[0].duration,
            price: this.dataVariants[0].price,
            grandTotal: this.dataVariants[0].grandTotal,
          };
        } else {
          throw new Error(fetchDetailVariant);
        }
      } catch (error) {
        console.log(error);
      }
      this.isLoadingVariant = false;
    },
    onClickItemCodeNumber(item) {
      this.codeNumber = item.dialCode;
      this.codePhone = item.dialCode.slice(1);
      this.isShowCodeNumber = false;
    },
    onClickItemPrice(item) {
      const rupiah = currencyFormat(item.grandTotal);
      this.longSubcribe = {
        name: `${item.duration} bulan ( ${rupiah} )`,
        month: item.duration,
        price: item.price,
        grandTotal: item.grandTotal,
      };
      this.price = item.grandTotal;
      this.subcriptionDuration = parseInt(item.duration);
      this.isShowPriceList = false;
    },
    validationForm(input) {
      const { email, userName, phoneNumber, errorForm } = this;
      const nameFormat = /^[A-Za-z][A-Za-z\s]*$/;
      const idnPhoneFormat = /^[8][0-9]*$/;
      const globalPhoneFormat = /^[0-9]*$/;
      let isValid = true;
      let errorTemp = {
        email: {
          isError: false,
          message: '',
        },
        name: {
          isError: false,
          message: '',
        },
        phoneNumber: {
          isError: false,
          message: '',
        },
      };

      if (input === 'userEmail' || !input) {
        if (email === '') {
          errorTemp.email = {
            isError: true,
            message: 'Email harus diisi',
          };
          isValid = false;
        } else if (!this.validateEmail(email)) {
          errorTemp.email = {
            isError: true,
            message: 'Format email salah. cth: john@mail.com',
          };
          isValid = false;
        }
      }

      if (input === 'fullname' || !input) {
        if (userName === '') {
          errorTemp.name = {
            isError: true,
            message: 'Nama lengkap harus diisi',
          };
          isValid = false;
        } else if (!userName.match(nameFormat)) {
          errorTemp.name = {
            isError: true,
            message: 'Format nama salah',
          };
          isValid = false;
        }
      }

      if (input === 'userPhone' || !input) {
        if (phoneNumber === '') {
          errorTemp.phoneNumber = {
            isError: true,
            message: 'Nomor whatsapp harus diisi',
          };
          isValid = false;
        } else if (
          this.codeNumber === '+62' &&
          !phoneNumber.match(idnPhoneFormat)
        ) {
          errorTemp.phoneNumber = {
            isError: true,
            message: 'Format nomor whatsapp salah. cth: 81234567890',
          };
          isValid = false;
        } else if (
          this.codeNumber !== '+62' &&
          !phoneNumber.match(globalPhoneFormat)
        ) {
          errorTemp.phoneNumber = {
            isError: true,
            message: 'Format nomor whatsapp salah. cth: 81234567890',
          };
          isValid = false;
        }
      }

      this.errorForm = { ...errorTemp };
      return isValid;
    },
    submitOrder() {
      if (this.validationForm()) {
        this.onSubmitOrder();
      }
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    async onSubmitOrder() {
      const { OrderService } = this;
      this.isShowLoading = true;
      let payload = {
        name: capitalizeFirstLetter(this.userName),
        email: this.email,
        phoneNumber: `${this.codePhone}${this.phoneNumber}`,
        packageUid: this.packageUid,
        packageVariantUid: this.variantUid,
        subcriptionDuration: this.subcriptionDuration,
        ispreorder: this.detailOrder.isPo === 1,
        isHost: this.detailOrder.isHost,
        userhost: this.detailOrder.isHost === 1,
        voucherUid: '',
        password: 'sodagembira',
        ispreorder: this.detailOrder.isPo || false,
      };
      try {
        const fetchCreateOrder = await OrderService.createOrder(payload);
        if (fetchCreateOrder.data) {
          const dataResult = fetchCreateOrder.data.data;
          payload = {
            ...payload,
            variantName: dataResult.packageVariantName,
            customerUid: dataResult.customerUid,
            orderUid: dataResult.orderUid,
          };
          localStorage.setItem(
            'swo',
            JSON.stringify({ ...dataResult, createdAt: moment().unix() })
          );
          this.redirectPage(payload);
          // this.executeApiMailSeakun(payload)
        } else {
          throw new Error(fetchCreateOrder);
        }
      } catch (error) {
        console.log(error);
      }
      this.isShowLoading = false;
    },
    redirectPage(payload) {
      this.$router.push({
        path: this.setPathToRedirect(payload),
        query: {
          type: 'digital',
          provider: this.provider,
          variant_id: this.variantUid,
          variant_name: payload.variantName,
          isHost: payload.isHost,
          duration: this.subcriptionDuration,
          price: this.longSubcribe.grandTotal,
          holder: this.userName,
          email: this.email,
          whatsapp: this.codePhone + this.phoneNumber,
          customerUid: payload.customerUid,
          orderUid: payload.orderUid,
          // voucher: this.isVoucherValid ? this.voucher : '',
        },
      });
    },
    // executeApiMailSeakun(payload) {
    //   let newPayload = {
    //     ...payload,
    //     payment_type: 'month',
    //   };
    //   axios
    //     .post('https://seakun-mail-api-v2.herokuapp.com/', newPayload)
    //     .then((res) => {
    //       this.isDisableBtn = false;
    //       // Redirect to thankyou page when successfully registration
    //       this.$router.push({
    //         path: this.setPathToRedirect(newPayload),
    //         query: {
    //           type: 'digital',
    //           provider: this.provider,
    //           packet_id: this.packageId,
    //           duration: this.subcriptionDuration,
    //           price: this.price,
    //           holder: this.userName,
    //           email: this.email,
    //           whatsapp: this.codeNumber + this.phoneNumber,
    //           // voucher: this.isVoucherValid ? this.voucher : '',
    //         },
    //       });
    //       this.isShowLoading = false;
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       this.isShowLoading = false;
    //     });
    // },
    setPathToRedirect(payload) {
      if (payload.userhost) {
        return '/thankyou/user-host';
      } else if (payload.ispreorder) {
        return '/thankyou/pre-order';
      } else {
        return '/payment';
      }
    },
    onCloseModalPackages() {
      this.isShowModalPackages = false;
    },
    onClickChangePacket() {
      this.isShowModalPackages = true;
    },
    choosePacket(packet) {
      this.$router.push(
        `/order?provider=${this.provider}&variant_id=${packet.uid}&package_id=${packet.packageUid}`
      );
      this.variantUid = packet.uid;
      this.packageUid = packet.packageUid;
      this.getDetailVariant(this.packageUid);
      this.isShowModalPackages = false;
    },
    setFieldValueFromLocalStorage() {
      const registeredUser = JSON.parse(
        localStorage.getItem('registered_user')
      );
      if (registeredUser) {
        this.userName = registeredUser.name;
        this.email = registeredUser.email;
        this.phoneNumber = registeredUser.phone;
      }
    },
    setLocalStorage(id) {
      const input = document.getElementById(id);
      input.addEventListener('change', (event) => {
        this.registeredUser[id] = event.target.value;
        localStorage.setItem(
          'registered_user',
          JSON.stringify(this.registeredUser)
        );
      });
    },
  },
};
</script>

<style lang="scss">
.form-check-input {
  width: 18px;
  height: 16px;
}
.voucher {
  background: #efefef;
  font-size: 16px;
  &__label {
    svg {
      width: 16px;
      display: inline-block;
      height: auto;
    }
  }
  &__action {
    svg {
      width: 16px;
      display: inline-block;
      height: auto;
      fill: rgba(107, 114, 128, var(--tw-text-opacity));
    }
  }
}
</style>
