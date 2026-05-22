<template>
  <section id="experiencias" class="relative py-24 md:py-32 px-4" :aria-label="$t('a11y.sectionExperience')" tabindex="-1">
    <h2 class="sr-only">{{ $t('a11y.sectionExperience') }}</h2>
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="mb-16 space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-12 h-px bg-cyber-accent" aria-hidden="true" />
          <span class="text-xs font-tech text-cyber-accent uppercase tracking-[0.3em]">{{ $t('experience.sectionLabel') }}</span>
        </div>
        <h2 class="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide cyber-text-glow">
          {{ $t('experience.sectionTitle') }}<span class="text-cyber-accent">{{ $t('experience.sectionTitleHighlight') }}</span>
        </h2>
        <p class="text-cyber-mutedFg max-w-2xl font-mono text-sm md:text-base">
          {{ $t('experience.sectionDescription') }}
        </p>

        <!-- Active Filter -->
        <div v-if="selectedTech" class="flex items-center gap-3 pt-2">
          <span class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest">{{ $t('experience.filterActive') }}:</span>
          <span class="px-3 py-1 text-xs font-tech uppercase tracking-wider bg-cyber-accent/20 text-cyber-accent border border-cyber-accent/50 cyber-chamfer-sm flex items-center gap-2">
            {{ selectedTech }}
            <button
              @click="setTechFilter(null)"
              class="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-offset-2 focus:ring-offset-cyber-bg rounded"
              :aria-label="`${$t('a11y.removeFilter')}: ${selectedTech}`"
            >
              ×
            </button>
          </span>
        </div>
      </div>

      <!-- Experience Grid -->
      <ul class="space-y-6" :aria-label="$t('a11y.experienceList')">
        <li
          v-for="(exp, index) in filteredExperiences"
          :key="exp.id"
          class="group"
        >
          <!-- Experience Card -->
          <div
            :data-testid="`experience-card-${exp.id}`"
            class="relative bg-cyber-card border border-cyber-border cyber-chamfer transition-all duration-300 hover:border-cyber-accent hover:shadow-neon overflow-hidden"
          >
            <!-- Level Indicator -->
            <div class="absolute top-0 left-0 bg-cyber-accent text-cyber-bg font-orbitron font-bold text-xs px-3 py-1 cyber-chamfer-sm z-10" aria-hidden="true">
              LV.{{ exp.level }}
            </div>

            <!-- Clickable Header -->
            <div
              class="p-6 md:p-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyber-accent"
              tabindex="0"
              role="button"
              :aria-expanded="expandedExp === exp.id"
              :aria-controls="`exp-details-${exp.id}`"
              :aria-label="`${exp.company}, ${$t('a11y.toggleExperience')}`"
              @click="toggleExp(exp.id)"
              @keydown.enter.prevent="toggleExp(exp.id)"
              @keydown.space.prevent="toggleExp(exp.id)"
            >
              <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div class="space-y-2">
                  <div class="flex items-center gap-3 flex-wrap">
                    <h3 class="font-orbitron text-xl md:text-2xl font-bold uppercase text-cyber-fg group-hover:text-cyber-accent transition-colors">
                      {{ exp.company }}
                    </h3>
                    <span
                      v-if="index === 0 && !selectedTech"
                      class="px-2 py-0.5 text-[10px] font-tech uppercase tracking-wider bg-cyber-accent/20 text-cyber-accent border border-cyber-accent/50"
                    >
                      {{ $t('experience.current') }}
                    </span>
                    <span
                      v-if="exp.employmentType"
                      data-testid="employment-type-badge"
                      class="px-2 py-0.5 text-[10px] font-tech uppercase tracking-wider bg-cyber-accent-secondary/10 text-cyber-accent-secondary border border-dashed border-cyber-accent-secondary/50"
                    >
                      {{ exp.employmentType }}
                    </span>
                  </div>
                  <p class="font-tech text-cyber-accent-tertiary uppercase tracking-wider text-sm">
                    {{ exp.role }}
                  </p>
                </div>

                <div class="flex items-center gap-4 text-xs font-tech text-cyber-mutedFg">
                  <span class="flex items-center gap-1">
                    <span class="text-cyber-accent" aria-hidden="true">></span>
                    {{ exp.period }}
                  </span>
                  <span class="hidden md:inline text-cyber-border" aria-hidden="true">|</span>
                  <span class="hidden md:inline">{{ exp.location }}</span>
                </div>
              </div>

              <!-- Hack Command Preview -->
              <div class="mt-4 flex items-center gap-2 text-xs font-mono">
                <span class="text-cyber-accent">{{ $t('experience.hackCommandPrefix') }}</span>
                <span class="text-cyber-mutedFg">{{ exp.hackCommand }}</span>
                <span
                  class="transition-transform duration-300"
                  :class="expandedExp === exp.id ? 'rotate-90' : ''"
                  aria-hidden="true"
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
              :id="`exp-details-${exp.id}`"
              class="border-t border-cyber-border bg-cyber-bg/80"
            >
              <!-- Terminal Header Bar -->
              <div class="flex items-center gap-2 px-4 py-2 bg-cyber-muted/50 border-b border-cyber-border" aria-hidden="true">
                <div class="w-3 h-3 rounded-full bg-red-500/80" />
                <div class="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div class="w-3 h-3 rounded-full bg-green-500/80" />
                <span class="ml-2 text-[10px] font-tech text-cyber-mutedFg uppercase">{{ exp.company }} — breach.log</span>
              </div>

              <div class="p-6 md:p-8 space-y-6">
                <!-- Hack Output -->
                <div class="font-mono text-sm space-y-1" aria-hidden="true">
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
                  <h4 class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest mb-2">{{ $t('experience.missionDescription') }}</h4>
                  <p class="text-cyber-fg/80 text-sm leading-relaxed">{{ exp.description }}</p>
                </div>

                <!-- Highlights -->
                <div>
                  <h4 class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest mb-2">{{ $t('experience.completedObjectives') }}</h4>
                  <ul class="space-y-2">
                    <li
                      v-for="(highlight, i) in exp.highlights"
                      :key="i"
                      class="flex items-start gap-2 text-sm text-cyber-fg/80"
                    >
                      <span class="text-cyber-accent mt-1" aria-hidden="true">[+]</span>
                      <MetricHighlight :text="highlight" />
                    </li>
                  </ul>
                </div>

                <!-- Technologies -->
                <div>
                  <h4 class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest mb-2">{{ $t('experience.techArsenal') }}</h4>
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
        </li>

        <!-- Featured Case Study -->
        <div class="relative bg-cyber-card border border-dashed border-cyber-accent-secondary/40 cyber-chamfer p-6 md:p-8">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div class="text-xs font-tech text-cyber-accent-secondary uppercase tracking-widest mb-2">
                {{ $t('experience.featuredCaseStudy') }}
              </div>
              <h3 class="font-orbitron text-lg md:text-xl font-bold uppercase text-cyber-fg">
                {{ $t('caseStudy.largeScaleMigration.title') }}
              </h3>
              <p class="text-cyber-mutedFg text-sm mt-1 max-w-xl">
                {{ $t('caseStudy.largeScaleMigration.subtitle') }}
              </p>
            </div>
            <NuxtLink
              to="/case-studies/vue-large-scale-migration"
              class="inline-flex items-center gap-2 px-5 py-2.5 border border-cyber-accent-secondary text-cyber-accent-secondary font-tech uppercase tracking-widest text-xs cyber-chamfer-sm hover:bg-cyber-accent-secondary hover:text-cyber-bg transition-all duration-300 shrink-0"
            >
              {{ $t('experience.viewCaseStudy') }}
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- No results -->
        <div v-if="filteredExperiences.length === 0" class="text-center py-12">
          <p class="text-cyber-mutedFg font-tech text-sm uppercase tracking-widest">{{ $t('experience.noResults') }}</p>
          <button
            @click="setTechFilter(null)"
            class="mt-4 px-4 py-2 text-xs font-tech uppercase tracking-wider border border-cyber-accent text-cyber-accent hover:bg-cyber-accent hover:text-cyber-bg transition-all cyber-chamfer-sm focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-offset-2 focus:ring-offset-cyber-bg"
          >
            {{ $t('experience.clearFilter') }}
          </button>
        </div>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTechFilter } from '~/composables/useTechFilter'
import { useLocalizedProfile } from '~/composables/useLocalizedProfile'

const { selectedTech, setTechFilter, techMatchesFilter } = useTechFilter()
const { localizedExperiences } = useLocalizedProfile()

const expandedExp = ref<string | null>(null)

const toggleExp = (id: string) => {
  expandedExp.value = expandedExp.value === id ? null : id
}

const filteredExperiences = computed(() => {
  if (!selectedTech.value) return localizedExperiences.value
  return localizedExperiences.value.filter(exp =>
    exp.technologies.some(tech => techMatchesFilter(tech, selectedTech.value!))
  )
})
</script>
