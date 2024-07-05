<template>
  <main
    class="wrapper-profile dm-sans w-full min-h-screen py-[30px] overflow-hidden"
  >
    <div class="container-dashboard-user">
      <nav class="flex items-center justify-between h-[63px]">
        <img
          @click="toHomePage"
          src="/images/brand-seakun/seakun-green.svg"
          alt="seakun"
          class="w-[120px] h-[29px] hidden md:block cursor-pointer"
        />
        <img
          @click="$router.back()"
          src="/images/icons/atoms/arrow-bold.svg"
          alt="back"
          class="w-6 h-6 md:hidden cursor-pointer"
        />
        <ProfileOptions class="relative z-40" @onClickLogout="logout" />
      </nav>
      <div
        class="mt-[30px] md:mt-[42px] lg:mt-[52px] md:flex gap-5 xl:gap-[28px]"
      >
        <div class="flex items-center justify-center gap-4">
          <div
            class="md:hidden flex gap-5 bg-[#D7F8F1] w-max rounded-[30px] relative"
          >
            <div
              class="w-1/2 h-full absolute left-0 top-0 bg-green-primary rounded-[30px] transition-all ease-in-out duration-200"
              :class="{
                'translate-x-full':
                  activePage == 'order' || activePage == 'details',
              }"
            ></div>
            <section v-for="(menu, id) in menus" :key="id" class="z-30">
              <nuxt-link
                :to="`/user${menu.link}`"
                class="flex gap-2 p-3 cursor-pointer z-40"
              >
                <img
                  :src="[
                    menu.slug == activePage || menu.secondSlug == activePage
                      ? `/images/profile-page/icons/${menu.icon}-active.svg`
                      : `/images/profile-page/icons/${menu.icon}.svg`,
                  ]"
                  alt="icons"
                />
                <p
                  :class="[
                    menu.slug == activePage || menu.secondSlug == activePage
                      ? 'text-white'
                      : 'text-green-primary',
                  ]"
                >
                  {{ menu.name }}
                </p>
              </nuxt-link>
            </section>
          </div>
          <img src="/images/icons/logout.svg" alt="logout" @click="logout" />
        </div>

        <aside
          class="hidden md:block w-full max-w-[210px] lg:max-w-[210px] xl:max-w-[298px] relative bg-white rounded-xl min-h-screen px-6"
          style="box-shadow: 0px 2px 7px 0px rgba(158, 161, 182, 0.1)"
        >
          <img
            src="/images/background/mask-sidebar-profile.png"
            alt="background"
            class="absolute top-0 right-0 object-contain"
          />
          <h1
            class="text-gray-secondary md:text-xl xl:text-2xl font-bold pt-[30px] pb-[18.5px] whitespace-nowrap"
          >
            Profile Saya
          </h1>

          <div v-for="(menu, id) in menus" :key="id" class="space-y-3">
            <nuxt-link :to="'/user' + menu.link">
              <section
                class="flex items-center gap-3 p-3 rounded-[10px] transition-all ease-in-out duration-200"
                :class="
                  menu.slug == activePage || menu.secondSlug == activePage
                    ? 'bg-[#08A0810D]/[5%] text-green-seakun-secondary-dark'
                    : 'text-[#83858A]'
                "
              >
                <img
                  :src="[
                    menu.slug == activePage || menu.secondSlug == activePage
                      ? '/images/profile-page/' + menu.icon + '-active.svg'
                      : '/images/profile-page/' + menu.icon + '.svg',
                  ]"
                  :alt="menu.name"
                  class="w-[22px] h-[22px]"
                />
                <p class="whitespace-nowrap text-base">{{ menu.name }}</p>
              </section>
            </nuxt-link>
          </div>
          <div
            class="mt-3 p-3 flex items-center gap-3 cursor-pointer"
            @click="logout"
          >
            <img src="/images/icons/logout.svg" alt="logout" />
            <p>Logout</p>
          </div>
        </aside>
        <main class="w-full">
          <Nuxt />
        </main>
      </div>
    </div>
  </main>
</template>

<script>
import AuthService from '~/services/AuthServices';
import ProfileOptions from '~/components/mollecules/ProfileOptions';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'profile',
  middleware: 'authorize',
  components: {
    ProfileOptions,
  },
  data() {
    return {
      AuthService,
      isLoading: false,
      activePage: '',
      menus: [
        {
          name: 'Data Diri',
          link: '/profile',
          slug: 'profile',
          secondSlug: 'reset-password',
          icon: 'profile',
        },
        {
          name: 'Pesanan',
          link: '/order',
          slug: 'order',
          secondSlug: 'details',
          icon: 'transaction',
        },
      ],
    };
  },
  watch: {
    $route(oldVal, newVal) {
      if (oldVal !== newVal) {
        this.activePage = this.$route.path.split('/').pop();
      }
    },
  },
  computed: {
    ...mapGetters({
      avatar: 'getAvatar',
    }),
  },
  mounted() {
    if (!this.avatar) {
      const ava = this.$cookies.get('avatar');
      const newAva = ava ? ava : 'default';
      this.setUserAvatar(newAva);
    }
    this.AuthService = new AuthService(this);
    this.activePage = this.$route.path.split('/').pop();
  },
  methods: {
    ...mapActions({
      setUserAvatar: 'setUserAvatar',
    }),
    toHomePage() {
      this.$router.push('/');
    },
    async logout() {
      this.isLoading = true;
      const { AuthService } = this;
      const deviceId = this.$cookies.get('deviceId');
      const deviceOs = 'web';
      try {
        const fetchLogout = await AuthService.logout(deviceId, deviceOs);
        if (fetchLogout.data) {
          const dataLogout = fetchLogout.data;
          if (dataLogout.meta.status === 200) {
            this.$cookies.removeAll();
            localStorage.removeItem('user_data');
            localStorage.removeItem('thr_challenge');
            this.$router.push({ path: '/login' });
          }
        } else {
          throw new Error(fetchLogout);
        }
      } catch (error) {
        console.log(error);
        this.$alert.show({
          status: 'error',
          message: 'Terjadi kesalahan. Silakan coba beberapa saat lagi',
        });
      }
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper-profile {
  background-image: linear-gradient(180deg, #e3fcf6 0%, #fff 59.14%);
}
.dm-sans {
  font-family: 'DM Sans', sans-serif;
  font-feature-settings: 'clig' off, 'liga' off;
}
</style>
