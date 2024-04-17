const {Login_Page}=  require('./Login_Page')
const {DashboardPage} = require('./DashboardPage')
const {OrdersHistoryPage}= require('./OrdersHistoryPage')
const {OrdersReviewPage} = require('./OrdersReviewPage')
const{CartPage} = require('./CartPage')

class POManager {
    page: any;
    loginpage: any;
    dashboardpage: any;
    cartpage: any
    orderhistorypage: any
    orderreviewpage: any
    
    

    constructor(page){
        this.page=page;      
        this.loginpage =new Login_Page(this.page);
        this.dashboardpage = new DashboardPage(this.page);
        this.cartpage = new CartPage(this.page);
        this.orderhistorypage = new OrdersHistoryPage(this.page);
        this.orderreviewpage = new OrdersReviewPage(this.page);


    }

    getLoginPage(){
        return this.loginpage;
    }

  getCartPage(){
    return this.cartpage;
  }

  getOrdersHistoryPage(){
    return this.orderhistorypage;
  }
  getOrdersreviewPage(){
    return this.orderreviewpage;
  }

  getDashboardPage(){
    return this.dashboardpage;
  }



}
module.exports = {POManager}