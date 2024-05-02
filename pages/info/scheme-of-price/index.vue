<template>
  <div class="!bg-white">
    <NavbarBlank />
    <div class="scheme-price" id="scheme-price-wrapper">
      <div class="container">
        <Title title="Bagaimana Seakun.id mengatur harga?" />
        <div class="text-sm">
          Dengan konsep patungan, melalui Seakun.id harga Paket Grup dari
          masing-masing provider akan dibagi rata per jumah member dalam suatu
          grup. Sedangkan harga final yang dibayarkan oleh member adalah harga
          patungan yang sudah termasuk biaya admin Seakun.id.
        </div>
        <br />
        <div class="text-sm">
          <b>Perlu diperhatikan</b> bahwa harga paket dari provider bisa saja
          tidak bulat, sehingga Seakun.id melakukan pembulatan harga patungan
          dengan tujuan untuk memudahkan member dalam melihat nominal yang akan
          ditransfer. Hasil pembulatan, diskon, pemotongan harga dan/atau
          benefit lain yang mempengaruhi harga dari provider menjadi hak mutlak
          dan masuk sebagai keuntungan untuk Seakun.id. Dengan berlangganan
          melalui Seakun.id, member dinyatakan sudah mengerti dan setuju dengan
          skema harga yang sudah ditetapkan.
        </div>
        <div class="flex flex-col md:flex-row items-start gap-10 md:mt-10">
          <!-- mobile view -->
          <div
            class="w-full bg-white md:hidden flex justify-between items-center sticky top-[54px] pt-7 pb-5"
          >
            <section class="relative">
              <div
                class="content absolute bg-white top-[100%] mt-3 border-[#A0A3BD] shadow-sm overflow-y-scroll rounded-md px-3 space-y-2 transition-all ease-in-out"
                :class="!isOpenProviderMenu ? 'h-0' : 'h-[306px] border py-3'"
              >
                <div
                  v-for="(item, index) in siderbarLink(providerList)"
                  :key="index"
                >
                  <p
                    class="cursor-pointer"
                    @click="
                      scrollToElementWithOffset(item.slug, 100),
                        (isOpenProviderMenu = !isOpenProviderMenu)
                    "
                  >
                    {{ changeMenuFormat(item.slug) }}
                  </p>
                </div>
              </div>

              <div
                class="px-3 py-2 border border-[#A0A3BD] rounded-[6px] flex justify-between items-center gap-6 cursor-pointer"
                @click="isOpenProviderMenu = !isOpenProviderMenu"
              >
                <p class="text-[#A0A3BD]">Daftar Provider</p>
                <img
                  src="/images/icons/atoms/chevron-light-gray.svg"
                  alt="open"
                  class="transition-all ease-in"
                  :class="[!isOpenProviderMenu ? 'rotate-180' : 'rotate-0']"
                />
              </div>
            </section>
            <section>
              <p class="text-sm text-green-primary">Total: 35 Provider</p>
            </section>
          </div>

          <!-- screen 768 + -->
          <section class="min-w-[241px] sticky top-20 bg-white hidden md:block">
            <p class="font-medium text-green-primary">Daftar Provider</p>
            <div class="max-h-[650px] overflow-y-scroll space-y-4 mt-4 content">
              <div
                v-for="(item, index) in siderbarLink(providerList)"
                :key="index"
              >
                <p
                  class="cursor-pointer"
                  @click="scrollToElementWithOffset(item.slug, 100)"
                >
                  {{ changeMenuFormat(item.slug) }}
                </p>
              </div>
            </div>
          </section>

          <section
            class="grid lg:grid-cols-2 lg:gap-x-6 gap-y-6 content-mobile space-y-6 lg:space-y-0 -mt-8 md:mt-0"
          >
            <div
              v-for="(item, index) in productDigitalFilter(providerList)"
              :key="index"
              class="sm:w-max sm:mx-auto md:w-full"
            >
              <!-- v-if="item.slug !== 'zap'" -->
              <div class="card" :id="item.slug">
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
          </section>
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
      isOpenProviderMenu: false,
    };
  },
  methods: {
    productDigitalFilter(data) {
      return data.filter((item) => item.slug !== 'zap');
    },
    siderbarLink(data) {
      return data.filter(
        (objek, indeks, self) =>
          indeks === self.findIndex((o) => o.slug === objek.slug)
      );
    },
    changeMenuFormat(text) {
      const defaultText = text.split('-');
      const convert = defaultText.map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      const result = convert.join(' ');
      return result;
    },
    scrollToElementWithOffset(elementId, offset) {
      const element = document.getElementById(elementId);
      const elementPosition = element.getBoundingClientRect().top;
      let offsetHeight = offset;
      if (process.client && window.innerWidth <= 768) {
        offsetHeight += 50;
      }
      const offsetPosition =
        elementPosition + window.pageYOffset - offsetHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content::-webkit-scrollbar {
  width: 6px;
}

.content::-webkit-scrollbar-track {
  background: #f5f3f3;
}

.content::-webkit-scrollbar-thumb {
  background: #d9d9d9;
}

.content::-webkit-scrollbar-thumb:hover {
  background: #757272;
}
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
