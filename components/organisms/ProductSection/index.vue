<template>
  <div id="provider" class="container tn:pt-20">
    <div class="">
      <div id="product-digital" class="flex justify-between items-center">
        <h1
          class="hidden md:block tn:text-[20px] md:text-[30px] xl:text-[36px] font-bold md:mb-4 lg:mb-4"
        >
          Berlangganan Produk Digital
        </h1>
        <h1 class="text-xl md:hidden font-bold">Layanan Digital</h1>
      </div>

      <div
        class="flex tn:flex-wrap md:flex-nowrap md:justify-between md:space-x-3 items-center w-full tn:mt-4 md:mt-2"
      >
        <div class="tn:w-full lg:w-[400px] relative z-20">
          <InputSearch
            placeholder="Cari produk"
            :data-list="providerSearchList"
            :disabled="dataProviderListActive.loading"
            @onEnter="onSearchProvider"
            @onEraseInput="onEraseInput"
          />
        </div>
        <div
          class="flex items-center space-x-3 tn:w-full md:w-auto tn:mt-3 md:mt-0 relative z-10"
        >
          <div class="tn:w-full md:w-[200px]">
            <SelectOption
              :btn-text="productTypeButton"
              :is-show="isShowProductTypeList"
              :disabled="dataCategory.loading"
              :data-list="productTypeList"
              @click="isShowProductTypeList = !isShowProductTypeList"
              @onClikcItem="onClickProductType"
              @hideDropDown="hideDropDownProductType"
            />
          </div>
          <div class="tn:w-full md:w-[200px]">
            <SelectOption
              :btn-text="categoryButton"
              :is-show="isShowCategoryList"
              :disabled="dataCategory.loading"
              :data-list="providerCategoryList"
              @click="isShowCategoryList = !isShowCategoryList"
              @onClikcItem="onClickCategory"
              @hideDropDown="hideDropDownCategory"
            />
          </div>
        </div>
      </div>

      <div class="tn:mt-6 relative z-0">
        <div v-if="!dataProviderListActive.loading">
          <div
            v-if="
              dataProviderListActive.list &&
              dataProviderListActive.list.length > 0
            "
            class="tn:grid tn:grid-cols-2 md:flex md:flex-wrap md:justify-center tn:!items-stretch tn:gap-3 md:gap-4"
          >
            <div
              class=""
              v-for="(product, id) in dataProviderListActive.list"
              :key="id"
            >
              <ProviderCard
                v-if="product.slug != 'zap'"
                :data-provider="product"
                class="tn:w-full tn:h-full"
                @showPriceScheme="showPriceScheme"
                @on-click-product="onClickProvider"
              />
            </div>
          </div>

          <div
            class="tn:text-lg xl:text-xl flex justify-center items-center font-bold text-gray-400 tn:h-32 xl:h-44 border tn:rounded-lg bg-gray-100"
            v-else
          >
            Produk tidak ditemukan
          </div>
        </div>

        <div
          v-else
          class="tn:grid tn:grid-cols-2 md:flex md:flex-wrap md:justify-center tn:!items-stretch tn:gap-3 md:gap-4"
        >
          <ProviderCardShimmer />
          <ProviderCardShimmer />
          <ProviderCardShimmer />
          <ProviderCardShimmer />
          <ProviderCardShimmer />
          <ProviderCardShimmer />
          <ProviderCardShimmer />
          <ProviderCardShimmer />
        </div>
      </div>

      <SeGlowUpServiceSection />
      <!-- <SetitipBanner /> -->

      <div id="product-ondemand" class="pt-5 md:mt-8 md:py-4">
        <h1 class="tn:text-xl md:text-[30px] xl:text-[36px] font-bold">
          Layanan Non Digital
        </h1>
      </div>

      <div class="tn:mt-7">
        <div
          v-if="!dataProviderListActive.loading"
          class="w-full h-full grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-4 tn:grid-cols-3 tn:gap-3 md:gap-4 lg:gap-8 px-0 justify-center place-items-stretch items-stretch"
        >
          <div class="" v-for="(product, id) in dataProductOnDemand" :key="id">
            <ProductCard
              :product="product"
              class="md:w-full md:h-full"
              @on-click-product="onClickProductOnDemand"
            />
          </div>
          <div class="">
            <ProposeCard
              :propose="dataProposeProvider"
              class="md:w-full h-full"
            />
          </div>
        </div>
        <div
          v-else
          class="grid tn:gap-3 md:gap-4 tn:grid-cols-3 md:grid-cols-4"
        >
          <CardShimmerVertical />
          <CardShimmerVertical />
          <CardShimmerVertical />
          <CardShimmerVertical />
        </div>
      </div>
    </div>

    <ModalPackages
      :is-show="isShowModalPackages"
      :provider="choosedProvider"
      @onClose="onCloseModalPackages"
      :slug="choosedSlugProvider"
      @choosePacket="choosePacket"
    />

    <ModalPriceScheme
      :show-modal="showModalScheme"
      :data-scheme="dataDetailProvider"
      @closeModal="closeModalScheme"
      @toSchemePage="toSchemePage"
    />
  </div>
