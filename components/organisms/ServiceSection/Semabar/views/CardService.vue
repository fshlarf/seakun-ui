<template>
  <div
    class="bg-white p-3 rounded-[6px]"
    :class="[cardData.isAvailable ? 'cursor-pointer' : 'cursor-not-allowed']"
    @click="$emit('click-card')"
  >
    <div class="relative">
      <div
        v-if="!cardData.isAvailable"
        class="absolute top-0 left-0 right-0 bottom-0 bg-[#FFF]/60"
      ></div>
      <section
        class="w-full flex justify-center items-center border border-[#A0A3BD26] h-[90px] rounded"
      >
        <img
          :src="`/images/semabar/venue/${cardData.images}`"
          :alt="cardData.name"
          :class="`max-w-[70px] max-h-[60px] md:max-w-[80px] md:max-h-[70px] ${cardData.classImage}`"
        />
      </section>
      <div class="flex justify-between mt-2 items-center">
        <p class="text-xs text-[#66738F]">Komunitas Main Bareng</p>
        <p
          class="hidden text-[11px] text-green-seakun-secondary-dark font-medium bg-[#DBF8F2] rounded-[10px] py-0.5 px-2"
        >
          {{ cardData.member }} Member
        </p>
      </div>
      <p class="pt-1 text-xs text-main font-bold">{{ cardData.name }}</p>
      <div class="mt-2 flex gap-1">
        <img
          src="/images/icons/atoms/location.svg"
          alt="location"
          class="w-[15px] h-[15px]"
        />
        <p class="text-xs text-[#08A081] font-medium">{{ cardData.city }}</p>
      </div>
    </div>

    <div v-if="cardData.isAvailable">
      <p class="text-[11px] text-[#66738F] mt-3">Harga Per Match</p>
      <section class="flex justify-between text-xs mt-2">
        <p class="text-main">Membership</p>
        <p class="text-green-seakun-secondary-dark">
          {{
            toRupiah(cardData.detailsFee.detailsPrice.membership.pricePerMatch)
          }}
        </p>
      </section>
      <section class="flex justify-between text-xs mt-2">
        <p class="text-main">Non Membership</p>
        <p class="text-green-seakun-secondary-dark">
          {{
            toRupiah(
              cardData.detailsFee.detailsPrice.nonMembership.pricePerMatch
            )
          }}
        </p>
      </section>
    </div>
    <div v-else>
      <p
        class="text-lg font-bold text-[#FFB127] bg-[#FFF7EA] border border-[#FFF6E7] py-3 text-center mt-4 rounded-[6px]"
      >
        COMING SOON
      </p>
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
  methods: {
    toRupiah(word) {
      if (word) {
        return 'Rp' + word.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
      } else {
        return 'Rp0';
      }
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
