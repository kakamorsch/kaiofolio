<template>
  <div class="min-h-screen bg-cyber-bg text-cyber-fg font-mono">
    <!-- Case Study Hero -->
    <section class="relative py-24 md:py-32 px-4 overflow-hidden">
      <div class="absolute inset-0" aria-hidden="true">
        <div class="absolute inset-0 bg-gradient-to-b from-cyber-accent/5 via-transparent to-cyber-bg" />
      </div>

      <div class="relative max-w-4xl mx-auto">
        <!-- Breadcrumb -->
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 text-xs font-tech text-cyber-mutedFg uppercase tracking-widest hover:text-cyber-accent transition-colors mb-8"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {{ $t('caseStudy.backToPortfolio') }}
        </NuxtLink>

        <!-- Meta -->
        <div class="flex flex-wrap items-center gap-3 mb-6">
          <span class="px-2 py-1 text-[10px] font-tech uppercase tracking-wider bg-cyber-accent/20 text-cyber-accent border border-cyber-accent/50">
            {{ $t('caseStudy.largeScaleMigration.badge') }}
          </span>
          <span class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest">
            {{ $t('caseStudy.largeScaleMigration.readTime') }}
          </span>
        </div>

        <h1 class="font-orbitron text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide mb-6">
          <span class="text-cyber-accent cyber-text-glow">{{ $t('caseStudy.largeScaleMigration.title') }}</span>
        </h1>

        <p class="text-lg md:text-xl text-cyber-fg/80 leading-relaxed max-w-3xl mb-8">
          {{ $t('caseStudy.largeScaleMigration.subtitle') }}
        </p>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in localizedCaseStudy.tags"
            :key="tag"
            class="px-3 py-1 text-[11px] font-tech uppercase tracking-wider border border-cyber-border text-cyber-mutedFg cyber-chamfer-sm"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </section>

    <!-- Content Sections -->
    <section class="relative py-12 md:py-20 px-4">
      <div class="max-w-4xl mx-auto space-y-16">
        <!-- Business Challenge -->
        <article class="relative">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-cyber-accent-secondary" aria-hidden="true" />
            <span class="text-xs font-tech text-cyber-accent-secondary uppercase tracking-widest">
              {{ $t('caseStudy.largeScaleMigration.businessChallenge.label') }}
            </span>
          </div>
          <h2 class="font-orbitron text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4">
            {{ $t('caseStudy.largeScaleMigration.businessChallenge.title') }}
          </h2>
          <p class="text-cyber-fg/80 leading-relaxed">
            {{ $t('caseStudy.largeScaleMigration.businessChallenge.content') }}
          </p>
        </article>

        <!-- Architecture Strategy -->
        <article class="relative">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-cyber-accent-tertiary" aria-hidden="true" />
            <span class="text-xs font-tech text-cyber-accent-tertiary uppercase tracking-widest">
              {{ $t('caseStudy.largeScaleMigration.architectureStrategy.label') }}
            </span>
          </div>
          <h2 class="font-orbitron text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4">
            {{ $t('caseStudy.largeScaleMigration.architectureStrategy.title') }}
          </h2>
          <p class="text-cyber-fg/80 leading-relaxed">
            {{ $t('caseStudy.largeScaleMigration.architectureStrategy.content') }}
          </p>
        </article>

        <!-- Execution -->
        <article class="relative">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-cyber-accent" aria-hidden="true" />
            <span class="text-xs font-tech text-cyber-accent uppercase tracking-widest">
              {{ $t('caseStudy.largeScaleMigration.execution.label') }}
            </span>
          </div>
          <h2 class="font-orbitron text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4">
            {{ $t('caseStudy.largeScaleMigration.execution.title') }}
          </h2>
          <p class="text-cyber-fg/80 leading-relaxed">
            {{ $t('caseStudy.largeScaleMigration.execution.content') }}
          </p>

          <!-- Milestones -->
          <div class="mt-6 grid md:grid-cols-3 gap-4">
            <div class="p-4 border border-cyber-border cyber-chamfer-sm bg-cyber-card">
              <div class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest mb-2">{{ $t('caseStudy.largeScaleMigration.execution.milestone1Label') }}</div>
              <div class="text-sm text-cyber-fg font-mono">{{ $t('caseStudy.largeScaleMigration.execution.milestone1Value') }}</div>
            </div>
            <div class="p-4 border border-cyber-border cyber-chamfer-sm bg-cyber-card">
              <div class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest mb-2">{{ $t('caseStudy.largeScaleMigration.execution.milestone2Label') }}</div>
              <div class="text-sm text-cyber-fg font-mono">{{ $t('caseStudy.largeScaleMigration.execution.milestone2Value') }}</div>
            </div>
            <div class="p-4 border border-cyber-border cyber-chamfer-sm bg-cyber-card">
              <div class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest mb-2">{{ $t('caseStudy.largeScaleMigration.execution.milestone3Label') }}</div>
              <div class="text-sm text-cyber-fg font-mono">{{ $t('caseStudy.largeScaleMigration.execution.milestone3Value') }}</div>
            </div>
          </div>
        </article>

        <!-- Results & Impact -->
        <article class="relative">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-cyber-accent-secondary" aria-hidden="true" />
            <span class="text-xs font-tech text-cyber-accent-secondary uppercase tracking-widest">
              {{ $t('caseStudy.largeScaleMigration.results.label') }}
            </span>
          </div>
          <h2 class="font-orbitron text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4">
            {{ $t('caseStudy.largeScaleMigration.results.title') }}
          </h2>
          <p class="text-cyber-fg/80 leading-relaxed">
            {{ $t('caseStudy.largeScaleMigration.results.content') }}
          </p>

          <!-- Metrics -->
          <div class="mt-6 grid md:grid-cols-3 gap-4">
            <div class="p-4 border border-cyber-accent/30 cyber-chamfer-sm bg-cyber-accent/5">
              <div class="text-2xl font-orbitron font-bold text-cyber-accent mb-1">{{ $t('caseStudy.largeScaleMigration.results.metric1Value') }}</div>
              <div class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest">{{ $t('caseStudy.largeScaleMigration.results.metric1Label') }}</div>
            </div>
            <div class="p-4 border border-cyber-accent/30 cyber-chamfer-sm bg-cyber-accent/5">
              <div class="text-2xl font-orbitron font-bold text-cyber-accent mb-1">{{ $t('caseStudy.largeScaleMigration.results.metric2Value') }}</div>
              <div class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest">{{ $t('caseStudy.largeScaleMigration.results.metric2Label') }}</div>
            </div>
            <div class="p-4 border border-cyber-accent/30 cyber-chamfer-sm bg-cyber-accent/5">
              <div class="text-2xl font-orbitron font-bold text-cyber-accent mb-1">{{ $t('caseStudy.largeScaleMigration.results.metric3Value') }}</div>
              <div class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest">{{ $t('caseStudy.largeScaleMigration.results.metric3Label') }}</div>
            </div>
          </div>
        </article>

        <!-- Lessons Learned -->
        <article class="relative">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-cyber-accent-tertiary" aria-hidden="true" />
            <span class="text-xs font-tech text-cyber-accent-tertiary uppercase tracking-widest">
              {{ $t('caseStudy.largeScaleMigration.lessons.label') }}
            </span>
          </div>
          <h2 class="font-orbitron text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4">
            {{ $t('caseStudy.largeScaleMigration.lessons.title') }}
          </h2>
          <p class="text-cyber-fg/80 leading-relaxed">
            {{ $t('caseStudy.largeScaleMigration.lessons.content') }}
          </p>
        </article>
      </div>
    </section>

    <!-- Footer CTA -->
    <section class="relative py-16 px-4 border-t border-cyber-border">
      <div class="max-w-4xl mx-auto text-center">
        <p class="text-sm text-cyber-mutedFg font-tech uppercase tracking-widest mb-4">
          {{ $t('caseStudy.ctaLabel') }}
        </p>
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyber-accent text-cyber-accent font-tech uppercase tracking-widest cyber-chamfer hover:bg-cyber-accent hover:text-cyber-bg transition-all duration-300"
        >
          {{ $t('caseStudy.backToPortfolio') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLocalizedProfile } from '~/composables/useLocalizedProfile'

const { t, tm } = useI18n()

const localizedCaseStudy = computed(() => ({
  tags: resolveArrayStrings(t, 'caseStudy.largeScaleMigration.tags', tm('caseStudy.largeScaleMigration.tags') as any[]),
}))

function resolveArrayStrings(tFn: (key: string) => string, baseKey: string, rawArray: any[] | undefined): string[] {
  if (!Array.isArray(rawArray)) return []
  return Array.from({ length: rawArray.length }, (_, i) => tFn(`${baseKey}.${i}`))
}

useSeoMeta({
  title: 'Case Study: Large-Scale Vue 2.7 → Vue 3 Migration | Kaio Morsch',
  description: t('caseStudy.largeScaleMigration.metaDescription'),
  ogTitle: 'Case Study: Large-Scale Vue 2.7 → Vue 3 Migration | Kaio Morsch',
  ogDescription: t('caseStudy.largeScaleMigration.metaDescription'),
  ogType: 'article',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterImage: '/og-image.jpg',
})
</script>
