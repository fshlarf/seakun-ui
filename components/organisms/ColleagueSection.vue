<template>
    <div class="container-collega">
        <div>
            <h4 style="font-weight: 700">Platform Digital yang Tersedia</h4>
        </div>
        <div class="collega container" align="center">
            <div class="col collega__content">
                <img src="/images/netflix.png" alt="Image not found">
            </div>
            <div class="col collega__content">
                <img src="/images/spotify.png" alt="Image not found">
            </div>
            <div class="col collega__content">
                <img src="/images/steam.png" alt="Image not found">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.collega {
    padding: 20px 40px;
    text-align: center;
    position: relative;
    min-height: 150px;
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-bottom: 40px;
    &__content {
        img {
            width: 13rem;
        }
    }
}
@media (max-width: 800px) {
    .container-collega {
        margin-top: 70px;
    }
    .collega {
        display: block;
        margin-top: -60px;
        margin-bottom: 0px;
        img {
            width: inherit;
            margin: 0 auto;
            margin-top: 20px!important;
        }
        .row {
            display: block;
        }
    }
}
</style>
