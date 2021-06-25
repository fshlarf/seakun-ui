<template>
  <div>
    <NavbarBlank />
    <div class="container pt-24 -mb-8">
      <div class="md:shadow md:rounded-3xl max-w-xl mx-auto tn:p-2 md:p-5">
        <div>
          <h1 class="text-3xl font-bold">Pesanan</h1>
          <p>Silakan isi terlebih dahulu sebelum melakukan pemesanan</p>
          <div class="h-1 w-full bg-gray-300 my-2"></div>
          <div class="flex justify-between mt-4">
            <p class="font-bold">Produk yang dipesan</p>
            <p
              class="text-primary font-bold cursor-pointer"
              @click="showModalPackage"
            >
              Ubah paket
            </p>
          </div>
          <div class="my-2">
            <SequrbanChoiceCard
              type="chosen"
              :is-loading="isLoading"
              :variant="dataDetailQurban"
            />
          </div>
          <div class="mt-4">
            <h1 class="font-bold">Informasi pengguna</h1>
            <div class="my-2">
              <SequrbanWarningCard />
            </div>
          </div>
        </div>
        <InputForm
          v-model="dataParamOrder.fullname"
          label="Nama pemesan"
          placeholder="Tulis namamu di sini"
          :error="error_fullname"
          class="mt-2"
          id="fullname"
          @change="setLocalStorage('fullname')"
        />
        <label class="mt-3 -mb-1 text-sm" for="nomor-telepon"
          >Nomor telepon untuk pemotongan</label
        >

        <div class="relative inline-block text-left w-full -mt-4 -mb-3">
          <div class="grid grid-cols-4 gap-3 items-end w-full">
            <ButtonDropDownNew
              class="rounded-xl w-full mb-0.5"
              @click="showCodePhone = !showCodePhone"
              :btnText="idPhone"
            />
            <InputForm
              v-model="dataParamOrder.whatsapp"
              label=""
              placeholder="Masukkan nomor telepon WhatsApp mu"
              class="col-span-3 w-full"
              :error="error_whatsapp"
              id="whatsapp"
              @change="setLocalStorage('whatsapp')"
            />
          </div>

          <div
            class="origin-top-right z-100 right-0 mt-2 w-72 rounded-md shadow bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div
              class="p-3 overflow-y-auto h-80"
              role="none"
              v-if="showCodePhone"
            >
              <div
                v-for="codeCountry in internationalPhoneNumbers"
                :key="codeCountry.name"
                @click="chooseCodePhone(codeCountry)"
                class="cursor-pointer"
              >
                {{ `${codeCountry.name} (${codeCountry.dialCode})` }}
              </div>
            </div>
          </div>
        </div>

        <InputForm
          v-model="dataParamOrder.email"
          label="Email"
          placeholder="Tulis alamat email"
          class=""
          :error="error_email"
          id="email"
          @change="setLocalStorage('email')"
        />
        <InputForm
          v-model="dataParamOrder.qurban_fullname"
          label="Nama lengkap yang diniatkan untuk berqurban"
          placeholder="Tulis nama di sini"
          class=""
          :error="error_qurban_fullname"
          id="qurban-fullname"
          @change="setLocalStorage('qurban-fullname')"
        />
        <div class="mt-1 ml-1 -mb-3">
          <label
            class="space-x-1"
            style="display: inline-block"
            for="nama-lengkap"
            ><input
              style="vertical-align: middle"
              type="checkbox"
              name="nama-lengkap"
              id="nama-lengkap"
              @click="dataParamOrder.qurban_fullname = dataParamOrder.fullname"
            /><span style="vertical-align: middle" class="text-sm"
              >Sama seperti pemesan</span
            >
          </label>
        </div>
        <InputForm
          v-model="dataParamOrder.qurban_father_name"
          label="Nama ayah kandung yang diniatkan untuk berqurban"
          placeholder="Tulis nama di sini"
          class=""
          :error="error_qurban_father_name"
          id="qurban-father-name"
          @change="setLocalStorage('qurban-father-name')"
        />
        <InputForm
          v-model="dataParamOrder.address"
          label="Alamat pengiriman daging qurban"
          placeholder="Tulis alamat agar vendor mengirimkan daging qurbanmu"
          class=""
          :error="error_address"
          id="address"
          @change="setLocalStorage('address')"
        />
        <div class="grid grid-cols-3 gap-3">
          <InputForm
            v-model="dataParamOrder.city"
            label="Kota / Kecamatan"
            placeholder="Masukkan kota / kecamatan"
            class="mt-0 col-span-2"
            :error="error_city"
            id="city"
            @change="setLocalStorage('city')"
          />
          <InputForm
            v-model="dataParamOrder.postal_code"
            label="Kode pos"
            placeholder="Kode pos"
            class="mt-0"
            :error="error_postal_code"
            id="postal-code"
            @change="setLocalStorage('postal-code')"
          />
        </div>
        <div class="mt-4 ml-1">
          <label
            class="space-x-1"
            style="display: inline-block"
            for="nama-lengkap"
            ><input
              v-model="isAgree"
              style="vertical-align: middle"
              type="checkbox"
              name="nama-lengkap"
              id="nama-lengkap"
            /><span style="vertical-align: middle" class="text-sm"
              >Menyetujui aturan yang dibuat Seakun</span
            ><span class="text-primary text-sm font-bold"> Lihat detail</span>
          </label>
        </div>
        <div class="h-1 w-full bg-gray-300 my-2"></div>
        <Button
          variant="primary"
          label="Lanjutkan"
          class="w-full mt-3 py-2"
          :disabled="!isAgree"
          @click="clickSubmit"
        />
        <Button
          variant="secondary"
          label="Kembali"
          class="w-full mt-2"
          @click="goBackToSequrbanPage"
        />
      </div>
    </div>
    <ModalChangeOrderPackage
      :is-show-modal="isShowModalPackage"
      :is-loading="isLoading"
      :dataQurban="dataQurban"
      :qurban-current-variant="dataDetailQurban"
      @closeModal="closeModalPackage"
      @choosePackage="choosePackage"
    />
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import SequrbanChoiceCard from '../views/SequrbanOrderChoiceCard.vue';
import SequrbanWarningCard from '../views/SequrbanOrderWarningCard.vue';
import ModalChangeOrderPackage from '../views/ModalChangeOrderPackage.vue';
import InputForm from '~/components/atoms/Input.vue';
import SelectOption from '~/components/atoms/SelectOption.vue';
import Button from '~/components/atoms/Button.vue';
import ButtonDrop from '~/components/atoms/ButtonDropDown';
import ButtonDropDownNew from '~/components/atoms/ButtonDropDownNew';
import DownArrowIcon from '~/assets/images/icon/down-arrow.svg?inline';
import NavbarBlank from '~/components/mollecules/NavbarBlank';
import Footer from '~/components/mollecules/Footer';

