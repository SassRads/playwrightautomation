import { test, expect, type Page } from '@playwright/test';
import { text } from 'stream/consumers';

test('Client App login', async({page}) => {  

    
    const emailId = "radhima1003@gmail.com"
    const productName = "ZARA COAT 3"; 
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client"); 
    await page.locator("#userEmail").fill(emailId); 
    await page.locator("#userPassword").fill('Student#99'); 
    await page.locator("[value='Login']").click(); 
    await page.waitForLoadState('networkidle');
    const titles = await page.locator(".carbody b").allTextContents(); 
    console.log(titles);   
    const count = await products.count(); 
    for(let i=0;i<count;++i) {
        if (await products.nth(i).locator("b").textContent() === productName)
        {
            await products.nth(i).locator("text= Add To Cart").click();
            break; 
        }
    }
    await page.locator("[routerlink*='/dashboard/cart']").click();
    await page.locator("div li").first().waitFor(); 
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible(); 
    expect(bool).toBeTruthy(); 
    await page.locator("text=Checkout").click();  
    await page.locator("[placeholder*='Country']").pressSequentially("ind");
    const dropdown = page.locator(".ta-results"); 
    await dropdown.waitFor(); 
    const optionsCount = await dropdown.locator("button").count(); 
    for(let i=0; i<optionsCount; ++i){ 
        const text =  await dropdown.locator("button").nth(i).textContent(); 
        if(text===" India") {
            await dropdown.locator("button").nth(i).click();
            break; 
        }
       } 
    expect (await page.locator(".user__name [type='text']").first()).toHaveText(emailId);  

    await page.locator(".action__submit").click(); 
    
    expect (page.locator("[class='hero-primary']")).toHaveText(" Thankyou for the order. "); 
    const tid = await page.locator(".em-spacer-1 .ng-star-inserted").textContent(); 
    console.log(tid);
    
    //iteration of the webtable.  

    await page.locator("td [routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();   
    const rows = await page.locator("tbody tr"); 
    
    for(let i=0; i< await rows.count(); ++i) {  

       const rowOrderId = await rows.nth(i).locator("th").textContent();
       if(rowOrderId) {
        if(tid?.includes(rowOrderId)) { 

            await rows.nth(i).locator("button").first().click(); 
            break; 
    
           } 
       }
        
       const viewDetails = await page.locator("div[class='col-text -main']").innerText(); 
       expect(rowOrderId?.includes(viewDetails)).toBeTruthy(); 

    }
    
    

       



   

});