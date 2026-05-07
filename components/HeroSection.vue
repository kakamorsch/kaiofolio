<template>
	<section
		class="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
		aria-label="Perfil"
	>
		<!-- Background grid effect -->
		<div class="absolute inset-0 opacity-20" aria-hidden="true">
			<div
				class="absolute inset-0"
				style="
					background-image:
						linear-gradient(rgba(0, 255, 136, 0.05) 1px, transparent 1px),
						linear-gradient(90deg, rgba(0, 255, 136, 0.05) 1px, transparent 1px);
					background-size: 60px 60px;
				"
			/>
		</div>

		<!-- Floating particles/decorative elements -->
		<div
			class="absolute top-4 left-4 w-2 h-2 bg-cyber-accent rounded-full animate-pulse opacity-60"
			aria-hidden="true"
		/>
		<div
			class="absolute top-40 right-20 w-1 h-1 bg-cyber-accent-secondary rounded-full animate-pulse opacity-40"
			style="animation-delay: 0.5s"
			aria-hidden="true"
		/>
		<div
			class="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-cyber-accent-tertiary rounded-full animate-pulse opacity-50"
			style="animation-delay: 1s"
			aria-hidden="true"
		/>

		<div class="relative z-10 max-w-6xl mx-auto w-full">
			<!-- Terminal Header -->
			<div
				class="mb-8 flex items-center gap-2 text-xs font-tech text-cyber-mutedFg uppercase tracking-[0.3em]"
				aria-hidden="true"
			>
				<span class="text-cyber-accent">></span>
				<span class="terminal-type"
					>system.init --user=kaio.morsch --mode=portfolio</span
				>
				<span class="animate-blink text-cyber-accent">█</span>
			</div>

			<!-- Main Hero Content -->
			<div class="grid lg:grid-cols-5 gap-12 items-center">
				<!-- Left: Main Text -->
				<div class="lg:col-span-3 space-y-6">
					<!-- Status Badge -->
					<div
						class="inline-flex items-center gap-2 px-4 py-2 bg-cyber-accent/10 border border-cyber-accent/30 cyber-chamfer-sm"
					>
						<div class="w-2 h-2 bg-cyber-accent rounded-full animate-pulse" aria-hidden="true" />
						<span
							class="text-xs font-tech text-cyber-accent uppercase tracking-widest"
							>{{ $t('hero.status') }}</span
						>
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
						<p
							class="font-orbitron text-xl md:text-2xl lg:text-3xl font-bold text-cyber-accent uppercase tracking-wide"
						>
							{{ localizedTitle }}
						</p>
						<p
							class="font-tech text-lg md:text-xl text-cyber-accent-tertiary tracking-wider"
						>
							{{ localizedSubtitle }}
						</p>
					</div>

					<!-- Summary -->
					<p
						class="text-base md:text-lg text-cyber-fg/80 leading-relaxed max-w-2xl"
					>
						{{ localizedSummary }}
					</p>

					<!-- Specialties Tags -->
					<div class="flex flex-wrap gap-2" role="group" :aria-label="$t('a11y.filterLabel')">
						<button
							v-for="specialty in localizedSpecialties"
							:key="specialty"
							@click="handleTagClick(specialty)"
							class="px-3 py-1 text-xs font-tech uppercase tracking-wider border border-cyber-border cyber-chamfer-sm text-cyber-mutedFg hover:border-cyber-accent hover:text-cyber-accent transition-all duration-300 select-none focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-offset-2 focus:ring-offset-cyber-bg"
							:class="{
								'border-cyber-accent text-cyber-accent bg-cyber-accent/10':
									selectedTech === specialty,
							}"
							:aria-pressed="selectedTech === specialty"
						>
							{{ specialty }}
						</button>
					</div>

					<!-- CTA Buttons -->
					<div class="flex flex-wrap gap-4 pt-4">
						<a
							:href="`mailto:${localizedContact.email}`"
							class="group relative px-8 py-3 bg-cyber-accent text-cyber-bg font-tech uppercase tracking-widest text-sm cyber-chamfer-sm hover:brightness-110 transition-all duration-150 cyber-glow focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-offset-2 focus:ring-offset-cyber-bg"
						>
							<span class="relative z-10">{{ $t('hero.ctaContact') }}</span>
						</a>
						<a
							:href="`https://${localizedContact.linkedin}`"
							target="_blank"
							rel="noopener noreferrer"
							:aria-label="`${$t('hero.ctaLinkedIn')} — ${$t('a11y.openInNewTab')}`"
							class="group relative px-8 py-3 border-2 border-cyber-accent-secondary text-cyber-accent-secondary font-tech uppercase tracking-widest text-sm cyber-chamfer-sm hover:bg-cyber-accent-secondary hover:text-white transition-all duration-150 cyber-glow-secondary focus:outline-none focus:ring-2 focus:ring-cyber-accent-secondary focus:ring-offset-2 focus:ring-offset-cyber-bg"
						>
							<span class="relative z-10">{{ $t('hero.ctaLinkedIn') }}</span>
						</a>
						<a
							:href="`https://${localizedContact.github}`"
							target="_blank"
							rel="noopener noreferrer"
							:aria-label="`${$t('hero.ctaGitHub')} — ${$t('a11y.openInNewTab')}`"
							class="group relative px-8 py-3 border-2 border-cyber-accent-tertiary text-cyber-accent-tertiary font-tech uppercase tracking-widest text-sm cyber-chamfer-sm hover:bg-cyber-accent-tertiary hover:text-white transition-all duration-150 cyber-glow-tertiary focus:outline-none focus:ring-2 focus:ring-cyber-accent-tertiary focus:ring-offset-2 focus:ring-offset-cyber-bg"
						>
							<span class="relative z-10">{{ $t('hero.ctaGitHub') }}</span>
						</a>
					</div>
				</div>

				<!-- Right: HUD Panel -->
				<div class="lg:col-span-2 hidden lg:block">
					<div
						class="holographic cyber-chamfer p-6 space-y-4"
						role="region"
						:aria-label="$t('a11y.systemStatusPanel')"
					>
						<!-- Corner accents -->
						<div
							class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-accent"
							aria-hidden="true"
						/>
						<div
							class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-accent"
							aria-hidden="true"
						/>
						<div
							class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-accent"
							aria-hidden="true"
						/>
						<div
							class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-accent"
							aria-hidden="true"
						/>

						<div
							class="text-xs font-tech text-cyber-accent uppercase tracking-widest mb-4 flex items-center gap-2"
						>
							<span class="w-2 h-2 bg-cyber-accent animate-pulse" aria-hidden="true" />
							{{ $t('hero.systemStatus') }}
						</div>

						<div class="space-y-3 font-mono text-sm">
							<div class="flex justify-between">
								<span class="text-cyber-mutedFg">{{ $t('hero.name') }}:</span>
								<span class="text-cyber-fg">{{ localizedName }}</span>
							</div>
							<div class="flex justify-between">
								<span class="text-cyber-mutedFg">{{ $t('hero.level') }}:</span>
								<span class="text-cyber-accent">{{ localizedLevel }}</span>
							</div>
							<div class="flex justify-between">
								<span class="text-cyber-mutedFg"
									>{{ $t('hero.location') }}:</span
								>
								<span class="text-cyber-fg">{{ localizedLocation }}</span>
							</div>
							<div class="flex justify-between">
								<span class="text-cyber-mutedFg">{{ $t('hero.exp') }}:</span>
								<span class="text-cyber-accent-tertiary">{{
									localizedExp
								}}</span>
							</div>
							<div class="flex justify-between">
								<span class="text-cyber-mutedFg">{{ $t('hero.stack') }}:</span>
								<span class="text-cyber-accent-secondary">{{
									localizedStack
								}}</span>
							</div>
							<div class="flex justify-between">
								<span class="text-cyber-mutedFg">{{ $t('hero.focus') }}:</span>
								<span class="text-cyber-fg">{{ localizedFocus }}</span>
							</div>
						</div>

						<!-- Progress bars -->
						<div class="space-y-2 pt-2">
							<div>
								<div class="text-xs font-tech text-cyber-mutedFg uppercase">
									{{ $t('hero.frontend') }}
								</div>
								<div
									class="h-1 bg-cyber-border overflow-hidden"
									role="progressbar"
									:aria-label="$t('a11y.progressFrontend')"
									aria-valuenow="95"
									aria-valuemin="0"
									aria-valuemax="100"
								>
									<div class="h-full bg-cyber-accent w-[95%] animate-pulse" />
								</div>
							</div>
							<div>
								<div class="text-xs font-tech text-cyber-mutedFg uppercase">
									{{ $t('hero.fullstack') }}
								</div>
								<div
									class="h-1 bg-cyber-border overflow-hidden"
									role="progressbar"
									:aria-label="$t('a11y.progressFullstack')"
									aria-valuenow="75"
									aria-valuemin="0"
									aria-valuemax="100"
								>
									<div class="h-full bg-cyber-accent w-[75%]" />
								</div>
							</div>
							<div>
								<div class="text-xs font-tech text-cyber-mutedFg uppercase">
									{{ $t('hero.backend') }}
								</div>
								<div
									class="h-1 bg-cyber-border overflow-hidden"
									role="progressbar"
									:aria-label="$t('a11y.progressBackend')"
									aria-valuenow="55"
									aria-valuemin="0"
									aria-valuemax="100"
								>
									<div class="h-full bg-cyber-accent w-[55%]" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Scroll indicator -->
			<div
				class="mt-12 sm:mt-0 sm:absolute sm:bottom-8 sm:left-1/2 sm:-translate-x-1/2 flex flex-col items-center gap-2"
				aria-hidden="true"
			>
				<span
					class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest"
					>{{ $t('hero.scrollToHack') }}</span
				>
				<div
					class="w-px h-8 bg-gradient-to-b from-cyber-accent to-transparent animate-pulse"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useTechFilter } from '~/composables/useTechFilter';
