<template>
    <div class="testimoni" id="testimoni">
        <div class="container">
            <div class="row">
                <div class="col">
                    <Title title="Apa kata mereka yang menggunakan Seakun.id?" />
                    <div class="testimoni__content">
                        <div class="testimoni__content-card">
                            <figure class="testimoni__content author-thumbnail">
                                <img src="images/girl.png" alt="image not found" />
                            </figure>
                            <p>
                                Menurut aku ya, seakun.id itu bagus bgt. Segala sesuatunya lebih mudah,
                                dulu kalo mau masang
                                <b>mikir2 karna untuk yg premium sangat mahal</b>.
                                Tp karna ada seakun.id, aku dan suamiku jadi bisa nonton film.
                                Dengan bayar 49 rb sudah dpt premium. Thanks seakun.id.
                            </p>
                            <div class="info">
                                Geby Septia -
                                <span class="designation">Netflix</span>
                            </div>
                        </div>
                        <div class="testimoni__content-card">
                            <figure class="testimoni__content author-thumbnail">
                                <img src="images/girl.png" alt="image not found" />
                            </figure>
                            <p>
                                Aku beruntung banget pas liat di Instagram ada seakun.id.
                                <b>Ngebantu aku banget</b> yang pingin langganan Netflix paket premium
                                dengan harga yang ekonomis banget. Untuk layananya juga oke banget kok.
                                Responnya cepet banget
                                <b>proses pembuatan akunya juga gak lama</b>.
                                Jadi aku langsung bisa nikmatin film2 yang aku suka melalui Netflix.
                                Adminnya juga ramah.
                                Terimakasih, sukses terus untuk Seakun.id.
                            </p>
                            <div class="info">
                                Agita Widianti -
                                <span class="designation">Netflix</span>
                            </div>
                        </div>
                        <div class="testimoni__content-card">
                            <figure class="testimoni__content author-thumbnail">
                                <img src="images/boy.png" alt="image not found" />
                            </figure>
                            <p>
                                Menurut saya
                                <b>Seakun.id ngebantu banget pada masa pandemi ini</b>.
                                Saya juga butuh hiburan karena bioskop lagi tutup. Kebetulan saya sudah lama
                                ingin berlangganan Netflix, tapi karena
                                <b>enggak punya Kartu Kredit</b> jadi belum bisa.
                                Alhamdulillah ada Seakun.id yang ngurus semua proses berlangganan
                                ke Netflix, jadi saya
                                <b>gak perlu repot</b> urus payment ke Netflixnya,
                                Mantep deh pokoknya, gak nyesel pake Seakun.id.
                            </p>
                            <div class="info">
                                Ahmad Faisal -
                                <span class="designation">Netflix</span>
                            </div>
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
        Title
    }
};
</script>

<style lang="scss" scoped>
.testimoni {
    padding: 80px 0px !important;
    .col {
        text-align: center;
        h5 {
            margin-bottom: 0px;
            font-weight: 700;
            font-size: 18px;
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
        .label {
            margin-bottom: 20px !important;
            margin-top: 0px;
            font-size: 12px;
            color: #ccc;
            font-style: unset;
        }
    }
    .container {
        max-width: 1500px !important;
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

    .info {
        font-weight: 700;
        font-size: 15px;
        color: #2a2a2a;
        text-transform: uppercase;
        line-height: 26px;
        margin-bottom: 20px;
    }

    .designation {
        font-weight: 400;
        font-size: 14px;
    }

    &__content {
        display: flex;
        justify-content: space-around;
        margin-top: 50px;

        &.author-thumbnail {
            position: relative;
            margin: 35px 35px !important;
            img {
                border: 2px dashed;
                border-radius: 50%;
                border-color: #86d0c1;
                padding: 10px;
            }
        }

        &-card {
            width: 29rem;
            margin: 10px 6px;
            text-align: center;
            padding: 16px 24px;
            border: 1px solid #eeeeee;
            border-radius: 8px;
            box-shadow: 0px 0px 4px #dddddd;
            cursor: pointer;
            transition: transform 0.2s;
            &:hover {
                box-shadow: 0px 0px 16px #dddddd;
                transform: scale(1.05);
            }
            p {
                margin: 0 auto 25px !important;
                position: relative;
                line-height: 1.8em;
            }
        }
    }
}
@media (max-width: 800px) {
    .testimoni {
        padding: 80px 0px !important;
        &__img {
            text-align: center;
            margin-top: 20px;
        }
        &__content {
            display: block;
            &-card {
                margin: 25px 10px;
                width: auto;
                p {
                    margin: 0px !important;
                }
            }
            &.author-thumbnail {
                position: relative;
                margin: 0 auto 0px !important;
            }
        }
        &__header {
            &-h5 {
                font-size: 22px;
            }
        }
        img {
            width: 107px !important;
            margin: 16px auto;
        }
        .row {
            display: block;
        }
        h2 {
            font-size: 20px;
        }
        .info {
            margin-top: 16px;
        }
    }
}
@media only screen and (min-width: 880px) and (max-width: 1020px) {
    .container {
        display: contents !important;
    }
}
</style>
