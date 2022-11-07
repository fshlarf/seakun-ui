<template>
  <div class="w-full">
    <div class="flex items-center space-x-3 text-[14px]">
      <nuxt-link class="text-secondary tn:py-0" to="/sekeranjang"
        >Sekeranjang</nuxt-link
      >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="w-[10px] h-[10px]"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        stroke="gray"
        stroke-width="1"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
      <p class="tn:py-0">{{ product.name }}</p>
    </div>
    <div
      v-if="product.images && product.images.length > 0"
      class="w-full tn:mt-3"
    >
      <div
        class="w-full flex justify-center items-center tn:h-[360px] md:h-[448px] overflow-hidden bg-gray-300"
      >
        <img
          class="w-full object-contain"
          :src="activePhoto.popFile"
          alt="active photo"
        />
      </div>
      <div class="w-full relative z-0">
        <div
          id="photo-scroll"
          class="tn:mt-3 md:mt-4 hide-scrollbar overflow-hidden"
        >
          <div
            id="photo-content"
            class="flex items-center tn:space-x-3 md:space-x-4 xl:w-max hide-scrollbar tn:overflow-x-auto tn:overscroll-auto xl:overflow-x-hidden xl:overscroll-none"
          >
            <div
              v-for="(photo, id) in dataPhotos"
              :key="id"
              role="button"
              class="tn:w-[80px] tn:h-[80px] md:w-[123px] md:h-[123px] overflow-hidden flex-none"
              :class="`${
                activePhoto === photo
                  ? 'border-4 border-green-seakun'
                  : 'border'
              }`"
              @click="activePhoto = photo"
            >
              <img
                class="object-cover-center"
                :src="photo.popFile"
                alt="list photo"
              />
            </div>
          </div>
        </div>
        <div
          v-if="!isStartPoint"
          class="tn:hidden xl:flex cursor-pointer absolute z-10 -left-4 top-0 bottom-0 my-auto mx-0 rounded-full w-10 h-10 bg-black opacity-60 justify-center items-center text-white font-bold"
          @click="scrollPhotos('left')"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="w-4 h-4 reverse tn:mr-1"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            stroke="white"
            stroke-width="2"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
        <div
          v-if="!isEndScroll"
          class="tn:hidden xl:flex cursor-pointer absolute z-10 -right-4 top-0 bottom-0 my-auto mx-0 rounded-full w-10 h-10 bg-black opacity-60 justify-center items-center text-white font-bold"
          @click="scrollPhotos('right')"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="w-4 h-4 tn:ml-1"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            stroke="white"
            stroke-width="2"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
    </div>

    <div class="w-full lg:hidden tn:mt-4">
      <p
        v-if="product && product.sekeranjang"
        class="text-[#A0A3BD] text-[20px] font-medium"
      >
        {{ product.sekeranjang.productBrand }}
      </p>
      <h1 class="text-[24px] font-semibold tracking-tight">
        {{ product.name }}
      </h1>
      <p class="text-[36px] font-bold tn:mt-1 tracking-tight">
        {{ currencyFormat(product.finalPrice) }}
      </p>
      <div class="flex items-center space-x-3 md:mt-1">
        <p
          class="text-[#BA0000] font-bold text-[18px] bg-[#FFF2F2] tn:px-2 rounded-sm"
        >
          Hemat hingga
        </p>
        <p class="text-[21px]">
          {{ currencyFormat(product.price - product.finalPrice) }}
        </p>
      </div>
    </div>

    <div
      class="lg:hidden w-full bg-white rounded-lg tn:px-5 tn:py-4 md:px-6 md:py-5 tn:mt-6"
    >
      <p class="font-bold text-[#66738F]">Bagikan link produk</p>
      <div
        class="rounded-md overflow-hidden border-2 border-[#A0A3BD] flex justify-between tn:mt-2"
      >
        <div
          class="hide-scrollbar w-full overscroll-auto overflow-x-auto tn:py-4 tn:pl-4"
        >
          <div class="min-w-max h-full flex-none">
            <p class="text-[#A0A3BD] w-full h-full">
              {{ linkProduct }}
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="w-4 h-full"></div>
          <div
            class="bg-primary w-[50px] h-full flex justify-center items-center cursor-pointer"
            @click="$emit('clickCopy', 'Link produk', linkProduct)"
          >
            <img
              class="w-[20px] h-[20px]"
              src="/images/icons/atoms/copy.svg"
              alt="copy link"
            />
          </div>
        </div>
      </div>

      <div
        class="tn:mt-5 flex tn:justify-between md:justify-start md:space-x-4 items-center"
      >
        <img
          class="w-[42px] h-[42px] cursor-pointer"
          src="/images/sekeranjang/social/facebook.svg"
          alt="facebook icon"
        />
        <img
          class="w-[42px] h-[42px] cursor-pointer"
          src="/images/sekeranjang/social/instagram.svg"
          alt="instagram icon"
        />
        <img
          class="w-[42px] h-[42px] cursor-pointer"
          src="/images/sekeranjang/social/whatsapp.svg"
          alt="whatsapp icon"
        />
        <img
          class="w-[42px] h-[42px] cursor-pointer"
          src="/images/sekeranjang/social/telegram.svg"
          alt="telegram icon"
        />
        <img
          class="w-[42px] h-[42px] cursor-pointer"
          src="/images/sekeranjang/social/email.svg"
          alt="email icon"
        />
      </div>
    </div>

    <div
      class="rounded-2xl bg-white tn:p-5 md:p-7 tn:space-y-1 md:space-y-3 tn:mt-4 lg:mt-8"
    >
      <p class="text-[20px] font-bold">Detail Promo</p>
      <div class="grid tn:grid-cols-1 md:grid-cols-3 items-start">
        <p class="tn:text-[16px] md:text-[18px] font-bold">Periode Promo</p>
        <p
          v-if="product.promoStartAt && product.promoEndAt"
          class="md:col-span-2 tn:text-[16px] md:text-[18px] font-medium"
        >
          {{ toLocalDate(product.promoStartAt) }} -
          {{ toLocalDate(product.promoEndAt) }}
        </p>
        <p
          v-else-if="!product.promoStartAt && product.promoEndAt"
          class="md:col-span-2 tn:text-[16px] md:text-[18px] font-medium"
        >
          Sampai {{ toLocalDate(product.promoEndAt) }}
        </p>
        <p
          v-else
          class="md:col-span-2 tn:text-[16px] md:text-[18px] font-medium"
        >
          -
        </p>
      </div>
      <div class="grid tn:grid-cols-1 md:grid-cols-3 items-start">
        <p class="tn:text-[16px] md:text-[18px] font-bold">Link Website</p>
        <a
          :href="product.productUrl"
          target="_blank"
          class="md:col-span-2 tn:text-[16px] md:text-[18px] font-medium break-all text-primary"
        >
          {{ product.productUrl }}
        </a>
      </div>
      <div class="grid tn:grid-cols-1 md:grid-cols-3 items-start">
        <p class="tn:text-[16px] md:text-[18px] font-bold">Detail Promo</p>
        <p class="md:col-span-2 tn:text-[16px] md:text-[18px] font-medium">
          {{ product.promoType }}
        </p>
      </div>
    </div>

    <div
      class="rounded-2xl bg-white tn:p-5 md:p-7 tn:space-y-1 md:space-y-3 tn:mt-4 md:mt-6"
    >
      <p class="text-[20px] font-bold">Informasi Uploader</p>
      <div class="flex items-center space-x-3">
        <div class="rounded-full bg-gray-400 w-[52px] h-[52px]"></div>
        <div>
          <p class="text-[24px] font-bold">Adyan Aqil</p>
          <p class="tn:text-[16px] md:text-[18px]">Medan, Indonesia</p>
        </div>
      </div>
    </div>

    <div class="rounded-xl bg-[#E9FAF5] tn:p-5 md:p-7 tn:mt-6">
      <div class="flex items-center space-x-2">
        <img
          class="w-[21px]"
          src="/images/icons/atoms/green-alert.svg"
          alt="alert"
        />
        <p class="text-[#417465] text-[20px] font-bold">Detail Pengiriman</p>
      </div>
      <p class="font-medium tn:text-[16px] md:text-[18px] tn:mt-1">
        Pengiriman akan didiskusikan setelah grup patungan full
      </p>
    </div>

    <div
      class="rounded-2xl bg-white tn:p-5 md:p-7 tn:space-y-1 md:space-y-3 tn:mt-4 md:mt-6"
    >
      <p class="text-[20px] font-bold">Detail Harga Produk</p>
      <div class="tn:grid-cols-1 md:grid grid-cols-3 items-center">
        <p class="tn:text-[16px] md:text-[18px] font-bold">Harga asli produk</p>
        <p class="md:col-span-2 tn:text-[16px] md:text-[18px] font-medium">
          {{ currencyFormat(product.price) }}
        </p>
      </div>
      <div class="tn:grid-cols-1 md:grid grid-cols-3 items-center">
        <p class="tn:text-[16px] md:text-[18px] font-bold">Harga patungan</p>
        <p class="md:col-span-2 tn:text-[16px] md:text-[18px] font-medium">
          {{ currencyFormat(product.jointPrice) }}
        </p>
      </div>
      <div class="tn:grid-cols-1 md:grid grid-cols-3 items-center">
        <p class="tn:text-[16px] md:text-[18px] font-bold">Biaya Admin</p>
        <p class="md:col-span-2 tn:text-[16px] md:text-[18px] font-medium">
          {{ currencyFormat(product.adminFee) }}
        </p>
      </div>
    </div>

    <div
      class="rounded-2xl bg-[#A0A3BD0D] tn:p-5 md:p-7 tn:space-y-1 md:space-y-3 tn:mt-4 md:mt-6"
    >
      <p class="text-[20px] font-bold">Syarat dan Ketentuan</p>
      <ol class="tn:text-[16px] md:text-[18px] list-decimal tn:pl-4">
        <li>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
          similique?
        </li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
          similique?
        </li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit.</li>
      </ol>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '../../../../helpers';
import moment from 'moment';

export default {
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      moment,
      activePhoto: {},
      dataPhotos: [],
      scrollAmount: 0,
      isStartPoint: true,
      isEndScroll: true,
      contentWidth: 736,
      scrollWidth: 417,
      isAgreeTos: false,
    };
  },
  computed: {
    linkProduct() {
      return `https://seakun.id/sekeranjang/product-detail?product_id=${this.product.uid}`;
    },
  },
  mounted() {
    if (this.product.images.length > 0) {
      this.dataPhotos = this.product.images;
      this.activePhoto = this.dataPhotos[0];
      const content = document.getElementById('photo-content');
      setTimeout(() => {
        if (
          this.dataPhotos.length > 0 &&
          content.clientWidth < this.contentWidth
        ) {
          this.isEndScroll = true;
        } else {
          this.isEndScroll = false;
        }
      }, 500);
    }
  },
  methods: {
    scrollPhotos(direction) {
      const container = document.getElementById('photo-scroll');
      const content = document.getElementById('photo-content');
      let nextScroll;
      let scrollMax = content.clientWidth;
      if (direction === 'right') {
        if (
          scrollMax - (this.scrollAmount + this.scrollWidth) <
          this.contentWidth
        ) {
          nextScroll = this.scrollAmount;
          container.scrollTo({
            top: 0,
            left: Math.max(this.scrollAmount, scrollMax - this.contentWidth),
            behavior: 'smooth',
          });
          this.isEndScroll = true;
        } else {
          nextScroll = this.scrollAmount + this.scrollWidth;
          container.scrollTo({
            top: 0,
            left: Math.max(this.scrollAmount, nextScroll),
            behavior: 'smooth',
          });
        }
      } else {
        if (container.scrollLeft === scrollMax - this.contentWidth) {
          nextScroll = this.scrollAmount;
          container.scrollTo({
            top: 0,
            left: Math.min(scrollMax, nextScroll),
            behavior: 'smooth',
          });
        } else {
          nextScroll = this.scrollAmount - this.scrollWidth;
          container.scrollTo({
            top: 0,
            left: Math.min(this.scrollAmount, nextScroll),
            behavior: 'smooth',
          });
        }
        this.isEndScroll = false;
      }
      this.scrollAmount = nextScroll;
      if (this.scrollAmount === 0) {
        this.isStartPoint = true;
      } else {
        this.isStartPoint = false;
      }
    },
    toLocalDate(date) {
      return moment.unix(date).locale('id').format('D MMMM YYYY');
    },
    currencyFormat,
  },
};
</script>

<style>
.reverse {
  transform: rotate(180deg);
}
</style>
