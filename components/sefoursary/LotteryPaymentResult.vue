<template>
  <div>
    <div
      v-if="isLoading"
      class="fixed top-0 left-0 right-0 bottom-0 flex justify-center bg-black/40 z-50"
    >
      <div
        class="mt-[120px] lottery__background bg-white w-[328px] sm:w-[500px] h-[250px] sm:h-[380px] bg-cover flex justify-center items-center text-center relative"
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
    <div
      v-else
      class="fixed top-0 left-0 right-0 bottom-0 flex justify-center bg-black/40 z-50"
    >
      <div
        class="mt-[120px] lottery__background bg-white w-[328px] sm:w-[500px] h-[250px] sm:h-[380px] bg-cover flex justify-center items-center text-center relative"
      >
        <!-- close btn -->
        <div
          class="w-5 h-5 md:w-6 md:h-6 absolute top-2 right-2 cursor-pointer"
          @click="$emit('onClose')"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="20"
              height="20"
              rx="10"
              fill="black"
              fill-opacity="0.5"
            />
            <path
              d="M10.9204 10.1281L13.5181 7.53044C13.6413 7.40737 13.7107 7.24037 13.7108 7.06617C13.711 6.89198 13.6419 6.72485 13.5189 6.60157C13.3958 6.47828 13.2288 6.40894 13.0546 6.40878C12.8804 6.40863 12.7133 6.47768 12.59 6.60075L9.99235 9.1984L7.39469 6.60075C7.27141 6.47746 7.1042 6.4082 6.92985 6.4082C6.7555 6.4082 6.58829 6.47746 6.46501 6.60075C6.34172 6.72403 6.27246 6.89124 6.27246 7.06559C6.27246 7.23994 6.34172 7.40715 6.46501 7.53044L9.06266 10.1281L6.46501 12.7257C6.34172 12.849 6.27246 13.0162 6.27246 13.1906C6.27246 13.3649 6.34172 13.5322 6.46501 13.6554C6.58829 13.7787 6.7555 13.848 6.92985 13.848C7.1042 13.848 7.27141 13.7787 7.39469 13.6554L9.99235 11.0578L12.59 13.6554C12.7133 13.7787 12.8805 13.848 13.0548 13.848C13.2292 13.848 13.3964 13.7787 13.5197 13.6554C13.643 13.5322 13.7122 13.3649 13.7122 13.1906C13.7122 13.0162 13.643 12.849 13.5197 12.7257L10.9204 10.1281Z"
              fill="white"
            />
          </svg>
        </div>

        <!-- close btn -->

        <div>
          <p
            class="font--dongle text-primary font-bold text-[32px] sm:text-[45px] mt-5 sm:mt-6"
          >
            Selamat
          </p>
          <p
            class="font--dongle text-gray-secondary text-lg sm:text-xl max-w-[248px] sm:max-w-[350px] mx-auto leading-[14px] sm:leading-5 -mt-2 sm:-mt-3"
          >
            Kamu berkesempatan mendapatkan {{ prize }} di Anniversary Seakun,
            dengan nomor undian:
          </p>
          <div
            class="my-3 bg-[#F1EFEF] text-[#D23157] text-lg font-black w-max mx-auto px-3 py-[2px] sm:py-3 sm:px-5 rounded-[6px] sm:rounded-lg"
          >
            <p>{{ uniqueCode }}</p>
          </div>
          <p
            class="font--dongle text-base sm:text-lg max-w-[254px] sm:max-w-[312px] mx-auto leading-[14px] sm:leading-[18px] sm:mt-5"
          >
            Screenshot bukti undian dan Ikuti pengundian di IG @seakun.id pada
            tanggal <b>9 September 2024</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  updateDataInGoogleSheet,
  checkIsGotLottery,
} from '~/services/SefoursaryService.js';
import CustomerService from '~/services/CustomerServices';

export default {
  props: {
    dataOrder: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      CustomerService,
      uniqueCode: '',
      isLoading: true,
    };
  },
  computed: {
    prize() {
      const { totalPrice } = this.dataOrder.payment;
      if (totalPrice < 200000) {
        return 'Smart Phone';
      } else if (totalPrice >= 200000 && totalPrice <= 300000) {
        return 'Smart TV';
      } else if (totalPrice > 300000) {
        return 'Tablet';
      }
      return 'Hadiah';
    },
  },
  mounted() {
    this.CustomerService = new CustomerService(this);
    // this.checkLotteryInSheet();
    this.generateUniqueCode();
  },
  methods: {
    updateDataInGoogleSheet,
    checkIsGotLottery,
    async generateUniqueCode() {
      this.isLoading = true;
      const { CustomerService } = this;
      const {
        customerEmail,
        customerPhone,
        orderNumber,
        payment,
      } = this.dataOrder;
      const payload = {
        name: customerEmail,
        email: customerEmail,
        phone: customerPhone,
        orderNumber,
        price: payment.totalPrice,
      };
      try {
        const generate = await CustomerService.generateUniqueCodeThankyouSefoursary(
          payload
        );
        if (generate.data) {
          const { data } = generate.data;
          this.uniqueCode = data.uniqueCode;
        }
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
    async checkLotteryInSheet() {
      this.isLoading = true;
      try {
        const isAlreadyExist = await this.checkIsGotLottery(
          this.dataOrder.customerEmail,
          this.dataOrder.orderNumber
        );
        if (isAlreadyExist) {
          this.uniqueCode = isAlreadyExist.uniqueCode;
        } else {
          await this.postLottery();
        }
      } catch (error) {
        console.log('error', error);
      }
      this.isLoading = false;
    },
    async postLottery() {
      this.isLoading = true;
      try {
        const { customerEmail, customerPhone, orderNumber } = this.dataOrder;
        const ctx = {
          sheetName: 'UNDIAN',
          payload: {
            'Kode Hadiah': 'TAB',
            'Kode Unik': this.generateRandomCode(),
            'User name': customerEmail,
            Email: customerEmail,
            'User WA': customerPhone,
            Level: orderNumber,
          },
        };
        const resPostLevel = await this.updateDataInGoogleSheet(ctx);
        this.checkLotteryInSheet();
      } catch (error) {
        console.log('error', error);
      }
      this.isLoading = false;
    },
    generateRandomCode() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let result = '';
      const charactersLength = characters.length;
      for (let i = 0; i < 5; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return `SE14-${result}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.font--dongle {
  font-family: 'Dongle', sans-serif;
}

.lottery__background {
  background-image: url('/images/sefoursary/background/payment-result.webp');
}

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
</style>
