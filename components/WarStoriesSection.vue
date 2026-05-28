<template>
  <section id="war-stories" class="relative py-24 md:py-32 px-4" :aria-label="$t('a11y.sectionWarStories')" tabindex="-1">
    <h2 class="sr-only">{{ $t('a11y.sectionWarStories') }}</h2>

    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="mb-16 space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-12 h-px bg-cyber-accent-tertiary" aria-hidden="true" />
          <span class="text-xs font-tech text-cyber-accent-tertiary uppercase tracking-[0.3em]">{{ $t('warStories.sectionLabel') }}</span>
        </div>
        <h2 class="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide">
          {{ $t('warStories.sectionTitle') }}<span class="text-cyber-accent-tertiary cyber-text-glow">{{ $t('warStories.sectionTitleHighlight') }}</span>
        </h2>
        <p class="text-cyber-mutedFg max-w-2xl font-mono text-sm md:text-base">
          {{ $t('warStories.sectionDescription') }}
        </p>
      </div>

      <!-- Stories Grid -->
      <ul class="grid grid-cols-1 lg:grid-cols-2 gap-8 list-none">
        <li
          v-for="story in localizedWarStories"
          :key="story.id"
          data-testid="war-story-card"
          class="group relative bg-cyber-card border border-cyber-border cyber-chamfer p-6 md:p-8 hover:border-cyber-accent-tertiary hover:shadow-neon-tertiary transition-all duration-300"
        >
          <!-- Corner accents -->
          <div class="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyber-border group-hover:border-cyber-accent-tertiary transition-colors" aria-hidden="true" />
          <div class="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyber-border group-hover:border-cyber-accent-tertiary transition-colors" aria-hidden="true" />
          <div class="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyber-border group-hover:border-cyber-accent-tertiary transition-colors" aria-hidden="true" />
          <div class="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyber-border group-hover:border-cyber-accent-tertiary transition-colors" aria-hidden="true" />

          <!-- Header -->
          <div class="mb-6 pb-4 border-b border-cyber-border">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-tech text-cyber-accent-tertiary uppercase tracking-widest">{{ story.company }}</span>
              <span class="text-cyber-border" aria-hidden="true">|</span>
              <span class="text-xs font-tech text-cyber-mutedFg">{{ story.period }}</span>
            </div>
            <h3 class="font-orbitron text-lg md:text-xl font-bold uppercase text-cyber-fg group-hover:text-cyber-accent-tertiary transition-colors">
              {{ story.title }}
            </h3>
          </div>

          <!-- Story Fields -->
          <div class="space-y-4">
            <div>
              <h4 class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest mb-1">{{ $t('warStories.contextLabel') }}</h4>
              <p class="text-sm text-cyber-fg/80 leading-relaxed">{{ story.context }}</p>
            </div>
            <div>
              <h4 class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest mb-1">{{ $t('warStories.problemLabel') }}</h4>
              <p class="text-sm text-cyber-fg/80 leading-relaxed">{{ story.problem }}</p>
            </div>
            <div>
              <h4 class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest mb-1">{{ $t('warStories.actionLabel') }}</h4>
              <p class="text-sm text-cyber-fg/80 leading-relaxed">{{ story.action }}</p>
            </div>
            <div>
              <h4 class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest mb-1">{{ $t('warStories.resultLabel') }}</h4>
              <p class="text-sm text-cyber-fg/80 leading-relaxed">{{ story.result }}</p>
            </div>
            <div class="pt-2 border-t border-cyber-border/50">
              <h4 class="text-xs font-tech text-cyber-accent uppercase tracking-widest mb-1">{{ $t('warStories.lessonsLabel') }}</h4>
              <p class="text-sm text-cyber-accent/90 leading-relaxed italic">{{ story.lessons }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLocalizedProfile } from '~/composables/useLocalizedProfile'

const { localizedWarStories } = useLocalizedProfile()
</script>
