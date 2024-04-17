import { Page,Locator } from "@playwright/test";


 class CheckoutPage {
    page: any;
    constructor(page) {
      this.page = page;
    }
  
    async addToCartAndCheckout() {
        await this.page.getByRole('button', { name: ' Add To Cart' }).first().click();
        await this.page.getByRole('button', { name: ' Cart' }).click();
        await this.page.getByRole('heading', { name: 'ZARA COAT' }).click();
        await this.page.getByRole('button', { name: 'Checkout❯' }).click();
        await this.page.getByText('ZARA COAT 3')
        //
     
      await this.page.screenshot({ path: 'screenshot2.png' });
    }
  }
  export default CheckoutPage