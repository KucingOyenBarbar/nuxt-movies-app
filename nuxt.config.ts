// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: { strict: false },
  devtools: { enabled: true },
  $production: {
    routeRules: {
      '/**': { isr: true },
    },
  },

  modules: [
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    'nuxt-bootstrap-icons',
    'nuxt-swiper',
  ],

  plugins: [
    {
      src: '~/plugins/useBootstrap.client.ts',
      mode: 'client',
    },
  ],

  css: ['~/assets/css/global.css'],

  app: {
    head: {
      titleTemplate: '%s - Nuxt Movies',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        // {
        //   src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js',
        //   integrity:
        //     'sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3',
        //   crossorigin: 'anonymous',
        // },
        // {
        //   src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js',
        //   integrity:
        //     'sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4',
        //   crossorigin: 'anonymous',
        // },
      ],
    },
  },

  googleFonts: {
    families: {
      Roboto: true,
      Poppins: true,
    },
  },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
  },
});
