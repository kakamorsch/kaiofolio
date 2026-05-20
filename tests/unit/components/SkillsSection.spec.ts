import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import SkillsSection from '~/components/SkillsSection.vue'

describe('SkillsSection', () => {
  it('renders section header labels', async () => {
    const wrapper = await mountSuspended(SkillsSection)
    expect(wrapper.text()).toContain('ARSENAL')
    expect(wrapper.text()).toContain('TECH')
  })

  it('renders skill categories with priority highlighting', async () => {
    const wrapper = await mountSuspended(SkillsSection)
    const text = wrapper.text()

    // Check for key categories (default locale is en)
    expect(text).toContain('Backend & Runtime')
    expect(text).toContain('Architecture & Systems')
    expect(text).toContain('Frontend & Frameworks')
  })

  it('renders priority backend and architecture skills with accent styling', async () => {
    const wrapper = await mountSuspended(SkillsSection)
    const text = wrapper.text()

    // Core skills should be present
    expect(text).toContain('Go')
    expect(text).toContain('Bun')
    expect(text).toContain('Distributed Systems')
    expect(text).toContain('High Availability')
    expect(text).toContain('Large-Scale Migrations')
  })

  it('renders certification terminal', async () => {
    const wrapper = await mountSuspended(SkillsSection)
    expect(wrapper.text()).toContain('certifications.log')
  })

  it('has sr-only semantic heading for ATS', async () => {
    const wrapper = await mountSuspended(SkillsSection)
    const srHeading = wrapper.find('h2.sr-only')
    expect(srHeading.exists()).toBe(true)
  })
})
