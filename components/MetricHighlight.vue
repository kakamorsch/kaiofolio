<template>
  <span class="metric-highlight">
    <template v-for="(segment, i) in segments" :key="i">
      <span
        v-if="segment.isMetric"
        data-testid="metric-badge"
        class="inline-block px-1.5 py-0.5 mx-0.5 text-xs font-tech font-bold tracking-wider bg-cyber-accent/15 text-cyber-accent border border-cyber-accent/40 cyber-chamfer-sm"
      >
        {{ segment.text }}
      </span>
      <template v-else>{{ segment.text }}</template>
    </template>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Segment {
  text: string
  isMetric: boolean
}

const props = defineProps<{
  text: string
}>()

// Captures: percentages, latency values, throughput numbers, uptime, etc.
const METRIC_REGEX = /([+-]?\d[\d,.]*\+?\s*(?:%|ms|s|min|hours?\/hour|orders?\/hour|req\/hour|GB|MB|TB|x))|(<\s*\d[\d,.]*\s*(?:%|ms|s|min))/gi

function parseSegments(text: string): Segment[] {
  const segments: Segment[] = []
  let lastIndex = 0

  for (const match of text.matchAll(METRIC_REGEX)) {
    const matchIndex = match.index ?? 0
    const matchText = match[0]

    // Text before the metric
    if (matchIndex > lastIndex) {
      segments.push({ text: text.slice(lastIndex, matchIndex), isMetric: false })
    }

    // The metric itself
    segments.push({ text: matchText, isMetric: true })
    lastIndex = matchIndex + matchText.length
  }

  // Remaining text after last metric
  if (lastIndex < text.length) {
    segments.push({ text: text.slice(lastIndex), isMetric: false })
  }

  // If no metrics found, return the whole text as a single non-metric segment
  if (segments.length === 0) {
    segments.push({ text, isMetric: false })
  }

  return segments
}

const segments = computed(() => parseSegments(props.text))
</script>
