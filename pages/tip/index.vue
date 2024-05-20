<template>
  <div id="general-gift" class="">
    <header
      class="px-4 sm:px-[1rem] md:px-[2rem] xl:px-[10rem] bg-[#CCF4E4] lg:bg-white"
    >
      <div
        class="pt-[60px] pb-4 sm:pb-6 md:pb-8 lg:pb-12 max-w-[1150px] mx-auto"
      >
        <div v-if="!bannerSource">
          <div
            class="w-full h-[121px] sm:h-[200px] md:h-[230px] lg:h-[265px] rounded-[10px] lg:rounded-xl bg-slate-200 animate-pulse"
          ></div>
        </div>
        <div v-else>
          <img
            :src="bannerSource"
            @click="handleRedirect"
            alt="TIP untuk seakun"
            class="w-full h-[121px] sm:h-[200px] md:h-[230px] lg:h-[265px] rounded-[10px] lg:rounded-xl cursor-pointer"
          />
        </div>
      </div>
    </header>
    <section
      class="bg-[#CCF4E4] lg:bg-[#8DCABE] relative tn:pb-[48px] px-4 sm:px-[1rem] md:px-[2rem] xl:px-[10rem]"
    >
      <div class="">
        <div
          class="max-w-[1150px] mx-auto lg:flex lg:justify-between items-center lg:px-8"
        >
          <div
            class="text-[#417465] lg:text-white lg:w-[588px] tn:text-center lg:text-left pt-[9px] md:pt-4 lg:pt-10 xl:pt-12"
          >
            <p
              class="text-[16px] sm:text-lg md:text-xl lg:text-[28px] font-bold"
            >
              Donatur TIP
            </p>
            <p class="text-xs sm:text-sm md:text-base lg:text-[18px] tn:mt-2">
              Daftar pengguna Seakun yang memberikan apresiasi terbaik berupa
              TIP ke Tim Seakun yang bertugas.
            </p>
          </div>
          <div class="">
            <Button
              @click="handleRedirect"
              class="hidden lg:block"
              add-class="tn:!py-5 bg-[#08A081] text-white px-[34px]"
            >
              <i class="fa-regular fa-envelope fa-lg"></i>
              <span class="tn:ml-1">Kirim TIP untuk Seakun </span>
            </Button>
          </div>
        </div>

        <!-- mobile view -->
        <div class="xl:hidden">
          <div
            v-if="donaturListMobile.list && donaturListMobile.list.length > 0"
            class="flex xl:hidden"
          >
            <div
              id="donatur-tip-scroll-container"
              class="relative tn:mt-6 md:mt-12 tn:flex items-start gap-4 overflow-x-auto overscroll-auto hide-scrollbar xl:hidden"
            >
              <DonaturCard
                v-for="(donatur, id) in donaturListMobile.list"
                :key="id"
                :donatur-data="donatur"
                class="flex-none"
                @onClickDonaturCard="onClickDonaturCard"
              />
              <DonaturCardLoading
                v-if="isLoadingDataDonation"
                class="flex-none"
              />
            </div>
          </div>
          <div v-else class="w-full tn:mt-6 md:mt-12 flex xl:hidden">
            <div
              class="w-full tn:flex items-center gap-4 overflow-x-auto overscroll-auto hide-scrollbar xl:hidden"
            >
              <DonaturCardLoading class="flex-none" />
              <DonaturCardLoading class="flex-none" />
              <DonaturCardLoading class="flex-none" />
              <DonaturCardLoading class="flex-none" />
            </div>
          </div>
        </div>
        <!-- mobile view -->

        <!-- desktop view -->
        <div v-if="!isLoadingDataDonation" class="tn:hidden xl:block">
          <div
            class="relative xl:mt-12 xl:w-full xl:grid xl:grid-cols-4 gap-4 max-w-[1150px] mx-auto px-8"
          >
            <ButtonChevron
              v-if="donaturList.pagination.currentPage !== 1"
              mode="left"
              class="hidden xl:block absolute z-10 -left-5 top-1/2 transform -translate-y-1/2"
              variant="bg-white opacity-30"
              @click-chevron="onClickPreviousPage"
            />
            <DonaturCard
              v-for="(donatur, id) in donaturList.list"
              :key="id"
              :donatur-data="donatur"
              @onClickDonaturCard="onClickDonaturCard"
            />
            <ButtonChevron
              v-if="
                donaturList.pagination.currentPage !==
                donaturList.pagination.numOfPages
              "
              mode="right"
              class="hidden xl:block absolute z-10 -right-5 top-1/2 transform -translate-y-1/2"
              variant="!bg-white opacity-30"
              @click-chevron="onClickNextPage"
            />
          </div>
        </div>
        <div
          v-if="isLoadingDataDonation"
          class="tn:hidden xl:block w-full xl:mt-12 xl:!container"
        >
          <div class="w-full xl:grid xl:grid-cols-4 items-center gap-4">
            <DonaturCardLoading />
            <DonaturCardLoading />
            <DonaturCardLoading />
            <DonaturCardLoading />
          </div>
        </div>
        <!-- desktop view -->

        <div
          class="tn:hidden xl:block xl:mt-8"
          v-if="donaturList.list && donaturList.list.length > 0"
        >
          <Pagination
            :current-page="donaturList.pagination.currentPage"
            :num-of-pages="donaturList.pagination.numOfPages"
            :is-loading="isLoadingDataDonation"
            @clickPagination="onClickPagination"
          />
        </div>

        <div class="lg:hidden w-full text-center tn:mt-8">
          <Button
            @click="handleRedirect"
            class="w-full"
            add-class="tn:!py-5 bg-[#08A081] text-white mx-auto max-w-[500px]"
          >
            <i class="fa-regular fa-envelope fa-lg"></i>
            <span class="tn:ml-1">Kirim TIP untuk Seakun </span>
          </Button>
        </div>
      </div>
    </section>
    <div
      class="tn:px-[30px] md:!container tn:mt-12 grid lg:grid-cols-2 tn:gap-4 lg:gap-8 text-justify items-start"
    >
      <div
        class="rounded-xl tn:px-[15px] md:px-[20px] lg:px-[30px] tn:py-[12px] md:py-[15px] lg:py-[20px] tn:text-sm text-gray-secondary bg-[#F4F9F8]"
      >
        <h1 class="font-bold text-[14px]">Hai kak,</h1>
        <p class="tn:mt-3">
          Seluruh Tim Seakun mengucapkan terimakasih banyak sudah memberikan
          kepercayaan kepada kami dalam memberikan layanan terbaik ke seluruh
          pengguna Seakun, termasuk kakak.
        </p>
        <p class="tn:mt-3">
          Tidak terasa sudah 3 tahun lamanya tim Seakun melayani kakak-kakak
          semua. Sehingga kakak dapat menikmati layanan premium secara legal dan
          menghemat hingga jutaan rupiah setiap tahunnya.
        </p>
        <p class="tn:mt-3">
          Jika kakak merasa sangat terbantu dan senang dengan layanan yang
          Seakun berikan, kakak bisa mengirimkan TIP untuk Tim Seakun yang
          bertugas dengan cara klik tombol <b>Kirim TIP untuk Seakun</b> di
          atas.
        </p>
        <p class="tn:mt-5">Salam, <br />Tim Seakun</p>
      </div>

      <div
        class="rounded-xl tn:px-[15px] md:px-[20px] lg:px-[30px] tn:py-[12px] md:py-[15px] lg:py-[20px] tn:text-sm text-gray-secondary bg-[#FFF2F2]"
      >
        <h3 class="font-bold text-[14px]">Disclaimer</h3>
        <p class="tn:mt-3">
          Program ini bertujuan untuk mewadahi pengguna Seakun dalam memberikan
          dukungan dan apresiasi yang lebih kepada Tim Seakun yang bertugas,
          tanpa ada paksaan dari pihak manapun. Program TIP untuk Seakun ini
          diinisiasi oleh beberapa pengguna Seakun yang senang atas pelayanan
          yang diberikan oleh Seakun.
        </p>
        <p class="tn:mt-3">
          Hal-hal yang merupakan tanggung jawab Manajemen Seakun perihal hak-hak
          karyawan sudah ditunaikan dengan baik dan mengikuti aturan yang
          berlaku.
        </p>
      </div>
    </div>
    <Footer />

    <ModalDetailDonatur
      :donatur-detail="donaturDetail"
      :show-modal="isShowModalDetail"
      @onClose="isShowModalDetail = !isShowModalDetail"
    />

    <ModalScanQris
      :show-modal="isShowModalScan"
      @onClose="isShowModalScan = !isShowModalScan"
    />
    <PopupNotLogedIn
      v-if="isShowPopupNotLoggedIn"
      @close="isShowPopupNotLoggedIn = !isShowPopupNotLoggedIn"
    />
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
import ModalScanQris from './views/ModalScanQris.vue';
import DonaturCard from './views/DonaturCard.vue';
import DonaturCardLoading from './views/DonationCardLoading.vue';
import MasterService from '~/services/MasterServices.js';
import ButtonChevron from '~/components/atoms/ButtonChevron.vue';
import Pagination from '~/components/mollecules/Pagination.vue';
import ModalDetailDonatur from './views/ModalDetailDonatur.vue';
import waitForElement from '~/helpers/utility.js';
import Footer from '../../components/mollecules/Footer.vue';
import PopupNotLogedIn from './views/PopupNotLogedIn.vue';

