<template>
  <div
    class="dm-sans p-4 md:p-5 lg:p-6 bg-white rounded-xl mt-6 md:mt-0"
    style="box-shadow: 0px 2px 10px 0px rgba(158, 161, 182, 0.1)"
  >
    <section
      class="md:flex items-center gap-2 cursor-pointer hidden"
      @click="$emit('clickArrow')"
    >
      <img src="/images/icons/atoms/arrow-back.svg" alt="back" />
      <p class="text-xs text-gray-secondary">Kembali</p>
    </section>
    <section class="md:mt-6">
      <h1 class="text-[20px] text-gray-secondary font-bold hidden md:block">
        Edit Profile
      </h1>
      <img
        src="/images/profile-page/dummy-profile.png"
        alt="profile"
        class="w-[78px] h-[78px] rounded-full md:mt-6 mx-auto md:mx-0"
      />
    </section>
    <form action="submit" class="mt-6 space-y-3 md:space-y-4 lg:space-y-6">
      <Input
        label="Nama Lengkap"
        class-label="!text-sm md:!text-xs !text-gray-secondary"
        class-name="!text-sm md:!text-base !text-gray-secondary"
      />
      <Input
        label="No Whatsapp"
        class-label="!text-sm md:!text-xs  !text-gray-secondary"
        class-name="!text-sm md:!text-base !text-gray-secondary"
      />
      <Input
        label="Email"
        class-label="!text-sm md:!text-xs !text-gray-secondary"
        class-name="!text-sm md:!text-base !text-gray-secondary"
      />
      <div>
        <InputPassword
          label="Password"
          class-label="!text-sm md:!text-xs  !text-gray-secondary"
          class-name="!text-sm md:!text-base !text-gray-secondary"
        />
        <nuxt-link to="/user/profile/reset-password">
          <p class="text-sm md:text-base text-[#3299DB] mt-3 text-right">
            Reset Password?
          </p>
        </nuxt-link>
      </div>
      <div class="text-right">
        <Button
          class="!text-sm md:!text-base border-2 border-green-primary bg-green-primary w-full md:w-[166px] h-[40px] md:h-[46px] text-white"
        >
          Simpan
        </Button>
      </div>
    </form>
  </div>
</template>

<script>
import Input from '~/components/atoms/Input.vue';
import InputPassword from '~/components/atoms/InputPassword.vue';
import Button from '~/components/atoms/Button.vue';
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
</style>
