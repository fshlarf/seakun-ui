<template>
  <div>
    <div class="p-2 bg-checkout mt-[-3px]">
      <p class="text-base text-[#417465] font-bold text-center">
        Ini halaman terakhir dari proses orderanmu. Pastikan semua sudah benar,
        ya. :)
      </p>
    </div>
    <div class="max-w-2xl w-full mx-auto pt-5 px-4">
      <OrderDetail />
      <OrderList @changeDuration="OpenCloseModal" :imageProduct="`/images/product/brand/netflix.png`" />
      <PaymentDetail
        :paymentTotal="53140"
        :dataPaymentMethod="dataPaymentMethod"
        :copyNominal="clickCopyHandler('Nominal', 53140)"
      />
      <Button
        label="Bayar"
        class="w-full bg-green-seakun text-base text-white font-bold py-2 my-5"
      />
    </div>
     <Snackbar ref="snackbar" />
     <ModalDuration :durationData="durationData" :showModal="isShowModal" @onClose='OpenCloseModal' />
  </div>
</template>

<script>
import ButtonDrop from '~/components/atoms/ButtonDropDownNew';
import Button from '~/components/atoms/Button';
import Snackbar from '~/components/mollecules/Snackbar.vue';
import DropDownPricesListSubcribe from './views/DropDownPricesListSubcribe.vue';
import OrderDetail from './views/OrderDetail.vue';
import PaymentDetail from './views/PaymentDetail.vue';
import OrderList from './views/OrderList.vue'
import ModalDuration from './views/ModalDuration.vue'

export default {
  name: 'NewPayment',
  layout: 'new',
  components: {
    ButtonDrop,
    DropDownPricesListSubcribe,
    Button,
    OrderDetail,
    PaymentDetail,
    Snackbar,
    OrderList,
    ModalDuration
  },
  data: () => ({
    subcriptionPeriod: {
      name: '1 Bulan (Rp53.000)',
    },
    isShowModal: false,
    dataVariants: [],
    durationData: [true,false,false],
    dataPaymentMethod: [0, 1, 2, 3, 4, 5, 6, 7],
  }),
  methods: {
    clickCopyHandler(name, value) {
      // if (navigator.clipboard) {
      //   navigator.clipboard.writeText(value).then(
      //     () => {
      //       this.$refs.snackbar.showSnackbar({
      //         color: 'black',
      //         message: `${name} berhasil disalin`,
      //         className: '',
      //       });
      //     },
      //     (err) => console.log(err)
      //   );
      // } else {
      //   this.fallbackCopyText(name, value);
      // }
    },
    OpenCloseModal (){
      this.isShowModal = !this.isShowModal
    },
    fallbackCopyText(name, value) {
      let textArea = document.createElement('textarea');
      textArea.value = value;

      // Avoid scrolling to bottom
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.position = 'fixed';

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        let successful = document.execCommand('copy');
        if (successful) {
          this.$refs.snackbar.showSnackbar({
            color: 'black',
            message: `${name} berhasil disalin`,
            className: '',
          });
        }
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
      document.body.removeChild(textArea);
    },
  },
};
</script>
