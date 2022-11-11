<template>
  <div class="w-full h-full relative z-0 tn:mt-8">
    <div class="sticky top-20">
      <div class="w-full bg-white rounded-lg tn:px-6 tn:py-5 tn:mt-6 lg:mt-0">
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
            role="button"
            class="w-[42px] h-[42px] cursor-pointer"
            src="/images/sekeranjang/social/facebook.svg"
            alt="facebook icon"
            @click="onClickShareLink('facebook')"
          />
          <img
            role="button"
            class="w-[42px] h-[42px] cursor-pointer"
            src="/images/sekeranjang/social/instagram.svg"
            alt="instagram icon"
            @click="onClickShareLink('instagram')"
          />
          <img
            role="button"
            class="w-[42px] h-[42px] cursor-pointer"
            src="/images/sekeranjang/social/whatsapp.svg"
            alt="whatsapp icon"
            @click="onClickShareLink('whatsapp')"
          />
          <img
            role="button"
            class="w-[42px] h-[42px] cursor-pointer"
            src="/images/sekeranjang/social/telegram.svg"
            alt="telegram icon"
            @click="onClickShareLink('telegram')"
          />
          <img
            role="button"
            class="w-[42px] h-[42px] cursor-pointer"
            src="/images/sekeranjang/social/email.svg"
            alt="email icon"
            @click="onClickShareLink('email')"
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
        <p class="font-medium text-[#66738F] text-[13px] tn:mt-2">
          *Total harga belum termasuk ongkir
        </p>
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
    onClickShareLink(target) {
      if (target === 'facebook') {
        const share = `https://www.facebook.com/sharer/sharer.php?u=${this.linkProduct}`;
        window.open(share, '_blank');
      } else if (target === 'instagram') {
        const share = `https://www.twitter.com/share?url=${encodeURIComponent(
          this.linkProduct
        )}`;
        window.open(
          share,
          '_blank',
          'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
        );
      } else if (target === 'whatsapp') {
        const share = `https://api.whatsapp.com/send?text=${this.linkProduct}`;
        window.open(share, '_blank');
      } else if (target === 'telegram') {
        const share = `https://t.me/share/url?url=${this.linkProduct}`;
        window.open(share, '_blank');
      } else if (target === 'email') {
        const share = `https://mail.google.com/mail?fs=1&tf=cm&su=link+sekeranjang&body=${this.linkProduct}`;
        window.open(share, '_blank');
      }
    },
  },
};
</script>

<style></style>
