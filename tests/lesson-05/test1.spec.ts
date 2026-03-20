import { test, expect } from '@playwright/test';

test('Question 1', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await expect(page.locator("//h1[text() = 'Tài liệu học automation test']")).toBeVisible();
    await page.locator("//table//tbody//td//a[contains(normalize-space(), 'Register Page')]").click();
    await expect(page.locator("//h1[text() = 'User Registration']")).toBeVisible();

    await page.locator("//input[@id = 'username']").click();

    //Fill user name:
    await page.locator("//input[@id = 'username']").click();
    await page.locator("//input[@id = 'username']").fill('Viet Ha');

    //Fill email:
    await page.locator("//input[@id = 'email']").click();
    await page.locator("//input[@id = 'email']").fill('chloeee8420@gmail.com');

    //Fill gender:
    await page.locator("//input[@type = 'radio' and @value = 'female']").click();

    //Fill hobbies:
    await page.locator("//input[@type = 'checkbox' and @value = 'traveling']").check();

    //Fill interests: 
    await page.locator("//select[@id = 'interests']//option[@value = 'technology']").click();

    //Fill country:
    await page.locator("//select[@id = 'country']").click();
    await page.locator("//select[@id = 'country']").selectOption({ value: "usa" });

    //Fill DOB:
    await page.locator("//input[@id = 'dob']").click();
    await page.locator("//input[@id = 'dob']").fill('2000-04-08');

    // Upload file
    await page.locator("//input[@id = 'profile']").click();
    await page.locator("//input[@id = 'profile']").setInputFiles("/Users/chloe/Downloads/lesson5.pdf");
    await page.locator("//input[@id = 'profile']").click();

    //Fill bio:
    await page.locator("//textarea[@id = 'bio']").click();
    await page.locator("//textarea[@id = 'bio']").fill('this is the end of task 1');

    //Submit
    await page.locator("//button[text() ='Register']").click();

});

