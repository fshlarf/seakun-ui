<template>
  <div v-if="group" class="p-4 my-8 rounded-2xl shadow w-72">
    <div class="flex justify-between items-center">
      <img :class="setWidthImage(group.name)" :src="`${group.brand}`" alt="#" />
      <div
        :class="`px-2  ${
          group.members.some((el) => el === '') ? 'bg-green-600' : 'full'
        } rounded-full`"
      >
        <p class="text-white text-sm font-bold">
          {{ group.members.some((el) => el === '') ? 'available' : 'full' }}
        </p>
      </div>
    </div>
    <p class="my-2 font-bold">Group {{ group.groupNumber }}</p>
    <div class="h-px w-full bg-primary my-2"></div>
    <ol class="space-y-1">
      <li v-for="(member, id) in group.members" :key="id">
        <span v-if="member">{{ id + 1 }}. {{ setName(member) }}</span>
        <span v-else class="text-secondary font-bold"
          >{{ id + 1 }}. Slot tersedia</span
        >
      </li>
    </ol>
    <div>
      <Button
        label="Pesan Sekarang"
        variant="primary"
        class="w-full mt-4 font-bold"
        :disabled="setDisabledBtn(group.members)"
        @click="$emit('click-order', group.name)"
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
  },
  components: {
    Button,
  },
  methods: {
    setDisabledBtn(members) {
      return members.some((el) => el === '') ? false : true;
    },
    setName(name) {
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
      return name;
    },
    setWidthImage(provider) {
      const theProvider = provider.toLowerCase();
      if (
        theProvider === 'canva' ||
        theProvider === 'disney-hotstar' ||
        theProvider === 'wattpad' ||
        theProvider === 'google-one'
      ) {
        return 'w-11';
      } else if (theProvider === 'apple-one') {
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
