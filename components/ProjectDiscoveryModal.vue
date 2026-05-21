<template>
	<Transition
		enter-active-class="transition-opacity duration-200"
		enter-from-class="opacity-0"
		enter-to-class="opacity-100"
		leave-active-class="transition-opacity duration-150"
		leave-from-class="opacity-100"
		leave-to-class="opacity-0"
	>
		<div
			v-if="isOpen"
			class="fixed inset-0 z-50 flex items-center justify-center"
			aria-hidden="false"
		>
			<!-- Overlay -->
			<div
				class="absolute inset-0 bg-cyber-bg/90 backdrop-blur-sm"
				@click="emit('close')"
				aria-hidden="true"
			/>

			<!-- Dialog Panel -->
			<div
				ref="modalPanel"
				role="dialog"
				aria-modal="true"
				:aria-labelledby="modalTitleId"
				class="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-3xl md:mx-4 flex flex-col bg-cyber-card/80 border border-cyber-border cyber-chamfer"
				@keydown="handleKeydown"
			>
				<!-- Corner accents -->
				<div
					class="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-cyber-accent z-10"
					aria-hidden="true"
				/>
				<div
					class="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-cyber-accent z-10"
					aria-hidden="true"
				/>
				<div
					class="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-cyber-accent z-10"
					aria-hidden="true"
				/>
				<div
					class="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-cyber-accent z-10"
					aria-hidden="true"
				/>

				<!-- Close button -->
				<button
					type="button"
					class="absolute top-3 right-3 z-20 p-2 text-cyber-mutedFg hover:text-cyber-accent transition-colors focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-offset-2 focus:ring-offset-cyber-bg rounded"
					:aria-label="$t('a11y.closeModal')"
					@click="emit('close')"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>

				<!-- Header -->
				<div class="px-6 pt-8 pb-4 md:px-10 md:pt-10 text-center shrink-0">
					<div
						class="inline-flex items-center gap-2 px-3 py-1 bg-cyber-accent/10 border border-cyber-accent/30 cyber-chamfer-sm mb-4"
					>
						<span class="text-xs font-tech text-cyber-accent uppercase tracking-widest">
							{{ $t('leadForm.sectionLabel') }}
						</span>
					</div>
					<h2
						:id="modalTitleId"
						class="font-orbitron text-2xl md:text-3xl font-black uppercase tracking-wider"
					>
						<span class="text-cyber-fg">{{ $t('leadForm.sectionTitle') }}</span>
						<span class="text-cyber-accent">{{ $t('leadForm.sectionTitleHighlight') }}</span>
					</h2>
					<p class="text-sm text-cyber-fg/70 max-w-xl mx-auto mt-2">
						{{ $t('leadForm.sectionDescription') }}
					</p>
				</div>

				<!-- Scrollable content -->
				<div class="flex-1 overflow-y-auto px-6 pb-8 md:px-10 md:pb-10">
					<!-- Success State -->
					<div
						v-if="formState === 'success'"
						data-testid="success-state"
						class="text-center space-y-6 py-8"
						role="status"
						aria-live="polite"
					>
						<div
							class="w-16 h-16 mx-auto rounded-full bg-cyber-accent/20 flex items-center justify-center border border-cyber-accent/40"
							aria-hidden="true"
						>
							<svg
								class="w-8 h-8 text-cyber-accent"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
						</div>
						<div class="space-y-2">
							<h3 class="font-orbitron text-xl font-bold text-cyber-accent uppercase tracking-wide">
								{{ $t('leadForm.successTitle') }}
							</h3>
							<p class="text-cyber-fg/80 max-w-md mx-auto">
								{{ $t('leadForm.successMessage') }}
							</p>
						</div>
						<button
							data-testid="reset-button"
							type="button"
							@click="resetForm"
							class="inline-flex items-center gap-2 px-6 py-2 border border-cyber-accent text-cyber-accent font-tech uppercase tracking-widest text-sm cyber-chamfer-sm hover:bg-cyber-accent hover:text-cyber-bg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-offset-2 focus:ring-offset-cyber-bg"
						>
							{{ $t('leadForm.submit') }}
						</button>
					</div>

					<!-- Error State -->
					<div
						v-else-if="formState === 'error'"
						data-testid="error-state"
						class="text-center space-y-6 py-8"
						role="alert"
						aria-live="assertive"
					>
						<div
							class="w-16 h-16 mx-auto rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/40"
							aria-hidden="true"
						>
							<svg
								class="w-8 h-8 text-red-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</div>
						<div class="space-y-2">
							<h3 class="font-orbitron text-xl font-bold text-red-400 uppercase tracking-wide">
								{{ $t('leadForm.errorTitle') }}
							</h3>
							<p class="text-cyber-fg/80 max-w-md mx-auto">
								{{ $t('leadForm.errorMessage') }}
							</p>
						</div>
						<button
							type="button"
							@click="formState = 'idle'"
							class="inline-flex items-center gap-2 px-6 py-2 border border-cyber-accent text-cyber-accent font-tech uppercase tracking-widest text-sm cyber-chamfer-sm hover:bg-cyber-accent hover:text-cyber-bg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-offset-2 focus:ring-offset-cyber-bg"
						>
							{{ $t('leadForm.submit') }}
						</button>
					</div>

					<!-- Form -->
					<form v-else class="space-y-6" @submit.prevent="handleSubmit" novalidate>
						<input
							id="fax_number"
							v-model="form.fax_number"
							type="text"
							tabindex="-1"
							aria-hidden="true"
							autocomplete="off"
							class="absolute opacity-0 pointer-events-none -z-10"
						/>

						<div class="space-y-2">
							<label
								for="client_name"
								class="block text-xs font-tech text-cyber-accent uppercase tracking-widest"
							>
								{{ $t('leadForm.clientName') }}
								<span class="text-red-400" aria-hidden="true">*</span>
							</label>
							<input
								id="client_name"
								ref="firstFocusable"
								v-model="form.client_name"
								type="text"
								:placeholder="$t('leadForm.clientNamePlaceholder')"
								required
								class="w-full px-4 py-3 bg-cyber-bg/80 border border-cyber-border text-cyber-fg font-mono text-sm placeholder:text-cyber-mutedFg/50 focus:border-cyber-accent focus:outline-none focus:ring-1 focus:ring-cyber-accent transition-colors cyber-chamfer-sm"
								:class="{ 'border-red-400 focus:border-red-400 focus:ring-red-400': showErrors && !form.client_name }"
								:aria-invalid="showErrors && !form.client_name"
								:aria-describedby="showErrors && !form.client_name ? 'client_name-error' : undefined"
							/>
							<p
								v-if="showErrors && !form.client_name"
								id="client_name-error"
								class="text-xs text-red-400 font-tech"
							>
								{{ $t('leadForm.requiredField') }}
							</p>
						</div>

						<div class="space-y-2">
							<label
								for="client_contact"
								class="block text-xs font-tech text-cyber-accent uppercase tracking-widest"
							>
								{{ $t('leadForm.clientContact') }}
								<span class="text-red-400" aria-hidden="true">*</span>
							</label>
							<input
								id="client_contact"
								v-model="form.client_contact"
								type="text"
								:placeholder="$t('leadForm.clientContactPlaceholder')"
								required
								class="w-full px-4 py-3 bg-cyber-bg/80 border border-cyber-border text-cyber-fg font-mono text-sm placeholder:text-cyber-mutedFg/50 focus:border-cyber-accent focus:outline-none focus:ring-1 focus:ring-cyber-accent transition-colors cyber-chamfer-sm"
								:class="{ 'border-red-400 focus:border-red-400 focus:ring-red-400': showErrors && !form.client_contact }"
								:aria-invalid="showErrors && !form.client_contact"
								:aria-describedby="showErrors && !form.client_contact ? 'client_contact-error' : undefined"
							/>
							<p
								v-if="showErrors && !form.client_contact"
								id="client_contact-error"
								class="text-xs text-red-400 font-tech"
							>
								{{ $t('leadForm.requiredField') }}
							</p>
						</div>

						<div class="space-y-2">
							<label
								for="project_idea"
								class="block text-xs font-tech text-cyber-accent uppercase tracking-widest"
							>
								{{ $t('leadForm.projectIdea') }}
								<span class="text-red-400" aria-hidden="true">*</span>
							</label>
							<textarea
								id="project_idea"
								v-model="form.project_idea"
								:placeholder="$t('leadForm.projectIdeaPlaceholder')"
								required
								rows="5"
								class="w-full px-4 py-3 bg-cyber-bg/80 border border-cyber-border text-cyber-fg font-mono text-sm placeholder:text-cyber-mutedFg/50 focus:border-cyber-accent focus:outline-none focus:ring-1 focus:ring-cyber-accent transition-colors resize-y cyber-chamfer-sm"
								:class="{ 'border-red-400 focus:border-red-400 focus:ring-red-400': showErrors && !form.project_idea }"
								:aria-invalid="showErrors && !form.project_idea"
								:aria-describedby="showErrors && !form.project_idea ? 'project_idea-error' : undefined"
							/>
							<p
								v-if="showErrors && !form.project_idea"
								id="project_idea-error"
								class="text-xs text-red-400 font-tech"
							>
								{{ $t('leadForm.requiredField') }}
							</p>
						</div>

						<div class="grid md:grid-cols-2 gap-6">
							<div class="space-y-2">
								<label
									for="estimated_budget"
									class="block text-xs font-tech text-cyber-accent uppercase tracking-widest"
								>
									{{ $t('leadForm.estimatedBudget') }}
								</label>
								<select
									id="estimated_budget"
									v-model="form.estimated_budget"
									class="w-full px-4 py-3 bg-cyber-bg/80 border border-cyber-border text-cyber-fg font-mono text-sm focus:border-cyber-accent focus:outline-none focus:ring-1 focus:ring-cyber-accent transition-colors cyber-chamfer-sm appearance-none"
								>
									<option value="" disabled>
										{{ $t('leadForm.estimatedBudget') }}
									</option>
									<option value="small">{{ $t('leadForm.budgetOptions.small') }}</option>
									<option value="medium">{{ $t('leadForm.budgetOptions.medium') }}</option>
									<option value="large">{{ $t('leadForm.budgetOptions.large') }}</option>
									<option value="enterprise">{{ $t('leadForm.budgetOptions.enterprise') }}</option>
									<option value="undisclosed">{{ $t('leadForm.budgetOptions.undisclosed') }}</option>
								</select>
							</div>

							<div class="space-y-2">
								<label
									for="tech_preference"
									class="block text-xs font-tech text-cyber-accent uppercase tracking-widest"
								>
									{{ $t('leadForm.techPreference') }}
								</label>
								<input
									id="tech_preference"
									v-model="form.tech_preference"
									type="text"
									:placeholder="$t('leadForm.techPreferencePlaceholder')"
									class="w-full px-4 py-3 bg-cyber-bg/80 border border-cyber-border text-cyber-fg font-mono text-sm placeholder:text-cyber-mutedFg/50 focus:border-cyber-accent focus:outline-none focus:ring-1 focus:ring-cyber-accent transition-colors cyber-chamfer-sm"
								/>
							</div>
						</div>

						<button
							data-testid="submit-button"
							type="submit"
							:disabled="formState === 'submitting'"
							class="group relative w-full px-8 py-4 bg-cyber-accent text-cyber-bg font-tech uppercase tracking-widest text-sm cyber-chamfer-sm hover:brightness-110 transition-all duration-150 cyber-glow focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-offset-2 focus:ring-offset-cyber-bg disabled:opacity-60 disabled:cursor-not-allowed"
						>
							<span v-if="formState === 'submitting'" class="flex items-center justify-center gap-3">
								<span
									class="w-4 h-4 border-2 border-cyber-bg/30 border-t-cyber-bg rounded-full animate-spin"
									aria-hidden="true"
								/>
								{{ $t('leadForm.submitting') }}
							</span>
							<span v-else>{{ $t('leadForm.submit') }}</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	</Transition>
