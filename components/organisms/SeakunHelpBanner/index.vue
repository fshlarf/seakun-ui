<template>
  <div class="container tn:mt-2 lg:pt-10 pt-10">
    <div
      class="bg-pink-seakun rounded-3xl md:flex md:flex-row tn:px-6 lg:px-16 py-6 items-center"
    >
      <div class="">
        <img
          class="tn:h-44 md:h-56 w-auto mx-auto"
          src="/images/illustration-seakun-help-banner.svg"
        />
      </div>
      <div class="flex-1 md:px-8">
        <h1
          class="text-3xl lg:text-5xl font-bold text-secondary tn:text-center md:text-left tn:my-2 md:my-4"
        >
          Mengalami kendala?
        </h1>
        <p class="my-2">
          Segera laporkan jika kamu mengalami kendala pada saat pendaftaran,
          pembayaran, atau terjadi masalah dengan akun langganan kamu. Kami akan
          segera menghubungi kamu untuk membantu menyelesaikan kendala yang kamu
          hadapi.
        </p>
        <a
          href="https://forms.gle/t1AbaxnjEtJr8NAPA"
          target="_blank"
          class="tn:pt-3"
        >
          <Button
            class="w-full tn:py-3 tn:mt-2"
            variant="primary"
            label="Ajukan Laporan"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button';
export default {
  components: {
    Button,
  },
};
</script>

<style></style>
