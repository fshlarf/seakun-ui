<template>
    <div>
        <Header />
        <div class="payment">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="payment__img">
                            <img src="/images/thank-you.png" alt="Image not found" />
                        </div>
                        <h3 class="payment__header-h3">Thank You!</h3>
                        <p>
                            Terima kasih telah melakukan pendaftaran.
                            <br />Paket ini adalah paket Pre-Order dimana akun akan dibuat setelah
                            member dalam satu grup telah terkumpul 5 orang.
                        </p>
                        <div class="box">
                            <div class="row">
                                <div class="col box-title">Provider</div>
                                <div class="col col-lg-1">:</div>
                                <div class="col box-item">-</div>
                            </div>
                            <div class="row mt-1">
                                <div class="col box-title">Paket</div>
                                <div class="col col-lg-1">:</div>
                                <div class="col box-item">-</div>
                            </div>
                            <div class="row mt-1">
                                <div class="col box-title">Harga</div>
                                <div class="col col-lg-1">:</div>
                                <div class="col box-item">Rp-</div>
                            </div>
                        </div>
                        <p>
                            Pembayaran akan dilakukan setelah satu grup full dan akun telah dibuat.
                            <br />Pastikan nomor Whatsapp kamu aktif, kamu akan dihubungi
                            <br />oleh Admin melalui Whatsapp untuk proses selanjutnya.
                            <br />Hubungi Admin
                            <a
                                href="https://api.whatsapp.com/send?phone=6285774642738"
                            >085774642738</a>
                        </p>
                        <p>
                            <a
                                href="/info/pre-order"
                                target="_blank"
                            >Baca ketentuan Pre-Order selengkapnya</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
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
        position: absolute !important;
        max-width: 200px !important;
        left: 30% !important;
        top: 60% !important;
        margin-left: 0px !important;
    }
    .payment {
        padding: 50px 0px 0px !important;
        // margin-top: 18px;
        Ï &__img {
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