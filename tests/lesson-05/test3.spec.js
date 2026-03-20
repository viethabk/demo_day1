import { test, expect } from '@playwright/test';

test('Question 1', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await expect(page.locator("//h1[text() = 'Tài liệu học automation test']")).toBeVisible();
    await page.locator("//table//tbody//td//a[contains(normalize-space(), 'Todo page')]").click();
    await expect(page.locator("//h1[text() = 'To-Do List']")).toBeVisible();

    for (let i = 1; i <= 100; i++) {
        await page.locator("//input[@id='new-task']").click();
        await page.locator("//input[@id='new-task']").fill('To do ' + i);
        await page.locator("//button[@id='add-task']").click();
    }


});