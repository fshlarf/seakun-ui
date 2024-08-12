<template>
  <div
    class="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-50 flex justify-center"
  >
    <div
      v-if="modalType == 'star'"
      class="seafoursary__level__cleared w-[328px] sm:w-[520px] h-[241px] sm:h-[382px] bg-cover mt-[143px] relative"
    >
      <div
        class="absolute flex justify-center gap-10 items-end bottom-0 right-1/2 translate-x-1/2"
      >
        <nuxt-link to="/sefoursary/game">
          <section
            class="font-bold text-[10px] sm:text-base text-[#66738F] flex flex-col items-center"
          >
            <p>Menu</p>
            <img
              src="/images/sefoursary/icons/hamburger.svg"
              alt="menu"
              class="w-[31px] sm:w-[50px] h-[33px] sm:h-[53px] mt-1 sm:mt-3"
            />
          </section>
        </nuxt-link>

        <section
          v-if="level < 15"
          class="font-bold text-[10px] sm:text-base text-[#66738F] flex flex-col items-center cursor-pointer"
          @click="$emit('onNext')"
        >
          <p>Next Level</p>
          <img
            src="/images/sefoursary/icons/next-level.svg"
            alt="menu"
            class="w-[31px] sm:w-[50px] h-[33px] sm:h-[53px] mt-1 sm:mt-3"
          />
        </section>
      </div>
    </div>
    <div
      v-if="modalType == 'gift'"
      class="seafoursary__awesome w-[328px] sm:w-[520px] h-[241px] sm:h-[382px] bg-cover mt-[143px] relative flex justify-center items-center"
    >
      <div>
        <p class="text-sm sm:text-base text-gray-secondary font-bold">
          Click Misteri Box!
        </p>
        <img
          src="/images/sefoursary/game/box.webp"
          alt="mystery box"
          class="w-20 sm:w-[100px] mt-6 mx-auto cursor-pointer"
          @click="$emit('clickMysterybox')"
        />
      </div>
      <div
        class="absolute flex justify-center gap-10 items-end bottom-0 right-1/2 translate-x-1/2"
      >
        <nuxt-link to="/sefoursary/game">
          <section
            class="font-bold text-[10px] sm:text-base text-[#66738F] flex flex-col items-center"
          >
            <p>Menu</p>
            <img
              src="/images/sefoursary/icons/hamburger.svg"
              alt="menu"
              class="w-[31px] sm:w-[50px] h-[33px] sm:h-[53px] mt-1 sm:mt-3"
            />
          </section>
        </nuxt-link>

        <!-- <section
          v-if="level < 15"
          class="font-bold text-[10px] sm:text-base text-[#66738F] flex flex-col items-center cursor-pointer"
          @click="$emit('onNext')"
        >
          <p>Next Level</p>
          <img
            src="/images/sefoursary/icons/next-level.svg"
            alt="menu"
            class="w-[31px] sm:w-[50px] h-[33px] sm:h-[53px] mt-1 sm:mt-3"
          />
        </section> -->
      </div>
    </div>
    <div
      v-if="modalType == 'lottery-numbers'"
      class="seafoursary__awesome w-[358px] sm:w-[520px] h-[261px] sm:h-[382px] bg-cover mt-[143px] relative flex justify-center items-center"
    >
      <section v-if="isLottery">
        <div>
          <p
            class="font--nunito text-xs sm:text-base text-gray-secondary font-bold text-center max-w-[290px] sm:max-w-[398px] tracking-[0%]"
          >
            Selamat! Kamu berkesempatan untuk memenangkan
            {{ getDeviceType(uniqueCode) }} dengan nomor undian berikut.
          </p>
          <div
            class="sm:text-[28px] mt-2 sm:mt-7 bg-[#F1EFEF] w-max text-[#D23157] font-black h-[41px] sm:h-[60px] flex gap-1 sm:gap-2 justify-center items-center px-3 sm:px-4 rounded-[6px] mx-auto"
          >
            <p>{{ uniqueCode }}</p>
            <img
              src="/images/sefoursary/icons/copy.svg"
              alt="copy"
              class="sm:w-5 cursor-pointer"
              @click="clickCopyHandler(uniqueCode)"
            />
          </div>
          <p
            class="font--nunito text-[11px] sm:text-sm text-gray-secondary font-bold text-center mx-auto max-w-[250px] sm:max-w-[398px] tracking-[0%] mt-2 sm:mt-4 sm:mb-2"
          >
            Screenshot bukti undian dan ikuti pengundian di IG @seakun.id pada
            tanggal 9 September 2024.
          </p>
        </div>
        <div
          class="absolute flex justify-center gap-10 items-end bottom-0 right-1/2 translate-x-1/2"
        >
          <nuxt-link to="/sefoursary/game">
            <section
              class="font-bold text-[10px] sm:text-base text-[#66738F] flex flex-col items-center"
            >
              <p>Menu</p>
              <img
                src="/images/sefoursary/icons/hamburger.svg"
                alt="menu"
                class="w-[31px] sm:w-[50px] h-[33px] sm:h-[53px] mt-1 sm:mt-2"
              />
            </section>
          </nuxt-link>

          <section
            v-if="level < 15"
            class="font-bold text-[10px] sm:text-base text-[#66738F] flex flex-col items-center cursor-pointer"
            @click="$emit('onNext')"
          >
            <p>Next Level</p>
            <img
              src="/images/sefoursary/icons/next-level.svg"
              alt="menu"
              class="w-[31px] sm:w-[50px] h-[33px] sm:h-[53px] mt-1 sm:mt-2"
            />
          </section>
        </div>
      </section>
      <section v-else>
        <div>
          <p
            class="text-sm sm:text-base text-gray-secondary font-bold text-center max-w-[243px] sm:max-w-[304px]"
          >
            Screenshot nomor unik hadiah ini dan laporkan ke admin untuk klaim.
          </p>
          <div
            class="sm:text-[28px] mt-4 sm:mt-7 bg-[#F1EFEF] w-max text-[#D23157] font-black h-[41px] sm:h-[60px] flex gap-1 sm:gap-2 justify-center items-center px-3 sm:px-4 rounded-[6px] mx-auto"
          >
            <p>{{ uniqueCode }}</p>
            <img
              src="/images/sefoursary/icons/copy.svg"
              alt="copy"
              class="sm:w-5 cursor-pointer"
              @click="clickCopyHandler(uniqueCode)"
            />
          </div>
        </div>
        <div
          class="absolute flex justify-center gap-10 items-end bottom-0 right-1/2 translate-x-1/2"
        >
          <nuxt-link to="/sefoursary/game">
            <section
              class="font-bold text-[10px] sm:text-base text-[#66738F] flex flex-col items-center"
            >
              <p>Menu</p>
              <img
                src="/images/sefoursary/icons/hamburger.svg"
                alt="menu"
                class="w-[31px] sm:w-[50px] h-[33px] sm:h-[53px] mt-1 sm:mt-3"
              />
            </section>
          </nuxt-link>

          <section
            v-if="level < 15"
            class="font-bold text-[10px] sm:text-base text-[#66738F] flex flex-col items-center cursor-pointer"
            @click="$emit('onNext')"
          >
            <p>Next Level</p>
            <img
              src="/images/sefoursary/icons/next-level.svg"
              alt="menu"
              class="w-[31px] sm:w-[50px] h-[33px] sm:h-[53px] mt-1 sm:mt-3"
            />
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalType: {
      type: String,
      default: 'star',
    },
    uniqueCode: {
      type: String,
      default: '',
    },
    level: {
      type: Number,
      default: 1,
    },
    giftName: {
      type: String,
      default: '',
    },
  },
  computed: {
    isLottery() {
      const { uniqueCode } = this;
      if (uniqueCode) {
        const prefixes = ['SE11', 'SE12', 'SE13', 'SE14'];

        return prefixes.some((prefix) => uniqueCode.startsWith(prefix));
      }
    },
  },
  methods: {
    clickCopyHandler(value) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(value).then(
          () => {
            this.$alert.show({
              status: 'success',
              message: `Berhasil disalin`,
            });
          },
          (err) => console.log(err)
        );
      }
    },
    getDeviceType(code) {
      const deviceTypes = {
        SE11: 'BASEUS TWS',
        SE12: 'SAMSUNG AO5',
        SE13: 'TCL SMART TV 40”',
        SE14: 'SAMSUNG GALAXY TAB A9+',
      };

      for (const prefix in deviceTypes) {
        if (code.startsWith(prefix)) {
          return deviceTypes[prefix];
        }
      }

      return 'Unknown';
    },
  },
};
</script>

<style lang="scss" scoped>
.font--nunito {
  font-family: 'Nunito Sans', sans-serif;
}
.seafoursary__level__cleared {
  background-image: url('/images/sefoursary/background/level-cleared.webp');
}
.seafoursary__awesome {
  background-image: url('/images/sefoursary/background/achievement.webp');
}
</style>
