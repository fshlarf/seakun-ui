<template>
  <div
    class="!px-4 lg:px-8 xl:px-0 pb-4 w-full md:w-auto !overflow-hidden transition-all ease-linear duration-500"
    :class="`alert md:right-[20px] ${
      show ? 'top-[20px] xl:top-[30px] ' : '-top-[300px]'
    }`"
  >
    <div
      class="!block xl:right-[85px] rounded-[8px] overflow-hidden bg-white !w-full lg:max-w-max !shadow-md"
    >
      <div class="flex items-stretch gap-[10px] xl:gap-[20px] w-full">
        <div class="w-[5px] items-stretch shrink-0" :class="borderColor"></div>
        <div class="flex justify-center items-center shrink-0 py-[14px]">
          <img
            v-if="status"
            class="w-[28px] md:w-[32px] xl:w-[42px]"
            :src="`/images/icons/alert/${status}.svg`"
            alt="alert icon"
          />
        </div>
        <div class="flex justify-between items-center w-full">
          <div
            class="py-[14px] xl:text-base text-xs md:text-sm xl:min-w-[300px] xl:max-w-[500px] flex items-center !w-full"
          >
            <div class="w-full">
              <p v-if="title" class="font-bold" :class="color">
                {{ title }}
              </p>
              <p>{{ message }}</p>
            </div>
          </div>
          <div
            class="flex justify-center items-center cursor-pointer max-w-max px-[10px] xl:px-[20px] shrink-0"
            @click="show = false"
          >
            <img
              class="w-[20px] md:w-[22px] xl:w-[24px]"
              src="/images/icons/alert/close.svg"
              alt="close alert"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'alert',
  data: () => ({
    show: false,
    color: '',
    title: '',
    message: '',
    duration: 0,
    status: '',
    borderColor: '',
  }),
  methods: {
    showAlert({ message, title, duration, status }) {
      this.status = status;
      this.message = message;
      this.title = title;
      this.show = true;
      this.duration = duration
        ? duration
        : this.status == 'success'
        ? 3000
        : 5000;
      this.setColorByStatus(status);
      this.hideAlert();
    },
    hideAlert() {
      if (this.show) {
        setTimeout(
          function () {
            this.show = false;
          }.bind(this),
          this.duration
        );
      }
    },
    setColorByStatus(status) {
      switch (status) {
        case 'success':
          this.color = 'text-[#00BA88]';
          this.borderColor = 'bg-[#00BA88]';
          return;
        case 'warning':
          this.color = 'text-[#F3C10A]';
          this.borderColor = 'bg-[#F3C10A]';
          return;
        case 'neutral':
          this.color = 'text-[#2D2D2D]';
          this.borderColor = 'bg-[#2D2D2D]';
          return;
        case 'error':
          this.color = 'text-[#FF3838]';
          this.borderColor = 'bg-[#FF3838]';
          return;
      }
    },
  },
};
</script>

<style scoped>
.alert {
  position: fixed;
  z-index: 900;
}
.alert__show {
  display: flex;
}
</style>