export default {
  // layout: 'new',
  components: {
    Button,
    ModalScanQris,
    DonaturCard,
    ButtonChevron,
    Pagination,
    DonaturCardLoading,
    ModalDetailDonatur,
    Footer,
    PopupNotLogedIn,
  },
  data() {
    return {
      MasterService,
      isShowModalScan: false,
      isLoadingDataDonation: true,
      isLogin: false,
      isShowPopupNotLoggedIn: false,
      paramDonationList: {
        page: 1,
        limit: 4,
        isDisplayed: 1,
        donationType: '',
      },
      paramDonationListMobile: {
        page: 1,
        limit: 4,
        isDisplayed: 1,
        donationType: '',
      },
      donaturList: {
        list: [],
        pagination: {},
      },
      donaturListMobile: {
        list: [],
        pagination: {},
      },
      donaturDetail: {},
      isShowModalDetail: false,
      bannerSource: '',
    };
  },

  mounted() {
    this.checkAuth();
    this.MasterService = new MasterService(this);
    this.getDonationList();
    this.monitorScrollBehaviour();
    this.handleBannerSource();
    window.addEventListener('resize', this.handleBannerSource);
  },
  methods: {
    checkAuth() {
      const accesToken = this.$cookies.get('ATS');
      const refreshToken = this.$cookies.get('RTS');

      if (accesToken && refreshToken) {
        this.isLogin = true;
      } else this.isLogin = false;
    },
    monitorScrollBehaviour() {
      this.waitForElement('#donatur-tip-scroll-container').then((elm) => {
        elm.addEventListener('scroll', () => {
          const groupMaxScrollWidth = elm.scrollWidth - elm.clientWidth;
          if (elm.scrollLeft >= groupMaxScrollWidth) {
            if (
              this.paramDonationListMobile.page <
                this.donaturListMobile.pagination.numOfPages &&
              !this.isLoadingDataDonation
            ) {
              this.getDonationListAggregation();
            }
          }
        });
      });
    },
    async getDonationList() {
      const { MasterService } = this;
      this.isLoadingDataDonation = true;
      try {
        const fetchDonation = await MasterService.getDonations(
          this.paramDonationList
        );
        if (fetchDonation.data) {
          const { data, pagination } = fetchDonation.data;
          this.donaturList = {
            list: data,
            pagination,
          };
          this.donaturListMobile = {
            list: data,
            pagination,
          };
        } else {
          throw new Error(fetchDonation);
        }
      } catch (error) {
        console.log(error);
      }
      this.isLoadingDataDonation = false;
    },
    async getDonationListAggregation() {
      const { MasterService } = this;
      this.isLoadingDataDonation = true;
      this.paramDonationListMobile = {
        ...this.paramDonationListMobile,
        page: this.paramDonationListMobile.page + 1,
      };
      try {
        const fetchDonation = await MasterService.getDonations(
          this.paramDonationListMobile
        );
        if (fetchDonation.data) {
          const { data, pagination } = fetchDonation.data;
          this.donaturListMobile = {
            list: [...this.donaturListMobile.list, ...data],
            pagination,
          };
        } else {
          throw new Error(fetchDonation);
        }
      } catch (error) {
        console.log(error);
      }
      this.isLoadingDataDonation = false;
    },
    onClickPreviousPage() {
      this.paramDonationList = {
        ...this.paramDonationList,
        page: this.paramDonationList.page - 1,
      };
      this.getDonationList();
    },
    onClickNextPage() {
      this.paramDonationList = {
        ...this.paramDonationList,
        page: this.paramDonationList.page + 1,
      };
      this.getDonationList();
    },
    onClickPagination(page) {
      this.paramDonationList = {
        ...this.paramDonationList,
        page,
      };
      this.getDonationList();
    },
    onClickDonaturCard(data) {
      this.donaturDetail = data;
      this.isShowModalDetail = true;
    },
    handleBannerSource() {
      if (process.client) {
        window.innerWidth < 768
          ? (this.bannerSource = '/images/seakun-tip/banner-tip-mobile.webp')
          : (this.bannerSource = '/images/seakun-tip/banner-tip.webp');
      }
    },
    handleRedirect() {
      this.checkAuth();
      if (this.isLogin) {
        this.$router.push('/tip-submission');
      } else this.isShowPopupNotLoggedIn = true;
    },
    waitForElement,
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleBannerSource);
  },
};
</script>

<style>
#general-gift {
  font-family: 'DM Sans', sans-serif !important;
}
</style>
