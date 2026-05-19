<template>
  <section id="capacitacoes" class="relative py-24 md:py-32 px-4" :aria-label="$t('a11y.sectionSkills')" tabindex="-1">
    <h2 class="sr-only">{{ $t('a11y.sectionSkills') }}</h2>
    <!-- Circuit pattern background -->
    <div class="absolute inset-0 opacity-10" aria-hidden="true">
      <div class="absolute inset-0" style="background-image: linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px); background-size: 40px 40px;" />
    </div>

    <div class="relative max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="mb-16 space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-12 h-px bg-cyber-accent-tertiary" aria-hidden="true" />
          <span class="text-xs font-tech text-cyber-accent-tertiary uppercase tracking-[0.3em]">{{ $t('skills.sectionLabel') }}</span>
        </div>
        <h2 class="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide">
          {{ $t('skills.sectionTitle') }}<span class="text-cyber-accent-tertiary cyber-text-glow">{{ $t('skills.sectionTitleHighlight') }}</span>
        </h2>
        <p class="text-cyber-mutedFg max-w-2xl font-mono text-sm md:text-base">
          {{ $t('skills.sectionDescription') }}
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Skills Matrix -->
        <div class="bg-cyber-card border border-cyber-border cyber-chamfer p-6 md:p-8">
          <div class="text-xs font-tech text-cyber-accent-tertiary uppercase tracking-widest mb-6 flex items-center gap-2">
            <span class="w-2 h-2 bg-cyber-accent-tertiary animate-pulse" aria-hidden="true" />
            {{ $t('skills.skillsMatrix') }}
          </div>

          <ul class="flex flex-wrap gap-2" role="list" :aria-label="$t('a11y.techArsenalList')">
            <li
              v-for="(skill, index) in localizedSkills"
              :key="skill"
              class="group relative px-4 py-2 text-xs font-tech uppercase tracking-wider border border-cyber-border cyber-chamfer-sm text-cyber-mutedFg hover:border-cyber-accent-tertiary hover:text-cyber-accent-tertiary hover:shadow-neon-tertiary transition-all duration-200 cursor-default"
              :style="{ animationDelay: `${index * 50}ms` }"
            >
              {{ skill }}
            </li>
          </ul>
        </div>

        <!-- Certifications Terminal -->
        <div class="bg-cyber-bg border border-cyber-border cyber-chamfer overflow-hidden">
          <div class="flex items-center gap-2 px-4 py-2 bg-cyber-muted/50 border-b border-cyber-border" aria-hidden="true">
            <div class="w-3 h-3 rounded-full bg-red-500/80" />
            <div class="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div class="w-3 h-3 rounded-full bg-green-500/80" />
            <span class="ml-2 text-[10px] font-tech text-cyber-mutedFg uppercase">certifications.log</span>
          </div>

          <ul class="p-6 space-y-3" role="list" :aria-label="$t('a11y.certificationsTerminal')">
            <li
              v-for="(cert, index) in localizedCertifications"
              :key="index"
              class="flex items-start gap-3 group"
            >
              <span class="text-cyber-accent-tertiary mt-0.5" aria-hidden="true">></span>
              <div>
                <p class="text-sm text-cyber-fg group-hover:text-cyber-accent-tertiary transition-colors">
                  {{ cert.name }}
                </p>
                <p class="text-xs text-cyber-mutedFg font-tech">{{ cert.issuer }}</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Education -->
        <div class="bg-cyber-card border border-cyber-border cyber-chamfer p-6 md:p-8 lg:col-span-2">
          <div class="text-xs font-tech text-cyber-accent-secondary uppercase tracking-widest mb-4 flex items-center gap-2">
            <span class="w-2 h-2 bg-cyber-accent-secondary animate-pulse" aria-hidden="true" />
            {{ $t('skills.academicEducation') }}
          </div>

          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 class="font-orbitron text-lg md:text-xl font-bold uppercase text-cyber-fg">
                {{ localizedEducation.institution }}
              </h3>
              <p class="text-cyber-mutedFg text-sm mt-1">{{ localizedEducation.degree }}</p>
            </div>
            <div class="flex items-center gap-2 text-xs font-tech text-cyber-accent-secondary">
              <span class="w-2 h-2 bg-cyber-accent-secondary rounded-full" aria-hidden="true" />
              {{ localizedEducation.period }}
            </div>
          </div>
        </div>

        <!-- Languages -->
        <div class="bg-cyber-bg border border-cyber-border cyber-chamfer p-6 md:p-8 lg:col-span-2">
          <div class="text-xs font-tech text-cyber-accent uppercase tracking-widest mb-4 flex items-center gap-2">
            <span class="w-2 h-2 bg-cyber-accent animate-pulse" aria-hidden="true" />
            {{ $t('skills.languages') }}
          </div>

          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4" role="list">
            <li
              v-for="lang in localizedLanguages"
              :key="lang.name"
              class="flex items-center justify-between p-4 border border-cyber-border cyber-chamfer-sm hover:border-cyber-accent transition-colors"
            >
              <span class="font-tech text-sm uppercase tracking-wider text-cyber-fg">{{ lang.name }}</span>
              <span class="text-xs font-tech text-cyber-accent">{{ lang.level }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLocalizedProfile } from '~/composables/useLocalizedProfile'

const {
  localizedSkills,
  localizedCertifications,
  localizedEducation,
  localizedLanguages,
} = useLocalizedProfile()
</script>
