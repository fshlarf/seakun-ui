<template>
  <div
    class="flex p-3 bg-[#FFE1E1] rounded-lg text-xs md:text-sm leading-5 lg:leading-6"
    :class="[withIcon ? 'flex-row gap-2' : 'flex-col', className]"
  >
    <section>
      <div v-if="withIcon">
        <svg
          width="20"
          height="42"
          viewBox="0 0 20 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.16602 5.83366H10.8327V7.50033H9.16602V5.83366ZM9.16602 9.16699H10.8327V14.167H9.16602V9.16699ZM9.99935 1.66699C5.39935 1.66699 1.66602 5.40033 1.66602 10.0003C1.66602 14.6003 5.39935 18.3337 9.99935 18.3337C14.5993 18.3337 18.3327 14.6003 18.3327 10.0003C18.3327 5.40033 14.5993 1.66699 9.99935 1.66699ZM9.99935 16.667C6.32435 16.667 3.33268 13.6753 3.33268 10.0003C3.33268 6.32533 6.32435 3.33366 9.99935 3.33366C13.6743 3.33366 16.666 6.32533 16.666 10.0003C16.666 13.6753 13.6743 16.667 9.99935 16.667Z"
            fill="#2D2D2D"
          />
        </svg>
      </div>
      <div v-else>
        <span class="font-bold">Catatan:</span>
      </div>
    </section>
    <section>
      <p>
        Seiring terjadinya perubahan member pada grup patungan akun Netflix,
        kami kerap kali mengalami kendala. Menanggapi hal ini, maka Seakun
        membuat kebijakan baru terkait durasi berlangganan
        <span class="font-bold"> Netflix (User Reguler TV / Non TV)</span>,
        berupa durasi berlangganan yang sebelumnya dalam kurun waktu 1 bulan
        menjadi <span class="font-bold">minimal 2 bulan</span>. Hal ini perlu
        kami lakukan untuk menjaga akun yang telah berlangganan Netflix tidak
        sering mengalami pergantian member dan terhindar dari kendala.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    withIcon: {
      typeof: Boolean,
      default: true,
    },
    className: {
      typeof: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped></style>
