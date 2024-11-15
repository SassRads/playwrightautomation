import { test, expect, type Page } from '@playwright/test';

test("Popupvalidatiions", async({page}) => { 

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/"); 
    // await page.goto("https://www.google.com/"); 
    // await page.goBack(); 
    // await page.goForward(); 

    await expect(page.locator("#displayed-text")).toBeVisible(); 
    await page.locator("#hide-textbox").click(); 
    await expect(page.locator("#displayed-text")).toBeHidden();  

    page.on('dialog', dialog => dialog.accept()); 
    await page.locator("#confirmbtn").click(); 
    
    await page.locator("#mousehover").hover();  

    const frames = await page.frameLocator("#courses-iframe"); 
    await page.pause();
    await frames.locator("li a[href*='lifetime-access']:visible").click(); 
    const subs = await frames.locator(".text h2").textContent();
    console.log(subs?.split(" ")[1]);  





})
