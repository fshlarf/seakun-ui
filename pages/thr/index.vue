<template>
  <div id="ramadan-gift" class="">
    <div
      class="tn:bg-primary md:bg-white md:container md:w-3/4 md:mx-auto tn:pt-8 lg:pt-14 tn:px-2"
    >
      <img
        src="/images/ramadan-gift/banner.webp"
        alt="thr untuk seakun"
        class="w-full"
      />
    </div>
    <div
      class="md:mt-12 bg-[#8DCABE] relative tn:pb-[48px] tn:pt-[20px] md:pt-[48px]"
    >
      <div
        class="tn:px-[30px] md:container lg:flex lg:justify-between items-center"
      >
        <div class="text-white lg:w-[588px] tn:text-center lg:text-left">
          <h2 class="text-[16px] lg:text-[28px] font-bold">Donatur THR</h2>
          <p class="text-[14px] lg:text-[18px] tn:mt-2">
            Daftar pengguna Seakun yang memberikan apresiasi terbaik berupa THR
            ke Tim Seakun yang bertugas.
          </p>
        </div>
        <div>
          <Button
            @click="onClickDonate"
            class="hidden lg:block"
            variant="third"
            add-class="tn:!py-5"
          >
            <i class="fa-regular fa-envelope fa-lg"></i>
            <span class="tn:ml-1">Kirim THR untuk Seakun</span>
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
            id="donatur-scroll-container"
            class="relative tn:mt-6 md:mt-12 tn:flex items-start gap-4 tn:px-[30px] overflow-x-auto overscroll-auto hide-scrollbar xl:hidden"
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
            class="w-full tn:flex items-center gap-4 overflow-x-auto overscroll-auto tn:px-[30px] hide-scrollbar xl:hidden"
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
      <div
        v-if="!isLoadingDataDonation"
        class="tn:hidden xl:block xl:container"
      >
        <div
          class="relative xl:mt-12 xl:w-full xl:grid xl:grid-cols-4 items-start gap-4"
        >
          <ButtonChevron
            v-if="donaturList.pagination.currentPage !== 1"
            mode="left"
            class="hidden xl:block absolute z-10 -left-12 top-1/2 transform -translate-y-1/2"
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
            class="hidden xl:block absolute z-10 -right-12 top-1/2 transform -translate-y-1/2"
            variant="!bg-white opacity-30"
            @click-chevron="onClickNextPage"
          />
        </div>
      </div>
      <div
        v-if="isLoadingDataDonation"
        class="tn:hidden xl:block w-full xl:mt-12 xl:container"
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

      <div class="lg:hidden w-full text-center tn:px-[30px] tn:mt-8">
        <Button
          @click="onClickDonate"
          class="tn:w-full md:w-3/4"
          variant="third"
          add-class="tn:!py-5"
        >
          <i class="fa-regular fa-envelope fa-lg"></i>
          <span class="tn:ml-1">Kirim THR untuk Seakun</span>
        </Button>
      </div>
    </div>
    <div
      class="tn:px-[30px] md:container tn:mt-12 grid lg:grid-cols-2 tn:gap-4 lg:gap-8 text-justify items-start"
    >
      <div
        class="rounded-xl tn:px-[15px] md:px-[20px] lg:px-[30px] tn:py-[12px] md:py-[15px] lg:py-[20px] tn:text-sm text-gray-600 bg-[#F4F9F8]"
      >
        <h1 class="font-bold text-[14px]">Hai kak!</h1>
        <p class="tn:mt-3">
          Seluruh Tim Seakun mengucapkan terimakasih banyak sudah memberikan
          kepercayaan kepada kami dalam memberikan layanan terbaik ke seluruh
          pengguna Seakun, termasuk kakak.
        </p>
        <p class="tn:mt-3">
          Tidak terasa sudah hampir 3 tahun lamanya tim Seakun melayani
          kakak-kakak semua. Sehingga kakak dapat menikmati layanan premium
          secara legal dan menghemat hingga jutaan rupiah setiap tahunnya.
        </p>
        <p class="tn:mt-3">
          Jika kakak merasa sangat terbantu dan senang dengan layanan yang
          Seakun berikan, kakak bisa mengirimkan THR untuk Tim Seakun yang
          bertugas dengan cara klik tombol Kirim THR untuk Seakun di atas.
        </p>
        <p class="tn:mt-5">Salam, <br />Tim Seakun</p>
      </div>

      <div
        class="rounded-xl tn:px-[15px] md:px-[20px] lg:px-[30px] tn:py-[12px] md:py-[15px] lg:py-[20px] tn:text-sm text-gray-600 bg-[#FFF2F2]"
      >
        <h3 class="font-bold text-[14px]">Disclaimer:</h3>
        <p class="tn:mt-3">
          Program ini bertujuan untuk mewadahi pengguna Seakun dalam memberikan
          dukungan dan apresiasi yang lebih kepada Tim Seakun yang bertugas,
          tanpa ada paksaan dari pihak manapun. Program THR untuk Seakun ini
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

    <ModalDetailDonatur
      :donatur-detail="donaturDetail"
      :show-modal="isShowModalDetail"
      @onClose="isShowModalDetail = !isShowModalDetail"
    />

    <ModalScanQris
      :show-modal="isShowModalScan"
      @onClose="isShowModalScan = !isShowModalScan"
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

export default {
  layout: 'new',
  components: {
    Button,
    ModalScanQris,
    DonaturCard,
    ButtonChevron,
    Pagination,
    DonaturCardLoading,
    ModalDetailDonatur,
  },
  data() {
    return {
      MasterService,
      isShowModalScan: false,
      isLoadingDataDonation: true,
      paramDonationList: {
        page: 1,
        limit: 4,
        isDisplayed: 1,
        donationType: 'ramadan',
      },
      paramDonationListMobile: {
        page: 1,
        limit: 4,
        isDisplayed: 1,
        donationType: 'ramadan',
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
    };
  },
  mounted() {
    this.MasterService = new MasterService(this);
    this.getDonationList();
    this.monitorScrollBehaviour();
  },
  methods: {
    monitorScrollBehaviour() {
      this.waitForElement('#donatur-scroll-container').then((elm) => {
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
    onClickDonate() {
      this.$router.push('/thr-submission');
    },
    onClickDonaturCard(data) {
      this.donaturDetail = data;
      this.isShowModalDetail = true;
    },
    waitForElement,
  },
};
</script>

<style>
#ramadan-gift {
  font-family: 'DM Sans', sans-serif !important;
}
</style>
