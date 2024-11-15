import {test, expect} from '@playwright/test'
//const {test, expect} = require ('@playwright/test') 

test("Exericse2", async ({page})=>  

{
   let formPage : string | null
   let formPage = await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    //await page.goto("https://rahulshettyacademy.com/loginpagePractise/");  
   console.log ( await page.title ()); 
   formPage.title(); 

   //formfillup 

   await page.locator('#username').fill("rahulshetty"); 
   await page.locator('[type="password"]').fill("learning");   
   await page.locator('[type="submit"]').click(); 



}
); 

