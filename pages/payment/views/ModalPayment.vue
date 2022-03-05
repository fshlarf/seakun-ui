<template>
  <Modal :is-show="showModal" @onClose="onClose" size="xl:w-2/4">
    <template v-slot:header>
      <div class="font-bold text-lg">Pilih Tipe Pembayaran</div>
    </template>
    <div class="inline-grid md:grid-cols-2 gap-4 py-2">
      <div class="flex-1 shadow-md rounded-md p-1">
        <p class="text-lg font-bold text-center">Pembayaran Otomatis</p>
        <div class="flex flex-wrap justify-center mt-3">
          <div
            v-for="(payment, index) in dataPaymentMethodOtomatis"
            :key="index"
            class="flex bg-white shadow-md w-36 h-11 mx-1 my-2 rounded-xl justify-center"
          >
            <img :src="`/images/payment/${payment}.png`" />
          </div>
        </div>
        <div class="flex flex-row items-center mb-2 mt-4 mx-2">
          <CheckBox />
          <p class="ml-2 text-base font-normal">
            QRIS, E-Wallet, Virtual Account
          </p>
        </div>
        <div class="flex flex-row items-center mb-3 mx-2">
          <CheckBox />
          <p class="ml-2 text-base font-normal">
            Konfirmasi Pembayaran Otomatis
          </p>
        </div>
        <div class="px-2 pb-2">
          <Button
            label="Bayar Otomatis"
            @click="onClickOtomatis"
            class="w-full bg-green-seakun text-base text-white font-bold"
          />
        </div>
      </div>
      <div class="flex-1 shadow-md rounded-md p-1">
        <p class="text-lg font-bold text-center">Pembayaran Manual</p>
        <div class="flex flex-wrap justify-center mt-3">
          <div
            v-for="(payment, index) in dataPaymentMethodManual"
            :key="index"
            class="flex bg-white shadow-md w-36 h-11 mx-1 my-2 rounded-xl justify-center"
          >
            <img :src="`/images/payment/${payment}.png`" />
          </div>
        </div>
        <div class="flex flex-row items-center mb-2 mt-4 mx-2">
          <CheckBox class="w-4" />
          <p class="ml-2 text-base font-normal">
            Tranfer Manual ke Bank BCA, Mandiri dan jenius.
          </p>
        </div>
        <div class="flex flex-row items-center mb-3 mx-2">
          <CheckBox />
          <p class="ml-2 text-base font-normal">Konfirmasi Pembayaran Manual</p>
        </div>
        <div class="px-2 pb-2">
          <Button
            label="Bayar Manual"
            @click="onClickManual"
            class="w-full bg-green-seakun text-base text-white font-bold"
          />
        </div>
      </div>
    </div>
  </Modal>
</template>
<script>
import Modal from '~/components/atoms/Modal';
import CheckBox from '~/assets/images/icon/checkbox.svg?inline';
import Button from '~/components/atoms/Button';

export default {
  name: 'ModalPayment',
  components: {
    Modal,
    CheckBox,
    Button,
  },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    dataPaymentMethodOtomatis: {
      type: Array,
      default: () => [
        'qris',
        'ovo',
        'dana',
        'bca',
        'mandiri',
        'shopee pay',
        'bni',
        'bri',
        'link aja',
      ],
    },
    dataPaymentMethodManual: {
      type: Array,
      default: () => ['bca', 'mandiri', 'jenius'],
    },
    onClickManual: {
      type: Function,
      default: () => {}
    },
    onClickOtomatis: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    onClose() {
      this.$emit('onClose');
    },
  },
};
</script>
