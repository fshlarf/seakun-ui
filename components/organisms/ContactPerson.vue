<template>
    <div class="cp">
        <div class="container">
            <div class="cp__title">
                <p>Perlu <b>BANTUAN?</b> Hubungi Kami : <b>0822 77068394</b></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.cp {
    padding: 43px 0px;
    background-color: #daeeef;
    color: #86d0c1;
    .container {
        max-width: 1120px!important;
        margin: 0 auto !important;
        display: flex;
    }
    &__title {
        width: 75%;
        p {
            padding-top: 5px;
            font-weight: 300 !important;
            font-size: 24px;
        }
    }
}
@media (max-width: 800px) {
    .container {
        display: block!important;
    }
    .cp__title {
        width: 100%;
        p {
            font-size: 18px!important;
        }
    }
    .cp__channel {
        width: fit-content;
        margin: 0 auto;
    }
}
</style>