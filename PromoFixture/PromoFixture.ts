import{test as baseTest} from'@playwright/test';
import LoginPage from '../PromoCommerce/Pages/LoginPage/LoginPage';
import HomePage from '../PromoCommerce/Pages/HomePage/HomePage';
import CheckOutPage from '../PromoCommerce/Pages/CheckOutPage/CheckOutPage';

type pages={
    promologinPage : LoginPage;
    promocommercehome : HomePage;
    checkOutPage : CheckOutPage; 
}

const TestPages = baseTest.extend<pages>({
    promologinPage : async({page} , use) => {
        await use (new LoginPage(page))
    },
    promocommercehome : async({page} , use) => {
        await use (new HomePage(page))
    },
    checkOutPage : async({page} , use) => {
        await use (new CheckOutPage(page))
    }
})

export const test = TestPages;
export { expect } from '@playwright/test';