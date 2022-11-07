<template>
  <div id="product-list" class="tn:pt-20 container">
    <h1
      class="tn:text-[28px] md:text-[32px] lg:text-[40px] font-bold text-center"
    >
      Produk Sekeranjang
    </h1>
    <div
      v-if="isLoadingProductList"
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
          v-for="(productData, id) in dataProduct.list"
          :key="id"
          :product="productData"
          @onClickProduct="onClickProduct"
        />
      </div>
    </div>
    <div class="tn:hidden md:block md:mt-14">
      <Pagination
        v-if="!isLoadingProductList"
        :current-page="dataProduct.pagination.currentPage"
        :num-of-pages="dataProduct.pagination.numOfPages"
        @clickPagination="onClickPagination"
      />
    </div>
    <div class="tn:mt-10 md:hidden">
      <PaginationMobile
        v-if="!isLoadingProductList"
        :current-page="dataProduct.pagination.currentPage"
        :num-of-pages="dataProduct.pagination.numOfPages"
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
import SekeranjangService from '../../../../services/SekeranjangServices';
export default {
  components: {
    ProductCard,
    ProductCardShimmer,
    Pagination,
    PaginationMobile,
  },
  data() {
    return {
      SekeranjangService,
      paramProductList: {
        page: 1,
        limit: 10,
      },
      dataProduct: {
        list: [],
        pagination: {},
      },
      isLoadingProductList: false,
    };
  },
  mounted() {
    this.SekeranjangService = new SekeranjangService(this);
    this.getProductList();
  },
  methods: {
    onClickProduct(productUid) {
      this.$router.push(`/sekeranjang/product-detail?product_id=${productUid}`);
    },
    onClickPagination(page) {
      this.paramProductList = {
        ...this.paramProductList,
        page: page,
      };
      this.getProductList();
      const productList = document.getElementById('product-list');
      productList.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    },
    async getProductList() {
      this.isLoadingProductList = true;
      const { SekeranjangService, paramProductList } = this;
      try {
        const fetchProductList = await SekeranjangService.getProducts(
          paramProductList
        );
        if (fetchProductList.data) {
          this.dataProduct = {
            list: fetchProductList.data.data,
            pagination: fetchProductList.data.pagination,
          };
        } else {
          throw new Error(fetchProductList);
        }
      } catch (error) {
        console.log(error);
      }
      this.isLoadingProductList = false;
    },
  },
};
</script>

<style></style>
