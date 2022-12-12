<template>
  <div id="product-list" class="tn:pt-20 container">
    <h1
      class="tn:text-[28px] md:text-[32px] lg:text-[40px] font-bold text-center"
    >
      Produk Sekeranjang
    </h1>
    <div
      v-if="productsData.loading"
      class="tn:mt-6 md:mt-10 flex justify-center flex-wrap"
    >
      <ProductCardShimmer class="tn:m-1 md:m-3" />
      <ProductCardShimmer class="tn:m-1 md:m-3" />
      <ProductCardShimmer class="tn:m-1 md:m-3" />
      <ProductCardShimmer class="tn:m-1 md:m-3" />
      <ProductCardShimmer class="tn:m-1 md:m-3" />
    </div>
    <div v-else>
      <div class="tn:mt-6 md:mt-10 flex justify-center items-start flex-wrap">
        <ProductCard
          class="tn:m-1 md:m-3"
          v-for="(productData, id) in productsData.list"
          :key="id"
          :product="productData"
          @onClickProduct="onClickProduct"
        />
      </div>
    </div>
    <div v-if="!productsData.loading" class="tn:hidden md:block md:mt-14">
      <Pagination
        v-if="productsData.pagination"
        :current-page="productsData.pagination.currentPage"
        :num-of-pages="productsData.pagination.numOfPages"
        @clickPagination="onClickPagination"
      />
    </div>
    <div v-if="!productsData.loading" class="tn:mt-10 md:hidden">
      <PaginationMobile
        v-if="productsData.pagination"
        :current-page="productsData.pagination.currentPage"
        :num-of-pages="productsData.pagination.numOfPages"
        @clickPagination="onClickPagination"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from './views/ProductCard.vue';
import ProductCardShimmer from './views/ProductCardShimmer.vue';
import Pagination from '../Pagination.vue';
import PaginationMobile from '../PaginationMobile.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    ProductCard,
    ProductCardShimmer,
    Pagination,
    PaginationMobile,
  },
  computed: {
    ...mapGetters({
      productsData: 'sekeranjang/getProducts',
    }),
  },
  mounted() {
    if (this.productsData.list.length === 0) {
      this.applyFilterProduct(1);
    }
  },
  methods: {
    ...mapActions({
      applyFilterProduct: 'sekeranjang/applyFilterProduct',
    }),
    onClickProduct(productUid) {
      this.$router.push(`/sekeranjang/product-detail?product_id=${productUid}`);
    },
    onClickPagination(page) {
      this.applyFilterProduct(page);
      const productList = document.getElementById('product-list');
      productList.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    },
  },
};
</script>

<style></style>
