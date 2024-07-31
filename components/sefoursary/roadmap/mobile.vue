<template>
  <div class="mt-[62px] mb-10 container-about-us">
    <div
      class="bg-[#C3F8ED] rounded-lg w-full pt-[166px] pb-[150px] px-3 relative"
    >
      <img
        src="/images/sefoursary/sefoursary-mobile.svg"
        alt="sefoursary"
        class="logo--mobile absolute right-1/2 translate-x-1/2 z-20 sm:h-[100px]"
      />
      <section
        class="w-full h-[200px] border-[#97D2C7] border-[15px] rounded-[35px] border__left--none relative"
      >
        <div class="absolute h-[15px] w-5 bg-[#C3F8ED] top-[100%]" />
        <!-- level 1 - 5 -->

        <div class="first-level flex justify-between absolute -left-1 -right-3">
          <div
            v-for="(item, id) in gameLevel.slice(0, 5)"
            :key="id"
            ref="giftRef"
            class="relative"
          >
            <img
              v-if="item.gift"
              alt="gift"
              :src="giftSrc(item.gift)"
              class="min-w-[83px] max-w-[83px] absolute bottom-[70%]"
              :style="firstDistance"
            />
            <!-- <div class="w-[83px] h-[40px]">
              </div> -->
            <img
              :src="checkLevels(item.level)"
              alt="game level"
              class="cursor-pointer w-9 h-9"
              @click="$emit('onClickLevel', item.level)"
            />
          </div>
        </div>
      </section>
      <section
        class="w-full h-[200px] border-[#97D2C7] border-[15px] rounded-[30px] border__right--none mt-[-15px] relative z-10"
      >
        <!-- level 6 - 10 -->
        <img
          src="/images/sefoursary/game/gift/smart-phone.webp"
          alt="smart-phone"
          class="min-w-[140px] max-w-[140px] absolute left-0 top-[20%]"
        />
        <div
          class="second-level flex flex-row-reverse justify-between absolute -left-3 right-1"
        >
          <div
            v-for="(item, id) in gameLevel.slice(5, 10)"
            :key="id"
            ref="giftRef"
            class="relative"
          >
            <img
              v-if="item.gift"
              alt="gift"
              :src="giftSrc(item.gift)"
              class="min-w-[83px] max-w-[83px] absolute bottom-[70%]"
              :style="secondDistance"
            />
            <img
              :src="checkLevels(item.level)"
              alt="game level"
              class="cursor-pointer w-9 h-9"
            />
          </div>
        </div>

        <!-- level 11 - 15 -->
        <div
          class="third__level flex justify-between absolute -left-2 -right-1"
        >
          <div
            v-for="(item, id) in gameLevel.slice(10, 15)"
            :key="id"
            ref="giftRef"
            class="relative"
          >
            <img
              v-if="item.gift"
              alt="gift"
              :src="giftSrc(item.gift)"
              class="min-w-[83px] max-w-[83px] absolute top-[70%]"
              :style="firstDistance"
            />
            <!-- <div class="w-[83px] h-[40px]">
              </div> -->
            <img
              :src="checkLevels(item.level)"
              alt="game level"
              @click="$emit('onClickLevel', item.level)"
              class="cursor-pointer w-9 h-9"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1,
    },
  },
  data: () => ({
    firstDistance: {},
    secondDistance: {},
    gameLevel: [
      {
        level: 1,
      },
      {
        level: 2,
      },
      {
        level: 3,
        gift: 'spotify',
      },
      {
        level: 4,
      },
      {
        level: 5,
        gift: 'spotify',
      },
      {
        level: 6,
      },
      {
        level: 7,
        gift: 'youtube',
      },
      {
        level: 8,
      },
      {
        level: 9,
        gift: 'tws',
      },
      {
        level: 10,
      },
      {
        level: 11,
      },
      {
        level: 12,
      },
      {
        level: 13,
        gift: 'smart-tv',
      },
      {
        level: 14,
      },
      {
        level: 15,
        gift: 'tab',
      },
    ],
  }),
  mounted() {
    window.addEventListener('resize', this.getDistance);
    this.getDistance();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getDistance);
  },
  methods: {
    getDistance() {
      this.$nextTick(() => {
        const divs = this.$refs.giftRef;

        if (divs && divs.length > 1) {
          const div1 = divs[0];
          const div2 = divs[1];

          const div1Rect = div1.getBoundingClientRect();
          const div2Rect = div2.getBoundingClientRect();

          const distance = div2Rect.left - div1Rect.right;
          this.firstDistance = {
            right: `${distance / 2.5}px`,
          };
          this.secondDistance = {
            left: `${distance / 2.5}px`,
          };
        }
      });
    },
    checkLevels(val) {
      const myLevel = this.level;
      const openLevel = '/images/sefoursary/level-icon/open/';
      const levelLocked = '/images/sefoursary/level-icon/locked/';
      const completed = '/images/sefoursary/level-icon/completed/';

      if (myLevel > val) {
        return `${completed}${val}.svg`;
      } else if (myLevel == val) {
        return `${openLevel}${val}.svg`;
      } else {
        return `${levelLocked}${val}.svg`;
      }
    },
    giftSrc(name) {
      return `/images/sefoursary/game/gift/${name}.webp`;
    },
  },
};
</script>

<style lang="scss" scoped>
.logo--mobile {
  bottom: calc(100% - 35px);
}
.border__left--none {
  border-left: none !important;
  border-bottom-left-radius: 0%;
  border-top-left-radius: 0%;
}
.border__right--none {
  border-top: none !important;
  border-right: none !important;
  border-bottom-right-radius: 0%;
  border-top-right-radius: 0%;
}

.first-level {
  top: 0 - 26px;
}

.second-level {
  bottom: calc(100% - 24px);
}
.third__level {
  top: calc(100% - 12px);
}
</style>
