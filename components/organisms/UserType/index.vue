<template>
  <div class="container py-16 lg:py-12">
    <div class="text-center">
      <h1 class="font-bold text-4xl mb-4 lg:mb-8">Tipe User</h1>
    </div>
    <div
      class="w-full h-full grid tn:grid-cols-1 lg:grid-cols-2 tn:gap-3 lg:gap-8 place-items-stretch items-stretch"
    >
      <div>
        <UserTypeCard
          title="User Host"
          :providerIcons="providerHost"
          class="w-full h-full"
        >
          <template v-slot:preview>
            <p class="font-medium">
              Seakun memberikan kewenangan ke Anda sebagai User Host dalam Satu
              Group untuk melakukan pembayaran ke Provider (Netflix) dengan
              menggunakan Kartu Debit/Kredit milik Anda.
            </p>
          </template>
        </UserTypeCard>
      </div>
      <div>
        <UserTypeCard
          title="User Reguler"
          :providerIcons="providerReguler"
          class="w-full h-full"
        >
          <template v-slot:preview>
            <p class="font-medium">
              Anda menjadi user reguler premium. Pembayaran provider menjadi
              tanggung jawab kami.
            </p>
          </template>
        </UserTypeCard>
      </div>
    </div>
  </div>
</template>

<script>
import UserTypeCard from '/components/mollecules/UserTypeCard.vue';
export default {
  data() {
    return {
      providerHost: [
        {
          id: 1,
          icon: '/images/icons/netflix.svg',
        },
      ],
      providerReguler: [
        {
          id: 1,
          icon: '/images/icons/netflix.svg',
        },
        {
          id: 2,
          icon: '/images/icons/spotify.svg',
        },
        {
          id: 3,
          icon: '/images/icons/youtube.svg',
        },
        {
          id: 4,
          icon: '/images/icons/gramedia.svg',
        },
        {
          id: 5,
          icon: '/images/icons/microsoft.svg',
        },
      ],
    };
  },
  components: {
    UserTypeCard,
  },
};
</script>

<style></style>
