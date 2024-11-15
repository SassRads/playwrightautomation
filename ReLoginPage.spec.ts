import { test, expect, chromium } from '@playwright/test';

test.describe('WordPress Login and Post Creation', () => {
    let browser: any;
    let context: any;  

    test('should log in to WordPress dashboard successfully', async ({page}) => {
        const url = 'https://admin:7gc7d4saxzvYNJR6ex1WLe@origin-staging-2-www.usatoday.com/money/blueprint/wp-login.php';
        const username = 'pavithra'; 
        const password = 't>xJSLv8[?32';  

        let addTitle = "USAT Automation [month] [year]"; 

        await page.goto(url);  
        await page.locator("//input[@id='user_login']").fill(username); 
        await page.locator("//input[@id='user_pass']").fill(password);  

        await page.locator("//input[@id='wp-submit']").click(); 

        await page.locator("//div[normalize-space()='Posts']").hover(); 
        await page.locator("//a[normalize-space()='All Posts']").click();   

        await page.locator("//a[@class='page-title-action']").waitFor();
        await page.locator("//a[@class='page-title-action']").click();  

        await page.locator("//h1[@aria-label='Add title']").waitFor();

        await page.locator("//h1[@aria-label='Add title']").fill(addTitle); 
        await page.locator("button[aria-label='Select template: Default template']").click();   

        await page.locator("div[class*='components-select-control']").click();  
        await page.locator(".components-select-control__input").selectOption('Generic Review Template'); 

        page.on('dialog', dialog => dialog.accept());  

        
        await page.locator("//button[@id=':r0:']");
        await page.locator("//button[@id='id-fl8u5a-2']").click(); 







        await page.pause(); 

    })



})