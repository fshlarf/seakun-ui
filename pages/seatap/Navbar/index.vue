<template>
  <div
    class="container lg:flex lg:justify-between lg:items-center h-24 border-b border-[#E0E0E0]"
  >
    <div class="mr-[291px]">
      <Logo label="Seakun.id" />
    </div>
    <nav
      class="lg:flex lg:justify-end lg:flex-row text-base text-[#8DCABE]"
      v-for="(navbar, id) in navbarLink"
      :key="id"
    >
      <p>
        {{ navbar.label }}
      </p>
    </nav>
  </div>
</template>

<script>
import Logo from '~/pages/seatap/views/Logo.vue';

export default {
  components: {
    Logo,
  },

  data() {
    return {
      navbarLink: [
        {
          id: 1,
          label: 'Provider',
        },
        {
          id: 2,
          label: 'Tipe User',
        },
        {
          id: 3,
          label: 'Cara Pesan',
        },
        {
          id: 4,
          label: 'Testimoni',
        },
        {
          id: 5,
          label: 'FAQ',
        },
      ],
    };
  },
};
</script>
