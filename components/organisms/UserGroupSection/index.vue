<template>
  <div class="container tn:pt-8 md:pt-24 md:pb-8">
    <div class="tn:text-center md:text-left">
      <h1 class="font-bold tn:text-2xl md:text-4xl md:mb-4 lg:mb-4">
        Pengguna Seakun.id
      </h1>
      <p class="font-semibold">
        Psst! Sudah ada ratusan grup loh, yang bergabung bersama kami! Klik
        kategori untuk melihat.
      </p>
    </div>
    <div class="my-6">
      <div
        class="scroll-provider flex gap-8 overflow-x-auto overscroll-contain px-3 py-2"
      >
        <ProviderPill
          v-for="(provider, id) in dataProviderList"
          :key="id"
          :provider="provider"
          class="my-2 w-full h-full flex-none cursor-pointer"
          @selectProvider="selectProvider"
        />
      </div>
      <div
        class="scroll-provider flex gap-6 overflow-x-auto overscroll-contain px-3 py-2"
      >
        <GroupCard
          v-for="(group, id) in dataDetailGroup"
          :key="id"
          :group="group"
          class="my-2 w-full h-full flex-none"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProviderPill from '~/components/mollecules/ProviderPill.vue';
import GroupCard from '~/components/mollecules/GroupCard.vue';
import Button from '~/components/atoms/Button.vue';
export default {
  data() {
    return {
      dataDetailGroup: {},
      dataProviderList: [
        {
          id: 1,
          name: 'Netflix',
          icon: '/images/icons/netflix.svg',
          totalGroup: 430,
        },
        {
          id: 2,
          name: 'Spotify',
          icon: '/images/icons/spotify.svg',
          totalGroup: 317,
        },
        {
          id: 3,
          name: 'Gramedia',
          icon: '/images/icons/gramedia.svg',
          totalGroup: 51,
        },
        {
          id: 4,
          name: 'Youtube',
          icon: '/images/icons/youtube.svg',
          totalGroup: 208,
        },
        {
          id: 5,
          name: 'Microsoft 365',
          icon: '/images/icons/microsoft.svg',
          totalGroup: 52,
        },
        {
          id: 6,
          name: 'Canva',
          icon: '/images/icons/canva.svg',
          totalGroup: 18,
        },
        {
          id: 7,
          name: 'Nintendo Switch',
          icon: '/images/icons/nintendo.svg',
          totalGroup: 88,
        },
        {
          id: 8,
          name: 'Apple One',
          icon: '/images/icons/apple-one.svg',
          totalGroup: 8,
        },
      ],
      dataGroupProvider: [
        {
          id: 1,
          name: 'Netflix',
          brand: '/images/netflix.png',
          group: [
            {
              id: 1,
              number: 188,
              brand: '/images/netflix.png',
              member: [
                'Qana A**y',
                'Putu H**i',
                'Adhyaksa B*****a',
                'Slot tersedia',
                'Slot tersedia',
              ],
            },
            {
              id: 2,
              number: 187,
              brand: '/images/netflix.png',
              member: [
                'Qana A**y',
                'Putu H**i',
                'Adhyaksa B*****a',
                'Slot tersedia',
                'Slot tersedia',
              ],
            },
            {
              id: 3,
              number: 186,
              brand: '/images/netflix.png',
              member: [
                'Qana A**y',
                'Putu H**i',
                'Adhyaksa B*****a',
                'Slot tersedia',
                'Slot tersedia',
              ],
            },
            {
              id: 4,
              number: 185,
              brand: '/images/netflix.png',
              member: [
                'Qana A**y',
                'Putu H**i',
                'Adhyaksa B*****a',
                'Slot tersedia',
                'Slot tersedia',
              ],
            },
            {
              id: 5,
              number: 184,
              brand: '/images/netflix.png',
              member: [
                'Qana A**y',
                'Putu H**i',
                'Adhyaksa B*****a',
                'Slot tersedia',
                'Slot tersedia',
              ],
            },
            {
              id: 6,
              number: 183,
              brand: '/images/netflix.png',
              member: [
                'Qana A**y',
                'Putu H**i',
                'Adhyaksa B*****a',
                'Slot tersedia',
                'Slot tersedia',
              ],
            },
            {
              id: 7,
              number: 182,
              brand: '/images/netflix.png',
              member: [
                'Qana A**y',
                'Putu H**i',
                'Adhyaksa B*****a',
                'Slot tersedia',
                'Slot tersedia',
              ],
            },
            {
              id: 8,
              number: 181,
              brand: '/images/netflix.png',
              member: [
                'Qana A**y',
                'Putu H**i',
                'Adhyaksa B*****a',
                'Slot tersedia',
                'Slot tersedia',
              ],
            },
          ],
        },
        {
          id: 2,
          name: 'Spotify',
          brand: '/images/spotify.png',
          group: [
            {
              id: 1,
              number: 188,
              brand: '/images/spotify.png',
              member: [
                'Qana A**y',
                'Putu H**i',
                'Adhyaksa B*****a',
                'Slot tersedia',
                'Slot tersedia',
              ],
            },
            {
              id: 2,
              number: 187,
              brand: '/images/spotify.png',
              member: [
                'Qana A**y',
                'Putu H**i',
                'Adhyaksa B*****a',
                'Slot tersedia',
                'Slot tersedia',
              ],
            },
            {
              id: 3,
              number: 186,
              brand: '/images/spotify.png',
              member: [
                'Qana A**y',
                'Putu H**i',
                'Adhyaksa B*****a',
                'Slot tersedia',
                'Slot tersedia',
              ],
            },
            {
              id: 4,
              number: 185,
              brand: '/images/spotify.png',
              member: [
                'Qana A**y',
                'Putu H**i',
                'Adhyaksa B*****a',
                'Slot tersedia',
                'Slot tersedia',
              ],
            },
            {
              id: 5,
              number: 184,
              brand: '/images/spotify.png',
              member: [
                'Qana A**y',
                'Putu H**i',
                'Adhyaksa B*****a',
                'Slot tersedia',
                'Slot tersedia',
              ],
            },
            {
              id: 6,
              number: 183,
              brand: '/images/spotify.png',
              member: [
                'Qana A**y',
                'Putu H**i',
                'Adhyaksa B*****a',
                'Slot tersedia',
                'Slot tersedia',
              ],
            },
            {
              id: 7,
              number: 182,
              brand: '/images/spotify.png',
              member: [
                'Qana A**y',
                'Putu H**i',
                'Adhyaksa B*****a',
                'Slot tersedia',
                'Slot tersedia',
              ],
            },
            {
              id: 8,
              number: 181,
              brand: '/images/spotify.png',
              member: [
                'Qana A**y',
                'Putu H**i',
                'Adhyaksa B*****a',
                'Slot tersedia',
                'Slot tersedia',
              ],
            },
          ],
        },
      ],
    };
  },
  components: {
    ProviderPill,
    GroupCard,
    Button,
  },
  mounted() {
    this.dataDetailGroup = this.dataGroupProvider[0].group;
  },
  methods: {
    selectProvider(id) {
      this.dataDetailGroup = this.dataGroupProvider[id - 1].group;
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-provider::-webkit-scrollbar {
  display: none;
}
.scroll-provider {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
