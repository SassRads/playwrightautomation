import { test, expect, type Page } from '@playwright/test';

test("Calendar Validations", async ({page}) => { 
    let monthNumber = "10"; 
    let date = "7"; 
    let year ="2007";  
    const expectedList = [monthNumber,date,year]; 

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers"); 
    await page.locator(".react-date-picker__inputGroup").click(); 
    await page.locator(".react-calendar__navigation__label__labelText").click(); 
    await page.locator(".react-calendar__navigation__label__labelText").click();
    await page.locator(".react-calendar__navigation__prev-button").dblclick(); 
    await page.getByText(year).click(); 
    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click(); 
    await page.locator("//abbr[text()='"+date+"']").click(); 

    //assert
    const values = page.locator("[class*='react-date-picker__inputGroup__input']");
    for (let i = 0; i < await values.count(); i++) {
        const value = await values.nth(i).getAttribute("value");
        expect(value).toEqual(expectedList[i]);
    }
    await page.pause();
})