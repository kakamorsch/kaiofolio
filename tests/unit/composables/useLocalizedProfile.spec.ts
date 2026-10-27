import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { defineComponent, h, computed } from 'vue'
import { useLocalizedProfile } from '~/composables/useLocalizedProfile'

const TestComponent = defineComponent({
  setup() {
    const {
      localizedExperiences,
      localizedSkills,
      localizedSkillCategories,
      localizedImpactHighlights,
      localizedResumeMeta,
      localizedLocation,
      localizedEducation,
      profile,
    } = useLocalizedProfile()

    const kazeExp = computed(() =>
      localizedExperiences.value.find(e => e.id === 'kaze')
    )
    const dotExp = computed(() =>
      localizedExperiences.value.find(e => e.id === 'dot-digital')
    )
    const earlyCareerExp = computed(() =>
      localizedExperiences.value.find(e => e.id === 'early-career')
    )
    const somaExp = computed(() =>
      localizedExperiences.value.find(e => e.id === 'soma')
    )
    const acctExp = computed(() =>
      localizedExperiences.value.find(e => e.id === 'acct')
    )

    return {
      kazeExp,
      dotExp,
      earlyCareerExp,
      somaExp,
      acctExp,
      localizedSkills,
      localizedSkillCategories,
      localizedImpactHighlights,
      localizedResumeMeta,
      localizedLocation,
      localizedEducation,
      localizedExperiences,
      profile,
    }
  },
  render() {
    return h('div')
  },
})

