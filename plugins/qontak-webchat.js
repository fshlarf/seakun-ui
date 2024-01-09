// plugins/qontak-webchat.js
const qchatInit = document.createElement('script');
qchatInit.src = 'https://webchat.qontak.com/qchatInitialize.js';
const qchatWidget = document.createElement('script');
qchatWidget.src = 'https://webchat.qontak.com/js/app.js';
document.head.prepend(qchatInit);
document.head.prepend(qchatWidget);
qchatInit.onload = function () {
  qchatInitialize({
    id: 'bf95722f-ce4d-47b6-b9d3-cc3fd1bd98f8',
    code: 'hQFtCSQDQOLCQCdC6uTgGQ',
  });
};
