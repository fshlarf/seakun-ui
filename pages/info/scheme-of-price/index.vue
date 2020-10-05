<template>
    <div>
        <Header />
        <div class="scheme-price">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <Title title="Bagaimana Seakun.id mengatur harga?" />
                        <div class="card" v-for="(item, index) in providerList" :key="index">
                            <img :src="item.img" alt="image not found" />
                            <div class="row mt-3">
                                <div class="col">
                                    <p class="font-weight-bold">Detail Harga</p>
                                    <div class="row" v-for="(info, ind) in item.informations" :key="ind">
                                        <div :class="`col-md-auto ${info.is_total ? 'font-weight-bold' : ''}`">
                                            {{ info.title }}
                                        </div>
                                        <div :class="`col text-right ${info.is_total ? 'font-weight-bold' : ''}`">
                                            {{ info.price }}
                                        </div>
                                    </div>
                                </div>
                                <span class="divider"></span>
                                <div class="col">
                                    <p class="font-weight-bold">Skema Berlangganan</p>
                                    <ol style="padding-left: 1rem;">
                                        <li v-for="(scheme, indx) in item.schemes" :key="indx">
                                            {{ scheme }}
                                        </li>
                                    </ol>
                                </div>
                            </div>
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
import Footer from "~/components/organisms/Footer"
import Title from "~/components/atoms/Title"

export default {
    components: {
        Header,
        Footer,
        Title
    },
    data() {
        return {
            providerList: [
                {
                    img: '/images/netflix.png',
                    schemes: [
                        'Seakun membuat akun dan membeli Paket Premium di Netflix.',
                        'Dalam 1 akun tersebut, Seakun membuat profile sebanyak 4.',
                        'Profile disesuaikan dengan nama masing-masing member.',
                        'Profile dilengkapi PIN yang berbeda-beda.',
                        'Akun dishare HANYA ke 4 member dalam 1 grup.'
                    ],
                    informations: [
                        {
                            title: 'Harga Paket Premium Netflix',
                            price: 'Rp186.000'
                        },
                        {
                            title: 'Jumlah Member Dalam 1 Grup',
                            price: '4'
                        },
                        {
                            title: 'Harga Patungan',
                            price: 'Rp186.000 ÷ 4 = Rp46.500'
                        },
                        {
                            title: 'Biaya Admin Seakun',
                            price: 'Rp6.500'
                        },
                        {
                            title: 'Harga Paket Bulanan',
                            price: 'Rp53.000',
                            is_total: true
                        },
                    ]
                },
                {
                    img: '/images/gramedia.png',
                    schemes: [
                        'Seakun membuat akun dan membeli Paket Premium di Gramedia.',
                        'Akun dishare HANYA ke 5 member dalam 1 grup',
                    ],
                    informations: [
                        {
                            title: 'Harga Paket Premium Gramedia Digital',
                            price: 'Rp89.000'
                        },
                        {
                            title: 'Jumlah member dalam 1 grup',
                            price: '5'
                        },
                        {
                            title: 'Harga Patungan',
                            price: 'Rp89.000 ÷ 5 = Rp17.800 ~Rp18.000'
                        },
                        {
                            title: 'Biaya Admin Seakun',
                            price: 'Rp5.000'
                        },
                        {
                            title: 'Harga Paket Bulanan',
                            price: 'Rp23.000',
                            is_total: true
                        },
                    ]
                },
                {
                    img: '/images/spotify.png',
                    schemes: [
                        'Seakun membuat akun dan membeli Paket Premium di Spotify',
                        'Seakun bertindak sebagai user Host dalam grup',
                        'Member membuat/menyediakan akun masing-masing',
                        'Seakun mengundang 5 member untuk join 1 grup Premium',
                        'Member yang telah join ke grup dapat menikmati fitur Premium'
                    ],
                    informations: [
                        {
                            title: 'Harga Paket Premium Netflix',
                            price: 'Rp86.900'
                        },
                        {
                            title: 'Jumlah Member Dalam 1 Grup',
                            price: '5'
                        },
                        {
                            title: 'Harga Patungan',
                            price: 'Rp86.900 ÷ 5 = Rp17.380 ~Rp17.500 '
                        },
                        {
                            title: 'Biaya Admin Seakun',
                            price: 'Rp5.000'
                        },
                        {
                            title: 'Harga Paket Bulanan',
                            price: 'Rp22.500',
                            is_total: true
                        },
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.scheme-price {
    padding: 100px 0px 40px !important;

    .divider {
        width: 1px;
        background: gray;
    }

    .card {
        padding: 16px 24px;
        border: 1px solid #eeeeee;
        border-radius: 8px;
        box-shadow: 0px 0px 4px #dddddd;
        margin-top: 3rem;

        img {
            width: 129px;
            height: 39px;
        }
    }
}

@media (max-width: 800px) {
}
</style>