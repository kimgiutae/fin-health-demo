import { test, expect } from '@playwright/test'

test('page main sections visible', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await expect(page.locator('[id="header"]')).toBeVisible()
  await expect(page.locator('[id="sidebar"]')).toBeVisible()
  await expect(page.locator('[id="content"]')).toBeVisible()

  await expect(page.locator('[id="summary"]')).toBeVisible()
  await expect(page.locator('[id="chart"]')).toBeVisible()
  await expect(page.locator('[id="tabs"]')).toBeVisible()
})
