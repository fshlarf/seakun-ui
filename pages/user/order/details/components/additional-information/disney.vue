<template>
  <div>
    <div class="p-4 bg-[#F6FFFD] border border-[#E0F8F2] text-sm rounded-lg">
      <div class="flex items-center gap-3">
        <p class="text-[#66738F]">Credential Akun</p>
        <img
          src="/images/order-details/icons/copy.svg"
          alt="info"
          class="w-5 h-5 cursor-pointer"
          @click="copyPhoneNumber"
        />
      </div>

      <hr class="border-[#BDC3D8]/10 my-3" />
      <div class="flex items-center gap-2">
        <img
          src="/images/icons/atoms/phone-green.svg"
          alt="phone"
          class="w-5 h-5"
        />
        <p class="text-[#00BA88]">{{ phoneNumber }}</p>
      </div>
    </div>
    <div class="mt-5">
      <BannerAddtionalInformationVue :message="disneyInformation" />
    </div>
  </div>
</template>

<script>
import BannerAddtionalInformationVue from './banner-addtional-information.vue';
export default {
  components: {
    BannerAddtionalInformationVue,
  },
  data() {
    return {
      disneyInformation: {
        title: 'Kebutuhan OTP',
        text:
          'Kebutuhan OTP saat login bisa request ke Admin atau User Host di group Whatsapp.',
      },
    };
  },
  props: {
    phoneNumber: {
      typeof: String,
      default: '',
    },
  },
  methods: {
    copyPhoneNumber() {
      navigator.clipboard.writeText(this.phoneNumber);
      this.$alert.show({
        status: 'success',
        title: '',
        message: 'Copied to clipboard',
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
