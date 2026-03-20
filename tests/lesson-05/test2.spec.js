import { test, expect } from '@playwright/test';

test('Question 1', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await expect(page.locator("//h1[text() = 'Tài liệu học automation test']")).toBeVisible();
    await page.locator("//table//tbody//td//a[contains(normalize-space(), 'Product page')]").click();
    await expect(page.locator("//h1[text() = 'Simple E-commerce']")).toBeVisible();

    await page.locator("//button[@data-product-id='1']").click({ clickCount: 2 });
    await page.locator("//button[@data-product-id='2']").click({ clickCount: 3 });
    await page.locator("//button[@data-product-id='3']").click({ clickCount: 1 });

});