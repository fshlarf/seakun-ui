<template>
  <div v-show="!isAlreadyExixt">
    <img
      :src="imgSrc"
      class="cursor-pointer"
      alt="thr envelope"
      @click="saveEnvelopeToLocal"
    />
  </div>
</template>

<script>
export default {
  computed: {
    thrChallengeData() {
      return this.$store.state.thrChallengeData;
    },
    isAlreadyExixt() {
      return this.checkExistingEnvelope();
    },
    imgSrc() {
      if (process.client && window.innerWidth <= 1023) {
        return `/images/ramadan/thr/mobile/thr-${this.envelopeKey}.svg`;
      } else return `/images/ramadan/thr/thr-${this.envelopeKey}.svg`;
    },
  },
  props: {
    envelopeKey: {
      typeof: Number,
      default: 0,
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      await this.$store.dispatch('initializeTHREnvelopeFromLocalStorage');
    },
    showPopup() {
      this.$store.commit(
        'setShowPopupTHRChallenge',
        !this.$store.isShowPopupTHRChallenge
      );
    },
    saveEnvelopeToLocal() {
      this.showPopup();
      const data = {
        key: this.envelopeKey,
        name: 'thr seakun',
      };
      const saveEnvelope = [...this.thrChallengeData];

      if (!this.checkExistingEnvelope()) {
        saveEnvelope.push(data);
        this.$store.commit('setThrChallengeData', saveEnvelope);
        localStorage.setItem('thr_challenge', JSON.stringify(saveEnvelope));
      }
    },
    checkExistingEnvelope() {
      const envelope = this.thrChallengeData;
      if (envelope && envelope.length > 0) {
        return envelope.some((item) => item.key === this.envelopeKey);
      } else {
        return false;
      }
    },
  },
};
</script>
