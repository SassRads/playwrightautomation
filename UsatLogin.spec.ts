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
    const password = 't>xJSLv8[?32';
    await page.goto(url);
    // Fill in login credentials
    await page.fill("xpath=//input[@id='user_login']", username);
    await page.fill("xpath=//input[@id='user_pass']", password);
    // Click the login button
    await page.click("xpath=//input[@id='wp-submit']");  

    let postTitle = await page.locator("//h1[@aria-label='Add title']"); 
    let pagination = await page.locator("//div[@id='tab-panel-2-blocks-view']"); 
    let para = await page.locator("//p[@id='block-d871489d-807a-4ca4-bbde-cdae70d44caa']"); 

    let postSettings = await page.locator("//button[@aria-label='Settings']"); 
    let postTabSettings = await page.locator("//button[@data-label='Post']"); 

    //let FAQ = await page.locator("//button[@id='id-8108a3-38']//span[@class='block-editor-block-types-list__item-title']");
    //create new3 post
    await page.locator("//div[normalize-space()='Posts']").click(); 

    await page.locator("a[href='post-new.php']").click(); 
    await expect(page.locator("//h1[@aria-label='Add title']")); 
    await page.locator("//h1[@aria-label='Add title']").click(); 
    await postTitle.fill("USAT - QA Automation 27 [month] [year]");  
    
    //change template 


   // postTabSettings.click();  
    postSettings.click(); 
    await page.getByLabel("Select template: Default").click(); 
     await page.locator("//select[contains(@id,'inspector-select-control')]").click(); 
   
     await page.pause(); 
     await page.locator("select[class*=components-select-control__input]").click(); 

    //await page.on("dialog", dialog => dialog.accept());  


    // await page.locator("button[aria-label='Select template: Generic Best Of']").click();
    // await page.locator("//select[@id='inspector-select-control-1']").click();
    // //await page.locator("//select[@id='inspector-select-control-0']").click(); 
    // await page.locator("//select[@id='inspector-select-control-1']").click();


 
    // select blocks
    await page.locator("//button[@id=':r0:']//*[name()='svg']").click(); 
    await page.locator("//span[@class='components-truncate css-1udlm7h e19lxcc00'][normalize-space()='List']").click(); 
    await page.locator("//div[@aria-label='List text']").fill("Testing List 1"); 
    // await page.locator("//span[@class='components-truncate css-1udlm7h e19lxcc00'][normalize-space()='List']").click(); 
    // await page.locator("//div[@aria-label='List text']").fill("Testing List 2");  
  

    //publish post 
    await page.locator("//button[normalize-space()='Publish']").click(); 

    
    await page.waitForTimeout(30000);

    //trash post 
    await page.locator("[class*='is-destructive']").click(); 


    //await page.locator("[class='submitdelete']").first().click(); 
    

    //await pagination.dragTo(FAQ); 

    // await page.isClosed();



    await page.pause();  


  }) 

})


