<template>
    <div class="reg" id="reg">
        <transition name="slide-fade">
            <Modal
                :showPacket="showPacket"
                @closeModal="showPacket = false"
            >
                <div class="dropdown modal-dropdown">
                    <div v-for="(packet, id) in packets" :key="id" style="padding: 16px 0px 0px 0px;" @click="choosePacket(packet)">
                        <div class="dropdown__item item">
                            <div>{{ packet.name }}</div>
                            <div>{{ formatMoneyRupiah(packet.price) }} / bln</div>
                        </div>
                        <div class="dropdown__item item">
                            <div>Biaya Admin</div>
                            <div>{{ formatMoneyRupiah(packet.adminFee) }} / bln</div>
                        </div>
                        <div class="dropdown__item item">
                            <div>Total</div>
                            <div>{{ formatMoneyRupiah(packet.grandTotal) }} / bln</div>
                        </div>
                        <div class="dropdown__item item">
                            <div>Tipe Paket</div>
                            <div :class="{'premium' : packet.typePacket == 'Premium'}">{{ packet.typePacket }}</div>
                        </div>
                        <div >
                            {{packet.facilities.join(', ')}}
                        </div>
                        <div style="padding: 0px" v-if="packet.oneMonthFree">
                            <LabelChecked title="Gratis Satu Bulan Pertama"/>
                        </div>
                        <div class="dropdown__item-info" style="padding-bottom: 15px">**{{ packet.desc }}</div>
                        <hr v-if="id != packets.length - 1" style="margin: 0px!important">
                    </div>
                </div>
            </Modal>
        </transition>
        <transition name="slide-fade">
            <div v-if="showSnackBar" id="snackbar">
                <span style="text-align: end;" @click="showSnackBar = false">&times;</span>
                <p>Pendaftaran berhasil. Kamu akan segera dihubungi lewat email dan whatsapp. Ditunggu ya :)</p>
            </div>
        </transition>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="reg__form">
                        <h3>Daftar Sekarang</h3>
                        <form>
                            <div class="form-group">
                                <label for="fullname">Nama Lengkap</label>
                                <input type="text" id="fullname" name="fullname" class="form-control" placeholder="Contoh: John Doe" @keydown="onChangeFullname" v-model="fullname">
                                <p class="error-msg" v-if="errorMsg.fullname">{{ errorMsg.fullname }}</p>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" class="form-control" placeholder="mail@gmail.com" @keydown="onChangeEmail" v-model="email">
                                <p class="error-msg" v-if="errorMsg.email">{{ errorMsg.email }}</p>
                            </div>
                            <div class="form-group">
                                <label for="whatsapp">Nomor Handphone (Whatsapp)</label>
                                <input type="text" id="whatsapp" name="whatsapp" class="form-control" placeholder="08123435456" v-model="whatsapp" @keydown="onChangeWhatsapp">
                                <p class="error-msg" v-if="errorMsg.whatsapp">{{ errorMsg.whatsapp }}</p>
                            </div>
                            <div class="form-group">
                                <ButtonDrop
                                    @onClick="showProvider = !showProvider"
                                    label="Media Entertainment"
                                    :btnText="provider"
                                />
                                <p class="error-msg" v-if="errorMsg.provider">{{ errorMsg.provider }}</p>
                            </div>
                            <transition name="slide-fade">
                                <div class="dropdown" v-if="showProvider">
                                    <div v-for="(provider, id) in providers" :key="id" class="dropdown__item" @click="chooseProvider(provider)" :class="{'disable-content' : !provider.active}">
                                        <div>
                                            {{ provider.name }} 
                                            <span v-if="!provider.active"><i>segera hadir</i></span>
                                        </div>
                                        <img :src="`/images/icon/${provider.name}-mini.svg`" alt="Image not found">
                                    </div>
                                </div>
                            </transition>
                            <div>
                                <div class="form-group">
                                    <ButtonDrop
                                        @onClick="clickShowPacket"
                                        label="Pilih Paket"
                                        :btnText="packet"
                                    />
                                    <p class="error-msg" v-if="errorMsg.packet">{{ errorMsg.packet }}</p>
                                </div>
                                <transition name="slide-fade">
                                    <div class="dropdown choosed-packet" v-if="choosedPacket.name">
                                        <div style="padding: 0px; font-size: 14px;">
                                            <div class="dropdown__item">
                                                <div>{{ choosedPacket.name }}</div>
                                                <div>{{ formatMoneyRupiah(choosedPacket.price) }} / bln</div>
                                            </div>
                                            <div class="dropdown__item item">
                                                <div>Biaya Admin</div>
                                                <div>{{ formatMoneyRupiah(choosedPacket.adminFee) }} / bln</div>
                                            </div>
                                            <div class="dropdown__item item">
                                                <div>Total</div>
                                                <div>{{ formatMoneyRupiah(choosedPacket.grandTotal) }} / bln</div>
                                            </div>
                                            <div style="padding: 0px" v-if="choosedPacket.oneMonthFree">
                                                <LabelChecked title="Gratis Satu Bulan Pertama"/>
                                            </div>
                                            <div class="dropdown__item-info">{{ choosedPacket.desc }}</div>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                            <p v-if="isDisableBtn">
                                Tunggu sebentar ya...
                            </p>
                            <button class="btn btn-primary" @click.prevent="clickSubmit" :disabled="isDisableBtn">
                                <span v-if="isDisableBtn" class="spinner-border spinner-border-sm text-dark" role="status" aria-hidden="true"></span>
                                Submit
                            </button>
                        </form>
                    </div>
                    <div class="reg__form-img">
                        <img src="/images/registration.svg" alt="Image not found">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ButtonDrop from '~/components/atoms/ButtonDropDown'
