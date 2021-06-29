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
      <ProductHighLightLoading v-if="detailOrder.loading" class="mt-4" />
      <ProductHighLight
        v-else
        :provider="provider"
        :isLoading="detailOrder.loading"
        :packageName="detailOrder.data.name"
        :grandTotal="detailOrder.data.grandTotal"
        :totalMonth="detailOrder.data.totalMonth"
      />

      <div class="mt-4">
        <p class="pb-1 tn:text-sm">Pilih Masa Berlangganan</p>
        <ButtonDrop
          :btnText="longSubcribe.name"
          :disabled="pricesList.length <= 0"
          @click="isShowPriceList = !isShowPriceList"
        />
        <div class="w-full">
          <DropDownPricesListSubcribe
            :show="isShowPriceList"
            :dataList="pricesList"
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
        :error="errorForm.name"
      />
      <InputForm
        label="Email"
        class="mt-4"
        placeholder="Masukkan email"
        :error="errorForm.email"
        v-model="email"
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
      <div class="ml-4 mt-6">
        <input class="form-check-input" type="checkbox" v-model="isAgreeTos" />
        <label class="form-check-label ml-2" for="checkbox">
          Menyetujui
          <nuxt-link class="text-green-seakun" to="/terms-of-use"
            >aturan</nuxt-link
          >
          yang dibuat oleh seakun
        </label>
      </div>
      <Voucher class="mt-4" />

      <Button
        :disabled="!isAgreeTos"
        @click="submitOrder"
        class="w-full bg-green-seakun text-white py-2 mt-8"
        label="Konfirmasi pesanan"
        :is-loading="isShowLoading"
      />

      <ModalPackages
        :is-show="isShowModalPackages"
        :provider="setNameProvider"
        @on-close="onCloseModalPackages"
        :packages="dataPackages"
        :slug="provider"
        @choose-packet="choosePacket"
        :is-loading="isFetchingPacket"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ButtonDrop from '~/components/atoms/ButtonDropDownNew';
