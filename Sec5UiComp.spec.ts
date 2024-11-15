import { test, expect, type Page } from '@playwright/test'; 
import { text } from 'stream/consumers';

 
test('HandlingUIcomp', async ({page}) => 
    { 
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
      const userName = page.locator('#username'); 
      const signIn = page.locator('[type="submit"]');  
      const dropdown = page.locator('select.form-control'); 
      const blinkingTest = page.locator('[href*="documents-request"]'); 
      let text : string; 

      await dropdown.selectOption("consult"); 

      await page.locator(".radiotextsty").last().click();
      await page.locator("#okayBtn").click(); 
      console.log(await page.locator(".radiotextsty").last().isChecked()); 
      await expect (page.locator(".radiotextsty").last()).toBeChecked();  

       await page.locator("#terms").click(); 
       await expect(page.locator("#terms")).toBeChecked(); 
       await page.locator("#terms").uncheck(); 
       expect (await page.locator("#terms").isChecked()).toBeFalsy();   

       await expect(blinkingTest).toHaveAttribute('class', 'blinkingText'); 
      
      await page.pause(); 

    });


    test.only('WindowHand' , async({browser}) => {  
	  
      const context = await browser.newContext();
      const page = await context.newPage(); 		  
      let text : string | null; 
      //let valuetext : string
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
      const blinkingTest = page.locator("[href*='documents-request']"); 

      //below steps should execute in parallel so use a method promise.all()
      const [newPage] = await Promise.all( 
      [
      context.waitForEvent('page'),       //to open in new tab (listen for new page)
      blinkingTest.click(),
     ]) //but this already opens a new page so, 
      
      
       text = await newPage.locator(".red").textContent();
       console.log(text);
       let splitValues = (text as string).split('@');
      const email = splitValues[1].split(" ")[0];
       console.log(email); // Log the array after splitting

      const emailId = await page.locator('#username').fill(email); 
      page.pause();
      

      // if (text) {
      //   const arrayText = text.split('@');
      //   const email = arrayText[1].split(" ")[0];
      //   console.log(email); // Log the array after splitting
      //   await page.locator('#username').fill(email); 
      //   console.log(await page.locator('#username')).textContent(); 
        
      // } else {
      //   console.log("No text found in the specified element.");

      // } 

      
     //page.pause();
    
 });