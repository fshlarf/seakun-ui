<template>
  <div>
    <div class="max-w-2xl w-full mx-auto mt-20">
      <div class="flex justify-center w-full">
        <img
          class="w-9/12 mx-auto"
          src="/images/thank-you.png"
          alt="Image not found"
        />
      </div>
      <h3 class="md:text-3xl tn:text-3xl font-bold mt-10 text-center">
        Thank You!
      </h3>
      <HeaderPayment
        :detail-variant-ayce="dataVariantAyce"
        :total-person="totalPerson"
        :total="finalPrice"
      />
      <div class="px-4 text-lg mt-4 -mb-4">
        <WarningInfo :text="contentWarning" />
      </div>
      <DetailPayment :detail-payment="totalPayment" />
      <div class="mt-8 mx-4 mb-4 text-center">
        <a target="_blank" href="https://wa.me/6282124852232">
          <Button
            class="w-full bg-green-seakun text-white"
            label="Konfirmasi ke Whatsapp"
          />
        </a>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import { SEAKUN_PACKAGE_API } from '~/constants/api.js';
import NavbarBlank from '~/components/mollecules/NavbarBlank';
import Button from '~/components/atoms/Button';
import CopyIcon from '~/assets/images/icon/copy.svg?inline';
import DetailPayment from './views/DetailPayment.vue';
import HeaderPayment from './views/HeaderPayment.vue';
import Footer from '~/components/mollecules/Footer';
import WarningInfo from '~/components/mollecules/WarningInfo';
import { packageList } from '../variant-list';

export default {
  components: {
    NavbarBlank,
    CopyIcon,
    Button,
    HeaderPayment,
    DetailPayment,
    Footer,
    WarningInfo,
  },
  layout: 'navigationBlank',
  data() {
    return {
      SEAKUN_PACKAGE_API,
      packageList,
      variantId: 0,
      totalPerson: 0,
      finalPrice: 0,
      totalPayment: 0,
      vouchersData: [],
      dataVariantAyce: {},
    };
  },
  mounted() {
    const { variant_id, total_person } = this.$router.history.current.query;
    this.variantId = variant_id;
    this.totalPerson = total_person;
    this.dataVariantAyce = this.packageList[variant_id - 1];
    this.finalPrice = this.dataVariantAyce.detailPrice.finalPrice;
    this.totalPayment = this.finalPrice * this.totalPerson;
    this.getVouchersData();
  },
  computed: {
    contentWarning() {
      return `Setelah melakukan pembayaran, kirimkan bukti pembayaran ke Whatsapp Seakun.id <a target="_blank" href="https://wa.me/6282124852232">+6282124852232</a>`;
    },
  },
  methods: {
    getVouchersData() {
      const { SEAKUN_PACKAGE_API } = this;
      axios
        .get(`${SEAKUN_PACKAGE_API}/vouchers`)
        .then((res) => {
          this.vouchersData = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    checkValidVoucher(vouchersData, dataPacket, voucher) {
      let validateArray = [];
      vouchersData.map((e) => {
        e.voucher_code == voucher.toLowerCase() && e.active
          ? validateArray.push(1)
          : validateArray.push(0);
      });
      validateArray.sort().reverse();
      validateArray[0] == 1
        ? (this.total = dataPacket.voucherGrandTotal)
        : (this.total = dataPacket.grandTotal);
    },
  },
};
</script>

<style lang="scss" scoped></style>
