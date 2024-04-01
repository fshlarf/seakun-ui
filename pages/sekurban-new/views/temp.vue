<template>
  <div id="product-detail-sekurban" class="container-sekurban-new my-5">
    <div class="my-5 md:my-20">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div>
          <img
            src="/images/sekurban-new/testimony-image.png"
            class="w-[460px]"
          />
        </div>
        <div class="relative mr-0 md:mr-16">
          <button
            @click="slideLeft"
            :disabled="activeSlider === 1"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-14 w-[38px] h-[38px] rounded-full bg-chevron flex justify-center items-center cursor-pointer z-10"
          >
            <img
              src="/images/icons/atoms/chevron-white-left.svg"
              alt="chevron"
            />
          </button>
          <button
            @click="slideRight"
            :disabled="activeSlider === testimonial.length"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-14 rotate-180 w-[38px] h-[38px] rounded-full bg-chevron flex justify-center items-center cursor-pointer z-10"
          >
            <img
              src="/images/icons/atoms/chevron-white-left.svg"
              alt="chevron"
            />
          </button>
          <div class="relative">
            <div
              v-for="(testi, id) in testimonial"
              :key="id"
              v-show="activeSlider === id + 1"
            >
              <div class="shadow-lg rounded-xl p-6 w-full md:w-[486px]">
                <div class="flex justify-between items-center mb-8">
                  <div class="flex items-center gap-3">
                    <img :src="testi.icon" />
                    <span class="text-base font-bold">{{ testi.name }}</span>
                  </div>
                  <div class="tn:hidden xl:block">
                    <img
                      src="/images/sekurban-new/icons/close-tick.png"
                      alt="closing quotes"
                      class="w-8"
                    />
                  </div>
                </div>
                <p class="text-base text-main font-normal leading-6">
                  “{{ testi.testi }}”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSlider: 1,
      testimonial: [
        {
          icon: '/images/sekurban-new/icons/woman-1.svg',
          name: 'A*****a',
          testi:
            'Alhamdulilah sekurban sangat membantu. Untuk patungan kurban, Laporan pemotongan juga lengkap jd saya mengetahui kapan dimana dan seperti apa hewan kurbannya',
        },
        {
          icon: '/images/sekurban-new/icons/man-1.svg',
          name: 'A*** ****f *********h',
          testi:
            'Kemarin kebetulan pengen banget bisa ikutan kurban. Kalo di kampung saya sebenarnya ada tapi harus nunggu giliran yang lama, selain itu juga nanti kalo pun dapat koordinasinya bakal susah. Terus Alhamdulillah ada info tentang sekurban. Jadi terbantu deh pelaksanaan niat baik untuk ikut berkurban.',
        },
        {
          icon: '/images/sekurban-new/icons/man-2.svg',
          name: 'S***** ******o',
          testi:
            'Puas atas layanan sekurban, memudahkan bagi customer seakun yg ingin berkurban tanpa perlu repot keluar rumah, tinggal transaksi melalui hp sudah bs berkurban dan amanah tentunya',
        },
      ],
    };
  },
  methods: {
    slideLeft() {
      if (this.activeSlider > 1) {
        this.activeSlider -= 1;
      }
    },
    slideRight() {
      if (this.activeSlider < this.testimonial.length) {
        this.activeSlider += 1;
      }
    },
  },
};
</script>

<style>
.bg-chevron {
  background: rgba(8, 160, 129, 1);
}
</style>
