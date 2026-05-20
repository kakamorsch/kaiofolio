// Mapeia tags do hero para variantes/aliases encontrados nas experiências
const techAliases: Record<string, string[]> = {
  'Vue/Nuxt': ['Vue', 'Vue.js', 'Nuxt', 'Nuxt.js'],
  'React': ['React'],
  'Go': ['Go'],
  'Bun': ['Bun'],
  'Distributed Systems': ['Distributed Systems', 'Microservices'],
  'Payment Gateways': ['Payment Gateways'],
  'E-commerce': ['E-commerce', 'VTEX'],
}

export function useTechFilter() {
  const selectedTech = useState<string | null>('techFilter', () => null)

  const setTechFilter = (tech: string | null) => {
    selectedTech.value = tech
  }

  const toggleTechFilter = (tech: string) => {
    selectedTech.value = selectedTech.value === tech ? null : tech
  }

  const getFilterTerms = (tech: string): string[] => {
    return techAliases[tech] || [tech]
  }

  const techMatchesFilter = (tech: string, filter: string): boolean => {
    const terms = getFilterTerms(filter)
    const techLower = tech.toLowerCase()
    return terms.some(term => {
      const termLower = term.toLowerCase()
      return techLower.includes(termLower) || termLower.includes(techLower)
    })
  }

  return {
    selectedTech,
    setTechFilter,
    toggleTechFilter,
    getFilterTerms,
    techMatchesFilter,
  }
}
