<template>
  <div class="bg-[#F3FFFD]">
    <div id="testimony-sekurban" class="container-sekurban-new">
      <div class="my-5 md:my-5 py-8">
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <div class="hidden lg:block">
            <img
              src="/images/sekurban-new/testimony-image.png"
              class="h-[432px]"
            />
          </div>
          <h1
            class="block lg:hidden text-center text-xl md:text-2xl font-bold mb-5 mx-10"
          >
            Apa Kata Mereka Tentang Program Kami
          </h1>

          <!-- Mobile Testi -->
          <div class="md:hidden relative mr-0 md:mr-16">
            <div class="flex flex-col gap-4">
              <div v-for="(testi, id) in testimonial" :key="id">
                <div
                  class="shadow-md rounded-xl p-6 w-full md:w-[486px] bg-white"
                >
                  <div class="flex justify-between items-center mb-8">
                    <div class="flex items-center gap-3">
                      <img :src="testi.icon" class="w-8 h-8" />
                      <span class="text-xs font-bold">{{ testi.name }}</span>
                    </div>
                    <div>
                      <img
                        src="/images/sekurban-new/icons/close-tick.png"
                        alt="closing quotes"
                        class="w-8"
                      />
                    </div>
                  </div>
                  <p
                    class="text-xs text-main font-normal leading-[22px] md:leading-6"
                  >
                    “{{ testi.testi }}”
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Non Mobile Testi -->
          <div class="hidden md:items-center md:block relative mr-0 lg:mr-16">
            <div
              @click="slideLeft"
              class="bg-primary flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 lg:-translate-x-14 w-[38px] h-[38px] rounded-full justify-center items-center cursor-pointer z-10"
              :class="{ 'opacity-70': activeSlider == 1 }"
            >
              <img
                src="/images/icons/atoms/chevron-white-left.svg"
                alt="chevron"
              />
            </div>
            <div
              @click="slideRight"
              class="bg-primary flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 lg:translate-x-14 rotate-180 w-[38px] h-[38px] rounded-full justify-center items-center cursor-pointer z-10"
              :class="{ 'opacity-70': activeSlider == testimonial.length }"
            >
              <img
                src="/images/icons/atoms/chevron-white-left.svg"
                alt="chevron"
              />
            </div>
            <div class="relative">
              <div
                v-for="(testi, id) in testimonial"
                :key="id"
                v-show="activeSlider === id + 1"
              >
                <div
                  class="shadow-md rounded-xl md:p-8 lg:p-6 w-full lg:w-[486px] bg-white"
                >
                  <div class="flex justify-between items-center md:mb-6 mb-8">
                    <div class="flex items-center gap-3">
                      <img :src="testi.icon" />
                      <span class="text-base font-bold">{{ testi.name }}</span>
                    </div>
                    <div class="md:block">
                      <img
                        src="/images/sekurban-new/icons/close-tick.png"
                        alt="closing quotes"
                        class="w-8"
                      />
                    </div>
                  </div>
                  <p
                    class="md:text-sm text-base text-main font-normal leading-6"
                  >
                    “{{ testi.testi }}”
                  </p>
                </div>
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
