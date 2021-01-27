<template>
    <div>
        <Header/>
        <div class="event">
            <div class="event-reg">
                <h5>Daftar Webinar</h5>
                <br>
                <div class="event-reg__form">
                    <form>
                        <FormInput
                            label="Nama Lengkap*"
                            placeholder="Masukkan Nama Lengkap"
                            class="input"
                            :errorMessage="errorMsg.fullname"
                            @keydown="onChangeInput('fullname')"
                            v-model="dataUser.fullname"
                        />
                        <FormInput
                            label="Email*"
                            placeholder="Masukkan Email"
                            class="input"
                            :errorMessage="errorMsg.email"
                            @keydown="onChangeInput('email')"
                            v-model="dataUser.email"
                        />
                        <ButtonDrop
                            @onClick="showJobList = !showJobList"
                            label="Pekerjaan*"
                            :btnText="dataUser.job"
                            extendClass="full-width"
                        />
                        <p
                            class="error-msg"
                            v-if="errorMsg.job"
                        >{{ errorMsg.job }}</p>
                        <br>
                        <FormInput
                            label="Instansi/Perusahaan*"
                            placeholder="Masukkan Instansi"
                            class="input"
                            :errorMessage="errorMsg.company"
                            @keydown="onChangeInput('company')"
                            v-model="dataUser.company"
                        />
                        <div class="form-seakun-user">
                            <label for="seakun-user">Apakah anda tahu tentang Seakun.id?</label>
                            <br>
                            <input type="radio" id="trueSeakunUser" :value="true" v-model="dataUser.isKnowSeakun"><label style="padding-left: 8px" for="trueSeakunUser">Ya</label>
                            <br>
                            <input type="radio" id="falseSeakunUser" :value="false" v-model="dataUser.isKnowSeakun"><label style="padding-left: 8px" for="falseSeakunUser">Tidak</label>
                            <br>
                        </div>
                        <div class="form-know-seakun">
                            <label for="seakun-user">Apakah anda pengguna Seakun.id?</label>
                            <br>
                            <input type="radio" id="Ya" :value="true" v-model="dataUser.isSeakunUser"><label style="padding-left: 8px" for="Ya">Ya</label>
                            <br>
                            <input type="radio" id="Tidak" :value="false" v-model="dataUser.isSeakunUser"><label style="padding-left: 8px" for="Tidak">Tidak</label>
                            <br>
                        </div>
                        <FormInput
                            label="Apa motivasi/ekspektasi anda mengikuti event ini?*"
                            placeholder="Masukkan Jawaban Anda"
                            class="input"
                            :errorMessage="errorMsg.motivation"
                            @keydown="onChangeInput('motivation')"
                            v-model="dataUser.motivation"
                        />
                        <FormInput
                            label="Apa saran anda untuk tema webinar/project selanjutnya?*"
                            placeholder="Masukkan Jawaban Anda"
                            class="input"
                            :errorMessage="errorMsg.suggestTheme"
                            @keydown="onChangeInput('suggestTheme')"
                            v-model="dataUser.suggestTheme"
                        />
                        <br>
                        <button
                            class="btn btn-primary"
                            @click.prevent="clickSubmit"
                            :disabled="isDisableBtn"
                            style="width: 100px"
                        >
                            <span
                                v-if="isDisableBtn"
                                class="spinner-border spinner-border-sm text-dark"
                                role="status"
                                aria-hidden="true"
                            ></span>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div class="event-detail">
                <h5 style="padding: 20px 16px 0px 16px">Detail Acara</h5>
                <img src="https://gmedia.net.id/upload/foto_artikel/20200814NlwIohPBV4.png" alt="event image"/>
                <div class="event-detail__info">
                    <div class="event-detail__info--key">Jenis Acara</div>:<div class="event-detail__info--value">Webinar</div>
                </div>
                <div class="event-detail__info">
                    <div class="event-detail__info--key">Pembicara</div>:<div class="event-detail__info--value">Udin</div>
                </div>
                <div class="event-detail__info">
                    <div class="event-detail__info--key">Host</div>:<div class="event-detail__info--value">Ucok</div>
                </div>
                <div class="event-detail__info">
                    <div class="event-detail__info--key">Topik</div>:<div class="event-detail__info--value">How to become founder</div>
                </div>
                <div class="event-detail__info">
                    <div class="event-detail__info--key">Waktu</div>:<div class="event-detail__info--value">16 Februari 2021</div>
                </div>
                <div class="event-detail__info">
                    <div class="event-detail__info--key"></div><div class="event-detail__info--value">11.00 WIB - 13.00 WIB</div>
                </div>
                <div class="event-detail__info">
                    <div class="event-detail__info--key">Lokasi</div>:<div class="event-detail__info--value">Via Google Meet (link akan dibagikan via email)</div>
                </div>
                <div class="event-detail__info">
                    <div class="event-detail__info--key">Giveaway</div>:<div class="event-detail__info--value">Voucher E-Wallet untuk 6 orang beruntung (masing-masing Rp50.000)</div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "~/components/mollecules/Header"
import Footer from "~/components/mollecules/Footer"
import FormInput from "~/components/atoms/FormInput"
import ButtonDrop from "~/components/atoms/ButtonDropDown"

export default {
    components: {
        Header,
        Footer,
        FormInput,
        ButtonDrop
    },
    data() {
        return {
            dataUser: {
                fullname: "",
                email: "",
                job: "Pilih Pekerjaan",
                company: "",
                isSeakunUser: null,
                isKnowSeakun: null,
                motivation: "",
                suggestTheme: ""
            },
            showJobList: false,
            errorMsg: {
                fullname: "",
                email: "",
                job: "",
                company: "",
                isSeakunUser: "",
                isKnowSeakun: "",
                motivation: "",
                suggestTheme: ""
            },
        }
    },
    methods: {
        onChangeInput(name) {
            this.errorMsg[name] = "";
        },
    }
}
</script>

<style lang="scss" scoped>
h5 {
    font-weight: 700;
}
.event {
    padding: 80px 0px !important;
    background-color: white;
    display: flex;
    max-width: 1100px !important;
    font-weight: 500 !important;
    margin: 0 auto !important;
    &-reg {
        width: 50%;
        margin: 20px 20px;
    }
    &-detail {
        width: 50%;
        margin: 20px 20px;
        padding: 0px 10px;
        border: 1px solid #86d0c1;
        height: -webkit-fill-available;
        border-radius: 8px;
        padding-bottom: 20px;
        img {
            width: 100%;
            padding: 16px;
        }
        &__info {
            display: flex;
            padding: 2px 16px;
            &--key {
                width: 18%;
                margin-right: 16px;
            }
            &--value {
                width: 70%;
                margin-left: 16px;
            }
        }
    }
}
</style>