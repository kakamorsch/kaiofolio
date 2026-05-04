import { describe, it, expect, beforeEach } from 'vitest'
import { useTechFilter } from '~/composables/useTechFilter'

describe('useTechFilter', () => {
  beforeEach(() => {
    const { setTechFilter } = useTechFilter()
    setTechFilter(null)
  })

  it('starts with no filter selected', () => {
    const { selectedTech } = useTechFilter()
    expect(selectedTech.value).toBeNull()
  })

  it('sets a technology filter', () => {
    const { selectedTech, setTechFilter } = useTechFilter()
    setTechFilter('Go')
    expect(selectedTech.value).toBe('Go')
  })

  it('clears the filter when set to null', () => {
    const { selectedTech, setTechFilter } = useTechFilter()
    setTechFilter('React')
    setTechFilter(null)
    expect(selectedTech.value).toBeNull()
  })

  it('toggles a technology on and off', () => {
    const { selectedTech, toggleTechFilter } = useTechFilter()
    toggleTechFilter('Vue/Nuxt')
    expect(selectedTech.value).toBe('Vue/Nuxt')
    toggleTechFilter('Vue/Nuxt')
    expect(selectedTech.value).toBeNull()
  })

  it('switches filter when toggling a different tech', () => {
    const { selectedTech, toggleTechFilter } = useTechFilter()
    toggleTechFilter('Go')
    toggleTechFilter('React')
    expect(selectedTech.value).toBe('React')
  })

  describe('techMatchesFilter', () => {
    it('matches exact technology names', () => {
      const { techMatchesFilter } = useTechFilter()
      expect(techMatchesFilter('Go', 'Go')).toBe(true)
      expect(techMatchesFilter('React', 'React')).toBe(true)
    })

    it('matches Vue/Nuxt alias to Vue', () => {
      const { techMatchesFilter } = useTechFilter()
      expect(techMatchesFilter('Vue', 'Vue/Nuxt')).toBe(true)
      expect(techMatchesFilter('Vue.js', 'Vue/Nuxt')).toBe(true)
      expect(techMatchesFilter('Nuxt', 'Vue/Nuxt')).toBe(true)
      expect(techMatchesFilter('Nuxt.js', 'Vue/Nuxt')).toBe(true)
    })

    it('matches E-commerce alias to VTEX', () => {
      const { techMatchesFilter } = useTechFilter()
      expect(techMatchesFilter('VTEX', 'E-commerce')).toBe(true)
    })

    it('does not match unrelated technologies', () => {
      const { techMatchesFilter } = useTechFilter()
      expect(techMatchesFilter('Python', 'Go')).toBe(false)
      expect(techMatchesFilter('Vue', 'React')).toBe(false)
    })

    it('is case-insensitive', () => {
      const { techMatchesFilter } = useTechFilter()
      expect(techMatchesFilter('vue', 'Vue/Nuxt')).toBe(true)
      expect(techMatchesFilter('GO', 'Go')).toBe(true)
    })
  })

  describe('getFilterTerms', () => {
    it('returns aliases for known tech groups', () => {
      const { getFilterTerms } = useTechFilter()
      expect(getFilterTerms('Vue/Nuxt')).toEqual(['Vue', 'Vue.js', 'Nuxt', 'Nuxt.js'])
    })

    it('returns the tech itself when no alias is defined', () => {
      const { getFilterTerms } = useTechFilter()
      expect(getFilterTerms('Rust')).toEqual(['Rust'])
    })
  })
})
