<template>
  <div class="fixed right-0 left-0 top-0 bottom-0 bg-black/50 z-50">
    <div
      class="absolute top-[80px] lg:top-[120px] bg-white p-3 lg:p-5 w-[95%] max-w-[500px] left-1/2 -translate-x-1/2 rounded-[10px] z-40"
    >
      <div class="space-y-4 max-h-[600px] overflow-y-auto hide-scrollbar">
        <section
          v-for="(country, id) in countryList"
          :key="id"
          class="flex justify-between items-center cursor-pointer"
          @click="$emit('clickOption', country)"
        >
          <div class="flex items-center gap-3">
            <img
              class="w-[26px] h-5"
              :src="`/images/flags/${country.slug}.png`"
              :alt="country.name"
            />
            <p class="text-main hover:opacity-70">
              {{ `${country.name} (${country.dialCode})` }}
            </p>
          </div>
          <img
            :src="[
              activeOption.slug == country.slug
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
import { internationalPhoneNumbers } from '~/constants/code-phone';

export default {
  props: {
    selected: {
      typeof: Object,
      default: () => {},
    },
    countryList: {
      typeof: Array,
      default: () => [],
    },
  },
  data() {
    return {
      internationalPhoneNumbers,
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
