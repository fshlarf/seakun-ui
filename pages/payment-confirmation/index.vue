<template>
<div class="container max-w-xl w-full mx-auto mt-10 bg-white py-8">
    <div class="wrapper-form w-full bg-white rounded-xl shadow-xl  py-4 px-4">
        <div class="header-confirmation">
            <h3 class="font-bold text-2xl">Konfirmasi Pembayaran</h3>
            <p class="my-3">
                Silahkan Isi Terlebih Dahulu sebelum memasukan pemesanan
            </p>
            <div class="order-code bg-green-seakun-secondary w-full flex justify-between px-3 py-2">
                <p class="order-code__label"> Kode pemesanan </p>
                <p class="order-code__code text-green-seakun-dark font-bold">NET100002020</p>
            </div>
        </div>
        <div class="form-confirmation mt-7">
            <div>
                <InputForm
                    label ="Tujuan Pembayaran"
                    placeholder="Pilih Bank Tujuan"
                    @click="showPaymentList('bankDirection')"
                    :value="bankSeakun"
                    v-model="bankSeakun"
                >
                    <template #iconLeft>
                        <DownArrowIcon/>
                    </template>
                </InputForm>
                <PopUpPayment 
                    :dataList="paymentDestinationList" 
                    :show="paymenDestination"
                     @onClickItem="(value) => {onClickItemBank('bankDirection',value)}"
                    />
            </div>
            

            <div>
                <InputForm
                    label ="Metode Pembayaran"
                    placeholder="Pilih Bank Yang Digunakan"
                    v-model="bankCustomer"
                    :value="bankCustomer"
                    @click="showPaymentList('paymentUsage')"
                >   
                    <template #iconLeft>
                        <DownArrowIcon/>
                    </template>
                </InputForm>
                <PopUpPayment  
                    :dataList="paymentDestinationList" 
                    :show="paymentUsage" 
                    @onClickItem="(value) => {onClickItemBank('paymentUsage',value)}"
                    />
            </div>
            
             <InputForm
                label ="Nama Pemilik Rekening"
                placeholder="Masukan Nama Pemilik Rekening"
                v-model="accountName"
            >
            </InputForm>
            <div class="my-4">
                <p>Tanggal Pembayaran</p>
                <DatePicker class="datepicker" v-model="time1" valueType="format"></DatePicker>
            </div>

            <UploadPayment
                label ="Upload Pembayaran"
                name="paymetNote"

            />

            <Button class="w-full bg-green-seakun text-white" label="Simpan"/>
        </div>
    </div>
</div>
  <!-- <div class="container container-payment max-w-xl w-full mx-auto mt-10 bg-white">

  </div> -->
</template>

<script>
import InputForm from '~/components/atoms/Input.vue'
import DownArrowIcon from '~/assets/images/icon/down-arrow.svg?inline';
import Button from '~/components/atoms/Button';
import PopUpPayment from './views/PopUpPaymentMethod.vue'
import UploadPayment from './views/UploadPayment.vue'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import moment from 'moment'
import Input from '../../components/atoms/Input.vue';


export default {
    name:'paymentConfirmation',
    components : {
        InputForm,
        DownArrowIcon,
        PopUpPayment,
        Button,
        UploadPayment,
        DatePicker,
        Input
    },
    data : () => ({
        moment,
        accountName: '',
        bankSeakun : '',
        bankCustomer : '',
        dateTime: null,
        photoUrl : '',
        paymenDestination : false,
        paymentUsage : false,
        paymentDestinationList : {
            transferBank : [
                {
                    name : 'BCA',
                    value : 'bca'
                },
                 {
                    name : 'Mandiri',
                    value : 'mandiri'
                },
                 {
                    name : 'Bri',
                    value : 'bca'
                }
            ],
            virtiualPayment : [
                {
                    name : 'OVO',
                    value : 'ovo'
                },
                {
                    name : 'GoPay',
                    value : 'gopay'
                }
            ]
        },
        time1: moment().format('YYYY-MM-DD').toString()
    }),
    methods: {
        showPaymentList(type){
            if(type == 'bankDirection'){
                this.paymenDestination = !this.paymenDestination
            }

            if(type == 'paymentUsage'){
                this.paymentUsage = !this.paymentUsage
            }
        },
        onClickItemBank(type,value){
            console.log('ress',value)
            if(type == 'bankDirection'){
                this.bankSeakun = value.name
                this.paymenDestination = false
            }

            if(type == 'paymentUsage'){
                this.bankCustomer = value.name
                this.paymentUsage = false

            }
        }
    },
    layout : 'navigationBlank'

}
</script>

<style lang="scss">

.datepicker{
    width: 100% !important;
    input {
        padding : 20px 20px;
        margin-top:15px;
    }
    svg {
        margin-top: 16px;
    }
}
</style>