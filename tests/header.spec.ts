import { test, expect } from '@playwright/test'

test('header section title', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await expect(page.locator('[id="header-title"]')).toHaveText('Fin-Health-Demo:')
})
