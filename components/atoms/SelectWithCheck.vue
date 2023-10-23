<template>
  <div :class="[addClass && addClass.wrapper ? addClass.wrapper : '']">
    <div class="relative">
      <section
        @click="isOpen = !isOpen"
        class="flex gap-1 items-center text-xs text-green-primary cursor-pointer"
      >
        <label for="" :class="label.class">{{
          selectedOption ? selectedOption : label.name
        }}</label>

        <img
          src="/images/icons/atoms/chevron-green.svg"
          alt="all"
          class="transition-all ease-in-out duration-200"
          :class="{ '-rotate-180': isOpen }"
        />
      </section>
      <div
        v-if="isOpen"
        class="absolute top-[100%] mt-1 w-max right-0 bg-white p-3 rounded-xl space-y-3"
        :class="[addClass && addClass.option ? addClass.option : '']"
        style="box-shadow: 0px 1px 2px 0px rgba(97, 128, 168, 0.25)"
      >
        <div v-if="option">
          <section
            v-for="(opt, id) in option"
            :key="id"
            class="flex justify-between"
            @click="handleClickOption(opt.name), (isOpen = !isOpen)"
          >
            <p
              class="text-xs font-medium min-w-[158px]"
              :class="
                selectedOption == opt.name
                  ? 'text-green-primary'
                  : 'text-[#66738F]'
              "
            >
              {{ opt.name }}
            </p>
            <img
              src="/images/icons/atoms/checked-green.svg"
              alt="cheked"
              v-if="selectedOption == opt.name"
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
    label: {
      typeof: Object,
      default: () => {},
    },
    option: {
      typeof: Array,
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
      selectedOption: this.option[0].name,
    };
  },
  methods: {
    handleClickOption(opt) {
      this.selectedOption = opt;
    },
  },
};
</script>

<style lang="scss" scoped></style>
