<template>
  <div class="!bg-white">
    <NavbarBlank />
    <!-- Popup -->
    <div
      class="fixed top-0 left-0 right-0 bottom-0 bg-black/40 z-50 pt-[100px]"
      v-if="isShowPopup"
    >
      <div class="container">
        <div class="md:!max-w-[552px] bg-white mx-auto rounded-[10px]">
          <div class="bg-[#D9F8F2] rounded-t-[10px]">
            <img
              src="/images/scheme-of-price-popup.webp"
              alt="scheme-of-price"
              class="w-[220px] sm:w-[244px] mx-auto pt-[6px]"
            />
          </div>
          <div class="py-4 px-[19px] sm:py-6 sm:px-[31px] text-xs flex gap-1.5">
            <div class="hidden md:block">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.41797 8.9165H6.58464V5.4165H5.41797V8.9165ZM6.0013 4.24984C6.16658 4.24984 6.30522 4.19384 6.41722 4.08184C6.52922 3.96984 6.58502 3.83139 6.58464 3.6665C6.58425 3.50161 6.52825 3.36317 6.41664 3.25117C6.30502 3.13917 6.16658 3.08317 6.0013 3.08317C5.83602 3.08317 5.69758 3.13917 5.58597 3.25117C5.47436 3.36317 5.41836 3.50161 5.41797 3.6665C5.41758 3.83139 5.47358 3.97003 5.58597 4.08242C5.69836 4.19481 5.8368 4.25061 6.0013 4.24984ZM6.0013 11.8332C5.19436 11.8332 4.43603 11.6799 3.7263 11.3735C3.01658 11.0671 2.39922 10.6515 1.87422 10.1269C1.34922 9.60231 0.933692 8.98495 0.627636 8.27484C0.321581 7.56473 0.168358 6.80639 0.167969 5.99984C0.167581 5.19328 0.320803 4.43495 0.627636 3.72484C0.93447 3.01473 1.35 2.39737 1.87422 1.87275C2.39844 1.34814 3.0158 0.932615 3.7263 0.626171C4.4368 0.319726 5.19514 0.166504 6.0013 0.166504C6.80747 0.166504 7.5658 0.319726 8.2763 0.626171C8.9868 0.932615 9.60416 1.34814 10.1284 1.87275C10.6526 2.39737 11.0683 3.01473 11.3756 3.72484C11.6828 4.43495 11.8358 5.19328 11.8346 5.99984C11.8335 6.80639 11.6802 7.56473 11.375 8.27484C11.0697 8.98495 10.6542 9.60231 10.1284 10.1269C9.60261 10.6515 8.98525 11.0673 8.2763 11.3741C7.56736 11.6809 6.80902 11.8339 6.0013 11.8332ZM6.0013 10.6665C7.30408 10.6665 8.40755 10.2144 9.31172 9.31025C10.2159 8.40609 10.668 7.30261 10.668 5.99984C10.668 4.69706 10.2159 3.59359 9.31172 2.68942C8.40755 1.78525 7.30408 1.33317 6.0013 1.33317C4.69852 1.33317 3.59505 1.78525 2.69089 2.68942C1.78672 3.59359 1.33464 4.69706 1.33464 5.99984C1.33464 7.30261 1.78672 8.40609 2.69089 9.31025C3.59505 10.2144 4.69852 10.6665 6.0013 10.6665Z"
                  fill="#08A081"
                />
              </svg>
            </div>

            <div>
              <p>
                Seakun mengatur harga dengan konsep patungan, melalui Seakun
                harga Paket Grup dari masing-masing provider akan dibagi rata
                per jumah member dalam suatu grup. Sedangkan harga final yang
                dibayarkan oleh member adalah harga patungan yang sudah termasuk
                biaya admin Seakun.
              </p>
              <p class="pt-5">
                Perlu diperhatikan bahwa harga paket dari provider bisa saja
                tidak bulat, sehingga Seakun melakukan pembulatan harga patungan
                dengan tujuan untuk memudahkan member dalam melihat nominal yang
                akan ditransfer. Hasil pembulatan, diskon, pemotongan harga
                dan/atau benefit lain yang mempengaruhi harga dari provider
                menjadi hak mutlak dan masuk sebagai keuntungan untuk Seakun.
                Dengan berlangganan melalui Seakun, member dinyatakan sudah
                mengerti dan setuju dengan skema harga yang sudah ditetapkan.
              </p>
              <div class="flex justify-center sm:justify-end">
                <Button
                  @click="isShowPopup = !isShowPopup"
                  class="bg-[#08A081] text-white h-11 sm:h-12 flex justify-center items-center w-full sm:max-w-[160px] mt-5"
                  >Mengerti</Button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Popup -->

    <div class="white"></div>
    <div class="scheme-price" id="scheme-price-wrapper">
      <div class="container mt-[64px] sm:mt-16">
        <div
          class="flex items-center gap-2 text-[#6D7588] text-sm pt-5 sm:pt-7"
        >
          <img src="/images/icons/atoms/home-bold.svg" alt="home" />
          <!-- arrow svg -->
          <svg
            width="5"
            height="8"
            viewBox="0 0 5 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.0640001 7.082L3.494 3.862L0.0640001 0.627999H1.562L4.978 3.862L1.562 7.082H0.0640001Z"
              fill="#6D7588"
            />
          </svg>
          <!-- arrow svg -->

          <p>Skema Harga</p>
        </div>

        <div class="flex flex-col sm:flex-row items-start gap-10 sm:mt-10">
          <!-- mobile view -->
          <div
            class="w-full bg-white sm:hidden flex justify-between items-center sticky top-[54px] pt-6"
          >
            <section class="relative">
              <div
                class="content absolute bg-white top-[100%] mt-3 border-[#A0A3BD] shadow-sm overflow-y-scroll rounded-sm px-3 space-y-2 transition-all ease-in-out"
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
                class="px-3 py-2 border border-[#A0A3BD] rounded-[6px] flex justify-between items-center gap-2 cursor-pointer"
                @click="isOpenProviderMenu = !isOpenProviderMenu"
              >
                <p class="text-[#A0A3BD] text-sm">Daftar Provider</p>
                <img
                  src="/images/icons/atoms/chevron-light-gray.svg"
                  alt="open"
                  class="transition-all ease-in"
                  :class="[!isOpenProviderMenu ? 'rotate-180' : 'rotate-0']"
                />
              </div>
            </section>
            <section class="text-[11px] text-right text-green-primary">
              <p>Total: {{ providerLength }} Provider</p>
              <div
                class="bg-[#E3FCF7] px-2 py-1 rounded-[5px] w-max leading-normal flex items-center gap-[2px] cursor-pointer mt-1"
                @click="isShowPopup = !isShowPopup"
              >
                <p class="font-medium">Informasi ketentuan harga</p>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 7.5H5.5V4.5H4.5V7.5ZM5 3.5C5.14167 3.5 5.2605 3.452 5.3565 3.356C5.4525 3.26 5.50033 3.14133 5.5 3C5.49967 2.85867 5.45167 2.74 5.356 2.644C5.26033 2.548 5.14167 2.5 5 2.5C4.85833 2.5 4.73967 2.548 4.644 2.644C4.54833 2.74 4.50033 2.85867 4.5 3C4.49967 3.14133 4.54767 3.26017 4.644 3.3565C4.74033 3.45283 4.859 3.50067 5 3.5ZM5 10C4.30833 10 3.65833 9.86867 3.05 9.606C2.44167 9.34333 1.9125 8.98717 1.4625 8.5375C1.0125 8.08783 0.656334 7.55867 0.394001 6.95C0.131667 6.34133 0.000333966 5.69133 6.32911e-07 5C-0.0003327 4.30867 0.131001 3.65867 0.394001 3.05C0.657001 2.44133 1.01317 1.91217 1.4625 1.4625C1.91183 1.01283 2.441 0.656667 3.05 0.394C3.659 0.131333 4.309 0 5 0C5.691 0 6.341 0.131333 6.95 0.394C7.559 0.656667 8.08817 1.01283 8.5375 1.4625C8.98683 1.91217 9.34317 2.44133 9.6065 3.05C9.86983 3.65867 10.001 4.30867 10 5C9.999 5.69133 9.86767 6.34133 9.606 6.95C9.34433 7.55867 8.98817 8.08783 8.5375 8.5375C8.08683 8.98717 7.55767 9.3435 6.95 9.6065C6.34233 9.8695 5.69233 10.0007 5 10ZM5 9C6.11667 9 7.0625 8.6125 7.8375 7.8375C8.6125 7.0625 9 6.11667 9 5C9 3.88333 8.6125 2.9375 7.8375 2.1625C7.0625 1.3875 6.11667 1 5 1C3.88333 1 2.9375 1.3875 2.1625 2.1625C1.3875 2.9375 1 3.88333 1 5C1 6.11667 1.3875 7.0625 2.1625 7.8375C2.9375 8.6125 3.88333 9 5 9Z"
                    fill="#08A081"
                  />
                </svg>
              </div>
            </section>
          </div>

          <!-- screen 640 + -->
          <section
            class="min-w-[170px] lg:min-w-[241px] sticky top-20 bg-white hidden sm:block"
          >
            <p class="font-medium text-green-primary">Daftar Provider</p>
            <div class="h-screen overflow-y-scroll space-y-4 mt-4 content">
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
            class="grid sm:grid-cols-2 lg:gap-x-6 gap-y-6 content-mobile space-y-6 lg:space-y-0 -mt-8 sm:mt-0"
          >
            <div
              class="col-span-2 text-sm text-[#08A081] sm:flex flex-col items-end hidden"
            >
              <p class="leading-5">Total: {{ providerLength }} provider</p>
              <div
                class="bg-[#E3FCF7] px-3 py-2 rounded-[5px] w-max leading-normal flex items-center gap-1 cursor-pointer mt-2"
                @click="isShowPopup = !isShowPopup"
              >
                <p class="font-medium">Bagaimana kami menentukan harga?</p>
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.875 11.125H8.125V7.375H6.875V11.125ZM7.5 6.125C7.67708 6.125 7.82563 6.065 7.94563 5.945C8.06563 5.825 8.12542 5.67667 8.125 5.5C8.12458 5.32333 8.06458 5.175 7.945 5.055C7.82542 4.935 7.67708 4.875 7.5 4.875C7.32292 4.875 7.17458 4.935 7.055 5.055C6.93542 5.175 6.87542 5.32333 6.875 5.5C6.87458 5.67667 6.93458 5.82521 7.055 5.94563C7.17542 6.06604 7.32375 6.12583 7.5 6.125ZM7.5 14.25C6.63542 14.25 5.82292 14.0858 5.0625 13.7575C4.30208 13.4292 3.64063 12.984 3.07813 12.4219C2.51563 11.8598 2.07042 11.1983 1.7425 10.4375C1.41458 9.67667 1.25042 8.86417 1.25 8C1.24958 7.13583 1.41375 6.32333 1.7425 5.5625C2.07125 4.80167 2.51646 4.14021 3.07813 3.57813C3.63979 3.01604 4.30125 2.57083 5.0625 2.2425C5.82375 1.91417 6.63625 1.75 7.5 1.75C8.36375 1.75 9.17625 1.91417 9.9375 2.2425C10.6988 2.57083 11.3602 3.01604 11.9219 3.57813C12.4835 4.14021 12.929 4.80167 13.2581 5.5625C13.5873 6.32333 13.7513 7.13583 13.75 8C13.7488 8.86417 13.5846 9.67667 13.2575 10.4375C12.9304 11.1983 12.4852 11.8598 11.9219 12.4219C11.3585 12.984 10.6971 13.4294 9.9375 13.7581C9.17792 14.0869 8.36542 14.2508 7.5 14.25ZM7.5 13C8.89583 13 10.0781 12.5156 11.0469 11.5469C12.0156 10.5781 12.5 9.39583 12.5 8C12.5 6.60417 12.0156 5.42187 11.0469 4.45312C10.0781 3.48437 8.89583 3 7.5 3C6.10417 3 4.92188 3.48437 3.95313 4.45312C2.98438 5.42187 2.5 6.60417 2.5 8C2.5 9.39583 2.98438 10.5781 3.95313 11.5469C4.92188 12.5156 6.10417 13 7.5 13Z"
                    fill="#08A081"
                  />
                </svg>
              </div>
            </div>
            <div
              v-for="(item, index) in providerList"
              :key="index"
              class="sm:w-full sm:col-span-2 lg:col-span-1 bg-white p-5 border rounded-[10px]"
            >
              <!-- v-if="item.slug !== 'zap'" -->
              <div class="card" :id="item.slug">
                <div class="w-1/4">
                  <img
                    :src="item.img"
                    alt="provider"
                    class="h-5 sm:h-10 object-contain"
                  />
                </div>
                <div class="w-full my-2">
                  <img
                    :src="item.screenshotMobile"
                    alt="price scheme"
                    class="w-full"
                  />
                </div>
                <p class="font-bold text-sm sm:text-base">Detail Harga</p>
                <div
                  class="mb-[5px] pt-1 flex justify-between items-center"
                  v-for="(info, ind) in item.informations"
                  :key="ind"
                >
                  <div
                    :class="`col-sm-auto text-sm sm:text-base ${
                      info.is_total ? 'font-bold' : ''
                    }`"
                  >
                    {{ info.title }}
                  </div>
                  <div
                    :class="`col text-right text-sm sm:text-base ${
                      info.is_total ? 'font-bold' : ''
                    }`"
                  >
                    {{ info.value }}
                  </div>
                </div>
                <div v-if="item.notes" class="tn:my-2 sm:my-3">
                  <p class="italic tn:text-sm sm:text-base font-semibold">
                    {{ item.notes }}
                  </p>
                </div>
                <div class="divider"></div>
                <p class="font-bold">Skema Berlangganan</p>
                <ol style="padding-left: 1rem" class="list-decimal">
                  <li
                    class="pt-1 text-sm sm:text-base"
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
import Button from '~/components/atoms/Button.vue';

export default {
  components: {
    NavbarBlank,
    Footer,
    Title,
    Button,
  },
  data() {
    return {
      providerList,
      isOpenProviderMenu: false,
      isShowPopup: false,
    };
  },
  computed: {
    providerLength() {
      const uniqueSlugSet = new Set();
      const uniqueObjects = providerList.filter((obj) => {
        if (!uniqueSlugSet.has(obj.slug)) {
          uniqueSlugSet.add(obj.slug);
          return true;
        }
        return false;
      });
      return uniqueObjects.length;
    },
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
</style>
