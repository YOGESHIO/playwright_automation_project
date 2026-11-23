const { test, expect,request } = require('@playwright/test');

const loginpayload = {userEmail:"yogesh.dixit2012@gmail.com",userPassword:"Rahul@89"};
const orderPayLoad = {orders:[{country:"India",productOrderedId:"6960eae1c941646b7a8b3ed3"}]};

let token;
let order_id;

test.beforeAll(async()=>
{

    const apiContext = await request.newContext();
    const loginresponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
data: loginpayload
})
expect(loginresponse.ok()).toBeTruthy();
const loginresponseJson = await loginresponse.json();
token = loginresponseJson.token;
console.log(token);



const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",

   {
      data: orderPayLoad,
      headers: {
         'Authorization': token,
         'Content-Type': 'application/json'
      },

   })
   expect(orderResponse.ok()).toBeTruthy();
   const orderResponseJson= await orderResponse.json();
   console.log(orderResponseJson)
   order_id = orderResponseJson.orders[0];

});



 
test("Only Place order", async ({ page }) =>
{
   

   await page.addInitScript( value => {

    window.localStorage.setItem('token',value);

   }, token);


   
  
   await page.goto("https://rahulshettyacademy.com/client/");   
         
         await page.locator("[routerlink='/dashboard/myorders']").click();
         await page.locator("tbody").waitFor();
         const rows = await page.locator("tbody tr");
         const rowCount = await rows.count();
         for (let i = 0; i < rowCount; ++i)
         {
            const rowOrderId = await rows.nth(i).locator("th").textContent();
            if (order_id.includes(rowOrderId)) {
               await rows.nth(i).locator("button").first().click();
               break;
            }        
         }
         const orderIdDetails = await page.locator(".col-text").textContent();
         await page.pause();
         expect(order_id.includes(orderIdDetails)).toBeTruthy();
            

   });



