<template>
  <div class="w-full min-h-screen h-full hero-register">
    <main
      class="px-4 sm:px-[1rem] md:px-[2rem] lg:px-0 pb-4 lg:pb-0 lg:grid grid-cols-2"
    >
      <div
        class="hidden lg:block w-full min-h-screen bg-no-repeat bg-bottom bg-cover"
        style="background-image: url(/images/background/bg-register.png)"
      ></div>
      <div class="w-full sm:max-w-[478px] mx-auto lg:hidden pt-8">
        <nuxt-link to="/">
          <img src="/images/icons/atoms/arrow-bold.svg" alt="back" />
        </nuxt-link>
      </div>
      <section
        class="w-full lg:bg-white min-h-screen relative mt-4 lg:mt-0 rounded-[12px] lg:rounded-none"
      >
        <img
          src="/images/background/right-register.png"
          alt="ilustration"
          class="absolute top-0 right-0 hidden lg:block"
        />
        <form
          action="submit"
          @submit.prevent="submit"
          class="w-full rounded-xl lg:rounded-none bg-white sm:max-w-[478px] mx-auto p-1 lg:p-5 mt-3 lg:mt-[60px]"
        >
          <img
            src="/images/illustration/register-mobile.png"
            alt="login"
            class="w-full object-contain lg:hidden"
          />
          <div class="px-3 lg:px-0 mt-3 lg:mt-0">
            <h1 class="text-[26px] font-bold text-[#49A794]">
              Buat Akun Disini
            </h1>
            <p class="text-base text-gray-secondary dm-sans pt-1 lg:pt-0">
              Silakan buat akun Kamu disini.
            </p>
          </div>
          <div class="space-y-3 lg:space-y-4 mt-3 lg:mt-8 px-3 lg:px-0">
            <Input
              label="Nama Lengkap"
              id="name"
              name="name"
              placeholder="Masukkan nama kamu disini"
              class-name="text-sm lg:text-base "
              class-label="text-gray-secondary !text-sm !lg:text-base"
            />
            <Input
              label="Email"
              placeholder="Masukkan email kamu disini"
              class-name="text-sm lg:text-base "
              class-label="text-gray-secondary !text-sm !lg:text-base"
            />
            <Input
              label="Nomor Whatsapp"
              placeholder="Cth: 62812345678"
              class-name="text-sm lg:text-base "
              class-label="text-gray-secondary !text-sm !lg:text-base"
            />
            <InputPassword
              label=" Password"
              placeholder="Masukkan  password kamu disini"
              class-name="text-sm lg:text-base "
              class-label="text-gray-secondary !text-sm !lg:text-base"
            />
            <InputPassword
              label="Konfirmasi Password"
              class-name="text-sm lg:text-base "
              placeholder="Ketik ulang password kamu disini"
              class-label="text-gray-secondary !text-sm !lg:text-base dm-sans "
            />
          </div>
          <div class="px-3 lg:px-0">
            <Button
              type="submit"
              add-class="bg-[#08A081] text-white w-full !h-[42px] lg:!h-[54px] text-base font-bold mt-8 lg:mt-11 dm-sans"
              >Daftar</Button
            >
            <p
              class="pt-3 pb-3 lg:pb-0 lg:pt-8 text-center dm-sans text-sm lg:text-base text-gray-secondary"
            >
              Sudah punya akun?
              <span
                class="text-[#08A081] cursor-pointer"
                @click="$router.push('/user/login')"
                >Login</span
              >
            </p>
          </div>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
import Button from '../../../components/atoms/Button.vue';
import Input from '../../../components/atoms/Input.vue';
import InputPassword from '~/components/atoms/InputPassword.vue';
export default {
  components: {
    Input,
    Button,
    InputPassword,
  },
};
</script>
<style lang="scss" scoped>
.dm-sans {
  font-family: 'DM Sans', sans-serif;
  font-feature-settings: 'clig' off, 'liga' off;
}
@media only screen and (max-width: 1024px) {
  .hero-register {
    background-color: #c7f5ec;
  }
}
@media only screen and (min-width: 1024px) {
  .hero-register {
    background-color: #c7f5ec;
  }
}
</style>
