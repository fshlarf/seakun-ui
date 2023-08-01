<template>
  <Modal :is-show="showModal" @onClose="closeModal">
    <div class="md:w-[310px]">
      <img
        class="mx-auto tn:w-[165px] md:w-[188px]"
        src="/images/modal-seakun-help.svg"
        alt="seakun help"
      />

      <div class="tn:hidden md:block md:mt-[20px] space-y-[12px]">
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

      <div class="md:hidden mt-[20px] space-y-[10px]">
        <div
          class="w-[232px] border-[2px] border-[#8DCABE] rounded-[8px] h-[44px] flex items-center justify-center gap-[8px] mx-auto"
          :class="`${isHovered ? 'bg-[#4BAC99]' : 'gradient'}`"
          role="button"
          @click="toSeakunHelp"
        >
          <IconQuestionMark
            :color="`${isHovered ? '#ffffff' : '#4BAC99'}`"
            @mouseover="isHovered = !isHovered"
          />
          <p
            class="text-[14px]"
            :class="`${isHovered ? 'text-white' : 'text-[#4BAC99]'}`"
          >
            Seakun Help
          </p>
        </div>

        <div
          class="w-[232px] border-[2px] border-[#8DCABE] rounded-[8px] h-[44px] flex items-center justify-center gap-[8px] mx-auto"
          :class="`${isHovered ? 'bg-[#4BAC99]' : 'gradient'}`"
          role="button"
          @click="toAppointment"
        >
          <IconAppointment
            :color="`${isHovered ? '#ffffff' : '#4BAC99'}`"
            @mouseover="isHovered = !isHovered"
          />
          <p
            class="text-[14px]"
            :class="`${isHovered ? 'text-white' : 'text-[#4BAC99]'}`"
          >
            Janjian Login
          </p>
        </div>

        <div
          class="flex items-start justify-center space-x-[4px] w-[232px] mx-auto"
        >
          <IconInfo class="mt-[2px]" color="#F6B205" />
          <p class="text-[#F6B205] !text-[11px] w-[214px] font-medium">
            Janjian Login Disney, Netflix (device TV), Prime Video, Zoom, Apple,
            Medium.
          </p>
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
