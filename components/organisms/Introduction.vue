<template>
    <div class="intro">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h2 class="intro__header">Seakun.id</h2>
                    <Title title="Berlangganan Bersama, Lebih Praktis, Aman dan Murah" />
                    <p>
                        Platform pertama di Indonesia yang memberikan layanan <b>Berlangganan 
                        Bersama</b> dengan pengguna lain <b>(sharing subscription)</b> ke Penyedia Layanan
                        Entertainment (Provider Entertainment) seperti <b>Netflix, Spotify, Youtube</b>
                        dan lainnya agar dapat menikmati fitur premium, dengan <b>proses berlangganan
                        yang praktis, legal, aman</b> dan <b>murah</b>.
                    </p>
                    <button type="button" class="intro__btn btn btn-secondary" @click="toServiceElement">Layanan</button>
                    <button type="button" class="intro__btn btn btn-primary" @click="toRegistrationElement">Daftar</button>
                    <div class="intro__img">
                        <img src="/images/patungan-2.svg" alt="Image not found">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Title from "~/components/atoms/Title"
export default {
    component: {
        Title,
    },
    data() {
        return {
            regElement: '',
            serviceElement: ''
        }
    },
    mounted() {
        this.regElement = document.getElementById('reg')
        this.serviceElement = document.getElementById('facility')
    },
    methods: {
        toRegistrationElement() {
            this.regElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        },
        toServiceElement() {
            this.serviceElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        }
    }
}
</script>

<style lang="scss" scoped>
.intro {
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
            max-width: 880px;
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
    .intro {
        &__img {
            text-align: center;
            margin-top: 20px;
        }
        &__header {
            font-size: 35px!important;
        }
        img {
            width: 100%;
        }
        .row {
            display:block;
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
