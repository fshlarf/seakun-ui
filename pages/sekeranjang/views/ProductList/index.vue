<template>
  <div id="product-list" class="tn:mt-20 container">
    <h1 class="text-[40px] font-bold text-center">Produk Sekeranjang</h1>
    <div
      v-if="isLoadingProductList"
      class="tn:mt-10 flex justify-center flex-wrap space-x-6"
    >
      <ProductCardShimmer />
      <ProductCardShimmer />
      <ProductCardShimmer />
      <ProductCardShimmer />
      <ProductCardShimmer />
    </div>
    <div v-else>
      <div class="tn:mt-10 flex justify-center items-start flex-wrap">
        <ProductCard
          class="tn:m-3"
          v-for="(productData, id) in dataProduct.list"
          :key="id"
          :product="productData"
          @onClickProduct="onClickProduct"
        />
      </div>
    </div>
    <div class="tn:mt-14">
      <Pagination
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
import MasterService from '../../../../services/MasterServices';
export default {
  components: {
    ProductCard,
    ProductCardShimmer,
    Pagination,
  },
  data() {
    return {
      MasterService,
      paramProductList: {
        page: 1,
        limit: 10,
        service: 1,
      },
      dataProduct: {
        list: [],
        pagination: {},
      },
      isLoadingProductList: false,
    };
  },
  mounted() {
    this.MasterService = new MasterService(this);
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
    },
    async getProductList() {
      this.isLoadingProductList = true;
      const { MasterService, paramProductList } = this;
      try {
        const fetchProductList = await MasterService.getProducts(
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