import ProductHighLightLoading from '~/components/mollecules/ProductHighlightLoading.vue';
import ProductHighLight from '~/components/mollecules/ProductHighLight.vue';
import InputForm from '~/components/atoms/Input.vue';
import DropdownCodeNumber from './views/DropdownCodeNumber.vue';
import Voucher from './views/Voucher.vue';
import Button from '~/components/atoms/Button';
import DropDownPricesListSubcribe from './views/DropDownPricesListSubcribe.vue';
import { internationalPhoneNumbers } from '~/constants/code-phone.js';
import {
  currencyFormat,
  capitalizeFirstLetter,
  fullDate,
} from '~/helpers/word-transformation.js';
import ModalPackages from '~/components/organisms/ProductSection/views/ModalPackages.vue';

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
    Voucher,
    ModalPackages,
  },
  data: () => ({
    provider: '',
    packageId: '',
    packet: '',
    detailOrder: {
      loading: true,
      data: {},
    },
    email: '',
    userName: '',
    phoneNumber: '',
    longSubcribe: {
      name: 'Pilih Masa Berlangganan',
      month: '',
      price: 0,
    },
    isShowLoading: false,
    codeNumber: '+62',
    isShowCodeNumber: false,
    isShowPriceList: false,
    pricesList: [],
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
    dataPackages: [],
    isFetchingPacket: false,
  }),
  created() {
    const { provider, packet_id } = this.$router.history.current.query;
    if (provider) {
      this.provider = provider;
      this.packageId = packet_id;
      this.getOrderDetail();
    }
  },
  computed: {
    setNameProvider() {
      switch (this.provider) {
        case 'netflix':
          return 'Netflix';
          break;
        case 'spotify':
          return 'Spotify';
          break;
        case 'youtube':
          return 'Youtube';
          break;
        case 'gramedia':
          return 'Gramedia';
          break;
        case 'microsoft':
          return 'Microsoft 365';
          break;
        case 'canva':
          return 'Canva';
          break;
        case 'disney-hotstar':
          return 'Disney+ Hotstar';
          break;
        case 'nintendo':
          return 'Nintendo Switch';
          break;
      }
    },
  },
  methods: {
    async getOrderDetail() {
      const { detailOrder } = this;
      this.detailOrder = {
        ...detailOrder,
        loading: true,
      };
      try {
        const provider =
          this.provider === 'microsoft'
            ? 'microsoft365'
            : this.provider.toLowerCase();

        const fetchGetDetailOrder = await axios.get(
          `https://seakun-packet-api-v2.herokuapp.com/${provider}/${this.packageId}`
        );
        if (fetchGetDetailOrder.status == 200) {
          const { data } = fetchGetDetailOrder;
          this.packet = data.name;
          this.detailOrder = {
            ...detailOrder,
            data,
          };
          this.price = data.grandTotal;
          this.subcriptionDuration = data.totalMonth;
          if (data.prices.length > 0) {
            this.pricesList = data.prices?.map((value) => ({
              ...value,
              name: `${value.month} bulan ( ${currencyFormat(value.price)} )`,
            }));
            this.longSubcribe = this.pricesList[0];
          } else {
            this.pricesList = [
              {
                month: data.totalMonth,
                name: `${data.totalMonth} bulan ( ${currencyFormat(
                  data.grandTotal
                )} )`,
                price: data.grandTotal,
              },
            ];
            this.longSubcribe = this.pricesList[0];
          }
        }
      } catch (error) {
        console.log(error);
      }

      this.detailOrder = {
        ...this.detailOrder,
        loading: false,
      };
    },
    onClickItemCodeNumber(item) {
      this.codeNumber = item.dialCode;
      this.isShowCodeNumber = false;
    },
    onClickItemPrice(item) {
      this.longSubcribe = item;
      this.price = item.price;
      this.subcriptionDuration = parseInt(item.month);
      this.detailOrder = {
        ...this.detailOrder,
        data: {
          ...this.detailOrder.data,
          grandTotal: item.price,
          totalMonth: item.month,
        },
      };
      this.isShowPriceList = false;
    },
    validationForm() {
      const { email, userName, phoneNumber, errorForm } = this;
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
        notelp: {
          isError: false,
          message: '',
        },
      };
      if (email === '') {
        errorTemp.email = {
          isError: true,
          message: 'Email harus diisi',
        };
        isValid = false;
      } else if (!this.validateEmail(email)) {
        errorTemp.email = {
          isError: true,
          message: 'Format email salah',
        };
        isValid = false;
      }

      if (userName === '') {
        errorTemp.name = {
          isError: true,
          message: 'Nama lengkap harus diisi',
        };
        isValid = false;
      }

      if (phoneNumber === '' && !/\D/.test(phoneNumber)) {
        errorTemp.phoneNumber = {
          isError: true,
          message: 'Nomor whatsapp harus diisi dengan format yang benar',
        };
      }

      this.errorForm = { ...errorTemp };
      return isValid;
    },
    submitOrder() {
      if (this.validationForm()) {
        this.postRegisteredUser();
      }
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    async postRegisteredUser() {
      this.isShowLoading = true;

      let payload = {
        fullname: capitalizeFirstLetter(this.userName),
        email: this.email,
        whatsapp: `${this.codeNumber}${this.phoneNumber}`,
        provider:
          this.provider.toLowerCase() === 'disney+ hotstar'
            ? 'disney-hotstar'
            : this.provider,
        packet: this.packet,
        subcription_duration: this.subcriptionDuration,
        price: parseInt(this.price),
        discountprice: '',
        userhost: this.detailOrder.data.userHost,
        referalcode: '',
        voucher: '',
        createddate: fullDate(),
        ispreorder: this.detailOrder.data.isPreOrder || false,
        total_month: this.detailOrder.data.totalMonth,
        total_year: this.detailOrder.data.totalYear,
        linkwhatsapp: `https://api.whatsapp.com/send?phone=${this.codeNumber}${this.phoneNumber}`,
      };
      const headers = { 'Access-Control-Allow-Origin': '*' };
      try {
        const fetchPostUser = await axios.post(
          'https://seakun-api.herokuapp.com/registered-user',
          payload,
          {
            headers: headers,
          }
        );
        if (fetchPostUser.status == 200) {
          this.executeApiMailSeakun(payload);
        } else {
          throw fetchPostUser;
        }
      } catch (error) {
        console.log(error);
      }
    },
    executeApiMailSeakun(payload) {
      let newPayload = {
        ...payload,
        payment_type: this.detailOrder.data.paymentType,
      };
      axios
        .post('https://seakun-mail-api-v2.herokuapp.com/', newPayload)
        .then((res) => {
          this.isDisableBtn = false;
          // Redirect to thankyou page when successfully registration
          this.$router.push({
            path: this.setPathToRedirect(newPayload),
            query: {
              type: 'digital',
              provider: this.provider,
              packet_id: this.packageId,
              duration: this.subcriptionDuration,
              price: this.price,
              holder: this.userName,
              email: this.email,
              whatsapp: this.codeNumber + this.phoneNumber,
              // voucher: this.isVoucherValid ? this.voucher : '',
            },
          });
          this.isShowLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.isShowLoading = false;
        });
    },
    setPathToRedirect(payload) {
      if (payload.userhost) {
        return '/thankyou/user-host';
      } else if (payload.ispreorder) {
        return '/thankyou/pre-order';
      } else {
        return '/order-payment';
      }
    },
    onCloseModalPackages() {
      this.isShowModalPackages = false;
    },
    onClickChangePacket(product) {
      this.isFetchingPacket = true;
      this.dataPackages = [];
      this.isShowModalPackages = true;
      this.fetchPackages(product.slug);
    },
    async fetchPackages() {
      const provider =
        this.provider === 'microsoft'
          ? 'microsoft365'
          : this.provider.toLowerCase();

      try {
        const { data } = await axios.get(
          `https://seakun-packet-api-v2.herokuapp.com/${provider}`
        );
        if (data) {
          this.dataPackages = data;
        }
      } catch (err) {
        console.log(err);
      }
      this.isFetchingPacket = false;
    },
    choosePacket(packet) {
      this.packageId = packet.id;
      this.getOrderDetail();
      this.isShowModalPackages = false;
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
