import Vue from 'vue';
import AlertComponent from '~/components/mollecules/alert';

const AlertPlugin = {
  install(Vue) {
    const AlertConstructor = Vue.extend(AlertComponent);
    const alertInstance = new AlertConstructor();
    alertInstance.$mount();

    Vue.prototype.$alert = {
      show(data) {
        alertInstance.showAlert(data);
      },
    };

    document.body.appendChild(alertInstance.$el);
  },
};

Vue.use(AlertPlugin);
