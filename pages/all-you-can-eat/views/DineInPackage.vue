<template>
  <div class="tn:space-y-2 md:space-y-0 md:grid md:grid-cols-5 md:gap-6">
    <div class="md:col-span-2">
      <img
        class="tn:w-full tn:h-32 md:w-auto md:h-full object-cover"
        :src="`${packet.image}`"
        alt="Image not found"
      />
    </div>
    <div class="md:col-span-3 space-y-2">
      <p class="text-3xl font-bold">{{ packet.name }}</p>
      <p class="uppercase text-xl text-secondary font-semibold">
        {{ packet.title }}
      </p>
      <p class="text-xl font-bold">
        {{ currencyFormat(packet.detailPrice.jointPrice) }}
      </p>
      <div class="">
        <div class="tn:px-2 md:px-4">
          <p class="text-secondary font-bold mb-1">Detail Harga</p>
          <div class="">
            <div class="flex justify-between items-center">
              <p>Harga Satuan</p>
              <p class="font-bold">
                {{ currencyFormat(packet.detailPrice.price) }}
              </p>
            </div>
            <div class="flex justify-between items-center">
              <p>Jumlah minimal orang</p>
              <p class="font-bold">{{ packet.detailPrice.member }}</p>
            </div>
            <div class="flex justify-between items-center">
              <p>Harga patungan</p>
              <p class="font-bold">
                {{ currencyFormat(packet.detailPrice.price) }} x
                {{ packet.detailPrice.member }} =
                {{ currencyFormat(packet.detailPrice.jointPrice) }}
              </p>
            </div>
            <div class="flex justify-between items-center">
              <p>Biaya admin</p>
              <p class="font-bold">
                {{ currencyFormat(packet.detailPrice.adminFee) }}
              </p>
            </div>
          </div>
        </div>
        <hr class="h-px bg-primary my-2" />
        <div class="tn:px-2 md:px-4">
          <p class="">Syarat dan ketentuan:</p>
          <ul class="list-decimal pl-8">
            <li v-for="(terms, id) in packet.terms" :key="id">{{ terms }}</li>
          </ul>
        </div>
        <hr class="h-px bg-primary my-2" />
        <Button
          class="py-2 tn:w-full md:w-1/2 tn:mt-2 md:mt-4"
          label="PESAN"
          variant="third"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '~/helpers/word-transformation.js';
import Button from '~/components/atoms/button.vue';
export default {
  props: {
    packet: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      currencyFormat,
    };
  },
  components: {
    Button,
  },
};
</script>

<style></style>
