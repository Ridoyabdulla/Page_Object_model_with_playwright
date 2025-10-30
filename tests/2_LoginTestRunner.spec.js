import { test , expect } from "@playwright/test" ;
import jsonData from "../utils/userData.json";
import LoginPage from "../pages/LoginPage";

test("User can do Login" , async ({page})=>{

    const latestUser = jsonData[ jsonData.length - 1  ];

    await page.goto("/");

    const loginPage = new LoginPage(page);

    loginPage.loginUser( latestUser.email , latestUser.password   );

    await page.waitForTimeout(7000);




} )