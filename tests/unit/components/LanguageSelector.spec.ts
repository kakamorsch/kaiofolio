import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import LanguageSelector from '~/components/LanguageSelector.vue'

describe('LanguageSelector', () => {
  it('renders PT, EN and JA buttons', async () => {
    const wrapper = await mountSuspended(LanguageSelector)
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(3)
    expect(buttons[0].text()).toBe('PT')
    expect(buttons[1].text()).toBe('EN')
    expect(buttons[2].text()).toBe('JA')
  })

  it('has active and inactive states on buttons', async () => {
    const wrapper = await mountSuspended(LanguageSelector)
    const buttons = wrapper.findAll('button')
    const ptButton = buttons[0]
    const enButton = buttons[1]
    const jaButton = buttons[2]

    // One button should have the accent border (active) and the others the muted border (inactive)
    const ptHasAccentBorder = ptButton.classes().includes('border-cyber-accent')
    const enHasAccentBorder = enButton.classes().includes('border-cyber-accent')
    const jaHasAccentBorder = jaButton.classes().includes('border-cyber-accent')

    const activeCount = [ptHasAccentBorder, enHasAccentBorder, jaHasAccentBorder].filter(Boolean).length
    expect(activeCount).toBe(1)
  })
})
