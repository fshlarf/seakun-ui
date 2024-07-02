<template>
  <div class="!bg-white">
    <NavbatTermsAndCondition
      @onClickTermsAndCondition="isShowPripacyPolicy = false"
      @onClickPrivacyPolicy="isShowPripacyPolicy = true"
    />

    <div class="container mt-16">
      <div class="flex items-center gap-2 text-[#6D7588] text-sm pt-7">
        <img src="/images/icons/atoms/home-bold.svg" alt="home" />
        <!-- arrow svg -->
        <svg
          width="5"
          height="8"
          viewBox="0 0 5 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.0640001 7.082L3.494 3.862L0.0640001 0.627999H1.562L4.978 3.862L1.562 7.082H0.0640001Z"
            fill="#6D7588"
          />
        </svg>
        <!-- arrow svg -->

        <p>
          {{
            isShowPripacyPolicy ? 'Kebijakan Privasi' : 'Syarat dan Ketentuan'
          }}
        </p>
      </div>
      <!-- sticky top-[54px] -->
      <div class="flex flex-col md:flex-row gap-7 mt-4 md:mt-6 lg:mt-8">
        <Navigation
          class="hidden md:block"
          :data="termsAndCondition"
          :isPrivacyPolicy="isShowPripacyPolicy"
          @onClickTermsAndCondition="isShowPripacyPolicy = false"
          @onClickPrivacyPolicy="isShowPripacyPolicy = true"
          @onClickTitle="handleScroll"
        />
        <template v-if="!isShowPripacyPolicy">
          <TermsAndCondition :data="termsAndCondition"
        /></template>
        <template v-else>
          <PrivacyPolicy :data="privacyPolicy" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import NavbatTermsAndCondition from './views/navbar-term-and-condition';
import Navigation from './views/navigation';
import TermsAndCondition from './views/terms-and-condition';
import PrivacyPolicy from './views/privacy-policy';
import waitForElement from '~/helpers/utility.js';

import {
  termsAndCondition,
  privacyPolicy,
} from '../../constants/terms-and-condiition';
export default {
  components: {
    NavbatTermsAndCondition,
    Navigation,
    TermsAndCondition,
    PrivacyPolicy,
  },
  data() {
    return {
      termsAndCondition,
      privacyPolicy,
      isShowPripacyPolicy: false,
    };
  },
  methods: {
    waitForElement,
    toKebabCase(text) {
      if (text) {
        return text.toLowerCase().replace(/\s+/g, '-');
      }
    },
    handleScroll(el) {
      const element = this.toKebabCase(el);
      if (this.isShowPripacyPolicy) {
        this.isShowPripacyPolicy = false;
        setTimeout(() => {
          this.scrollIntoView(element);
        }, 500);
      } else this.scrollIntoView(element);
    },
    scrollIntoView(elementId) {
      console.log(elementId);
      const offset = 80;
      let element = document.getElementById(elementId);
      const elementPosition = element.getBoundingClientRect().top;
      let offsetHeight = offset;
      if (process.client && window.innerWidth <= 768) {
        offsetHeight += 50;
      }
      const offsetPosition =
        elementPosition + window.pageYOffset - offsetHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