import { useLocalizedProfile } from '~/composables/useLocalizedProfile';

const router = useRouter();
const { selectedTech, toggleTechFilter } = useTechFilter();
const {
	localizedName,
	localizedTitle,
	localizedSubtitle,
	localizedLocation,
	localizedSummary,
	localizedSpecialties,
	localizedContact,
	localizedLevel,
	localizedExp,
	localizedStack,
	localizedFocus,
} = useLocalizedProfile();

const handleTagClick = async (specialty: string) => {
	toggleTechFilter(specialty);
	await router.push({ hash: '#experiencias' });
	if (process.client) {
		const el = document.getElementById('experiencias');
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
			el.focus();
		}
	}
};

const displayText = ref('KAIO');
const glitchActive = ref(false);
const fullName = 'KAIO MORSCH';
let glitchInterval: ReturnType<typeof setInterval> | null = null;

const triggerGlitch = () => {
	glitchActive.value = true;
	const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
	let iterations = 0;

	const interval = setInterval(() => {
		displayText.value = fullName
			.split('')
			.map((char, index) => {
				if (index < iterations) return fullName[index];
				if (char === ' ') return ' ';
				return chars[Math.floor(Math.random() * chars.length)];
			})
			.join('');

		iterations += 1 / 2;

		if (iterations >= fullName.length) {
			clearInterval(interval);
			displayText.value = fullName;
			setTimeout(() => {
				glitchActive.value = false;
			}, 500);
		}
	}, 30);
};

onMounted(() => {
	setTimeout(triggerGlitch, 500);

	glitchInterval = setInterval(() => {
		if (Math.random() > 0.7) triggerGlitch();
	}, 5000);
});

onUnmounted(() => {
	if (glitchInterval) clearInterval(glitchInterval);
});
</script>

<style scoped>
.terminal-type {
	overflow: hidden;
	border-right: 2px solid transparent;
	white-space: nowrap;
	animation: typing 3s steps(50, end);
}

@keyframes typing {
	from {
		width: 0;
	}
	to {
		width: 100%;
	}
}

@media (prefers-reduced-motion: reduce) {
	.terminal-type {
		animation: none;
		border-right: none;
	}
}
</style>