describe('useLocalizedProfile', () => {
  it('resolves employmentType for Kaze experience', async () => {
    const wrapper = await mountSuspended(TestComponent)
    const vm = wrapper.vm as any

    expect(vm.kazeExp).toBeDefined()
    expect(vm.kazeExp.employmentType).toBeTruthy()
    // employmentType varies by locale (e.g., 'Contract / Consulting Projects', 'Consultoria por Contrato', '契約プロジェクト')
    expect(vm.kazeExp.employmentType.length).toBeGreaterThan(0)
  })

  it('resolves flat skills array for ATS', async () => {
    const wrapper = await mountSuspended(TestComponent)
    const vm = wrapper.vm as any

    expect(vm.localizedSkills.length).toBeGreaterThan(0)
    expect(vm.localizedSkills).toContain('Go')
    expect(vm.localizedSkills).toContain('Distributed Systems')
    expect(vm.localizedSkills).toContain('High Availability')
    expect(vm.localizedSkills).toContain('Large-Scale Migrations')
  })

  it('resolves skill categories with items', async () => {
    const wrapper = await mountSuspended(TestComponent)
    const vm = wrapper.vm as any

    expect(vm.localizedSkillCategories.length).toBeGreaterThan(0)

    const backendCat = vm.localizedSkillCategories.find(
      (c: any) => c.name === 'Backend & Runtime' || c.name === 'Backend & Runtime' || c.name === 'バックエンド & ランタイム'
    )
    expect(backendCat).toBeDefined()
    expect(backendCat.items.length).toBeGreaterThan(0)
    expect(backendCat.items).toContain('Go')

    const archCat = vm.localizedSkillCategories.find(
      (c: any) => c.name === 'Arquitetura & Sistemas' || c.name === 'Architecture & Systems' || c.name === 'アーキテクチャ & システム'
    )
    expect(archCat).toBeDefined()
    expect(archCat.items).toContain('Distributed Systems')
  })

  describe('US senior market positioning', () => {
    it('exposes remote LATAM location instead of a city in Brazil', async () => {
      const wrapper = await mountSuspended(TestComponent)
      const vm = wrapper.vm as any

      expect(vm.localizedLocation).toContain('Remote')
      expect(vm.localizedLocation).toContain('LATAM')
      expect(vm.localizedLocation).toContain('UTC-3')
      expect(vm.localizedLocation).not.toContain('Urubici')
    })

    it('exposes the Associate of Science degree', async () => {
      const wrapper = await mountSuspended(TestComponent)
      const vm = wrapper.vm as any

      expect(vm.localizedEducation.degree).toContain('Associate of Science')
      expect(vm.localizedEducation.degree).toContain('Systems Analysis and Software Development')
      expect(vm.localizedEducation.period).toBe('2013 - 2017')
    })

    it('has no certifications resolver anymore', async () => {
      const wrapper = await mountSuspended(TestComponent)
      const vm = wrapper.vm as any

      expect((vm.profile as any).certifications).toBeUndefined()
      expect(vm.profile.impactHighlights.length).toBeGreaterThan(0)
    })

    it('resolves impact highlights with metrics', async () => {
      const wrapper = await mountSuspended(TestComponent)
      const vm = wrapper.vm as any

      expect(vm.localizedImpactHighlights.length).toBeGreaterThan(0)
      const metrics = vm.localizedImpactHighlights.map((i: any) => i.metric)
      expect(metrics).toContain('+$10M')
      expect(metrics).toContain('99.9%')
    })
  })

  describe('overemployment conflict resolution', () => {
    it('positions DOT Digital Group as the current full-time role', async () => {
      const wrapper = await mountSuspended(TestComponent)
      const vm = wrapper.vm as any

      expect(vm.dotExp).toBeDefined()
      expect(vm.dotExp.period).toMatch(/Present|Presente|現在/)
      expect(vm.dotExp.role).toBe('Senior Software Engineer')
    })

    it('closes the Kaze engagement before the DOT role started', async () => {
      const wrapper = await mountSuspended(TestComponent)
      const vm = wrapper.vm as any

      expect(vm.kazeExp).toBeDefined()
      expect(vm.kazeExp.period).not.toMatch(/Present|Presente|現在/)
      expect(vm.kazeExp.role).not.toMatch(/Founder|Fundador|創業者/i)
    })

    it('no longer frames Kaze as an active consultancy', async () => {
      const wrapper = await mountSuspended(TestComponent)
      const vm = wrapper.vm as any

      expect(vm.kazeExp.note).toBeTruthy()
      expect(vm.kazeExp.note).toMatch(/May 2025|maio de 2025|2025年5月/)
    })
  })

  describe('early career pruning', () => {
    it('removes Altech, Promotional Travel and the standalone Linx/Fabrica roles', async () => {
      const wrapper = await mountSuspended(TestComponent)
      const vm = wrapper.vm as any

      const ids = vm.localizedExperiences.map((e: any) => e.id)
      expect(ids).not.toContain('altech')
      expect(ids).not.toContain('promotional')
      expect(ids).not.toContain('linx')
      expect(ids).not.toContain('fabrica')
    })

    it('condenses Linx and Fabrica Digital into a single early career entry', async () => {
      const wrapper = await mountSuspended(TestComponent)
      const vm = wrapper.vm as any

      expect(vm.earlyCareerExp).toBeDefined()
      expect(vm.earlyCareerExp.company).toContain('Linx')
      expect(vm.earlyCareerExp.company).toContain('Fabrica Digital')
    })

    it('keeps the early career entry free of support/hardware wording', async () => {
      const wrapper = await mountSuspended(TestComponent)
      const vm = wrapper.vm as any

      const text = [
        vm.earlyCareerExp.description,
        ...vm.earlyCareerExp.highlights,
        ...vm.earlyCareerExp.technologies,
      ].join(' ')

      expect(text).not.toMatch(/atendimento ao cliente|customer service/i)
      expect(text).not.toMatch(/VPN|Firewall/i)
      expect(text).not.toMatch(/\bPOS\b/i)
      expect(text).not.toMatch(/hardware/i)
      expect(text).toMatch(/Shell/i)
      expect(text).toMatch(/Vue/i)
    })
  })

  describe('e-commerce impact bullets', () => {
    it('uses engineering-led bullets for Soma Group', async () => {
      const wrapper = await mountSuspended(TestComponent)
      const vm = wrapper.vm as any

      expect(vm.somaExp).toBeDefined()
      expect(vm.somaExp.highlights.length).toBeGreaterThan(0)
      expect(vm.somaExp.highlights.join(' ')).toMatch(/Core Web Vitals/i)
      expect(vm.somaExp.highlights.join(' ')).not.toMatch(/Participated in agile meetings/i)
    })

    it('uses engineering-led bullets for ACCT', async () => {
      const wrapper = await mountSuspended(TestComponent)
      const vm = wrapper.vm as any

      expect(vm.acctExp).toBeDefined()
      expect(vm.acctExp.highlights.join(' ')).toMatch(/TypeScript/)
      expect(vm.acctExp.highlights.join(' ')).toMatch(/VTEX APIs/i)
    })
  })

  describe('resume layout metadata', () => {
    it('defines the 2-page experience order', async () => {
      const wrapper = await mountSuspended(TestComponent)
      const vm = wrapper.vm as any

      expect(vm.localizedResumeMeta.experienceOrder).toEqual([
        'dot-digital',
        'pagarme',
        'kaze',
        'soma',
        'acct',
        'early-career',
      ])
    })

    it('defines core skill groups for the resume', async () => {
      const wrapper = await mountSuspended(TestComponent)
      const vm = wrapper.vm as any

      expect(vm.localizedResumeMeta.coreSkills.length).toBeGreaterThan(0)
      expect(vm.localizedResumeMeta.coreSkills[0].items.length).toBeGreaterThan(0)
      expect(vm.localizedResumeMeta.coreSkillsTitle).toBeTruthy()
    })

    it('exposes the resume section titles', async () => {
      const wrapper = await mountSuspended(TestComponent)
      const vm = wrapper.vm as any

      expect(vm.localizedResumeMeta.profileTitle).toBeTruthy()
      expect(vm.localizedResumeMeta.experienceTitle).toBeTruthy()
      expect(vm.localizedResumeMeta.experienceContinuedTitle).toBeTruthy()
      expect(vm.localizedResumeMeta.educationTitle).toBeTruthy()
      expect(vm.localizedResumeMeta.languagesTitle).toBeTruthy()
    })
  })
})
