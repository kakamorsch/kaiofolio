import { test, expect } from '@playwright/test'

async function setLocaleCookie(context: any, locale: string) {
  await context.clearCookies()
  await context.addCookies([
    {
      name: 'i18n_locale',
      value: locale,
      domain: 'localhost',
      path: '/',
    },
  ])
}

test.describe('Jornada Crítica — Portfólio Kaiofolio', () => {
  test('deve carregar em português por padrão', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await expect(page.getByText('Online // Disponível para contratação')).toBeVisible()
    await expect(page.getByText('Sistemas Distribuídos & Tecnologia Financeira')).toBeVisible()
    await expect(page.getByRole('link', { name: 'Iniciar Contato' })).toBeVisible()
    await expect(page.getByText('Trajetória Profissional')).toBeVisible()
    await expect(page.getByText('ACESSANDO HISTÓRICO')).toBeVisible()
    await expect(page.getByText('Pagar.me').first()).toBeVisible()
    await expect(page.getByText('Software Engineer III').first()).toBeVisible()
  })

  test('deve alternar idioma para inglês e atualizar todo o conteúdo', async ({ page, context }) => {
    await setLocaleCookie(context, 'en')
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await expect(page.getByText('Online // Available for hire')).toBeVisible()
    await expect(page.getByText('Distributed Systems & Financial Tech')).toBeVisible()
    await expect(page.getByRole('link', { name: 'Initiate Contact' })).toBeVisible()
    await expect(page.getByText('Professional Trajectory')).toBeVisible()
    await expect(page.getByText('ACCESSING HISTORY')).toBeVisible()
    await expect(page.getByText('Pagar.me').first()).toBeVisible()
    await expect(page.getByText('Software Engineer III').first()).toBeVisible()
  })

  test('deve alternar entre PT e EN mantendo consistência', async ({ page, context }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await expect(page.getByText('Online // Disponível para contratação')).toBeVisible()
    await expect(page.getByText('Trajetória Profissional')).toBeVisible()

    await setLocaleCookie(context, 'en')
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await expect(page.getByText('Online // Available for hire')).toBeVisible()
    await expect(page.getByText('Professional Trajectory')).toBeVisible()

    await setLocaleCookie(context, 'pt')
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await expect(page.getByText('Online // Disponível para contratação')).toBeVisible()
    await expect(page.getByText('Trajetória Profissional')).toBeVisible()
  })

  test('deve expandir uma experiência e exibir detalhes em português', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await page.locator('#experiencias').scrollIntoViewIfNeeded()

    const pagarmeCard = page.locator('[data-testid="experience-card-pagarme"]')
    await expect(pagarmeCard).toBeVisible()
    await pagarmeCard.click()
    await page.waitForTimeout(500)

    // Verifica dentro do card específico
    await expect(pagarmeCard.getByText('Objetivos Completados')).toBeVisible()
    await expect(pagarmeCard.getByText('Arsenal Tecnológico')).toBeVisible()
    await expect(pagarmeCard.getByText('Implementei features core contribuindo para aumento de 45% na receita')).toBeVisible()
    await expect(pagarmeCard.getByText('Reduzi erros de processamento de transações em 20%')).toBeVisible()
  })

  test('deve expandir uma experiência e exibir detalhes em inglês', async ({ page, context }) => {
    await setLocaleCookie(context, 'en')
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await page.locator('#experiencias').scrollIntoViewIfNeeded()

    const pagarmeCard = page.locator('[data-testid="experience-card-pagarme"]')
    await expect(pagarmeCard).toBeVisible()
    await pagarmeCard.click()
    await page.waitForTimeout(500)

    await expect(pagarmeCard.getByText('Completed Objectives')).toBeVisible()
    await expect(pagarmeCard.getByText('Tech Arsenal')).toBeVisible()
    await expect(pagarmeCard.getByText('Implemented core features contributing to 45% increase in revenue')).toBeVisible()
    await expect(pagarmeCard.getByText('Reduced transaction processing errors by 20%')).toBeVisible()
  })

  test('deve filtrar experiências por tecnologia e mostrar resultados corretos', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Clica na tag "Go" no HeroSection
    const goTag = page.locator('button', { hasText: 'Go' }).first()
    await goTag.click()
    await page.waitForTimeout(800)

    await page.locator('#experiencias').scrollIntoViewIfNeeded()

    // Verifica filtro ativo dentro da seção de experiências
    const experienceSection = page.locator('#experiencias')
    await expect(experienceSection.getByText(/filtro ativo.*go/i)).toBeVisible()

    // Verifica cards visíveis
    await expect(page.locator('[data-testid="experience-card-pagarme"]')).toBeVisible()
    await expect(page.locator('[data-testid="experience-card-kaze"]')).toBeVisible()
    await expect(page.locator('[data-testid="experience-card-fabrica"]')).toBeVisible()
    await expect(page.locator('[data-testid="experience-card-acct"]')).not.toBeVisible()
  })

  test('deve limpar filtro e restaurar todas as experiências', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const vueTag = page.locator('button', { hasText: 'Vue/Nuxt' }).first()
    await vueTag.click()
    await page.waitForTimeout(800)

    await page.locator('#experiencias').scrollIntoViewIfNeeded()

    const experienceSection = page.locator('#experiencias')
    await expect(experienceSection.getByText(/filtro ativo.*vue\/nuxt/i)).toBeVisible()

    const clearButton = page.locator('button', { hasText: '×' })
    await clearButton.click()
    await page.waitForTimeout(500)

    await expect(experienceSection.getByText('Filtro ativo:')).not.toBeVisible()
    await expect(page.locator('[data-testid="experience-card-dot-digital"]')).toBeVisible()
    await expect(page.locator('[data-testid="experience-card-altech"]')).toBeVisible()
  })
})
