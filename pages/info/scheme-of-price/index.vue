<template>
    <div>
        <Header />
        <div class="scheme-price">
            <div class="container">
                <Title title="Bagaimana Seakun.id mengatur harga?" />
                <div class="scheme-price__info">
                    Dengan konsep patungan, melalui Seakun.id harga Paket Grup dari masing-masing provider akan dibagi 
                    rata per jumah member dalam suatu grup. Sedangkan harga final yang dibayarkan oleh member adalah 
                    harga patungan yang sudah termasuk biaya admin Seakun.id. 
                </div>
                <br />
                <div class="scheme-price__info">
                    <b>Perlu diperhatikan</b> bahwa harga paket dari provider bisa saja tidak bulat, 
                    sehingga Seakun.id melakukan pembulatan harga patungan dengan tujuan untuk memudahkan 
                    member dalam melihat nominal yang akan ditransfer. Hasil pembulatan akan masuk sebagai 
                    keuntungan untuk Seakun.id dan dengan berlangganan melalui Seakun.id, member dinyatakan 
                    sudah mengerti dan setuju dengan skema harga yang sudah ditetapkan.
                </div>
                <div class="row justify-content-around content-mobile">
                    <div v-for="(item, index) in providerList" :key="index">
                        <div class="card">
                            <img :src="item.img" alt="image not found" class="logo" />
                            <img :src="item.screenshot" alt="image not found" class="ss" />
                                <p class="font-weight-bold info-mobile">Detail Harga</p>
                                <div class="row pt-1" v-for="(info, ind) in item.informations" :key="ind">
                                    <div :class="`col-md-auto info-mobile ${info.is_total ? 'font-weight-bold' : ''}`">
                                        {{ info.title }}
                                    </div>
                                    <div :class="`col text-right info-mobile ${info.is_total ? 'font-weight-bold' : ''}`">
                                        {{ info.value }}
                                    </div>
                                </div>
                            <div class="divider"></div>
                                <p class="font-weight-bold">Skema Berlangganan</p>
                                <ol style="padding-left: 1rem;">
                                    <li class="pt-1" v-for="(scheme, indx) in item.schemes" :key="indx">
                                        {{ scheme }}
                                    </li>
                                </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "~/components/mollecules/Header"
import Footer from "~/components/mollecules/Footer"
import Title from "~/components/atoms/Title"
import { providerList } from "./provider-list"

export default {
    components: {
        Header,
        Footer,
        Title
    },
    data() {
        return {
            providerList
        }
    }
}
</script>

<style lang="scss" scoped>
.scheme-price {
    padding: 100px 0px 40px !important;

    &__info {
        padding: 0px 17px;
        font-size: 14px;
    }

    .divider {
        height: 1px;
        width: 100%;
        background: gray;
        margin: 1rem 0;
    }

    .card {
        padding: 16px 24px;
        border: 1px solid #eeeeee;
        border-radius: 8px;
        box-shadow: 0px 0px 4px #dddddd;
        margin: 3rem 0 0;
        max-width: 500px;

        .ss {
            display: flex;
            align-self: center;
            width: 100%;
            height: 224px;
            object-fit: contain;
            margin: 2rem 0;
        }

        .logo {
            width: 129px;
            height: 39px;
            object-fit: contain;
            margin-left: -8px;
        }
    }
}

@media (max-width: 800px) {
    .scheme-price {
        &__info {
            padding: 0px 8px;
        }
        .content-mobile {
            display: block;
            width: 100%;
            padding: 0 0px;
            margin-left: 0 !important;
            .card {
                img {
                    margin: 0 0;
                }
            }
        }

        .info-mobile {
            text-align: center !important;
        }

        .info {
            font-size: 12px;
            width: auto !important;
            padding-right: 0 !important;
        }

        .row {
            margin-bottom: 5px;
        }

        .divider {
            width: 100%;
            height: 1px;
            margin: 1rem 0;
        }
    }
}
</style>