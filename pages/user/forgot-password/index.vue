<template>
  <div class="w-full min-h-screen bg-[#EBFFFB] lg:bg-white">
    <div class="lg:grid grid-cols-2 px-4 sm:px-[1rem] md:px-[2rem] lg:px-0">
      <section
        class="relative w-full min-h-screen bg-[#DFFFF8] hidden lg:block"
      >
        <img
          src="/images/brand-seakun/seakun-green.svg"
          alt="seakun"
          class="w-[120px] h-[29px] absolute top-[61px] left-[59px]"
        />
        <img
          src="/images/illustration/forgot-password.png"
          alt="illustration"
          class="mx-auto mt-[138px]"
        />
      </section>
      <div class="w-full pt-8 lg:pt-0">
        <RequestFromEmail v-if="form == 1" />
        <FormVerification v-else-if="form == 2" />
        <FormNewPassword v-else-if="form == 3" />
        <ModalSuccsess v-else />
      </div>
    </div>
  </div>
</template>

<script>
import Input from '~/components/atoms/Input.vue';
import Button from '~/components/atoms/Button.vue';
import RequestFromEmail from './views/request-from-email.vue';
import FormVerification from './views/form-verification.vue';
import FormNewPassword from './views/form-new-password.vue';
import ModalSuccsess from './views/modal-succsess.vue';

export default {
  components: {
    Input,
    Button,
    RequestFromEmail,
    FormVerification,
    FormNewPassword,
    ModalSuccsess,
  },
  data() {
    return {
      form: 3,
    };
  },
};
</script>

<style lang="scss" scoped>
.dm-sans {
  font-family: 'DM Sans', sans-serif;
  font-feature-settings: 'clig' off, 'liga' off;
}
</style>
