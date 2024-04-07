<template>
  <div v-show="!isAlreadyExixt" class="relative">
    <img
      :src="imgSrc"
      class="cursor-pointer"
      alt="thr envelope"
      @click="saveEnvelopeToLocal"
    />
    <div
      v-if="isLoading"
      class="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full flex justify-center items-center text-white bg-black/60"
    >
      <i class="fa-solid fa-circle-notch fa-spin"></i>
    </div>
  </div>
</template>

<script>
import CustomerService from '~/services/CustomerServices';
import axios from 'axios';

export default {
  computed: {
    thrChallengeData() {
      return this.$store.state.thrChallengeData;
    },
    isAlreadyExixt() {
      return this.checkExistingEnvelope();
    },
    imgSrc() {
      if (process.client && window.innerWidth <= 1023) {
        return `/images/ramadan/thr/mobile/thr-${this.envelopeKey}.svg`;
      } else return `/images/ramadan/thr/thr-${this.envelopeKey}.svg`;
    },
  },
  props: {
    envelopeKey: {
      typeof: Number,
      default: 0,
    },
  },
  data() {
    return {
      CustomerService,
      isLoggedin: false,
      isLoading: false,
    };
  },
  mounted() {
    this.getData();
    const username = this.$cookies.get('username');
    if (username) {
      this.isLoggedin = true;
      const userData = localStorage.getItem('user_data');
      if (!userData) {
        this.getCustomerDetail();
      }
    } else {
      this.isLoggedin = false;
    }
  },
  methods: {
    async getData() {
      await this.$store.dispatch('initializeTHREnvelopeFromLocalStorage');
    },
    async getCustomerDetail() {
      this.CustomerService = new CustomerService(this);
      const { CustomerService } = this;
      try {
        const fetchCustomer = await CustomerService.getCustomerByUid();
        if (fetchCustomer.data) {
          const customerData = fetchCustomer.data.data;
          localStorage.setItem('user_data', JSON.stringify(customerData));
        }
      } catch (error) {}
    },
    showPopup() {
      this.$store.commit(
        'setShowPopupTHRChallenge',
        !this.$store.isShowPopupTHRChallenge
      );
    },
    async saveEnvelopeToLocal() {
      if (this.isLoggedin) {
        const data = {
          key: this.envelopeKey,
          name: 'thr seakun',
        };
        const saveEnvelope = [...this.thrChallengeData];

        if (!this.checkExistingEnvelope()) {
          this.isLoading = true;
          const sendDataToGoogle = await this.sendDataToGoogleSheet(
            this.envelopeKey
          );

          if (sendDataToGoogle) {
            saveEnvelope.push(data);
            this.$store.commit('setThrChallengeData', saveEnvelope);
            localStorage.setItem('thr_challenge', JSON.stringify(saveEnvelope));
            this.showPopup();
            this.$alert.show({
              status: 'success',
              message: 'Berhasil menyimpan amplop',
            });
          } else {
            this.$alert.show({
              status: 'error',
              message: 'Gagal menyimpan amplop',
            });
          }
          this.isLoading = false;
        }
      } else {
        this.$alert.show({
          status: 'error',
          message: 'Harap login untuk mengikuti challenge',
        });
        setTimeout(() => {
          this.$router.push('/login');
        }, 2000);
      }
    },
    checkExistingEnvelope() {
      const envelope = this.thrChallengeData;
      if (envelope && envelope.length > 0) {
        return envelope.some((item) => item.key === this.envelopeKey);
      } else {
        return false;
      }
    },
    async sendDataToGoogleSheet(envelope) {
      let customer = null;
      while (!customer) {
        customer = localStorage.getItem('user_data');
        if (!customer) {
          await this.getCustomerDetail();
          customer = localStorage.getItem('user_data');
        }
      }
      const cusData = JSON.parse(customer);
      const scriptUrl =
        'https://script.google.com/macros/s/AKfycbxMZ2ikxJ3xsYsGJH-jCPT9KUlbnvQXGnG2CKjc3aBhFNW0DmW8nSKAO6mlfSfpvZoc/exec';

      const newForm = new FormData();
      const today = new Date();

      const hour = today.getHours();
      const minute = today.getMinutes();
      const time = `${hour}:${minute}`;

      const date = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      const fullDate = `${date}/${month}/${year} ${time}`;

      newForm.append('name', cusData.name);
      newForm.append('email', cusData.email);
      newForm.append('phone', cusData.phoneNumber);
      newForm.append('envelope', envelope);
      newForm.append('date', fullDate);

      try {
        await axios.post(scriptUrl, newForm, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
</script>