</template>

<script>
import ProductCard from '~/components/mollecules/ProductCard';
import ProviderCard from '~/components/mollecules/ProviderCard';
import CardShimmerVertical from '~/components/mollecules/CardShimmerVertical';
import ProviderCardShimmer from '~/components/mollecules/ProviderCardShimmer';
import ProposeCard from '~/components/mollecules/ProposeCard';
import ModalPriceScheme from '~/components/mollecules/ModalPriceScheme';
import { providerList } from '../../../constants/price-scheme';
import ModalPackages from './views/ModalPackages.vue';
import SetitipBanner from './views/SetitipBanner.vue';
import { mapGetters, mapActions } from 'vuex';
import InputSearch from '~/components/atoms/InputSearch';
import SelectOption from './views/SelectOption.vue';
import SeGlowUpServiceSection from '~/components/organisms/SeGlowUp/ServiceSection';
export default {
  components: {
    ProductCard,
    ProviderCard,
    ProviderCardShimmer,
    CardShimmerVertical,
    ProposeCard,
    ModalPriceScheme,
    ModalPackages,
    SetitipBanner,
    InputSearch,
    SelectOption,
    SeGlowUpServiceSection,
  },
  data() {
    return {
      showModalScheme: false,
      providerList,
      dataDetailProvider: {
        list: {},
        slug: '',
        name: '',
      },
      dataProductOnDemand: [
        {
          id: 1,
          name: 'Sekurban',
          slug: 'sekurban',
          img: '/images/product/on demand/new/sekurban.png',
          isActive: true,
          // preview:
          //   'Cari teman patungan beli barang Buy 1 Get 1 atau beli barang dengan kuantitas banyak untuk mendapatkan discount sampai 50%.',
        },
        {
          id: 2,
          name: 'Sefitnes',
          slug: 'sefitnes',
          img: '/images/product/on demand/new/sefitnes.png',
          isActive: false,
          // preview:
          //   'Cari teman patungan berlangganan gym, fitness dan fasilitas olahraga untuk mendapatakan potongan harga.',
        },
        {
          id: 3,
          name: 'Seatap',
          slug: 'seatap',
          img: '/images/product/on demand/new/seatap.png',
          isActive: false,
          // preview:
          //   'Cari teman patungan untuk sewa rumah, kostan atau apartemen.',
        },
        {
          id: 4,
          name: 'Sekelas',
          slug: 'sekelas',
          img: '/images/product/on demand/new/sekelas.png',
          isActive: false,
          // preview:
          //   'Cari teman patungan untuk beli dan berlangganan kelas online atau offline.',
        },
        {
          id: 5,
          name: 'Sekatering',
          slug: 'sekatering',
          img: '/images/product/on demand/new/sekatering.png',
          isActive: false,
          // preview: 'Cari teman patungan berlangganan katering terdekat.',
        },
        {
          id: 6,
          name: 'Sekantor',
          slug: 'sekantor',
          img: '/images/product/on demand/new/sekantor.png',
          isActive: false,
          // preview: 'Cari teman patungan berlangganan katering terdekat.',
        },
        {
          id: 7,
          name: 'Sekeranjang',
          slug: 'sekeranjang',
          img: '/images/product/on demand/new/sekeranjang.png',
          isActive: true,
          // preview:
          //   'Cari teman patungan beli barang Buy 1 Get 1 atau beli barang dengan kuantitas banyak untuk mendapatkan discount sampai 50%.',
        },
        {
          id: 5,
          name: 'Semabar',
          slug: 'semabar',
          img: '/images/product/on demand/new/semabar.png',
          isActive: false,
          preview: '(Main Bareng)',
        },
        {
          id: 9,
          name: 'Sejalan',
          slug: 'sejalan',
          img: '/images/product/on demand/new/sejalan.png',
          isActive: false,
          // preview: 'Berlangganan bersama ojek online terpercaya.',
        },
        {
          id: 10,
          name: 'Seumrah',
          slug: 'seumrah',
          img: '/images/product/on demand/new/seumrah.png',
          isActive: false,
          // preview: 'Berlangganan bersama ojek online terpercaya.',
        },
        {
          id: 11,
          name: 'Setrip',
          slug: 'setrip',
          img: '/images/product/on demand/new/setrip.png',
          isActive: false,
          // preview: 'Berlangganan bersama ojek online terpercaya.',
        },
      ],
      dataProposeProvider: {
        name: 'Layananmu',
        preview: 'belum terdaftar?',
        img: '/images/product/propose-new.svg',
      },
      isShowModalPackages: false,
      choosedProvider: {},
      choosedSlugProvider: '',
      isShowCategoryList: false,
      isShowProductTypeList: false,
      categoryButton: 'Kategori produk',
      productTypeButton: 'Tipe produk',
      productTypeList: [
        {
          text: 'All',
          value: 0,
        },
        {
          text: 'Ready',
          value: 1,
        },
        {
          text: 'Pre-order',
          value: 2,
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      filterProvider: 'getFilterProviderActive',
      dataProviderListActive: 'getProvidersActive',
      dataProviderListAll: 'getProviders',
      dataCardVariant: 'getDataCardVariant',
      dataCategory: 'getProviderCategory',
    }),
    providerSearchList() {
      const dataList = this.dataProviderListAll.list.map((provider) => {
        return {
          text: provider.name,
          value: provider.name,
        };
      });
      return dataList;
    },
    providerCategoryList() {
      const allCategory = {
        text: 'All',
        value: '',
      };
      const categories = this.dataCategory.list.map((category) => {
        return {
          text: category.name,
          value: category.code,
        };
      });
      categories.unshift(allCategory);
      return categories;
    },
  },
  mounted() {
    this.fetchProviderCategory();
  },
  methods: {
    ...mapActions({
      setSelectedProvider: 'setSelectedProvider',
      setDataCardVariant: 'setDataCardVariant',
      applyFilterProvider: 'applyFilterProvider',
      fetchProviderCategory: 'fetchProviderCategory',
      setProvidersActive: 'setProvidersActive',
      setFilterProvider: 'setFilterProvider',
    }),
    onSearchProvider(keyword) {
      const filter = {
        ...this.filterProvider,
        keyword,
        category: '',
        type: 0,
      };
      this.applyFilterProvider(filter);
    },
    onClickCategory(category) {
      const filter = {
        ...this.filterProvider,
        category: category.value,
        type: 0,
      };
      this.applyFilterProvider(filter);
      this.categoryButton = category.text;
      this.productTypeButton = 'Tipe produk';
      this.isShowCategoryList = false;
    },
    onClickProductType(type) {
      const filter = {
        ...this.filterProvider,
        type: type.value,
      };
      this.applyFilterProvider(filter);
      this.productTypeButton = type.text;
      this.isShowProductTypeList = false;
    },
    onEraseInput() {
      this.categoryButton = 'Kategori produk';
      this.productTypeButton = 'Tipe produk';
      const filter = {
        ...this.filterProvider,
        keyword: '',
        category: '',
        type: 0,
      };
      this.setFilterProvider(filter);
      const providers = this.dataProviderListAll.list.slice();
      this.setProvidersActive(providers);
    },
    hideDropDownCategory() {
      this.isShowCategoryList = false;
    },
    hideDropDownProductType() {
      this.isShowProductTypeList = false;
    },
    showPriceScheme(param1, param2) {
      this.showModalScheme = true;
      this.dataDetailProvider = {
        list: this.providerList,
        slug: param1,
        name: param2,
      };
    },
    closeModalScheme() {
      this.showModalScheme = false;
    },
    onCloseModalPackages() {
      this.isShowModalPackages = false;
    },
    onClickProvider(provider) {
      this.$router.push(`/provider?name=${provider.slug}&id=${provider.uid}`);
    },
    onClickProductDigital(product) {
      this.setSelectedProvider(product);
      this.isShowModalPackages = true;
      this.choosedProvider = product;
      this.choosedSlugProvider = product.slug;
    },
    onClickProductOnDemand(product) {
      this.$router.push(`/${product.slug}`);
    },
    choosePacket(packet) {
      const data = {
        ...this.dataCardVariant,
        isPo: packet.isPo,
        isHost: packet.isHost,
      };
      this.setDataCardVariant(data);

      this.$router.push(
        `/order?provider=${this.choosedSlugProvider}&variant_id=${packet.uid}&package_id=${packet.packageUid}`
      );
    },
    toSchemePage() {
      this.$router.push('/info/scheme-of-price');
    },
  },
};
</script>

<style lang="scss" scoped></style>
