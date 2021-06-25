<template>
  <div class="container-payment max-w-2xl w-full mx-auto mt-20 px-4" >
    <div class="mt-10 pt-10 px-2">
        <h2 class="text-2xl font-bold">Pesanan</h2>
        <p class="text-lg mt-3">Silahkan isi terlebih dahulu sebelum melakukan pemesanan Copy</p>
    </div>
    <div class="flex justify-between items-center px-2 mt-10 mb-4">
      <p class="text-xl font-bold"> Produk Yang dipesan</p>
      <p class="text-lg text-green-seakun">Ubah Paket </p>
    </div>
    <div >
      <ProductHighLightLoading
        v-if="detailOrder.loading"
        class="mt-4"
      />
      <ProductHighLight
          v-else
          :provider="provider"
          :isLoading="detailOrder.loading"
          :packageName="detailOrder.data.name"
          :grandTotal="detailOrder.data.grandTotal"
          :totalMonth="detailOrder.data.totalMonth"
        />
    </div>
    <div class="mt-6 pt-10 px-2">
        <h2 class="text-xl font-bold">Informasi Pengguna</h2>
    </div>
    <div class="order-form">
      <InputForm
          label ="Nama Lengkap"
          placeholder="Masukan Nama"
          class="mt-4"
          v-model="userName"
        />
        <InputForm
          label ="Email"
          class="mt-4"
          placeholder="Masukan Email"
          v-model="email"
       />
       <div class="mt-4">
          <p class="pb-1">Nomer Hp</p>
          <div class="grid grid-cols-8 gap-2 items-center">
            <div class="col-span-2">
               <ButtonDrop
                   btnText="+62"
                   @click="isShowCodeNumber = !isShowCodeNumber"
               />
            </div>
            <div class="col-span-6">
               <InputForm
                 placeholder="Masukan Email"
                 v-model="phoneNumber"
               />
            </div>
          </div>
          <div class="w-9/12 mt-1 ">
            <DropdownCodeNumber
              :dataList="internationalPhoneNumbers"
              :show="isShowCodeNumber"
            />
          </div>
        </div>
        <div class="mt-4">
          <p class="pb-1">Pilih Masa Berlangganan</p>
           <ButtonDrop
            btnText="Pilih Masa Berlangganan"
            @click="isShowPriceList = !isShowPriceList"
          />
          <div class="w-full">
            <DropDownPricesListSubcribe
              :show="isShowPriceList"
              :dataList="pricesList"
            />
          </div>  
        </div>
        
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import ButtonDrop from '~/components/atoms/ButtonDropDownNew';
import ProductHighLightLoading from '~/components/mollecules/ProductHighlightLoading.vue'
import ProductHighLight from '~/components/mollecules/ProductHighLight.vue'
import InputForm from '~/components/atoms/Input.vue'
import DropdownCodeNumber from './views/DropdownCodeNumber.vue'
import DropDownPricesListSubcribe from './views/DropDownPricesListSubcribe.vue'
import { internationalPhoneNumbers } from '~/constants/code-phone.js'
import { currencyFormat } from '~/helpers/word-transformation.js' 

export default {
  name: "OrderPage",
  layout : 'navigationBlank',
  components : {
    ProductHighLightLoading,
    ProductHighLight,
    InputForm,
    ButtonDrop,
    DropdownCodeNumber,
    DropDownPricesListSubcribe
  },
  data:()=>({
    provider : '',
    packageId :'',
    detailOrder : {
      loading : true,
      data : {}
    },
    email :'',
    userName: '',
    phoneNumber:'',
    longSubcribe:'',
    isShowCodeNumber : false,
    isShowPriceList : false,
    pricesList : [],
    internationalPhoneNumbers,
    currencyFormat  
  }),
  created(){
    const { provider,packageId } =  this.$router.history.current.query
    if(provider){
      this.provider = provider
      this.packageId = packageId
      this.getOrderDetail()
    }

  },
  methods : {
    async getOrderDetail(){
      const {detailOrder} = this
      this.detailOrder = {
        ...detailOrder,
        loading : true
      }
      try {
        const fetchGetDetailOrder = await axios.get(
          `https://seakun-packet-api-v2.herokuapp.com/${this.provider.toLowerCase()}/${this.packageId}`
        )
        if(fetchGetDetailOrder.status == 200){
          const {data} = fetchGetDetailOrder
          this.detailOrder ={
            ...detailOrder,
           data
          }
          if(data.prices){
            this.pricesList = data.prices?.map(value => ({
              ...value,
              name :`${value.month} bulan ( ${currencyFormat(value.price)} )`
            }))
          }

        }
        
      } catch (error) {
          console.log(error)
      }

       this.detailOrder = {
        ...this.detailOrder,
        loading : false
      }
    }
  }

}
</script>

<style>

</style>