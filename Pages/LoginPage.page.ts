import { Page,Locator } from "@playwright/test";

class LoginPage {
    page: any;
    constructor(page) {

      this.page = page;
    }
  
    async login(email, password) {
      await this.page.goto('https://rahulshettyacademy.com/client/');
      await this.page.fill('input[placeholder="email@example.com"]', email);
      await this.page.fill('input[placeholder="enter your passsword"]', password);
      await this.page.getByRole('button', { name: 'Login' }).click();
      await this.page.locator('#sidebar').getByText('Home | Search').click();

    }
  }
  export default LoginPage