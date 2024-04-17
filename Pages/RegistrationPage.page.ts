import { Page,Locator } from "@playwright/test";


 class RegistrationPage {
    page: Page;
    constructor(page :Page) {
      this.page = page;
    }
  
    async register(firstName, lastName, email, number, profession, gender, password) {
      await this.page.goto('https://rahulshettyacademy.com/client/');
      await this.page.getByRole('link', { name: 'Register' }).click();
      await this.page.fill('input[placeholder="First Name"]', firstName);
      await this.page.fill('input[placeholder="Last Name"]', lastName);
      await this.page.fill('input[placeholder="email@example.com"]', email);
      await this.page.fill('input[placeholder="enter your number"]', number);
      await this.page.selectOption('select', { label: profession });
      await this.page.check(`input[type="radio"][value="${gender}"]`);
      await this.page.fill('input[placeholder="Passsword"]', password);
      await this.page.fill('input[placeholder="Confirm Passsword"]', password);
      await this.page.check('input[type="checkbox"]');
      await this.page.getByRole('button', { name: 'Register' }).click();

    }
  }
  export default RegistrationPage