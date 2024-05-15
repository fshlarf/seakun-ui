<template>
  <Modal :is-show="showModal" @onClose="onClose" size="xl:w-1/3">
    <div class="bg-white p-[10px]">
      <p>{{ donaturDetail.name }}</p>
      <!-- <div v-if="donaturDetail.socialMedia && donaturDetail.accountName">
        <a
          v-if="!donaturDetail.accountName.includes('*')"
          :href="`${
            donaturDetail.socialMedia === 'twitter'
              ? 'https://twitter.com/'
              : 'https://instagram.com/'
          }${donaturDetail.accountName}`"
          target="_blank"
          class="flex space-x-1 items-center text-primary"
        >
          <i :class="`fa-brands fa-${donaturDetail.socialMedia}`"></i>
          <p class="text-[14px]">{{ donaturDetail.accountName }}</p>
        </a>
        <div v-else class="flex space-x-1 items-center text-primary">
          <i :class="`fa-brands fa-${donaturDetail.socialMedia}`"></i>
          <p class="text-[14px]">{{ donaturDetail.accountName }}</p>
        </div>
      </div>
      <div v-else class="flex space-x-2 items-center text-[#D9D9D9]">
        <img
          src="/images/icons/atoms/link-disabled.svg"
          alt="no social media"
        />
        <p class="text-[14px]">tidak tercantum</p>
      </div> -->
      <p class="text-[20px] font-bold tn:mt-2 text-secondary">
        {{ currencyFormat(donaturDetail.nominal) }}
      </p>
      <div class="tn:mt-5">
        <img src="/images/icons/atoms/quote.svg" alt="quote icon" />
        <p class="text-[14px] leading-[20px] tn:mt-2">
          {{ donaturDetail.message }}
        </p>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from '~/components/atoms/Modal.vue';
import { currencyFormat } from '../../../helpers';
export default {
  components: {
    Modal,
  },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    donaturDetail: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    onClose() {
      this.$emit('onClose');
    },
    currencyFormat,
  },
};
</script>

<style></style>