</template>

<script setup lang="ts">
import { reactive, ref, watch, onMounted, onBeforeUnmount } from 'vue'

interface LeadForm {
	client_name: string
	client_contact: string
	project_idea: string
	estimated_budget: string
	tech_preference: string
	fax_number: string
}

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const props = defineProps<{
	isOpen: boolean
}>()

const emit = defineEmits<{
	close: []
}>()

const form = reactive<LeadForm>({
	client_name: '',
	client_contact: '',
	project_idea: '',
	estimated_budget: '',
	tech_preference: '',
	fax_number: '',
})

const formState = ref<FormState>('idle')
const showErrors = ref(false)
const modalTitleId = 'modal-lead-title'
const modalPanel = ref<HTMLElement | null>(null)
const firstFocusable = ref<HTMLElement | null>(null)
let previousActiveElement: Element | null = null

const resetForm = () => {
	form.client_name = ''
	form.client_contact = ''
	form.project_idea = ''
	form.estimated_budget = ''
	form.tech_preference = ''
	form.fax_number = ''
	showErrors.value = false
	formState.value = 'idle'
}

const handleSubmit = async () => {
	showErrors.value = true

	if (!form.client_name.trim() || !form.client_contact.trim() || !form.project_idea.trim()) {
		return
	}

	formState.value = 'submitting'

	try {
		await $fetch('/api/lead', {
			method: 'POST',
			body: {
				client_name: form.client_name.trim(),
				client_contact: form.client_contact.trim(),
				project_idea: form.project_idea.trim(),
				estimated_budget: form.estimated_budget,
				tech_preference: form.tech_preference,
				fax_number: form.fax_number,
			},
		})

		formState.value = 'success'
	} catch {
		formState.value = 'error'
	}
}

