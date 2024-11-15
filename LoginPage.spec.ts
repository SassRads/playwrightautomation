import { test, expect, chromium } from '@playwright/test';
test.describe('WordPress Login and Post Creation', () => {
  let browser: any;
  let context: any;

//   test.beforeAll(async () => {
    // browser = await chromium.launch({ headless: false }); // Set headless to false for debugging
    // context = await browser.newContext({
     // httpCredentials: {
        // username: 'admin',
        // password: '7gc7d4saxzvYNJR6ex1WLe'
      //} 
    // });
    // page = await context.newPage();
//   });
//   test.afterAll(async () => {
    // await context.close();
    // await browser.close();
//   });
  test('should log in to WordPress dashboard successfully', async ({page}) => {
    const url = 'https://admin:7gc7d4saxzvYNJR6ex1WLe@origin-staging-2-www.usatoday.com/money/blueprint/wp-login.php';
    const username = 'pavithra';
    const password = '1CshbT85g[Ev';
    await page.goto(url);
    // Fill in login credentials
    await page.fill("xpath=//input[@id='user_login']", username);
    await page.fill("xpath=//input[@id='user_pass']", password);
    // Click the login button
    await page.click("xpath=//input[@id='wp-submit']"); 

  }) 

})


