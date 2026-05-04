<template>
  <div>
    <HeroSection />
    <ExperienceSection />
    <SkillsSection />
    <HobbiesSection />
    <NextMissionSection />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: locale.value === 'pt' ? 'pt-BR' : 'en-US',
  },
})

useSeoMeta({
  title: 'KAIO MORSCH // SENIOR SOFTWARE ENGINEER',
  description: t('footer.brandDescription'),
  ogTitle: 'KAIO MORSCH // SENIOR SOFTWARE ENGINEER',
  ogDescription: t('footer.brandDescription'),
  ogType: 'website',
  ogSiteName: 'Kaio Morsch Portfolio',
  twitterCard: 'summary_large_image',
  twitterTitle: 'KAIO MORSCH // SENIOR SOFTWARE ENGINEER',
  twitterDescription: t('footer.brandDescription'),
})
</script>
