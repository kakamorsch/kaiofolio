import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import LeadCtaSection from '~/components/LeadCtaSection.vue'

describe('LeadCtaSection', () => {
  it('renders the CTA title, subtitle and button', async () => {
    const wrapper = await mountSuspended(LeadCtaSection)

    expect(wrapper.find('[data-testid="cta-title"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="cta-subtitle"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="cta-button"]').exists()).toBe(true)
  })

  it('emits openModal when CTA button is clicked', async () => {
    const wrapper = await mountSuspended(LeadCtaSection)
    const btn = wrapper.find('[data-testid="cta-button"]')

    expect(btn.exists()).toBe(true)
    expect(btn.attributes('type')).toBe('button')

    await btn.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('openModal')).toBeTruthy()
    expect(wrapper.emitted('openModal')?.length).toBe(1)
  })
})
