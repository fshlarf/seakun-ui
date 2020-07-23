<template>
    <div class="reg" id="reg">
        <div id="snackbar">Pendaftaran berhasil. Kamu akan segera dihubungi lewat email dan whatsapp. Ditunggu ya!</div>
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
                            <div v-if="provider != 'Contoh: Netflix'">
                                <div class="form-group">
                                    <ButtonDrop
                                        @onClick="showPacket = !showPacket"
                                        label="Pilih Paket"
                                        :btnText="packet"
                                    />
                                    <p class="error-msg" v-if="errorMsg.packet">{{ errorMsg.packet }}</p>
                                </div>
                                <transition name="slide-fade">
                                    <div class="dropdown" v-if="showPacket">
                                        <div v-for="(packet, id) in packets" :key="id" style="padding: 0px" @click="choosePacket(packet)">
                                            <div class="dropdown__item">
                                                <div>{{ packet.name }}</div>
                                                <div>{{ formatMoneyRupiah(packet.price) }} / bln</div>
                                            </div>
                                            <div style="padding: 0px" v-if="packet.oneMonthFree">
                                                <LabelChecked title="Gratis Satu Bulan Pertama"/>
                                            </div>
                                            <div class="dropdown__item-info">{{ packet.desc }}</div>
                                            <hr v-if="id != packets.length - 1" style="margin: 0px!important">
                                        </div>
                                    </div>
                                </transition>
                            </div>
                            <button class="btn btn-primary" @click.prevent="clickSubmit" :disabled="isDisableBtn">Submit</button>
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
export default {
    components: {
        ButtonDrop: ButtonDrop,
        LabelChecked: LabelChecked,
    },
    data() {
        return {
            fullname: '',
            email: '',
            whatsapp: '',
            provider: 'Contoh: Netflix',
            packet: 'Contoh: Group(Family)',
            price: null,
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
                {name: 'Personal', active: true, desc: 'Satu akun satu orang', price: 140000, oneMonthFree: true},
                {name: 'Group (Family)', active: true, desc: 'Satu akun dipakai maksimum 4 orang', price: 43000, oneMonthFree: true}
            ],
            errorMsg: {
                fullname: '',
                email: '',
                whatsapp: '',
                provider: '',
                packet: ''
            },
            isDisableBtn: false
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
                if (res.data.message == "success") this.showSnackBar()
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
        },
        choosePacket(packet) {
            this.packet = packet.name
            this.showPacket = false
            this.errorMsg.packet = ''
            this.price = packet.price
        },
        formatMoneyRupiah(num) {
            return num && `Rp ${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`
        },
        showSnackBar() {
            const snackBar = document.getElementById("snackbar")
            snackBar.className = "show"
            setTimeout(() => { snackBar.className = snackBar.className.replace("show", "")}, 5000)
        }
    }
}
</script>

<style lang="scss" scoped>
.reg {
    padding: 40px 0px !important;
    background-color: white;
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
                color: #bbbbbb;
                font-weight: 400;
                padding-top: 0px!important;
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
        visibility: hidden;
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
    }

    #snackbar.show {
        visibility: visible;
        -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
        animation: fadein 0.5s, fadeout 0.5s 2.5s;
    }

    @-webkit-keyframes fadein {
        from {top: 0; opacity: 0;} 
        to {top: 130px; opacity: 1;}
    }

    @keyframes fadein {
        from {top: 0; opacity: 0;}
        to {top: 130px; opacity: 1;}
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