import LabelChecked from '~/components/atoms/LabelChecked'
import Modal from '~/components/mollecules/Modal'
export default {
    components: {
        ButtonDrop: ButtonDrop,
        LabelChecked: LabelChecked,
        Modal: Modal
    },
    data() {
        return {
            fullname: '',
            email: '',
            whatsapp: '',
            provider: 'Contoh: Netflix',
            packet: 'Contoh: Group (Family)',
            price: null,
            choosedPacket: {},
            showProvider: false,
            showPacket: false,
            providers: [
                {name: 'Netflix', active: true},
                {name: 'Spotify', active: false},
                {name: 'Youtube', active: false},
                {name: 'Steam', active: false},
                {name: 'Joox', active: false}
            ],
            packets: [
                {
                    name: 'Paket Personal', 
                    active: true, 
                    desc: 'Satu akun satu orang', 
                    adminFee: 2500, 
                    price: 139000, 
                    grandTotal: 141500, 
                    oneMonthFree: true,
                    typePacket: 'Normal',
                    facilities: [
                        'Tersedia HD', 'Bisa di tonton dari Laptop dan TV', 'Bisa di tonton di Smartphone dan Tablet', 'Unlimitid Film dan Serial TV', 'Cancel Kapanpun'
                    ]
                },
                {
                    name: 'Paket Group (Family)', 
                    active: true, 
                    desc: 'Satu akun dipakai maksimum 4 orang', 
                    adminFee: 2500, 
                    price: 42500, 
                    grandTotal: 45000, 
                    oneMonthFree: true,
                    typePacket: 'Premium',
                    facilities: [
                        'Tersedia HD', 'Tersedia Ultra HD', 'Bisa di tonton dari Laptop dan TV', 'Bisa di tonton di Smartphone dan Tablet', 'Unlimitid Film dan Serial TV', 'Cancel Kapanpun'
                    ]
                },
            ],
            errorMsg: {
                fullname: '',
                email: '',
                whatsapp: '',
                provider: '',
                packet: ''
            },
            showSnackBar: false,
            isDisableBtn: false,
        }
    },
    methods: {
        validateInput() {
            !this.fullname ? this.errorMsg.fullname = 'Nama Lengkap harus diisi' : this.errorMsg.fullname = ''
            !this.email ? this.errorMsg.email = 'Email harus diisi' : this.errorMsg.email = ''
            !this.whatsapp ? this.errorMsg.whatsapp = 'Whatsapp harus diisi' : this.errorMsg.whatsapp = ''
            this.provider == 'Contoh: Netflix' ? this.errorMsg.provider = 'Media Entertainment harus dipilih' : this.errorMsg.provider = ''
            this.packet == 'Contoh: Group (Family)' ? this.errorMsg.packet = 'Paket harus dipilih' : this.errorMsg.packet = ''
        },
        clickSubmit() {
            this.validateInput()
            if (
                this.fullname && 
                this.email && 
                this.whatsapp && 
                this.provider != 'Contoh: Netflix' && 
                this.packet != 'Contoh: Group (Family)'
            ) {
                this.isDisableBtn = true
                this.postRegisteredUser()
            }
        },
        onChangeFullname() {
            this.errorMsg.fullname = ''
        },
        onChangeEmail() {
            this.errorMsg.email = ''
        },
        onChangeWhatsapp() {
            this.errorMsg.whatsapp = ''
        },
        postRegisteredUser() {
            let payload = {
                fullname: this.fullname,
                email: this.email,
                whatsapp: this.whatsapp,
                provider: this.provider,
                packet: this.packet,
                price: this.price
            }
            axios.post('https://seakun-api.herokuapp.com/registered-user', payload)
            .then(res => {
                if (res.data.message == "success") this.showSnackBar = true
                this.isDisableBtn = false
            })
            .catch(err => {
                console.log(err)
                this.isDisableBtn = false
            })
        },
        chooseProvider(provider) {
            if (this.provider != provider.name) this.packet = 'Contoh: Group (Family)'
            this.provider = provider.name
            this.showProvider = false
            this.price = null
            this.errorMsg.provider = ''
            this.errorMsg.packet = ''
        },
        choosePacket(packet) {
            this.choosedPacket = packet
            this.packet = packet.name
            this.showPacket = false
            this.errorMsg.packet = ''
            this.price = packet.price
        },
        formatMoneyRupiah(num) {
            return num && `Rp ${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`
        },
        clickShowPacket() {
            if (this.provider == 'Contoh: Netflix') {
                this.errorMsg.packet = 'Media Entertainment belum dipilih'
                return
            } else {
                this.showPacket = !this.showPacket
            }
        }
    },
    watch: {
        showPacket() {
            const modalBackdrop = document.getElementById('modal-backdrop')
            this.showPacket ? modalBackdrop.classList += 'modal-backdrop fade show' : modalBackdrop.classList.value = ''
        }
    }
}
</script>

