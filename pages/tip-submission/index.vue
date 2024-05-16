<template>
  <div class="">
    <main
      class="bg-white lg:border lg:border-[#F4FAF8] lg:px-6 lg:py-8 lg:shadow lg:rounded-[20px]"
    >
      <header class="text-gray-secondary">
        <p
          class="text-[20px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-bold header-title"
        >
          Isi Data Donatur TIP
        </p>
        <p class="text-xs sm:text-sm mt-2 info-header">
          Silahkan isi data di bawah agar nama kakak bisa masuk ke dalam List
          Donatur TIP dan ditampilkan di website Seakun.
        </p>
      </header>
      <form class="mt-5 md:mt-6 lg:mt-7">
        <Input
          v-model="payload.name"
          :error="errorName"
          label="Nama"
          placeholder="Masukkan nama asli/samaran"
        />
        <RupiahInput
          v-model="payload.nominal"
          :error="errorNominal"
          label="Nominal TIP"
          placeholder="Cth. 50000"
          type="number"
          class="mt-5 md:mt-6 lg:mt-7"
        />

        <NominalCard class="mt-3" @onClick="handleNominalCard" />
        <div
          class="mt-3 flex items-start md:items-center gap-1 cursor-pointer"
          @click="payload.isHideNominal = !payload.isHideNominal"
        >
          <img
            :src="
              payload.isHideNominal
                ? '/images/seakun-tip/icons/check-active.svg'
                : '/images/seakun-tip/icons/check.svg'
            "
            alt="hide nominal"
            class="w-5 h-5"
          />
          <p class="text-[#474747]/50 text-xs md:text-sm">
            Sembunyikan nominal TIP pada list donatur: <br class="md:hidden" />
            "RpXX.XXX"
          </p>
        </div>
        <PaymentMethod
          :method-list="paymentMethods"
          :selected-method="selectedMethod"
          @selectMethod="onSelectPaymentMethod"
        />
        <TextArea
          v-model="payload.message"
          label="Pesan"
          placeholder="Beri pesan untuk tim Seakun"
          class="mt-5 md:mt-6 lg:mt-7"
          classLabel="!text-xs sm:!text-sm lg:!text-base !text-gray-secondary/80"
          classArea="!border !border-[#333333]/10 !min-h-[111px] md:!min-h-[130px] lg:!min-h-[168px]"
        />
        <Button
          label="Kirim"
          addClass="text-white bg-primary w-full h-12 mt-7 sm:h-14 md:h-10 lg:h-[66px]"
          :isLoading="isLoadingAddDonation"
          @click="onSubmitTIP"
        />
      </form>
    </main>
  </div>
</template>

<script>
import Input from '../../components/atoms/Input.vue';
import PaymentMethod from './views/PaymentMethod.vue';
import NominalCard from './views/NominalCard.vue';
import TextArea from '../../components/atoms/TextArea.vue';
import Button from '../../components/atoms/Button.vue';
import RupiahInput from '../../components/atoms/RupiahInput.vue';
import MasterService from '~/services/MasterServices.js';

export default {
  layout: 'TipSubmission',
  components: {
    Input,
    NominalCard,
    PaymentMethod,
    TextArea,
    Button,
    RupiahInput,
  },
  data() {
    return {
      MasterService,
      amount: null,
      isLoadingAddDonation: false,
      payload: {
        donationType: 'tip',
        name: '',
        nominal: 0,
        isHideNominal: false,
        message: '',
        paymentMethods: [],
      },
      selectedMethod: {
        code: 'QRIS',
        slug: 'qris',
      },
      paymentMethods: [
        {
          code: 'QRIS',
          slug: 'qris',
          isVa: false,
        },
        {
          code: 'OVO',
          slug: 'ovo',
          isVa: false,
        },
        {
          code: 'DANA',
          slug: 'dana',
          isVa: false,
        },
        {
          code: 'SHOPEEPAY',
          slug: 'shopeepay',
          isVa: false,
        },
        {
          code: 'LINKAJA',
          slug: 'linkaja',
          isVa: false,
        },
        {
          code: 'ALFAMART',
          slug: 'alfamart',
          isVa: true,
        },
        {
          code: 'BNI',
          slug: 'bni',
          isVa: true,
        },
        {
          code: 'BRI',
          slug: 'bri',
          isVa: true,
        },
        {
          code: 'MANDIRI',
          slug: 'mandiri',
          isVa: true,
        },
        {
          code: 'PERMATA',
          slug: 'permata',
          isVa: true,
        },
      ],
      errorName: {
        isError: false,
        message: '',
      },
      errorNominal: {
        isError: false,
        message: '',
      },
    };
  },
  mounted() {
    this.MasterService = new MasterService(this);
    this.checkAuth();
  },
  methods: {
    onSelectPaymentMethod(method) {
      this.selectedMethod = method;
      this.paymentMethod = [];
      this.paymentMethod.push(method.code);
    },
    checkAuth() {
      const accesToken = this.$cookies.get('ATS');
      const refreshToken = this.$cookies.get('RTS');

      if (!accesToken && !refreshToken) {
        this.$router.push('/login?from=tip-submission');
      }
    },
    async onSubmitTIP() {
      this.isLoadingAddDonation = true;
      const { selectedMethod } = this;
      if (!this.payload.name) {
        this.scrollToTop();
        this.errorName = {
          isError: true,
          message: 'Nama kamu belum terisi',
        };
        this.isLoadingAddDonation = false;
        return;
      } else if (!this.payload.nominal) {
        this.resetErrorInput('errorName');
        this.scrollToTop();
        this.errorNominal = {
          isError: true,
          message: 'Nominal TIP belum terisi',
        };
        this.isLoadingAddDonation = false;
        return;
      } else {
        this.resetErrorInput('errorName');
        this.resetErrorInput('errorNominal');
        const parseNominal = parseInt(this.payload.nominal);
        this.payload = {
          ...this.payload,
          isHideNominal: this.payload.isHideNominal ? 1 : 0,
          paymentMethods: [selectedMethod.code],
          nominal: parseNominal,
        };
        try {
          let i = 0;
          while (i < 3) {
            const { MasterService } = this;
            const response = await MasterService.addDonation(this.payload);
            if (response.status == 200) {
              const { data } = response.data;
              window.location.href = data.redirectURL;
              i = 3;
              break;
            } else i++;
          }
        } catch (error) {
          this.$alert.show({
            status: 'error',
            message: 'Terjadi kesalahan. Silakan coba beberapa saat lagi',
          });
          console.log(error);
        }
      }
      this.isLoadingAddDonation = false;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    resetErrorInput(errorName) {
      this[errorName] = {
        isError: false,
        message: '',
      };
    },
    handleNominalCard(val) {
      this.payload.nominal = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.info-header {
  font-family: Nunito Sans;
}
.header-title {
  font-family: Nunito;
}
</style>
