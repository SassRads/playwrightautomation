//import { expect } from "@playwright/test";

const {test, expect} = require('@playwright/test'); 


test('First Automation', async ({page}) => 
{ 
  const userName = page.locator('#username'); 
  const signIn = page.locator('[type="submit"]');  

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); 

  console.log (await page.title()); 
   
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy"); 

  await userName.fill("rahulshetty"); 
  await page.locator('[type="password"]').fill("learning");   
  await signIn.click();  
  
   //extract text for wrong pw 
  
   console.log(await page.locator("[style*='block']").textContent());  
  await expect(page.locator("[style*='block']")).toContainText('Incorrect');   

  await userName.fill(""); 
  await userName.fill("rahulshettyacademy"); 
  await signIn.click();  
 
  console.log (await page.locator(".card-body a").nth(1).textContent()); 
  console.log (await page.locator(".card-body a").first().textContent()); 







  
   

  

}); 