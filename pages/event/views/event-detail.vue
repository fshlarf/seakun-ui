<template>
    <div :class="`event-detail ${extendClass}`">
        <h5 style="padding: 20px 16px 0px 16px">Detail Acara</h5>
        <img src="https://gmedia.net.id/upload/foto_artikel/20200814NlwIohPBV4.png" alt="event image"/>
        <div class="event-detail__info">
            <div class="event-detail__info--key">Jenis Acara</div>:<div class="event-detail__info--value">Webinar</div>
        </div>
        <div class="event-detail__info">
            <div class="event-detail__info--key">Pembicara</div>:<div class="event-detail__info--value">Udin</div>
        </div>
        <div class="event-detail__info">
            <div class="event-detail__info--key">Host</div>:<div class="event-detail__info--value">Ucok</div>
        </div>
        <div class="event-detail__info">
            <div class="event-detail__info--key">Topik</div>:<div class="event-detail__info--value">How to become founder</div>
        </div>
        <div class="event-detail__info">
            <div class="event-detail__info--key">Waktu</div>:<div class="event-detail__info--value">16 Februari 2021</div>
        </div>
        <div class="event-detail__info">
            <div class="event-detail__info--key"></div><div class="event-detail__info--value">11.00 WIB - 13.00 WIB</div>
        </div>
        <div class="event-detail__info">
            <div class="event-detail__info--key">Lokasi</div>:<div class="event-detail__info--value">Via Google Meet (link akan dibagikan via email)</div>
        </div>
        <div class="event-detail__info">
            <div class="event-detail__info--key">Giveaway</div>:<div class="event-detail__info--value">Voucher E-Wallet untuk 6 orang beruntung (masing-masing Rp50.000)</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        extendClass: {
            type: String,
            default: 'desktop'
        }
    }
}
</script>

<style lang="scss" scoped>
.event {
    &-detail {
        width: 50%;
        margin: 20px 20px;
        padding: 0px 10px;
        border: 1px solid #86d0c1;
        height: -webkit-fill-available;
        border-radius: 8px;
        padding-bottom: 20px;
        img {
            width: 100%;
            padding: 16px;
        }
        &__info {
            display: flex;
            padding: 2px 16px;
            &--key {
                width: 18%;
                margin-right: 16px;
            }
            &--value {
                width: 70%;
                margin-left: 16px;
            }
        }
    }
}
.desktop {
    display: block !important;
}
.mobile {
    display: none !important;
}
@media (max-width: 800px) {
    .event {
        display: block;
        width: 100% !important;
        padding: 80px 10px !important;
        font-size: 14px !important;
        &-reg {
            width: 100% !important;
            padding: 0 4px;
            margin: 0px 0px;
        }
        &-detail {
            width: 100% !important;
            padding: 0 0px;
            padding-bottom: 16px;
            margin: 0px 0px;
            &__info {
                &--key {
                    width: 28% !important;
                }
            }
        }
    }
    .desktop {
        display: none !important;
    }
    .mobile {
        display: block !important;
    }
}
</style>