<template>
    <div class="reg" id="reg">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="reg__form">
                        <h3>Daftar Sekarang</h3>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Nama Lengkap</label>
                                <input type="text" class="form-control" placeholder="Contoh: John Doe" @keydown="onChangeFullname" v-model="fullname">
                                <p class="error-msg" v-if="errorMsg.fullname">{{ errorMsg.fullname }}</p>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" class="form-control" placeholder="mail@gmail.com" @keydown="onChangeEmail" v-model="email">
                                <p class="error-msg" v-if="errorMsg.email">{{ errorMsg.email }}</p>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Nomor Handphone (Whatsapp)</label>
                                <input type="text" class="form-control" placeholder="08123435456" v-model="whatsapp" @keydown="onChangeWhatsapp">
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
                                    <div v-for="(provider, id) in providers" :key="id" @click="chooseProvider(provider)">
                                        <div>{{ provider.name }}</div>
                                    </div>
                                </div>
                            </transition>
                            <Fragment v-if="provider != 'Contoh: Netflix'">
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
                                        <div v-for="(packet, id) in packets" :key="id" @click="choosePacket(packet)">
                                            <div>{{ packet.name }}</div>
                                        </div>
                                    </div>
                                </transition>
                            </Fragment>
                            <button class="btn btn-primary" @click.prevent="clickSubmit">Submit</button>
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
import qs from 'querystring'
import ButtonDrop from '~/components/atoms/ButtonDropDown'
import { Fragment } from 'vue-fragment'
export default {
    components: {
        ButtonDrop: ButtonDrop,
    },
    data() {
        return {
            fullname: '',
            email: '',
            whatsapp: '',
            provider: 'Contoh: Netflix',
            packet: 'Contoh: Group(Family)',
            showProvider: false,
            showPacket: false,
            providers: [
                {name: 'Netflix', active: true},
                {name: 'Spotify', active: true},
                {name: 'Youtube', active: true},
                {name: 'Steam', active: true},
                {name: 'Joox', active: true},
                {name: 'IBC Channel', active: true}
            ],
            packets: [
                {name: 'Single', active: true, desc: 'Paket Untuk Pribadi'},
                {name: 'Group (Family)', active: true, desc: 'Satu akun dipakai maksimum 4 orang'}
            ],
            errorMsg: {
                fullname: '',
                email: '',
                whatsapp: '',
                provider: '',
                packet: ''
            }
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
                packet: this.packet
            }
            this.fullname && axios.post('http://localhost:4000/registered-user', payload)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        },
        chooseProvider(provider) {
            this.provider = provider.name
            this.showProvider = false
            this.packet = 'Contoh: Group (Family)'
            this.errorMsg.provider = ''
        },
        choosePacket(packet) {
            this.packet = packet.name
            this.showPacket = false
            this.errorMsg.packet = ''
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
        div {
            padding: 6px;
            cursor: pointer;
            &:hover {
                background-color: whitesmoke;
            }
        }
    }
    &__form {
        // margin-left: 100px;
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
}
@media (max-width: 800px) {
    .reg {
        .btn-drop  {
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
}
@media  only screen and (min-width: 880px) and (max-width: 1020px) {
    .container {
        display: contents!important;
    }
}
</style>
