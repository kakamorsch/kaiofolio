import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import WarStoriesSection from '~/components/WarStoriesSection.vue'

describe('WarStoriesSection', () => {
  it('renders section header labels', async () => {
    const wrapper = await mountSuspended(WarStoriesSection)
    expect(wrapper.text()).toContain('WAR')
    expect(wrapper.text()).toContain('STORIES')
  })

  it('renders all war stories', async () => {
    const wrapper = await mountSuspended(WarStoriesSection)
    const cards = wrapper.findAll('[data-testid="war-story-card"]')
    expect(cards.length).toBe(2)
  })

  it('renders story titles and companies from real locales', async () => {
    const wrapper = await mountSuspended(WarStoriesSection)
    expect(wrapper.text()).toContain('Virtual Meeting Room in Vue')
    expect(wrapper.text()).toContain('Fabrica Digital')
    expect(wrapper.text()).toContain('Anti-Fraud Retry Button')
    expect(wrapper.text()).toContain('Pagar.me (Stone)')
  })

  it('renders all story fields for each card', async () => {
    const wrapper = await mountSuspended(WarStoriesSection)
    const firstCard = wrapper.findAll('[data-testid="war-story-card"]')[0]

    expect(firstCard.text()).toContain('Context')
    expect(firstCard.text()).toContain('Problem')
    expect(firstCard.text()).toContain('Action')
    expect(firstCard.text()).toContain('Result')
    expect(firstCard.text()).toContain('Lessons')

    expect(firstCard.text()).toContain('lockdown')
    expect(firstCard.text()).toContain('video conferencing')
    expect(firstCard.text()).toContain('Vue.js')
  })

  it('has sr-only semantic heading for ATS', async () => {
    const wrapper = await mountSuspended(WarStoriesSection)
    const srHeading = wrapper.find('h2.sr-only')
    expect(srHeading.exists()).toBe(true)
  })
})
