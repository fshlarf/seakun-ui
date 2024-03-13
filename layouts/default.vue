<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
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
  mounted() {
    // Melakukan inisialisasi webchat setelah DOM selesai dimuat
    this.qchatInit();
  },
  methods: {
    qchatInit() {
      // Inisialisasi webchat setelah script dimuat
      const qchatInit = document.createElement('script');
      qchatInit.src = 'https://webchat.qontak.com/qchatInitialize.js';
      const qchatWidget = document.createElement('script');
      qchatWidget.src = 'https://webchat.qontak.com/js/app.js';
      document.head.prepend(qchatInit);
      document.head.prepend(qchatWidget);
      qchatInit.onload = function () {
        qchatInitialize({
          id: 'a300084d-a7c2-4f34-9ab4-77ec52955eaa',
          code: '5ATkEbe5k6lSryKx_vM45g',
        });
      };
    },
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
