<template>
    <div>
        <Header/>
        <div class="event">
            <div class="event-reg">
                <h4>Daftar Webinar</h4>
                <div class="event-reg__form">
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
                    />
                    <p
                        class="error-msg"
                        v-if="errorMsg.job"
                    >{{ errorMsg.job }}</p>
                    <FormInput
                        label="Instansi/Perusahaan*"
                        placeholder="Masukkan Instansi"
                        class="input"
                        :errorMessage="errorMsg.company"
                        @keydown="onChangeInput('company')"
                        v-model="dataUser.company"
                    />
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
                </div>
            </div>
            <div class="event-banner">

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
.event {
    padding: 80px 0px !important;
    background-color: white;
    display: flex;
    max-width: 1100px !important;
    font-weight: 500 !important;
    margin: 0 auto !important;
    &__banner {
        margin: 0 auto;
        display: block;
        width: 150vh;
    }
}
</style>