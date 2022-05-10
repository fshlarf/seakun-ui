<template>
  <Modal :is-show="showModal" @onClose="onClose" size="xl:w-2/4">
    <template v-slot:header>
      <div class="font-bold text-lg">Pilih Tipe Pembayaran</div>
    </template>
    <div class="inline-grid md:grid-cols-2 gap-4 py-2">
      <div class="flex-1 shadow-md rounded-md p-1">
        <p class="text-lg font-bold text-center">Pembayaran Otomatis</p>
        <div class="mt-3 px-3">
          <img class="w-full" src="/images/payment/auto-payment.png" />
        </div>
        <div class="flex flex-row mb-2 mt-4 mx-2">
          <div class="mt-1">
            <CheckBox />
          </div>
          <div>
            <p class="ml-2 text-base font-normal">
              QRIS, E-Wallet, berlaku disemua durasi berlangganan
            </p>
          </div>
        </div>
        <div class="flex flex-row mb-2 mx-2">
          <div class="mt-1">
            <CheckBox />
          </div>
          <div>
            <p class="ml-2 text-base font-normal">
              Virtual Account dan Retail hanya berlaku untuk durasi di atas 3
              bulan berlangganan
            </p>
          </div>
        </div>
        <div class="flex flex-row mb-3 mx-2">
          <div class="mt-1">
            <CheckBox />
          </div>
          <div>
            <p class="ml-2 text-base font-normal">
              Konfirmasi pembayaran otomatis
            </p>
          </div>
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
        <div class="mt-3 px-3">
          <img class="mx-auto" src="/images/payment/manual-payment.png" />
        </div>
        <div class="flex flex-row mb-2 mt-4 mx-2">
          <div class="mt-1">
            <CheckBox class="w-4" />
          </div>
          <div>
            <p class="ml-2 text-base font-normal">
              Transfer manual ke Bank BCA, Mandiri dan jenius
            </p>
          </div>
        </div>
        <div class="flex flex-row mb-3 mx-2">
          <div class="mt-1">
            <CheckBox />
          </div>
          <div>
            <p class="ml-2 text-base font-normal">
              Konfirmasi pembayaran manual (upload bukti transfer di website)
            </p>
          </div>
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
        'shopee pay',
        'link aja',
        'mandiri',
        'bni',
        'bri',
        'permata',
        'alfamart',
      ],
    },
    dataPaymentMethodManual: {
      type: Array,
      default: () => ['bca', 'mandiri', 'jenius'],
    },
    onClickManual: {
      type: Function,
      default: () => {},
    },
    onClickOtomatis: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    onClose() {
      this.$emit('onClose');
    },
  },
};
</script>
