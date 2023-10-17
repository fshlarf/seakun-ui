<template>
  <div>
    <div @click="isShow = !isShow" role="button" class="w-[42px] h-[42px]">
      <img src="/images/profile-page/avatar/man-1.svg" alt="profile" />
    </div>
    <div class="relative z-0 w-0 h-0">
      <div
        class="absolute top-0 right-0 z-[222] bg-white rounded-l-[8px] rounded-br-[8px] overflow-hidden shadow-md transition-all ease-in-out duration-200"
        :class="`${
          isShow ? 'h-auto py-2 opacity-100 w-[100px] ' : 'h-0 w-0 opacity-0'
        }`"
      >
        <div
          @click="$emit('onClickLogout')"
          role="button"
          class="py-2 px-4 text-sm hover:bg-[#F4F9F8]"
        >
          Logout
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style></style>