<style lang="scss" scoped>
.reg {
    padding: 40px 0px !important;
    background-color: white;
    .modal-dropdown {
        border-radius: .25rem;
        border:none!important;
        margin-bottom: 0px!important;
        max-width: unset!important;
        .item {
            padding: 2px 16px!important;
        }
    }
    .dropdown {
        border-radius: .25rem;
        border: 1px solid #ced4da;
        padding: 0px;
        margin-bottom: 20px;
        max-width: 300px;
        div {
            padding: 8px 16px;
            cursor: pointer;
            &:hover {
                background-color: whitesmoke;
            }
        }
        span {
            color:coral;
            font-size: 12px;
        }
        &__item {
            padding: 8px 16px!important;
            display: flex;
            align-items: center;
            justify-content: space-between;
            div {
                padding: 0px;
            }
            img {
                max-width: 20px;
            }
            &-info {
                font-weight: 400;
                padding-top: 0px!important;
                font-style: italic;
            }
        }
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
        max-width: 1120px!important;
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
    .slide-fade-enter-active {
        transition: all .4s ease;
    }
    .slide-fade-leave-active {
        transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateY(-50px);
        opacity: .2;
    }
    .error-msg{
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
            margin-top: 0px!important;
            margin-bottom: 10px!important;
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

    .choosed-packet {
        cursor: unset!important;
        &:hover {
            background-color: unset!important;
        }
    }
    .premium {
        color: green;
        font-weight: 500;
    }
}
@media (max-width: 800px) {
    .reg {
        #snackbar {
            top: 70px;
            font-size: 12px;
            position: fixed;
            width: 100%;
            left: 0;
            margin-left: 0px;
            margin: 0 auto;
        }
        .dropdown {
            max-width: 100%;
        }   
        padding: 30px 0px 15px 0px !important;
        &__form {
            width: 100%;
            &-img {
                margin-left: 0px;
                img {
                    width: 100%;
                }
            }
            input {
                max-width: 100%;
            }
        }
        .container {
            padding: 0px 25px;
        }
        .col {
            display: block;
        }
        .row {
            display:block;
        }
        &__img {
            text-align: center;
            margin-top: 20px;
        }
        h2 {
            font-size: 20px;
        }
    }
     @-webkit-keyframes fadein {
        from {top: 0; opacity: 0;} 
        to {top: 70px; opacity: 1;}
    }

    @keyframes fadein {
        from {top: 0; opacity: 0;}
        to {top: 70px; opacity: 1;}
    }
}
@media  only screen and (min-width: 880px) and (max-width: 1020px) {
    .container {
        display: contents!important;
    }
}
</style>
