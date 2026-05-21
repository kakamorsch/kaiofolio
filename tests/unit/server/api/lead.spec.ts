import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createEvent } from 'h3'

vi.mock('h3', async (importOriginal) => {
  const actual = await importOriginal<typeof import('h3')>()
  return {
    ...actual,
    readBody: vi.fn(),
    createError: actual.createError,
  }
})

vi.stubGlobal('useRuntimeConfig', vi.fn(() => ({
  n8nWebhookUrl: 'https://n8n.cloud/webhook/test',
  n8nPortfolioToken: 'test-token-123',
})))

vi.stubGlobal('$fetch', vi.fn())

describe('POST /api/lead', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.stubEnv('N8N_WEBHOOK_URL', 'https://n8n.cloud/webhook/test')
    vi.stubEnv('N8N_PORTFOLIO_TOKEN', 'test-token-123')
  })

  it('returns 400 when client_name is missing', async () => {
    const { readBody } = await import('h3')
    vi.mocked(readBody).mockResolvedValue({ client_contact: '+55 21 99999-9999', project_idea: 'Some idea' })

    const { default: leadHandler } = await import('~/server/api/lead')
    const event = createEvent({ method: 'POST', url: '/api/lead' })

    await expect(leadHandler(event)).rejects.toMatchObject({
      statusCode: 400,
      statusMessage: 'Missing required field: client_name',
    })
  })

  it('returns 400 when client_contact is missing', async () => {
    const { readBody } = await import('h3')
    vi.mocked(readBody).mockResolvedValue({ client_name: 'John', project_idea: 'Some idea' })

    const { default: leadHandler } = await import('~/server/api/lead')
    const event = createEvent({ method: 'POST', url: '/api/lead' })

    await expect(leadHandler(event)).rejects.toMatchObject({
      statusCode: 400,
      statusMessage: 'Missing required field: client_contact',
    })
  })

  it('returns 400 when project_idea is missing', async () => {
    const { readBody } = await import('h3')
    vi.mocked(readBody).mockResolvedValue({ client_name: 'John', client_contact: 'john@example.com' })

    const { default: leadHandler } = await import('~/server/api/lead')
    const event = createEvent({ method: 'POST', url: '/api/lead' })

    await expect(leadHandler(event)).rejects.toMatchObject({
      statusCode: 400,
      statusMessage: 'Missing required field: project_idea',
    })
  })

  it('returns 400 when client_name is empty string', async () => {
    const { readBody } = await import('h3')
    vi.mocked(readBody).mockResolvedValue({ client_name: '   ', client_contact: 'john@example.com', project_idea: 'Idea' })

    const { default: leadHandler } = await import('~/server/api/lead')
    const event = createEvent({ method: 'POST', url: '/api/lead' })

    await expect(leadHandler(event)).rejects.toMatchObject({
      statusCode: 400,
      statusMessage: 'Missing required field: client_name',
    })
  })

  it('returns success when payload is valid and upstream succeeds', async () => {
    const { readBody } = await import('h3')
    const payload = {
      client_name: 'Alice',
      client_contact: 'alice@example.com',
      project_idea: 'Build a platform',
      estimated_budget: 'large',
      tech_preference: 'Vue 3',
    }
    vi.mocked(readBody).mockResolvedValue(payload)

    const $fetchMock = vi.fn().mockResolvedValue({ ok: true })
    vi.stubGlobal('$fetch', $fetchMock)

    const { default: leadHandler } = await import('~/server/api/lead')
    const event = createEvent({ method: 'POST', url: '/api/lead' })
    const result = await leadHandler(event)

    expect(result).toEqual({ success: true, message: 'Lead transmitted successfully' })
    expect($fetchMock).toHaveBeenCalledWith(
      'https://n8n.cloud/webhook/test',
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({
          'Content-Type': 'application/json',
          'portfolio-token': 'test-token-123',
        }),
        body: expect.objectContaining({
          client_name: 'Alice',
          client_contact: 'alice@example.com',
          project_idea: 'Build a platform',
        }),
      })
    )
  })
})
