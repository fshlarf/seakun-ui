<template>
  <Modal :is-show="showModal" @onClose="closeModal">
    <div class="md:w-[310px]">
      <img
        class="mx-auto tn:w-[165px] md:w-[188px]"
        src="/images/modal-seakun-help.svg"
        alt="seakun help"
      />

      <div
        class="tn:mt-[12px] md:mt-[20px] tn:space-y-[10px] md:space-y-[12px]"
      >
        <div
          class="rounded-[8px] border-[#8DCABE] border-[2px] overflow-hidden w-[306px] flex items-center gap-[12px] gradient"
          role="button"
          @click="toSeakunHelp"
        >
          <img
            class="w-[80px]"
            src="/images/to-seakun-help.svg"
            alt="to seakun help"
          />
          <div class="w-[211px]">
            <p class="text-[14px] font-medium text-[#4BAC99]">Seakun Help</p>
            <p class="text-[#4BAC99] text-[12px] w-[203px]">
              Laporan kendala apapun pada layanan Seakun
            </p>
          </div>
        </div>

        <div
          class="rounded-[8px] border-[#8DCABE] border-[2px] overflow-hidden w-[306px] flex items-center gap-[12px] gradient"
          role="button"
          @click="toAppointment"
        >
          <img
            class="w-[80px]"
            src="/images/to-appointment.svg"
            alt="to seakun help"
          />
          <div class="w-[211px]">
            <p class="text-[14px] font-medium text-[#4BAC99]">Janjian Login</p>
            <p class="text-[#4BAC99] text-[12px] w-[203px]">
              Janjian Login Disney, Netflix (device TV), Prime Video, Medium,
              dll
            </p>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from '~/components/atoms/ModalSecondary.vue';
import IconQuestionMark from '~/components/icons/QuestionMark.vue';
import IconAppointment from '~/components/icons/Appointment.vue';
import IconInfo from '~/components/icons/Info.vue';

export default {
  data() {
    return {
      isHovered: false,
    };
  },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    customer: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    Modal,
    IconQuestionMark,
    IconAppointment,
    IconInfo,
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
    toSeakunHelp() {
      window.location.href = 'https://forms.gle/t1AbaxnjEtJr8NAPA';
    },
    toAppointment() {
      window.location.href = 'https://bit.ly/JanjianLogin';
    },
  },
};
</script>

<style scoped>
.gradient {
  background: linear-gradient(143deg, #fff 30%, #86d0c1 180%);
}
</style>
