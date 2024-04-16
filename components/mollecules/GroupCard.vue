<template>
  <div v-if="group" class="p-4 my-8 rounded-[8px] tn:shadow-lg w-[280px]">
    <div class="flex justify-between items-center">
      <img
        class="max-h-[2.2rem] max-w-[10rem]"
        :src="`/images/product/brand/${group.providerSlug}.png`"
        alt="#"
      />
      <div
        :class="`tn:px-2 tn:py-[1px]  ${
          group.accountGroup.some((el) => el.customerName === '-')
            ? 'bg-green-600'
            : 'full'
        } rounded-full`"
      >
        <p class="text-white text-[12px] font-bold">
          {{
            group.accountGroup.some((el) => el.customerName === '-')
              ? 'available'
              : 'full'
          }}
        </p>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <p class="my-2 font-bold">Group {{ group.group }}</p>
    </div>
    <div class="h-px w-full bg-gray-300 my-2"></div>
    <ol class="space-y-1">
      <li v-for="(member, id) in group.accountGroup" :key="id">
        <span v-if="member.customerName != '-'"
          >{{ id + 1 }}. {{ setName(member.customerName) }}</span
        >
        <span v-else class="text-secondary font-bold"
          >{{ id + 1 }}. Slot tersedia</span
        >
      </li>
    </ol>
    <div>
      <Button
        label="Pesan Sekarang"
        variant="primary"
        class="w-full mt-3 font-bold tn:py-3"
        :disabled="setDisabledBtn(group.accountGroup)"
        @click="$emit('click-order', group.providerSlug)"
      />
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';

export default {
  props: {
    group: {
      type: Object,
      default: () => {},
    },
    indexForEnvelope: {
      type: Number,
      default: 0,
    },
  },
  components: {
    Button,
  },
  methods: {
    setDisabledBtn(members) {
      return members.some((el) => el.customerName === '-') ? false : true;
    },
    setName(name) {
      let fixName = '';
      if (name.length > 30) {
        let a = name.slice(0, 29);
        let b = name.slice(name.length - 1, name.length);
        fixName = a + b;
      } else {
        fixName = name;
      }
      // const regex = /(?!^)[\s\S](?!$)/g;
      // let arrayName = name.split(' ');
      // let newArr = arrayName.map((e, i) => {
      //   if (i == arrayName.length - 1) {
      //     e = e.replace(regex, '*');
      //     return e;
      //   } else {
      //     return e;
      //   }
      // });
      // newArr = newArr.join(' ');
      return fixName;
    },
    setWidthImage(provider) {
      const theProvider = provider.toLowerCase();
      if (
        theProvider === 'canva' ||
        theProvider === 'disney-hotstar' ||
        theProvider === 'wattpad' ||
        theProvider === 'google-one' ||
        theProvider === 'prime-video'
      ) {
        return 'w-11';
      } else if (
        theProvider === 'apple-one' ||
        theProvider === 'apple-one-premier'
      ) {
        return 'w-20';
      } else {
        return 'w-28';
      }
    },
  },
};
</script>

<style scoped>
.full {
  background-color: #fb2525;
}
</style>
