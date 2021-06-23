<template>
  <section>
      <Snackbar ref="snackbar"/>
      <div class="payment-detail text-center mt-16">
            <p class="payment-detail__label my-3 text-xl">Total transfer</p>
            <p class="payment-detail__price my-3 text-xl" @click="clickCopyHandler('nominal',50023)"> Rp 50.<span>023 <CopyIcon/></span></p>
            <p class="payment-detail__alert my-3">Pastikan nominal sesuai hingga 3 digit terakhir </p>
        </div>
        <div class="payment-method">
          <h3 class="payment-method__title text-center text-bold mt-6">Transerfer Ke</h3>
          <div class="payment-method__options grid grid-cols-2  gap-1 px-4 py-6">
            <div class="payment-options bg-white shadow-md w-full rounded-md py-6 px-4 flex flex-column justify-center items-center">
              <img src="/images/payment/mandiri.png" class="w-8/12 my-2" />
              <p class="mt-4 payment-options__norek text-sm font-bold" @click="clickCopyHandler('rekening','1150046427383')">1150046427383 <span class="ml-1"> <CopyIcon/></span></p>
              <p  class="my-1 payment-options__account-name text-sm">PT.Seakun Global</p>
            </div>
             <div class="payment-options bg-white shadow-md w-full rounded-md py-6 px-4 flex flex-column justify-center items-center">
              <img src="/images/payment/bca.png" class="w-8/12 my-2" />
              <p class="mt-4 payment-options__norek text-sm font-bold" @click="clickCopyHandler('rekening','7660777738')">7660777738 <span class="ml-1"> <CopyIcon/></span></p>
              <p  class="my-1 payment-options__account-name text-sm">PT.Seakun Global</p>
            </div>
             <div class="payment-options bg-white shadow-md w-full rounded-md py-6 px-4 flex flex-column justify-center items-center">
              <img src="/images/payment/gopay.png" class="w-8/12 my-2" />
              <p class="mt-4 payment-options__norek text-sm font-bold" @click="clickCopyHandler('rekening','11231231232')">11231231232 <span class="ml-1"> <CopyIcon/></span></p>
              <p  class="my-1 payment-options__account-name text-sm">Seakun ID / Eka Pusna</p>
            </div>
             <div class="payment-options bg-white shadow-md w-full rounded-md py-6 px-4 flex flex-column justify-center items-center">
              <img src="/images/payment/ovo.png" class="w-8/12 my-2" />
              <p class="mt-4 payment-options__norek text-sm font-bold" @click="clickCopyHandler('rekening','085774642738')">085774642738 <span class="ml-1"> <CopyIcon/></span></p>
              <p  class="my-1 payment-options__account-name text-sm">Seakun ID / Eka Pusna</p>
            </div>
            <div class="payment-options bg-white shadow-md w-full rounded-md py-6 px-4 flex flex-column justify-center items-center">
              <img src="/images/payment/link-aja.png" class="w-8/12 my-2" />
              <p class="mt-4 payment-options__norek text-sm font-bold" @click="clickCopyHandler('rekening','085774642738')">085774642738 <span class="ml-1"> <CopyIcon/></span></p>
              <p  class="my-1 payment-options__account-name text-sm">Seakun ID / Eka Pusna</p>
            </div>
             <div class="payment-options bg-white shadow-md w-full rounded-md py-6 px-4 flex flex-column justify-center items-center">
              <img src="/images/payment/dana.png" class="w-8/12 my-2" />
              <p class="mt-4 payment-options__norek text-sm font-bold" @click="clickCopyHandler('rekening','085774642738')">085774642738 <span class="ml-1"> <CopyIcon/></span></p>
              <p  class="my-1 payment-options__account-name text-sm">Seakun ID / Eka Pusna</p>
            </div>

          </div>
        </div>
  </section>
</template>

<script>
import Snackbar from '~/components/mollecules/Snackbar.vue'
import CopyIcon from '~/assets/images/icon/copy.svg?inline';

export default {
    name: "DetailPayment",
    components : {
        Snackbar,
        CopyIcon
    },
    methods : {
        
        clickCopyHandler(name,value) {
           navigator.clipboard.writeText(value).then(
            () => {
              this.$refs.snackbar.showSnackbar({
                 message : `${name} Berhasil Dicopy`,
                className : '',
              })
            },
            (err) => console.log(err)
          );
        },
    }
}
</script>
<style lang="scss" scoped>
.payment-detail{
  &__label {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: rgba(54, 54, 54, 0.5);  
}
  &__price {
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 31px;
    color: #2F2A32;
    span {
      color: #8DCABE
    }
    svg {
      width: 16px;
      height: auto;
      display: inline-block;
      fill: #8DCABE;
      margin-top: -8px;
      cursor: pointer;
    }
  }

  &__alert {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #363636;
  }
}
.payment-options {
  img {
    height: 60px;
    width: 120px;
    object-fit: contain;
  }
  &__norek{
    span {
      display: inline-block;
    }
    svg {
      width: 12px;
      height: auto;
      display: inline-block;
      fill: #8DCABE;
      margin-top: -8px;
      cursor: pointer;
    }

  }
}
</style>