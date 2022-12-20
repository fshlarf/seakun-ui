<template>
  <div class="relative z-20">
    <transition name="slide-up">
      <div
        v-if="show"
        id="dropdown-filter"
        class="item-list w-full bg-white tn:shadow-2xl tn:rounded"
      >
        <li
          v-for="dataItem in dataList"
          :key="dataItem.index"
          @click="$emit('onClikcItem', dataItem)"
          class="tn:px-4 tn:py-3 cursor-pointer text-[#A0A3BD] hover:bg-[#e9faf5]"
        >
          {{ dataItem.text }}
        </li>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'PopupDropdownFilter',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    dataList: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    this.checkDropDown();
  },
  methods: {
    checkDropDown() {
      let isOutside = false;
      document.addEventListener('click', (event) => {
        const box = document.getElementById('dropdown-filter');

        if (!box.contains(event.target)) {
          this.$emit('hideDropDown');
          isOutside = true;
        }
        console.log(isOutside);
      });
      if (isOutside === true) {
        this.$emit('hideDropDown');
        console.log('outside');
      }
      console.log('isOutside', isOutside);
    },
  },
};
</script>

<style lang="scss" scoped>
.item-list {
  position: absolute;
  top: 0;
  z-index: 20;
  overflow-y: auto;
  list-style: none; /* Remove list bullets */
  ul {
    padding-left: 24px;
  }
}

.slide-up-enter-active {
  transition: all 0.5s ease;
}
.slide-up-leave-active {
  transition: all 0.5s ease;
  transform: translateY(-20vh);
  opacity: 0;
}
.slide-up-enter,
.slide-fade-leave-to {
  transform: translateY(-20vh);
  opacity: 0;
}
</style>
