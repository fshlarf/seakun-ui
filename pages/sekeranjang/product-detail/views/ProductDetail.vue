<template>
  <div class="tn:pt-14 relative">
    <div
      v-if="!isLoadingProduct"
      class="container grid grid-cols-3 items-start gap-8 tn:mt-6 relative"
    >
      <Detail
        class="tn:col-span-3 lg:col-span-2"
        :product="dataDetailProduct"
        @clickCopy="clickCopyHandler"
      />
      <Sidebar
        class="tn:hidden lg:block"
        :product="dataDetailProduct"
        @clickCopy="clickCopyHandler"
        @onClickOrder="onClickOrder"
      />
    </div>
    <div v-else class="tn:mt-6 container">
      <DetailProductLoading />
    </div>
    <div class="w-full bg-white tn:p-3 fixed bottom-0 lg:hidden">
      <div v-if="isAvailable" class="flex items-center space-x-2">
        <div
          role="button"
          :disabled="isLoadingProduct"
          class="cursor-pointer w-[24px]"
          @click="isAgreeTos = !isAgreeTos"
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
        v-if="isAvailable"
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
    <Snackbar ref="snackbar" />
  </div>
</template>

<script>
import Snackbar from '~/components/mollecules/Snackbar.vue';
import SekeranjangService from '~/services/SekeranjangServices.js';
import Detail from './Detail.vue';
import Sidebar from './Sidebar.vue';
import DetailProductLoading from './DetailProductLoading.vue';
import CheckedBox from '~/assets/images/icon/checked-box.svg?inline';
import UncheckBox from '~/assets/images/icon/uncheck-box.svg?inline';
import Button from '~/components/atoms/Button';
import moment from 'moment';
export default {
  components: {
    Detail,
    Sidebar,
    Snackbar,
    DetailProductLoading,
    CheckedBox,
    UncheckBox,
    Button,
  },
  data() {
    return {
      SekeranjangService,
      productUid: '',
      dataDetailProduct: {},
      isLoadingProduct: true,
      isAgreeTos: false,
    };
  },
  computed: {
    isAvailable() {
      let available;
      if (
        this.dataDetailProduct.promoEndAt === 0 ||
        (this.dataDetailProduct.promoEndAt !== 0 &&
          moment().unix() < this.dataDetailProduct.promoEndAt)
      ) {
        available = true;
      } else {
        available = false;
      }
      return available;
    },
  },
  mounted() {
    this.SekeranjangService = new SekeranjangService(this);
    const { product_id } = this.$router.history.current.query;
    this.productUid = product_id;
    this.getProductByUid(this.productUid);
  },
  methods: {
    async getProductByUid(uid) {
      this.isLoadingProduct = true;
      this.isAgreeTos = false;
      const { SekeranjangService } = this;
      try {
        const fetchDetailProduct = await SekeranjangService.getProductByUid(
          uid
        );
        if (fetchDetailProduct.data) {
          this.dataDetailProduct = fetchDetailProduct.data.data;
        } else {
          throw new Error(fetchDetailProduct);
        }
      } catch (e) {
        console.log(e);
      }
      this.isLoadingProduct = false;
      this.isAgreeTos = true;
    },
    onClickOrder() {
      this.$router.push(`/sekeranjang/order?product_id=${this.productUid}`);
    },
    clickCopyHandler(name, value) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(value).then(
          () => {
            this.$refs.snackbar.showSnackbar({
              color: 'bg-green-400',
              message: `${name} berhasil disalin`,
              className: '',
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
          this.$refs.snackbar.showSnackbar({
            color: 'bg-black',
            message: `${name} berhasil disalin`,
            className: '',
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
