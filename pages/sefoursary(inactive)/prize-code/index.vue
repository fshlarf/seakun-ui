<!-- <template>
  <div class="bg-slate-50 min-h-screen">
    <NavbarProvider />
    <div class="md:container px-3 pt-20 pb-4 md:pb-20">
      <div v-if="isLoading" class="flex justify-center">
        <div
          class="w-[328px] sm:w-[520px] h-[241px] sm:h-[382px] bg-cover mt-[143px] relative flex justify-center items-center"
        >
          <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div v-else class="mx-auto max-w-[500px]">
        <div class="">
          <template v-if="lotteryData.length == 0">
            <div
              class="flex justify-center items-center w-full h-full pt-8 md:pt-14"
            >
              <div>
                <img
                  src="/images/illustration/table-not-found.webp"
                  alt="tidak ditemukan"
                  class="mx-auto w-[180px] md:w-[220px]"
                />
                <div class="max-w-[284px] md:max-w-[381px] mt-4 text-center">
                  <p class="text-[12px] md:text-sm">
                    Maaf, kami tidak menemukan kode undian yang terhubung dengan
                    akun kamu saat ini.
                  </p>
                </div>
              </div>
            </div>
          </template>
          <div v-else class="pt-6 md:pt-10 space-y-3">
            <div v-for="(data, index) in lotteryData" :key="index">
              <div class="rounded-xl bg-white flex overflow-hidden shadow">
                <div
                  class="w-[25%] bg-[#1E9E30] flex justify-center items-center text-white font-bol text-[28px] md:text-[32px]"
                >
                  {{ data.prizeCode }}
                </div>
                <div class="p-3 w-[75%]">
                  <div class="flex space-x-2">
                    <div
                      class="rounded-full bg-orange-100 px-2 max-w-max text-sm"
                    >
                      {{ data.type }}
                    </div>
                    <div
                      v-if="data.orderNumber"
                      class="rounded-full bg-orange-100 px-2 max-w-max text-sm"
                    >
                      {{ data.orderNumber }}
                    </div>
                  </div>
                  <div
                    class="flex space-x-2 items-center bg-[#F1EFEF] rounded-lg p-4 mt-2 justify-center w-full"
                  >
                    <div class="text-lg font-bold text-[#D23157]">
                      {{ data.uniqueCode }}
                    </div>
                    <img
                      src="/images/sefoursary/icons/copy.svg"
                      alt="copy"
                      class="sm:w-5 cursor-pointer"
                      @click="clickCopyHandler(data.uniqueCode)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="mt-10 rounded-[10px] bg-[#ECFFFB] border border-[#D9EBE7] p-[17px] md:p-[20px] text-[12px] md:text-base"
        >
          <p class="font-bold text-primary md:text-sm">
            Terima kasih atas partisipasi Sekawan di program Sefoursary "Seakun
            4 Anniversary"
          </p>
          <p class="mt-2 md:text-sm">
            Untuk memastikan proses yang adil dan transparan, kami melakukan
            filter ulang terhadap nomor undian yang sudah didistribusikan dengan
            ketentuan berikut:
          </p>
          <div class="mt-3 space-y-1 md:text-sm">
            <div v-for="(text, id) in info">
              <div class="flex space-x-2">
                <div
                  class="w-[18px] md:w-[22px] h-[18px] md:h-[22px] bg-primary flex justify-center items-center text-white flex-shrink-0 rounded-full"
                >
                  {{ id + 1 }}
                </div>
                <div>
                  {{ text }}
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
import NavbarProvider from '~/components/mollecules/NavbarProvider.vue';
import CustomerService from '../../../services/CustomerServices';

export default {
  components: {
    NavbarProvider,
  },
  data() {
    return {
      CustomerService,
      isLoading: true,
      lotteryData: [],
      info: [
        'Nomor undian dari level sebelumnya otomatis dianulir bagi pengguna yang telah berhasil memenangkan undian di level yang lebih tinggi',
        'Setiap nomor HP yang mengikuti games, hanya berhak mendapatkan satu nomor undian',
        'Nomor undian dengan hadiah TAB hanya diberikan kepada pengguna yang secara valid memiliki order baru atau perpanjangan dengan durasi minimal 3 bulan, atau order aktif dengan total transaksi di atas Rp300.000',
      ],
    };
  },
  created() {
    this.$router.push('/');
    this.CustomerService = new CustomerService(this);
  },
  mounted() {
    const accesToken = this.$cookies.get('ATS');
    if (!accesToken) {
      this.$alert.show({
        status: 'error',
        message: 'Silahkan login terlebih dahulu',
      });
      setTimeout(() => {
        this.$router.push('/login');
      }, 5000);
    } else {
      this.fetchData();
    }
  },
  methods: {
    async fetchData() {
      try {
        const fetchCustomerLottery = await this.CustomerService.getSefoursaryData(
          {
            sheet: 'ALL',
          }
        );
        const { data } = fetchCustomerLottery.data;
        this.lotteryData = data;
      } catch (error) {
        console.log('error fetch user', error);
      }
      this.isLoading = false;
    },
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
  },
};
</script>

<style lang="scss" scoped>
.lds-roller,
.lds-roller div,
.lds-roller div:after {
  box-sizing: border-box;
}
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: ' ';
  display: block;
  position: absolute;
  width: 7.2px;
  height: 7.2px;
  border-radius: 50%;
  background: #1e9a2f;
  margin: -3.6px 0 0 -3.6px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 62.62742px;
  left: 62.62742px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 67.71281px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 70.90963px;
  left: 48.28221px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 70.90963px;
  left: 31.71779px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 67.71281px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 62.62742px;
  left: 17.37258px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12.28719px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style> -->
