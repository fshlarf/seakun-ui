<template>
  <div class="relative z-10">
    <div class="relative z-10">
      <input
        id="search-input"
        v-model="inputValue"
        type="text"
        :placeholder="placeholder"
        class="appearance-none border-2 rounded-xl w-full tn:py-3 tn:px-9 text-[#A0A3BD] leading-tight focus:outline-none"
        @input="checkDataList"
        @keydown="onKeyPress"
      />
      <div class="icon-left tn:!pt-1 text-[#A0A3BD]">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div
        class="icon-right tn:!pt-1 text-[#A0A3BD]"
        role="button"
        @click="onClickEraseSearch"
      >
        <i class="fa-solid fa-lg fa-times-circle"></i>
      </div>
    </div>
    <div class="relative z-10">
      <div
        v-if="activeList.length > 0"
        class="bg-white w-full rounded-xl overflow-hidden border-2 text-[#A0A3BD] absolute top-0 left-0 z-50"
      >
        <div
          role="button"
          @click="onClickItem(item)"
          v-for="(item, id) in activeList"
          :key="id"
          class="tn:px-4 tn:py-2 hover:bg-[#e9faf5]"
          :class="{ active: activeIndex === id }"
        >
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    dataList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeList: [],
      inputValue: '',
      activeIndex: null,
    };
  },
  methods: {
    checkDataList(e) {
      this.activeList = [];
      if (e.target.value) {
        this.dataList.forEach((item) => {
          if (item.text.toLowerCase().includes(e.target.value.toLowerCase())) {
            this.activeList.push(item);
          }
        });
      } else {
        this.activeIndex = null;
      }
    },
    onClickItem(item) {
      this.inputValue = item.text;
      this.$emit('onClickItem', item);
      this.activeList = [];
      this.activeIndex = null;
    },
    // onUpKeyPress() {
    //   if (this.activeIndex - 1 >= 0) {
    //     this.activeIndex--;
    //     this.inputValue = this.activeList[this.activeIndex].text;
    //   }
    // },
    // onDownKeyPress() {
    //   if (this.activeIndex + 1 <= this.activeList.length) {
    //     this.activeIndex++;
    //     this.inputValue = this.activeList[this.activeIndex].text;
    //   }
    // },
    onKeyPress(e) {
      console.log(e);
      if (e.keyCode == 38) {
        if (this.activeIndex - 1 >= 0) {
          this.activeIndex--;
          this.inputValue = this.activeList[this.activeIndex].text;
        }
      } else if (e.keyCode == 40) {
        if (this.activeIndex === null) {
          this.activeIndex = 0;
        } else if (this.activeIndex + 1 <= this.activeList.length - 1) {
          this.activeIndex++;
          this.inputValue = this.activeList[this.activeIndex].text;
        }
      } else if (e.keyCode == 13) {
        this.inputValue = this.activeList[this.activeIndex].text;
        this.$emit('onEnter', this.activeList[this.activeIndex].value);
        this.activeList = [];
        this.activeIndex = null;
      }
    },
    onClickEraseSearch() {
      this.inputValue = '';
      document.getElementById('search-input').focus();
    },
  },
};
</script>

<style scoped>
.icon-left {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
}
.icon-right {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
}
.active {
  background-color: #e9faf5;
}
</style>
