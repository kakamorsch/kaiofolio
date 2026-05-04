<template>
  <div class="relative min-h-screen bg-cyber-bg text-cyber-fg font-mono overflow-x-hidden">
    <SkipLink />

    <!-- Circuit Background Pattern -->
    <div class="fixed inset-0 circuit-bg pointer-events-none z-0" aria-hidden="true" />

    <!-- Gradient Mesh corners -->
    <div class="fixed top-0 left-0 w-96 h-96 bg-gradient-radial from-cyber-accent/5 to-transparent pointer-events-none z-0" aria-hidden="true" />
    <div class="fixed bottom-0 right-0 w-96 h-96 bg-gradient-radial from-cyber-accent-secondary/5 to-transparent pointer-events-none z-0" aria-hidden="true" />

    <!-- Scanlines Overlay -->
    <div class="scanlines" aria-hidden="true" />

    <!-- Language Selector -->
    <div class="fixed top-4 right-4 z-50">
      <LanguageSelector />
    </div>

    <!-- Main Content -->
    <main id="main-content" class="relative z-10" tabindex="-1">
      <slot />
    </main>

    <!-- Noise Texture Overlay -->
    <div class="fixed inset-0 pointer-events-none z-20 opacity-[0.03]" aria-hidden="true"
         style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');" />
  </div>
</template>

<style>
.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
}
</style>
