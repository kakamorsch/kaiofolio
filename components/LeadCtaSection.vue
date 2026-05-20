<template>
	<section
		class="relative py-24 px-4 overflow-hidden"
		:aria-label="$t('a11y.sectionLeadForm')"
	>
		<!-- Background glow -->
		<div
			class="absolute inset-0 opacity-10"
			aria-hidden="true"
		>
			<div
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyber-accent/20 blur-[120px] rounded-full"
			/>
		</div>

		<div class="relative z-10 max-w-4xl mx-auto text-center space-y-8">
			<!-- Decorative line -->
			<div
				class="flex items-center justify-center gap-4"
				aria-hidden="true"
			>
				<div class="h-px w-16 bg-gradient-to-r from-transparent to-cyber-accent/60" />
				<div class="w-2 h-2 bg-cyber-accent rotate-45" />
				<div class="h-px w-16 bg-gradient-to-l from-transparent to-cyber-accent/60" />
			</div>

			<!-- Title -->
			<h2
				data-testid="cta-title"
				class="font-orbitron text-3xl md:text-5xl font-black uppercase tracking-wider cyber-text-glow"
			>
				<span class="text-cyber-fg">{{ $t('leadForm.ctaTitle') }}</span>
			</h2>

			<!-- Subtitle -->
			<p data-testid="cta-subtitle" class="text-lg md:text-xl text-cyber-fg/70 max-w-2xl mx-auto leading-relaxed">
				{{ $t('leadForm.ctaSubtitle') }}
			</p>

			<!-- CTA Button -->
			<button
				data-testid="cta-button"
				type="button"
				@click="scrollToForm"
				class="group relative inline-flex items-center gap-3 px-10 py-4 bg-cyber-accent text-cyber-bg font-tech uppercase tracking-widest text-sm cyber-chamfer-sm hover:brightness-110 transition-all duration-150 cyber-glow focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-offset-2 focus:ring-offset-cyber-bg"
			>
				<span class="relative z-10">{{ $t('leadForm.ctaButton') }}</span>
				<svg
					class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/>
				</svg>
			</button>

			<!-- Bottom decorative line -->
			<div
				class="flex items-center justify-center gap-4 pt-4"
				aria-hidden="true"
			>
				<div class="h-px w-24 bg-gradient-to-r from-transparent to-cyber-border" />
				<div class="w-1.5 h-1.5 bg-cyber-accent-secondary rounded-full animate-pulse" />
				<div class="h-px w-24 bg-gradient-to-l from-transparent to-cyber-border" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const scrollToForm = () => {
	if (process.client) {
		const el = document.getElementById('contato')
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' })
			el.focus()
		}
	}
}
</script>
