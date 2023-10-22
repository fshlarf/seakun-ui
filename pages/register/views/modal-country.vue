<template>
  <div class="fixed right-0 left-0 top-0 bottom-0 bg-black/50 z-50">
    <div
      class="absolute top-[11px] lg:top-[120px] bg-white lg:p-5 w-full max-w-[500px] left-1/2 -translate-x-1/2 rounded-[10px] z-40"
    >
      <div class="space-y-4">
        <section
          v-for="(country, id) in dataCountry"
          :key="id"
          class="flex justify-between items-center cursor-pointer"
          @click="$emit('clickOption', country.value)"
        >
          <div class="flex items-center gap-3">
            <img
              :src="`/images/flag/${country.image}`"
              :alt="country.value.name"
            />
            <p class="text-main hover:opacity-70">
              {{ `${country.value.name} (${country.value.code})` }}
            </p>
          </div>
          <img
            :src="[
              activeOption == country.value.name
                ? '/images/icons/atoms/radio-button-active.svg'
                : '/images/icons/atoms/radio-button.svg',
            ]"
            alt=""
          />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      typeof: String,
      default: '',
    },
  },
  data() {
    return {
      dataCountry: [
        {
          value: {
            name: 'Indonesia',
            code: '+62',
          },
          image: 'indonesia.svg',
        },
        {
          value: {
            name: 'Iraq',
            code: '+964',
          },
          image: 'iraq.svg',
        },
        {
          value: {
            name: 'Iran',
            code: '+98',
          },
          image: 'iran.svg',
        },
        {
          value: {
            name: 'Ireland',
            code: '+353',
          },
          image: 'ireland.svg',
        },
        {
          value: {
            name: 'Iceland',
            code: '+354',
          },
          image: 'iceland.svg',
        },
        {
          value: {
            name: 'Israel',
            code: '+972',
          },
          image: 'israel.svg',
        },
        {
          value: {
            name: 'Italy',
            code: '+39',
          },
          image: 'italy.svg',
        },
        {
          value: {
            name: 'Jamaica',
            code: '+876',
          },
          image: 'jamaica.svg',
        },
        {
          value: {
            name: 'Japan',
            code: '+81',
          },
          image: 'japan.svg',
        },
        {
          value: {
            name: 'Germany',
            code: '+49',
          },
          image: 'germany.svg',
        },
        {
          value: {
            name: 'Jordan',
            code: '+962',
          },
          image: 'jordan.svg',
        },
        {
          value: {
            name: 'Jordan',
            code: '+962',
          },
          image: 'jordan.svg',
        },
        {
          value: {
            name: 'Cambodia',
            code: '+855',
          },
          image: 'cambodia.svg',
        },
        {
          value: {
            name: 'Cameroon',
            code: '+237',
          },
          image: 'cameroon.svg',
        },
      ],
      activeOption: this.selected,
    };
  },
};
</script>

<style lang="scss" scoped></style>
