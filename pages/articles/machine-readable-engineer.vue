<template>
  <div class="min-h-screen bg-cyber-bg text-cyber-fg font-mono">
    <!-- Article Hero -->
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
            {{ $t('article.machineReadableEngineer.badge') }}
          </span>
          <span class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest">
            {{ $t('article.machineReadableEngineer.readTime') }}
          </span>
        </div>

        <h1 class="font-orbitron text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide mb-6">
          <span class="text-cyber-accent cyber-text-glow">{{ $t('article.machineReadableEngineer.title') }}</span>
        </h1>

        <p class="text-sm font-tech text-cyber-mutedFg uppercase tracking-widest">
          {{ $t('article.machineReadableEngineer.author') }}
        </p>
      </div>
    </section>

    <!-- Article Content -->
    <article class="relative py-12 md:py-20 px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Intro -->
        <div class="space-y-6 mb-16">
          <p
            v-for="(paragraph, index) in introParagraphs"
            :key="`intro-${index}`"
            class="text-lg text-cyber-fg/80 leading-relaxed"
          >
            {{ paragraph }}
          </p>
        </div>

        <!-- Sections -->
        <div class="space-y-16">
          <section
            v-for="(section, index) in sections"
            :key="`section-${index}`"
          >
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-px bg-cyber-accent" aria-hidden="true" />
              <span class="text-xs font-tech text-cyber-accent uppercase tracking-widest">
                {{ section.label }}
              </span>
            </div>
            <h2 class="font-orbitron text-2xl md:text-3xl font-bold uppercase tracking-wide mb-6">
              {{ section.title }}
            </h2>
            <div class="space-y-4">
              <p
                v-for="(paragraph, pIndex) in section.paragraphs"
                :key="`section-${index}-p-${pIndex}`"
                class="text-cyber-fg/80 leading-relaxed"
              >
                {{ paragraph }}
              </p>
            </div>

            <!-- Code Blocks -->
            <div
              v-for="(block, bIndex) in section.codeBlocks"
              :key="`section-${index}-code-${bIndex}`"
              class="mt-6 border border-cyber-border bg-cyber-card/50 cyber-chamfer-sm overflow-hidden"
            >
              <div class="flex items-center justify-between px-4 py-2 border-b border-cyber-border bg-cyber-card">
                <span class="text-[10px] font-tech uppercase tracking-widest text-cyber-accent">{{ block.language }}</span>
              </div>
              <pre class="p-4 overflow-x-auto text-sm font-mono text-cyber-fg/90 leading-relaxed"><code>{{ block.content.join('\n') }}</code></pre>
            </div>
          </section>
        </div>
      </div>
    </article>

    <!-- Footer CTA -->
    <section class="relative py-16 px-4 border-t border-cyber-border">
      <div class="max-w-4xl mx-auto text-center">
        <p class="text-sm text-cyber-mutedFg font-tech uppercase tracking-widest mb-4">
          {{ $t('article.ctaLabel') }}
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
import { machineReadableEngineerCodeBlocks } from '~/data/article-code-blocks'

const { t, tm } = useI18n()

const introParagraphs = computed(() =>
  resolveArrayStrings(t, 'article.machineReadableEngineer.introParagraphs', tm('article.machineReadableEngineer.introParagraphs') as any[])
)

const sections = computed(() => {
  const rawSections = tm('article.machineReadableEngineer.sections') as any[]
  if (!Array.isArray(rawSections)) return []
  return rawSections.map((_, i) => ({
    label: t(`article.machineReadableEngineer.sections.${i}.label`),
    title: t(`article.machineReadableEngineer.sections.${i}.title`),
    paragraphs: resolveArrayStrings(
      t,
      `article.machineReadableEngineer.sections.${i}.paragraphs`,
      tm(`article.machineReadableEngineer.sections.${i}.paragraphs`) as any[]
    ),
    codeBlocks: machineReadableEngineerCodeBlocks[i] || [],
  }))
})

function resolveArrayStrings(tFn: (key: string) => string, baseKey: string, rawArray: any[] | undefined): string[] {
  if (!Array.isArray(rawArray)) return []
  return Array.from({ length: rawArray.length }, (_, i) => tFn(`${baseKey}.${i}`))
}

useSeoMeta({
  title: t('article.machineReadableEngineer.metaTitle'),
  description: t('article.machineReadableEngineer.metaDescription'),
  ogTitle: t('article.machineReadableEngineer.metaTitle'),
  ogDescription: t('article.machineReadableEngineer.metaDescription'),
  ogType: 'article',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterImage: '/og-image.jpg',
})
</script>
