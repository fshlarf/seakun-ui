<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import axios from 'axios';
import CustomerService from '~/services/CustomerServices';

export default {
  // head() {
  //   return {
  //     // Menambahkan script ke bagian head dari halaman
  //     script: [
  //       {
  //         src: 'https://webchat.qontak.com/qchatInitialize.js',
  //         body: true,
  //       },
  //       {
  //         src: 'https://webchat.qontak.com/js/app.js',
  //         body: true,
  //       },
  //     ],
  //   };
  // },
  data() {
    return {
      CustomerService,
    };
  },
  mounted() {
    this.CustomerService = new CustomerService(this);
    // Melakukan inisialisasi webchat setelah DOM selesai dimuat
    // this.qchatInit();
    this.checkThrChallenge();
  },
  methods: {
    async checkThrChallenge() {
      let customer = localStorage.getItem('user_data');
      if (!customer) {
        await this.getCustomerDetail();
        customer = localStorage.getItem('user_data');
      }
      const thr = localStorage.getItem('thr_challenge');
      if (!thr) {
        await this.getThrDataFromSheet();
      }
    },
    async getCustomerDetail() {
      const { CustomerService } = this;
      try {
        const fetchCustomer = await CustomerService.getCustomerByUid();
        if (fetchCustomer.data) {
          const customerData = fetchCustomer.data.data;
          localStorage.setItem('user_data', JSON.stringify(customerData));
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getThrDataFromSheet() {
      try {
        const customer = JSON.parse(localStorage.getItem('user_data'));
        const scriptUrl =
          'https://script.google.com/macros/s/AKfycby9FuVbW_ybX3vWi7jN0-BtbT7R2JrQAvbMu9g-8TwD_XgwjrmI4UJVgaLcitZFx0Y_/exec' +
          '?columnName=email&filterValue=' +
          customer.email;
        const getSheetData = await axios.get(scriptUrl, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
        if (getSheetData.data && getSheetData.data.length > 0) {
          let thrs = [];
          getSheetData.data.map((item) => {
            const thr = {
              key: item.envelope,
              name: 'thr seakun',
            };
            thrs.push(thr);
          });
          localStorage.setItem('thr_challenge', JSON.stringify(thrs));
          await this.$store.dispatch('initializeTHREnvelopeFromLocalStorage');
        }
      } catch (error) {
        console.log(error);
      }
    },
    // qchatInit() {
    //   // Inisialisasi webchat setelah script dimuat
    //   const qchatInit = document.createElement('script');
    //   qchatInit.src = 'https://webchat.qontak.com/qchatInitialize.js';
    //   const qchatWidget = document.createElement('script');
    //   qchatWidget.src = 'https://webchat.qontak.com/js/app.js';
    //   document.head.prepend(qchatInit);
    //   document.head.prepend(qchatWidget);
    //   qchatInit.onload = function () {
    //     qchatInitialize({
    //       id: 'a300084d-a7c2-4f34-9ab4-77ec52955eaa',
    //       code: '5ATkEbe5k6lSryKx_vM45g',
    //     });
    //   };
    // },
  },
};
</script>

<style>
html {
  font-family: Montserrat !important;
  font-size: 16px;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>