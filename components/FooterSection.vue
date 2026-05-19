<template>
	<footer class="relative py-16 px-4 border-t border-cyber-border" role="contentinfo" :aria-label="$t('a11y.sectionFooter')">
		<h2 class="sr-only">{{ $t('a11y.sectionFooter') }}</h2>
		<div class="max-w-6xl mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
				<!-- Brand -->
				<div class="space-y-4">
					<h3 class="font-orbitron text-2xl font-bold uppercase text-cyber-fg">
						KAIO <span class="text-cyber-accent">MORSCH</span>
					</h3>
					<p class="text-sm text-cyber-mutedFg leading-relaxed">
						{{ $t('footer.brandDescription') }}
					</p>
				</div>

				<!-- Quick Links -->
				<nav class="space-y-4" :aria-label="$t('a11y.navigation')">
					<h4
						class="font-tech text-xs uppercase tracking-widest text-cyber-accent"
					>
						{{ $t('footer.navigation') }}
					</h4>
					<ul class="space-y-2">
						<li>
							<a
								href="#"
								class="block text-sm text-cyber-mutedFg hover:text-cyber-accent transition-colors focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-offset-2 focus:ring-offset-cyber-bg"
								>{{ $t('footer.navProfile') }}</a
							>
						</li>
						<li>
							<a
								href="#experiencias"
								class="block text-sm text-cyber-mutedFg hover:text-cyber-accent transition-colors focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-offset-2 focus:ring-offset-cyber-bg"
								>{{ $t('footer.navExperiences') }}</a
							>
						</li>
						<li>
							<a
								href="#capacitacoes"
								class="block text-sm text-cyber-mutedFg hover:text-cyber-accent transition-colors focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-offset-2 focus:ring-offset-cyber-bg"
								>{{ $t('footer.navQualifications') }}</a
							>
						</li>
						<li>
							<a
								href="#hobbies"
								class="block text-sm text-cyber-mutedFg hover:text-cyber-accent transition-colors focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-offset-2 focus:ring-offset-cyber-bg"
								>{{ $t('footer.navHobbies') }}</a
							>
						</li>
					</ul>
				</nav>

				<!-- Contact -->
				<div class="space-y-4">
					<h4
						class="font-tech text-xs uppercase tracking-widest text-cyber-accent"
					>
						{{ $t('footer.contact') }}
					</h4>
					<ul class="space-y-2 font-mono text-sm" :aria-label="$t('a11y.contactLinks')">
						<li>
							<a
								:href="`mailto:${localizedContact.email}`"
								:aria-label="`${$t('footer.contact')} — Email`"
								class="flex items-center gap-2 text-cyber-mutedFg hover:text-cyber-accent transition-colors focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-offset-2 focus:ring-offset-cyber-bg"
							>
								<span class="text-cyber-accent" aria-hidden="true">></span>
								{{ localizedContact.email }}
							</a>
						</li>
						<li>
							<a
								:href="`https://${localizedContact.linkedin}`"
								target="_blank"
								rel="noopener noreferrer"
								:aria-label="`${localizedContact.linkedin} — ${$t('a11y.openInNewTab')}`"
								class="flex items-center gap-2 text-cyber-mutedFg hover:text-cyber-accent transition-colors focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-offset-2 focus:ring-offset-cyber-bg"
							>
								<span class="text-cyber-accent" aria-hidden="true">></span>
								{{ localizedContact.linkedin }}
							</a>
						</li>
						<li>
							<a
								:href="`https://${localizedContact.github}`"
								target="_blank"
								rel="noopener noreferrer"
								:aria-label="`${localizedContact.github} — ${$t('a11y.openInNewTab')}`"
								class="flex items-center gap-2 text-cyber-mutedFg hover:text-cyber-accent transition-colors focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-offset-2 focus:ring-offset-cyber-bg"
							>
								<span class="text-cyber-accent" aria-hidden="true">></span>
								{{ localizedContact.github }}
							</a>
						</li>
						<li class="flex items-center gap-2 text-cyber-mutedFg">
							<span class="text-cyber-accent" aria-hidden="true">></span>
							{{ localizedContact.phone }}
						</li>
					</ul>
				</div>
			</div>

			<!-- Bottom Bar -->
			<div
				class="pt-8 border-t border-cyber-border flex flex-col md:flex-row items-center justify-between gap-4"
			>
				<p
					class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest"
				>
					<span class="text-cyber-accent" aria-hidden="true">©</span>
					{{ $t('footer.copyright', { year: 2026 }) }}
				</p>
				<div
					class="flex items-center gap-2 text-xs font-tech text-cyber-mutedFg"
					aria-hidden="true"
				>
					<span class="w-2 h-2 bg-cyber-accent rounded-full animate-pulse" />
					<span>{{ $t('footer.systemOnline') }}</span>
					<span class="text-cyber-border">|</span>
					<span>Node.js {{ nodeVersion }}</span>
					<span class="text-cyber-border">|</span>
					<span>Nuxt 3</span>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { useLocalizedProfile } from '~/composables/useLocalizedProfile';

const { localizedContact } = useLocalizedProfile();

const nodeVersion = '22.x';
</script>
