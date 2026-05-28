import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ArticlesSection from '~/components/ArticlesSection.vue'

describe('ArticlesSection', () => {
  it('renders section header labels', async () => {
    const wrapper = await mountSuspended(ArticlesSection)
    expect(wrapper.text()).toContain('PUBLICATIONS')
  })

  it('renders article card with correct link', async () => {
    const wrapper = await mountSuspended(ArticlesSection)
    const card = wrapper.find('[data-testid="article-card-machine-readable"]')
    expect(card.exists()).toBe(true)
    expect(card.attributes('href')).toBe('/articles/machine-readable-engineer')
  })

  it('renders article title from locales', async () => {
    const wrapper = await mountSuspended(ArticlesSection)
    expect(wrapper.text()).toContain('Machine-Readable Engineer')
  })

  it('has sr-only semantic heading for ATS', async () => {
    const wrapper = await mountSuspended(ArticlesSection)
    const srHeading = wrapper.find('h2.sr-only')
    expect(srHeading.exists()).toBe(true)
  })
})
