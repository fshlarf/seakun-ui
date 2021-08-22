<template>
  <div
    class="w-full h-full rounded-2xl bg-gradient-to-r from-black to-[#e94949] p-8 text-center"
  >
    <div>
      <img
        class="w-full h-40 object-cover rounded-xl"
        src="/images/all you can eat/menu/menu-0.jpg"
        alt="image not found"
      />
    </div>
    <h2 class="text-sm text-white font-semibold mt-3">Vendor</h2>
    <p class="text-white font-bold my-2 px-3">Captionnya</p>
    <Button
      variant="third"
      label="Pesan sekarang"
      class="text-sm"
      @click="$emit('clickOrder')"
    />
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
export default {
  components: {
    Button,
  },
};
</script>

<style>
.bg-red {
  background-color: #e94949;
}
</style>
