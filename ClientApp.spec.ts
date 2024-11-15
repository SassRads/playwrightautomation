//import { expect } from "@playwright/test";

//const {test, expect} = require('@playwright/test'); 

import { test, expect, type Page } from '@playwright/test';

test('First Automation', async ({page}) => 
{ 
        //js file- Login js, DashboardPage
        const email = "anshika@gmail.com";
        const productName = 'zara coat 3';
        const products = page.locator(".card-body");
        await page.goto("https://rahulshettyacademy.com/client");
        await page.locator("#userEmail").fill(email);
        await page.locator("#userPassword").fill("Iamking@000");
        await page.locator("[value='Login']").click();
        await page.waitForLoadState('networkidle');
        await page.locator(".card-body b").first().waitFor();
        const titles = await page.locator(".card-body b").allTextContents();
        console.log(titles); 
        await page.pause(); 
 
}); 