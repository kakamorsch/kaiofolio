import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import LanguageSelector from '~/components/LanguageSelector.vue'

describe('LanguageSelector', () => {
  it('renders PT and EN buttons', async () => {
    const wrapper = await mountSuspended(LanguageSelector)
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(2)
    expect(buttons[0].text()).toBe('PT')
    expect(buttons[1].text()).toBe('EN')
  })

  it('has active and inactive states on buttons', async () => {
    const wrapper = await mountSuspended(LanguageSelector)
    const buttons = wrapper.findAll('button')
    const ptButton = buttons[0]
    const enButton = buttons[1]

    // One button should have the accent border (active) and the other the muted border (inactive)
    const ptHasAccentBorder = ptButton.classes().includes('border-cyber-accent')
    const enHasAccentBorder = enButton.classes().includes('border-cyber-accent')

    expect(ptHasAccentBorder || enHasAccentBorder).toBe(true)
    expect(ptHasAccentBorder !== enHasAccentBorder).toBe(true)
  })
})
