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
const { t } = useI18n()

useSeoMeta({
  title: 'KAIO MORSCH // SENIOR SOFTWARE ENGINEER',
  description: t('footer.brandDescription'),
})
</script>
