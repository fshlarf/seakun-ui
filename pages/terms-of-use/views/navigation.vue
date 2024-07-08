<template>
  <div
    class="md:min-w-[170px] lg:min-w-[273px] sticky top-[75px] h-max text-gray-secondary"
  >
    <nav>
      <section
        class="cursor-pointer"
        @click="$emit('onClickTermsAndCondition')"
      >
        <div
          class="px-1.5 py-3 lg:!p-3 xl:!p-4 whitespace-nowrap rounded-lg text-xs lg:text-base"
          :class="{
            'bg-[#E8F6F3] text-[#08A081] font-bold ': !isPrivacyPolicy,
          }"
        >
          <p>Syarat dan Ketentuan</p>
        </div>
      </section>
      <hr class="border-[#E8F6F3] mb-4" />
      <div class="space-y-4">
        <template v-for="(item, id) in data">
          <section
            v-if="id !== 0"
            class="cursor-pointer pl-4 text-[10px] lg:text-sm"
            @click="$emit('onClickTitle', item.title)"
          >
            <p>{{ item.title }}</p>
          </section>
        </template>
      </div>
      <hr class="border-[#E8F6F3] mt-3" />
      <section
        class="px-1.5 py-3 lg:!p-3 xl:!p-4 whitespace-nowrap rounded-lg text-xs lg:text-base cursor-pointer"
        @click="$emit('onClickPrivacyPolicy')"
        :class="{
          'bg-[#E8F6F3] text-[#08A081] font-bold': isPrivacyPolicy,
        }"
      >
        <p>Kebijakan Privasi</p>
      </section>
      <hr class="border-[#E8F6F3] mb-3" />
      <section
        @click="$router.push('/about-us')"
        class="pl-1.5 lg:!pl-3 xl:!pl-4 whitespace-nowrap rounded-lg text-xs lg:text-base cursor-pointer"
      >
        <p>About Us</p>
      </section>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      typeof: Array,
      default: () => [],
    },
    isPrivacyPolicy: {
      typeof: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
