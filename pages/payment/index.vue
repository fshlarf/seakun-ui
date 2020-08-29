<template>
    <div class="payment">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="payment__img">
                        <img src="/images/thank-you.png" alt="Image not found" />
                    </div>
                    <h3 class="payment__header-h3">Thank You!</h3>
                    <p>Segera lakukan pembayaran untuk memulai masa berlanggananmu</p>
                    <div class="box">
                        <div class="row">
                            <div class="col box-title">Provider</div>
                            <div class="col col-lg-1">:</div>
                            <div class="col box-item">{{ provider }}</div>
                        </div>
                        <div class="row mt-1">
                            <div class="col box-title">Paket</div>
                            <div class="col col-lg-1">:</div>
                            <div class="col box-item">{{ packet }}</div>
                        </div>
                        <div class="row mt-1">
                            <div class="col box-title">Metode Pembayaran</div>
                            <div class="col col-lg-1">:</div>
                            <div class="col box-item">Bank Transfer</div>
                        </div>
                        <div class="row mt-1">
                            <div class="col box-title">Bank Tujuan</div>
                            <div class="col col-lg-1">:</div>
                            <div class="col box-item">Mandiri</div>
                        </div>
                        <div class="row mt-1">
                            <div class="col box-title">Nomor Rekening</div>
                            <div class="col col-lg-1">:</div>
                            <div class="col box-item">115007389705</div>
                        </div>
                        <div class="row mt-1">
                            <div class="col box-title">Nama Rekening</div>
                            <div class="col col-lg-1">:</div>
                            <div class="col box-item">PT. Trivamas Tekno Solusindo</div>
                        </div>
                        <div class="row mt-1">
                            <div class="col box-title">Total Pembayaran</div>
                            <div class="col col-lg-1">:</div>
                            <div class="col box-item">{{ formatMoneyRupiah(total) }}</div>
                        </div>
                    </div>
                    <p>
                        Setelah melakukan pembayaran,
                        <br />kirimkan bukti pembayaran ke Whatsapp Seakun.id
                        <b>085774642738</b>
                    </p>
                    <p>Akun akan segera diproses setelah proses pembayaran selesai</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            provider: "",
            packet: "",
            total: "-",
        };
    },
    mounted() {
        this.getPaymentDetail()
    },
    methods: {
        formatMoneyRupiah(num) {
            if (num) {
                return `Rp${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`
            } else if (num == 0 ) {
                return `Rp${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`
            }
        },
        getPaymentDetail() {
            const { provider, packet } = this.$router.history.current.query
            
            const isNetflix = provider.toLowerCase() === 'netflix'
            // const isSpotify = provider.toLowerCase() === 'spotify'

            this.provider = provider,
            this.packet = packet
            
            axios
                .get(`https://seakun-packet-api.herokuapp.com/${isNetflix ? 'netflix' : 'spotify'}?name=${packet}`)
                .then(res => {
                    const { data, status } = res
                    if (status === 200) {
                        this.total = data?.[0]?.grandTotal ?? '-'
                    }
                })
        }
    }
};
</script>

<style lang="scss" scoped>
.payment {
    padding: 40px 40px !important;
    background: #e5e5e5;

    .container {
        background: white;
        border-radius: 10px;
    }
    .box {
        border: 1px solid #86d0c1;
        border-radius: 4px;
        padding: 16px;
        margin-left: 250px !important;
        margin-right: 250px !important;
    }
    .col {
        text-align: center;
        &.box {
            &-title {
                text-align: left;
                font-weight: 700;
            }
            &-item {
                text-align: left;
            }
        }
        h3 {
            margin-top: 20px !important;
            margin-bottom: 20px !important;
            font-weight: 700;
        }
        p {
            margin: 0 auto;
            max-width: 600px;
            margin-top: 30px;
            margin-bottom: 40px;
        }
        b {
            font-weight: 700;
        }
    }
    .container {
        max-width: 1120px !important;
        font-weight: 500 !important;
        margin: 0 auto !important;
    }
    &__img {
        img {
            width: 40rem;
        }
    }
    .row {
        padding: 0px 8px !important;
    }
}
@media (max-width: 800px) {
    .payment {
        padding: 0px 0px !important;
        margin-top: 180px;
        &__img {
            text-align: center;
            margin-top: 20px;
        }
        &__header {
            &-h3 {
                font-size: 22px;
                margin-top: 16px;
            }
        }
        img {
            width: 180px !important;
            margin: 16px auto;
        }
        .row {
            display: block;
        }
        h2 {
            font-size: 20px;
        }
    }
}
@media only screen and (min-width: 880px) and (max-width: 1020px) {
    .container {
        display: contents !important;
    }
}
</style>