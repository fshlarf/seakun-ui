<template>
  <div
    class="container-about-us mt-8 md:mt-12 lg:mt-[50px] xl:mt-[64px]"
    id="sefoursary-how-to-claim"
  >
    <p
      class="font-bold text-[20px] md:text-[25px] lg:text-[28px] xl:text-[30px]] text-[#2F2A32] text-center"
    >
      Cara Klaim Hadiah
    </p>
    <!-- mobile view -->
    <div class="md:hidden">
      <div class="mt-6 flex gap-3 justify-center">
        <Button
          class="!w-[128px] !h-10 font-bold text-sm !rounded-lg"
          :class="isActiveButtonClass(true)"
          @click="showRandom = true"
          >Hadiah Acak</Button
        >
        <Button
          class="!w-[128px] !h-10 font-bold text-sm !rounded-lg"
          :class="isActiveButtonClass(false)"
          @click="showRandom = false"
          >Hadiah Undian</Button
        >
      </div>
      <div class="mt-6">
        <section v-if="showRandom">
          <div class="bg-white p-4 drop__shadow rounded-lg">
            <div
              class="bg-[#C3F8ED] h-10 flex justify-center items-center rounded-[6px]"
            >
              <p class="text-sm font-bold text-primary">Hadiah Acak</p>
            </div>
            <div class="mt-4 space-y-5">
              <section
                v-for="(item, id) in randomPrize"
                :key="id"
                class="flex gap-3 start text-xs font-bold text-gray-secondary"
                :class="[
                  id + 1 === randomPrize.length
                    ? 'items-start'
                    : 'items-center',
                ]"
              >
                <div
                  class="nunito__font w-6 h-6 bg-primary rounded-full text-white relative"
                >
                  <div
                    v-if="id !== randomPrize.length - 1"
                    class="absolute w-[3px] h-3 bg-[#41CCB0] rounded-[30px] right-1/2 translate-x-1/2 top-[100%] mt-1"
                  />

                  <p
                    class="tracking-[-0.5px] flex items-center justify-center w-6 h-6"
                  >
                    {{ id + 1 }}
                  </p>
                </div>
                <p>{{ item.title }}</p>
              </section>
            </div>
          </div>
        </section>
        <section v-else>
          <div class="bg-white p-4 drop__shadow rounded-lg">
            <div
              class="bg-[#D4E8FF] h-10 flex justify-center items-center rounded-[6px]"
            >
              <p class="text-sm font-bold text-[#1874B6]">Hadiah Undian</p>
            </div>
            <div class="mt-4 space-y-5">
              <section
                v-for="(item, id) in lotteryPrize"
                :key="id"
                class="flex gap-3 justify-start text-xs font-bold text-gray-secondary"
                :class="[
                  id + 1 === lotteryPrize.length
                    ? 'items-start'
                    : 'items-center',
                ]"
              >
                <div
                  class="nunito__font w-6 h-6 bg-[#1874B6] rounded-full text-white relative"
                >
                  <div
                    v-if="id !== lotteryPrize.length - 1"
                    class="absolute w-[3px] h-3 bg-[#A1C3E9] rounded-[30px] right-1/2 translate-x-1/2 top-[100%] mt-1"
                  />

                  <p
                    class="tracking-[-0.5px] flex items-center justify-center w-6 h-6"
                  >
                    {{ id + 1 }}
                  </p>
                </div>
                <p>
                  {{ item.title }}
                  <span v-if="item.sosmed" class="text-primary">{{
                    item.sosmed
                  }}</span>
                </p>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- dekstop view -->
    <div class="hidden md:block">
      <div
        class="flex justify-center md:gap-[70px] mt-10 lg:mt-[50px] xl:mt-[60px] lg:gap-[120px]"
      >
        <section class="w-full">
          <div
            class="font-bold h-10 lg:h-12 bg-[#C3F8ED] md:text-[18px] lg:text-[20px] text-primary flex justify-center items-center w-full rounded-[10px]"
          >
            <p>Hadiah Acak</p>
          </div>
          <div class="mt-4 space-y-8">
            <section
              v-for="(item, id) in randomPrize"
              :key="id"
              class="flex gap-3 start text-sm font-extrabold text-gray-secondary"
              :class="[
                id + 1 === randomPrize.length || id === 0
                  ? 'items-start lg:items-center'
                  : 'items-center',
              ]"
            >
              <div
                class="nunito__font w-6 h-6 bg-primary rounded-full text-white relative"
              >
                <div
                  v-if="id !== randomPrize.length - 1"
                  :class="[id === 0 ? '!h-10 lg:!h-6' : '']"
                  class="absolute w-[3px] h-6 bg-[#41CCB0] rounded-[30px] right-1/2 translate-x-1/2 top-[100%] mt-1"
                />

                <p
                  class="tracking-[-0.5px] flex items-center justify-center w-6 h-6"
                >
                  {{ id + 1 }}
                </p>
              </div>
              <p>{{ item.title }}</p>
            </section>
          </div>
        </section>
        <section class="w-full">
          <div
            class="font-bold h-10 lg:h-12 bg-[#D4E8FF] md:text-[18px] lg:text-[20px] text-[#1874B6] flex justify-center items-center w-full rounded-[10px]"
          >
            <p>Hadiah Undian</p>
          </div>
          <div class="mt-4 space-y-8">
            <section
              v-for="(item, id) in lotteryPrize"
              :key="id"
              class="flex gap-3 start text-sm font-extrabold text-gray-secondary"
              :class="[
                id + 1 === lotteryPrize.length || id === 1
                  ? 'items-start lg:items-center'
                  : 'items-center',
              ]"
            >
              <div
                class="nunito__font w-6 h-6 bg-[#1874B6] rounded-full text-white relative"
              >
                <div
                  v-if="id !== lotteryPrize.length - 1"
                  :class="[id === 1 ? 'h-10' : 'h-6']"
                  class="absolute w-[3px] bg-[#A1C3E9] rounded-[30px] right-1/2 translate-x-1/2 top-[100%] mt-1"
                />

                <p
                  class="tracking-[-0.5px] flex items-center justify-center w-6 h-6"
                >
                  {{ id + 1 }}
                </p>
              </div>
              <p>
                {{ item.title }}
                <span v-if="item.sosmed" class="text-primary">{{
                  item.sosmed
                }}</span>
              </p>
            </section>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
export default {
  components: {
    Button,
  },
  data() {
    return {
      showRandom: true,
      randomPrize: [
        {
          title: 'Screenshot bukti menang dan salin kode hadiah',
        },
        {
          title: 'Kirim ke Admin (wa.me/6285774642738)',
        },
        {
          title:
            'Hadiah akan dikirimkan serentak di hari Senin, 9 September 2024',
        },
      ],
      lotteryPrize: [
        {
          title: 'Salin nomor undian',
        },
        {
          title: 'Pasang alarm PUNCAK LIVE UNDIAN 9 SEPTEMBER',
        },
        {
          title: 'Hadiri LIVE di sosial media Seakun',
          sosmed: '(IG dan Tiktok @seakun.id)',
        },
      ],
    };
  },

  methods: {
    isActiveButtonClass(val) {
      const { showRandom } = this;
      if (showRandom === val) {
        return 'bg-[#08A081] text-white';
      } else return 'bg-[#E3EDEB] text-gray-secondary';
    },
  },
};
</script>

<style lang="scss" scoped>
.drop__shadow {
  box-shadow: 2px 0px 30px rgba($color: #000000, $alpha: 0.1);
}
.nunito__font {
  font-family: nunito !important;
}
</style>
