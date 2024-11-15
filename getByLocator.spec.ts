import { test, expect, type Page } from '@playwright/test';

test('Playwright getByRole Locators', async({page}) =>
{
  await page.goto("https://rahulshettyacademy.com/angularpractice/");  

  await page.getByLabel("Check me out if you Love IceCreams!").click();
  await page.getByLabel("Employed").check();  
  await page.getByLabel("Gender").selectOption("Female"); 
  await page.getByPlaceholder("password").fill("abc123");
  await page.getByRole("button", {name :"Submit"}).click(); 
  await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
  await page.getByRole("link", {name : "Shop"}).click(); 
  await page.locator("app-card").filter({hasText:"Nokia Edge"}).getByRole("button").click(); 
  await page.pause();
  

})