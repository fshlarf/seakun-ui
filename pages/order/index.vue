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
        v-if="!providerList.loading"
        class="md:text-sm tn:text-base text-green-seakun cursor-pointer"
        @click="onClickChangePacket"
      >
        Ubah Paket
      </p>
    </div>
    <div>
      <ProductHighLightLoading
        v-if="dataListVariant.loading"
        class="tn:mt-3 md:mt-4"
      />
      <VariantCard
        v-else
        :data-variant="dataCardVariant"
        :is-loading="dataListVariant.loading"
      />
      <div class="mt-4">
        <p class="pb-1 tn:text-sm">Pilih Masa Berlangganan</p>
        <ButtonDrop
          :btnText="dataCardVariant.buttonText"
          :disabled="dataListVariant.list && dataListVariant.list.length <= 0"
          @click="isShowPriceList = !isShowPriceList"
        />
        <div class="w-full">
          <DropDownPricesListSubcribe
            :show="isShowPriceList"
            :dataList="dataListVariantActive"
            @onClikcItem="onClickVariantPrice"
          />
        </div>
      </div>
    </div>
    <div v-if="providerRules" class="pt-4">
      <WarningInfo class="w-full" :text="providerRules" />
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

      <div class="flex items-center space-x-2 tn:mt-3 tn:mt-6">
        <div class="cursor-pointer w-[24px]" @click="isAgreeTos = !isAgreeTos">
          <CheckedBox v-if="isAgreeTos" />
          <UncheckBox v-else />
        </div>
        <p class="tn:text-sm md:text-base">
          Menyetujui
          <a class="text-green-seakun ml-0" href="/terms-of-use" target="_blank"
            >aturan</a
          >
          yang dibuat oleh Seakun.id
        </p>
      </div>

      <Button
        :disabled="!isAgreeTos"
        @click="onClickConfirmData"
        class="w-full bg-green-seakun text-white py-3 tn:mt-3 md:mt-4"
        label="Konfirmasi pesanan"
        :is-loading="isLoadingCreateOrder"
      />

      <ModalPackages
        :is-show="isShowModalPackages"
        :provider="selectedProvider"
        :slug="selectedProvider.slug"
        :is-loading="dataListVariant.loading"
        @onClose="onCloseModalPackages"
        @choosePacket="selectVariant"
      />
    </div>

    <ModalDataConfirmation
      :show-modal="isShowModalConfirmation"
      :data-order="dataConfirmation"
      :is-loading="isLoadingCreateOrder"
      @clickSubmit="submitDataOrder"
      @onClose="closeModalConfirmation"
    />

    <ModalOrderTimeout
      :show-modal="isShowModalOrderTimeout"
      :data-order="dataHelperOrder"
      :is-loading="isLoadingCreateOrder"
      @onClose="closeModalOrderTiimeout"
    />

    <ModalBlackListWarning
      :show-modal="isShowModalBlackList"
      @onClose="closeModalBlackList"
    />
  </div>
</template>