import { internationalPhoneNumbers } from '../../../constants';

export default {
  data() {
    return {
      typeId: '',
      isLoading: false,
      isShowModalPackage: false,
      iSshowOption: false,
      showCodePhone: false,
      isAgree: false,
      dataQurban: [],
      dataDetailQurban: {},
      idPhone: '+62',
      codePhone: 62,
      dataParamOrder: {
        fullname: '',
        email: '',
        whatsapp: '',
        vendor_code: '',
        type: '',
        joint_price: 0,
        admin_fee: 0,
        delivery_cost: 0,
        service_cost: 0,
        packaging_cost: 0,
        total_cost: 0,
        bulking_price: 0,
        discount_price: 0,
        down_payment: 0,
        remaining_payment: 0,
        qurban_fullname: '',
        qurban_father_name: '',
        address: '',
        city: '',
        postal_code: '',
      },
      internationalPhoneNumbers,
      error_fullname: {
        isError: false,
        message: 'Nama lengkap harus diisi',
      },
      error_whatsapp: {
        isError: false,
        message: 'Nomor whatsapp harus diisi',
      },
      error_email: {
        isError: false,
        message: 'Email harus diisi',
      },
      error_qurban_fullname: {
        isError: false,
        message: 'Nama lengkap harus diisi',
      },
      error_qurban_father_name: {
        isError: false,
        message: 'Nama ayah harus diisi',
      },
      error_address: {
        isError: false,
        message: 'Alamat harus diisi',
      },
      error_city: {
        isError: false,
        message: 'Kota / Kecamatan harus diisi',
      },
      error_postal_code: {
        isError: false,
        message: 'Kode pos harus diisi',
      },
    };
  },
  components: {
    NavbarBlank,
    SequrbanChoiceCard,
    SequrbanWarningCard,
    ModalChangeOrderPackage,
    InputForm,
    SelectOption,
    Button,
    ButtonDrop,
    ButtonDropDownNew,
    DownArrowIcon,
    Footer,
  },
  watch: {
    $route(to, from) {
      this.id = to.query.id;
      if (to !== from) {
        this.dataDetailQurban = {};
        this.getDataDetailQurban(this.id);
      }
    },
  },
  mounted() {
    this.typeId = this.$route.query.id;
    this.getDataDetailQurban(this.typeId);
  },
  methods: {
    getDataQurban() {
      this.isLoading = true;
      axios
        .get('https://seakun-packet-api-v2.herokuapp.com/sequrban')
        .then((res) => {
          this.dataQurban = res.data;
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
    },
    getDataDetailQurban(id) {
      this.isLoading = true;
      axios
        .get(`https://seakun-packet-api-v2.herokuapp.com/sequrban/${id}`)
        .then((res) => {
          this.dataDetailQurban = res.data;
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
    },
    showModalPackage() {
      this.isShowModalPackage = true;
      this.getDataQurban();
    },
    closeModalPackage() {
      this.isShowModalPackage = false;
    },
    choosePackage(id) {
      this.isShowModalPackage = false;
      this.$router.push(`/sequrban/order?id=${id}`);
    },
    validateInput() {
      this.error_fullname.isError = !this.dataParamOrder.fullname
        ? true
        : false;
      this.error_whatsapp.isError = !this.dataParamOrder.whatsapp
        ? true
        : false;
      this.error_email.isError = !this.dataParamOrder.email ? true : false;
      this.error_qurban_fullname.isError = !this.dataParamOrder.qurban_fullname
        ? true
        : false;
      this.error_qurban_father_name.isError = !this.dataParamOrder
        .qurban_father_name
        ? true
        : false;
      this.error_address.isError = !this.dataParamOrder.address ? true : false;
      this.error_city.isError = !this.dataParamOrder.city ? true : false;
      this.error_postal_code.isError = !this.dataParamOrder.postal_code
        ? true
        : false;
    },
    clickSubmit() {
      this.validateInput();
      if (
        this.dataParamOrder.fullname &&
        this.dataParamOrder.whatsapp &&
        this.dataParamOrder.email &&
        this.dataParamOrder.qurban_fullname &&
        this.dataParamOrder.qurban_father_name &&
        this.dataParamOrder.address &&
        this.dataParamOrder.city &&
        this.dataParamOrder.postal_code
      ) {
        this.submitDataOrder();
      }
    },
    submitDataOrder() {
      this.dataParamOrder = {
        email: this.dataParamOrder.email,
        whatsapp: this.codePhone + this.dataParamOrder.whatsapp,
        discount_price: this.dataDetailQurban.discountPrice,
        address: this.dataParamOrder.address,
        city: this.dataParamOrder.city,
        postal_code: this.dataParamOrder.postal_code,
        fullname: this.capitalizeFirstLetter(this.dataParamOrder.fullname),
        qurban_fullname: this.capitalizeFirstLetter(
          this.dataParamOrder.qurban_fullname
        ),
        qurban_father_name: this.capitalizeFirstLetter(
          this.dataParamOrder.qurban_father_name
        ),
        vendor_code: this.dataDetailQurban.vendorCode,
        type: this.dataDetailQurban.packageCode,
        joint_price: parseInt(this.dataDetailQurban.jointPrice),
        admin_fee: parseInt(this.dataDetailQurban.adminFee),
        delivery_cost: parseInt(this.dataDetailQurban.deliveryCost),
        service_cost: parseInt(this.dataDetailQurban.serviceCost),
        packaging_cost: parseInt(this.dataDetailQurban.packagingCost),
        total_cost: parseInt(this.dataDetailQurban.totalCost),
        bulking_price: parseInt(this.dataDetailQurban.bulkingPrice),
        down_payment: parseInt(this.dataDetailQurban.downPayment),
        remaining_payment: parseInt(this.dataDetailQurban.remainingPayment),
      };
      axios
        .post(
          'https://seakun-api.herokuapp.com/sequrban/register',
          this.dataParamOrder
        )
        .then((res) => {
          this.toPaymentPage()
          // this.executeApiMailSeakun(payload);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toPaymentPage() {
      this.$router.push(`/payment?provider=sequrban&packet_id=${this.typeId}&email=${this.dataParamOrder.email}&whatsapp=${this.dataParamOrder.whatsapp}&holder=${this.dataParamOrder.fullname}`);
    },
    capitalizeFirstLetter(str) {
      let splitStr = str.toLowerCase().split(' ');

      for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] =
          splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      return splitStr.join(' ');
    },
    chooseCodePhone(codeCountry) {
      this.idPhone = codeCountry.dialCode;
      this.codePhone = codeCountry.dialCode.slice(1);
      this.showCodePhone = false;
    },
    goBackToSequrbanPage() {
      this.$router.push('/sequrban');
    },
    setLocalStorage(id) {
      const input = document.getElementById(id);
      input.addEventListener('change', (event) => {
        if (id === 'fullname') {
          localStorage.setItem('fullname', event.target.value);
        }
        if (id === 'phone-code') {
          localStorage.setItem('phone-code', event.target.value);
        }
        if (id === 'whatsapp') {
          localStorage.setItem('whatsapp', event.target.value);
        }
        if (id === 'email') {
          localStorage.setItem('email', event.target.value);
        }
        if (id === 'qurban-fullname') {
          localStorage.setItem('qurban-fullname', event.target.value);
        }
        if (id === 'qurban-father-name') {
          localStorage.setItem('qurban-father-name', event.target.value);
        }
        if (id === 'address') {
          localStorage.setItem('address', event.target.value);
        }
        if (id === 'city') {
          localStorage.setItem('city', event.target.value);
        }
        if (id === 'postal-code') {
          localStorage.setItem('postal-code', event.target.value);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
