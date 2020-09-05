<template>
    <div>
        <Header />
        <div class="info">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h2 class="info__title">FAQ</h2>
                        <div id="accordion" class="accordion">
                            <!-- Start Accodion "Apa itu Host" -->
                            <div
                                class="accordion-header collapsed"
                                id="heading1"
                                data-toggle="collapse"
                                data-target="#collapse1"
                                aria-expanded="false"
                                aria-controls="collapse1"
                            >
                                <h5>
                                    Apa itu Host?
                                    <span class="icon-toggle"></span>
                                </h5>
                            </div>
                            <div
                                id="collapse1"
                                class="collapse accordion-body"
                                aria-labelledby="heading1"
                                data-parent="#accordion"
                            >
                                Hi teman seakun, di seakun.id kamu berkesempatan mendapatkan free biaya berlangganan
                                di bulan ke-4 dengan bergabung sebagai
                                <b>Host</b>.
                            </div>
                            <!-- End Accodion "Apa itu Host" -->

                            <!-- Start Accodion "Bagaimana cara daftar sebagai Host?" -->
                            <div
                                class="accordion-header collapsed"
                                id="heading2"
                                data-toggle="collapse"
                                data-target="#collapse2"
                                aria-expanded="false"
                                aria-controls="collapse2"
                            >
                                <h5>
                                    Bagaimana cara daftar sebagai Host?
                                    <span class="icon-toggle"></span>
                                </h5>
                            </div>
                            <div
                                id="collapse2"
                                class="collapse accordion-body"
                                aria-labelledby="heading2"
                                data-parent="#accordion"
                            >
                                Untuk menjadi Host kamu bisa mengikuti langkah-langkah sebagai berikut :
                                <ol class="mt-2">
                                    <li>Daftar sebagai Host dengan centang "√" kolom "Ingin jadi Host?" di bagian Registrasi</li>
                                    <li>Admin akan menghubungi kamu dan memberikan akun netflix yang belum memiliki plan</li>
                                    <li>Kamu akan diminta untuk membayarkan terlebih dahulu biaya berlangganan Netflix premium sebesar Rp 189.000 menggunakan Jenius atau debit online kamu</li>
                                    <li>Mohon konfirmasi ke admin jika proses pembayaran sudah berhasil dengan mengirim bukti screenshoot</li>
                                    <li>Admin akan mentransfer ke kamu sisa pembayarannya yaitu (189.000 - (biaya langganan kamu 51.500) = Rp 137.500</li>
                                    <li>Silahkan Logout aku netflixnya dan Admin akan membuatkan profile dan pin untuk kamu</li>
                                    <li>Admin akan mengirimkan Akun Netflix beserta pin kamu dan Registrasi Host Netflix sudah selesai</li>
                                </ol>
                            </div>
                            <!-- End Accodion "Bagaimana cara daftar sebagai Host?" -->

                            <!-- Add another accordion here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "~/components/mollecules/Header";
import Accordion from "~/components/atoms/Accordion";

export default {
    components: {
        Header,
        Accordion,
    },
};
</script>

<style lang="scss" scoped>
.info {
    padding: 100px 0px 40px !important;

    &__title {
        font-size: 2.5rem;
        color: #666;
        font-weight: 300;
        margin-bottom: 0.75rem;
    }

    .accordion {
        .accordion-header {
            position: relative;
            cursor: pointer;
            padding: 0.75rem 0;

            .icon-toggle {
                color: #86d0c1;

                &::before {
                    top: 1rem;
                    right: 0.5rem;
                    content: "";
                    position: absolute;
                    display: block;
                    width: 15px;
                    height: 2px;
                    font-size: 1rem;
                    -webkit-transition: all 0.4s;
                    -moz-transition: all 0.4s;
                    -o-transition: all 0.4s;
                    transition: all 0.4s;
                }

                &::after {
                    top: 1rem;
                    right: 0.5rem;
                    content: "";
                    position: absolute;
                    display: block;
                    width: 15px;
                    height: 2px;
                    font-size: 1rem;
                    -webkit-transition: all 0.4s;
                    -moz-transition: all 0.4s;
                    -o-transition: all 0.4s;
                    transition: all 0.4s;
                }
            }

            h5 {
                margin-bottom: 0;
                padding-right: 2rem;
                font-size: 1.25rem;

                .icon-toggle:before {
                    top: 1.5rem;
                }

                .icon-toggle:after {
                    top: 1.5rem;
                }
            }

            &[aria-expanded="false"] {
                h5 {
                    color: #666;
                    font-weight: 700;
                }

                .icon-toggle {
                    &::before {
                        background: #999;
                        transform: rotate(-180deg);
                    }

                    &::after {
                        background: #999;
                        transform: rotate(-90deg);
                    }
                }
            }

            &[aria-expanded="true"] {
                h5 {
                    color: #86d0c1;
                    font-weight: 700;
                }

                .icon-toggle {
                    &::before {
                        background: #86d0c1;
                        transform: rotate(0deg);
                    }

                    &::after {
                        background: #86d0c1;
                        transform: rotate(0deg);
                    }
                }
            }
        }

        .accordion-body {
            color: #999;
            font-size: 0.9rem;
        }
    }
}
</style>