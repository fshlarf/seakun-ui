// plugins/qontak-webchat.js
const qchatInit = document.createElement('script');
qchatInit.src = 'https://webchat.qontak.com/qchatInitialize.js';
const qchatWidget = document.createElement('script');
qchatWidget.src = 'https://webchat.qontak.com/js/app.js';
document.head.prepend(qchatInit);
document.head.prepend(qchatWidget);
qchatInit.onload = function () {
  qchatInitialize({
    id: '36b9aebd-1fd6-45f6-8f0c-e2e0e81ffb4e',
    code: 'GE-XnOitijajxKYbWA54-g',
  });
};
