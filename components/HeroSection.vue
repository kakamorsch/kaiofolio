<template>
  <section class="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
    <!-- Background grid effect -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute inset-0" style="background-image: linear-gradient(rgba(0,255,136,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.05) 1px, transparent 1px); background-size: 60px 60px;" />
    </div>
    
    <!-- Floating particles/decorative elements -->
    <div class="absolute top-20 left-10 w-2 h-2 bg-cyber-accent rounded-full animate-pulse opacity-60" />
    <div class="absolute top-40 right-20 w-1 h-1 bg-cyber-accent-secondary rounded-full animate-pulse opacity-40" style="animation-delay: 0.5s" />
    <div class="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-cyber-accent-tertiary rounded-full animate-pulse opacity-50" style="animation-delay: 1s" />
    
    <div class="relative z-10 max-w-6xl mx-auto w-full">
      <!-- Terminal Header -->
      <div class="mb-8 flex items-center gap-2 text-xs font-tech text-cyber-mutedFg uppercase tracking-[0.3em]">
        <span class="text-cyber-accent">></span>
        <span class="terminal-type">system.init --user=kaio.morsch --mode=portfolio</span>
        <span class="animate-blink text-cyber-accent">█</span>
      </div>
      
      <!-- Main Hero Content -->
      <div class="grid lg:grid-cols-5 gap-12 items-center">
        <!-- Left: Main Text -->
        <div class="lg:col-span-3 space-y-6">
          <!-- Status Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-cyber-accent/10 border border-cyber-accent/30 cyber-chamfer-sm">
            <div class="w-2 h-2 bg-cyber-accent rounded-full animate-pulse" />
            <span class="text-xs font-tech text-cyber-accent uppercase tracking-widest">Online // Available for hire</span>
          </div>
          
          <!-- Glitch Name -->
          <h1 
            class="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider leading-none cyber-text-glow"
            :class="{ 'cyber-glitch': glitchActive }"
            :data-text="displayText"
          >
            {{ displayText }}
          </h1>
          
          <!-- Title with typing effect -->
          <div class="space-y-2">
            <p class="font-orbitron text-xl md:text-2xl lg:text-3xl font-bold text-cyber-accent uppercase tracking-wide">
              {{ profile.title }}
            </p>
            <p class="font-tech text-lg md:text-xl text-cyber-accent-tertiary tracking-wider">
              {{ profile.subtitle }}
            </p>
          </div>
          
          <!-- Summary -->
          <p class="text-base md:text-lg text-cyber-fg/80 leading-relaxed max-w-2xl">
            {{ profile.summary }}
          </p>
          
          <!-- Specialties Tags -->
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="specialty in profile.specialties" 
              :key="specialty"
              class="px-3 py-1 text-xs font-tech uppercase tracking-wider border border-cyber-border cyber-chamfer-sm text-cyber-mutedFg hover:border-cyber-accent hover:text-cyber-accent transition-all duration-300"
            >
              {{ specialty }}
            </span>
          </div>
          
          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4 pt-4">
            <a 
              :href="`mailto:${profile.contact.email}`"
              class="group relative px-8 py-3 bg-cyber-accent text-cyber-bg font-tech uppercase tracking-widest text-sm cyber-chamfer-sm hover:brightness-110 transition-all duration-150 cyber-glow"
            >
              <span class="relative z-10">Iniciar Contato</span>
            </a>
            <a 
              :href="`https://${profile.contact.linkedin}`"
              target="_blank"
              class="group relative px-8 py-3 border-2 border-cyber-accent-secondary text-cyber-accent-secondary font-tech uppercase tracking-widest text-sm cyber-chamfer-sm hover:bg-cyber-accent-secondary hover:text-cyber-bg transition-all duration-150 cyber-glow-secondary"
            >
              <span class="relative z-10">LinkedIn</span>
            </a>
          </div>
        </div>
        
        <!-- Right: HUD Panel -->
        <div class="lg:col-span-2 hidden lg:block">
          <div class="holographic cyber-chamfer p-6 space-y-4">
            <!-- Corner accents -->
            <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-accent" />
            <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-accent" />
            <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-accent" />
            <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-accent" />
            
            <div class="text-xs font-tech text-cyber-accent uppercase tracking-widest mb-4 flex items-center gap-2">
              <span class="w-2 h-2 bg-cyber-accent animate-pulse" />
              Status do Sistema
            </div>
            
            <div class="space-y-3 font-mono text-sm">
              <div class="flex justify-between">
                <span class="text-cyber-mutedFg">Nome:</span>
                <span class="text-cyber-fg">Kaio Morsch</span>
              </div>
              <div class="flex justify-between">
                <span class="text-cyber-mutedFg">Level:</span>
                <span class="text-cyber-accent">9 // Senior</span>
              </div>
              <div class="flex justify-between">
                <span class="text-cyber-mutedFg">Location:</span>
                <span class="text-cyber-fg">{{ profile.location }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-cyber-mutedFg">Exp:</span>
                <span class="text-cyber-accent-tertiary">6+ Years</span>
              </div>
              <div class="flex justify-between">
                <span class="text-cyber-mutedFg">Stack:</span>
                <span class="text-cyber-accent-secondary">Go / Bun / Vue</span>
              </div>
              <div class="flex justify-between">
                <span class="text-cyber-mutedFg">Focus:</span>
                <span class="text-cyber-fg">Payments & E-com</span>
              </div>
            </div>
            
            <!-- Progress bars -->
            <div class="space-y-2 pt-2">
              <div class="text-xs font-tech text-cyber-mutedFg uppercase">Backend</div>
              <div class="h-1 bg-cyber-border overflow-hidden">
                <div class="h-full bg-cyber-accent w-[90%] animate-pulse" />
              </div>
              <div class="text-xs font-tech text-cyber-mutedFg uppercase">Frontend</div>
              <div class="h-1 bg-cyber-border overflow-hidden">
                <div class="h-full bg-cyber-accent-tertiary w-[85%]" />
              </div>
              <div class="text-xs font-tech text-cyber-mutedFg uppercase">Architecture</div>
              <div class="h-1 bg-cyber-border overflow-hidden">
                <div class="h-full bg-cyber-accent-secondary w-[88%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest">Scroll para hackear</span>
        <div class="w-px h-8 bg-gradient-to-b from-cyber-accent to-transparent animate-pulse" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { profile } from '~/data/profile'

const displayText = ref('KAIO')
const glitchActive = ref(false)
const fullName = 'KAIO MORSCH'
let glitchInterval

const triggerGlitch = () => {
  glitchActive.value = true
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`'
  let iterations = 0
  
  const interval = setInterval(() => {
    displayText.value = fullName
      .split('')
      .map((char, index) => {
        if (index < iterations) return fullName[index]
        if (char === ' ') return ' '
        return chars[Math.floor(Math.random() * chars.length)]
      })
      .join('')
    
    iterations += 1 / 2
    
    if (iterations >= fullName.length) {
      clearInterval(interval)
      displayText.value = fullName
      setTimeout(() => { glitchActive.value = false }, 500)
    }
  }, 30)
}

onMounted(() => {
  // Initial glitch effect
  setTimeout(triggerGlitch, 500)
  
  // Periodic glitch
  glitchInterval = setInterval(() => {
    if (Math.random() > 0.7) triggerGlitch()
  }, 5000)
})

onUnmounted(() => {
  if (glitchInterval) clearInterval(glitchInterval)
})
</script>

<style scoped>
.terminal-type {
  overflow: hidden;
  border-right: 2px solid transparent;
  white-space: nowrap;
  animation: typing 3s steps(50, end);
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
</style>