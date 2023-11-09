import Vue from 'vue';

const showAlert = (data) => {
  const alertInstance = new Vue().$alert;
  if (alertInstance) {
    alertInstance.show(data);
  }
};

export default showAlert;
