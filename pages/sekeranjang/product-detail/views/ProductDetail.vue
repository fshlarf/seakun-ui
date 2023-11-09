<template>
  <div class="tn:pt-14 relative">
    <div
      v-if="!productDetail.loading"
      class="container grid grid-cols-3 items-start gap-8 tn:mt-6 relative"
    >
      <Detail
        class="tn:col-span-3 lg:col-span-2"
        :product="productDetail.data"
        @clickCopy="clickCopyHandler"
      />
      <Sidebar
        class="tn:hidden lg:block"
        :product="productDetail.data"
        @clickCopy="clickCopyHandler"
        @onClickOrder="onClickOrder"
      />
    </div>
    <div v-else class="tn:mt-6 container">
      <DetailProductLoading />
    </div>
    <div class="w-full bg-white tn:p-3 fixed bottom-0 lg:hidden">
      <div v-if="isProductAvailable" class="flex items-center space-x-2">
        <div
          role="button"
          :disabled="productDetail.loading"
          class="cursor-pointer w-[24px]"
          @click="onClickAgreeTos"
        >
          <CheckedBox v-if="isAgreeTos" />
          <UncheckBox v-else />
        </div>
        <p class="text-[14px]">
          Menyetujui
          <a class="text-green-seakun ml-0" href="/terms-of-use" target="_blank"
            >syarat & ketentuan</a
          >
          Seakun
        </p>
      </div>
      <Button
        v-if="isProductAvailable"
        label="Ikut patungan"
        variant="primary"
        class="w-full tn:mt-4"
        add-class="tn:py-4 font-bold"
        :disabled="!isAgreeTos"
        @click="onClickOrder"
      />
      <div
        v-else
        class="tn:mt-4 w-full rounded-lg bg-red-100 text-red-500 tn:p-4 text-center font-bold"
      >
        Masa promo berakhir
      </div>
    </div>
  </div>
</template>

<script>
import Detail from './Detail.vue';
import Sidebar from './Sidebar.vue';
import DetailProductLoading from './DetailProductLoading.vue';
import CheckedBox from '~/assets/images/icon/checked-box.svg?inline';
import UncheckBox from '~/assets/images/icon/uncheck-box.svg?inline';
import Button from '~/components/atoms/Button';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    Detail,
    Sidebar,
    DetailProductLoading,
    CheckedBox,
    UncheckBox,
    Button,
  },
  computed: {
    ...mapGetters({
      productUid: 'sekeranjang/getProductUid',
      productDetail: 'sekeranjang/getDetailProduct',
      isAgreeTos: 'sekeranjang/getAgreeTos',
      isProductAvailable: 'sekeranjang/getProductAvailable',
    }),
  },
  mounted() {
    const { product_id } = this.$router.history.current.query;
    this.setProductUid(product_id);
    this.getDetailProduct(product_id);
  },
  methods: {
    ...mapActions({
      getDetailProduct: 'sekeranjang/fetchDetailProduct',
      setProductUid: 'sekeranjang/setProductUid',
      setAgreeTos: 'sekeranjang/setAgreeTos',
    }),
    onClickAgreeTos() {
      this.setAgreeTos(!this.isAgreeTos);
    },
    onClickOrder() {
      this.$router.push(`/sekeranjang/order?product_id=${this.productUid}`);
    },
    clickCopyHandler(name, value) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(value).then(
          () => {
            this.$alert.show({
              status: 'success',
              message: `${name} berhasil disalin`,
            });
          },
          (err) => console.log(err)
        );
      } else {
        this.fallbackCopyText(name, value);
      }
    },
    fallbackCopyText(name, value) {
      let textArea = document.createElement('textarea');
      textArea.value = value;

      // Avoid scrolling to bottom
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.position = 'fixed';

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        let successful = document.execCommand('copy');
        if (successful) {
          this.$alert.show({
            status: 'success',
            message: `${name} berhasil disalin`,
          });
        }
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
      document.body.removeChild(textArea);
    },
  },
};
</script>

<style></style>