function getFocusables(): HTMLElement[] {
	const panel = modalPanel.value
	if (!panel) return []
	return Array.from(
		panel.querySelectorAll<HTMLElement>(
			'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
		)
	).filter((el) => !el.hasAttribute('disabled') && el.getAttribute('tabindex') !== '-1')
}

function handleKeydown(event: KeyboardEvent) {
	if (!props.isOpen) return

	if (event.key === 'Escape') {
		event.preventDefault()
		emit('close')
		return
	}

	if (event.key !== 'Tab') return

	const focusables = getFocusables()
	if (focusables.length === 0) return

	const first = focusables[0]
	const last = focusables[focusables.length - 1]

	if (event.shiftKey && document.activeElement === first) {
		event.preventDefault()
		last.focus()
	} else if (!event.shiftKey && document.activeElement === last) {
		event.preventDefault()
		first.focus()
	}
}

watch(
	() => props.isOpen,
	(open) => {
		if (open) {
			previousActiveElement = document.activeElement
			// Pequeno delay para garantir que o DOM esteja renderizado
			setTimeout(() => {
				if (firstFocusable.value) {
					firstFocusable.value.focus()
				} else {
					const focusables = getFocusables()
					if (focusables.length) focusables[0].focus()
				}
			}, 50)
		} else {
			if (previousActiveElement instanceof HTMLElement) {
				previousActiveElement.focus()
			}
		}
	}
)

onMounted(() => {
	document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
	document.removeEventListener('keydown', handleKeydown)
})
</script>
