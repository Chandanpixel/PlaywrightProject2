import { test, expect } from '@playwright/test';

const {POManager} =require ('../PageObjects/POManager')



// Complete the E2E flow of placing the order and grab the order id
test('Client App login', async ({ page }) => {
    //ts file- LoginPage, DashboardPage

    //create an object of a POmanager page
    const pomanager = new POManager(page)

    //varible of the login credentials
    const username = "chandansahu456@gmail.com";
    const password="Chandan@123"
    const productName = 'ZARA COAT 3';
    const products = page.locator(".card-body");
    const loginpage = pomanager.getLoginPage();

    //Land on the login page 
   await loginpage.goTo();

    //Login the site
   await loginpage.validLogin(username,password);
    
  const dashboardpage = pomanager.getDashboardPage();

  //Search the product and Add to cart 
  await dashboardpage.searchproductAddCart(productName);
  await dashboardpage.navigateTocart();
   
  
  const cartPage = pomanager.getCartPage();
  await cartPage.VerifyProductIsDisplayed(productName);
  await cartPage.Checkout();

  const ordersReviewPage = pomanager.getOrdersreviewPage();
  await ordersReviewPage.searchCountryAndSelect("ind","India");
  const orderId = await ordersReviewPage.SubmitAndGetOrderId();
 console.log(orderId);
 await dashboardpage.navigateToOrders();
 const ordersHistoryPage = pomanager.getOrdersHistoryPage();
 await ordersHistoryPage.searchOrderAndSelect(orderId);
 expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();



});








