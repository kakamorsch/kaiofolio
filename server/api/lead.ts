import { defineEventHandler, readBody, createError } from 'h3'

interface LeadPayload {
  client_name?: string
  client_contact?: string
  project_idea?: string
  estimated_budget?: string
  tech_preference?: string
}

interface LeadResponse {
  success: boolean
  message: string
}

export default defineEventHandler(async (event): Promise<LeadResponse> => {
  const config = useRuntimeConfig(event)
  const webhookUrl = (config.n8nWebhookUrl || process.env.N8N_WEBHOOK_URL) as string | undefined
  const portfolioToken = (config.n8nPortfolioToken || process.env.N8N_PORTFOLIO_TOKEN) as string | undefined

  const body = await readBody<LeadPayload>(event)

  if (!body?.client_name || typeof body.client_name !== 'string' || body.client_name.trim().length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required field: client_name',
    })
  }

  if (!body?.client_contact || typeof body.client_contact !== 'string' || body.client_contact.trim().length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required field: client_contact',
    })
  }

  if (!body?.project_idea || typeof body.project_idea !== 'string' || body.project_idea.trim().length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required field: project_idea',
    })
  }

  if (!webhookUrl) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Webhook URL is not configured',
    })
  }

  if (!portfolioToken) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Portfolio token is not configured',
    })
  }

  const payload = {
    client_name: body.client_name.trim(),
    client_contact: body.client_contact.trim(),
    project_idea: body.project_idea.trim(),
    estimated_budget: body.estimated_budget?.trim() || null,
    tech_preference: body.tech_preference?.trim() || null,
    submitted_at: new Date().toISOString(),
  }

  try {
    await $fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'portfolio-token': portfolioToken,
      },
      body: payload,
    })

    return {
      success: true,
      message: 'Lead transmitted successfully',
    }
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error during transmission'

    throw createError({
      statusCode: 502,
      statusMessage: `Upstream transmission failed: ${errorMessage}`,
    })
  }
})
