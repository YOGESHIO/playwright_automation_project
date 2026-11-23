const {test,expect}= require('@playwright/test');

test('Page Hide Function',async({page})=>
    
    {

        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        console.log(await page.title());

        await  expect(page.locator('#displayed-text')).toBeVisible();
        await page.locator('#hide-textbox').click();
        await expect(page.locator('#displayed-text')).toBeHidden();
        
        page.on('dialog',dialog=> dialog.accept());
        await page.locator('#confirmbtn').click();
        await page.locator('#mousehover').hover();
        const frames= page.frameLocator('#courses-iframe');
        await frames.locator("li a[href='lifetime-access']:Visible").click();
        const subs = await frames.locator(".text h2").textContent();
        console.log(subs.split(' ')[1]);
        



        
    









});