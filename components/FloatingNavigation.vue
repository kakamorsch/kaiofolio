<template>
	<nav
		class="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-4"
		:aria-label="$t('a11y.navigation')"
	>
		<!-- Section dots -->
		<div class="flex flex-col items-center gap-3">
			<a
				v-for="item in navItems"
				:key="item.id"
				:href="item.href"
				:class="[
					'group relative flex items-center justify-center w-3 h-3 rounded-full border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-offset-2 focus:ring-offset-cyber-bg',
					activeSection === item.id
						? 'bg-cyber-accent border-cyber-accent scale-125'
						: 'bg-transparent border-cyber-mutedFg/50 hover:border-cyber-accent',
				]"
				:aria-label="item.label"
				@click.prevent="scrollTo(item.href, item.id)"
			>
				<!-- Tooltip -->
				<span
					class="absolute right-5 whitespace-nowrap px-2 py-1 bg-cyber-card border border-cyber-border text-xs font-tech text-cyber-accent uppercase tracking-wider cyber-chamfer-sm opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none"
				>
					{{ item.label }}
				</span>
			</a>
		</div>

		<!-- Divider -->
		<div class="w-px h-6 bg-cyber-border" aria-hidden="true" />

		<!-- Back to top -->
		<button
			type="button"
			:class="[
				'p-2 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-offset-2 focus:ring-offset-cyber-bg',
				showBackToTop
					? 'opacity-100 border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10'
					: 'opacity-0 pointer-events-none border-transparent text-cyber-mutedFg',
			]"
			:aria-label="$t('a11y.backToTop')"
			@click="scrollToTop"
		>
			<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
			</svg>
		</button>
	</nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const { t } = useI18n()

const activeSection = ref('hero')
const showBackToTop = ref(false)

const navItems = computed(() => [
	{ id: 'hero', href: '#hero', label: t('a11y.navProfile') },
	{ id: 'experiencias', href: '#experiencias', label: t('a11y.navExperience') },
	{ id: 'war-stories', href: '#war-stories', label: t('a11y.navWarStories') },
	{ id: 'capacitacoes', href: '#capacitacoes', label: t('a11y.navSkills') },
	{ id: 'artigos', href: '#artigos', label: t('a11y.navArticles') },
])

let observer: IntersectionObserver | null = null
let scrollTicking = false

function scrollTo(href: string, itemId: string) {
	if (process.client) {
		activeSection.value = itemId
		const el = document.querySelector(href)
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' })
		}
	}
}

function scrollToTop() {
	if (process.client) {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
}

function onScroll() {
	if (!scrollTicking) {
		window.requestAnimationFrame(() => {
			showBackToTop.value = window.scrollY > 400
			scrollTicking = false
		})
		scrollTicking = true
	}
}

onMounted(() => {
	if (process.client) {
		window.addEventListener('scroll', onScroll, { passive: true })
		showBackToTop.value = window.scrollY > 400

		const sectionIds = navItems.value.map((i) => i.id)
		const sections = sectionIds
			.map((id) => document.getElementById(id))
			.filter(Boolean) as HTMLElement[]

		if (sections.length) {
			observer = new IntersectionObserver(
				(entries) => {
					const visible = entries
						.filter((e) => e.isIntersecting)
						.sort((a, b) => b.intersectionRatio - a.intersectionRatio)

					if (visible.length > 0) {
						activeSection.value = visible[0].target.id
					}
				},
				{ rootMargin: '-40% 0px -40% 0px', threshold: 0 }
			)

			sections.forEach((section) => observer?.observe(section))
		}
	}
})

onBeforeUnmount(() => {
	if (process.client) {
		window.removeEventListener('scroll', onScroll)
	}
	if (observer) {
		observer.disconnect()
		observer = null
	}
})
</script>
