<template>
  <transition name="slide-fade">
    <Modal
      :showPacket="showPacket"
      @closeModal="onCloseModalPacket"
      :titleModal="`Pilih Paket ${provider}`"
    >
      <div class="dropdown modal-dropdown" v-if="packets.length > 0">
        <div
          v-for="(packet, id) in packets"
          :key="id"
          :class="`modal-dropdown__list ${setClassInActivePacket(packet)}`"
          @click="onChoosePacket(packet)"
        >
          <div class="dropdown__item item align-normal mb-2 packet-title">
            <div class="font-weight-bold packet-name">
              {{ packet.name }}
              <span v-if="packet.bestSeller">
                <i class="fa fa-star" style="color: gold"></i>
              </span>
            </div>
            <div class="font-weight-bold" v-if="packet.grandTotal > 0">
              {{ formatMoneyRupiah(packet.grandTotal) }} /
              {{ setPaymentType(packet) }}
            </div>
          </div>
          <div class="dropdown__item item align-normal">
            <div class="is-size-6">Detail Harga</div>
          </div>
          <div class="dropdown__item item align-normal" v-if="packet.price > 0">
            <div class="is-size-6">Harga Patungan</div>
            <div class="is-size-6">
              {{ formatMoneyRupiah(packet.price) }} /
              {{ setPaymentType(packet) }}
            </div>
          </div>
          <div class="dropdown__item item align-normal">
            <div class="is-size-6">Biaya Admin</div>
            <div class="is-size-6">
              {{ setAdminFee(packet) }}
            </div>
          </div>
          <div class="dropdown__item item align-normal mt-2">
            <div>Tipe Paket</div>
            <div class="packet-type">
              {{ packet.typePacket.toUpperCase() }}
            </div>
          </div>
          <div v-if="packet.facilities">
            <ul style="padding-left: 0px">
              <li v-for="(val, index) in packet.facilities" :key="index">
                {{ val }}
              </li>
            </ul>
          </div>
          <div
            class="item"
            style="line-height: 16px"
            v-if="packet.preOrderNotes"
          >
            <label style="font-weight: 700">Pre-Order:</label>
            {{ packet.preOrderNotes }}
          </div>
          <div
            style="padding: 0px"
            v-if="packet.oneMonthFree"
            class="dropdown__item item"
          >
            <LabelChecked title="Gratis Satu Bulan Pertama" />
          </div>
          <div class="dropdown__item item" v-if="packet.userHost">
            <div>
              <b>Syarat menjadi User Host:</b>
              Memiliki Kartu Debit/Kredit Internasional yang dapat digunakan
              untuk melakukan pembayaran ke Netflix, Seperti Jenius, BNI
              Internasional dan lainnya.
            </div>
          </div>
          <div class="dropdown__item item" v-if="packet.userHost">
            <a
              @click="openNewPage('user-host')"
              style="color: #2895ff; cursor: pointer"
              >Baca Ketentuan User Host Selengkapnya</a
            >
          </div>
          <div class="dropdown__item item" v-if="packet.isPreOrder">
            <a
              @click="openNewPage('pre-order')"
              style="color: #2895ff; cursor: pointer; margin-top: 8px"
              >Baca Ketentuan Pre-Order Selengkapnya</a
            >
          </div>
          <div
            class="dropdown__item item"
            v-if="!packet.active"
            style="color: red"
          >
            Paket Sedang Tidak Aktif
          </div>
        </div>
      </div>
      <div class="dropdown modal-dropdown" style="text-align: center" v-else>
        <h5 style="margin: 10px 0px">Tunggu sebentar ya...</h5>
      </div>
    </Modal>
  </transition>
</template>

<script>
import Modal from '~/components/mollecules/Modal';
import LabelChecked from '~/components/atoms/LabelChecked';
import { currencyFormat } from '~/helpers';

export default {
  components: {
    LabelChecked,
    Modal,
  },
  data() {
    return {
      isShowModal: this.$props.showPacket,
    };
  },
  methods: {
    formatMoneyRupiah(num) {
      return currencyFormat(num);
    },
    openNewPage(page) {
      window.open(`/info/${page}`);
    },
    setAdminFee(value) {
      return value.adminFee > 0
        ? `${this.formatMoneyRupiah(value.adminFee)} / ${this.setPaymentType(
            value
          )}`
        : 'FREE';
    },
    setClassInActivePacket(packet) {
      return !packet.active && 'inactive';
    },
    setPaymentType(value) {
      return value.paymentType === 'month' ? 'bulan' : 'tahun';
    },
  },
  props: {
    choosedPacket: Object,
    discountPrice: Number,
    isVoucherValid: Boolean,
    onChoosePacket: Function,
    onCloseModalPacket: Function,
    packet: String,
    packets: Array,
    price: Number,
    provider: String,
    showInvalidVoucher: Boolean,
    showPacket: Boolean,
    userHost: Boolean,
    vouchersData: Array,
    voucher: String,
  },
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.4s ease;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-50px);
  opacity: 0.2;
}

.packet-type {
  color: green;
  font-weight: 800;
}

.inactive {
  opacity: 0.4;
  pointer-events: none;
}

.modal-dropdown {
  border-radius: 0.25rem;
  border: none !important;
  margin-bottom: 0px !important;
  max-width: unset !important;
  &__list {
    padding: 16px 0px 0px 0px;
    border: 1px solid #bbb;
    margin: 16px;
    border-radius: 8px;
  }
  .item {
    padding: 2px 0px !important;
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

  .modal-dropdown {
    max-width: 100%;
    .item {
      div {
        // max-width: 9rem;
      }
    }
  }

  @-webkit-keyframes fadein {
    from {
      top: 0;
      opacity: 0;
    }
    to {
      top: 70px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      top: 0;
      opacity: 0;
    }
    to {
      top: 70px;
      opacity: 1;
    }
  }
}
</style>
