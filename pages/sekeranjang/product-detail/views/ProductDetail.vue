<template>
  <div class="container tn:pt-20">
    <div
      v-if="!isLoadingProduct"
      class="grid grid-cols-3 items-start gap-8 tn:mt-6 relative"
    >
      <Detail class="col-span-2" :product="dataDetailProduct" />
      <Sidebar
        class="sticky top-28"
        :product="dataDetailProduct"
        @clickCopy="clickCopyHandler"
      />
    </div>
    <div v-else class="tn:mt-6">
      <DetailProductLoading />
    </div>
    <Snackbar ref="snackbar" />
  </div>
</template>

<script>
import Snackbar from '~/components/mollecules/Snackbar.vue';
import MasterService from '~/services/MasterServices.js';
import Detail from './Detail.vue';
import Sidebar from './Sidebar.vue';
import DetailProductLoading from './DetailProductLoading.vue';
export default {
  components: {
    Detail,
    Sidebar,
    Snackbar,
    DetailProductLoading,
  },
  data() {
    return {
      MasterService,
      productUid: '',
      dataDetailProduct: {},
      isLoadingProduct: true,
    };
  },
  mounted() {
    this.MasterService = new MasterService(this);
    const { product_id } = this.$router.history.current.query;
    this.productUid = product_id;
    this.getProductByUid(this.productUid);
  },
  methods: {
    async getProductByUid(uid) {
      this.isLoadingProduct = true;
      const { MasterService } = this;
      try {
        const fetchDetailProduct = await MasterService.getProductByUid(uid);
        if (fetchDetailProduct.data) {
          this.dataDetailProduct = fetchDetailProduct.data.data;
        } else {
          throw new Error(fetchDetailProduct);
        }
      } catch (e) {
        console.log(e);
      }
      this.isLoadingProduct = false;
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
