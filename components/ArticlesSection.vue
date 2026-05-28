<template>
  <section id="artigos" class="relative py-24 md:py-32 px-4" :aria-label="$t('a11y.sectionArticles')" tabindex="-1">
    <h2 class="sr-only">{{ $t('a11y.sectionArticles') }}</h2>
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="mb-16 space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-12 h-px bg-cyber-accent" aria-hidden="true" />
          <span class="text-xs font-tech text-cyber-accent uppercase tracking-[0.3em]">{{ $t('articles.sectionLabel') }}</span>
        </div>
        <h2 class="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide cyber-text-glow">
          {{ $t('articles.sectionTitle') }}<span class="text-cyber-accent">{{ $t('articles.sectionTitleHighlight') }}</span>
        </h2>
        <p class="text-cyber-mutedFg max-w-2xl font-mono text-sm md:text-base">
          {{ $t('articles.sectionDescription') }}
        </p>
      </div>

      <!-- Articles Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          to="/articles/machine-readable-engineer"
          class="group relative bg-cyber-card border border-cyber-border cyber-chamfer transition-all duration-300 hover:border-cyber-accent hover:shadow-neon overflow-hidden p-6"
          data-testid="article-card-machine-readable"
        >
          <div class="flex items-center gap-3 mb-4">
            <span class="px-2 py-1 text-[10px] font-tech uppercase tracking-wider bg-cyber-accent/20 text-cyber-accent border border-cyber-accent/50">
              {{ $t('article.machineReadableEngineer.badge') }}
            </span>
            <span class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest">
              {{ $t('article.machineReadableEngineer.readTime') }}
            </span>
          </div>
          <h3 class="font-orbitron text-xl font-bold uppercase tracking-wide mb-3 group-hover:text-cyber-accent transition-colors">
            {{ $t('article.machineReadableEngineer.title') }}
          </h3>
          <p class="text-sm text-cyber-mutedFg font-mono line-clamp-3">
            {{ $t('article.machineReadableEngineer.metaDescription') }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
