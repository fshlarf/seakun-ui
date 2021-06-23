<template>
  <div>
        <div class="payment-illustration flex justify-center w-full">
            <img class="payment-illustration__img w-9/12" src="/images/thank-you.png" alt="Image not found" />
        </div>
        <h3 class="payment-thankyou text-2xl font-bold mt-10 text-center "> Thank You ! </h3>
        <div class="payment-order w-auto mt-8 box-border px-2 ">
          <!-- Loadingg shimmer -->
          <div v-if="detailPayment.loading" class="text-center"> 
             <p class="shimmer w-full"></p>
              <p class="shimmer w-9/12"></p>
             <p class="shimmer w-8/12"></p>
          </div>
           <!-- Loadingg shimmer end -->
          <div  v-if="provider.toLowerCase() === 'netflix'" >
              <p class="title text-center text-lg px-2" v-if="packageId === 1" >
                Karena kamu terdaftar sebagai User Host, admin Seakun.id akan memandu kamu untuk melakukan proses payment ke Netflix. 
                <a href="https://seakun.id/info/user-host"> Baca ketentuan User Host</a>.
                <br/><br/>Segera lakukan pembayaran agar Seakun.id bisa 
                langsung <b>mengalokasikan kamu pada grup Netflix yang available</b>, 
                <b>mencarikan teman berlangganan</b>, <b>memandu kamu untuk melakukan proses payment ke Netflix</b> dan <b>memproses akun Netflix</b>. 
                <br/><br/><b>Informasi Akun</b>, <b>Password</b> dan <b>Pin Profile</b> akan dikirim ke Email dan Whatsapp yang kamu daftarkan.
              </p>
              <p class="title text-center text-lg px-2" v-else-if="packageId === 2" >
                Segera lakukan pembayaran agar Seakun.id bisa 
                langsung mengalokasikan kamu pada grup Netflix yang available, 
                mencarikan teman berlangganan dan memproses akun Netflix untuk kamu. 
                <b>Informasi Akun</b>, <b>Password</b> dan <b>Pin Profile</b> akan dikirim ke Email dan Whatsapp yang kamu daftarkan.
              </p>
              <p class="title text-center text-lg px-2" v-else >
                Segera lakukan pembayaran agar Seakun.id dapat 
                langsung memproses akun Netflix untuk kamu. 
                <b>Informasi Akun</b>, <b>Password</b> <b>dan Pin Profile</b> akan dikirim ke Email dan Whatsapp yang kamu daftarkan.
              </p>
          </div>
          <div  v-if-else="provider.toLowerCase() === 'spotify'" >
              <p class="title text-center text-lg px-2" v-if="packageId === 1" >
                Segera lakukan pembayaran agar Seakun.id dapat \
                langsung mengirimkan <b>Link invitation</b> plan paket Grup Spotify.\
                <b>Link invitation</b> akan dikirim ke Email dan Whatsapp yang kamu daftarkan.
              </p>
          </div>

          <div class="order-detail bg-white shadow-md  mt-8 rounded-md items-center mx-2">
            <div class="order-detail__product px-4 pt-4 pb-2 grid grid-cols-5 gap-2 items-center">
              <div class="flex-1">
                <img class="detail-product__image w-9/12" :src="`/images/${provider.toLowerCase()}.png`" alt="Image not found" />
              </div>
              <div class="detail-product__price col-span-4 ml-4">
            
                <p v-if="detailPayment.loading" class="font-bold shimmer w-9/12"> </p>
                <p v-else class="font-bold"><span class="capitalize" >{{provider}} </span> - {{detailPayment.data.name}} </p>
                <p class="font-normal">{{currencyFormat(detailPayment.data.grandTotal)}} x ({{detailPayment.data.totalMonth}} Bulan)</p>
              </div>
            </div>
          <div class="order-detail__payment flex justify-between  px-4 py-3 border-t border-gray-50 ">
            <div>Total Pembayaran</div>
            <div>
               <p v-if="detailPayment.loading" class="shimmer w-4/12">
              </p>
              <template v-else>
                    {{currencyFormat(detailPayment.data.grandTotal)}}
              </template>
            </div>
          </div>
          </div>
        </div>
  </div>
</template>

<script>
import { currencyFormat } from '~/helpers/word-transformation.js' 
export default {
  name:'headerPayment',
  props : {
    provider : {
      type : String,
      default : ''
    },
    packageId : {
      type : Number,
      default : null
    },
    detailPayment : {
      type : Object,
      default : ()=>({
        loading : true,
        data : {}
      })
    },
    packageName : {
      type : String,
      default : '',
    },
    total : {
      type : String | Number,
      default : null
    }
  },
  data : ()=>({
    currencyFormat
  })
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
.detail-product {
  &__image {
    width: 120px;
    height: 80px;
    object-fit: contain;
  }
}
</style>

