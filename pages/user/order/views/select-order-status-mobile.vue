<template>
  <div :class="[addClass && addClass.wrapper ? addClass.wrapper : '']">
    <div class="relative">
      <section
        @click="toggleOption"
        class="flex gap-1 items-center text-xs text-green-primary cursor-pointer"
      >
        <label for="">{{ selectedOption }}</label>

        <img
          src="/images/icons/atoms/chevron-green.svg"
          alt="all"
          class="transition-all ease-in-out duration-200"
          :class="{ '-rotate-180': isOpen }"
        />
      </section>
      <div
        v-if="isOpen"
        class="absolute top-[100%] mt-1 w-max right-0 bg-white p-3 rounded-xl"
        :class="[addClass && addClass.option ? addClass.option : '']"
        style="box-shadow: 0px 1px 2px 0px rgba(97, 128, 168, 0.25)"
      >
        <div v-if="option.length > 0" class="space-y-3">
          <section class="flex justify-between" @click="handleClickOption()">
            <p
              class="text-xs font-medium min-w-[158px]"
              :class="activeTab == '' ? 'text-green-primary' : 'text-[#66738F]'"
            >
              Semua
            </p>
            <img
              src="/images/icons/atoms/checked-green.svg"
              alt="cheked"
              v-if="activeTab == ''"
            />
          </section>
          <section
            v-for="(opt, id) in option"
            :key="id"
            class="flex justify-between"
            @click="handleClickOption(opt)"
          >
            <p
              class="text-xs font-medium min-w-[158px]"
              :class="
                activeTab == opt.uid ? 'text-green-primary' : 'text-[#66738F]'
              "
            >
              {{ opt.name }}
            </p>
            <img
              src="/images/icons/atoms/checked-green.svg"
              alt="cheked"
              v-if="activeTab == opt.uid"
            />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeTab: {
      type: String,
      default: '',
    },
    label: {
      typeof: Object,
      default: () => {},
    },
    option: {
      type: Array,
      default: () => [],
    },
    addClass: {
      typeof: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isOpen: false,
      selectedOption: 'Semua',
    };
  },
  methods: {
    handleClickOption(opt) {
      this.selectedOption = opt.name ? opt.name : 'Semua';
      this.isOpen = !this.isOpen;
      this.$emit('onSelectOrderStatus', opt.uid || '');
    },
    toggleOption() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped></style>
