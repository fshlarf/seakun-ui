<template></template>

<script>
export default {
  name: 'PrivacyPolicyPage',
  created() {
    this.$router.push('/terms-of-use?show=privacy-policy');
  },
};
</script>
