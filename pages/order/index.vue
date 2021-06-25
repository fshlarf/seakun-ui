<template>
  <div class="container-payment max-w-2xl w-full mx-auto mt-20 px-4 pb-20" >
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
          :error="errorForm.name"

        />
        <InputForm
          label ="Email"
          class="mt-4"
          placeholder="Masukan Email"
          :error="errorForm.email"
          v-model="email"
       />
       <div class="mt-4">
          <p class="pb-1">Nomer Hp</p>
          <div class="grid grid-cols-8 gap-2 items-center">
            <div class="col-span-2">
               <ButtonDrop
                   :btnText="codeNumber"
                   @click="isShowCodeNumber = !isShowCodeNumber"
               />
            </div>
            <div class="col-span-6">
               <InputForm
                 placeholder="Masukan telepon"
                 v-model="phoneNumber"
                 :error="errorForm.phoneNumber"
               />
            </div>
          </div>
          <div class="w-9/12 mt-1 ">
            <DropdownCodeNumber
              :dataList="internationalPhoneNumbers"
              :show="isShowCodeNumber"
              @onClikcItem="onClickItemCodeNumber"
            />
          </div>
        </div>
        <div class="mt-4">
          <p class="pb-1">Pilih Masa Berlangganan</p>
           <ButtonDrop
            :btnText="longSubcribe.name"
            :disabled="pricesList.length <= 0"
            @click="isShowPriceList = !isShowPriceList"
          />
          <div class="w-full">
            <DropDownPricesListSubcribe
              :show="isShowPriceList"
              :dataList="pricesList"
              @onClikcItem="onClickItemPrice"
            />
          </div>  
        </div>
         <div class="ml-4 mt-6">
            <input class="form-check-input" type="checkbox" v-model="isAgreeTos">
            <label class="form-check-label ml-2" for="checkbox">
              Menyetujui <nuxt-link class="text-green-seakun" to="/terms-of-use">aturan</nuxt-link> yang dibuat oleh seakun
            </label>
        </div>
        <Voucher
          class="mt-4"
        />
        
        <Button :disabled="!isAgreeTos" @click="submitOrder" class="w-full bg-green-seakun text-white py-2 mt-8" label="Konfirmasi pesanan"/>

        <Loading v-if="isShowLoading"/>
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
import Voucher from './views/Voucher.vue'
import Button from '~/components/atoms/Button';
import DropDownPricesListSubcribe from './views/DropDownPricesListSubcribe.vue'
import { internationalPhoneNumbers } from '~/constants/code-phone.js'
import { currencyFormat ,capitalizeFirstLetter ,fullDate} from '~/helpers/word-transformation.js' 
import Loading from '~/components/mollecules/Loading.vue'
export default {
  name: "OrderPage",
  layout : 'navigationBlank',
  components : {
    ProductHighLightLoading,
    ProductHighLight,
    InputForm,
    ButtonDrop,
    Button,
    DropdownCodeNumber,
    DropDownPricesListSubcribe,
    Voucher,
    Loading
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
    longSubcribe:{
      name : 'Pilih Masa Berlangganan',
      month : '',
      price : 0,
    },
    isShowLoading : false,
    codeNumber : '+62',
    isShowCodeNumber : false,
    isShowPriceList : false,
    pricesList : [],
    isAgreeTos : false,
    internationalPhoneNumbers,
    currencyFormat ,
    errorForm : {
      email : {
        isError : false,
        message : '',
      },
      name : {
        isError : false,
        message : ''
      },
      phoneNumber : {
        isError : false,
        message : ''
      }
    }
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
            this.longSubcribe = this.pricesList[0]
          }

        }
        
      } catch (error) {
          console.log(error)
      }

       this.detailOrder = {
        ...this.detailOrder,
        loading : false
      }
    },
    onClickItemCodeNumber(item){
      this.codeNumber = item.dialCode
      this.isShowCodeNumber = false
    },  
    onClickItemPrice(item){
      this.longSubcribe = item
      this.detailOrder ={
        ...this.detailOrder ,
        data :{
          ...this.detailOrder.data,
          grandTotal : item.price,
          totalMonth : item.month
        }
      }
      this.isShowPriceList = false
    },
    validationForm() {
      const { email, userName,phoneNumber ,errorForm} = this
      let isValid = true
      let errorTemp =  {
          email : {
            isError : false,
            message : '',
          },
          name : {
            isError : false,
            message : ''
          },
          notelp : {
            isError : false,
            message : ''
          }
      }
      if(email === '') {
        errorTemp.email ={
            isError : true,
            message : 'Email Harus Di isi'
        }
        isValid = false
      }else if(!this.validateEmail(email)){
          errorTemp.email ={
            isError : true,
            message : 'Format Email Salah'
          }
          isValid = false
      }


      if(userName === ''){
        errorTemp.name = {
          isError : true,
          message :"Name Harus Di Isi"
        }
        isValid = false
      }

      if(phoneNumber === '' && !/\D/.test(phoneNumber)){
          errorTemp.phoneNumber = {
            isError : true,
            message : "Nomer Telepon harus disi dengan format yang benar"
        }
      }
     
     this.errorForm = {...errorTemp}
     return isValid

    },
    submitOrder() {
      if(this.validationForm()){
       this.postRegisteredUser()
      }
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    async postRegisteredUser() {
      this.isShowLoading = true

      let payload = {
        fullname: capitalizeFirstLetter(this.userName),
        email: this.email,
        whatsapp: `${this.codeNumber}${this.phoneNumber}`,
        provider: this.provider.toLowerCase() === 'disney+ hotstar' ? 'disney-hotstar' : this.provider,
        packet: this.packageId,
        price: this.price,
        discountprice:'',
        userhost: this.detailOrder.data.userHost,
        referalcode: '',
        voucher: '',
        createddate: fullDate(),
        ispreorder: this.detailOrder.data.isPreOrder,
        total_month: this.detailOrder.data.totalMonth,
        total_year: this.detailOrder.data.totalYear,
        linkwhatsapp: `https://api.whatsapp.com/send?phone=${this.codeNumber}${this.codeNumber}`
      };
      const headers = { 'Access-Control-Allow-Origin': '*' };
      try {
        const fetchPostUser = await axios.post('https://seakun-api.herokuapp.com/registered-user', payload, {
          headers: headers,
        })
        if(fetchPostUser.status == 200){
            this.executeApiMailSeakun(payload);
            this.isShowLoading = false
        }else {
          throw fetchPostUser
        }
 
      } catch (error) {
          console.log(error);
      }

      this.isShowLoading = false

    },
    executeApiMailSeakun(payload) {
      let newPayload = {
        ...payload,
        payment_type: this.detailOrder.data.paymentType,
      };
      axios
        .post('https://seakun-mail-api-v2.herokuapp.com/', newPayload)
        .then((res) => {
          this.isDisableBtn = false;
          // Redirect to thankyou page when successfully registration
          this.$router.push({
            path: '/payment',
            query: {
              provider: this.provider,
              packet_id: this.packageId,
              // voucher: this.isVoucherValid ? this.voucher : '',
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    

    
  }

}
</script>

<style lang="scss">
.form-check-input{
    width: 18px;
    height: 16px;
}
.voucher{
  background: #EFEFEF;
  font-size: 16px;
  &__label {
    svg {
      width: 16px;
      display: inline-block;
      height: auto;
    }
  }
  &__action {
     svg {
      width: 16px;
      display: inline-block;
      height: auto;
      fill:rgba(107, 114, 128, var(--tw-text-opacity));
    }
  }
}

</style>