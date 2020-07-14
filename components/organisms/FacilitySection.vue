<template>
    <div class="facility">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h3 class="facility__header-h3">Kemudahan apa saja yang kami berikan?</h3>
                    <p>Ada banyak kemudahan yang kami berikan jika menggunakan layanan kami, diantaranya sebagai berikut.</p>
                    <div class="facility__content">
                        <div class="facility__content-card">
                            <h4>Kemudahan lain yang kamu dapatkan</h4>
                            <p>
                                Akan dibuatkan akun untuk berlangganan ke platform digital yang kamu inginkan. 
                                Kami yang mengurus seluruh proses pembayaran bahkan yang menggunakan kartu kredit. 
                                Kami akan maintenance akun tersebut dan tetap menjaga kerahasiaannya. 
                                Kamu tinggal tunggu akun beserta passwordnya dari kami
                            </p>
                        </div>
                        <div class="facility__content-card">
                            <img src="/images/waiting.jpg" alt="Image not found">
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
        &-card {
            width: 30rem;
            margin: 10px 40px;
            text-align: left;
            padding: 16px 24px;
            img {
                margin-top: 8px;
                max-width: 35rem;
                margin-bottom: 20px;
            }
            h4 {
                text-align: left;
                font-weight: 700!important;
            }
        }
    }
}
@media (max-width: 800px) {
    img {
        width: 180px!important;
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
@media  only screen and (min-width: 880px) and (max-width: 1020px) {
    .container {
        display: contents!important;
    }
}
</style>