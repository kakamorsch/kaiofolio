import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProjectDiscoveryForm from '~/components/ProjectDiscoveryForm.vue'

vi.stubGlobal('$fetch', vi.fn())

describe('ProjectDiscoveryForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the form in idle state by default', async () => {
    const wrapper = await mountSuspended(ProjectDiscoveryForm)

    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.find('input#client_name').exists()).toBe(true)
    expect(wrapper.find('input#client_contact').exists()).toBe(true)
    expect(wrapper.find('textarea#project_idea').exists()).toBe(true)
    expect(wrapper.find('select#estimated_budget').exists()).toBe(true)
    expect(wrapper.find('input#tech_preference').exists()).toBe(true)
    expect(wrapper.find('[data-testid="submit-button"]').exists()).toBe(true)
  })

  it('shows required field errors when submitting empty form', async () => {
    const wrapper = await mountSuspended(ProjectDiscoveryForm)

    await wrapper.find('form').trigger('submit.prevent')
    await wrapper.vm.$nextTick()

    const errors = wrapper.findAll('.text-red-400')
    expect(errors.length).toBeGreaterThanOrEqual(3)
  })

  it('has submit button enabled in idle state', async () => {
    const wrapper = await mountSuspended(ProjectDiscoveryForm)
    const btn = wrapper.find('[data-testid="submit-button"]')
    expect(btn.attributes('disabled')).toBeUndefined()
  })

  it('displays success state after successful submission', async () => {
    const wrapper = await mountSuspended(ProjectDiscoveryForm)

    wrapper.vm.formState = 'success'
    await wrapper.vm.$nextTick()

    expect(wrapper.find('form').exists()).toBe(false)
    expect(wrapper.find('[data-testid="success-state"]').exists()).toBe(true)
  })

  it('displays error state after failed submission', async () => {
    const wrapper = await mountSuspended(ProjectDiscoveryForm)

    wrapper.vm.formState = 'error'
    await wrapper.vm.$nextTick()

    expect(wrapper.find('form').exists()).toBe(false)
    expect(wrapper.find('[data-testid="error-state"]').exists()).toBe(true)
  })

  it('resets form to idle when clicking reset from success state', async () => {
    const wrapper = await mountSuspended(ProjectDiscoveryForm)

    wrapper.vm.formState = 'success'
    await wrapper.vm.$nextTick()

    const resetBtn = wrapper.find('button[type="button"]')
    expect(resetBtn.exists()).toBe(true)

    await resetBtn.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.formState).toBe('idle')
    expect(wrapper.vm.form.client_name).toBe('')
    expect(wrapper.vm.form.client_contact).toBe('')
    expect(wrapper.vm.form.project_idea).toBe('')
  })
})
