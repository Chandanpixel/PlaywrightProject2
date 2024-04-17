import { Page,Locator } from "@playwright/test";

class DashboardPage 
{
    products: any;
    productsText: any;
    cart: any;
    page: any;
    orders: any;

    constructor(page){
        this.page=page;

        this.products =page.locator(".card-body");
        this.productsText= page.locator(".card-body b")
        this.cart = page.locator("[routerlink*='cart']")
        this.orders = page.locator("button[routerlink*='myorders']");

    }

    async searchproductAddCart(productName) {
        const titles = await this.productsText.allTextContents();
        console.log(titles);
    
        const count = await this.products.count();
        for (let i = 0; i < count; ++i) {
            const title = await this.productsText.nth(i).textContent();
            if (title === productName) {
                // Add to cart 
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
    }

    async navigateToOrders(){
   await this.orders.click();
}

    
    async navigateTocart(){
        await this.cart.click();

    }

}
module.exports={DashboardPage}
