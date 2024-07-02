<template>
  <div v-if="this.details.packageVariant.providerSlug !== 'zap'">
    <div class="mt-3 space-y-2">
      <section v-if="details.account && details.account[hasAProfile(details)]">
        <p
          class="text-[#00BA88] text-sm lg:text-base font-medium lg:font-bold pb-1"
        >
          Informasi Tambahan
        </p>
        <ProviderProfile :information="details.account" :slug="providerSlug" />
      </section>
      <section v-else-if="details.account && details.account.spotify">
        <p
          class="text-[#00BA88] text-sm lg:text-base font-medium lg:font-bold pb-3"
        >
          Informasi Tambahan
        </p>
        <Spotify :information="details.account.spotify" />
      </section>
      <section v-else-if="details.account && details.account.disney">
        <p
          class="text-[#00BA88] text-sm lg:text-base font-medium lg:font-bold pb-3"
        >
          Informasi Tambahan
        </p>
        <Disney :phoneNumber="details.account.disney.phoneNumber" />
      </section>
      <section v-else-if="isShowAccountInfo">
        <p
          class="text-[#00BA88] text-sm lg:text-base font-medium lg:font-bold pb-3"
        >
          Informasi Tambahan
        </p>
        <EmailPasswordAccount :information="isShowAccountInfo" />
      </section>
      <section v-if="customerNeeds">
        <BannerAddtionalInformation :message="customerNeeds" class="pt-5" />
      </section>
      <section v-if="details.packageVariant.providerSlug === 'tiktok-music'">
        <p
          class="text-[#00BA88] text-sm lg:text-base font-medium lg:font-bold pb-3"
        >
          Informasi Tambahan
        </p>
        <InvitationLink :information="details.account.tiktokMusic" />
      </section>
    </div>
  </div>
</template>

<script>
import ProviderProfile from './additional-information/provider-profile.vue';
import Spotify from './additional-information/spotify.vue';
import EmailPasswordAccount from './additional-information/email-password-account.vue';
import BannerAddtionalInformation from './additional-information/banner-addtional-information.vue';
import Disney from './additional-information/disney.vue';
import InvitationLink from './additional-information/invitation-link.vue';
export default {
  props: {
    details: {
      typeof: Object,
      default: () => {},
    },
  },
  components: {
    ProviderProfile,
    Spotify,
    EmailPasswordAccount,
    BannerAddtionalInformation,
    Disney,
    InvitationLink,
  },
  computed: {
    customerNeeds() {
      const slug = this.details.packageVariant.providerSlug;

      let message = {};
      switch (slug) {
        case 'amazon-prime':
        case 'zoom':
          message.title = 'Kebutuhan OTP';
          message.text =
            'Untuk kebutuhan login silakan janjian dengan Admin Seakun untuk mendapatkan kode OTP';
          return message;
        case 'canva':
        case 'youtube':
        case 'dropbox':
        case 'google-one':
        case 'apple-music':
        case 'apple-one':
        case 'apple-one-premier':
        case 'apple-tv':
        case 'microsoft-365':
        case 'lastpass':
        case 'nintendo-switch':
        case 'duolingo':
          message.title = 'Link Invitation';
          message.text =
            'Link invitation telah dikirim ke email yang sudah kamu daftarkan.';
          return message;
        case 'medium':
          message.title = 'Link Invtation';
          message.text =
            'Kebutuhan link verifikasi saat login bisa request ke admin.';
          return message;
        default:
          break;
      }
    },
    isShowAccountInfo() {
      const slug = this.details.packageVariant.providerSlug;
      let result = {};
      if (
        slug == 'netflix' ||
        slug == 'gramedia-digital' ||
        slug == 'wattpad' ||
        slug == 'nord-vpn' ||
        slug == 'amazon-prime' ||
        slug == 'iqiyi' ||
        slug == 'zoom' ||
        slug == 'hbo-go' ||
        slug == 'scribd' ||
        slug == 'mcafee' ||
        slug == 'setapp' ||
        slug == 'wetv' ||
        slug == 'freepik' ||
        slug == 'crunchyroll' ||
        slug == 'masterclass'
      ) {
        result = {
          email: this.details.account.email.email,
          password: this.details.account.password,
        };
        return result;
      } else if (slug == 'medium') {
        return { email: this.details.account.email.email };
      } else return null;
    },

    invitationLinkValue() {
      const slug = this.convertToCamelCase(
        this.details.packageVariant.providerSlug
      );
      if (this.details.account[slug].invitationLink) {
        return this.details.account[slug].invitationLink;
      } else return null;
    },
    providerSlug() {
      return this.details.packageVariant.providerSlug;
    },
  },
  methods: {
    convertToCamelCase(input) {
      const words = input.split('-').map((word, index) => {
        return index === 0
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1);
      });

      const camelCaseString = words.join('');

      return camelCaseString;
    },
    replaceSlug(details) {
      const slug = details?.packageVariant?.providerSlug;
      if (slug == 'amazon-prime') {
        return 'primeVideo';
      }
      if (slug == 'disney-hotstar') {
        return 'disney';
      } else return slug;
    },
    hasAProfile(details) {
      const provider = ['netflix', 'amazon-prime', 'crunchyroll'];
      const slug = details?.packageVariant?.providerSlug;
      const replaceSlug = this.replaceSlug(details);
      if (provider.includes(slug)) {
        console.log('replaceSlug', replaceSlug);
        return replaceSlug;
      } else return false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
