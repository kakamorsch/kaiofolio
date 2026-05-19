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

test.describe('Resume Page — ATS-Friendly Clean Version', () => {
  test('hero has a link to standard resume', async ({ page, context }) => {
    await setLocaleCookie(context, 'en')
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const resumeLink = page.getByRole('link', { name: /resume|currículo|履歴書/i })
    await expect(resumeLink).toBeVisible()
    await expect(resumeLink).toHaveAttribute('href', '/resume')
  })

  test('resume page loads with clean ats-friendly content', async ({ page, context }) => {
    await setLocaleCookie(context, 'en')
    await page.goto('/resume')
    await page.waitForLoadState('networkidle')

    await expect(page.getByText('KAIO MORSCH')).toBeVisible()
    await expect(page.getByText('Senior Software Engineer').first()).toBeVisible()
    await expect(page.getByText('Distributed Systems').first()).toBeVisible()
    await expect(page.getByText('Work Experience')).toBeVisible()
    await expect(page.getByText('Skills')).toBeVisible()
    await expect(page.getByText('Education').first()).toBeVisible()
  })

  test('resume page has print button', async ({ page, context }) => {
    await setLocaleCookie(context, 'en')
    await page.goto('/resume')
    await page.waitForLoadState('networkidle')

    const printButton = page.getByRole('button', { name: /print|save as pdf|salvar como pdf|pdfとして保存/i })
    await expect(printButton).toBeVisible()
  })
})
