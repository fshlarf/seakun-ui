<template>
  <div class="max-w-2xl w-full mx-auto pt-4 px-4">
    <div class="">
      <h2 class="md:text-2xl tn:text-lg font-bold">Pesanan</h2>
      <p class="md:text-lg tn:text-base tn:mt-1 md:mt-3">
        Silahkan isi terlebih dahulu sebelum melakukan pemesanan.
      </p>
    </div>
    <div
      class="flex justify-between items-center tn:mt-4 md:mt-8 tn:mb-2 md:mb-4"
    >
      <p class="md:text-xl tn:text-lg font-bold">Produk yang dipesan</p>
      <p
        class="md:text-sm tn:text-base text-green-seakun cursor-pointer"
        @click="onClickChangePacket"
      >
        Ubah Paket
      </p>
    </div>
    <div>
      <ProductHighLightLoading v-if="isLoadingProduct" class="mt-4" />
      <ProductHighLight
        v-else
        :provider="providerSlug"
        :isLoading="isLoadingProduct"
        :packageName="`${packageName} - ${variantName}`"
        :grandTotal="longSubcribe.grandTotal"
        :total-month="longSubcribe.month"
      />
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
    <div v-if="orderWarning" class="pt-4">
      <WarningInfo class="w-full" :text="orderWarning" />
    </div>
    <div class="mt-6 pt-2">
      <h2 class="md:text-xl tn:text-lg font-bold">Informasi Pengguna</h2>
    </div>
    <div class="order-form">
      <InputForm
        label="Nama lengkap"
        placeholder="Masukkan nama"
        class="tn:mt-2 md:mt-4"
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
        <p class="pb-1 tn:text-sm">
          Nomor whatsapp (Pastikan nomor sudah benar dan aktif)
        </p>
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
        @click="onClickConfirmData"
        class="w-full bg-green-seakun text-white py-2 tn:mt-4 md:mt-6"
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
          @choosePacket="choosePacket"
          :is-loading="isLoadingVariant"
        />
      </div>
    </div>

    <ModalDataConfirmation
      :show-modal="isShowModalConfirmation"
      :data-order="dataCustomer"
      :is-loading="isShowLoading"
      @clickSubmit="submitDataOrder"
      @onClose="closeModalConfirmation"
    />
    
    <ModalBlackListWarning
      :show-modal="isShowModalBlackList"
      @onClose="closeModalBlackList"
    />
  </div>
</template>

