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
          :error="errorForm.fullname"
          class="mt-4"
          id="fullname"
          @change="setLocalStorage('fullname')"
          @keyup="validationForm('fullname')"
        />
        <label class="mt-4 text-sm" for="nomor-telepon"
          >Nomor telepon untuk pemotongan</label
        >

        <div class="relative inline-block text-left w-full">
          <div class="grid grid-cols-4 gap-3 items-end w-full">
            <ButtonDropDownNew
              class="rounded-xl w-full"
              @click="showCodePhone = !showCodePhone"
              :btnText="idPhone"
            />
            <InputForm
              v-model="dataParamOrder.whatsapp"
              label=""
              placeholder="Masukkan nomor telepon WhatsApp mu"
              class="col-span-3 w-full"
              :error="errorForm.whatsapp"
              id="whatsapp"
              @change="setLocalStorage('whatsapp')"
              @keyup="validationForm('whatsapp')"
            />
          </div>

          <div class="relative">
            <transition name="slide-up">
              <div
                class="payment-list w-full bg-white shadow rounded"
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
            </transition>
          </div>
        </div>

        <InputForm
          v-model="dataParamOrder.email"
          label="Email"
          placeholder="Tulis alamat email"
          class="mt-4"
          :error="errorForm.email"
          id="email"
          @change="setLocalStorage('email')"
          @keyup="validationForm('email')"
        />
        <InputForm
          v-model="dataParamOrder.qurban_fullname"
          label="Nama lengkap yang diniatkan untuk berqurban"
          placeholder="Tulis nama di sini"
          class="mt-4"
          :error="errorForm.qurban_fullname"
          id="qurban_fullname"
          @change="setLocalStorage('qurban_fullname')"
          @keyup="validationForm('qurban_fullname')"
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
              @change="dataParamOrder.qurban_fullname = dataParamOrder.fullname"
            /><span style="vertical-align: middle" class="text-sm"
              >Sama seperti pemesan</span
            >
          </label>
        </div>
        <InputForm
          v-model="dataParamOrder.qurban_father_name"
          label="Nama ayah kandung yang diniatkan untuk berqurban"
          placeholder="Tulis nama di sini"
          class="mt-4"
          :error="errorForm.qurban_father_name"
          id="qurban_father_name"
          @change="setLocalStorage('qurban_father_name')"
          @keyup="validationForm('qurban_father_name')"
        />
        <InputForm
          v-model="dataParamOrder.address"
          label="Alamat pengiriman daging qurban"
          placeholder="Tulis alamat agar vendor mengirimkan daging qurbanmu"
          class="mt-4"
          :error="errorForm.address"
          id="address"
          @change="setLocalStorage('address')"
          @keyup="validationForm('address')"
        />
        <div class="grid grid-cols-3 gap-3 mt-4">
          <InputForm
            v-model="dataParamOrder.city"
            label="Kota / Kecamatan"
            placeholder="Masukkan kota / kecamatan"
            class="mt-0 col-span-2"
            :error="errorForm.city"
            id="city"
            @change="setLocalStorage('city')"
            @keyup="validationForm('city')"
          />
          <InputForm
            v-model="dataParamOrder.postal_code"
            label="Kode pos"
            placeholder="Kode pos"
            class="mt-0"
            :error="errorForm.postal_code"
            id="postal_code"
            @change="setLocalStorage('postal_code')"
            @keyup="validationForm('postal_code')"
          />
        </div>
        <div class="mt-4 ml-1">
          <label class="space-x-1" style="display: inline-block"
            ><input
              v-model="isAgree"
              style="vertical-align: middle"
              type="checkbox"
            /><span style="vertical-align: middle" class="text-sm"
              >Menyetujui aturan yang dibuat Seakun</span
            ><a
              class="text-primary text-sm font-bold cursor-pointer"
              href="/terms-of-use"
              target="_blank"
            >
              Lihat detail</a
            >
          </label>
        </div>
        <div class="h-1 w-full bg-gray-300 my-2"></div>
        <Button
          variant="primary"
          label="Lanjutkan"
          class="w-full mt-3 py-2"
          :disabled="!isAgree"
          :is-loading="isLoadingSubmit"
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
      :data-qurban="dataQurban"
      :qurban-current-variant="dataDetailQurban"
      @closeModal="closeModalPackage"
      @choosePackage="choosePackage"
    />
    <ModalDataConfirmation
      :show-modal="isShowModalConfirmation"
      :data-order="dataParamOrder"
      :is-loading="isLoadingSubmit"
      @clickSubmit="submitDataOrder"
      @onClose="closeModalConfirmation"
    />
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import SequrbanChoiceCard from '../views/SequrbanOrderChoiceCard.vue';
import SequrbanWarningCard from '../views/SequrbanOrderWarningCard.vue';
import ModalChangeOrderPackage from '../views/ModalChangeOrderPackage.vue';
import ModalDataConfirmation from '../views/ModalDataConfirmation.vue';
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
      isLoadingSubmit: false,
      isShowModalPackage: false,
      isShowModalConfirmation: false,
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
      registeredUser: {
        fullname: '',
        whatsapp: '',
        email: '',
        qurban_fullname: '',
        qurban_father_name: '',
        address: '',
        city: '',
        postal_code: '',
      },
      internationalPhoneNumbers,
      errorForm: {
        fullname: {
          isError: false,
          message: '',
        },
        whatsapp: {
          isError: false,
          message: '',
        },
        email: {
          isError: false,
          message: '',
        },
        qurban_fullname: {
          isError: false,
          message: '',
        },
        qurban_father_name: {
          isError: false,
          message: '',
        },
        address: {
          isError: false,
          message: '',
        },
        city: {
          isError: false,
          message: '',
        },
        postal_code: {
          isError: false,
          message: '',
        },
      },
    };
  },
  components: {
    NavbarBlank,
    SequrbanChoiceCard,
    SequrbanWarningCard,
    ModalChangeOrderPackage,
    ModalDataConfirmation,
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
    idPhone() {
      this.validationForm('whatsapp');
    },
    dataParamOrder() {
      this.validationForm();
    },
  },
  mounted() {
    this.typeId = this.$route.query.id;
    this.getDataDetailQurban(this.typeId);
    this.setFieldValueFromLocalStorage();
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
    validationForm(input) {
      const { dataParamOrder } = this;
      const numberFormat = /^[0-9]+$/;
      const nameFormat = /^[A-Za-z][A-Za-z\s]*$/;
      const mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const idnPhoneFormat = /^[8][0-9]+$/;
      const globalPhoneFormat = /^[0-9]+$/;
      let isValid = true;
      let errorTemp = {
        fullname: {
          isError: false,
          message: '',
        },
        whatsapp: {
          isError: false,
          message: '',
        },
        email: {
          isError: false,
          message: '',
        },
        qurban_fullname: {
          isError: false,
          message: '',
        },
        qurban_father_name: {
          isError: false,
          message: '',
        },
        address: {
          isError: false,
          message: '',
        },
        city: {
          isError: false,
          message: '',
        },
        postal_code: {
          isError: false,
          message: '',
        },
      };

      if (input === 'fullname' || !input) {
        if (dataParamOrder.fullname === '') {
          errorTemp.fullname = {
            isError: true,
            message: 'Nama lengkap harus diisi',
          };
          isValid = false;
        } else if (!dataParamOrder.fullname.match(nameFormat)) {
          errorTemp.fullname = {
            isError: true,
            message: 'Format nama salah',
          };
          isValid = false;
        }
      }

      if (input === 'qurban_fullname' || !input) {
        if (dataParamOrder.qurban_fullname === '') {
          errorTemp.qurban_fullname = {
            isError: true,
            message: 'Nama lengkap harus diisi',
          };
          isValid = false;
        } else if (!dataParamOrder.qurban_fullname.match(nameFormat)) {
          errorTemp.qurban_fullname = {
            isError: true,
            message: 'Format nama salah',
          };
          isValid = false;
        }
      }

      if (input === 'qurban_father_name' || !input) {
        if (dataParamOrder.qurban_father_name === '') {
          errorTemp.qurban_father_name = {
            isError: true,
            message: 'Nama lengkap harus diisi',
          };
          isValid = false;
        } else if (!dataParamOrder.qurban_father_name.match(nameFormat)) {
          errorTemp.qurban_father_name = {
            isError: true,
            message: 'Format nama salah',
          };
          isValid = false;
        }
      }

      if (input === 'email' || !input) {
        if (dataParamOrder.email === '') {
          errorTemp.email = {
            isError: true,
            message: 'Email harus diisi',
          };
          isValid = false;
        } else if (!dataParamOrder.email.match(mailFormat)) {
          errorTemp.email = {
            isError: true,
            message: 'Format email salah',
          };
          isValid = false;
        }
      }

      if (input === 'whatsapp' || !input) {
        if (dataParamOrder.whatsapp === '') {
          errorTemp.whatsapp = {
            isError: true,
            message: 'Nomor whatsapp harus diisi',
          };
          isValid = false;
        } else if (
          this.idPhone === '+62' &&
          !dataParamOrder.whatsapp.match(idnPhoneFormat)
        ) {
          errorTemp.whatsapp = {
            isError: true,
            message: 'Format nomor whatsapp salah. cth: 81234567890',
          };
          isValid = false;
        } else if (
          this.idPhone !== '+62' &&
          !dataParamOrder.whatsapp.match(globalPhoneFormat)
        ) {
          errorTemp.whatsapp = {
            isError: true,
            message: 'Format nomor whatsapp salah. cth: 81234567890',
          };
          isValid = false;
        }
      }

      if (input === 'postal_code' || !input) {
        if (dataParamOrder.postal_code === '') {
          errorTemp.postal_code = {
            isError: true,
            message: 'Kode pos harus diisi',
          };
          isValid = false;
        } else if (!dataParamOrder.postal_code.match(numberFormat)) {
          errorTemp.postal_code = {
            isError: true,
            message: 'Format kode pos salah',
          };
          isValid = false;
        } else if (dataParamOrder.postal_code.length > 5) {
          errorTemp.postal_code = {
            isError: true,
            message: 'Maksimal kode pos 5 angka',
          };
          isValid = false;
        }
      }

      if (input === 'address' || !input) {
        if (dataParamOrder.address === '') {
          errorTemp.address = {
            isError: true,
            message: 'Alamat harus diisi',
          };
          isValid = false;
        }
      }

      if (input === 'city' || !input) {
        if (dataParamOrder.city === '') {
          errorTemp.city = {
            isError: true,
            message: 'Kecamatan / kota harus diisi',
          };
          isValid = false;
        }
      }

      this.errorForm = { ...errorTemp };
      return isValid;
    },
    clickSubmit() {
      this.validationForm();
      console.log(this.validationForm());
      if (this.validationForm()) {
        this.isShowModalConfirmation = true;
      }
    },
    closeModalConfirmation() {
      this.isShowModalConfirmation = false;
    },
    submitDataOrder() {
      this.isLoadingSubmit = true;
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
          this.toPaymentPage();
          // this.executeApiMailSeakun(payload);
          this.isLoadingSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toPaymentPage() {
      this.$router.push(
        `/payment?type=ondemand&provider=sequrban&packet_id=${this.typeId}&email=${this.dataParamOrder.email}&whatsapp=${this.dataParamOrder.whatsapp}&holder=${this.dataParamOrder.fullname}`
      );
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
    setFieldValueFromLocalStorage() {
      const registeredUser = JSON.parse(
        localStorage.getItem('registered_user')
      );
      if (registeredUser) {
        this.dataParamOrder.fullname = registeredUser.fullname;
        this.dataParamOrder.email = registeredUser.email;
        this.dataParamOrder.whatsapp = registeredUser.whatsapp;
        this.dataParamOrder.qurban_fullname = registeredUser.qurban_fullname;
        this.dataParamOrder.qurban_father_name =
          registeredUser.qurban_father_name;
        this.dataParamOrder.address = registeredUser.address;
        this.dataParamOrder.city = registeredUser.city;
        this.dataParamOrder.postal_code = registeredUser.postal_code;
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

<style lang="scss" scoped>
.payment-list {
  position: absolute;
  top: 0;
  z-index: 20;
  padding: 20px;
  max-height: 200px;
  overflow-y: auto;
}
.slide-up-enter-active {
  transition: all 0.5s ease;
}
.slide-up-leave-active {
  transition: all 0.5s ease;
  transform: translateY(-20vh);
  opacity: 0;
}
.slide-up-enter,
.slide-fade-leave-to {
  transform: translateY(-20vh);
  opacity: 0;
}
</style>
