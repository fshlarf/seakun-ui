<template>
  <div
    class="w-full border-b rounded-b-[10px]"
    style="box-shadow: 0px 2px 2px 0px rgba(97, 128, 168, 0.25), 0px 0px 1px 0px rgba(62, 79, 102, 0.14);

  Show 2 more colors
  "
  >
    <section v-if="selected == 'about'">
      <p
        class="text-green-seakun-secondary-dark font-bold text-sm md:text-base lg:text-[18px]"
      >
        Seakun Main Bareng (Semabar)
      </p>
      <div
        class="pt-1 lg:pt-2 space-y-5 lg:space-y-8 text-sm md:text-base lg:text-[18px] text-main leading-[22px] lg:leading-[26px]"
      >
        <p>
          Komunitas main bareng yang diinisiasi oleh Seakun.id, bertujuan untuk
          mempertemukan kamu dengan individu lain yang ingin bermain atau
          berolahraga bersama. Dengan Semabar, kamu tidak perlu khawatir mencari
          teman untuk main bareng lagi! Cukup dengan bergabung komunitas, dan
          kami yang akan mengelola sisanya.
        </p>
      </div>
    </section>

    <section
      v-if="selected == 'price' && data.detailsFee"
      class="flex flex-col lg:flex-row gap-6"
    >
      <div
        class="bg-white p-3 md:p-4 lg:p-6 border-[#AEE8D8] border rounded-lg lg:min-w-[330px] xl:min-w-[373px]"
        style="box-shadow: 0px 4px 4px 0px rgba(0, 186, 136, 0.2)"
      >
        <p class="text-sm md:text-base lg:text-lg text-[#66738F] font-medium">
          Rincian Biaya Main
        </p>
        <div class="mt-2 md:mt-3 lg:mt-4 space-y-3 lg:space-y-4">
          <div
            class="text-sm lg:text-base text-main font-medium flex justify-between items-center"
          >
            <p>Lapangan 2 Jam</p>
            <p>{{ toRupiah(data.detailsFee.fieldFee) }}</p>
          </div>
          <div
            class="text-sm lg:text-base text-main font-medium flex justify-between items-center"
          >
            <p>Konsumsi</p>
            <p>{{ toRupiah(data.detailsFee.consumption) }}</p>
          </div>
          <div
            class="text-sm lg:text-base text-main font-medium flex justify-between items-center"
          >
            <p>Wasit</p>
            <p>{{ toRupiah(data.detailsFee.referee) }}</p>
          </div>
          <div
            class="text-sm lg:text-base text-main font-medium flex justify-between items-center"
          >
            <p>Fasilitas Lainnya</p>
            <p>
              {{ toRupiah(data.detailsFee.otherFacilities) }}
            </p>
          </div>
          <div
            class="text-sm lg:text-base text-green-seakun-secondary-dark font-medium flex justify-between items-center p-3 bg-[#D9FDF3] rounded-[6px]"
          >
            <p>Total</p>
            <p class="font-bold">
              {{ toRupiah(data.detailsFee.totalFee) }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="bg-white p-3 md:p-4 lg:p-6 border-[#AEE8D8] border rounded-lg w-full"
        style="box-shadow: 0px 4px 4px 0px rgba(0, 186, 136, 0.2)"
      >
        <p class="text-sm md:text-base lg:text-lg text-[#66738F] font-medium">
          Rincian Biaya Per Match
        </p>
        <div
          class="mt-2 md:mt-3 lg:mt-4 flex flex-col lg:flex-row gap-2 md:gap-3"
        >
          <section
            class="border border-[#F6E8BE] bg-[#FFFCF2] p-2 md:p-3 lg:p-4 rounded-[6px] lg:rounded-lg min-h-[98px] md:min-h-[130px] lg:min-h-[160px] w-full !font-medium"
          >
            <p
              class="text-sm md:text-base lg:text-lg font-medium text-[#D7A10A]"
            >
              Non Member
            </p>
            <div
              class="text-sm lg:text-base flex justify-between items-center mt-2 lg:mt-3 font-medium text-main"
            >
              <p>Harga Patungan</p>
              <p>
                {{
                  toRupiah(data.detailsFee.detailsPrice.nonMembership.sharedFee)
                }}
              </p>
            </div>
            <div
              class="text-sm lg:text-base flex justify-between items-center mt-2 lg:mt-3 font-medium text-main"
            >
              <p>Biaya Admin</p>
              <p>
                {{
                  toRupiah(data.detailsFee.detailsPrice.nonMembership.adminFee)
                }}
              </p>
            </div>

            <div
              class="text-sm lg:text-base flex justify-between items-center mt-2 lg:mt-3 font-medium text-main"
            >
              <p>Harga 1 Event</p>
              <p>
                {{
                  toRupiah(
                    data.detailsFee.detailsPrice.nonMembership.pricePerMatch
                  )
                }}
              </p>
            </div>
            <div
              class="text-sm lg:text-base flex justify-between items-center font-medium text-main mt-2 lg:mt-3"
            >
              <p>Harga 2 Event</p>
              <p>
                {{
                  toRupiah(
                    data.detailsFee.detailsPrice.nonMembership.pricePerMatch * 2
                  )
                }}
              </p>
            </div>
          </section>
          <section
            class="border border-[#89F9DA] bg-[#E2FFF7] p-2 md:p-3 lg:p-4 rounded-[6px] lg:rounded-lg min-h-[98px] md:min-h-[130px] lg:min-h-[160px] w-full !font-medium"
          >
            <p
              class="text-sm md:text-base lg:text-lg font-medium text-[#00BA88]"
            >
              Membership
            </p>
            <div
              class="text-sm lg:text-base flex justify-between items-center mt-2 lg:mt-3 font-medium text-main"
            >
              <p>Harga Patungan</p>
              <p>
                {{
                  toRupiah(data.detailsFee.detailsPrice.membership.sharedFee)
                }}
              </p>
            </div>
            <div
              class="text-sm lg:text-base flex justify-between items-center mt-2 lg:mt-3 font-medium text-main"
            >
              <p>Biaya Admin</p>
              <p>
                {{ toRupiah(data.detailsFee.detailsPrice.membership.adminFee) }}
              </p>
            </div>
            <div
              class="text-sm lg:text-base flex justify-between items-center mt-2 lg:mt-3 font-medium text-main"
            >
              <p>Harga 1 Event</p>
              <p>
                {{
                  toRupiah(
                    data.detailsFee.detailsPrice.membership.pricePerMatch
                  )
                }}
              </p>
            </div>
            <div
              class="text-sm lg:text-base flex justify-between items-center font-medium text-main mt-2 lg:mt-3"
            >
              <p>Harga 2 Event</p>
              <p>
                {{
                  toRupiah(
                    data.detailsFee.detailsPrice.membership.pricePerMatch * 2
                  )
                }}
              </p>
            </div>
            <div
              v-if="data.detailsFee.detailsPrice.membership.moreEffiecient"
              class="w-full bg-[#00BA88] h-8 flex items-center gap-1 text-white text-sm lg:text-base font-extrabold px-3 rounded-[6px] mt-2 lg:mt-3"
            >
              <img
                src="/images/icons/atoms/semabar/discount.svg"
                alt="discount"
                class="w-[18px] h-[18px] md:w-5 md:h-5"
              />
              <p>
                Hemat
                {{ data.detailsFee.detailsPrice.membership.moreEffiecient }}
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
    <section v-if="selected == 'benefits' && data.benefits">
      <p class="text-sm md:text-base lg:text-lg font-medium text-[#66738F]">
        Benefit Main Bareng
      </p>
      <div
        class="grid gap-y-3 lg:gap-y-4 md:grid-rows-4 md:grid-flow-col mt-3 lg:mt-4"
      >
        <div
          v-for="(benefit, id) in data.benefits"
          :key="id"
          class="flex gap-2 items-center"
        >
          <div
            class="w-6 h-6 lg:w-[26px] lg:h-[26px] p-2 bg bg-[#00BA88] text-white rounded-full flex items-center justify-center"
          >
            <p class="text-[10px] lg:text-sm">
              {{ id + 1 }}
            </p>
          </div>
          <p class="text-sm lg:text-base font-medium text-main">
            {{ benefit }}
          </p>
        </div>
      </div>
    </section>
    <section v-if="selected == 'address' && data.address">
      <p class="text-sm md:text-base text-[#66738F] font-medium">
        Alamat Venue
      </p>
      <p class="text-main text-sm md:text-base font-medium pt-2">
        {{ data.address }}
      </p>
      <div class="w-full mt-3 md:mt-4 h-[154px] md:h-[200px] lg:h-[288px]">
        <iframe
          :src="data.maps"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
    <section v-if="selected == 'facility' && data.facility">
      <p class="text-sm md:text-base text-[#66738F] font-medium">Fasilitas</p>
      <div
        class="mt-3 md:mt-4 grid grid-rows-3 gap-x-7 grid-flow-col md:grid-rows-4 gap-y-5 lg:gap-y-6 md:grid-flow-row md:grid-cols-4"
      >
        <div
          v-for="(facility, id) in data.facility"
          :key="id"
          class="flex items-center gap-3"
        >
          <img
            :src="`/images/icons/atoms/semabar/${facility.images}.svg`"
            :alt="facility.name"
            class="p-2 bg-[#DBF8F2] rounded-lg w-9 h-9 lg:w-12 lg:h-12"
          />
          <p
            class="text-xs md:text-sm lg:text-base text-main font-medium md:whitespace-nowrap"
          >
            {{ facility.name }}
          </p>
        </div>
      </div>
    </section>
    <section v-if="selected == 'gallery' && data.gallery">
      <div
        class="grid grid-cols-3 lg:grid-cols-5 md:grid-cols-4 md:gap-4 gap-x-3 gap-y-4"
      >
        <div v-for="(gallery, id) in data.gallery" :key="id">
          <img
            :src="`/images/semabar/gallery/${gallery.images}`"
            :alt="gallery.images"
            class="w-full h-[70px] md:h-[110px] lg:h-[168px] object-cover cursor-pointer rounded sm:rounded[6px]"
            @click="handlePreview(id)"
            @click.stop
          />
        </div>
      </div>
    </section>
    <PreviewGallery
      v-if="isShowPreviewGallery"
      :gallery="data.gallery"
      :current-id="sendIdImage"
      @click-arrow="isShowPreviewGallery = false"
    />
  </div>
</template>

<script>
import PreviewGallery from './PreviewGallery.vue';
export default {
  components: {
    PreviewGallery,
  },
  data() {
    return {
      isShowPreviewGallery: false,
      dataPreviewGallery: null,
      sendIdImage: null,
    };
  },
  props: {
    selected: {
      typeof: String,
      default: 'about',
    },
    data: {
      typeof: Object,
      default: () => {},
    },
  },
  mounted() {
    document.addEventListener('keydown', this.shortCutClosePreview);
    document.addEventListener('click', this.closePreviewClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.shortCutClosePreview);
    document.removeEventListener('click', this.closePreviewClickOutside);
  },
  methods: {
    shortCutClosePreview(event) {
      if (event.keyCode === 27) {
        this.isShowPreviewGallery = false;
      }
    },
    closePreviewClickOutside(event) {
      const preview = this.$el.querySelector('.preview-gallery');

      if (preview && !preview.contains(event.target)) {
        this.isShowPreviewGallery = false;
      }
    },
    toRupiah(word) {
      if (word) {
        return 'Rp' + word.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
      } else {
        return 'Rp0';
      }
    },
    handlePreview(id) {
      this.isShowPreviewGallery = !this.isShowPreviewGallery;
      this.sendIdImage = id;
    },
  },
};
</script>

<style lang="scss" scoped></style>