<script>
import { setNameProvider } from '~/helpers/word-transformation.js';
import {
  SEAKUN_API,
  SEAKUN_PACKAGE_API,
  SEAKUN_MAIL_API,
} from '~/constants/api.js';
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
import ModalDataConfirmation from './views/ModalDataConfirmation.vue';
import ModalBlackListWarning from './views/ModalBlackListWarning.vue';
import moment from 'moment';
import WarningInfo from '~/components/mollecules/WarningInfo.vue';

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
    ModalDataConfirmation,
    ModalBlackListWarning,
    WarningInfo,
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
      variantUid: '',
      name: 'Pilih Masa Berlangganan',
      month: 0,
      price: 0,
      payment: 0,
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
    dataCustomer: {
      name: '',
      email: '',
      codeNumber: '',
      phoneNumber: '',
    },
    providerSlug: '',
    packageName: '',
    variantName: '',
    orderWarning: '',
    isShowModalConfirmation: false,
    isShowModalBlackList: false,
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

      if (provider === 'spotify') {
        this.orderWarning =
          'Terkait aturan yang berlaku dari Spotify, sebelum melakukan pendaftaran pastikan akun Spotify kamu tidak menggunakan domain pribadi dan belum pernah bergabung ke family lain selama 12 bulan terakhir.';
      } else if (provider === 'youtube') {
        this.orderWarning =
          'Terkait aturan yang berlaku dari Youtube, sebelum melakukan pendaftaran pastikan akun Youtube kamu belum pernah berpindah family selama 12 bulan terakhir.';
      } else if (provider === 'google-one') {
        this.orderWarning =
          'Terkait aturan yang berlaku dari Google, sebelum melakukan pendaftaran pastikan akun Google kamu belum pernah berpindah family selama 12 bulan terakhir.';
      } else if (provider === 'apple-one') {
        this.orderWarning =
          'Terkait aturan yang berlaku dari Apple, sebelum melakukan pendaftaran pastikan akun Apple kamu belum pernah berpindah family selama 12 bulan terakhir.';
      }
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
              this.providerSlug = element.slug;
              element.variants.forEach((variant) => {
                if (variant.uid === this.variantUid) {
                  this.packageName = variant.packageName;
                  this.variantName = variant.name;
                  this.detailOrder = {
                    isHost: variant.isHost,
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

          const variantSelected = this.dataVariants.find(
            (variant) => this.variantUid == variant.uid
          );

          if (variantSelected) {
            const rupiah = currencyFormat(variantSelected.grandTotal);
            this.longSubcribe = {
              variantUid: variantSelected.uid,
              name: `${
                variantSelected.duration === 12
                  ? `1 tahun ( ${rupiah} )`
                  : `${variantSelected.duration} bulan ( ${rupiah} )`
              } `,
              month: variantSelected.duration,
              price: variantSelected.price,
              grandTotal: variantSelected.grandTotal,
            };
          } else {
            const rupiah = currencyFormat(this.dataVariants[0].grandTotal);
            this.longSubcribe = {
              variantUid: this.dataVariants[0].uid,
              name: `${
                this.dataVariants[0].duration === 12
                  ? `1 tahun ( ${rupiah} )`
                  : `${this.dataVariants[0].duration} bulan ( ${rupiah} )`
              } `,
              month: this.dataVariants[0].duration,
              price: this.dataVariants[0].price,
              grandTotal: this.dataVariants[0].grandTotal,
            };
          }
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
        variantUid: item.uid,
        name: `${
          item.duration === 12
            ? `1 tahun ( ${rupiah} )`
            : `${item.duration} bulan ( ${rupiah} )`
        }`,
        month: item.duration,
        price: item.price,
        grandTotal: item.grandTotal,
      };
      this.price = item.grandTotal;
      this.subcriptionDuration = parseInt(item.duration);
      this.isShowPriceList = false;
      this.variantName = item.packageName;
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
    submitDataOrder() {
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
        packageVariantUid: this.longSubcribe.variantUid,
        ispreorder: this.detailOrder.isPo === 1,
        userhost: this.detailOrder.isHost === 1,
        voucherUid: '',
      };
      try {
        const fetchCreateOrder = await OrderService.createOrder(payload);
        if (fetchCreateOrder.data) {
          const dataResult = fetchCreateOrder.data.data;
          payload = {
            ...payload,
            customerUid: dataResult.customerUid,
            orderUid: dataResult.orderUid,
            type: dataResult.provider.type,
            redirectUrl: dataResult.redirectUrl,
          };
          localStorage.setItem(
            'swo',
            JSON.stringify({ ...dataResult, createdAt: moment().unix() })
          );
          this.redirectPage(payload);
        } else {
          throw new Error(fetchCreateOrder);
        }
      } catch (error) {
        if (error.response.data.message.includes('blocked customer')) {
          this.isShowModalConfirmation = false;
          this.isShowModalBlackList = true;
        }
        console.log(error);
      }
      this.isShowLoading = false;
    },
    redirectPage(payload) {
      if (!payload.userhost && !payload.ispreorder) {
        window.location.href = payload.redirectUrl;
      } else {
        this.$router.push({
          path: this.setPathToRedirect(payload),
          query: {
            type: payload.type,
            order_uid: payload.orderUid,
            customer_uid: payload.customerUid,
          },
        });
        localStorage.removeItem('swo');
      }
    },
    setPathToRedirect(payload) {
      if (payload.userhost) {
        return '/thankyou/user-host';
      }
      if (payload.ispreorder) {
        return '/thankyou/pre-order';
      }
    },
    onClickConfirmData() {
      this.dataCustomer = {
        name: this.userName,
        email: this.email,
        codeNumber: this.codeNumber,
        phoneNumber: this.phoneNumber,
      };
      if (this.validationForm()) {
        this.isShowModalConfirmation = true;
      }
    },
    onCloseModalPackages() {
      this.isShowModalPackages = false;
    },
    closeModalConfirmation() {
      this.isShowModalConfirmation = false;
    },
    closeModalBlackList() {
      this.isShowModalBlackList = false;
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
      this.packageName = packet.packageName;
      this.variantName = packet.name;
      this.detailOrder = {
        isHost: packet.isHost,
        isPo: packet.isPo,
      };
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
      const { userName, email, phoneNumber } = this;
      const dataRegister = {
        name: userName,
        email,
        phone: phoneNumber,
      };
      localStorage.setItem('registered_user', JSON.stringify(dataRegister));
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
