<template>
  <div
    class="bg-white p-3 cursor-pointer rounded-[6px]"
    @click="$emit('click-card')"
  >
    <section
      class="w-full flex justify-center items-center border border-[#A0A3BD26] h-[90px] rounded"
    >
      <img
        :src="`/images/semabar/venue/${cardData.images}`"
        :alt="cardData.name"
        class="max-w-[70px] max-h-[60px] md:max-w-[80px] md:max-h-[70px]"
      />
    </section>
    <div class="flex justify-between mt-2 items-center">
      <p class="text-xs text-[#66738F]">Komunitas Main Bareng</p>
      <p
        class="text-[11px] text-green-seakun-secondary-dark font-medium bg-[#DBF8F2] rounded-[10px] py-0.5 px-2"
      >
        {{ cardData.member }} Member
      </p>
    </div>
    <div class="mt-1">
      <p class="text-xs text-main font-medium">{{ cardData.name }}</p>
      <p class="text-[11px] text-[#66738F] mt-3">Harga Per Match</p>
      <section class="flex justify-between text-xs mt-2">
        <p class="text-main">Membership</p>
        <p class="text-green-seakun-secondary-dark">
          Rp.{{ cardData.price.membership }}
        </p>
      </section>
      <section class="flex justify-between text-xs mt-2">
        <p class="text-main">Non Membership</p>
        <p class="text-green-seakun-secondary-dark">
          Rp.{{ cardData.price.nonMembership }}
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardData: {
      typeof: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.text-dmsans {
  font-family: 'DM Sans', sans-serif;
}
.text-nunito {
  font-family: 'Nunito Sans', sans-serif;
}
</style>
