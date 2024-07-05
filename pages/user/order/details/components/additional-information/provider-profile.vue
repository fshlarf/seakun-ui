<template>
  <div
    class="p-3 lg:p-4 bg-[#F6FFFD] rounded-lg border border-[#E0F8F2] text-xs md:text-sm"
  >
    <p class="text-[#66738F]">Credential Akun</p>
    <div class="mt-6 text-[#474747] space-y-2 lg:space-y-3">
      <div class="flex items-center gap-1">
        <img
          src="/images/order-details/information/email.svg"
          alt="email"
          class="w-[18px] h-[18px]"
        />
        <p>Email : {{ information.email.email }}</p>
        <CopyButton :value="information.email.email" />
      </div>
      <div class="flex items-center gap-1">
        <img
          src="/images/order-details/information/password.svg"
          alt="email"
          class="w-[18px] h-[18px]"
        />
        <p>
          Password :
          <span v-if="isShowPassword">{{ information.password }}</span>
          <span
            v-else
            class="tracking-[1px]"
            v-html="maskPassword(information.password)"
          >
          </span>
        </p>
        <img
          :src="[
            !isShowPassword
              ? '/images/order-details/icons/eye-slash.svg'
              : '/images/order-details/icons/eye-slash-hide.svg',
          ]"
          alt="password"
          class="w-4 h-4 cursor-pointer"
          @click="isShowPassword = !isShowPassword"
        />
      </div>
      <div class="flex items-center gap-1">
        <img
          src="/images/order-details/information/profile.svg"
          alt="email"
          class="w-[18px] h-[18px]"
        />
        <p>Profile : {{ information[replaceSlug(slug)].profileName }}</p>
      </div>
      <div
        v-if="information[replaceSlug(slug)].pin"
        class="flex items-center gap-1"
      >
        <img
          src="/images/order-details/information/key.svg"
          alt="email"
          class="w-[18px] h-[18px]"
        />

        <p>Pin : {{ information[replaceSlug(slug)].pin }}</p>
      </div>
    </div>
    <div v-if="slug == 'netflix'">
      <hr class="mt-5 mb-2 border-[#BDC3D8]/20" />
      <p class="text-[#66738F] font-medium">
        Khusus untuk User TV, kebutuhan OTP saat login bisa request ke admin.
      </p>
    </div>
  </div>
</template>

<script>
import CopyButton from '~/components/atoms/CopyButton.vue';
export default {
  components: {
    CopyButton,
  },
  props: {
    information: {
      typeof: Object,
      default: () => {},
    },
    slug: {
      typeof: String,
      default: '',
    },
  },
  data() {
    return {
      isShowPassword: false,
    };
  },
  methods: {
    maskPassword(word) {
      const masked = '&#8226;'.repeat(word.length);
      return `<span>${masked}</span>`;
    },
    replaceSlug(slug) {
      if (slug == 'amazon-prime') {
        return 'primeVideo';
      } else return this.convertToCamelCase(slug);
    },
    convertToCamelCase(input) {
      const words = input.split('-').map((word, index) => {
        return index === 0
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1);
      });

      const camelCaseString = words.join('');

      return camelCaseString;
    },
  },
};
</script>

<style lang="scss" scoped></style>
