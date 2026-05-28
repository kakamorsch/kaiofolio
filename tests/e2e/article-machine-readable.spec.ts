import { test, expect } from '@playwright/test'

test.describe('Article — Machine-Readable Engineer', () => {
  test('deve carregar o artigo em português', async ({ page }) => {
    await page.goto('/articles/machine-readable-engineer')
    await page.waitForLoadState('networkidle')

    const bodyText = await page.locator('body').textContent()
    expect(bodyText).toContain('O Engenheiro Legível por Máquinas')
    expect(bodyText).toContain('JSON-LD')
    expect(bodyText).toContain('robots.txt')
  })

  test('deve carregar o artigo em inglês', async ({ page, context }) => {
    await context.clearCookies()
    await context.addCookies([
      {
        name: 'i18n_locale',
        value: 'en',
        domain: 'localhost',
        path: '/',
      },
    ])
    await page.goto('/articles/machine-readable-engineer')
    await page.waitForLoadState('networkidle')

    const bodyText = await page.locator('body').textContent()
    expect(bodyText).toContain('The Machine-Readable Engineer')
    expect(bodyText).toContain('JSON-LD')
    expect(bodyText).toContain('robots.txt')
  })

  test('deve navegar de volta para o portfólio', async ({ page }) => {
    await page.goto('/articles/machine-readable-engineer')
    await page.waitForLoadState('networkidle')

    const backLink = page.locator('section a[href="/"]').last()
    await expect(backLink).toBeVisible()

    await backLink.click()
    await page.waitForLoadState('networkidle')

    await expect(page).toHaveURL('/')
  })
})
