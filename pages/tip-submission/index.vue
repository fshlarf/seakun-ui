<template>
  <div class="max-w-[1000px] mx-auto tn:pt-4 lg:pt-8">
    <div
      class="grid tn:grid-cols-1 md:grid-cols-5 tn:gap-4 md:gap-8 items-center shadow-card xl:rounded-3xl tn:p-6 md:p-10"
    >
      <div class="md:col-span-3 tn:order-2 md:order-1">
        <h1 class="text-[20px] lg:text-[32px] font-bold tn:hidden md:block">
          Scan QRIS untuk Kirim TIPS
        </h1>
        <div
          class="md:mt-6 rounded-xl tn:px-[15px] md:px-[20px] lg:px-[30px] tn:py-[12px] md:py-[15px] lg:py-[20px] tn:text-sm text-gray-600 bg-[#F4F9F8] md:text-base text-justify"
        >
          <p class="font-bold">Cara Kirim:</p>
          <ul
            class="font-base list-disc tn:pl-4 tn:mt-1 space-y-1 tn:text-sm md:text-base"
          >
            <li>
              (1) Scan QRIS di atas lewat aplikasi e-wallet atau m-banking. (2)
              Masukkan nominal yang ingin ditransfer. (3) Masukkan pin
              e-wallet/m-banking. (4) Selesai.
            </li>
            <li>
              Jika menggunakan smartphone, (1) Ambil tangkapan layar
              (screenshot) pada kode QRIS di atas. (2) Buka aplikasi e-wallet
              atau m-banking. (3) Pilih Scan QR. (4) Pilih upload image dari
              galeri. (5) Pilih gambar tangkapan layar QRIS yang sudah
              tersimpan. (6) Masukkan nominal yang ingin di transfer. (7)
              Masukkan pin e-wallet/m-banking. (8) Selesai.
            </li>
          </ul>
        </div>
      </div>
      <div class="md:col-span-2 tn:order-1 md:order-2">
        <h1 class="text-[20px] lg:text-[32px] font-bold md:hidden">
          Scan QRIS untuk Kirim TIPS
        </h1>
        <img
          class="mx-auto w-full tn:mt-4 md:mt-0"
          src="/images/journey/qr-code.png"
          alt="qris"
        />
      </div>
    </div>

    <div
      class="shadow-card xl:rounded-3xl tn:p-6 md:p-10 tn:mt-6 md:mt-0 xl:mt-12"
    >
      <h1 class="text-[20px] lg:text-[32px] font-bold">
        Isi Data Donatur TIPS
      </h1>
      <p class="tn:text-[12px] md:text-[14px] tn:mt-3">
        Silahkan isi data di bawah agar nama kakak bisa masuk ke dalam List
        Donatur TIPS dan ditampilkan di website Seakun.
      </p>
      <div
        class="bg-[#FFF2F2] tn:p-3 md:p-4 rounded-xl tn:text-[12px] md:text-[14px] tn:mt-3 w-full"
      >
        Abaikan pengisian data bila kakak tidak ingin nama kakak ditampilkan di
        web Seakun. Klik
        <nuxt-link to="/tip" class="font-bold underline">link ini</nuxt-link>
        untuk kembali ke halaman sebelumnya.
      </div>

      <input
        type="file"
        id="payment"
        accept="image/png, image/jpg, image/jpeg"
        @change="getPaymentImage"
        hidden
      />
      <label
        class="w-full rounded-2xl border-upload tn:mt-8 tn:py-20 cursor-pointer border-dashed"
        :class="{ hidden: imageFile }"
        for="payment"
      >
        <div class="text-center">
          <img
            class="mx-auto"
            src="/images/icons/atoms/upload.svg"
            alt="upload gambar"
          />
          <p class="opacity-50 tn:mt-5">Upload bukti transfer</p>
        </div>
      </label>
      <p
        v-if="errorForm.uploadImage.isError"
        class="text-red-500 text-xs italic"
      >
        {{ errorForm.uploadImage.message }}
      </p>

      <div
        class="tn:mt-8 mx-auto"
        :class="`${
          isUpload && /(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(fileExtension)
            ? 'block'
            : 'hidden'
        }`"
      >
        <img
          class="mx-auto md:max-h-[500px]"
          id="previewImage"
          alt="your image"
        />
      </div>

      <div class="tn:mt-8">
        <InputForm
          label="Nama lengkap"
          placeholder="Masukkan nama"
          class="tn:mt-6"
          v-model="name"
          id="name"
          :error="errorForm.name"
        />
        <div class="flex items-center space-x-3 tn:mt-3">
          <div
            class="cursor-pointer w-[20px]"
            @click="isHideName = !isHideName"
          >
            <CheckedBox v-if="isHideName" />
            <UncheckBox v-else />
          </div>
          <p class="tn:text-[14px] opacity-50">
            Sembunyikan nama pada list donatur. cth: "R****e Y**l"
          </p>
        </div>

        <div class="tn:mt-6">
          <p class="text-sm">Media Sosial (Opsional)</p>
          <div class="grid grid-cols-2 gap-4 tn:mt-3 text-primary">
            <div
              v-for="(media, id) in socialMediaList"
              :key="id"
              role="button"
              class="flex justify-center items-center space-x-2 shadow-pill rounded-[8px] tn:py-4"
              :class="{ active: socialMedia === media.value }"
              @click="onClickSocialMedia(media.value)"
            >
              <i :class="`fa-brands fa-${media.value}`"></i>
              <p class="text-[12px]">{{ media.name }}</p>
            </div>
          </div>
        </div>

        <InputForm
          v-if="socialMedia"
          :label="`Username ${capitalizeFirstLetter(socialMedia)}`"
          class="tn:mt-6"
          placeholder="Masukkan username"
          :error="errorForm.accountName"
          v-model="accountName"
          id="accountName"
        />
        <div v-if="socialMedia" class="flex items-center space-x-3 tn:mt-3">
          <div
            class="cursor-pointer w-[20px]"
            @click="isHideAccountName = !isHideAccountName"
          >
            <CheckedBox v-if="isHideAccountName" />
            <UncheckBox v-else />
          </div>
          <p class="tn:text-[14px] opacity-50">
            Sembunyikan username pada list donatur. cth: "S******b"
          </p>
        </div>

        <InputForm
          label="Nominal TIPS"
          class="tn:mt-6"
          placeholder="cth. 50000"
          :error="errorForm.nominal"
          v-model="nominal"
          id="nominal"
        />
        <div class="flex items-center space-x-3 tn:mt-3">
          <div
            class="cursor-pointer w-[20px]"
            @click="isHideNominal = !isHideNominal"
          >
            <CheckedBox v-if="isHideNominal" />
            <UncheckBox v-else />
          </div>
          <p class="tn:text-[14px] opacity-50">
            Sembunyikan nominal TIPS pada list donatur. cth: "RpXX.XXX"
          </p>
        </div>

        <TextAreaForm
          rows="4"
          label="Pesan"
          placeholder="Beri pesan untuk tim Seakun"
          class="tn:mt-6 text-[16px]"
          v-model="message"
          id="message"
          :error="errorForm.message"
        />

        <Button
          class="w-full bg-green-seakun text-white py-3 tn:mt-5 md:mt-8"
          label="Submit"
          :is-loading="isLoadingSubmitDonation"
          @click="onClickSubmitData"
        />
      </div>
    </div>
    <ModalDonationSuccess
      :show-modal="isShowModalSuccess"
      @onClose="isShowModalSuccess = !isShowModalSuccess"
    />
  </div>
</template>

<script>
import TextAreaForm from '~/components/atoms/TextArea.vue';
import InputForm from '~/components/atoms/Input.vue';
import CheckedBox from '~/assets/images/icon/checked-box.svg?inline';
import UncheckBox from '~/assets/images/icon/uncheck-box.svg?inline';
import { capitalizeFirstLetter } from '../../helpers';
import Button from '~/components/atoms/Button.vue';
import MasterService from '~/services/MasterServices.js';
import ModalDonationSuccess from './views/ModalSuccess.vue';

export default {
  layout: 'new',
  components: {
    InputForm,
    CheckedBox,
    UncheckBox,
    TextAreaForm,
    Button,
    ModalDonationSuccess,
  },
  data() {
    return {
      MasterService,
      donationType: 'general',
      name: '',
      isHideName: false,
      socialMedia: '',
      accountName: '',
      isHideAccountName: false,
      nominal: '',
      isHideNominal: false,
      message: '',
      isUpload: false,
      fileExtension: '',
      imageFile: null,
      errorForm: {
        name: {
          isError: false,
          message: '',
        },
        nominal: {
          isError: false,
          message: '',
        },
        message: {
          isError: false,
          message: '',
        },
        uploadImage: {
          isError: false,
          message: '',
        },
      },
      socialMediaList: [
        {
          name: 'Instagram',
          value: 'instagram',
        },
        {
          name: 'Twitter',
          value: 'twitter',
        },
      ],
      isLoadingSubmitDonation: false,
      isShowModalSuccess: false,
    };
  },
  mounted() {
    this.MasterService = new MasterService(this);
  },
  methods: {
    onClickSocialMedia(media) {
      if (media === this.socialMedia) {
        this.socialMedia = '';
      } else {
        this.socialMedia = media;
      }
    },
    getPaymentImage(event) {
      const imageFiles = event.target.files;
      const file = imageFiles[0];
      if (file) {
        this.isUpload = true;
        const fileExtension = this.getFileExtension(file.name);
        this.fileExtension = fileExtension;
        this.imageFile = file;

        const imageUpload = document.getElementById('previewImage');
        imageUpload.src = URL.createObjectURL(this.imageFile);

        this.errorForm.uploadImage.isError = false;
      }
    },
    getFileExtension(filename) {
      return filename.substring(filename.lastIndexOf('.') + 1);
    },
    onCloseModalSuccess() {
      this.isShowModalSuccess = false;
    },
    onClickSubmitData() {
      let isValid = true;
      const nominalFormat = /^[0-9]*$/;
      if (!this.name) {
        this.errorForm.name = {
          isError: true,
          message: 'Nama harus di isi',
        };
        isValid = false;
      } else {
        this.errorForm.name.isError = false;
      }

      if (!this.nominal) {
        this.errorForm.nominal = {
          isError: true,
          message: 'Nominal TIPS harus di isi',
        };
        isValid = false;
      } else if (!this.nominal.toString().match(nominalFormat)) {
        this.errorForm.nominal = {
          isError: true,
          message: 'Format nominal salah',
        };
        isValid = false;
      } else {
        this.errorForm.nominal.isError = false;
      }

      if (!this.message) {
        this.errorForm.message = {
          isError: true,
          message: 'Pesan harus di isi',
        };
        isValid = false;
      } else {
        this.errorForm.message.isError = false;
      }

      if (this.imageFile === null) {
        this.errorForm.uploadImage = {
          isError: true,
          message: 'Bukti pembayaran harus diisi',
        };
        isValid = false;
      } else {
        this.errorForm.uploadImage.isError = false;
      }

      if (isValid) {
        this.submitDonation();
      }
    },
    async submitDonation() {
      const { MasterService } = this;
      this.isLoadingSubmitDonation = true;
      const accountName = this.accountName ? this.accountName : '';
      const socialMedia = this.accountName ? this.socialMedia : '';
      const isHideName = this.isHideName ? 1 : 0;
      const isHideNominal = this.isHideNominal ? 1 : 0;
      const isHideAccountName = this.isHideAccountName ? 1 : 0;

      const formDataDigital = new FormData();
      formDataDigital.append('donationType', this.donationType);
      formDataDigital.append('isDisplayed', 1);
      formDataDigital.append('name', this.name);
      formDataDigital.append('isHideName', isHideName);
      formDataDigital.append('nominal', this.nominal);
      formDataDigital.append('isHideNominal', isHideNominal);
      formDataDigital.append('socialMedia', socialMedia);
      formDataDigital.append('accountName', accountName);
      formDataDigital.append('isHideAccountName', isHideAccountName);
      formDataDigital.append('nominal', this.nominal);
      formDataDigital.append('message', this.message);
      formDataDigital.append('image', this.imageFile);
      try {
        const fetchSubmitDonation = await MasterService.addDonation(
          formDataDigital
        );

        if (fetchSubmitDonation.data) {
          this.isShowModalSuccess = true;
        } else {
          throw new Error(fetchSubmitDonation);
        }
      } catch (error) {
        console.log(error);
        this.$alert.show({
          status: 'error',
          message: 'Terjadi kesalahan. Harap coba kembali beberapa saat lagi',
        });
      }
      this.isLoadingSubmitDonation = false;
    },
    capitalizeFirstLetter,
  },
};
</script>

<style>
.shadow-pill {
  box-shadow: 0px 13px 22px rgba(0, 0, 0, 0.08);
}
.border-upload {
  border: 2px dashed rgba(141, 202, 190, 0.5);
}
.active {
  border: 2px solid #a9e0d5;
  background-image: linear-gradient(to right, #ffffff, #d4f1ec);
}
@media (min-width: 768px) {
  .shadow-card {
    box-shadow: 0px 4px 20px rgba(141, 202, 190, 0.15);
  }
}
</style>
