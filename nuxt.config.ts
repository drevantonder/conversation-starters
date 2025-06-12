import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxthub/core'
  ],

  hub: {
    database: true,
    ai: true
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    experimental: {
      tasks: true
    },
    
    scheduledTasks: {
      '0 */3 * * *': [
        'generate-conversation-starter'
      ]
    }
  }
})