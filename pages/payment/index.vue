<template>
    <div>
        <Header />
        <div class="payment">
            <transition name="slide-fade">
                <div v-if="showSnackBar" id="snackbar">
                    <span style="text-align: end;" @click="showSnackBar = false">&times;</span>
                    <p>Rekening disalin</p>
                </div>
            </transition>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="payment__img">
                            <img src="/images/thank-you.png" alt="Image not found" />
                        </div>
                        <h3 class="payment__header-h3">Thank You!</h3>
                        <p v-html="setWordingInformation(provider, packet)"></p>
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
                                <div
                                    id="noRek"
                                    class="col box-item-noRek"
                                    @click="handleCopyRekening"
                                >
                                    1150007389705 &nbsp;&nbsp;
                                    <i class="fa fa-copy"></i>
                                </div>
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
                            <a href="https://api.whatsapp.com/send?phone=6285774642738">085774642738.</a>
                        </p>
                        <p>
                            Proses yang dilakukan sekitar 10 menit sampai paling lama 120 menit setelah bukti pembayaran dikirimkan ke whatsapp Seakun.id.
                            <br>
                            Mohon ditunggu karena proses payment ke provider butuh waktu beberapa menit dan butuh verifikasi data.
                        </p>
                        <p>
                            <i>Note: Untuk alternatif pembayaran e-Wallet, bisa langsung hubungi Whatsapp admin Seakun.id</i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import axios from "axios";
import Header from "~/components/mollecules/Header";
import Footer from "~/components/organisms/Footer";

export default {
    component: {
        Header: Header,
        Footer: Footer,
    },
    data() {
        return {
            provider: "",
            packet: "",
            total: "-",
            showSnackBar: false,
            vouchersData: []
        };
    },
    mounted() {
        this.getPaymentDetail();
        this.getVouchersData()
    },
    methods: {
        setWordingInformation(provider, packet) {
            if (provider.toLowerCase() == 'netflix') {
                if (packet == 'Paket Premium Grup') {
                    return 'Segera lakukan pembayaran agar Seakun.id bisa \
                        langsung mengalokasikan kamu pada grup Netflix yang available, \
                        mencarikan teman berlangganan dan memproses akun Netflix untuk kamu. \
                        <b>Informasi Akun</b>, <b>Password</b> dan <b>Pin Profile</b> akan dikirim ke Email dan Whatsapp yang kamu daftarkan.'
                } else if (packet == 'Paket Premium Grup User Host') {
                    return 'Segera lakukan pembayaran agar Seakun.id bisa \
                        langsung mengalokasikan kamu pada grup Netflix yang available, \
                        mencarikan teman berlangganan dan memproses akun Netflix untuk kamu. \
                        <br/><br/>Karena kamu terdaftar sebagai User Host, admin Seakun.id akan memandu kamu untuk melakukan proses payment ke Netflix. \
                        <a href="https://seakun.id/info/user-host">Ketentuan User Host</a>.\
                        <br/><b>Informasi Akun</b>, <b>Password</b> dan <b>Pin Profile</b> akan dikirim ke Email dan Whatsapp yang kamu daftarkan.'
                } else {
                    return 'Segera lakukan pembayaran agar Seakun.id dapat \
                        langsung memproses akun Netflix untuk kamu. \
                        <b>Informasi Akun</b>, <b>Password</b> dan Pin Profile</b> akan dikirim ke Email dan Whatsapp yang kamu daftarkan.'
                }
            } else if (provider.toLowerCase() == 'spotify') {
                if (packet == 'Paket Premium Grup') {
                    return 'Segera lakukan pembayaran agar Seakun.id dapat \
                        langsung mengirimkan <b>Link invitation</b> plan paket Grup Spotify.\
                        <b>Link invitation</b> akan dikirim ke Email dan Whatsapp yang kamu daftarkan.'
                }
            }
        },
        handleCopyRekening() {
            const text = "1150007389705";

            navigator.clipboard.writeText(text).then(
                () => {
                    this.showSnackBar = true;
                    setTimeout(() => {
                        this.showSnackBar = false;
                    }, 2000);
                },
                (err) => console.log(err)
            );
        },
        formatMoneyRupiah(num) {
            if (num) {
                return `Rp${num
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`;
            } else if (num == 0) {
                return `Rp${num
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`;
            }
        },
        getPaymentDetail() {
            const { provider, packet, voucher } = this.$router.history.current.query;

            const isNetflix = provider.toLowerCase() === "netflix";
            // const isSpotify = provider.toLowerCase() === 'spotify'

            (this.provider = provider), (this.packet = packet);

            axios
                .get(
                    `https://seakun-packet-api-v1.herokuapp.com/${
                        isNetflix ? "netflix" : "spotify"
                    }?name=${packet}`
                )
                .then((res) => {
                    const { data, status } = res;
                    if (status === 200) {
                        if (voucher) {
                            setTimeout(() => {
                                this.checkValidVoucher(this.vouchersData, data?.[0], voucher)
                            }, 500);
                        } else {
                            this.total = data?.[0].grandTotal
                        }
                    }
                });
        },
        getVouchersData() {
            axios.get('https://seakun-packet-api-v1.herokuapp.com/vouchers')
            .then(res => {
                this.vouchersData = res.data
            })
            .catch(err => {
                console.log(err)
            })
        },
        checkValidVoucher(vouchersData, dataPacket, voucher) {
            let validateArray = []
            vouchersData.map (e => {
                e.voucher_code == voucher.toLowerCase() && e.active ? validateArray.push(1) : validateArray.push(0)
            })
            validateArray.sort().reverse()
            validateArray[0] == 1 ? this.total = dataPacket.voucherGrandTotal : this.total = dataPacket.grandTotal
        }
    },
};
</script>

<style lang="scss" scoped>
.payment {
    padding: 100px 40px 50px !important;
    background: #e5e5e5;

    .container {
        background: white;
        border-radius: 10px;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
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
                &-noRek {
                    cursor: pointer;
                    text-align: left;
                    &:hover {
                        color: #86d0c1;
                    }
                }
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
        a {
            font-weight: 700;
            color: #2895FF;
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
    #snackbar {
        background-color: #daeeef;
        color: #2f524b;
        text-align: center;
        border-radius: 4px;
        padding: 16px;
        position: fixed;
        z-index: 1;
        top: 100px;
        font-size: 17px;
        margin: 0 auto;
        max-width: 600px;
        left: 65%;
        margin-left: -300px;
        font-weight: 400;
        display: grid;
        button {
            margin-top: 0px !important;
            margin-bottom: 10px !important;
        }
        span {
            font-size: 28px;
            font-weight: 700;
            cursor: pointer;
            padding: 0px 12px;
        }
    }
}
@media (max-width: 800px) {
    #snackbar {
        position: absolute!important;
        max-width: 200px !important; 
        left: 30%!important; 
        top: 60%!important;
        margin-left: 0px!important; 
    }
    .payment {
        padding: 50px 0px 0px !important;
        // margin-top: 18px;
    Ï   &__img {
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
            width: 330px !important;
            margin: 16px auto;
        }
        h2 {
            font-size: 20px;
        }
        .box {
            margin-left: 0px !important;
            margin-right: 0px !important;
            font-size: 13px;
        }
        .col-lg-1 {
            max-width: 10px;
        }
    }
}
@media only screen and (min-width: 880px) and (max-width: 1020px) {
    .container {
        display: contents !important;
    }
}
</style>