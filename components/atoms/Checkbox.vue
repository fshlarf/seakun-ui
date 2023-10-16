<template>
  <div @click="(isCheked = !isCheked), $emit('getval', isCheked)">
    <CheckedBox class="cursor-pointer" :class="addClass" v-if="isCheked" />
    <UncheckBox class="cursor-pointer" :class="addClass" v-else />
  </div>
</template>

<script>
import CheckedBox from '~/assets/images/icon/checked-box.svg?inline';
import UncheckBox from '~/assets/images/icon/uncheck-box.svg?inline';
export default {
  components: {
    CheckedBox,
    UncheckBox,
  },
  props: {
    addClass: {
      typeof: String,
      default: '',
    },
  },
  data() {
    return {
      isCheked: false,
    };
  },
  methods: {
    handleCheckbox(e) {
      this.$emit('getval', isCheked);
    },
  },
};
</script>
