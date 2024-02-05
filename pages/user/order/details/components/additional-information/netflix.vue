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
      </div>
      <div class="flex items-center gap-1">
        <img
          src="/images/order-details/information/password.svg"
          alt="email"
          class="w-[18px] h-[18px]"
        />
        <p>
          Password :
          <span v-if="isShowPassword">{{ information.email.password }}</span>
          <span
            v-else
            class="tracking-[1px]"
            v-html="maskPassword(information.email.password)"
          >
          </span>
        </p>
        <img
          :src="[
            isShowPassword
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
        <p>Profile : {{ information.netflix.profileName }}</p>
      </div>
      <div class="flex items-center gap-1">
        <img
          src="/images/order-details/information/key.svg"
          alt="email"
          class="w-[18px] h-[18px]"
        />
        <p>Pin : {{ information.netflix.pin }}</p>
      </div>
    </div>
    <hr class="mt-5 mb-2 border-[#BDC3D8]/20" />
    <p class="text-[#66738F] font-medium">
      Khusus untuk User TV, kebutuhan OTP saat login bisa request ke admin.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    information: {
      typeof: Object,
      default: () => {},
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
  },
};
</script>

<style lang="scss" scoped></style>
