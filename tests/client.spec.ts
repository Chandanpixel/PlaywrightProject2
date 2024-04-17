import { test, expect } from '@playwright/test';
import RegistrationPage from '../Pages/RegistrationPage.page'; 
import LoginPage from '../Pages/LoginPage.page'; 
import CheckoutPage from '../Pages/CheckoutPage.page'; 

test.describe('ClientPage', () => {
    let registrationPage; 
    // Registraion Of the site
    test.skip('Registration', async ({ page }) => {
        registrationPage = new RegistrationPage(page); 
        await registrationPage.register('Chandan', 'Sahu', 'chandansahus456@gmail.com', '7787905935', 'Engineer', 'Male', 'Chandan@123');
        const message = await page.locator('h1.headcolor').textContent();
        console.log(message);      
        await page.screenshot({ path: 'screenshot1.png' });

        
      });

      //Login of the Page
      test.beforeEach('login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login('chandansahu456@gmail.com', 'Chandan@123');
        await page.screenshot({ path: 'screenshot2.png' });

      });
      
      // Add to cart 
      test('checkout', async ({ page }) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.addToCartAndCheckout();
        await page.screenshot({ path: 'screenshot3.png' });

    });
});

