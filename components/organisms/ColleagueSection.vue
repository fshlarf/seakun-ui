<template>
    <div class="collega" id="collega">
        <Title title="Platform Digital yang Tersedia" />
        <div class="collega__provider container" align="center">
            <div class="col collega__content">
                <img src="/images/netflix.png" alt="Image not found" />
            </div>
            <div class="col collega__content">
                <img src="/images/spotify.png" alt="Image not found" />
            </div>
            <div class="col collega__content">
                <img src="/images/steam.png" alt="Image not found" />
            </div>
        </div>
    </div>
</template>

<script>
import Title from "~/components/atoms/Title";

export default {
    component: {
        Title,
    },
};
</script>

<style lang="scss" scoped>
.collega {
    padding: 80px 0 !important;
    &__provider {
        padding: 30px 40px;
        text-align: center;
        position: relative;
        min-height: 150px;
        display: flex;
        justify-content: center;
        align-items: baseline;
    }
    &__content {
        img {
            width: 13rem;
        }
    }
}
@media (max-width: 800px) {
    .collega {
        padding: 80px 0 0 0 !important;
        &__provider {
            display: block;
            img {
                width: inherit;
                margin: 0 auto;
                margin-top: 30px !important;
            }
            .row {
                display: block;
            }
        }
    }
}
</style>
