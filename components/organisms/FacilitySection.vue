<template>
    <div class="facility">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h3 class="facility__header-h3">Mengapa Kamu Perlu Menggunakan Seakun.id?</h3>
                    <p>Ada banyak kemudahan yang kami berikan jika menggunakan layanan kami, diantaranya sebagai berikut.</p>
                    <div class="facility__content">
                        <div class="facility__content-content">
                            <h4>Memudahkan Mencari Teman yang Satu Hobi dan Satu Keinginan</h4>
                            <p>
                                Kami memberikan kemudahan kepada kamu untuk menemukan teman satu hobi dann satu keinginan
                                untuk berlangganan Provider Entertainment seperti Netflix, Spotify, Youtube dan lainnya
                                mendapatkan fitur premium dengan biaya yang murah.
                            </p>
                        </div>
                        <div class="facility__content-image">
                            <img src="/images/search-friend.svg" alt="Image not found">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="facility__content">
                        <div class="facility__content-image">
                            <img src="/images/payment.svg" style="max-width: 25rem; margin-top: -43px" alt="Image not found">
                        </div>
                        <div class="facility__content-content">
                            <h4>Memudahkan Proses Administrasi dan Payment Subscription</h4>
                            <p>
                                Kami juga memberikan kemudahan dengan mengurus semua proses administrasi subscription
                                Provider Entertainment, termasuk pengurusan akun, pembayaran menggunakan kartu kredit
                                dan reminder setiap bulannya.
                            </p>
                        </div>
                    </div>
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
.facility {
    padding: 40px 0px !important;
    .col {
        text-align: center;
        h3 {
            margin-bottom: 20px !important;
            font-weight: 700;
        }
        p {
            margin: 0 auto;
            max-width: 600px;
            margin-top: 30px;
            margin-bottom: 40px;
        }
        button {
            margin: 10px;
            padding: 6px 35px !important
        }
    }
    .container {
        max-width: 1120px!important;
        font-weight: 500 !important;
        margin: 0 auto !important;
    }
    &__img {
        img {
            width: 50rem;
        }
    }
    .row {
        padding: 0px 8px !important;
    }
    &__content {
        display: flex;
        justify-content: center;
        &-content {
            width: 50%;
            margin: 10px 40px;
            text-align: left;
            padding: 16px 24px;
            h4 {
                text-align: left;
                font-weight: 700!important;
            }
        }
        &-image {
            width: 50%;
            img {
                margin-top: 8px;
                max-width: 35rem;
                margin-bottom: 20px;
            }
        }
    }
}
@media (max-width: 800px) {
    .facility {
        &__content {
            display: block;
            &-content {
                width: auto;
                margin: 10px 0px;
                padding: 16px 12px;
            }
            &-card {
                width: auto;
                margin: 10px 0px;
                padding: 16px 12px;
            }
        }
        img {
            width: 25rem!important;
            margin: 0 auto!important;
        }
        .row {
            display:block;
        }
        .facility__img {
            text-align: center;
            margin-top: 20px;
        }
        h2 {
            font-size: 20px;
        }
    }
}
@media  only screen and (min-width: 880px) and (max-width: 1020px) {
    .container {
        display: contents!important;
    }
}
</style>