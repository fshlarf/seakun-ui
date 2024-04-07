<template>
  <div v-if="isShow">
    <UserMustLoginVue
      :isShow="isShowModalUserMustLogin"
      v-if="!isLoggedin"
      @handleClose="$emit('handleClose')"
    />
    <div
      v-else
      class="fixed top-0 bottom-0 left-0 right-0 bg-black/40 flex justify-center z-50"
      style="font-family: 'DM Sans', sans-serif"
    >
      <div class="mt-[126px] bg-white rounded-[20px] h-min relative">
        <img
          src="/images/ramadan/close.svg"
          alt="close"
          class="absolute w-7 h-7 -right-[8px] -top-[8px] cursor-pointer"
          @click="$emit('handleClose')"
        />
        <img
          src="/images/ramadan/gift.webp"
          alt="gift"
          class="w-[330px] h-[247px]"
        />
        <div class="text-center mb-12 mt-6 text-sm text-gray-secondary">
          <div class="flex justify-center items-end gap-3">
            <p class="">Jumlah amplop yang terkumpul:</p>
            <div
              class="bg-[#C8F3EA] rounded-full w-[22px] h-[22px] flex justify-center items-center"
            >
              {{ thrEnvelope.length }}
            </div>
          </div>
          <div v-if="thrEnvelope.length < 1">
            <p
              class="text-primary underline mt-5 cursor-pointer"
              @click="$emit('findThr')"
            >
              Ayo temukan THR nya sekarang juga!
            </p>
          </div>
          <div
            v-else
            class="mx-auto mt-3 flex flex-wrap max-w-[281px] justify-center gap-y-3 gap-x-4"
          >
            <div
              v-for="(envelope, id) in thrEnvelope"
              :key="id"
              class="relative w-max"
            >
              <img
                src="/images/ramadan/thr/icons/seakun.svg"
                alt="seakun"
                class="absolute left-1/2 -translate-x-1/2 bottom-1 w-3 h-3"
              />
              <div
                class="absolute -right-[3px] -top-[3px] flex justify-center items-center rounded-full w-[10px] h-[10px] font-bold text-[8px] bg-white text-primary"
                style="
                  font-family: nunito;
                  outline: outset;
                  outline-color: black;
                  outline-width: 0.17px;
                "
              >
                {{ envelope.key }}
              </div>
              <img
                src="/images/ramadan/thr/icons/envelope.svg"
                alt="envelope"
                class="w-5 h-[27px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserMustLoginVue from './UserMustLogin.vue';
export default {
  components: {
    UserMustLoginVue,
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      thrEnvelope: [],
      isLoggedin: false,
      isShowModalUserMustLogin: true,
    };
  },
  watch: {
    isShow: {
      handler(newVal, oldVal) {
        this.updateEnvelopeData();
      },
    },
  },
  mounted() {
    this.getData();
    this.updateEnvelopeData();
    const username = this.$cookies.get('username');
    if (username) {
      this.isLoggedin = true;
    } else {
      this.isLoggedin = false;
    }
  },
  methods: {
    async getData() {
      await this.$store.dispatch('initializeTHREnvelopeFromLocalStorage');
    },
    updateEnvelopeData() {
      const dataEnvelope = localStorage.getItem('thr_challenge');
      if (dataEnvelope) {
        const data = JSON.parse(dataEnvelope);
        this.thrEnvelope = this.sortTHREnvelope(data);
      }
    },
    sortTHREnvelope(arr) {
      if (arr.length > 0) {
        return arr.sort((a, b) => a.key - b.key);
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
