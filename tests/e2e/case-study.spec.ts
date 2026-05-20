import { test, expect } from '@playwright/test'

test.describe('Case Study — Large-Scale Vue Migration', () => {
  test('deve carregar a página do case study em português', async ({ page }) => {
    await page.goto('/case-studies/vue-large-scale-migration')
    await page.waitForLoadState('networkidle')

    await expect(page.getByText('Migração de Larga Escala: Vue 2.7 → Vue 3')).toBeVisible()
    await expect(page.getByText('Desafio de Negócio')).toBeVisible()
    await expect(page.getByText('Estratégia de Arquitetura')).toBeVisible()
    await expect(page.getByText('Execução')).toBeVisible()
    await expect(page.getByText('Resultados')).toBeVisible()
    await expect(page.getByText('Lições Aprendidas')).toBeVisible()
  })

  test('deve carregar a página do case study em inglês', async ({ page, context }) => {
    await context.clearCookies()
    await context.addCookies([
      {
        name: 'i18n_locale',
        value: 'en',
        domain: 'localhost',
        path: '/',
      },
    ])
    await page.goto('/case-studies/vue-large-scale-migration')
    await page.waitForLoadState('networkidle')

    await expect(page.getByText('Large-Scale Migration: Vue 2.7 → Vue 3')).toBeVisible()
    await expect(page.getByText('Business Challenge')).toBeVisible()
    await expect(page.getByText('Architecture Strategy')).toBeVisible()
    await expect(page.getByText('Execution')).toBeVisible()
    await expect(page.getByText('Results')).toBeVisible()
    await expect(page.getByText('Lessons Learned')).toBeVisible()
  })

  test('deve navegar do portfólio para o case study via link destacado', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const caseStudyLink = page.getByRole('link', { name: /ver case study|view case study|ケーススタディを見る/i })
    await expect(caseStudyLink).toBeVisible()

    await caseStudyLink.click()
    await page.waitForLoadState('networkidle')

    await expect(page).toHaveURL(/\/case-studies\/vue-large-scale-migration/)
  })

  test('deve exibir milestones e métricas na página do case', async ({ page }) => {
    await page.goto('/case-studies/vue-large-scale-migration')
    await page.waitForLoadState('networkidle')

    const bodyText = await page.locator('body').textContent()
    expect(bodyText).toContain('Vite + TS + Compat')
    expect(bodyText).toContain('-40%')
    expect(bodyText).toContain('3x')
    expect(bodyText).toContain('95%')
  })
})
