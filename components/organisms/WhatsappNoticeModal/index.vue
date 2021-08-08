<template>
  <Modal
      :is-show="isShowInfoModal"
      size="auto"
      @onClose="isShowInfoModal = false"
    >
      <div class="xl:max-w-[384px] mx-auto flex flex-col justify-center items-center mt-2 tn:text-center md:text-left md:px-4 xl:px-0">
        
        <div class="notice-header w-full mb-2 flex flex-col justify-center items-center">
            <img src="/images/illustration-whatsapp-notice.svg" class="tn:w-6/12 md:w-1/3 xl:w-6/12"/>
            <h1 class="text-xl font-bold mt-4">  Info Penting </h1>          
        </div>
        <p class="font-light mb-2">
          Kepada pengguna Seakun, per-tanggal 8 Agustus 2021, WhatsApp Seakun.id yg sebelumnya (+6282124852227) mengalami kendala.
        </p>
    
        <b
          >segala proses pembayaran maupun pengaduan harap diinfokan ke nomor
          whatsapp berikut
          <a
            href="https://api.whatsapp.com/send?phone=6282124852232"
            class="text-primary"
            >+6282124852232</a
          >
        </b>
      </div>
    </Modal>
</template>

<script>
import Modal from '~/components/atoms/Modal.vue';

export default {
    components: {
        Modal
    },
    data() {
        return {
        isShowInfoModal: true,
    };
  },

}
</script>

<style>

</style>