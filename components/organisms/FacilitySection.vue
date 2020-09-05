<template>
    <div class="facility" id="facility">
        <div class="container">
            <div class="row">
                <div class="col">
                    <Title title="Mengapa Kamu Perlu Menggunakan Seakun.id?" />
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
                            <img src="/images/search-friend.svg" alt="Image not found" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="facility__content">
                        <div class="facility__content-image">
                            <img
                                src="/images/payment.svg"
                                style="max-width: 25rem; margin-top: -43px"
                                alt="Image not found"
                            />
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
            <div class="row">
                <div class="col">
                    <div class="facility__content">
                        <div class="facility__content-content">
                            <h4>Program User Host</h4>
                            <p>
                                Program untuk <b>memberikan kewenangan kesalah satu anggota 
                                member di dalam satu grup berlangganan bersama untuk menggunakan kartu debit/kredit miliknya untuk melakukan pembayaran</b> 
                                ke Provider Entertainment.
                                <a class="facility__content-user-host" @click="handleRedirectInfoPage">
                                    <b>Baca tentang <u>User Host.</u></b>
                                </a>
                            </p>
                        </div>
                        <div class="facility__content-image">
                            <img src="/images/user-host.svg" alt="Image not found" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Title from "~/components/atoms/Title";

export default {
    component: {
        Title,
    },
    methods: {
        handleRedirectInfoPage() {
            window.open('/info/user-host')
        },
    }
};
</script>

<style lang="scss" scoped>
.facility {
    padding: 80px 0px !important;
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
            padding: 6px 35px !important;
        }
    }
    .container {
        max-width: 1120px !important;
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
        &-user-host {
            &:hover {
                cursor: pointer;
            }
        }
        &-content {
            width: 50%;
            margin: 10px 40px;
            text-align: left;
            padding: 16px 24px;
            h4 {
                text-align: left;
                font-weight: 700 !important;
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
        padding: 80px 0px 0px 0px !important;
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
            &-image {
                width: 100%;
            }
        }
        &__header {
            &-h3 {
                font-size: 24px;
            }
        }
        img {
            width: 100%;
        }
        .row {
            display: block;
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
@media only screen and (min-width: 880px) and (max-width: 1020px) {
    .container {
        display: contents !important;
    }
}
</style>
