<template>
  <div class="container pt-20" id="package-variant">
    <p class="tn:text-xl md:text-2xl tn:text-center md:text-left font-bold">
      Varian Paket
    </p>
    <div>
      <PackageVariant
        v-for="(packet, id) in packageList"
        :key="id"
        :packet="packet"
        :is-show-terms="packet.isShowTerms"
        @toggleShow="toggleShow"
        @onClickChooseVariant="onClickChooseVariant"
      />
    </div>
  </div>
</template>

<script>
import { Tabs, Tab } from '~/components/atoms/tabs/';
import { packageList } from '../variant-list';
import PackageVariant from './PackageVariant.vue';
export default {
  components: {
    Tabs,
    Tab,
    PackageVariant,
  },
  data() {
    return {
      packageList,
    };
  },
  methods: {
    toggleShow(id) {
      this.packageList[id - 1].isShowTerms = !this.packageList[id - 1]
        .isShowTerms;
    },
    onClickChooseVariant(packet) {
      this.$router.push(`all-you-can-eat/order?packet_id=${packet.id}`);
    },
  },
};
</script>

<style></style>
