import definePlugin from './config/definePlugin';
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000/seakun',
  },
  head: {
    title: 'Seakun | Situs Cari Teman Patungan Aman & Murah',
    htmlAttrs: {
      lang: 'id',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Seakun.id, Platform pertama di Indonesia yang memberikan layanan Berlangganan Bersama agar lebih praktis, legal, aman dan murah.',
      },
      {
        hid: 'image',
        property: 'og:image',
        content: 'https://seakun.id/images/links/seakun.png',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'seakun, seakun id, seakun.id, berlangganan, berlangganan bareng, satu akun, paket group, paket family, patungan, netflix, spotify, youtube, microsoft 365, apple one, apple one premier, apple music, apple tv, gramedia digital, canva, disney hotstar, wattpad, google one, nord vpn, prime video, iqiyi, zoom, hbo go, scribd, mcafee, setapp, lastpass, wetv, nintendo switch online, medium, resso, patungan netflix, patungan spotify, patungan youtube, patungan microsoft 365, patungan apple one, patungan apple one premier, patungan apple music, patungan apple tv, patungan gramedia digital, patungan canva, patungan disney hotstar, patungan wattpad, patungan google one, patungan nord vpn, patungan prime video, patungan iqiyi, patungan zoom, patungan hbo go, patungan scribd, patungan mcafee, patungan setapp, patungan lastpass, patungan wetv, patungan nintendo switch online, patungan medium, patungan resso',
      },
      {
        property: 'og:url',
        content: 'https://seakun.id',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: 'Seakun | Situs Cari Teman Patungan Aman & Murah',
      },
      {
        property: 'og:description',
        content:
          'Seakun.id, Platform pertama di Indonesia yang memberikan layanan Berlangganan Bersama agar lebih praktis, legal, aman dan murah.',
      },
      {
        property: 'og:image',
        content: 'https://seakun.id/images/links/seakun.png',
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'twitter:domain',
        content: 'seakun.id',
      },
      {
        property: 'twitter:url',
        content: 'https://seakun.id',
      },
      {
        property: 'twitter:title',
        content: 'Seakun | Situs Cari Teman Patungan Aman & Murah',
      },
      {
        property: 'twitter:description',
        content:
          'Seakun.id, Platform pertama di Indonesia yang memberikan layanan Berlangganan Bersama agar lebih praktis, legal, aman dan murah.',
      },
      {
        property: 'twitter:image',
        content: 'https://seakun.id/images/links/seakun.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css2?family=Nunito:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css2?family=DM+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
        integrity:
          'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj',
        crossorigin: 'anonymous',
      },
      {
        src:
          'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
        integrity:
          'sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo',
        crossorigin: 'anonymous',
      },
      {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js',
        integrity:
          'sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI',
        crossorigin: 'anonymous',
      },
      {
        type: 'text/javascript',
        innerHTML: `!function (w, d, t) {w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
		
		  ttq.load('C5R3P0DRNQNGELT7TO3G');
		  ttq.page();
		}(window, document, 'ttq');`,
      },
    ],
    __dangerouslyDisableSanitizers: ['script'],
  },
  /*
   ** Global CSS
   */
  css: [{ src: '~/assets/styles/styles.scss', lang: 'scss' }],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: '~plugins/google-analytics.js', mode: 'client' }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/tailwindcss'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/svg',
    [
      'nuxt-facebook-pixel-module',
      {
        /* module options */
        track: 'PageView',
        pixelId: '380285150190068',
        autoPageView: true,
        disabled: false,
      },
    ],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    plugins: definePlugin(),
  },
};
