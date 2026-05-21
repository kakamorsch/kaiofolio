import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import FloatingNavigation from '~/components/FloatingNavigation.vue'

describe('FloatingNavigation', () => {
  it('renders navigation links with aria-labels', async () => {
    const wrapper = await mountSuspended(FloatingNavigation)

    const links = wrapper.findAll('a')
    expect(links.length).toBe(4)

    expect(links[0].attributes('aria-label')).toBeTruthy()
    expect(links[0].attributes('href')).toBe('#hero')

    expect(links[1].attributes('href')).toBe('#experiencias')
    expect(links[2].attributes('href')).toBe('#war-stories')
    expect(links[3].attributes('href')).toBe('#capacitacoes')
  })

  it('renders back-to-top button with aria-label', async () => {
    const wrapper = await mountSuspended(FloatingNavigation)

    const btn = wrapper.find('button')
    expect(btn.exists()).toBe(true)
    expect(btn.attributes('aria-label')).toBeTruthy()
    expect(btn.attributes('type')).toBe('button')
  })

  it('has correct nav structure', async () => {
    const wrapper = await mountSuspended(FloatingNavigation)

    const nav = wrapper.find('nav')
    expect(nav.exists()).toBe(true)
    expect(nav.attributes('aria-label')).toBeTruthy()
  })
})
