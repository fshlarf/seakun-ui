<template>
  <Modal :is-show="showModal" @onClose="closeModal">
    <div class="">
      <h1 class="font-bold">Pengaduan Layanan</h1>
      <div
        class="grid grid-cols-2 xl:flex xl:flex-wrap items-center gap-3 xl:gap-4 mt-[16px] pb-[4px] max-w-max mx-auto"
      >
        <div
          class="rounded-[10px] bg-white w-[140px] h-[132px] shadow-md mx-auto flex justify-center items-center cursor-pointer"
          @click="toSeakunHelp"
        >
          <div class="">
            <img
              class="mx-auto"
              src="/images/seakun-help/help.svg"
              alt="report"
            />
            <div class="flex justify-center items-center gap-1 mt-[10px]">
              <p class="text-[12px]">Laporan Kendala</p>
              <div class="relative">
                <DarkTooltip
                  :is-show="isShowTooltipHelp"
                  position="center"
                  message="Laporan kendala apapun pada layanan Seakun"
                />
                <img
                  @mouseenter="isShowTooltipHelp = true"
                  @mouseleave="isShowTooltipHelp = false"
                  @click="onClickTooltip('help')"
                  class="w-[14px] h-[14px] cursor-pointer"
                  src="/images/icons/atoms/question-gray.svg"
                  alt="info"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          class="rounded-[10px] bg-white w-[140px] h-[132px] shadow-md mx-auto flex justify-center items-center cursor-pointer"
          @click="toAppointment"
        >
          <div class="">
            <img
              class="mx-auto"
              src="/images/seakun-help/appointment.svg"
              alt="appointment"
            />
            <div class="flex justify-center items-center gap-1 mt-[10px]">
              <p class="text-[12px]">Janjian Login</p>
              <div class="relative">
                <DarkTooltip
                  :is-show="isShowTooltipAppointment"
                  position="right"
                  message="Janjian Login Disney, Prime Video, Medium, dll"
                />
                <img
                  @mouseenter="isShowTooltipAppointment = true"
                  @mouseleave="isShowTooltipAppointment = false"
                  @click="onClickTooltip('appointment')"
                  class="w-[14px] h-[14px] cursor-pointer"
                  src="/images/icons/atoms/question-gray.svg"
                  alt="info"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          class="rounded-[10px] bg-white w-[140px] h-[132px] shadow-md mx-auto flex justify-center items-center cursor-pointer"
          @click="toAppointmentMeeting"
        >
          <div class="">
            <img
              class="mx-auto"
              src="/images/seakun-help/meeting.svg"
              alt="appointment meeting"
            />
            <div class="flex justify-center items-center gap-1 mt-[10px]">
              <p class="text-[12px]">Janjian Meeting</p>
              <div class="relative">
                <DarkTooltip
                  :is-show="isShowTooltipMeeting"
                  position="right"
                  message="Janjian Meeting ZOOM"
                />
                <img
                  @mouseenter="isShowTooltipMeeting = true"
                  @mouseleave="isShowTooltipMeeting = false"
                  @click="onClickTooltip('meeting')"
                  class="w-[14px] h-[14px] cursor-pointer"
                  src="/images/icons/atoms/question-gray.svg"
                  alt="info"
                />
              </div>
            </div>
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
import DarkTooltip from '~/components/atoms/DarkTooltip.vue';

export default {
  data() {
    return {
      isShowTooltipHelp: false,
      isShowTooltipAppointment: false,
      isShowTooltipMeeting: false,
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
    DarkTooltip,
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
    toAppointmentMeeting() {
      window.location.href = 'https://bit.ly/janjianmeeting';
    },
    onClickTooltip(tooltip) {
      if (window.innerWidth <= 1024) {
        if (tooltip == 'help') {
          this.isShowTooltipHelp = !this.isShowTooltipHelp;
        } else if (tooltip == 'appointment') {
          this.isShowTooltipAppointment = !this.isShowTooltipAppointment;
        } else if (tooltip == 'meeting') {
          this.isShowTooltipMeeting = !this.isShowTooltipMeeting;
        }
      }
    },
  },
};
</script>

<style scoped>
.gradient {
  background: linear-gradient(143deg, #fff 30%, #86d0c1 180%);
}
</style>