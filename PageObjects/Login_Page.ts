import { Page,Locator } from "@playwright/test";

class Login_Page{
    
    signInbtn: any;
    username: any;
    password: any;
     page: any;

    constructor(page){
        this.page=page;
        this.username= page.locator("#userEmail")
        this.password= page.locator("#userPassword")
        this.signInbtn = page.locator("[value='Login']");
        

    }
     //navigate to website
    async goTo(){
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async validLogin(username,password){
    await this.username.fill(username);
    await this.password.fill(password);
    await this.signInbtn.click();
    await this.page.waitForLoadState('networkidle');

    }
    
}
module.exports = {Login_Page}