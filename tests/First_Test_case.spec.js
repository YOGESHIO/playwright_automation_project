 
const { test, expect } = require('@playwright/test');

 
test.only("login shopping web and order zara coat 3", async ({ page }) =>
{
   const productName = 'ADIDAS ORIGINAL';
   const products = page.locator(".card-body");
   const userName = page.locator("#userEmail");
   const password = page.locator("#userPassword");
   const signInBtn = page.locator("#login");
   const cardTitles = page.locator(".card-body b");
   
   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

   await userName.fill("yogesh.dixit2012@gmail.com");
   await password.fill("Rahul@89");
   await signInBtn.click();
   console.log(await page.title());
   await expect(page).toHaveTitle("Let's Shop");
   await cardTitles.first().waitFor();
   //await page.waitForLoadState('networkidle');
   //console.log( await cardTitles.first().textContent());
   const allItems = await cardTitles.allTextContents();
   console.log(allItems);
   const count = await products.count();

   for (let i = 0; i < count; ++i)
      
      {

         if(await products.nth(i).locator("b").textContent() === productName)
         {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
         }
            


   
      }
         await page.locator("[routerlink*='cart']").click();
         await page.locator("div li").first().waitFor();
         const bool = await page.locator("h3:has-text('" + productName + "')").isVisible();
         expect(bool).toBeTruthy();
         await page.locator("text=Checkout").click();
         await page.locator("input[class='input txt']").first().fill("123");
         await page.locator("input[class='input txt']").nth(1).fill("Yogesh Dixit");
         await page.locator("input[placeholder*='Country']").pressSequentially('Ind');
         const dropdown = await page.locator(".ta-results");
         await dropdown.waitFor();
         const countryOptions = await dropdown.locator("button").count();

         console.log(countryOptions);
         for (let i = 0; i < countryOptions; ++i)
         {
              const text = await dropdown.locator("button").nth(i).textContent();
            if (text === ' India') {
               await dropdown.locator("button").nth(i).click();
               break;
            }
         }

         await page.locator(".btnn").click();
         await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
         await page.pause();              




   });























/*
test("login Test case", async ({ page }) => 
   {
      const userName = page.locator("#username");
      const password = page.locator("#password");
      const signInBtn = page.locator("#signInBtn");
      const cardTitles = page.locator(".card-body a");


      
      await page.goto("https://rahulshettyacademy.com/loginpagePractise");
      console.log(await page.title());
      await userName.fill("rahulshettyacadem");
      await password.fill("Learning@830$3mK2");
     // const checkbox = page.locator("[type='checkbox']");
      //const isChecked = await checkbox.isChecked();
    //  console.log(isChecked);
    //  if (isChecked === false) {
    //     await checkbox.click();
    //  }

      await page.locator("#signInBtn").click();
      console.log(await page.locator("[style*='block']").textContent());
      await expect(page.locator("[style*='block']")).toContainText("Incorrect");
      await userName.fill("rahulshettyacademy");
      await signInBtn.click();
      /*console.log(await cardTitles.nth(1).textContent());

      console.log(await cardTitles.nth(0).textContent());*/
      /* const allTitles = await cardTitles.allTextContents();
      
      console.log(allTitles);




   }); */

   /*test("browser context Test case", async ({ browser }) => 
   {
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
      console.log(await page.title());


   })*/

  /* test('Open Google and check title', async ({ page }) => {
      await page.goto('https://www.google.com');
      console.log(await page.title());
      await expect(page).toHaveTitle("Google");

    }) */
 

/*test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
 
}) */