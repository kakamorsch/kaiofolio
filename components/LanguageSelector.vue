<template>
  <div class="flex items-center gap-2" role="group" :aria-label="$t('a11y.selectLanguage')">
    <button
      v-for="loc in locales"
      :key="loc.code"
      @click="setLocale(loc.code)"
      :aria-pressed="locale === loc.code"
      :aria-label="`${loc.code === 'pt' ? $t('languageSelector.pt') : $t('languageSelector.en')} ${locale === loc.code ? $t('a11y.selected') : ''}`"
      class="px-2 py-1 text-xs font-tech uppercase tracking-widest border transition-all duration-200 cyber-chamfer-sm focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-offset-2 focus:ring-offset-cyber-bg"
      :class="
        locale === loc.code
          ? 'border-cyber-accent text-cyber-accent bg-cyber-accent/10'
          : 'border-cyber-border text-cyber-mutedFg hover:border-cyber-accent/50 hover:text-cyber-accent'
      "
    >
      {{ loc.code === 'pt' ? $t('languageSelector.pt') : $t('languageSelector.en') }}
    </button>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale, locales } = useI18n()
</script>
