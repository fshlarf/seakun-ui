<template>
  <Modal :is-show="showModal" @onClose="onClose" size="xl:w-1/3">
    <div class="bg-white p-[10px] text-center">
      <img
        class="mx-auto"
        src="/images/ramadan-gift/success.svg"
        alt="donasi berhasil"
      />
      <h2 class="text-[26px] text-secondary font-bold tn:mt-6">
        Thank you kak!
      </h2>
      <p class="opacity-50 tn:mt-4 max-w-[360px] mx-auto">
        Semoga kebaikan kakak mendapat keberkahan yang berlimpah dan
        menginspirasi banyak orang
      </p>
      <Button
        @click="toThrPage"
        variant="primary"
        class="tn:mt-6 tn:py-4 tn:px-8"
        >Kembali ke halaman sebelumnya</Button
      >
    </div>
  </Modal>
</template>

<script>
import Modal from '~/components/atoms/Modal.vue';
import Button from '~/components/atoms/Button.vue';
export default {
  components: {
    Modal,
    Button,
  },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClose() {
      this.$emit('onClose');
    },
    toThrPage() {
      this.$router.push('/thr');
    },
  },
};
</script>

<style></style>
