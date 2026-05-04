<template>
  <section id="hobbies" class="relative py-24 md:py-32 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="mb-16 space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-12 h-px bg-cyber-accent-secondary" />
          <span class="text-xs font-tech text-cyber-accent-secondary uppercase tracking-[0.3em]">Fora do Terminal</span>
        </div>
        <h2 class="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide">
          INTERESSES <span class="text-cyber-accent-secondary cyber-text-glow-secondary">PARALELOS</span>
        </h2>
        <p class="text-cyber-mutedFg max-w-2xl font-mono text-sm md:text-base">
          Atividades que alimentam a curiosidade e mantêm a mente afiada para novos desafios.
        </p>
      </div>
      
      <!-- Hobbies Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          v-for="(hobby, index) in hobbies" 
          :key="hobby.name"
          class="group relative bg-cyber-card border border-cyber-border cyber-chamfer p-6 md:p-8 hover:border-cyber-accent-secondary hover:shadow-neon-secondary transition-all duration-300"
          :class="index % 2 === 1 ? 'md:translate-y-4' : ''"
        >
          <!-- Corner accents -->
          <div class="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyber-border group-hover:border-cyber-accent-secondary transition-colors" />
          <div class="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyber-border group-hover:border-cyber-accent-secondary transition-colors" />
          <div class="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyber-border group-hover:border-cyber-accent-secondary transition-colors" />
          <div class="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyber-border group-hover:border-cyber-accent-secondary transition-colors" />
          
          <!-- Icon -->
          <div class="mb-4 w-12 h-12 flex items-center justify-center border border-cyber-border group-hover:border-cyber-accent-secondary group-hover:bg-cyber-accent-secondary/10 transition-all duration-300">
            <svg 
              class="w-6 h-6 text-cyber-mutedFg group-hover:text-cyber-accent-secondary transition-colors"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path v-if="hobby.icon === 'Cpu'" stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              <path v-else-if="hobby.icon === 'BrainCircuit'" stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              <path v-else-if="hobby.icon === 'GitBranch'" stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              <path v-else-if="hobby.icon === 'Wallet'" stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
          </div>
          
          <h3 class="font-orbitron text-lg font-bold uppercase text-cyber-fg group-hover:text-cyber-accent-secondary transition-colors mb-2">
            {{ hobby.name }}
          </h3>
          <p class="text-sm text-cyber-mutedFg leading-relaxed">
            {{ hobby.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { hobbies } from '~/data/profile'
</script>