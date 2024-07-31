<template>
  <div class="container-about-us">
    <div
      class="bg-[#E1FDF7] w-full h-[800px] rounded-[25px] p-10 mt-[167px] relative"
    >
      <img
        src="/images/sefoursary/sefoursary-mobile.svg"
        alt="sefoursary"
        class="logo--top absolute right-1/2 translate-x-1/2 z-20 h-[200px] xl:h-[231px]"
      />
      <main
        class="relative mt-[370px] w-full h-[200px] border-[10px] border-[#97D2C7] rounded-[200px] border-l-0 rounded-l-none"
      >
        <div class="top__level flex justify-between absolute -left-1 -right-2">
          <div
            v-for="(item, id) in gameLevel.slice(0, 8)"
            :key="id"
            ref="giftRef"
            class="relative cursor-pointer"
          >
            <img
              v-if="item.gift"
              alt="gift"
              :src="giftSrc(item.gift)"
              class="min-w-[210px] max-w-[210px] absolute bottom-[50%]"
              :style="firstDistance"
            />
            <img
              :src="checkLevels(item.level)"
              alt="game level"
              class="w-[60px] h-[60px]"
              @click="$emit('onClickLevel', item.level)"
            />
          </div>
        </div>
        <!-- TWS -->
        <img
          alt="gift"
          :src="giftSrc('tws')"
          class="min-w-[210px] max-w-[210px] absolute bottom-[35%] right-1"
        />
        <!-- level: 9 - 15 -->
        <div
          class="bottom__level flex justify-between flex-row-reverse absolute left-11 right-11 xl:left-[70px] xl:right-9"
        >
          <div
            v-for="(item, id) in gameLevel.slice(8, 15)"
            :key="id"
            ref="giftRef"
            class="relative"
          >
            <img
              v-if="item.gift"
              alt="gift"
              :src="giftSrc(item.gift)"
              class="min-w-[106px] max-w-[106px] absolute top-[55%]"
              :style="secondDistance"
            />
            <img
              :src="checkLevels(item.level)"
              alt="game level"
              class="w-[60px] h-[60px] cursor-pointer"
              @click="$emit('onClickLevel', item.level)"
            />
          </div>
        </div>
      </main>
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
  data() {
    return {
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
        },
        {
          level: 10,
          gift: 'smart-phone',
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
    };
  },
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

          if (window.innerWidth > 1439) {
            this.firstDistance = {
              right: `${distance - 95}px`,
            };
            this.secondDistance = {
              right: `${distance - 40}px`,
            };
          } else {
            this.firstDistance = {
              right: `${distance - 80}px`,
            };
            this.secondDistance = {
              right: `${distance - 35}px`,
            };
          }
        }
      });
    },
    checkLevels(val) {
      const myLevel = this.level;
      const openLevel = '/images/sefoursary/level-icon/open/';
      const levelLocked = '/images/sefoursary/level-icon/locked/';
      const completed = '/images/sefoursary/level-icon/completed/';

      if (myLevel == 15) {
        return `${completed}${val}.svg`;
      }

      if (myLevel > val) {
        return `${completed}${val}.svg`;
      } else if (myLevel == val) {
        return `${openLevel}${val}.svg`;
      } else {
        return `${levelLocked}${val}.svg`;
      }
    },
    giftSrc(name) {
      return `/images/sefoursary/game/gift/desktop/${name}.webp`;
    },
  },
};
</script>

<style lang="scss" scoped>
.logo--top {
  top: calc(0% - 103px);
}
@media screen and (min-width: 1440px) {
  .logo--top {
    top: calc(0% - 122px) !important;
  }
}

.top__level {
  top: 0 - 40px;
}
.bottom__level {
  bottom: 0 - 35px;
}
</style>
