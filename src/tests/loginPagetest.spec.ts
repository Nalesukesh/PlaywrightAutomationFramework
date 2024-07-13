import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("Login test case 1", async ({page})=>{
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillusername("sukesh.nale@gmail.com");
    await loginPage.fillpassword("Sukesh@123");
    const homePage = await loginPage.clickLoginButton();

    await homePage.expecToserviceTitleToBeVisible();


})