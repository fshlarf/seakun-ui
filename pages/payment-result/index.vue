<template>
  <div>
    <SuccessPayment v-if="result == 'true'" />
    <FailedPayment v-else />
  </div>
</template>
<script>
import SuccessPayment from './views/SuccessPayment.vue';
import FailedPayment from './views/FailedPayment.vue';

export default {
  name: 'PaymentResult',
  layout: 'new',
  components: {
    SuccessPayment,
    FailedPayment
  },
  data: () => ({
    result: false,
  }),
  mounted() {
    const { success } = this.$router.history.current.query;
    this.result = success;
  },
};
</script>
