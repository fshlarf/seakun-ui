<template>
    <div class="intro">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h2 class="intro__header">seakun.com</h2>
                    <h2>Patungan untuk Berlangganan<br/> Platform Digital Legal dan Murah</h2>
                    <p>Berlangganan fitur premium di banyak Plaform Digital dengan sistem patungan bersama teman baru dari seluruh Indonesia</p>
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
    height: 680px;
    .col {
        text-align: center;
        h2 {
            margin-bottom: 20px !important;
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