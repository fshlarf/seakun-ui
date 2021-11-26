<template>
  <div
    class="tn:py-2 lg:py-3 px-3 tn:rounded-full md:rounded-2xl shadow text-center justify-center border-[2px] border-white bg-white"
    v-on:click="onClickMenu(lable)"
  >
    <p class="text-lg font-bold">
      {{ lable }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'MenuPill',
  props: {
    lable: {
      type: String,
      default: '',
    },
  },
  methods: {
    onClickMenu(menu) {
      this.$emit('onClickMenu', menu);
    },
  },
};
</script>

<style></style>
