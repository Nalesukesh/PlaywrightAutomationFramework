import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("Login test case 1", async ({page})=>{
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    // await loginPage.fillusername("sukesh.nale@gmail.com");
    // await loginPage.fillpassword("Sukesh@123");
    await loginPage.fillusername(process.env.userid!);
    await loginPage.fillpassword(process.env.password!);
    const homePage = await loginPage.clickLoginButton();
    await homePage.expecToserviceTitleToBeVisible();


});

test("Sample test env", async ({page})=>{

    console.log(process.env.dotenv);
    console.log(process.env.userid);
    console.log(process.env.password);

});

const arrnumber  = [1,2,2,3,3,4,5,6,7,7]
const duplicate = arrnumber.filter((ele,index,arr)=>arr.indexOf(ele)!=index)
console.log(duplicate)