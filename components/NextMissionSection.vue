<template>
  <section class="relative py-24 md:py-32 px-4 overflow-hidden">
    <!-- Animated background -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-b from-cyber-bg via-cyber-muted/20 to-cyber-bg" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-accent/5 rounded-full blur-3xl animate-pulse" />
    </div>
    
    <div class="relative max-w-4xl mx-auto text-center">
      <!-- Locked Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-cyber-accent-secondary/50 bg-cyber-accent-secondary/10 cyber-chamfer-sm">
        <svg class="w-4 h-4 text-cyber-accent-secondary animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <span class="text-xs font-tech text-cyber-accent-secondary uppercase tracking-[0.3em]">Próxima Fase Desbloqueada em Breve</span>
      </div>
      
      <!-- Main Content -->
      <h2 class="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wide mb-6">
        <span class="text-cyber-accent-secondary cyber-text-glow-secondary">{{ nextMission.title }}</span>
      </h2>
      
      <div class="flex items-center justify-center gap-4 mb-8">
        <div class="h-px w-16 bg-cyber-accent-secondary/50" />
        <span class="text-xs font-tech text-cyber-accent-secondary uppercase tracking-widest">{{ nextMission.status }}</span>
        <div class="h-px w-16 bg-cyber-accent-secondary/50" />
      </div>
      
      <p class="text-lg md:text-xl text-cyber-fg/80 leading-relaxed max-w-2xl mx-auto mb-8">
        {{ nextMission.description }}
      </p>
      
      <!-- Location Badge -->
      <div class="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyber-accent-secondary text-cyber-accent-secondary font-tech uppercase tracking-widest cyber-chamfer hover:bg-cyber-accent-secondary hover:text-cyber-bg transition-all duration-300 cursor-default">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        <span>{{ nextMission.location }}</span>
      </div>
      
      <!-- Required Level -->
      <div class="mt-8 text-xs font-tech text-cyber-mutedFg uppercase tracking-widest">
        Requer: Level {{ nextMission.requiredLevel }} // Senior Software Engineer
      </div>
    </div>
  </section>
</template>

<script setup>
import { nextMission } from '~/data/profile'
</script>