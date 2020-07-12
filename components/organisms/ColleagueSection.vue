<template>
    <div>
        <div>
            <h4 style="font-weight: 700">Platform Digital yang Tersedia</h4>
        </div>
        <div class="collega container" align="center">
            <div class="col collega__content">
                <img src="~/assets/images/netflix.png" alt="Image not found" style="width: 13rem;">
            </div>
            <div class="col collega__content">
                <img src="~/assets/images/spotify.png" alt="Image not found" style="width: 13rem;">
            </div>
            <div class="col collega__content">
                <img src="~/assets/images/steam.png" alt="Image not found" style="width: 13rem;">
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
}
@media (max-width: 800px) {
    img {
        width: 180px!important;
        margin: 0 auto;
        margin-top: 20px!important;
    }
     .row {
        display: block;
    }
}
</style>