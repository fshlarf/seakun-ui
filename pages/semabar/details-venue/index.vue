<template>
  <div>
    <HeaderDetailsVenue :details-venue="filterVenue" />
    <TableDetails :details-venue="filterVenue" />
    <FooterSemabar />
  </div>
</template>

<script>
import HeaderDetailsVenue from './views/HeaderDetailsVenue.vue';
import TableDetails from './views/TableDetails.vue';
import FooterSemabar from '~/components/mollecules/FooterSemabar.vue';
export default {
  head() {
    return {
      title: 'Seakun | Situs Cari Teman Patungan Aman & Murah',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Seakun.id, Platform pertama di Indonesia yang memberikan layanan Berlangganan Bersama agar lebih praktis, legal, aman dan murah.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Semabar | Seakun Main Bareng',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Seakun.id, Platform pertama di Indonesia yang memberikan layanan Berlangganan Bersama agar lebih praktis, legal, aman dan murah.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://seakun.id/images/shared-link/semabar.png',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://seakun.id/semabar/details-venue',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          property: 'twitter:domain',
          content: 'seakun.id',
        },
        {
          property: 'twitter:url',
          content: 'https://seakun.id/semabar/details-venue',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Semabar | Seakun Main Bareng',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Seakun.id, Platform pertama di Indonesia yang memberikan layanan Berlangganan Bersama agar lebih praktis, legal, aman dan murah.',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://seakun.id/images/shared-link/semabar.png',
        },
      ],
    };
  },

  components: {
    HeaderDetailsVenue,
    TableDetails,
    FooterSemabar,
  },
  computed: {
    filterVenue() {
      return this.dataVenue.list.find((venue) => venue.slug == this.slug);
    },
  },
  data() {
    return {
      slug: this.$route.query.detailVenue,
      dataVenue: {
        list: [
          {
            name: 'LA.PANG.AN 45 Permata Hijau',
            slug: 'permata-hijau',
            member: 150,
            isPromotion: true,
            detailsFee: {
              fieldFee: 2400000,
              referee: 200000,
              consumption: 100000,
              otherFacilities: 135000,
              totalFee: 2835000,
              detailsPrice: {
                membership: {
                  sharedFee: 81000,
                  adminFee: 9000,
                  pricePerMatch: 90000,
                  moreEffiecient: '56% !!',
                },
                nonMembership: {
                  sharedFee: 81000,
                  adminFee: 14000,
                  pricePerMatch: 95000,
                },
              },
            },
            isAvailable: true,
            images: 'permata-hijau.svg',
            city: 'Jakarta Selatan',
            address:
              'Jl. Logam No.7, RT.7/RW.8, Grogol Utara, Kebayoran Lama, Jakarta Selatan 12210',
            maps:
              'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3494264236692!2d106.78892859999999!3d-6.2175673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7cc70ce5a39%3A0x2ad1d2e9cc5cd357!2sLA.PANG.AN%2045%20Permata%20Hijau!5e0!3m2!1sid!2sid!4v1701942824996!5m2!1sid!2sid',

            whatsappCommunity:
              'https://chat.whatsapp.com/IZhOxHR2Tik9Y6bRJhAVhx',
            benefits: [
              'Komunitas terkelola',
              'Venue terjamin',
              'Game terorganisir',
              'Pembagian tim yang adil',
              'Keanggotaan yang terorganisir',
              'Leaderboard pemain',
              'Fasilitas tambahan lainnya (rompi, bola, fotografer)',
            ],
            facility: [
              {
                name: 'Bench Pemain',
                images: 'bench',
              },
              {
                name: 'Tribune Penonton',
                images: 'tribune',
              },
              {
                name: 'Musholla',
                images: 'mosque',
              },
              {
                name: 'Kamar Mandi',
                images: 'bathroom',
              },
              {
                name: 'Parkir Motor & Mobil (Tarif Normal)',
                images: 'park',
              },
            ],
            gallery: [
              {
                images: 'permata-hijau-1.webp',
              },
              {
                images: 'permata-hijau-2.webp',
              },
              {
                images: 'permata-hijau-3.webp',
              },
              {
                images: 'permata-hijau-4.webp',
              },
              {
                images: 'permata-hijau-5.webp',
              },
              {
                images: 'permata-hijau-6.webp',
              },
              {
                images: 'permata-hijau-7.webp',
              },
            ],
          },
          {
            name: 'Rahayu Mini Soccer Medan',
            slug: 'rahayu-minisoccer',
            member: 150,
            detailsFee: {
              fieldFee: 600000,
              referee: 100000,
              consumption: 50000,
              otherFacilities: 300000,
              totalFee: 1050000,
              detailsPrice: {
                membership: {
                  sharedFee: 30000,
                  adminFee: 7500,
                  pricePerMatch: 37500,
                },
                nonMembership: {
                  sharedFee: 30000,
                  adminFee: 7500,
                  pricePerMatch: 37500,
                },
              },
            },
            isAvailable: true,
            images: 'rahayu-minisoccer.webp',
            city: 'Medan',
            address:
              'Jl. Rahayu, Pasar VI Tembung Kec. Percut Sei Tuan, Kabupaten Deli Serdang',
            maps:
              'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7964.028638092421!2d98.7689968!3d3.5841861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303137316d523615%3A0x9762cdeb0682def9!2sRahayu%20Mini%20Soccer!5e0!3m2!1sid!2sid!4v1701942689597!5m2!1sid!2sid',
            whatsappCommunity:
              'https://chat.whatsapp.com/FkNsftkEpx9LLvLJBBd7Vv',
            benefits: [
              'Komunitas terkelola',
              'Venue terjamin',
              'Game terorganisir',
              ' Pembagian tim yang adil',
              'Keanggotaan yang terorganisir',
              ' Leaderboard pemain',
              'Fasilitas tambahan lainnya (rompi, bola, fotografer)',
            ],
            facility: [
              {
                name: 'Bench Pemain',
                images: 'bench',
              },
              {
                name: 'Tribune Penonton',
                images: 'tribune',
              },
              {
                name: 'Masjid Terdekat',
                images: 'mosque',
              },
              {
                name: 'Kamar Mandi',
                images: 'bathroom',
              },
              {
                name: 'Parkir Motor & Mobil (Free)',
                images: 'park',
              },
            ],
            gallery: [
              {
                images: 'rahayu-1.webp',
              },
              {
                images: 'rahayu-2.webp',
              },
              {
                images: 'rahayu-3.webp',
              },
              {
                images: 'rahayu-4.webp',
              },
              {
                images: 'rahayu-5.webp',
              },
              {
                images: 'rahayu-6.webp',
              },
              {
                images: 'rahayu-7.webp',
              },
            ],
          },
          {
            name: 'D37 Duren Tiga',
            isAvailable: false,
            images: 'd-37.svg',
            city: 'Jakarta Selatan',
          },
          {
            name: 'Epic Wesoccer Menteng',
            isAvailable: false,
            images: 'epic-wesoccer.svg',
            city: 'Jakarta Selatan',
          },
          {
            name: 'Pancoran Soccer Field',
            isAvailable: false,
            images: 'psf.svg',
            city: 'Jakarta Selatan',
          },
          {
            name: 'Main Gandaria',
            isAvailable: false,
            images: 'main-gandaria.svg',
            city: 'Jakarta Selatan',
          },
          {
            name: 'ASATU Arena Cikini',
            isAvailable: false,
            images: 'asatu-cikini.webp',
            classImage: 'rounded',
            city: 'Jakarta Pusat',
          },
          {
            name: 'Revo Duren Sawit',
            isAvailable: false,
            images: 'revo.webp',
            classImage: 'rounded',

            city: 'Jakarta Timur',
          },
          {
            name: 'POP Pulomas',
            isAvailable: false,
            images: 'pulomas.webp',
            classImage: 'rounded ',
            city: 'Jakarta Timur',
          },
          {
            name: 'Centro Utan Jati',
            isAvailable: false,
            images: 'centro.webp',
            classImage: 'rounded',
            city: 'Jakarta Barat',
          },
          {
            name: 'Rival Sport Sunter',
            isAvailable: false,
            images: 'rival-sunter.webp',
            classImage: 'rounded',

            city: 'Jakarta Utara',
          },
          {
            name: 'Gator Arena PIK',
            isAvailable: false,
            images: 'gator-arena.webp',
            city: 'Jakarta Utara',
          },
          {
            name: 'Jet One Bintaro',
            isAvailable: false,
            images: 'jet-one-bintaro.webp',
            city: 'Tangerang',
          },
          {
            name: 'DNA Arena Cinere',
            isAvailable: false,
            images: 'arena-cinere.webp',
            city: 'Depok',
          },
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped></style>
