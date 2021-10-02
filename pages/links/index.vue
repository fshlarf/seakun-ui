<template>
  <div class="pt-8 h-screen" style="background-color: #f4f9f8">
    <div class="max-w-sm mx-auto px-8">
      <div class="mt-4 mb-10 flex justify-center space-x-4 items-center">
        <img class="w-8 h-8 rounded-full" src="images/seakunid.png" alt="" />
        <p class="text-primary font-bold text-xl">Seakun.id</p>
      </div>
      <div class="grid grid-cols-1 gap-6">
        <Button
          @click="redirectToSeakun('home')"
          class="py-3"
          label="Website Seakun"
          variant="primary"
        />
        <Button
          @click="redirectToSeakun('price-scheme')"
          class="py-3"
          label="Skema Harga"
          variant="primary"
        />
        <Button
          @click="redirectToSeakun('order-flow')"
          class="py-3"
          label="Cara Berlangganan"
          variant="primary"
        />
        <Button
          @click="redirectToSeakun('product')"
          class="py-3"
          label="Mulai Berlangganan"
          variant="primary"
        />
        <Button
          @click="redirectToSeakun('faq')"
          class="py-3"
          label="FAQ"
          variant="primary"
        />
        <Button
          class="py-3"
          label="Hubungi WA"
          variant="primary"
          @click="goToWhatsapp"
        />
      </div>
    </div>
    <div class="max-w-sm mx-auto mt-2">
      <div class="flex justify-between items-center">
        <img class="w-[66px]" src="images/icons/links/leafs-left.svg" alt="#" />
        <div class="my-8 flex justify-center items-center space-x-3">
          <a href="https://instagram.com/official.seakun"
            ><img
              class=""
              src="images/icons/links/Instagram.png"
              alt="Instagram"
          /></a>
          <a href="https://twitter.com/seakun_id"
            ><img class="" src="images/icons/links/Twitter.png" alt="Twitter"
          /></a>
          <a href="https://www.linkedin.com/company/seakun-id/"
            ><img class="" src="images/icons/links/Linkedin.png" alt="LinkedIn"
          /></a>
        </div>
        <img
          class="w-[80px]"
          src="images/icons/links/leafs-right.svg"
          alt="#"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
export default {
  components: {
    Button,
  },
  methods: {
    goToWhatsapp() {
      window.location.href =
        'https://api.whatsapp.com/send?phone=6282124852232';
    },
    redirectToSeakun(target) {
      if (target === 'home') {
        this.$router.push('/');
      } else if (target === 'price-scheme') {
        this.$router.push('/info/scheme-of-price');
      } else if (target === 'order-flow') {
        this.$router.push('/#orderFlow');
      } else if (target === 'product') {
        this.$router.push('/#provider');
      } else if (target === 'faq') {
        this.$router.push('/#qna');
      }
    },
  },
};
</script>

<style></style>
