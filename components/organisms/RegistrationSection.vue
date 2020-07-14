<template>
    <div class="reg">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="reg__form">
                        <h3>Daftar Sekarang</h3>
                        <div>
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Nama Lengkap</label>
                                    <input type="text" class="form-control" placeholder="Contoh: John Doe">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Alamat Email</label>
                                    <input type="email" class="form-control" placeholder="mail@gmail.com">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Nomor Handphone (Whatsapp)</label>
                                    <input type="text" class="form-control" placeholder="08123435456">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Ingin Berlangganan</label>
                                    <input type="text" class="form-control" placeholder="Netflix">
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div style="margin-left: 100px">
                        <img src="/images/registration.png" alt="Image not found" style="width: 37rem;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.reg {
    padding: 40px 0px !important;
    background-color: #f9f6fd;
    &__form {
        // margin-left: 100px;
        width: 50%;
        input {
            max-width: 300px;
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
    &__img {
        img {
            width: 50rem;
        }
    }
    .row {
        padding: 0px 8px !important;
    }
    button {
        margin-top: 16px;
        padding: 5px 16px;
        min-width: 140px;
    }
}
@media (max-width: 800px) {
    img {
        width: 180px!important;
        margin: 0 auto!important;
    }
    .row {
        display:block;
    }
    .reg__img {
        text-align: center;
        margin-top: 20px;
    }
    h2 {
        font-size: 20px;
    }
}
@media  only screen and (min-width: 880px) and (max-width: 1020px) {
    .container {
        display: contents!important;
    }
}
</style>