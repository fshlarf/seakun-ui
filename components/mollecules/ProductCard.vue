<template>
  <div
    class="border-none max-w-sm bg-white shadow-xl rounded-xl overflow-hidden text-gray-900 md:pb-3 flex flex-col justify-between"
  >
    <div class="">
      <img
        :src="`${product.img}`"
        alt="image not found"
        class="mb-3 object-cover rounded-br-3xl lg:rounded-br-none md:w-full h-40 md:h-auto"
      />
    </div>
    <div class="px-2 md:px-4">
      <div class="flex items-center mb-1 md:mb-3 md:px-2">
        <img :src="`${product.icon}`" alt="#" class="w-8 ml-1" />
        <h1 class="md:text-xl font-bold mx-2">
          {{ product.name }}
        </h1>
      </div>
      <div class="h-28 md:h-20 md:px-2 md:mt-3" v-if="product.package">
        <div
          class="text-xs md:text-base md:flex md:justify-between px-2 mt-1"
          v-for="(packageDetail, id) in product.package"
          :key="id"
        >
          <p class="font-semibold md:font-normal">
            {{ packageDetail.name }}
          </p>
          <p class="font-bold">Rp{{ packageDetail.price }}</p>
        </div>
      </div>
      <div class="h-28 md:h-20 md:px-2" v-if="product.preview">
        <div class="pl-2 md:pl-4 text-xs md:text-base">
          <p class="font-semibold md:font-normal">{{ product.preview }}</p>
        </div>
      </div>
      <div class="md:px-2">
        <div class="h-px w-full bg-primary md:my-3"></div>
      </div>
      <div v-if="product.package" class="text-center md:px-2">
        <Button
          variant="primary"
          label="Pesan"
          class="w-full py-2 my-2 font-bold"
        />
        <p class="hidden md:block text-primary font-bold mb-2 md:my-2">
          Lihat skema harga
        </p>
        <Button
          variant="secondary"
          label="Skema harga"
          class="w-full py-2 mb-2 text-sm font-bold md:hidden"
        />
      </div>
      <div v-else class="md:px-2">
        <Button
          variant="primary"
          label="Segera hadir"
          class="w-full py-2 my-2 mb-3 font-bold"
          disabled
        />
      </div>
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
    product: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
