<template>
  <div
    class="dm-sans w-full p-4 md:p-5 lg:p-6 bg-white rounded-xl border-[1px] md:border-none border-[#08A0811A]/10"
  >
    <main class="flex justify-between">
      <div class="md:flex gap-6">
        <section>
          <img
            src="/images/profile-page/dummy-profile.png"
            alt="profile"
            class="rounded-full w-[58px] h-[58px] lg:w-[78px] lg:h-[78px]"
          />
        </section>
        <section
          class="flex gap-6 md:gap-[60px] text-xs md:text-sm mt-3 md:mt-0"
        >
          <div class="text-[#66738F] space-y-2 md:space-y-3 whitespace-nowrap">
            <p>Nama Lengkap</p>
            <p>No Whatsapp</p>
            <p>Email</p>
          </div>
          <div
            class="text-gray-secondary space-y-2 md:space-y-3 max-w-[200px] truncate"
          >
            <p class="truncate">{{ profile.name }}</p>
            <p class="truncate">{{ profile.phoneNumber }}</p>
            <p class="truncate">{{ profile.email }}</p>
          </div>
        </section>
      </div>
      <div
        class="cursor-pointer hidden md:block relative z-20"
        @click="$emit('clickEditButton')"
      >
        <img src="/images/profile-page/icon-edit.svg" alt="edit" />
      </div>
    </main>
    <div class="text-center mt-8 md:hidden">
      <Button
        @click="$emit('clickEditButton')"
        add-class="bg-green-primary text-white w-full !h-[38px] !text-sm font-bold"
        >Edit Profile</Button
      >
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
export default {
  components: {
    Button,
  },
  props: {
    profile: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.dm-sans {
  font-family: 'DM Sans', sans-serif;
  font-feature-settings: 'clig' off, 'liga' off;
}
</style>
