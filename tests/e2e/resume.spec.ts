import { test, expect } from '@playwright/test'
import { readFileSync, unlinkSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

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
    // "Work Experience" and "Work Experience (Continued)" both exist — scope to the heading.
    await expect(
      page.getByRole('heading', { name: 'Work Experience', exact: true })
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Work Experience (Continued)' })
    ).toBeVisible()
    await expect(page.getByText('Skills').first()).toBeVisible()
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

test.describe('Resume Page — US Senior Market Positioning', () => {
  test('header advertises remote LATAM availability instead of a Brazilian city', async ({ page, context }) => {
    await setLocaleCookie(context, 'en')
    await page.goto('/resume')
    await page.waitForLoadState('networkidle')

    await expect(page.getByText(/Remote \(LATAM \/ UTC-3/)).toBeVisible()
    await expect(page.getByText('Urubici, SC, Brazil')).toHaveCount(0)
  })

  test('keeps email, linkedin, github and the clean portfolio link', async ({ page, context }) => {
    await setLocaleCookie(context, 'en')
    await page.goto('/resume')
    await page.waitForLoadState('networkidle')

    await expect(page.getByRole('link', { name: /kakamorsch@gmail\.com/ })).toBeVisible()
    await expect(page.getByRole('link', { name: 'linkedin.com/in/kakamorsch' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'github.com/kakamorsch' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'kakamorsch.github.io' })).toBeVisible()
  })

  test('no longer lists the removed support/helpdesk employers', async ({ page, context }) => {
    await setLocaleCookie(context, 'en')
    await page.goto('/resume')
    await page.waitForLoadState('networkidle')

    await expect(page.getByText('Altech Informática')).toHaveCount(0)
    await expect(page.getByText('Promotional Travel')).toHaveCount(0)
    await expect(page.getByText('Support Analyst')).toHaveCount(0)
  })

  test('no longer renders a certifications section', async ({ page, context }) => {
    await setLocaleCookie(context, 'en')
    await page.goto('/resume')
    await page.waitForLoadState('networkidle')

    await expect(page.getByText('Certifications')).toHaveCount(0)
    await expect(page.getByText(/Alura/)).toHaveCount(0)
  })

  test('resolves the overemployment conflict: DOT is current, Kaze is a closed contract', async ({ page, context }) => {
    await setLocaleCookie(context, 'en')
    await page.goto('/resume')
    await page.waitForLoadState('networkidle')

    const dot = page.locator('[data-testid="resume-exp-dot-digital"]')
    await expect(dot).toBeVisible()
    await expect(dot.getByText('June 2025 - Present')).toBeVisible()

    const kaze = page.locator('[data-testid="resume-exp-kaze"]')
    await expect(kaze).toBeVisible()
    await expect(kaze.getByText('August 2024 - May 2025')).toBeVisible()
    await expect(kaze.getByText(/Founder/i)).toHaveCount(0)
  })

  test('renders the Associate of Science degree', async ({ page, context }) => {
    await setLocaleCookie(context, 'en')
    await page.goto('/resume')
    await page.waitForLoadState('networkidle')

    await expect(
      page.getByText('Associate of Science (A.S.) in Systems Analysis and Software Development')
    ).toBeVisible()
    await expect(page.getByText(/Higher Education Technology Course/)).toHaveCount(0)
  })

  test('renders impact metrics and the elevated e-commerce bullets', async ({ page, context }) => {
    await setLocaleCookie(context, 'en')
    await page.goto('/resume')
    await page.waitForLoadState('networkidle')

    const impact = page.locator('[data-testid="impact-highlights"]')
    await expect(impact).toBeVisible()
    await expect(impact.getByText('+$10M')).toBeVisible()

    await expect(
      page.getByText(/optimizing Core Web Vitals and reducing checkout bounce rates/)
    ).toBeVisible()
    await expect(
      page.getByText(/Engineered custom enterprise storefront extensions and checkout integrations/)
    ).toBeVisible()
  })
})

test.describe('Resume Page — 2 Page Print Contract', () => {
  test('exposes two explicit page blocks with a hard break between them', async ({ page, context }) => {
    await setLocaleCookie(context, 'en')
    await page.goto('/resume')
    await page.waitForLoadState('networkidle')

    await expect(page.locator('[data-testid="resume-page-1"]')).toBeVisible()
    await expect(page.locator('[data-testid="resume-page-2"]')).toBeVisible()

    const breakStyle = await page
      .locator('[data-testid="resume-page-2"]')
      .evaluate((el) => getComputedStyle(el).breakBefore)
    expect(['page', 'always']).toContain(breakStyle)
  })

  test('keeps every experience block from breaking across pages', async ({ page, context }) => {
    await setLocaleCookie(context, 'en')
    await page.goto('/resume')
    await page.waitForLoadState('networkidle')

    const blocks = page.locator('.experience-block')
    const count = await blocks.count()
    expect(count).toBe(6)

    for (let i = 0; i < count; i++) {
      const breakInside = await blocks.nth(i).evaluate((el) => getComputedStyle(el).breakInside)
      expect(['avoid', 'avoid-page']).toContain(breakInside)
    }
  })

  test('prints to exactly 2 pages', async ({ page, context }) => {
    await setLocaleCookie(context, 'en')
    await page.goto('/resume')
    await page.waitForLoadState('networkidle')

    const pdfPath = join(tmpdir(), `resume-${Date.now()}.pdf`)
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '12mm', bottom: '12mm', left: '15mm', right: '15mm' },
    })

    const buffer = readFileSync(pdfPath)
    const raw = buffer.toString('latin1')

    // Count "/Type /Page" objects, excluding "/Pages" (the page tree node).
    const pageMatches = raw.match(/\/Type\s*\/Page[^s]/g) ?? []
    expect(pageMatches.length).toBe(2)

    unlinkSync(pdfPath)
  })
})
