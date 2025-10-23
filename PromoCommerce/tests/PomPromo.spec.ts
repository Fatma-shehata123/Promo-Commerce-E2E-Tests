import { expect, test } from "../../PromoFixture/PromoFixture";
import  * as  PromoTestData from "../TestData/TestData.json";

test('E2E', async({page , promologinPage, promocommercehome ,checkOutPage}) =>{
    //login page
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await promologinPage.enterUserName(PromoTestData.username);
    await promologinPage.enterEmail(PromoTestData.email);
    await promologinPage.enterPassword(PromoTestData.password);
    await promologinPage.selectGender(PromoTestData.gender);
    await promologinPage.selectEmploymentStatus();
    await promologinPage.dateOfBirth(PromoTestData.date);
    await promologinPage.twoWayData(PromoTestData.twowaydata);
    await promologinPage.submitBtn();
    await promologinPage.visible(PromoTestData.text);
    //home page
    await page.goto('https://rahulshettyacademy.com/angularpractice/shop');
    await promocommercehome.ClickOnAddToCart(PromoTestData.items);
    await promocommercehome.ClickOnCheckOutButton();
    //checkout page
    await checkOutPage.clickOnCheckOutButton();
    await checkOutPage.enterLocation(PromoTestData.location);
    await checkOutPage.clickOnTerms();
    await checkOutPage.verifyTermsVisible();
    await checkOutPage.clickOnCloseBtn();
    await checkOutPage.check();
    await checkOutPage.clickOnPurchase(); 
    await checkOutPage.visible(PromoTestData.text);
});
