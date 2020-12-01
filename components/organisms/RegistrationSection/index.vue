<template>
    <div class="reg" id="reg">
        <ModalPacket
            :choosedPacket="choosedPacket"
            :discountPrice="discountPrice"
            :isVoucherValid="isVoucherValid"
            :onChoosePacket="choosePacket"
            :onCloseModalPacket="onCloseModalPacket"
            :packet="packet"
            :packets="packets"
            :price="price"
            :provider="provider"
            :showInvalidVoucher="showInvalidVoucher"
            :showPacket="showPacket"
            :userHost="userHost"
            :vouchersData="vouchersData"
            :voucher="voucher"
        />
        <div class="container">
            <Alert
                message="Ada layanan baru lho di Seakun.id! Kini layanan <b>Teman Berlangganan Youtube</b> telah hadir di Seakun.id. Silahkan mendaftar :)"
                typeAlert="success"
            />

            <div class="row">
                <div class="col">
                    <div class="reg__form">
                        <h3>Daftar Sekarang</h3>
                        <form>
                            <FormInput
                                label="Nama Lengkap"
                                placeholder="Contoh: John Doe"
                                class="input"
                                :errorMessage="errorMsg.fullname"
                                @keydown="onChangeInput('fullname')"
                                v-model="fullname"
                            />
                            <FormInput
                                label="Email"
                                placeholder="mail@gmail.com"
                                class="input"
                                :errorMessage="errorMsg.email"
                                @keydown="onChangeInput('email')"
                                v-model="email"
                            />
                            <FormInput
                                label="Nomor Handphone (Whatsapp)"
                                placeholder="08123435456"
                                class="input"
                                type="number"
                                :errorMessage="errorMsg.whatsapp"
                                @keydown="onChangeInput('whatsapp')"
                                v-model="whatsapp"
                            />
                            <div class="form-group">
                                <ButtonDrop
                                    @onClick="showProvider = !showProvider"
                                    label="Provider Entertainment"
                                    :btnText="provider"
                                />
                                <p
                                    class="error-msg"
                                    v-if="errorMsg.provider"
                                >{{ errorMsg.provider }}</p>
                            </div>
                            <transition name="slide-fade">
                                <div class="dropdown" v-if="showProvider">
                                    <div
                                        v-for="(provider, id) in providers"
                                        :key="id"
                                        class="dropdown__item"
                                        @click="chooseProvider(provider)"
                                        :class="{'disable-content' : !provider.active}"
                                    >
                                        <div>
                                            {{ provider.name }}
                                            <span v-if="!provider.active">
                                                <i>segera hadir</i>
                                            </span>
                                        </div>
                                        <img
                                            :src="`/images/icon/${provider.name}-mini.svg`"
                                            alt="Image not found"
                                        />
                                    </div>
                                </div>
                            </transition>
                            <div class="form-group">
                                <ButtonDrop
                                    @onClick="clickShowPacket"
                                    label="Pilih Paket"
                                    :btnText="packet"
                                />
                                <p class="error-msg" v-if="errorMsg.packet">{{ errorMsg.packet }}</p>
                            </div>
                            <!-- <p>Punya <b>Code Referal</b>? 
                                <a @click="showFormReferalCode = !showFormReferalCode" class="referal-code">Masukkan Code</a>
                            </p>-->
                            <div class="form-group" v-if="showFormReferalCode">
                                <label for="referalcode">Code Referral</label>
                                <input
                                    v-model="referalcode"
                                    @blur="checkValidReferralCode"
                                    type="text"
                                    id="referalcode"
                                    name="referalcode"
                                    class="form-control"
                                    placeholder="Contoh: seakunid"
                                />
                                <p
                                    v-if="isReferralValid"
                                    style="color: limegreen; margin-top: 6px; font-weight: 800"
                                >Code Referral Valid</p>
                            </div>
                            
                            <Voucher
                                :checkValidVoucher="checkValidVoucher"
                                :isVoucherValid="isVoucherValid"
                                :showInvalidVoucher="showInvalidVoucher"
                                :voucher="voucher"
                            />
                            
                            <ChoosedPacket
                                :choosedPacket="choosedPacket"
                                :isVoucherValid="isVoucherValid"
                            />

                            <p v-if="isDisableBtn">Tunggu sebentar ya...</p>
                            <button
                                class="btn btn-primary"
                                @click.prevent="clickSubmit"
                                :disabled="isDisableBtn"
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
                    <div class="reg__form-img">
                        <img src="/images/registration.svg" alt="Image not found" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { capitalizeFirstLetter, fullDate } from "~/helpers"

