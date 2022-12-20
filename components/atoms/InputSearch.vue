<template>
  <div class="relative z-10 tn:m-0">
    <div class="relative z-10">
      <input
        id="search-input"
        v-model="inputValue"
        type="text"
        :placeholder="placeholder"
        :disabled="disabled"
        class="appearance-none tn:border md:border-2 border-[#A0A3BD] tn:rounded-lg w-full tn:py-3 tn:px-10 text-[#A0A3BD] focus:outline-none"
        @input="checkDataList"
        @keydown="onKeyPress"
        autocomplete="off"
      />
      <div class="icon-left tn:!pt-1 text-[#A0A3BD]">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div
        v-if="inputValue != ''"
        class="icon-right tn:!pt-1 text-gray-200"
        role="button"
        @click="onClickEraseSearch"
      >
        <i class="fa-solid fa-times fa-lg"></i>
      </div>
    </div>
    <div class="relative z-10">
      <div
        id="dropdown-search"
        class="bg-white w-full overflow-hidden text-[#A0A3BD] absolute top-0 left-0 z-50 tn:shadow-2xl tn:rounded"
      >
        <div
          role="button"
          @click="onClickItem(item)"
          v-for="(item, id) in activeList"
          :key="id"
          class="tn:px-4 tn:py-3 hover:bg-[#e9faf5]"
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
    disabled: {
      type: Boolean,
      default: false,
    },
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
  mounted() {
    this.checkDropDown();
  },
  methods: {
    checkDropDown() {
      document.addEventListener('click', function handleClickOutsideBox(event) {
        const box = document.getElementById('dropdown-search');

        if (!box.contains(event.target)) {
          box.style.display = 'none';
        }
      });
    },
    checkDataList(e) {
      this.activeList = [];
      if (e.target.value) {
        this.dataList.forEach((item) => {
          if (item.text.toLowerCase().includes(e.target.value.toLowerCase())) {
            this.activeList.push(item);
          }
        });
        const box = document.getElementById('dropdown-search');
        box.style.display = 'block';
      } else {
        this.activeIndex = null;
      }
    },
    onClickItem(item) {
      this.inputValue = item.text;
      this.$emit('onEnter', item.text);
      this.activeList = [];
      this.activeIndex = null;
    },
    onKeyPress(e) {
      if (e.keyCode == 38) {
        e.preventDefault();
        if (this.activeIndex - 1 >= 0) {
          this.activeIndex--;
          this.inputValue = this.activeList[this.activeIndex].text;
        }
      } else if (e.keyCode == 40) {
        e.preventDefault();
        if (this.activeIndex === null) {
          this.activeIndex = 0;
        } else if (this.activeIndex + 1 <= this.activeList.length - 1) {
          this.activeIndex++;
          this.inputValue = this.activeList[this.activeIndex].text;
        }
      } else if (e.keyCode == 13) {
        if (this.activeIndex === null) {
          this.$emit('onEnter', this.inputValue);
        } else {
          this.inputValue = this.activeList[this.activeIndex].text;
          this.$emit('onEnter', this.activeList[this.activeIndex].value);
        }
        this.activeList = [];
        this.activeIndex = null;
      }
    },
    onClickEraseSearch() {
      this.inputValue = '';
      document.getElementById('search-input').focus();
      this.$emit('onEraseInput');
    },
  },
};
</script>

<style scoped>
#dropdown-search {
  position: relative;
  z-index: 50;
}
.icon-left {
  position: absolute;
  left: 16px !important;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
}
.icon-right {
  position: absolute;
  right: 16px !important;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
}
.active {
  background-color: #e9faf5;
}
</style>
