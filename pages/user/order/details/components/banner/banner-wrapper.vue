<template>
  <div>
    <section v-if="status.value == 'Registered'">
      <ReminderPayment />
    </section>
    <section v-else-if="status.value == 'Pending'">
      <WarningIssued />
    </section>
  </div>
</template>

<script>
import ReminderPayment from './reminder-payment.vue';
import WarningIssued from './warning-issued .vue';
export default {
  components: {
    ReminderPayment,
    WarningIssued,
  },
  props: {
    status: {
      typeof: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
