<template>
  <section id="experiencias" class="relative py-24 md:py-32 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="mb-16 space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-12 h-px bg-cyber-accent" />
          <span class="text-xs font-tech text-cyber-accent uppercase tracking-[0.3em]">Trajetória Profissional</span>
        </div>
        <h2 class="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide cyber-text-glow">
          ACESSANDO <span class="text-cyber-accent">HISTÓRICO</span>
        </h2>
        <p class="text-cyber-mutedFg max-w-2xl font-mono text-sm md:text-base">
          Clique em cada missão para executar o breach e revelar os detalhes da operação. 
          Cada experiência representa um nível desbloqueado na sua jornada.
        </p>
      </div>
      
      <!-- Experience Grid -->
      <div class="space-y-6">
        <div 
          v-for="(exp, index) in experiences" 
          :key="exp.id"
          class="group"
        >
          <!-- Experience Card -->
          <div 
            class="relative bg-cyber-card border border-cyber-border cyber-chamfer transition-all duration-300 hover:border-cyber-accent hover:shadow-neon cursor-pointer overflow-hidden"
            @click="toggleExp(exp.id)"
          >
            <!-- Level Indicator -->
            <div class="absolute top-0 left-0 bg-cyber-accent text-cyber-bg font-orbitron font-bold text-xs px-3 py-1 cyber-chamfer-sm z-10">
              LV.{{ exp.level }}
            </div>
            
            <!-- Header -->
            <div class="p-6 md:p-8">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div class="space-y-2">
                  <div class="flex items-center gap-3">
                    <h3 class="font-orbitron text-xl md:text-2xl font-bold uppercase text-cyber-fg group-hover:text-cyber-accent transition-colors">
                      {{ exp.company }}
                    </h3>
                    <span 
                      v-if="index === 0" 
                      class="px-2 py-0.5 text-[10px] font-tech uppercase tracking-wider bg-cyber-accent/20 text-cyber-accent border border-cyber-accent/50"
                    >
                      Atual
                    </span>
                  </div>
                  <p class="font-tech text-cyber-accent-tertiary uppercase tracking-wider text-sm">
                    {{ exp.role }}
                  </p>
                </div>
                
                <div class="flex items-center gap-4 text-xs font-tech text-cyber-mutedFg">
                  <span class="flex items-center gap-1">
                    <span class="text-cyber-accent">></span>
                    {{ exp.period }}
                  </span>
                  <span class="hidden md:inline text-cyber-border">|</span>
                  <span class="hidden md:inline">{{ exp.location }}</span>
                </div>
              </div>
              
              <!-- Hack Command Preview -->
              <div class="mt-4 flex items-center gap-2 text-xs font-mono">
                <span class="text-cyber-accent">$</span>
                <span class="text-cyber-mutedFg">{{ exp.hackCommand }}</span>
                <span 
                  class="transition-transform duration-300"
                  :class="expandedExp === exp.id ? 'rotate-90' : ''"
                >
                  <svg class="w-4 h-4 text-cyber-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
            
            <!-- Expanded Terminal Output -->
            <div 
              v-show="expandedExp === exp.id"
              class="border-t border-cyber-border bg-cyber-bg/80"
            >
              <!-- Terminal Header Bar -->
              <div class="flex items-center gap-2 px-4 py-2 bg-cyber-muted/50 border-b border-cyber-border">
                <div class="w-3 h-3 rounded-full bg-red-500/80" />
                <div class="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div class="w-3 h-3 rounded-full bg-green-500/80" />
                <span class="ml-2 text-[10px] font-tech text-cyber-mutedFg uppercase">{{ exp.company }} — breach.log</span>
              </div>
              
              <div class="p-6 md:p-8 space-y-6">
                <!-- Hack Output -->
                <div class="font-mono text-sm space-y-1">
                  <div 
                    v-for="(line, i) in exp.hackOutput" 
                    :key="i"
                    class="text-cyber-accent/90"
                    :style="{ animationDelay: `${i * 200}ms` }"
                  >
                    {{ line }}
                  </div>
                </div>
                
                <!-- Description -->
                <div>
                  <h4 class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest mb-2">Descrição da Missão</h4>
                  <p class="text-cyber-fg/80 text-sm leading-relaxed">{{ exp.description }}</p>
                </div>
                
                <!-- Highlights -->
                <div>
                  <h4 class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest mb-2">Objetivos Completados</h4>
                  <ul class="space-y-2">
                    <li 
                      v-for="(highlight, i) in exp.highlights" 
                      :key="i"
                      class="flex items-start gap-2 text-sm text-cyber-fg/80"
                    >
                      <span class="text-cyber-accent mt-1">[+]</span>
                      <span>{{ highlight }}</span>
                    </li>
                  </ul>
                </div>
                
                <!-- Technologies -->
                <div>
                  <h4 class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest mb-2">Arsenal Tecnológico</h4>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="tech in exp.technologies" 
                      :key="tech"
                      class="px-3 py-1 text-xs font-tech uppercase tracking-wider bg-cyber-accent/10 text-cyber-accent border border-cyber-accent/30 cyber-chamfer-sm"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { experiences } from '~/data/profile'

const expandedExp = ref(null)

const toggleExp = (id) => {
  expandedExp.value = expandedExp.value === id ? null : id
}
</script>