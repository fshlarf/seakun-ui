<template>
    <div class="footer">
        <div class="container">
            <div class="footer__row">
                <div class="footer__copyright">
                    <p>Copyright ©2020 seakun.id </p>
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
    padding: 10px 16px;
    background-color: #303030;
    color: white!important;
    font-size: 12px!important;
    .container {
        max-width: 1120px!important;
        margin: 0 auto !important;
    }
    &__row {
        display: flex;
        p {
            margin-bottom: 0px;
        }
    }
    &__copyright {
        padding: 0px 0px!important;
        width: 70%;
    }
    &__policy {
        padding: 0px 16px!important;
        margin-left: auto;
    }
}
@media (max-width: 800px) {
    .footer {
        padding-top: 10px;
        &__row {
            padding: 10px 0px;
            display: block;
            margin-bottom: 0px;
            p {
                margin-bottom: 0px;
            }
        }
        &__copyright {
            width: auto!important;
        }
    }
}
</style>
