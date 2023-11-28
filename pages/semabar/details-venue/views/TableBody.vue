<template>
  <div
    class="w-full border-b rounded-b-[10px]"
    style="box-shadow: 0px 2px 2px 0px rgba(97, 128, 168, 0.25), 0px 0px 1px 0px rgba(62, 79, 102, 0.14);

  Show 2 more colors
  "
  >
    <section v-if="selected == 'about' && data.about">
      <p
        class="text-green-seakun-secondary-dark font-bold text-sm md:text-base lg:text-[18px]"
      >
        Seakun Main Bareng (Semabar)
      </p>
      <div class="pt-1 lg:pt-2 space-y-5 lg:space-y-8">
        <p
          class="text-sm md:text-base lg:text-[18px] text-main leading-[22px] lg:leading-[26px]"
          v-for="(about, id) in data.about"
          :key="id"
        >
          {{ about }}
        </p>
      </div>
    </section>
    <section
      v-if="selected == 'price' && data.price"
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
            <p>{{ toRupiah(data.price.detailsOfPlayingFees.field) }}</p>
          </div>
          <div
            class="text-sm lg:text-base text-main font-medium flex justify-between items-center"
          >
            <p>Konsumsi</p>
            <p>{{ toRupiah(data.price.detailsOfPlayingFees.consumption) }}</p>
          </div>
          <div
            class="text-sm lg:text-base text-main font-medium flex justify-between items-center"
          >
            <p>Fasilitas Lainnya</p>
            <p>
              {{ toRupiah(data.price.detailsOfPlayingFees.otherFacilities) }}
            </p>
          </div>
          <div
            class="text-sm lg:text-base text-green-seakun-secondary-dark font-medium flex justify-between items-center p-3 bg-[#D9FDF3] rounded-[6px]"
          >
            <p>Total</p>
            <p class="font-bold">
              {{ toRupiah(data.price.detailsOfPlayingFees.count) }}
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
              <p>Biaya Admin</p>
              <p>
                {{
                  toRupiah(
                    data.price.detailsOfPermatchFees.nonMembership.adminFees
                  )
                }}
              </p>
            </div>
            <div
              class="text-sm lg:text-base flex justify-between items-center mt-2 lg:mt-3 font-medium text-main"
            >
              <p>Harga 1 Match</p>
              <p>
                {{
                  toRupiah(
                    data.price.detailsOfPermatchFees.nonMembership.pricePerMatch
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
              <p>Biaya Admin</p>
              <p>
                {{
                  toRupiah(
                    data.price.detailsOfPermatchFees.membership.adminFees
                  )
                }}
              </p>
            </div>
            <div
              class="text-sm lg:text-base flex justify-between items-center font-medium text-main mt-2 lg:mt-3"
            >
              <p>Harga 4 Match</p>
              <p>
                {{
                  toRupiah(
                    data.price.detailsOfPermatchFees.membership
                      .priceForFourMatch
                  )
                }}
              </p>
            </div>
            <div
              class="w-full bg-[#00BA88] h-8 flex items-center gap-1 text-white text-sm lg:text-base font-extrabold px-3 rounded-[6px] mt-2 lg:mt-3"
            >
              <img
                src="/images/icons/atoms/semabar/discount.svg"
                alt="discount"
                class="w-[18px] h-[18px] md:w-5 md:h-5"
              />
              <p>Hemat 40%!!</p>
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
    <section v-if="selected == 'address' && data.addressVenue">
      <p class="text-sm md:text-base text-[#66738F] font-medium">
        Alamat Venue
      </p>
      <p class="text-main text-sm md:text-base font-medium pt-2">
        {{ data.addressVenue.address }}
      </p>
      <div class="w-full h-[154px] md:h-[200px] lg:h-[288px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1092.838005676419!2d106.88154836239426!3d-6.217592097366221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3623218d00b%3A0xc307600961d2da46!2sGOR%20Kurnia%20Badminton%20Court!5e0!3m2!1sid!2sid!4v1701167979982!5m2!1sid!2sid"
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
          <p>{{ facility.name }}</p>
        </div>
      </div>
    </section>
    <section v-if="selected == 'gallery' && data.gallery">
      <div
        class="grid grid-cols-3 lg:grid-cols-5 md:grid-cols-4 md:gap-4 gap-x-3 gap-y-4"
      >
        <div v-for="(gallery, id) in data.gallery" :key="id">
          <img
            :src="`/images/semabar/gallery/${gallery.images}.png`"
            :alt="gallery.images"
            class="w-full h-[70px] md:h-[110px] lg:h-[168px]"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      typeof: String,
      default: 'about',
    },
    data: {
      typeof: [Object, Array],
      default: () => ({}),
    },
  },
  methods: {
    toRupiah(word) {
      if (word) {
        return 'Rp' + word.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
      } else {
        return 'Rp0';
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
