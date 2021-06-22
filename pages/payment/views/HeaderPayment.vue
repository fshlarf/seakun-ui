<template>
  <div>
        <div class="payment-illustration flex justify-center w-full">
            <img class="payment-illustration__img w-9/12" src="/images/thank-you.png" alt="Image not found" />
        </div>
        <h3 class="payment-thankyou text-2xl font-bold mt-10 text-center "> Thank You ! </h3>
        <div class="payment-order w-auto mt-8 box-border px-2 ">
          <p class="title text-center text-lg px-2">Segera lakukan pembayaran agar Seakun.id blablabla</p>
          <div class="order-detail bg-white shadow-md  mt-8 rounded-md items-center mx-2">
            <div class="order-detail__product px-4 pt-4 pb-2 grid grid-cols-5 gap-2 ">
              <div class="flex-1">
                <img class="detail-product__imagage w-9/12" src="/images/icons/netflix.svg" alt="Image not found" />
              </div>
              <div class="detail-product__price col-span-4">
                <p class="font-bold">Microsoft 365 - Paket Premium Grup  (User Reg) </p>
                <p class="font-normal">Rp53.000 x (1 Bulan)</p>
              </div>
            </div>
          <div class="order-detail__payment flex justify-between  px-4 py-3 border-t border-gray-50 ">
            <div>Total Pembayaran</div>
            <div>Rp 53.000</div>
          </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.payment-thankyou {
  font-size: 32px;
}
.payment-order {
  p.title {
    font-size: 16px;
    font-weight: 400;
  }
}
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

