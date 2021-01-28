<template>
    <div>
        <Header/>
        <div class="event">
            <div class="event-detail mobile">
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
            <div class="event-reg">
                <h5 class="heading-5">Daftar Webinar</h5>
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
                        <FormInput
                            label="Whatsapp*"
                            placeholder="Masukkan Whatsapp"
                            class="input"
                            :errorMessage="errorMsg.whatsapp"
                            @keydown="onChangeInput('whatsapp')"
                            v-model="dataUser.whatsapp"
                        />
                        <ButtonDrop
                            @onClick="showJobList = !showJobList"
                            label="Pekerjaan*"
                            :btnText="dataUser.job"
                            extendClass="full-width"
                        />
                        <p class="error-msg" style="margin-bottom: 0" v-if="errorMsg.job">{{ errorMsg.job }}</p>
                        <transition name="slide-fade">
                            <div class="dropdown" v-if="showJobList">
                                <div
                                    v-for="(item, id) in jobs"
                                    :key="id"
                                    class="dropdown__item"
                                    @click="chooseJob(item)"
                                >
                                    <div>{{ item }}</div>
                                </div>
                            </div>
                        </transition>
                        <br>
                        <div class="form-seakun-user">
                            <label for="seakun-user">Apakah anda tahu tentang Seakun.id?</label>
                            <br>
                            <input type="radio" id="trueSeakunUser" :value="true" v-model="dataUser.isKnowSeakun" @change="onChangeInput('isKnowSeakun')"><label style="padding-left: 8px" for="trueSeakunUser">Ya</label>
                            <br>
                            <input type="radio" id="falseSeakunUser" :value="false" v-model="dataUser.isKnowSeakun" @change="onChangeInput('isKnowSeakun')"><label style="padding-left: 8px" for="falseSeakunUser">Tidak</label>
                            <p class="error-msg" v-if="errorMsg.isKnowSeakun">{{ errorMsg.isKnowSeakun }}</p>
                        </div>
                        <div class="form-know-seakun">
                            <label for="seakun-user">Apakah anda pengguna Seakun.id?</label>
                            <br>
                            <input type="radio" id="Ya" :value="true" v-model="dataUser.isSeakunUser" @change="onChangeInput('isSeakunUser')"><label style="padding-left: 8px" for="Ya">Ya</label>
                            <br>
                            <input type="radio" id="Tidak" :value="false" v-model="dataUser.isSeakunUser" @change="onChangeInput('isSeakunUser')"><label style="padding-left: 8px" for="Tidak">Tidak</label>
                            <p class="error-msg" v-if="errorMsg.isSeakunUser">{{ errorMsg.isSeakunUser }}</p>
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
            <div class="event-detail desktop">
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
                whatsapp: "",
                job: "Pilih Pekerjaan",
                isSeakunUser: null,
                isKnowSeakun: null,
                motivation: "",
                suggestTheme: ""
            },
            showJobList: false,
            errorMsg: {
                fullname: "",
                email: "",
                whatsapp: "",
                job: "",
                isSeakunUser: "",
                isKnowSeakun: "",
                motivation: "",
                suggestTheme: ""
            },
            jobs: ['Pelajar', 'Mahasiswa', 'Pegawai Negeri', 'Pegawai Swasta', 'Pegawai BUMN', 'Pegawai Startup', 'Wiraswasta'],
            isDisableBtn: false
        }
    },
    methods: {
        onChangeInput(name) {
            this.errorMsg[name] = "";
        },
        chooseJob(item) {
            this.dataUser.job = item
            this.showJobList = false
            this.errorMsg.job = ''
        },
        clickSubmit() {
            this.validateInput()
            if (
                this.dataUser.fullname &&
                this.dataUser.email &&
                this.dataUser.whatsapp &&
                this.dataUser.job != "Pilih Pekerjaan" &&
                this.dataUser.isSeakunUser != null &&
                this.dataUser.isKnowSeakun != null && 
                this.dataUser.motivation && 
                this.dataUser.suggestTheme
            ) {
                this.postRegisteredUser()
            }
        },
        validateInput() {
            !this.dataUser.fullname
                ? (this.errorMsg.fullname = "Nama Lengkap harus diisi")
                : (this.errorMsg.fullname = "")
            !this.dataUser.email
                ? (this.errorMsg.email = "Email harus diisi")
                : (this.errorMsg.email = "")
            !this.dataUser.whatsapp
                ? (this.errorMsg.whatsapp = "Whatsapp harus diisi")
                : (this.errorMsg.whatsapp = "")
            this.dataUser.job == "Pilih Pekerjaan"
                ? (this.errorMsg.job = "Pekerjaan harus dipilih")
                : (this.errorMsg.job = "")
            this.dataUser.isSeakunUser == null
                ? (this.errorMsg.isSeakunUser = "Harus dipilih")
                : (this.errorMsg.isSeakunUser = "")
            this.dataUser.isKnowSeakun == null
                ? (this.errorMsg.isKnowSeakun = "Harus dipilih")
                : (this.errorMsg.isKnowSeakun = "")
            !this.dataUser.motivation
                ? (this.errorMsg.motivation = "Motivasi mengikuti event ini harus diisi")
                : (this.errorMsg.motivation = "")
            !this.dataUser.suggestTheme
                ? (this.errorMsg.suggestTheme = "Saran tema untuk webinar berikutnya harus diisi")
                : (this.errorMsg.suggestTheme = "")
        },
        postRegisteredUser() {
            let payload = {
                ...this.dataUser,
                eventTitle: 'Apa',
                eventId: '1'
            }
            console.log(payload);
        }
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
.slide-fade-enter-active {
    transition: all 0.4s ease;
}
.slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-50px);
    opacity: 0.2;
}
.dropdown {
    border-radius: 0.25rem;
    border: 1px solid #ced4da;
    padding: 0px;
    margin-bottom: 20px;
    div {
        padding: 8px 16px;
        cursor: pointer;
        &:hover {
            background-color: #daeeef;
            border-color: #c6e9eb;
        }
    }
    &__item {
        padding: 8px 16px !important;
        display: flex;
        align-items: center;
        justify-content: space-between;

        ul {
            list-style-type: none;
            margin: 0 !important;
            li {
                font-size: 0.8rem !important;
            }
        }

        div {
            padding: 0px;
        }
        img {
            max-width: 20px;
        }
        &-info {
            font-weight: 400;
            padding-top: 0px !important;
            font-style: italic;
        }
    }
}
.desktop {
    display: block !important;
}
.mobile {
    display: none !important;
}
@media (max-width: 800px) {
    .event {
        display: block;
        width: 100% !important;
        padding: 80px 10px !important;
        font-size: 14px !important;
        &-reg {
            width: 100% !important;
            padding: 0 4px;
            margin: 0px 0px;
        }
        &-detail {
            width: 100% !important;
            padding: 0 0px;
            padding-bottom: 16px;
            margin: 0px 0px;
            &__info {
                &--key {
                    width: 28% !important;
                }
            }
        }
    }
    .desktop {
        display: none !important;
    }
    .mobile {
        display: block !important;
    }
    .form-control {
        font-size: 14px !important;
    }
    .heading-5 {
        margin-top: 30px;
    }
}
</style>