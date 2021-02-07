<template>
    <div :class="`event-detail ${extendClass}`" v-if="dataEvent">
        <h5 class="bold" style="padding: 20px 16px 0px 16px">Detail Acara {{ dataEvent.type_event }}</h5>
        <img :src="dataEvent.url_banner" :alt="dataEvent.title_event"/>
        <div class="event-detail__info">
            <div class="event-detail__info--key">Jenis Acara</div>:<div class="event-detail__info--value bold">{{ dataEvent.type_event }}</div>
        </div>
        <div class="event-detail__info">
            <div class="event-detail__info--key">Topik</div>:<div class="event-detail__info--value bold">{{ dataEvent.title_event }}</div>
        </div>
        <div class="event-detail__info">
            <div class="event-detail__info--key">Pembicara</div>:
            <div class="event-detail__info--value">
                <ul style="padding-left: 10px; margin-bottom: 0;">
                    <li v-for="(name, id) in  handleDataNarasumber(dataEvent.narasumber)" :key="id">{{ name }}</li>
                </ul>
            </div>
        </div>
        <div class="event-detail__info" v-if="dataEvent.host">
            <div class="event-detail__info--key">Host</div>:<div class="event-detail__info--value">{{ dataEvent.host }}</div>
        </div>
        <div class="event-detail__info">
            <div class="event-detail__info--key">Waktu</div>:<div class="event-detail__info--value">{{ dataEvent.date }}</div>
        </div>
        <div class="event-detail__info">
            <div class="event-detail__info--key"></div><div class="event-detail__info--value">{{ dataEvent.time }}</div>
        </div>
        <div class="event-detail__info">
            <div class="event-detail__info--key">Lokasi</div>:<div class="event-detail__info--value">{{ dataEvent.location }}</div>
        </div>
        <div class="event-detail__info" v-if="dataEvent.giveaway">
            <div class="event-detail__info--key">Giveaway</div>:<div class="event-detail__info--value">{{ dataEvent.giveaway }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        extendClass: {
            type: String,
            default: 'desktop'
        },
        dataEvent: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            test: "Ingelora Loudia Anggita (HR Practitioner & Member HR Migas Community)#Faishal Arief (Founder & CEO Seakun.id)#Batara Indra (Risk Management Practitioner)"
        }
    },
    methods: {
        handleDataNarasumber(data) {
            return data && data.split('#')
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
.bold {
    font-weight: 700 !important;
}
</style>