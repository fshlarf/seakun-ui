<template>
  <div class="w-full relative z-0">
    <div id="step-create-product" class="absolute -top-20"></div>
    <div class="flex items-center justify-center tn:mb-12">
      <div v-for="(step, id) in steps" :key="id" class="flex items-center">
        <div class="relative z-0">
          <div
            @click="onClickStep(step)"
            role="button"
            class="w-[50px] h-[50px] text-[20px] rounded-full border-2 border-[#8DCABE] flex justify-center items-center"
            :class="
              step.no <= currentStep
                ? 'text-white bg-[#8DCABE]'
                : 'bg-transparent text-[#8DCABE]'
            "
          >
            {{ step.no }}
          </div>
          <div class="absolute z-10 top-14 w-[50px] flex justify-center">
            {{ step.text }}
          </div>
        </div>
        <img
          v-if="step.no < 3"
          src="/images/icons/atoms/step-line.svg"
          alt="separator"
        />
      </div>
    </div>

    <p
      v-if="currentStep < 3"
      class="tn:text-[18px] md:text-[20px] text-center tn:pt-5 tn:mb-4"
    >
      Silahkan isi terlebih dahulu untuk mengajukan permohonan
    </p>
    <p v-else class="tn:text-[18px] md:text-[20px] text-center tn:pt-5 tn:mb-4">
      Silahkan cek kembali pengajuan permohonan
    </p>

    <div v-show="currentStep === 1" class="w-full">
      <InputForm
        label="Nama Produk"
        placeholder="Masukkan nama produk"
        class="tn:mt-2 md:mt-4 text-[16px]"
        v-model="dataDetailProduct.name"
        id="name"
        @change="setLocalStorage('name')"
        @keyup="validationForm('name')"
        :error="errorForm.name"
      />
      <InputForm
        label="Brand Produk"
        class="tn:mt-4"
        placeholder="cth. Samsung"
        :error="errorForm.brand"
        v-model="dataDetailProduct.brand"
        id="brand"
        @change="setLocalStorage('brand')"
        @keyup="validationForm('brand')"
      />
      <InputForm
        label="Harga Normal (Rp)"
        class="tn:mt-4"
        placeholder="cth. 123000"
        :error="errorForm.price"
        v-model="dataDetailProduct.price"
        id="price"
        @change="setLocalStorage('price')"
        @keyup="validationForm('price')"
      />
      <InputForm
        label="Harga Patungan (Rp)"
        class="tn:mt-4"
        placeholder="cth. 123000"
        :error="errorForm.jointPrice"
        v-model="dataDetailProduct.jointPrice"
        id="price"
        @change="setLocalStorage('jointPrice')"
        @keyup="validationForm('jointPrice')"
      />

      <div class="mt-4">
        <p class="pb-1 tn:text-sm">Jenis Promo</p>
        <ButtonDrop :btnText="promoType" @click="showPromoList()" />
        <div class="w-full">
          <PopUpDropDown
            :data-list="promoList"
            :show="isShowPromoList"
            @onClikcItem="onClickPromo"
          />
        </div>
      </div>

      <InputForm
        label="Total Member"
        class="tn:mt-4"
        placeholder="cth. 8"
        :error="errorForm.quota"
        :disabled="dataDetailProduct.promoType == 1"
        v-model="dataDetailProduct.quota"
        id="quota"
        @change="setLocalStorage('quota')"
        @keyup="validationForm('quota')"
      />
      <InputForm
        label="Link Produk"
        class="tn:mt-4"
        placeholder="Masukkan link produk"
        v-model="dataDetailProduct.productUrl"
        id="productUrl"
        @change="setLocalStorage('productUrl')"
      />

      <div class="flex items-center space-x-2 tn:pt-2 tn:mt-4">
        <div class="cursor-pointer w-[24px]" @click="onTickPromoPeriod">
          <CheckedBox v-if="isHasPromoPeriod" />
          <UncheckBox v-else />
        </div>
        <p class="text-[14px]">Memiliki Periode Promo</p>
      </div>

      <div
        v-if="isHasPromoPeriod"
        class="tn:my-4 grid grid-cols-2 items-center gap-4"
      >
        <div class="">
          <p class="text-sm mb-2">Mulai Promo</p>
          <DatePicker
            class="datepicker"
            input-class="mx-input datepickerinput"
            placeholder="Pilih tanggal"
            v-model="promoStart"
            valueType="format"
            lang="id"
            @change="validationForm('promoEnd')"
          ></DatePicker>
        </div>
        <div class="">
          <p class="text-sm mb-2">Berakhir Promo</p>
          <DatePicker
            class="datepicker"
            input-class="mx-input datepickerinput"
            placeholder="Pilih tanggal"
            v-model="promoEnd"
            valueType="format"
            lang="id"
            @change="validationForm('promoEnd')"
          ></DatePicker>
          <p
            v-if="errorForm.promoEnd.isError"
            class="text-red-500 text-xs tn:pt-1 italic"
          >
            {{ errorForm.promoEnd.message }}
          </p>
        </div>
      </div>

      <TextAreaForm
        rows="4"
        label="Deskripsi Produk"
        placeholder="Masukkan deskripsi produk"
        class="tn:mt-2 md:mt-4 text-[16px]"
        v-model="dataDetailProduct.description"
        id="description"
        @change="setLocalStorage('description')"
        @keyup="validationForm('description')"
        :error="errorForm.description"
      />

      <div class="tn:mt-4">
        <p class="text-sm mb-2">
          Foto Produk <Span class="tn:text-xs">(Maks. 5)</Span>
        </p>

        <div
          v-if="productImages.length > 0"
          class="tn:my-4 overflow-x-auto overscroll-auto w-full hide-scrollbar"
        >
          <div class="flex justify-start">
            <div
              v-for="(image, id) in productImages"
              :key="id"
              class="max-w-max relative z-0 tn:m-1 md:m-2"
            >
              <div
                v-if="image"
                role="button"
                class="btn-close absolute bg-red-500 w-[20px] h-[20px] rounded-full text-white -top-1 -right-1 z-30 flex justify-center items-center text-center"
                @click="removeImage(id)"
              >
                <p class="m-0 p-0 -top-1 -right-1 text-[20px]">&times;</p>
              </div>
              <div
                v-if="image"
                class="flex items-center w-[100px] h-[100px] rounded-xl overflow-hidden border"
              >
                <img
                  class="min-w-[100%] min-h-[100%] object-cover object-center"
                  :src="imageUrl(image)"
                  alt="product image"
                />
              </div>
            </div>
          </div>
        </div>

        <label
          v-if="productImages.length < 5"
          role="button"
          class="image-button w-full tn:py-4 flex items-center justify-center space-x-2 text-center rounded-lg border-secondary border-dashed border-2"
          for="image"
        >
          <img
            class="w-[16px] h-[16px]"
            src="/images/sekeranjang/create product/plus.svg"
            alt="add image"
          />
          <span class="text-secondary">Tambah Foto</span>
        </label>
        <input
          id="image"
          class="hidden"
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          :disabled="productImages && productImages.length >= 5"
          @change="onUploadImage"
          multiple
        />
        <p v-if="errorForm.image.isError" class="text-red-500 text-xs italic">
          {{ errorForm.image.message }}
        </p>
      </div>

      <Button
        class="w-full tn:mt-4 tn:py-4 font-bold"
        variant="primary"
        label="Selanjutnya"
        @click="onClickNextStep(2)"
      />
    </div>

    <div v-show="currentStep === 2" class="w-full">
      <InputForm
        label="Nama Pemohon"
        placeholder="Masukkan nama lengkap kamu"
        class="tn:mt-2 md:mt-4 text-[16px]"
        v-model="dataDetailProduct.publisherName"
        id="publisherName"
        @change="setLocalStorage('publisherName')"
        @keyup="validationForm('publisherName')"
        :error="errorForm.publisherName"
      />
      <InputForm
        label="Email"
        class="tn:mt-4"
        placeholder="cth. abc@gmail.com"
        :error="errorForm.publisherEmail"
        v-model="dataDetailProduct.publisherEmail"
        id="publisherEmail"
        @change="setLocalStorage('publisherEmail')"
        @keyup="validationForm('publisherEmail')"
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
              v-model="dataDetailProduct.publisherPhone"
              :error="errorForm.publisherPhone"
              id="publisherPhone"
              @change="setLocalStorage('publisherPhone')"
              @keyup="validationForm('publisherPhone')"
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

      <div class="flex items-start space-x-2 tn:pt-2 tn:mt-2">
        <div class="cursor-pointer w-[24px]" @click="isJoinPo = !isJoinPo">
          <CheckedBox v-if="isJoinPo" />
          <UncheckBox v-else />
        </div>
        <p>Ikut patungan beli produk ini</p>
      </div>

      <InputForm
        v-if="isJoinPo"
        label="Alamat"
        placeholder="Masukkan alamat lengkap kamu"
        class="tn:mt-2 md:mt-4 text-[16px]"
        v-model="dataDetailProduct.publisherAddress"
        id="publisherAddress"
        @change="setLocalStorage('publisherAddress')"
        @keyup="validationForm('publisherAddress')"
        :error="errorForm.publisherAddress"
      />

      <Button
        class="w-full tn:mt-6 tn:py-4 font-bold"
        variant="primary"
        label="Selanjutnya"
        @click="onClickNextStep(3)"
      />
    </div>

    <div v-show="currentStep === 3" class="w-full">
      <div
        v-if="productImages.length > 0"
        class="flex justify-center flex-wrap tn:my-4"
      >
        <div v-for="(image, id) in productImages" :key="id" class="max-w-max">
          <div
            class="flex items-center w-[100px] h-[100px] rounded-xl overflow-hidden border tn:m-1"
          >
            <img
              class="min-w-[100%] min-h-[100%] object-cover object-center"
              :src="imageUrl(image)"
              alt="product image"
            />
          </div>
        </div>
      </div>

      <div
        class="detail-box tn:p-5 md:p-6 rounded-md border-l-4 bg-white tn:mt-8 space-y-2"
      >
        <h3 class="text-[20px] font-bold">Detail Produk</h3>
        <hr class="tn:my-2" />
        <div class="md:grid grid-cols-4 md:gap-2">
          <p class="col-span-1">Nama Produk:</p>
          <p class="col-span-3 font-bold">{{ dataDetailProduct.name }}</p>
        </div>
        <div class="md:grid grid-cols-4 md:gap-2">
          <p class="col-span-1">Brand Produk:</p>
          <p class="col-span-3 font-bold">
            {{ dataDetailProduct.brand }}
          </p>
        </div>
        <div class="md:grid grid-cols-4 md:gap-2">
          <p class="col-span-1">Jenis Promo:</p>
          <p class="col-span-3 font-bold">{{ promoType }}</p>
        </div>
        <div class="md:grid grid-cols-4 md:gap-2">
          <p class="col-span-1">Harga Normal:</p>
          <p class="col-span-3 font-bold">
            {{ currencyFormat(dataDetailProduct.price) }}
          </p>
        </div>
        <div class="md:grid grid-cols-4 md:gap-2">
          <p class="col-span-1">Harga Patungan:</p>
          <p class="col-span-3 font-bold">
            {{ currencyFormat(dataDetailProduct.jointPrice) }}
          </p>
        </div>
        <div class="md:grid grid-cols-4 md:gap-2">
          <p class="col-span-1">Total Member:</p>
          <p class="col-span-3 font-bold">
            {{ dataDetailProduct.quota }} Orang
          </p>
        </div>
        <div class="md:grid grid-cols-4 md:gap-2">
          <p class="col-span-1">Periode Promo:</p>
          <p class="col-span-3 font-bold" v-if="promoStart && promoEnd">
            {{ toLocalDate(promoStart) }} - {{ toLocalDate(promoEnd) }}
          </p>
          <p class="col-span-3 font-bold" v-else-if="!promoStart && promoEnd">
            Sampai {{ toLocalDate(promoEnd) }}
          </p>
          <p class="col-span-3 font-bold" v-else>-</p>
        </div>
        <div class="md:grid grid-cols-4 md:gap-2 overflow-hidden">
          <p class="col-span-1">Link Produk:</p>
          <a
            :href="dataDetailProduct.productUrl"
            target="_blank"
            class="col-span-3 font-bold text-primary break-all one-line"
            v-if="dataDetailProduct.productUrl"
          >
            {{ dataDetailProduct.productUrl }}
          </a>
          <p v-else class="font-bold">-</p>
        </div>
        <div class="">
          <p class="">Deskripsi Produk:</p>
          <p
            v-for="(desc, id) in descriptionPreview"
            :key="id"
            class="font-semibold"
          >
            {{ desc }}
          </p>
        </div>
      </div>

      <div
        class="detail-box tn:p-5 md:p-6 rounded-md border-l-4 bg-white tn:mt-8 space-y-2"
      >
        <h3 class="text-[20px] font-bold">Detail Pemohon</h3>
        <hr class="tn:my-2" />
        <p class="font-bold">{{ dataDetailProduct.publisherName }}</p>
        <p>{{ dataDetailProduct.publisherEmail }}</p>
        <p>{{ codeNumber }}{{ dataDetailProduct.publisherPhone }}</p>
        <p>{{ dataDetailProduct.publisherAddress }}</p>
      </div>

      <div class="flex items-start space-x-2 tn:pt-2 tn:mt-8">
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

      <div
        v-if="isShowFormWarning"
        class="tn:my-4"
        id="warning-form-not-complete"
      >
        <WarningInfo
          text="Data yang kamu isi masih belum lengkap. Periksa kembali sebelum melanjutkan."
        />
      </div>

      <div
        class="tn:mt-3 lg:mt-6 grid tn:grid-cols-1 md:grid-cols-2 items-center tn:gap-3 md:gap-6"
      >
        <Button
          class="w-full tn:!py-4 font-bold tn:order-2 md:order-1"
          variant="secondary-transparent"
          label="Edit Permohonan"
          @click="onClickNextStep(1)"
        />
        <Button
          class="w-full tn:py-4 font-bold tn:order-1 md:order-2"
          variant="primary"
          label="Konfirmasi"
          :disabled="!isAgreeTos"
          @click="onClickConfirm"
        />
      </div>
    </div>

    <ModalConfirmation
      :show-modal="isShowModalConfirmation"
      :is-loading="isLoadingCreateProduct"
      @onClose="onCloseModalConfirmation"
      @onRecheck="onClickRecheck"
      @clickSubmit="onClickSubmit"
    />
  </div>
