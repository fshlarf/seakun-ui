<template>
  <div class="container-payment max-w-2xl w-full mx-auto md:mt-10 px-4">
    <div class="tn:pt-8 md:pt-10">
      <h2 class="md:text-2xl tn:text-lg font-bold">Pesanan</h2>
      <p class="md:text-lg tn:text-base mt-3">
        Silahkan isi terlebih dahulu sebelum melakukan pemesanan.
      </p>
    </div>
    <div class="flex justify-between items-center mt-10 mb-4">
      <p class="md:text-xl tn:text-lg font-bold">Produk yang dipesan</p>
      <p
        class="md:text-sm tn:text-base text-green-seakun cursor-pointer"
        @click="onClickChangePacket"
      >
        Ubah Paket
      </p>
    </div>
    <div>
      <AyceProductHighLight :variant="choosedPackage" />
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
      <div class="mt-4">
          <p class="pb-1 tn:text-sm">Lokasi</p>
          <ButtonDrop
            :btnText="location"
            @click="showLocationList('ayce')"
            @keyup="isShowLocation = false"
            :error="errorForm.location"
          />
          <div class="w-full">
            <PopUpLocation
              :data-list="locationList"
              :show="isShowLocation"
              @onClickItem="
                (value) => {
                  onClickLocation('ayce', value);
                }
              "
            />
          </div>
        </div>

        <div class="mt-4">
          <p class="pb-1 tn:text-sm">Alamat pengiriman</p>
          <textarea class="w-full rounded border p-3 focus:outline-none" placeholder="Tulis alamatmu di sini" name="alamat" id="" cols="" rows="3"></textarea>
        </div>

        <div class="mt-3">
          <p class="pb-1 tn:text-sm">Alamat pengiriman 2 <span class="text-gray-400">(opsional)</span></p>
          <textarea class="w-full rounded border p-3 focus:outline-none" placeholder="Tulis alamatmu di sini" name="alamat" id="" cols="" rows="3"></textarea>
        </div>

        <div class="grid grid-cols-3 gap-3 mt-3">
          <InputForm
            v-model="city"
            label="Kota / Kecamatan"
            placeholder="Masukkan kota / kecamatan"
            class="mt-0 col-span-2"
            :error="errorForm.city"
            id="city"
            @change="setLocalStorage('city')"
            @keyup="validationForm('city')"
          />
          <InputForm
            v-model="postal_code"
            label="Kode pos"
            placeholder="Kode pos"
            class="mt-0"
            :error="errorForm.postal_code"
            id="postal_code"
            @change="setLocalStorage('postal_code')"
            @keyup="validationForm('postal_code')"
          />
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
        class="w-full bg-green-seakun text-white py-2 mt-8"
        label="Lanjutkan"
        :is-loading="isShowLoading"
      />
      <Button
        variant="secondary"
        class="w-full py-2 mt-3"
        label="Kembali"
        :is-loading="isShowLoading"
      />

      <ModalPackages
        :is-show-modal="isShowModalPackages"
        :is-loading="isFetchingPacket"
        :data-variants="dataPackages"
        :current-package-variant="choosedPackage"
        @closeModal="onCloseModalPackages"
        @choosePackage="choosePacket"
      />
    </div>
  </div>
</template>

<script>
import {
  SEAKUN_API,
  SEAKUN_PACKAGE_API,
  SEAKUN_MAIL_API,
} from '~/constants/api.js';
import axios from 'axios';
import ButtonDrop from '~/components/atoms/ButtonDropDownNew';
import ProductHighLightLoading from '~/components/mollecules/ProductHighlightLoading.vue';
import AyceProductHighLight from './views/AyceProductHighLight.vue';
import InputForm from '~/components/atoms/Input.vue';
import DropdownCodeNumber from './views/DropdownCodeNumber.vue';
import Voucher from './views/Voucher.vue';
import Button from '~/components/atoms/Button';
import { internationalPhoneNumbers } from '~/constants/code-phone.js';
import {
  currencyFormat
} from '~/helpers/word-transformation.js';
import ModalPackages from './views/ModalPackages.vue';
import PopUpLocation from './views/PopUpLocation.vue'

export default {
  name: 'OrderPage',
  layout: 'new',
  components: {
    ProductHighLightLoading,
    AyceProductHighLight,
    InputForm,
    ButtonDrop,
    Button,
    DropdownCodeNumber,
    ModalPackages,
    PopUpLocation,
    Voucher
  },
  data: () => ({
    SEAKUN_API,
    SEAKUN_PACKAGE_API,
    SEAKUN_MAIL_API,
    packageId: '',
    packet: '',
    detailOrder: {
      loading: true,
      data: {},
    },
    email: '',
    userName: '',
    phoneNumber: '',
    isShowLoading: false,
    codeNumber: '+62',
    isShowCodeNumber: false,
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
      location: {
        isError: false,
        message: '',
      },
    },
    isShowModalPackages: false,
    choosedPackage: {},
    dataPackages: [
      {
        id: 1,
        image: '/images/all you can eat/brand/shabu-hachi.png',
        name: 'All You Can Eat',
        variant: 'Paket 5 Orang',
        price: 120000,
        isAvailable: true
      },
      {
        id: 2,
        image: '/images/all you can eat/brand/shabu-hachi.png',
        name: 'Bakar di Rumah',
        variant: 'Paket Berduaan',
        price: 120000,
        isAvailable: true
      },
      {
        id: 3,
        image: '/images/all you can eat/brand/shabu-hachi.png',
        name: 'Bakar di Rumah',
        variant: 'Paket Berempatan',
        price: 120000,
        isAvailable: true
      },
      {
        id: 4,
        image: '/images/all you can eat/brand/shabu-hachi.png',
        name: 'Bakar di Rumah',
        variant: 'Paket Ramean',
        price: 120000,
        isAvailable: true
      },
    ],
    isFetchingPacket: false,
    registeredUser: {
      name: '',
      email: '',
      phone: '',
    },
    location: 'Pilih lokasi',
    city: '',
    postal_code: '',
    isShowLocation: false,
    isShowCity: false,
    locationList: [
      'Jakarta Utara',
      'Jakarta Barat',
      'Jakarta Timur',
      'Jakarta Pusat',
      'Jakarta Selatan'
    ]
  }),
  watch: {
    codeNumber() {
      this.validationForm('userPhone');
    },
  },
  mounted() {
    const { provider, packet_id } = this.$router.history.current.query;
    if (provider) {
      this.provider = provider;
      this.packageId = packet_id;
      this.getOrderDetail();
    }
    this.setFieldValueFromLocalStorage();
    this.choosedPackage = this.dataPackages[0]
  },
  methods: {
    showLocationList(type) {
      if (type == 'ayce') {
        this.isShowLocation = !this.isShowLocation;
      }

      if (type == 'city') {
        this.isShowCity = !this.isShowCity;
      }
    },
    onClickLocation(type, value) {
      if (type == 'ayce') {
        this.location = value;
        this.isShowLocation = false;
      }

      if (type == 'city') {
        this.city = value;
        this.isShowCity = false;
      }
    },
    onClickItemCodeNumber(item) {
      this.codeNumber = item.dialCode;
      this.isShowCodeNumber = false;
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
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
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
    onClickChangePacket(product) {
      this.isShowModalPackages = true;
    },
    choosePacket(variant) {
      this.choosedPackage = variant
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
