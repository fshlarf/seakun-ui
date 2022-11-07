<template>
  <Modal :is-show="showModal" @onClose="onClose" size="xl:w-1/3">
    <template v-slot:header>
      <div class="font-bold text-lg">
        Halo, nampaknya kamu masuk daftar-hitam dari layanan Seakun
      </div>
    </template>
    <div>
      <p>
        Di Seakun, kami selalu berupaya untuk menciptakan layanan yang
        transparan bagi setiap pengguna. Sehingga kami mengharapkan setiap
        pengguna yang menggunakan layanan Seakun juga dapat menghargai,
        bertutur-kata yang baik, bertanggungjawab, serta berkomitmen dengan
        rules yang kami tetapkan. Silakan baca kembali
        <a
          href="https://seakun.id/terms-of-use"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-500"
          >syarat & ketentuan</a
        >
        berlangganan di Seakun.
      </p>
      <br />
      <p>
        Jika kamu tetap ingin berlangganan di Seakun, pastikan untuk mengikuti
        syarat yang berlaku dan hubungi admin kami melalui Whatsapp
        <a
          class="text-blue-500"
          href="https://api.whatsapp.com/send/?phone=6282124852232&text=Halo%20min,%20Saya%20ingin%20mendaftar%20di%20Seakun,%20namun%20nomor%20saya%20sebelumnya%20masuk%20dalam%20daftar%20hitam.%20Saya%20akan%20mengikuti%20syarat%20yang%20ditetapkan."
          >+62821 2485 2232</a
        >
      </p>
    </div>
  </Modal>
</template>

<script>
import Modal from '~/components/atoms/Modal.vue';
export default {
  components: {
    Modal,
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
  },
};
</script>

<style></style>