import ButtonDrop from "~/components/atoms/ButtonDropDown";
import Alert from "~/components/atoms/Alert";
import FormInput from "~/components/atoms/FormInput";

import ModalPacket from "./views/ModalPacket"
import ChoosedPacket from "./views/ChoosedPacket"
import Voucher from "./views/Voucher"

export default {
    components: {
        FormInput,
        Alert,
        ButtonDrop,
        ChoosedPacket,
        ModalPacket,
        Voucher
    },
    data() {
        return {
            fullname: "",
            email: "",
            whatsapp: "",
            provider: "Contoh: Netflix",
            packet: "Contoh: Paket Grup",
            price: null,
            discountPrice: null,
            referalcode: "",
            voucher: "",
            createddate: "",
            choosedPacket: {},
            showProvider: false,
            showPacket: false,
            userHost: false,
            providers: [
                { name: "Netflix", active: true },
                { name: "Youtube", active: true },
                { name: "Gramedia", active: true },
                { name: "Spotify", active: true },
                { name: "Steam", active: false },
            ],
            packets: [],
            errorMsg: {
                fullname: "",
                email: "",
                whatsapp: "",
                provider: "",
                packet: "",
            },
            isDisableBtn: false,
            referralsData: [],
            vouchersData: [],
            showFormReferalCode: false,
            showFormVoucher: false,
            isReferralValid: false,
            isVoucherValid: false,
            showInvalidVoucher: false,
            blockMail: ['bughunterv4n@gmail.com']
        };
    },
    mounted() {
        this.getVouchersData();
        this.getPacketData("netflix");
    },
    methods: {
        onCloseModalPacket() {
            this.showPacket = false
        },
        validateInput() {
            !this.fullname
                ? (this.errorMsg.fullname = "Nama Lengkap harus diisi")
                : (this.errorMsg.fullname = "");
            !this.email
                ? (this.errorMsg.email = "Email harus diisi")
                : (this.errorMsg.email = "");
            !this.whatsapp
                ? (this.errorMsg.whatsapp = "Whatsapp harus diisi")
                : (this.errorMsg.whatsapp = "");
            this.provider == "Contoh: Netflix"
                ? (this.errorMsg.provider =
                      "Provider Entertainment harus dipilih")
                : (this.errorMsg.provider = "");
            this.packet == "Contoh: Paket Grup"
                ? (this.errorMsg.packet = "Paket harus dipilih")
                : (this.errorMsg.packet = "");
        },
        clickSubmit() {
            if (this.email == this.blockMail[0]) {
                alert('You are blocked!')
                return
            }
            this.validateInput();
            if (
                this.fullname &&
                this.email &&
                this.whatsapp &&
                this.provider != "Contoh: Netflix" &&
                this.packet != "Contoh: Paket Grup"
            ) {
                this.isDisableBtn = true;
                this.postRegisteredUser();
            }
        },
        getPacketData(provider) {
            axios
                .get(
                    `https://seakun-packet-api-v1.herokuapp.com/${provider.toLowerCase()}`
                )
                .then((res) => {
                    this.packets = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        onChangeInput(name) {
            this.errorMsg[name] = "";
        },
        postRegisteredUser() {
            let payload = {
                fullname: capitalizeFirstLetter(this.fullname),
                email: this.email,
                whatsapp: this.whatsapp,
                provider: this.provider,
                packet: this.packet,
                price: this.price,
                discountprice: this.discountPrice,
                userhost: this.userHost,
                referalcode: this.referalcode,
                voucher: this.isVoucherValid ? this.voucher : "",
                createddate: fullDate(),
                ispreorder: this.choosedPacket.isPreOrder
            };
            axios
                .post(
                    "https://seakun-api.herokuapp.com/registered-user",
                    payload
                )
                .then((res) => {
                    if (res.data.message == "success") {
                        this.executeApiMailSeakun(payload);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    this.isDisableBtn = false;
                });
        },
        chooseProvider(provider) {
            if (this.provider != provider.name) {
                this.getPacketData(provider.name);
                this.packet = "Contoh: Paket Grup";
                this.choosedPacket = {};
                this.packets = [];
            }
            this.provider = provider.name;
            this.showProvider = false;
            this.price = null;
            this.errorMsg.provider = "";
            this.errorMsg.packet = "";
        },
        choosePacket(packet) {
            this.choosedPacket = packet;
            this.showPacket = false;
            this.packet = packet.name;
            this.errorMsg.packet = "";
            this.price = packet.grandTotal;
            this.checkValidVoucher();
            packet.userHost && (this.userHost = packet.userHost)
        },
        clickShowPacket() {
            if (this.provider == "Contoh: Netflix") {
                this.errorMsg.packet = "Provider Entertainment belum dipilih";
                return;
            } else {
                this.showPacket = !this.showPacket;
            }
        },
        executeApiMailSeakun(payload) {
            axios.post("https://seakun-mail-api-v1.herokuapp.com/", payload)
            .then((res) => {
                this.isDisableBtn = false;
                // Redirect to thankyou page when successfully registration
                this.$router.push({path: this.setPathToRedirect(this.choosedPacket),
                    query: {
                        provider: this.provider,
                        packet_id: this.choosedPacket.id,
                        voucher: this.isVoucherValid ? this.voucher : "",
                    },
                });
            })
            .catch((err) => {console.log(err)})
        },
        setPathToRedirect(choosedPacket) {
            if (choosedPacket.userHost) {
                return "/thankyou/user-host"
            } else if (choosedPacket.isPreOrder) {
                return "/thankyou/pre-order"
            } else {
                return "/payment"
            }
        },
        getVouchersData() {
            axios
                .get("https://seakun-packet-api-v1.herokuapp.com/vouchers")
                .then((res) => {
                    this.vouchersData = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        checkValidReferralCode() {
            if (this.price) {
                let validateArray = [];
                this.vouchersData.map((e) => {
                    e.referral_code == this.referalcode && e.active
                        ? validateArray.push(1)
                        : validateArray.push(0);
                });
                validateArray.sort().reverse();
                if (validateArray[0] == 1) {
                    this.isReferralValid = true;
                    this.price = this.choosedPacket.referralGrandTotal;
                } else {
                    this.isReferralValid = false;
                    this.price = this.choosedPacket.grandTotal;
                }
            }
        },
        checkValidVoucher() {
            if (this.price) {
                let validateArray = [];
                this.vouchersData.map((e) => {
                    e.voucher_code == this.voucher.toLowerCase() && e.active
                        ? validateArray.push(1)
                        : validateArray.push(0);
                });
                validateArray.sort().reverse();
                if (validateArray[0] == 1) {
                    this.isVoucherValid = true;
                    this.discountPrice = this.choosedPacket.voucherGrandTotal;
                } else {
                    this.isVoucherValid = false;
                    this.voucher && (this.showInvalidVoucher = true)
                    this.discountPrice = null;
                    setTimeout(() => {
                        this.showInvalidVoucher = false;  
                    }, 5000);
                }
            }
        },
    },
    watch: {
        showPacket() {
            const modalBackdrop = document.getElementById("modal-backdrop");
            this.showPacket
                ? (modalBackdrop.classList += "modal-backdrop fade show")
                : (modalBackdrop.classList.value = "");
        },
        userHost() {
            if (!this.userHost && this.choosedPacket.id == 1) {
                this.packet = "Contoh: Paket Grup";
                this.choosedPacket = {};
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.reg {
    padding: 80px 0px !important;
    background-color: white;

    .text-host {
        &:hover {
            cursor: pointer;
        }
    }

    .is-size-6 {
        font-size: .9rem !important;
    }

    .input {
        max-width: 300px !important;
    }

    &__form {
        width: 50%;
        input {
            max-width: 300px;
        }
        &-img {
            margin-left: 100px;
            img {
                width: 37rem;
            }
        }
    }
    .col {
        text-align: left;
        display: flex;
        justify-content: space-between;
        h3 {
            margin-bottom: 20px !important;
            font-weight: 700;
        }
    }
    .container {
        max-width: 1120px !important;
        font-weight: 500 !important;
        margin: 0 auto !important;
        padding: 0px 0px 0px 70px;
    }
    .row {
        padding: 0px 8px !important;
    }
    button {
        margin-top: 16px;
        padding: 5px 16px;
        min-width: 140px;
    }
    .dropdown {
    border-radius: 0.25rem;
    border: 1px solid #ced4da;
    padding: 0px;
    margin-bottom: 20px;
    max-width: 300px;
    div {
        padding: 8px 16px;
        cursor: pointer;
        &:hover {
            background-color: #daeeef;
            border-color: #c6e9eb;
        }
    }
    span {
        color: coral;
        font-size: 12px;
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
    .align-normal {
        align-items: normal !important;
    }
    &__best-item {
        display: flex;
        align-items: center;
        padding: 0px 0px !important;
        div {
            padding: 0px 10px;
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
    .error-msg {
        color: red;
        font-size: 14px;
        margin-top: 3px;
    }
    .disable-content {
        pointer-events: none;
        opacity: 0.4;
    }
    #snackbar {
        background-color: #daeeef;
        color: #2f524b;
        text-align: center;
        border-radius: 2px;
        padding: 16px;
        position: fixed;
        z-index: 1;
        top: 130px;
        font-size: 17px;
        margin: 0 auto;
        max-width: 600px;
        left: 50%;
        margin-left: -300px;
        font-weight: 400;
        display: grid;
        button {
            margin-top: 0px !important;
            margin-bottom: 10px !important;
        }
        span {
            font-size: 28px;
            font-weight: 700;
            cursor: pointer;
            padding: 0px 12px;
        }
    }
    .show {
        display: block;
    }
    .referal-code {
        color: dodgerblue;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
            opacity: 0.7;
        }
    }
    .user-host {
        padding-left: 21px;
        font-size: 12px;
        margin-bottom: 16px;
        &__link {
            color: dodgerblue;
            text-decoration: underline !important;
            cursor: pointer;
        }
    }
}

@media (max-width: 800px) {
    .reg {
        padding: 80px 15px !important;
        #snackbar {
            top: 70px;
            font-size: 12px;
            position: fixed;
            width: 100%;
            left: 0;
            margin-left: 0px;
            margin: 0 auto;
        }
        &__form {
            width: 100%;
            &-img {
                margin-top: 50px;
                margin-left: 0px;
                img {
                    width: 100%;
                }
            }
            input {
                max-width: 100%;
            }
        }
        .input {
            max-width: 100% !important;
        }
        .container {
            padding: 0px 25px;
        }
        .col {
            display: block;
        }
        .row {
            display: block;
        }
        &__img {
            text-align: center;
            margin-top: 20px;
        }
        h2 {
            font-size: 20px;
        }
        .dropdown {
            max-width: 100%;
            .packet-name {
                max-width: 180px;
            }
        }
    }
    @-webkit-keyframes fadein {
        from {
            top: 0;
            opacity: 0;
        }
        to {
            top: 70px;
            opacity: 1;
        }
    }

    @keyframes fadein {
        from {
            top: 0;
            opacity: 0;
        }
        to {
            top: 70px;
            opacity: 1;
        }
    }
}
@media only screen and (min-width: 880px) and (max-width: 1020px) {
    .container {
        display: contents !important;
    }
}
</style>
