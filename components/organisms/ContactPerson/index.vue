<template>
  <div class="cp">
    <div class="container">
      <div class="cp__title">
        <p>Perlu <b>BANTUAN?</b> Hubungi Kami : <b>+6282124852227</b></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cp {
  padding: 20px 0px;
  background-color: #daeeef;
  color: #2f524b;
  .container {
    max-width: 1120px !important;
    margin: 0 auto !important;
    display: flex;
  }
  &__title {
    width: 75%;
    p {
      font-weight: 300 !important;
      font-size: 24px;
      margin: 0px;
    }
  }
}
@media (max-width: 800px) {
  .cp {
    padding: 16px 8px;
    .container {
      display: block !important;
    }
    &__title {
      width: 100%;
      p {
        font-size: 15px !important;
      }
    }
    &__channel {
      width: fit-content;
      margin: 0 auto;
    }
  }
}
</style>
