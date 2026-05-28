<template>
  <div>
    <HeroSection />
    <ExperienceSection />
    <WarStoriesSection />
    <SkillsSection />
    <HobbiesSection />
    <NextMissionSection />
    <ArticlesSection />
    <LeadCtaSection @open-modal="isModalOpen = true" />
    <ProjectDiscoveryModal :is-open="isModalOpen" @close="isModalOpen = false" />
    <FooterSection />
    <FloatingNavigation />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isModalOpen = ref(false)

const { t, locale } = useI18n()

useSchemaOrgProfile()

const langMap: Record<string, string> = {
  pt: 'pt-BR',
  en: 'en-US',
  ja: 'ja-JP',
}

useHead({
  htmlAttrs: {
    lang: computed(() => langMap[locale.value] || 'en-US'),
  },
})

useSeoMeta({
  title: 'KAIO MORSCH // SENIOR SOFTWARE ENGINEER',
  description: t('footer.brandDescription'),
  ogTitle: 'KAIO MORSCH // SENIOR SOFTWARE ENGINEER',
  ogDescription: t('footer.brandDescription'),
  ogType: 'website',
  ogSiteName: 'Kaio Morsch Portfolio',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'KAIO MORSCH // SENIOR SOFTWARE ENGINEER',
  twitterDescription: t('footer.brandDescription'),
  twitterImage: '/og-image.jpg',
})
</script>
