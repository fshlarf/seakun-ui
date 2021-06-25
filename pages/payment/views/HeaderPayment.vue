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
           <div v-else-if="provider.toLowerCase() === 'sequrban'">
             <p class="title text-center text-lg px-2">
               Segera lakukan pembayaran agar Sequrban dapat mengumpulkan kamu ke grup yang sama dan memberikan informasi tentang proses qurban hingga pada hari H penyembelihan.
             </p>
           </div>
          <div  v-else-if="provider.toLowerCase() === 'netflix'" >
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
          <div  v-else-if="provider.toLowerCase() === 'spotify'" >
              <p class="title text-center text-lg px-2" v-if="packageId === 1" >
                Segera lakukan pembayaran agar Seakun.id dapat \
                langsung mengirimkan <b>Link invitation</b> plan paket Grup Spotify.\
                <b>Link invitation</b> akan dikirim ke Email dan Whatsapp yang kamu daftarkan.
              </p>
          </div>
          <ProductHighLightLoading
            v-if="detailPayment.loading"
          />
          <DetailOrderSequrban
            v-else-if="provider.toLowerCase() === 'sequrban'"
            :isLoading="detailPayment.loading"
            :type="detailPayment.data.type"
            :packageCode="detailPayment.data.packageCode"
            :unitWeight="detailPayment.data.unitWeight"
            :weight="detailPayment.data.weight"
            :downPayment="detailPayment.data.downPayment"
            :bulkingPrice="detailPayment.data.bulkingPrice"
          />
          <ProductHighLight
            v-else
            :provider="provider"
            :isLoading="detailPayment.loading"
            :packageName="detailPayment.data.name"
            :grandTotal="detailPayment.data.grandTotal"
            :totalMonth="detailPayment.data.totalMonth"
          />
          
        </div>
  </div>
</template>

<script>
import { currencyFormat } from '~/helpers/word-transformation.js' 
import DetailOrderSequrban from './DetailOrderSekurban.vue'
import ProductHighLightLoading from '~/components/mollecules/ProductHighlightLoading.vue'
import ProductHighLight from '~/components/mollecules/ProductHighLight.vue'

export default {
  name:'headerPayment',
  components : {
    DetailOrderSequrban,
    ProductHighLight,
    ProductHighLightLoading
  },
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

