<template>
    <div>
        <transition name="slide-fade">
            <div class="dropdown choosed-packet" v-if="choosedPacket.name">
                <div style="padding: 0px; font-size: 14px">
                    <div class="dropdown__item align-normal">
                        <div style="max-width: 9rem">
                            {{ choosedPacket.name }}
                        </div>
                        <div>
                            {{ formatMoneyRupiah(choosedPacket.price) }} / bulan
                        </div>
                    </div>
                    <div class="dropdown__item item align-normal">
                        <div style="max-width: 9rem">Biaya Admin</div>
                        <div>
                            {{ formatMoneyRupiah(choosedPacket.adminFee) }} /
                            bulan
                        </div>
                    </div>
                    <div class="dropdown__item item align-normal">
                        <div style="max-width: 9rem">Total</div>
                        <div
                            style="font-weight: 900"
                            :style="
                                isVoucherValid
                                    ? { 'text-decoration': 'line-through' }
                                    : { 'text-decoration': 'unset' }
                            "
                        >
                            {{ formatMoneyRupiah(choosedPacket.grandTotal) }} /
                            bulan
                        </div>
                    </div>
                    <div
                        class="dropdown__item item align-normal"
                        style="margin-top: -8px"
                        v-if="isVoucherValid"
                    >
                        <div style="max-width: 9rem"></div>
                        <div style="font-weight: 900">
                            {{
                                formatMoneyRupiah(
                                    choosedPacket.voucherGrandTotal
                                )
                            }}
                            / bulan
                        </div>
                    </div>
                    <div
                        class="dropdown__item item align-normal"
                        style="margin: -8px 0px"
                        v-if="isVoucherValid"
                    >
                        <p
                            style="
                                color: limegreen;
                                margin-top: 6px;
                                font-weight: 500;
                            "
                        >
                            Potongan harga penggunaan Voucher
                            {{ formatMoneyRupiah(choosedPacket.voucherDisc) }}
                            (Berlaku di bulan pertama)
                        </p>
                    </div>
                    <div style="padding: 0px" v-if="choosedPacket.oneMonthFree">
                        <LabelChecked title="Gratis Satu Bulan Pertama" />
                    </div>
                    <div class="dropdown__item-info">
                        {{ choosedPacket.desc }}
                    </div>
                    <div
                        class="dropdown__item item align-normal"
                        v-if="choosedPacket.userHost"
                    >
                        <a
                            @click="onOpenPage('user-host')"
                            style="color: dodgerblue; cursor: pointer"
                            >Ketentuan User Host</a
                        >
                    </div>
                    <div v-if="choosedPacket.notes" class="notes">
                        <div style="padding: 0px">Catatan:</div>
                        <p :class="showMore ? 'show-text' : 'hide'">
                            {{ choosedPacket.notes }}
                        </p>
                    </div>
                    <div @click="showMore = !showMore" class="showmore">
                        {{ wordingShowMore(showMore) }}
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import LabelChecked from "~/components/atoms/LabelChecked";
import { currencyFormat } from "~/helpers"

export default {
    components: {
        LabelChecked,
    },
    data() {
        return {
            showMore: false
        }
    },
    methods: {
        formatMoneyRupiah(num) {
            return currencyFormat(num)
        },
        onOpenPage(page) {
            window.open(`/info/${page}`)
        },
        wordingShowMore(showMore) {
            return showMore ? "Ciutkan" : "Selengkapnya";
        },
    },
    props: {
        choosedPacket: Object,
        isVoucherValid: Boolean,
    },
};
</script>

<style lang="scss" scoped>
.notes {
    overflow: hidden;
    .hide {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        height: 40px;
    }
    .show-text {
        display: -webkit-box;
        -webkit-line-clamp: unset;
        -webkit-box-orient: vertical;
        height: auto;
    }
}
.choosed-packet {
    div {
        cursor: unset !important;
        &:hover {
            background-color: unset !important;
        }
    }
    .showmore {
        color: #04604d !important;
        &:hover {
            cursor: pointer !important;
        }
    }
}
.dropdown {
    border-radius: 0.25rem;
    border: 1px solid #ced4da;
    padding: 0px;
    margin-bottom: 20px;
    max-width: 300px;
    div {
        padding: 8px 16px;
        cursor: pointer;
        &:hover {
            background-color: #daeeef;
            border-color: #c6e9eb;
        }
    }
    span {
        color: coral;
        font-size: 12px;
    }
    &__item {
        padding: 8px 16px !important;
        display: flex;
        align-items: center;
        justify-content: space-between;

        ul {
            list-style-type: none;
            margin: 0 !important;
            li {
                font-size: 0.8rem !important;
            }
        }

        div {
            padding: 0px;
        }
        img {
            max-width: 20px;
        }
        &-info {
            font-weight: 400;
            padding-top: 0px !important;
            font-style: italic;
        }
    }
    .align-normal {
        align-items: normal !important;
    }
    &__best-item {
        display: flex;
        align-items: center;
        padding: 0px 0px !important;
        div {
            padding: 0px 10px;
        }
    }
}

@media (max-width: 800px) {
    .dropdown {
        max-width: 100%;
        .packet-name {
            max-width: 180px;
        }
    }
}
</style>