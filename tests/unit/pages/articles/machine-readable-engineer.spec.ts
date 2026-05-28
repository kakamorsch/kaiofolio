import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import MachineReadableEngineer from '~/pages/articles/machine-readable-engineer.vue'

describe('MachineReadableEngineer Article', () => {
  it('renders article title', async () => {
    const wrapper = await mountSuspended(MachineReadableEngineer)
    expect(wrapper.text()).toContain('Machine-Readable Engineer')
  })

  it('renders author name', async () => {
    const wrapper = await mountSuspended(MachineReadableEngineer)
    expect(wrapper.text()).toContain('Kaio')
  })

  it('renders all sections', async () => {
    const wrapper = await mountSuspended(MachineReadableEngineer)
    expect(wrapper.text()).toContain('JSON-LD')
    expect(wrapper.text()).toContain('robots.txt')
    expect(wrapper.text()).toContain('i18n')
  })

  it('has semantic article tag', async () => {
    const wrapper = await mountSuspended(MachineReadableEngineer)
    expect(wrapper.find('article').exists()).toBe(true)
  })

  it('has back to portfolio link', async () => {
    const wrapper = await mountSuspended(MachineReadableEngineer)
    const link = wrapper.find('a[href="/"]')
    expect(link.exists()).toBe(true)
  })
})
