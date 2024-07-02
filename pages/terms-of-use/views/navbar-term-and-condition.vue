<template>
  <div
    id="navbar"
    class="!bg-[#ffffff] z-40 w-full fixed top-0 py-3"
    :class="className"
  >
    <div
      :class="{ hidden: !open }"
      class="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black/40"
    ></div>
    <div :class="classContainer">
      <div class="static z-0 w-full flex justify-between items-center">
        <nuxt-link to="/">
          <img
            class="h-[30px] md:h-10"
            src="/images/navbar/new_brand_seakun.svg"
            alt="brand seakun"
          />
        </nuxt-link>
        <div class="items-center relative md:hidden">
          <div
            :class="{ hidden: !open }"
            class="bg-white absolute top-0 right-0 z-50 rounded-[10px] text-xs text-[#417465] font-medium text-right p-5 w-max space-y-5"
          >
            <div class="flex justify-end" @click="open = !open">
              <svg
                v-if="open"
                fill="#08A081"
                viewBox="0 0 20 20"
                class="w-6 h-6 primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <p @click="$emit('onClickTermsAndCondition'), (open = false)">
              SYARAT DAN KETENTUAN
            </p>
            <p @click="$emit('onClickPrivacyPolicy'), (open = false)">
              KEBIJAKAN PRIVASI
            </p>
            <p @click="$router.push('/about-us')">ABOUT US</p>
          </div>
          <button
            class="lg:hidden rounded-lg focus:outline-none float-right"
            @click="open = !open"
          >
            <svg
              v-if="open"
              fill="#08A081"
              viewBox="0 0 20 20"
              class="w-6 h-6 primary"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div class="pt-1 pr-1" v-else>
              <img
                class="w-[18px] md:w-[20px]"
                src="/images/icons/atoms/hamburger.svg"
                alt="menu"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/atoms/Logo.vue';
export default {
  name: 'navbar-blank',
  data() {
    return {
      open: false,
    };
  },
  props: {
    className: {
      typeof: String,
      default: 'bg-third tn:shadow',
    },
    classContainer: {
      typeof: String,
      default: 'container',
    },
  },
  components: {
    Logo,
  },
};
</script>

<style scoped>
#navbar {
  position: fixed;
  top: 0px;
}
@media (min-width: 400px) {
  #navbar {
    background-color: #ffffff !important;
  }
}
@media (max-width: 800px) {
  nav {
    text-transform: uppercase;
  }
}
</style>
