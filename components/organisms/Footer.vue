<template>
    <div class="footer">
        <div class="container">
            <div class="footer__row">
                <div class="footer__copyright">
                    <p>Copyright ©2020 seakun.com </p>
                </div>
                <!-- <div class="footer__policy">
                    <p>Syarat dan Ketentuan | Kebijakan Privasi</p>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.footer {
    padding: 35px 0px 10px 0px;
    background-color: #303030;
    color: white!important;
    font-size: 12px!important;
    h5 {
        color: #8e8e8e!important;
        padding: 16px!important;
        margin-bottom: 16px;
        font-size: 16px;
    }
    .container {
        max-width: 1120px!important;
        margin: 0 auto !important;
    }
    .col-1 {
        width: 200%;
    }
    &__row {
        display: flex;
        margin-bottom: 45px;
    }
    .coloum {
        width: 25%;
        text-align: left;
    }
    &__line {
        padding: 0px 16px!important;
        margin-top: -40px;
    }
    &__copyright {
        padding: 0px 16px!important;
        width: 70%;
    }
    &__policy {
        padding: 0px 16px!important;
        margin-left: auto;
    }
    .grey-text {
        color: #8e8e8e!important;
    }
}
@media (max-width: 800px) {
    .footer {
        padding-top: 10px;
    }
   .footer__row {
        display: block;
    }
    .footer__contact-us, .footer__services-host, .footer__services, .footer__tutorial, .footer__payment, .footer__reasons {
        display: none;
    }
    .footer__newsletter {
        width: auto!important;
    }
    .coloum {
        width: auto!important;
    }
    i {
        font-size: 20px;
        margin: 0px 10px!important;
    }
    .footer__copyright {
        width: auto!important;
    }
    h5 {
        margin-bottom: 0px!important;
        // margin-top: -10px!important;
    }
}
</style>