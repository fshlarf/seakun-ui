<template>
  <div class="max-w-2xl w-full mx-auto pt-5 px-4">
    <div
      class="flex flex-column bg-green-seakun-secondary rounded-[30px] p-5 items-center"
    >
      <CloseIcon class="w-3 cursor-pointer self-end" />
      <img
        class="w-4/12"
        src="/images/thank-you-new.png"
        alt="image not found"
      />
      <p class="text-3xl font-bold my-6">Terima Kasih!</p>
      <p class="text-lg font-normal text-center">
        Anda dapat melakukan pembayaran dengan
        <span class="font-bold">BCA Virtual Account</span> sebelum
        <span class="font-bold">Kamis, 25 Maret 2021, 20:56 WIB</span>.
      </p>
      <div class="w-full rounded-xl bg-payment p-3 mt-2">
        <div class="flex justify-between mb-2">
          <p class="text-base font-normal">Provider</p>
          <p class="text-base font-bold">Netflix</p>
        </div>
        <div class="flex justify-between mb-3">
          <p class="text-base font-normal">Paket</p>
          <p class="text-base font-bold">Paket Premium Group (Familiy)</p>
        </div>
        <p class="text-lg font-bold mb-2">Detail Pembayaran</p>
        <div class="flex justify-between mb-2">
          <p class="text-base font-normal">Metode Pembayaran</p>
          <p class="text-base font-bold">BCA Virtual Account</p>
        </div>
        <div class="copy flex justify-between mb-2 cursor-pointer">
          <p class="text-base font-normal">Nomor Virtual Account</p>
          <div class="flex">
            <p class="text-base font-bold">884893998383</p>
            <CopyIcon />
          </div>
        </div>
        <div class="flex justify-between">
          <p class="text-base font-normal">Total Pembayaran</p>
          <p class="text-base font-bold">{{ formatMoneyRupiah(53000) }}</p>
        </div>
      </div>
      <Button
        label="Kembali ke Daftar Pesanan"
        class="w-full bg-green-seakun text-base text-white font-bold py-2 my-4"
      />
      <p class="text-base font-normal">
        Jika ada kendala, silakan hubungi
        <span class="text-green-seakun-dark cursor-pointer">Admin Seakun</span>.
      </p>
    </div>
  </div>
</template>
<script>
import CopyIcon from '~/assets/images/icon/copy.svg?inline';
import CloseIcon from '~/assets/images/icon/close.svg?inline';
import Button from '~/components/atoms/Button';
import { currencyFormat } from '~/helpers/word-transformation.js';
export default {
  name: 'SuccessPayment',
  components: {
      CopyIcon,
      CloseIcon,
      Button
  },
  data: () => ({
    currencyFormat,
  }),
  methods: {
    formatMoneyRupiah(num) {
      return currencyFormat(num);
    },
  },
};
</script>
<style lang="scss" scoped>
.copy {
  svg {
    width: 16px;
    height: auto;
    display: inline-block;
    fill: #8dcabe;
    margin-top: -4px;
    margin-left: 12px;
    cursor: pointer;
  }
}
</style>
