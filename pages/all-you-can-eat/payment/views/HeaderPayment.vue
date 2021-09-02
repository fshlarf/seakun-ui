<template>
  <div>
    <div class="payment-order w-auto mt-8 box-border px-2">
      <!-- Loadingg shimmer -->
      <div v-if="detailPayment.loading" class="text-center">
        <p class="shimmer w-full"></p>
        <p class="shimmer w-9/12"></p>
        <p class="shimmer w-8/12"></p>
      </div>
      <!-- Loadingg shimmer end -->
      <div v-else>
        <p class="title text-center text-lg px-2">
          Segera lakukan pembayaran agar Sequrban dapat mengumpulkan kamu ke
          grup yang sama dan memberikan informasi tentang proses qurban hingga
          pada hari H penyembelihan.
        </p>
      </div>

      <!-- <div v-else-if="provider.toLowerCase() === 'netflix'">
        <p class="title text-center text-lg px-2" v-if="packageId === 1">
          Karena kamu terdaftar sebagai User Host, admin Seakun.id akan memandu
          kamu untuk melakukan proses payment ke Netflix.
          <a href="https://seakun.id/info/user-host">
            Baca ketentuan User Host</a
          >. <br /><br />Segera lakukan pembayaran agar Seakun.id bisa langsung
          <b>mengalokasikan kamu pada grup Netflix yang available</b>,
          <b>mencarikan teman berlangganan</b>,
          <b>memandu kamu untuk melakukan proses payment ke Netflix</b> dan
          <b>memproses akun Netflix</b>. <br /><br /><b>Informasi Akun</b>,
          <b>Password</b> dan <b>Pin Profile</b> akan dikirim ke Email dan
          Whatsapp yang kamu daftarkan.
        </p>
        <p class="title text-center text-lg px-2" v-else-if="packageId === 2">
          Segera lakukan pembayaran agar Seakun.id bisa langsung mengalokasikan
          kamu pada grup Netflix yang available, mencarikan teman berlangganan
          dan memproses akun Netflix untuk kamu.
          <b>Informasi Akun</b>, <b>Password</b> dan <b>Pin Profile</b> akan
          dikirim ke Email dan Whatsapp yang kamu daftarkan.
        </p>
        <p class="title text-center text-lg px-2" v-else>
          Segera lakukan pembayaran agar Seakun.id dapat langsung memproses akun
          Netflix untuk kamu.
          <b>Informasi Akun</b>, <b>Password</b> <b>dan Pin Profile</b> akan
          dikirim ke Email dan Whatsapp yang kamu daftarkan.
        </p>
      </div> -->

      <!-- <div v-else-if="provider.toLowerCase() === 'spotify'">
        <p class="title text-center text-lg px-2" v-if="packageId === 1">
          Segera lakukan pembayaran agar Seakun.id dapat langsung mengirimkan
          <b>Link invitation</b> plan paket Grup Spotify.
          <b>Link invitation</b> akan dikirim ke Email dan Whatsapp yang kamu
          daftarkan.
        </p>
      </div> -->
      <ProductHighLightLoading v-if="detailPayment.loading" />

      <!-- <DetailOrderSequrban
        v-else-if="provider.toLowerCase() === 'sequrban'"
        :isLoading="detailPayment.loading"
        :image="detailPayment.data.images[0]"
        :type="detailPayment.data.type"
        :packageCode="detailPayment.data.packageCode"
        :unitWeight="detailPayment.data.unitWeight"
        :weight="detailPayment.data.weight"
        :downPayment="detailPayment.data.downPayment"
        :totalCost="detailPayment.data.totalCost"
      /> -->

      <AyceProductHighlight
        v-else
        :variant="detailVariantAyce"
      />

      <!-- <ProductHighLight
        v-else
        :provider="provider"
        :isLoading="detailPayment.loading"
        :packageName="detailPayment.data.name"
        :grandTotal="detailPayment.data.grandTotal"
        :totalMonth="detailPayment.data.totalMonth"
      /> -->
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '~/helpers/word-transformation.js';
// import DetailOrderSequrban from './DetailOrderSekurban.vue';
import ProductHighLightLoading from '~/components/mollecules/ProductHighlightLoading.vue';
// import ProductHighLight from '~/components/mollecules/ProductHighLight.vue';
import AyceProductHighlight from './AyceProductHighlight.vue';

export default {
  name: 'headerPayment',
  components: {
    // DetailOrderSequrban,
    // ProductHighLight,
    AyceProductHighlight,
    ProductHighLightLoading,
  },
  props: {
    provider: {
      type: String,
      default: '',
    },
    packageId: {
      type: Number,
      default: null,
    },
    detailVariantAyce: {
      type: Object,
      default: () => {},
    },
    detailPayment: {
      type: Object,
      default: () => ({
        loading: true,
        data: {},
      }),
    },
    packageName: {
      type: String,
      default: '',
    },
    total: {
      type: String | Number,
      default: null,
    },
  },
  data: () => ({
    currencyFormat,
  }),
};
</script>

<style lang="scss" scoped>
.payment-thankyou {
  font-size: 32px;
}
.payment-order {
  p.title {
    font-size: 16px;
    font-weight: 400;
  }
}
.payment-detail {
  &__label {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: rgba(54, 54, 54, 0.5);
  }
  &__price {
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 31px;
    color: #2f2a32;
    span {
      color: #8dcabe;
    }
    svg {
      width: 16px;
      height: auto;
      display: inline-block;
      fill: #8dcabe;
      margin-top: -8px;
      cursor: pointer;
    }
  }

  &__alert {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #363636;
  }
}
.payment-options {
  &__norek {
    span {
      display: inline-block;
    }
    svg {
      width: 12px;
      height: auto;
      display: inline-block;
      fill: #8dcabe;
      margin-top: -8px;
      cursor: pointer;
    }
  }
}
.detail-product {
  &__image {
    width: 120px;
    height: 80px;
    object-fit: contain;
  }
}
</style>
