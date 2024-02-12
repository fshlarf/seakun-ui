<template>
  <div class="mt-[26px] bg-white rounded-xl">
    <BannerOrder />
    <div class="p-6">
      <div class="space-y-5 mt-4">
        <CardOrderDetails :order-details="dataOrderDetails" />
        <ListPackage :data-package="dataPackage" />
        <ListDetailsMember :details="priceDetails" />
        <ListBenefit :data-benefit="dataBenefit" />
        <CardGroup :data-group="dataGroup" />
      </div>
    </div>
  </div>
</template>

<script>
import CardOrderDetails from './views/card-order-details.vue';
import ListPackage from './views/list-package-order.vue';
import ListDetailsMember from './views/list-details-member.vue';
import ListBenefit from './views/list-benefit.vue';
import CardGroup from './views/card-group.vue';
import BannerOrder from './views/banner-order.vue';
export default {
  layout: 'profile',
  components: {
    BannerOrder,
    ListPackage,
    ListDetailsMember,
    ListBenefit,
    CardGroup,
    CardOrderDetails,
  },
  data() {
    return {
      dataOrderDetails: {
        orderCode: 'ORD23050007',
        email: 'faishal@mail.com',
        phone: '082277034234',
        group: '1345',
        isActive: true,
      },
      dataPackage: [
        {
          name: 'Paket Premium Spotify 3 Bulan',
          details: '67.500 / (3 Bulan)',
        },
        {
          name: 'Masa Berlangganan',
          details: '20 Mei - 20 Juli 2023',
        },
        {
          name: 'Berlangganan lewat Seakun sejak',
          details: '12 Okt 2022',
        },
        {
          name: 'Sudah menghemat',
          details: 'Rp20.000',
        },
      ],
      priceDetails: [
        {
          name: 'Spotify Premium 3 bulan',
          details: 'Rp261.000',
        },
        {
          name: 'Jumlah member grup',
          details: '5',
        },
        {
          name: 'Harga patungan di Seakun',
          details: 'Rp67.500',
        },
      ],
      dataBenefit: [
        {
          name: 'Login menggunakan akun pribadi, bukan akun orang lain',
        },
        {
          name:
            'Link invitation untuk bergabung grup premium akan dikirim melalui Whatsapp yang terdaftar',
        },
        {
          name:
            'Full akses ke semua lagu, podcast, dan playlist Spotify tanpa batas dan tanpa jeda iklan',
        },
        {
          name: 'Fitur mode offline, skip lagu, dan blokir musik explicit',
        },
      ],
      dataGroup: [
        {
          name: 'Andrejaj',
        },
        {
          name: 'Bgasdas',
        },
        {
          name: 'Dafaf',
        },
        {
          name: 'Jorgesikasdasdasdasdadsa',
        },
        {
          name: 'Priapriamanis',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
