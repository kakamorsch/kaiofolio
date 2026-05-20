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

  it('has a button that triggers scroll to form', async () => {
    const wrapper = await mountSuspended(LeadCtaSection)
    const btn = wrapper.find('[data-testid="cta-button"]')

    expect(btn.exists()).toBe(true)
    expect(btn.attributes('type')).toBe('button')
  })
})
