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
    } = useLocalizedProfile()

    const kazeExp = computed(() =>
      localizedExperiences.value.find(e => e.id === 'kaze')
    )

    return { kazeExp, localizedSkills, localizedSkillCategories }
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
    // employmentType varies by locale (e.g., 'B2B Consultancy', 'Consultoria B2B', 'B2Bコンサルティング')
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
      (c: any) => c.name === 'Backend & Runtime' || c.name === 'バックエンド & ランタイム'
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
})
