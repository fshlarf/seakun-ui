<template>
  <div id="ramadan-gift" class="">
    <div
      class="tn:bg-primary md:bg-white container md:w-3/4 mx-auto tn:pt-8 lg:pt-14"
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
      <div
        v-if="!isLoadingDataDonation"
        class="tn:mt-6 md:mt-12 flex xl:justify-center"
      >
        <div
          class="relative flex items-start gap-4 xl:justify-center tn:px-[30px] xl:px-0 overflow-x-auto xl:overflow-visible overscroll-auto hide-scrollbar"
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
            class="flex-none"
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
      <div v-else class="tn:mt-6 md:mt-12 w-full flex justify-center">
        <div
          class="flex xl:justify-center items-center space-x-4 overflow-x-auto overscroll-auto tn:px-[30px] xl:px-0 hide-scrollbar"
        >
          <DonaturCardLoading class="flex-none" />
          <DonaturCardLoading class="flex-none" />
          <DonaturCardLoading class="flex-none" />
          <DonaturCardLoading class="flex-none" />
        </div>
      </div>
      <div
        class="tn:mt-4 md:mt-8"
        v-if="!isLoadingDataDonation && donaturList.pagination"
      >
        <Pagination
          :current-page="donaturList.pagination.currentPage"
          :num-of-pages="donaturList.pagination.numOfPages"
          @clickPagination="onClickPagination"
        />
      </div>

      <div class="lg:hidden w-full text-center tn:px-[30px] tn:mt-4">
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
      class="tn:px-[30px] md:container tn:mt-12 grid lg:grid-cols-2 tn:gap-4 lg:gap-8 text-justify"
    >
      <div
        class="rounded-xl tn:px-[15px] md:px-[20px] lg:px-[30px] tn:py-[12px] md:py-[15px] lg:py-[20px] tn:text-sm text-gray-600 bg-[#F4F9F8]"
      >
        <h1 class="font-bold text-[14px]">Hai kak!</h1>
        <p class="tn:mt-3">
          Seluruh Tim Seakun mengucapkan terimakasih banyak sudah memberikan
          kepercayaan kepada kami agar dapat memberikan layanan terbaik ke
          seluruh pengguna Seakun termasuk kakak.
        </p>
        <p class="tn:mt-3">
          Tidak terasa sudah hampir 3 tahun Seakun membantu kakak-kakak semua
          yang merupakan pengguna Seakun untuk dapat menghemat biaya pengeluaran
          dalam menikmati layanan premium secara legal yang bisa menghemat
          ratusan ribu bahkan jutaan rupiah setiap tahunnya.
        </p>
        <p class="tn:mt-3">
          Jika kakak merasa sangat terbantu dan sangat senang dengan layanan
          yang Seakun berikan, kakak bisa memberikan THR untuk Tim Seakun yang
          bertugas dengan cara klik tombol di bawah.
        </p>
        <p class="tn:mt-5">Salam, <br />Tim Seakun</p>
      </div>

      <div
        class="rounded-xl tn:px-[15px] md:px-[20px] lg:px-[30px] tn:py-[12px] md:py-[15px] lg:py-[20px] tn:text-sm text-gray-600 bg-[#FFF2F2]"
      >
        <h3 class="font-bold text-[14px]">Disclaimer:</h3>
        <p class="tn:mt-3">
          Program THR untuk Seakun ini dilatarbelakangi oleh beberapa pengguna
          Seakun yang senang atas pelayanan yang diberikan oleh Seakun dan ingin
          memberikan apresiasi tinggi berupa tips kepada Tim Seakun yang
          bertugas. Sehingga muncul program ini dengan tujuan untuk mewadahi
          seluruh pengguna Seakun agar bisa memberikan dukungan dan apresiasi
          lebih kepada seluruh Tim Seakun yang bertugas tanpa ada paksaan dari
          pihak manapun.
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
      donaturList: {
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
  },
  methods: {
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
  },
};
</script>

<style>
#ramadan-gift {
  font-family: 'DM Sans', sans-serif !important;
}
</style>