</template>

<script>
import CheckedBox from '~/assets/images/icon/checked-box.svg?inline';
import UncheckBox from '~/assets/images/icon/uncheck-box.svg?inline';
import ButtonDrop from '~/components/atoms/ButtonDropDownNew';
import Button from '~/components/atoms/Button';
import PopUpDropDown from '~/components/atoms/PopUpDropDown';
import InputForm from '~/components/atoms/Input.vue';
import TextAreaForm from '~/components/atoms/TextArea.vue';
import SelectOption from '~/components/atoms/SelectOption.vue';
import ModalConfirmation from './ModalConfirmation.vue';
import DropdownCodeNumber from './DropdownCodeNumber.vue';
import WarningInfo from '~/components/mollecules/WarningInfo.vue';
import { internationalPhoneNumbers } from '~/constants/code-phone.js';
import { currencyFormat } from '../../../../helpers/word-transformation';
import DatePicker from 'vue2-datepicker';
import moment from 'moment';
import 'vue2-datepicker/index.css';
import '~/assets/styles/datepicker.scss';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    CheckedBox,
    UncheckBox,
    ButtonDrop,
    Button,
    InputForm,
    TextAreaForm,
    PopUpDropDown,
    SelectOption,
    DropdownCodeNumber,
    DatePicker,
    ModalConfirmation,
    WarningInfo,
  },
  data() {
    return {
      moment,
      internationalPhoneNumbers,
      codeNumber: '+62',
      codePhone: 62,
      promoStart: '',
      promoEnd: '',
      isShowCodeNumber: false,
      isShowPromoList: false,
      isAgreeTos: false,
      isJoinPo: false,
      isHasPromoPeriod: false,
      isShowModalConfirmation: false,
      isShowFormWarning: false,
      paramProductService: {
        page: 1,
        limit: 10,
        keyword: 'sekeranjang',
      },
      promoList: [
        {
          text: 'Buy 1 Get 1',
          value: 1,
        },
        {
          text: 'Beli ramean/grosir',
          value: 2,
        },
      ],
      promoType: 'Buy 1 Get 1',
      currentStep: 1,
      steps: [
        {
          no: 1,
          text: 'Produk',
        },
        {
          no: 2,
          text: 'Uploader',
        },
        {
          no: 3,
          text: 'Konfirmasi',
        },
      ],
      productImages: [],
      dataDetailProduct: {
        isJoinPo: 0,
        publisherName: '',
        publisherEmail: '',
        publisherPhone: '',
        publisherAddress: '',
        name: '',
        brand: '',
        promoType: 1,
        description: '',
        quota: '2',
        productUrl: '',
        promoStartAt: '',
        promoEndAt: '',
        price: null,
        jointPrice: null,
      },
      errorForm: {
        name: {
          isError: false,
          message: '',
        },
        brand: {
          isError: false,
          message: '',
        },
        description: {
          isError: false,
          message: '',
        },
        price: {
          isError: false,
          message: '',
        },
        jointPrice: {
          isError: false,
          message: '',
        },
        quota: {
          isError: false,
          message: '',
        },
        promoEnd: {
          isError: false,
          message: '',
        },
        publisherName: {
          isError: false,
          message: '',
        },
        publisherEmail: {
          isError: false,
          message: '',
        },
        publisherPhone: {
          isError: false,
          message: '',
        },
        publisherAddress: {
          isError: false,
          message: '',
        },
        image: {
          isError: false,
          message: '',
        },
      },
      isFormValid: true,
    };
  },
  watch: {
    codeNumber() {
      this.validationForm('publisherPhone');
    },
  },
  computed: {
    ...mapGetters({
      isLoadingCreateProduct: 'sekeranjang/getLoadingCreateProduct',
    }),
    descriptionPreview() {
      const list = this.dataDetailProduct.description.split('\n');
      return list;
    },
  },
  mounted() {
    this.setFieldValueFromLocalStorage();
  },
  methods: {
    ...mapActions({
      createProduct: 'sekeranjang/createProduct',
    }),
    toLocalDate(date) {
      return moment(date).locale('id').format('D MMMM YYYY');
    },
    onTickPromoPeriod() {
      this.isHasPromoPeriod = !this.isHasPromoPeriod;
      if (!this.isHasPromoPeriod) {
        this.promoStart = '';
        this.promoEnd = '';
      }
    },
    onCloseModalConfirmation() {
      this.isShowModalConfirmation = !this.isShowModalConfirmation;
    },
    onClickItemCodeNumber(item) {
      this.codeNumber = item.dialCode;
      this.codePhone = item.dialCode.slice(1);
      this.isShowCodeNumber = false;
    },
    onClickNextStep(step) {
      if (this.currentStep === 1) {
        this.validationForm(1);
      } else if (this.currentStep === 2) {
        this.validationForm(2);
      }
      if (this.isFormValid) {
        this.currentStep = step;
        const stepSection = document.getElementById('step-create-product');
        stepSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    },
    onClickStep(step) {
      if (this.currentStep === 1) {
        this.validationForm(1);
      } else if (this.currentStep === 2) {
        this.validationForm(2);
      }
      if (
        this.isFormValid &&
        (this.currentStep > step.no || step.no === this.currentStep + 1)
      ) {
        this.currentStep = step.no;
      }
    },
    showPromoList() {
      this.isShowPromoList = !this.isShowPromoList;
    },
    onClickPromo(item) {
      if (item.value == 1) {
        this.dataDetailProduct.quota = '2';
      }
      this.dataDetailProduct.promoType = item.value;
      this.promoType = item.text;
      this.setLocalStorage('promoType');
      this.isShowPromoList = !this.isShowPromoList;
    },
    onUploadImage(e) {
      const files = e.target.files;
      [...files].forEach((file) => {
        if (this.productImages.length < 5) {
          this.productImages.push(file);
        }
      });
      this.validationForm('image');
    },
    imageUrl(file) {
      return URL.createObjectURL(file);
    },
    removeImage(id) {
      this.productImages.splice(id, 1);
      this.validationForm('image');
    },
    onClickRecheck() {
      this.isShowModalConfirmation = !this.isShowModalConfirmation;
      const stepSection = document.getElementById('step-create-product');
      stepSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    },
    onClickConfirm() {
      this.validationForm();
      if (this.isFormValid && this.isAgreeTos) {
        this.isShowModalConfirmation = !this.isShowModalConfirmation;
        this.isShowFormWarning = false;
      } else {
        this.isShowFormWarning = true;
      }
    },
    validationForm(input) {
      const { dataDetailProduct, promoStart, promoEnd, isJoinPo } = this;
      const nameFormat = /^[A-Za-z][A-Za-z\s]*$/;
      const idnPhoneFormat = /^[8][0-9]*$/;
      const globalPhoneFormat = /^[0-9]*$/;
      const nominalFormat = /^[0-9]*$/;
      if (input === 'name' || input === 1 || !input) {
        if (dataDetailProduct.name === '') {
          this.errorForm.name = {
            isError: true,
            message: 'Nama produk harus diisi',
          };
          this.isFormValid = false;
        } else {
          this.errorForm.name.isError = false;
          this.isFormValid = true;
        }
      }
      if (input === 'brand' || input === 1 || !input) {
        if (dataDetailProduct.brand === '') {
          this.errorForm.brand = {
            isError: true,
            message: 'Brand produk harus diisi',
          };
          this.isFormValid = false;
        } else {
          this.errorForm.brand.isError = false;
          this.isFormValid = true;
        }
      }
      if (input === 'description' || input === 1 || !input) {
        if (dataDetailProduct.description === '') {
          this.errorForm.description = {
            isError: true,
            message: 'Deskripsi produk harus diisi',
          };
          this.isFormValid = false;
        } else {
          this.errorForm.description.isError = false;
          this.isFormValid = true;
        }
      }
      if (input === 'price' || input === 1 || !input) {
        const price = dataDetailProduct.price;
        if (price && price.length > 1 && price.charAt(0) == '0') {
          this.dataDetailProduct.price = price.slice(1, price.length);
        }
        if (!dataDetailProduct.price) {
          this.errorForm.price = {
            isError: true,
            message: 'Harga normal harus diisi',
          };
          this.isFormValid = false;
        } else if (!dataDetailProduct.price.match(nominalFormat)) {
          this.errorForm.price = {
            isError: true,
            message: 'Format harga salah. cth: 123000',
          };
          this.isFormValid = false;
        } else if (dataDetailProduct.price === '0') {
          this.errorForm.price = {
            isError: true,
            message: 'Harga tidak boleh 0',
          };
          this.isFormValid = false;
        } else {
          this.errorForm.price.isError = false;
          this.isFormValid = true;
        }
      }
      if (input === 'jointPrice' || input === 1 || !input) {
        const jointPrice = dataDetailProduct.jointPrice;
        if (
          jointPrice &&
          jointPrice.length > 1 &&
          jointPrice.charAt(0) == '0'
        ) {
          this.dataDetailProduct.jointPrice = jointPrice.slice(
            1,
            jointPrice.length
          );
        }
        if (!dataDetailProduct.jointPrice) {
          this.errorForm.jointPrice = {
            isError: true,
            message: 'Harga patungan harus diisi',
          };
          this.isFormValid = false;
        } else if (!dataDetailProduct.jointPrice.match(nominalFormat)) {
          this.errorForm.jointPrice = {
            isError: true,
            message: 'Format harga salah. cth: 123000',
          };
          this.isFormValid = false;
        } else if (dataDetailProduct.jointPrice === '0') {
          this.errorForm.jointPrice = {
            isError: true,
            message: 'Harga tidak boleh 0',
          };
          this.isFormValid = false;
        } else if (
          parseInt(dataDetailProduct.jointPrice) >=
          parseInt(dataDetailProduct.price)
        ) {
          this.errorForm.jointPrice = {
            isError: true,
            message: 'Harga patungan harus lebih kecil dari harga normal',
          };
          this.isFormValid = false;
        } else {
          this.errorForm.jointPrice.isError = false;
          this.isFormValid = true;
        }
      }
      if (input === 'quota' || input === 1 || !input) {
        const quota = dataDetailProduct.quota;
        if (quota && quota.length > 1 && quota.charAt(0) == '0') {
          this.dataDetailProduct.quota = quota.slice(1, quota.length);
        }
        if (!dataDetailProduct.quota) {
          this.errorForm.quota = {
            isError: true,
            message: 'Total member harus diisi',
          };
          this.isFormValid = false;
        } else if (!dataDetailProduct.quota.match(nominalFormat)) {
          this.errorForm.quota = {
            isError: true,
            message: 'Format total member salah',
          };
          this.isFormValid = false;
        } else if (dataDetailProduct.quota === '0') {
          this.errorForm.quota = {
            isError: true,
            message: 'Total member tidak boleh 0',
          };
          this.isFormValid = false;
        } else {
          this.errorForm.quota.isError = false;
          this.isFormValid = true;
        }
      }
      if (input === 'promoEnd' || input === 1 || !input) {
        if (
          promoStart &&
          promoEnd &&
          moment(promoStart).unix() > moment(promoEnd).unix()
        ) {
          this.errorForm.promoEnd = {
            isError: true,
            message: 'Tanggal akhir promo harus setelah tanggal mulai promo',
          };
          this.isFormValid = false;
        } else {
          this.errorForm.promoEnd.isError = false;
          this.isFormValid = true;
        }
      }
      if (input === 'publisherName' || input === 2 || !input) {
        if (dataDetailProduct.publisherName === '') {
          this.errorForm.publisherName = {
            isError: true,
            message: 'Nama harus diisi',
          };
          this.isFormValid = false;
        } else if (!dataDetailProduct.publisherName.match(nameFormat)) {
          this.errorForm.publisherName = {
            isError: true,
            message: 'Format nama salah',
          };
          this.isFormValid = false;
        } else {
          this.errorForm.publisherName.isError = false;
          this.isFormValid = true;
        }
      }
      if (input === 'publisherEmail' || input === 2 || !input) {
        if (dataDetailProduct.publisherEmail === '') {
          this.errorForm.publisherEmail = {
            isError: true,
            message: 'Email harus diisi',
          };
          this.isFormValid = false;
        } else if (!this.validateEmail(dataDetailProduct.publisherEmail)) {
          this.errorForm.publisherEmail = {
            isError: true,
            message: 'Format email salah',
          };
          this.isFormValid = false;
        } else {
          this.errorForm.publisherEmail.isError = false;
          this.isFormValid = true;
        }
      }
      if (input === 'publisherPhone' || input === 2 || !input) {
        const publisherPhone = dataDetailProduct.publisherPhone;
        if (
          this.codeNumber === '+62' &&
          publisherPhone.length > 1 &&
          publisherPhone.charAt(0) == '0'
        ) {
          this.dataDetailProduct.publisherPhone = publisherPhone.slice(
            1,
            publisherPhone.length
          );
        }
        if (dataDetailProduct.publisherPhone === '') {
          this.errorForm.publisherPhone = {
            isError: true,
            message: 'Nomor whatsapp harus diisi',
          };
          this.isFormValid = false;
        } else if (
          this.codeNumber === '+62' &&
          !dataDetailProduct.publisherPhone.match(idnPhoneFormat)
        ) {
          this.errorForm.publisherPhone = {
            isError: true,
            message: 'Format nomor whatsapp salah. cth: 81234567890',
          };
          this.isFormValid = false;
        } else if (
          this.codeNumber !== '+62' &&
          !dataDetailProduct.publisherPhone.match(globalPhoneFormat)
        ) {
          this.errorForm.publisherPhone = {
            isError: true,
            message: 'Format nomor whatsapp salah',
          };
          this.isFormValid = false;
        } else {
          this.errorForm.publisherPhone.isError = false;
          this.isFormValid = true;
        }
      }
      if (input === 'publisherAddress' || input === 2 || !input) {
        if (isJoinPo && !dataDetailProduct.publisherAddress) {
          this.errorForm.publisherAddress = {
            isError: true,
            message: 'Alamat harus diisi',
          };
          this.isFormValid = false;
        } else {
          this.errorForm.publisherAddress.isError = false;
          this.isFormValid = true;
        }
      }
      if (input === 'image' || input === 1 || !input) {
        if (this.productImages.length === 0) {
          this.errorForm.image = {
            isError: true,
            message: 'Foto produk harus diisi minimal 1 foto',
          };
          this.isFormValid = false;
        } else {
          this.errorForm.image.isError = false;
          this.isFormValid = true;
        }
      }
      if (!input || input === 1 || input === 2) {
        const errors = this.errorForm;
        Object.keys(errors).forEach((key) => {
          const error = errors[key];
          Object.keys(error).forEach((k) => {
            if (error[k] == true) {
              this.isFormValid = false;
            }
          });
        });
      }
      if (!this.isFormValid) {
        const warningElement = document.getElementById(
          'warning-form-not-complete'
        );
        if (warningElement) {
          warningElement.classList.add('horizontal-shake');
          setTimeout(() => {
            warningElement.classList.remove('horizontal-shake');
          }, 500);
        }
      }
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    async onClickSubmit() {
      const { dataDetailProduct, promoStart, promoEnd, codePhone } = this;

      const formData = new FormData();

      formData.append('isJoinPo', this.isJoinPo ? 1 : 0);
      formData.append('publisherName', dataDetailProduct.publisherName);
      formData.append('publisherEmail', dataDetailProduct.publisherEmail);
      formData.append(
        'publisherPhone',
        codePhone + dataDetailProduct.publisherPhone
      );
      formData.append(
        'publisherAddress',
        dataDetailProduct.publisherAddress
          ? dataDetailProduct.publisherAddress
          : null
      );
      formData.append(
        'shippingAddress',
        dataDetailProduct.publisherAddress
          ? dataDetailProduct.publisherAddress
          : null
      );
      formData.append('name', dataDetailProduct.name);
      formData.append('brand', dataDetailProduct.brand);
      formData.append('promoType', dataDetailProduct.promoType);
      formData.append('description', dataDetailProduct.description);
      formData.append('quota', parseInt(dataDetailProduct.quota));
      formData.append('productUrl', dataDetailProduct.productUrl);
      formData.append(
        'promoStartAt',
        promoStart ? moment(promoStart).unix() : dataDetailProduct.promoStartAt
      );
      formData.append(
        'promoEndAt',
        promoEnd
          ? moment(promoEnd).endOf('day').unix()
          : dataDetailProduct.promoEndAt
      );
      formData.append('price', parseInt(dataDetailProduct.price));
      formData.append('jointPrice', parseInt(dataDetailProduct.jointPrice));
      this.productImages.forEach((image) => {
        formData.append('image', image);
      });

      this.createProduct(formData);
    },
    setFieldValueFromLocalStorage() {
      const registeredProduct = JSON.parse(
        localStorage.getItem('registered_product')
      );
      if (registeredProduct) {
        this.dataDetailProduct.publisherName = registeredProduct.publisherName;
        this.dataDetailProduct.publisherEmail =
          registeredProduct.publisherEmail;
        this.dataDetailProduct.publisherPhone =
          registeredProduct.publisherPhone;
        this.dataDetailProduct.publisherAddress =
          registeredProduct.publisherAddress;
        this.dataDetailProduct.name = registeredProduct.name;
        this.dataDetailProduct.brand = registeredProduct.brand;
        this.dataDetailProduct.promoType = registeredProduct.promoTypeValue;
        this.dataDetailProduct.quota = registeredProduct.quota
          ? registeredProduct.quota
          : this.dataDetailProduct.quota;
        this.dataDetailProduct.productUrl = registeredProduct.productUrl;
        this.dataDetailProduct.price = registeredProduct.price;
        this.dataDetailProduct.jointPrice = registeredProduct.jointPrice;
        this.promoType = registeredProduct.promoTypeText
          ? registeredProduct.promoTypeText
          : this.promoType;
      }
    },
    setLocalStorage(id) {
      const { dataDetailProduct } = this;
      const dataRegister = {
        publisherName: dataDetailProduct.publisherName,
        publisherEmail: dataDetailProduct.publisherEmail,
        publisherPhone: dataDetailProduct.publisherPhone,
        name: dataDetailProduct.name,
        promoTypeValue: dataDetailProduct.promoType,
        promoTypeText: this.promoType,
        quota: dataDetailProduct.quota,
        productUrl: dataDetailProduct.productUrl,
        price: dataDetailProduct.price,
        jointPrice: dataDetailProduct.jointPrice,
        brand: dataDetailProduct.brand,
      };
      localStorage.setItem('registered_product', JSON.stringify(dataRegister));
    },
    currencyFormat,
  },
};
</script>

<style lang="scss" scoped>
.datepicker {
  width: 100% !important;
}
.image-button {
  border-color: #417465 !important;
}
.detail-box {
  border-left-color: #8dcabe !important;
}
.horizontal-shake {
  animation: horizontal-shaking 0.35s infinite;
}
@keyframes horizontal-shaking {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