<script>
import ButtonDrop from '~/components/atoms/ButtonDropDownNew';
import ProductHighLightLoading from '~/components/mollecules/ProductHighlightLoading.vue';
import ProductHighLight from '~/components/mollecules/ProductHighLight.vue';
import InputForm from '~/components/atoms/Input.vue';
import DropdownCodeNumber from './views/DropdownCodeNumber.vue';
import Button from '~/components/atoms/Button';
import DropDownPricesListSubcribe from './views/DropDownPricesListSubcribe.vue';
import { internationalPhoneNumbers } from '~/constants/code-phone.js';
import {
  currencyFormat,
  capitalizeFirstLetter,
} from '~/helpers/word-transformation.js';
import ModalPackages from '~/components/organisms/ProductSection/views/ModalPackages.vue';
import ModalDataConfirmation from './views/ModalDataConfirmation.vue';
import ModalBlackListWarning from './views/ModalBlackListWarning.vue';
import WarningInfo from '~/components/mollecules/WarningInfo.vue';
import ModalOrderTimeout from './views/ModalOrderTimeout.vue';
import VariantCard from './views/VariantCard.vue';
import { mapGetters, mapActions } from 'vuex';
import CheckedBox from '~/assets/images/icon/checked-box.svg?inline';
import UncheckBox from '~/assets/images/icon/uncheck-box.svg?inline';

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
    ModalPackages,
    ModalDataConfirmation,
    ModalBlackListWarning,
    WarningInfo,
    ModalOrderTimeout,
    VariantCard,
    CheckedBox,
    UncheckBox,
  },
  data: () => ({
    email: '',
    userName: '',
    phoneNumber: '',
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
    isShowModalPackages: false,
    dataConfirmation: {
      name: '',
      email: '',
      codeNumber: '',
      phoneNumber: '',
    },
    providerRules: '',
  }),
  watch: {
    codeNumber() {
      this.validationForm('userPhone');
    },
  },
  computed: {
    ...mapGetters({
      providerList: 'getProviders',
      selectedProvider: 'getSelectedProvider',
      dataListVariant: 'getListVariant',
      dataCardVariant: 'getDataCardVariant',
      selectedParam: 'getSelectedParam',
      dataHelperOrder: 'getDataHelperOrder',
      isShowModalConfirmation: 'getShowModalConfirmation',
      isShowModalOrderTimeout: 'getShowModalOrderTimeout',
      isShowModalBlackList: 'getShowModalBlackList',
      isLoadingCreateOrder: 'getLoadingCreateOrder',
    }),
    dataListVariantActive() {
      let activeVariants = []
      this.dataListVariant.list.forEach(variant => {
        if (variant.active) {
          activeVariants.push(variant)
        }
      })
      return activeVariants
    }
  },
  mounted() {
    const {
      provider,
      variant_id,
      package_id,
    } = this.$router.history.current.query;
    if (provider) {
      if (!this.selectedProvider.uid) {
        this.getProviderList(provider);
      }
      const queryParam = {
        providerSlug: provider,
        packageUid: package_id,
        variantUid: variant_id,
      };
      this.setSelectedParam(queryParam);
      this.setProviderRules(provider);
      this.getListVariants(package_id);
    }
    this.setFieldValueFromLocalStorage();
  },
  methods: {
    ...mapActions({
      getProviderList: 'fetchProvider',
      setSelectedParam: 'setSelectedParam',
      getListVariants: 'fetchListVariant',
      setDataCardVariant: 'setDataCardVariant',
      setModalConfirmation: 'setModalConfirmation',
      setModalBlackList: 'setModalBlackList',
      setModalOrderTimeout: 'setModalOrderTimeout',
      createOrder: 'createOrder',
    }),
    setProviderRules(provider) {
      if (provider === 'spotify') {
        this.providerRules =
          'Terkait aturan yang berlaku dari Spotify, sebelum melakukan pendaftaran pastikan akun Spotify kamu belum pernah bergabung ke family lain selama 12 bulan terakhir.';
      } else if (provider === 'youtube') {
        this.providerRules =
          'Terkait aturan yang berlaku dari Youtube, sebelum melakukan pendaftaran pastikan akun Youtube kamu belum pernah berpindah family selama 12 bulan terakhir.';
      } else if (provider === 'google-one') {
        this.providerRules =
          'Terkait aturan yang berlaku dari Google, sebelum melakukan pendaftaran pastikan akun Google kamu belum pernah berpindah family selama 12 bulan terakhir.';
      } else if (
        provider === 'apple-music' ||
        provider === 'apple-one' ||
        provider === 'apple-tv' ||
        provider === 'apple-one-premier'
      ) {
        this.providerRules =
          'Terkait aturan yang berlaku dari Apple, sebelum melakukan pendaftaran pastikan akun Apple kamu belum pernah berpindah family selama 12 bulan terakhir.';
      }
    },
    onClickItemCodeNumber(item) {
      this.codeNumber = item.dialCode;
      this.codePhone = item.dialCode.slice(1);
      this.isShowCodeNumber = false;
    },
    onClickVariantPrice(item) {
      this.$router.push(
        `/order?provider=${this.selectedParam.providerSlug}&variant_id=${item.uid}&package_id=${item.packageUid}`
      );
      const param = {
        ...this.selectedParam,
        packageUid: item.packageUid,
        variantUid: item.uid,
      };
      this.setSelectedParam(param);

      const totalRupiah = currencyFormat(item.grandTotal);
      const dataCard = {
        ...this.dataCardVariant,
        packageName: `${item.providerName} - ${item.packageName}`,
        packageDetail: `${
          item.duration === 12
            ? `${totalRupiah} / 1 tahun`
            : `${totalRupiah} / ${item.duration} bulan`
        }`,
        grandTotal: item.grandTotal,
        totalMonth: item.duration,
        buttonText: `${
          item.duration === 12
            ? `1 tahun (${totalRupiah})`
            : `${item.duration} bulan (${totalRupiah})`
        }`,
      };
      this.setDataCardVariant(dataCard);

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
      let payload = {
        name: capitalizeFirstLetter(this.userName),
        email: this.email,
        phoneNumber: `${this.codePhone}${this.phoneNumber}`,
        packageVariantUid: this.selectedParam.variantUid,
        ispreorder: this.dataCardVariant.isPo === 1,
        userhost: this.dataCardVariant.isHost === 1,
        voucherUid: '',
      };
      this.createOrder(payload);
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
      this.dataConfirmation = {
        name: this.userName,
        email: this.email,
        codeNumber: this.codeNumber,
        phoneNumber: this.phoneNumber,
      };
      if (this.validationForm()) {
        this.setModalConfirmation(true);
      }
    },
    onCloseModalPackages() {
      this.isShowModalPackages = false;
    },
    closeModalConfirmation() {
      this.setModalConfirmation(false);
    },
    closeModalBlackList() {
      this.setModalBlackList(false);
    },
    closeModalOrderTiimeout() {
      this.setModalOrderTimeout(false);
    },
    onClickChangePacket() {
      this.isShowModalPackages = true;
    },
    selectVariant(variant) {
      this.$router.push(
        `/order?provider=${this.selectedParam.providerSlug}&variant_id=${variant.uid}&package_id=${variant.packageUid}`
      );
      const param = {
        ...this.selectedParam,
        packageUid: variant.packageUid,
        variantUid: variant.uid,
      };
      this.setSelectedParam(param);

      const data = {
        ...this.dataCardVariant,
        isPo: variant.isPo,
        isHost: variant.isHost,
      };
      this.setDataCardVariant(data);
      this.getListVariants(variant.packageUid);

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
