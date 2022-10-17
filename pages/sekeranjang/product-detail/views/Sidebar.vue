<template>
  <div class="w-full h-full relative z-0 tn:mt-8">
    <div class="w-full">
      <p
        v-if="product && product.sekeranjang"
        class="text-[#A0A3BD] text-[20px] font-medium"
      >
        {{ product.sekeranjang.productBrand }}
      </p>
      <h1 class="text-[24px] font-semibold tracking-tight">
        {{ product.name }}
      </h1>
      <p class="text-[36px] font-bold tn:mt-3 tracking-tight">
        {{ currencyFormat(product.finalPrice) }}
      </p>
      <div class="flex items-center space-x-3 tn:mt-1">
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

    <div class="sticky top-20">
      <div class="w-full bg-white rounded-lg tn:px-6 tn:py-5 tn:mt-6">
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

        <div class="tn:mt-5 flex justify-between items-center">
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

      <div class="w-full bg-white rounded-2xl tn:p-6 tn:mt-4">
        <div class="flex justify-between items-center">
          <p class="font-medium text-[#66738F]">Total harga</p>
          <p class="text-[24px] font-bold text-[#417465]">
            {{ currencyFormat(product.finalPrice) }}
          </p>
        </div>
        <hr class="tn:my-2" />
        <div class="flex items-start space-x-2 tn:pt-2">
          <div
            class="cursor-pointer w-[24px]"
            @click="isAgreeTos = !isAgreeTos"
          >
            <CheckedBox v-if="isAgreeTos" />
            <UncheckBox v-else />
          </div>
          <p>
            Saya consent menyetujui
            <a
              class="text-green-seakun ml-0"
              href="/terms-of-use"
              target="_blank"
              >syarat & ketentuan</a
            >
            Seakun
          </p>
        </div>

        <Button
          label="Ikut patungan"
          variant="primary"
          class="w-full tn:mt-4"
          add-class="tn:py-4 font-bold"
          :disabled="!isAgreeTos"
          @click="$emit('onClickOrder')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CheckedBox from '~/assets/images/icon/checked-box.svg?inline';
import UncheckBox from '~/assets/images/icon/uncheck-box.svg?inline';
import Button from '~/components/atoms/Button';
import { currencyFormat } from '../../../../helpers';

export default {
  components: {
    CheckedBox,
    UncheckBox,
    Button,
  },
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isAgreeTos: false,
    };
  },
  computed: {
    linkProduct() {
      return `https://seakun.id/sekeranjang/product-detail?product_id=${this.product.uid}`;
    },
  },
  methods: {
    currencyFormat,
  },
};
</script>

<style></style>
