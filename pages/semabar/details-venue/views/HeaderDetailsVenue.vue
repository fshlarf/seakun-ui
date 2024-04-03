<template>
  <div class="container-semabar mt-[60px]">
    <nuxt-link to="/semabar">
      <div class="flex items-center gap-3">
        <img src="/images/icons/atoms/arrow-back.svg" alt="back" />
        <p class="text-main font-medium text-sm">Kembali</p>
      </div>
    </nuxt-link>
    <div>
      <div class="relative">
        <div class="absolute rounded-[6px] left-5 lg:left-5 bottom-[20px]">
          <img
            :src="`/images/semabar/venue/${detailsVenue.images}`"
            :alt="detailsVenue.name"
            class="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px] rounded-[6px] bg-white p-[5px] lg:p-2 object-contain"
          />
        </div>
        <img
          :src="[
            detailsVenue.isPromotion
              ? `/images/semabar/promo/${detailsVenue.slug}-mobile.webp`
              : `/images/semabar/illustration/minisoccer-mobile.webp`,
          ]"
          alt="banner"
          class="rounded-xl w-full h-[120px] mt-8 sm:hidden p-2"
        />
        <img
          :src="[
            detailsVenue.isPromotion
              ? `/images/semabar/promo/${detailsVenue.slug}.webp`
              : `/images/semabar/illustration/minisoccer-mobile.webp`,
          ]"
          alt="banner"
          class="rounded-xl w-full md:h-[200px] lg:h-[242px] mt-8 hidden sm:block"
        />
      </div>
      <div
        class="mt-2 md:mt-4 lg:mt-6 flex flex-col lg:flex-row justify-between"
      >
        <section>
          <p
            class="text-[#66738F] text-sm md:text-base lg:text-[20px] leading-normal"
          >
            Komunitas Main Bareng nih
          </p>

          <div class="flex items-center gap-2 pt-1">
            <p
              style="font-feature-settings: 'clig' off, 'liga' off"
              class="text-base md:text-lg lg:text-[26px] font-bold text-main leading-normal"
            >
              {{ detailsVenue.name }}
            </p>

            <img
              src="/images/icons/atoms/certified.svg"
              alt="available"
              class="w-[19px] h-[16px] md:w-[25px] md:h-[20px] lg:w-[37px] lg:h-[30px]"
            />
          </div>
          <div class="flex items-center gap-1 mt-2 md:mt-3">
            <img
              src="/images/icons/atoms/location.svg"
              alt="location"
              class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
            />
            <p
              class="font-medium text-sm md:text-base lg:text-[20px] text-[#08A081]"
            >
              {{ detailsVenue.city }}
            </p>
          </div>
          <!-- flex -->
          <div class="gap-3 mt-1 md:mt-[11px] hidden">
            <img
              src="/images/icons/atoms/semabar/group.svg"
              alt="group"
              class="w-5 h-5 md:w-6 md:h-6 bg-[#DBF8F2] rounded"
            />
            <p
              class="text-sm md:text-base lg:text-lg font-medium text-green-seakun-secondary-dark"
            >
              150 Member
            </p>
          </div>
        </section>
        <section>
          <p class="text-base text-[#66738F] mt-3 lg:mt-0">Bagikan ke</p>
          <div class="flex gap-3 lg:gap-6 mt-3">
            <div class="flex items-center gap-2 lg:gap-3">
              <div
                v-for="(media, id) in shareSocialMedia"
                :key="id"
                class="border rounded-lg w-[38px] h-[40px] lg:h-[56px] lg:w-[56px] flex justify-center items-center shadow-lg cursor-pointer"
                style="border: 1px solid rgba(160, 163, 189, 0.5)"
                @click="onClickShareLink(media.name)"
              >
                <img
                  :src="`/images/icons/atoms/semabar/${media.name}.svg`"
                  alt="whatsapp"
                  class="w-[22px] h-[22px] lg:w-7 lg:h-7"
                />
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div
                class="bg-[#00BA88] rounded-lg h-10 lg:h-[56px] flex items-center"
              >
                <a
                  :href="detailsVenue.whatsappCommunity"
                  class="flex items-center gap-1 px-2 md:px-3 cursor-pointer"
                >
                  <img
                    src="/images/icons/atoms/semabar/whatsapp-white.svg"
                    alt="whatsapp"
                    class="w-[18px] h-[18px] lg:w-7 lg:h-7"
                  />
                  <p
                    class="font-bold text-sm md:text-base lg:text-[20px] text-white"
                  >
                    Gabung Komunitas
                  </p>
                </a>
              </div>
              <div
                class="mb-2 lg:mb-3"
                v-if="detailsVenue.slug == 'permata-hijau'"
              >
                <THREnvelopeVue :envelopeKey="6" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import THREnvelopeVue from '../../../../components/organisms/ThrChallenge/THREnvelope.vue';
export default {
  components: {
    THREnvelopeVue,
  },
  data() {
    return {
      shareSocialMedia: [
        {
          name: 'whatsapp',
        },
        // {
        //   name: 'instagram',
        // },
        {
          name: 'twitter',
        },
      ],
    };
  },
  props: {
    detailsVenue: {
      typeof: Object,
      default: () => {},
    },
  },
  methods: {
    onClickShareLink(target) {
      const currentUrl = encodeURIComponent(window.location.href);
      const text = `Yuk main mini soccer bareng di ${this.detailsVenue.name} lewat komunitas Seakun. Skema patungannya murah banget!`;
      if (target === 'twitter') {
        const share = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${encodeURIComponent(
          text
        )}`;
        window.open(
          share,
          '_blank',
          'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
        );
      } else if (target === 'whatsapp') {
        const share = `https://api.whatsapp.com/send?text=${text}%20${currentUrl}`;
        window.open(share, '_blank');
      } else if (target === 'instagram') {
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
