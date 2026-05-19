import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import MetricHighlight from '~/components/MetricHighlight.vue'

describe('MetricHighlight', () => {
  it('renders plain text without metrics as-is', async () => {
    const wrapper = await mountSuspended(MetricHighlight, {
      props: { text: 'Designed modern CI/CD workflows' },
    })
    expect(wrapper.text()).toBe('Designed modern CI/CD workflows')
    expect(wrapper.find('[data-testid="metric-badge"]').exists()).toBe(false)
  })

  it('highlights percentage values', async () => {
    const wrapper = await mountSuspended(MetricHighlight, {
      props: { text: 'Optimized system performance by 90%' },
    })
    const metric = wrapper.find('[data-testid="metric-badge"]')
    expect(metric.exists()).toBe(true)
    expect(metric.text()).toBe('90%')
    expect(wrapper.text()).toContain('Optimized system performance by')
  })

  it('highlights values with operators like + and -', async () => {
    const wrapper = await mountSuspended(MetricHighlight, {
      props: { text: 'Revenue growth of +45% YoY' },
    })
    const metric = wrapper.find('[data-testid="metric-badge"]')
    expect(metric.exists()).toBe(true)
    expect(metric.text()).toBe('+45%')
  })

  it('highlights latency values with units', async () => {
    const wrapper = await mountSuspended(MetricHighlight, {
      props: { text: 'Latency under < 200ms' },
    })
    const metric = wrapper.find('[data-testid="metric-badge"]')
    expect(metric.exists()).toBe(true)
    expect(metric.text()).toBe('< 200ms')
  })

  it('highlights uptime percentages', async () => {
    const wrapper = await mountSuspended(MetricHighlight, {
      props: { text: 'Ensuring 99.9% uptime' },
    })
    const metric = wrapper.find('[data-testid="metric-badge"]')
    expect(metric.exists()).toBe(true)
    expect(metric.text()).toBe('99.9%')
  })

  it('highlights throughput numbers with units', async () => {
    const wrapper = await mountSuspended(MetricHighlight, {
      props: { text: 'Processing 1,000+ orders/hour' },
    })
    const metric = wrapper.find('[data-testid="metric-badge"]')
    expect(metric.exists()).toBe(true)
    expect(metric.text()).toBe('1,000+ orders/hour')
  })

  it('highlights multiple metrics in a single text', async () => {
    const wrapper = await mountSuspended(MetricHighlight, {
      props: { text: 'From 12% to < 1% error rate' },
    })
    const metrics = wrapper.findAll('[data-testid="metric-badge"]')
    expect(metrics.length).toBe(2)
    expect(metrics[0].text()).toBe('12%')
    expect(metrics[1].text()).toBe('< 1%')
  })
})
