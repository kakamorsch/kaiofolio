<template>
  <footer class="relative py-16 px-4 border-t border-cyber-border">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <!-- Brand -->
        <div class="space-y-4">
          <h3 class="font-orbitron text-2xl font-bold uppercase text-cyber-fg">
            KAIO <span class="text-cyber-accent">MORSCH</span>
          </h3>
          <p class="text-sm text-cyber-mutedFg leading-relaxed">
            Senior Software Engineer especializado em sistemas distribuídos, 
            tecnologia financeira e soluções de e-commerce escaláveis.
          </p>
        </div>
        
        <!-- Quick Links -->
        <div class="space-y-4">
          <h4 class="font-tech text-xs uppercase tracking-widest text-cyber-accent">Navegação</h4>
          <nav class="space-y-2">
            <a href="#" class="block text-sm text-cyber-mutedFg hover:text-cyber-accent transition-colors">Perfil</a>
            <a href="#experiencias" class="block text-sm text-cyber-mutedFg hover:text-cyber-accent transition-colors">Experiências</a>
            <a href="#capacitacoes" class="block text-sm text-cyber-mutedFg hover:text-cyber-accent transition-colors">Capacitações</a>
            <a href="#hobbies" class="block text-sm text-cyber-mutedFg hover:text-cyber-accent transition-colors">Hobbies</a>
          </nav>
        </div>
        
        <!-- Contact -->
        <div class="space-y-4">
          <h4 class="font-tech text-xs uppercase tracking-widest text-cyber-accent">Contato</h4>
          <div class="space-y-2 font-mono text-sm">
            <a 
              :href="`mailto:${profile.contact.email}`"
              class="flex items-center gap-2 text-cyber-mutedFg hover:text-cyber-accent transition-colors"
            >
              <span class="text-cyber-accent">></span>
              {{ profile.contact.email }}
            </a>
            <a 
              :href="`https://${profile.contact.linkedin}`"
              target="_blank"
              class="flex items-center gap-2 text-cyber-mutedFg hover:text-cyber-accent transition-colors"
            >
              <span class="text-cyber-accent">></span>
              {{ profile.contact.linkedin }}
            </a>
            <div class="flex items-center gap-2 text-cyber-mutedFg">
              <span class="text-cyber-accent">></span>
              {{ profile.contact.phone }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-cyber-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest">
          <span class="text-cyber-accent">©</span> 2025 Kaio Morsch. Todos os sistemas operacionais.
        </p>
        <div class="flex items-center gap-2 text-xs font-tech text-cyber-mutedFg">
          <span class="w-2 h-2 bg-cyber-accent rounded-full animate-pulse" />
          <span>Sistema Online</span>
          <span class="text-cyber-border">|</span>
          <span>Node.js {{ nodeVersion }}</span>
          <span class="text-cyber-border">|</span>
          <span>Nuxt 3</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { profile } from '~/data/profile'

const nodeVersion = '22.x'
</script>