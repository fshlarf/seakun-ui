<template>
    <div class="intro">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h2 class="intro__header">seakun.id</h2>
                    <h2 class="title">Berlangganan Bersama, Lebih Cepat, Aman dan Murah</h2>
                    <p>
                        Platform pertama di Indonesia yang memberikan layanan <b>Berlangganan 
                        Bersama</b> dengan pengguna lain <b>(sharing subscription)</b> ke Penyedia Layanan
                        Entertainment (Provider Entertainment) seperti <b>Netflix, Spotify, Youtube</b>
                        dan lainnyan agar dapat menikmati fitur premium, dengan <b>proses berlangganan
                        yang cepat, mudah, aman</b> dan <b>murah</b>.
                    </p>
                    <button type="button" class="intro__btn btn btn-primary">Layanan</button>
                    <button type="button" class="intro__btn btn btn-secondary">Daftar</button>
                    <div class="intro__img">
                        <img src="/images/patungan-2.svg" alt="Image not found">
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
.intro {
    background-color: #f9f6fd;
    padding: 40px 0px !important;
    height: 800px;
    .title {
        max-width: 500px;
        margin: 0 auto;
    }
    .col {
        text-align: center;
        h2 {
            margin-bottom: 20px !important;
        }
        p {
            margin: 0 auto;
            max-width: 832px;
            margin-top: 30px;
            margin-bottom: 40px;
            font-size: 22px;
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
    &__header {
        font-weight: 700;
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
    .intro__img {
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