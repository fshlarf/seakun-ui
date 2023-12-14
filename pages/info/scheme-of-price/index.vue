<template>
  <div>
    <NavbarBlank />
    <div class="scheme-price">
      <div class="container">
        <Title title="Bagaimana Seakun.id mengatur harga?" />
        <div class="scheme-price__info">
          Dengan konsep patungan, melalui Seakun.id harga Paket Grup dari
          masing-masing provider akan dibagi rata per jumah member dalam suatu
          grup. Sedangkan harga final yang dibayarkan oleh member adalah harga
          patungan yang sudah termasuk biaya admin Seakun.id.
        </div>
        <br />
        <div class="scheme-price__info">
          <b>Perlu diperhatikan</b> bahwa harga paket dari provider bisa saja
          tidak bulat, sehingga Seakun.id melakukan pembulatan harga patungan
          dengan tujuan untuk memudahkan member dalam melihat nominal yang akan
          ditransfer. Hasil pembulatan, diskon, pemotongan harga dan/atau
          benefit lain yang mempengaruhi harga dari provider menjadi hak mutlak
          dan masuk sebagai keuntungan untuk Seakun.id. Dengan berlangganan
          melalui Seakun.id, member dinyatakan sudah mengerti dan setuju dengan
          skema harga yang sudah ditetapkan.
        </div>
        <div class="flex justify-around flex-wrap content-mobile mb-[5px]">
          <div v-for="(item, index) in providerList" :key="index">
            <div v-if="item.slug !== 'zap'" class="card">
              <div class="w-1/4">
                <img
                  :src="item.img"
                  alt="provider"
                  class="h-10 object-contain"
                />
              </div>
              <div class="w-full my-2">
                <img :src="item.screenshotMobile" alt="price scheme" />
              </div>
              <p class="font-bold text-sm md:text-base">Detail Harga</p>
              <div
                class="mb-[5px] pt-1 flex justify-between items-center"
                v-for="(info, ind) in item.informations"
                :key="ind"
              >
                <div
                  :class="`col-md-auto text-sm md:text-base ${
                    info.is_total ? 'font-bold' : ''
                  }`"
                >
                  {{ info.title }}
                </div>
                <div
                  :class="`col text-right text-sm md:text-base ${
                    info.is_total ? 'font-bold' : ''
                  }`"
                >
                  {{ info.value }}
                </div>
              </div>
              <div v-if="item.notes" class="tn:my-2 md:my-3">
                <p class="italic tn:text-sm md:text-base font-semibold">
                  {{ item.notes }}
                </p>
              </div>
              <div class="divider"></div>
              <p class="font-bold">Skema Berlangganan</p>
              <ol style="padding-left: 1rem" class="list-decimal">
                <li
                  class="pt-1 text-sm md:text-base"
                  v-for="(scheme, indx) in item.schemes"
                  :key="indx"
                >
                  {{ scheme }}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavbarBlank from '~/components/mollecules/NavbarBlank';
import Footer from '~/components/mollecules/Footer';
import Title from '~/components/atoms/Title';
import { providerList } from '../../../constants/price-scheme';

export default {
  components: {
    NavbarBlank,
    Footer,
    Title,
  },
  data() {
    return {
      providerList,
    };
  },
};
</script>

<style lang="scss" scoped>
.scheme-price {
  padding: 100px 0px 40px !important;

  &__info {
    padding: 0px 17px;
    font-size: 14px;
  }

  .divider {
    height: 1px;
    width: 100%;
    background: gray;
    margin: 1rem 0;
  }

  .card {
    padding: 16px 24px;
    border: 1px solid #eeeeee;
    border-radius: 8px;
    box-shadow: 0px 0px 4px #dddddd;
    margin: 3rem 0 0;
    max-width: 500px;

    .ss {
      display: flex;
      align-self: center;
      width: 100%;
      height: 224px;
      object-fit: contain;
      margin: 0.5rem 0;
    }

    .logo {
      width: 129px;
      height: 39px;
      object-fit: contain;
      margin-left: -8px;
    }
  }
}

@media (max-width: 800px) {
  .scheme-price {
    &__info {
      padding: 0px 8px;
    }
    .content-mobile {
      display: block;
      width: 100%;
      padding: 0 0px;
      margin-left: 0 !important;
      .card {
        padding: 10px 14px;
        img {
          margin: 0 0;
        }

        .ss {
          margin: 0;
        }
      }
    }

    .info-mobile {
      text-align: center !important;
    }

    .info {
      font-size: 12px;
      width: auto !important;
      padding-right: 0 !important;
    }

    .row {
      margin-bottom: 5px;
    }

    .divider {
      width: 100%;
      height: 1px;
      margin: 1rem 0;
    }
  }
}
</style>
