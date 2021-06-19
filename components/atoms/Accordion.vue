<template>
  <div>
    <div class="w-full my-2 shadow tn:rounded-lg md:rounded-2xl">
      <div>
        <div
          @click="toggleShow(answer.id)"
          class="rounded-2xl bg-white tn:px-4 md:px-10 py-6 cursor-pointer flex justify-between items-center content-center"
          :class="{ 'rounded-none': isShowAnswer, accordion: isShowAnswer }"
          id="headingOne"
        >
          <div>
            <h1 class="tn:text-md md:text-xl font-bold">
              {{ title }}
            </h1>
          </div>
          <div v-if="!isShowAnswer" class="w-4 h-4">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 330 330"
              style="enable-background: new 0 0 330 330"
              xml:space="preserve"
            >
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	                c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	                s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              />
            </svg>
          </div>
          <div v-if="isShowAnswer" class="w-4 h-4">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 330 330"
              style="enable-background: new 0 0 330 330"
              xml:space="preserve"
            >
              <path
                id="XMLID_224_"
                d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
                  l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
                  C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
              />
            </svg>
          </div>
        </div>
        <div
          v-show="isShowAnswer"
          class="px-10 py-6 bg-primary text-white"
          :class="{ accordion: isShowAnswer }"
        >
          <p>{{ answer.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShowAnswer: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    answer: {
      type: Object,
      default: {},
    },
  },
  methods: {
    toggleShow(id) {
      this.$emit('toggleShow', id);
    },
  },
};
</script>

<style lang="scss" scoped>
.accordion {
  border: 1px solid #86d0c1;
}
</style>
