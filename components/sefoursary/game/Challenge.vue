<template>
  <div class="container-about-us relative z-40">
    <div
      class="seafoursary__question bg-cover w-[328px] sm:w-[520px] h-[241px] sm:h-[382px] mx-auto mt-[52px] sm:mt-[60px] flex justify-center items-center px-10 pt-[76px] sm:pt-[30px] pb-[55px] sm:pb-0"
    >
      <div>
        <p
          class="text-primary text-sm sm:text-xl md:text-[20px] lg:text-2xl font-extrabold text-center leading-5"
        >
          {{ challenge.challenge }}
        </p>
        <div
          class="mt-2 sm:mt-4 flex gap-3 justify-center"
          v-if="challenge.isDownloadApps"
        >
          <img
            src="/images/sefoursary/background/play-store.webp"
            alt="play-store"
            class="w-[90px] sm:w-[130px] cursor-pointer"
            @click="
              windowOpen(
                'https://play.google.com/store/apps/details?id=id.seakun.app'
              )
            "
          />

          <img
            src="/images/sefoursary/background/app-store.webp"
            alt="app-store"
            class="w-[90px] sm:w-[130px] cursor-pointer"
            @click="
              windowOpen('https://apps.apple.com/id/app/seakun/id6476961583')
            "
          />
        </div>
        <div
          class="text-xs sm:text-sm font-bold text-[#66738F] text-center max-w-[260px] sm:max-w-[349px] mx-auto mt-2 sm:mt-5 flex justify-center items-center gap-2"
        >
          <p>
            {{ file ? fileName : challenge.task }}
          </p>
          <img
            v-if="file"
            src="/images/sefoursary/icons/delete.svg"
            alt="delete"
            class="w-5 h-5 cursor-pointer mb-2"
            @click="file = null"
          />
        </div>

        <div v-if="!file" class="relative w-max mx-auto">
          <button
            class="bg-[#19C09E] border border-[#15A386] w-[100px] sm:w-[140] sm:h-11 h-8 flex justify-center items-center text-white rounded-lg text-sm sm:text-base font-extrabold mx-auto mt-3 sm:mt-4"
          >
            Upload
          </button>
          <input
            type="file"
            accept="image/jpeg, image/jpg, image/png"
            class="absolute top-0 left-0 bottom-0 -right-1 cursor-pointer opacity-0"
            @change="onInsertImage"
          />
        </div>

        <button
          v-else
          @click="onSendImg"
          :disabled="isLoading"
          class="bg-[#19C09E] border border-[#15A386] w-[100px] sm:w-[140] sm:h-11 h-8 flex justify-center items-center text-white rounded-lg text-sm sm:text-base font-extrabold mx-auto mt-3 sm:mt-4"
        >
          <div v-if="isLoading">
            <div
              class="bg-[#19C09E] border border-[#15A386] min-w-[100px] sm:min-w-[140] sm:h-11 h-8 flex justify-center items-center text-white rounded-lg text-sm sm:text-base font-extrabold mx-auto space-x-1 px-2"
            >
              <i class="fa-solid fa-circle-notch fa-spin"></i>
              <span>Loading... </span>
            </div>
          </div>
          <div v-else>Kirim</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { SefoursaryService } from '~/services/SefoursaryService.js';

export default {
  props: {
    challenge: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      SefoursaryService,
      file: null,
      fileName: '',
      isLoading: false,
    };
  },
  created() {
    this.SefoursaryService = new SefoursaryService(this);
  },
  methods: {
    windowOpen(link) {
      window.open(link, '_blank');
    },
    onInsertImage(e) {
      const getFile = e.target.files[0];
      this.file = getFile;
      this.fileName = getFile.name;
    },
    async onSendImg() {
      this.isLoading = true;
      try {
        const getCustomerInfo = JSON.parse(localStorage.getItem('customer'));

        const { email, name, userUid, phoneNumber } = getCustomerInfo;

        const payload = {
          email,
          name,
          userUid,
          phone: phoneNumber,
          challenge: this.challenge.challenge,
          level: this.challenge.level,
          file: this.file,
        };
        const newForm = new FormData();

        Object.entries(payload).forEach(([key, value]) => {
          newForm.append(key, value);
        });
        const res = await this.SefoursaryService.uploadImage(newForm);

        if (res.status === 200) {
          this.$emit('submitChallenge', true);
        }
      } catch (error) {
        this.$alert.show({
          status: 'error',
          message: 'Terjadi kesalahan. Silahkan coba lagi',
        });
        console.log('error', error);
      }
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.seafoursary__question {
  background-image: url('/images/sefoursary/background/challenge.webp');
}
</style>
