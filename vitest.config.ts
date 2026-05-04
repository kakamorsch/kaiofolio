import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    globals: true,
    environment: 'nuxt',
    include: ['tests/unit/**/*.{test,spec}.{js,ts}'],
    coverage: {
      include: ['composables/**/*.ts', 'components/**/*.vue', 'pages/**/*.vue'],
    },
  },
})
