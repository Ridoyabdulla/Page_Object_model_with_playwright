import { test , expect } from "@playwright/test" ;
import jsonData from "../utils/userData.json";
import fs from "fs"; // for file read write
import RegistrationPage from "../pages/RegistrationPage.js";
import {generateRandomId} from "../utils/utils.js"
import { faker } from '@faker-js/faker'; // for generate fake name/email


test( "User Registration" , async ({page})=>{
 

    await page.goto("/");
    const reg = new RegistrationPage(page);

    const userModel = {

        firstName : faker.person.firstName(),
        lastName : faker.person.lastName(),
        email : faker.person.firstName()+"@gmail.com",
        password  : "1234",
        phoneNumber : `015${generateRandomId(1000000,99999999)}`,
        address : faker.location.city()
  
    }
     
     await reg.registerUser(userModel);

     await page.waitForTimeout(5000);

     await jsonData.push(userModel);
     
     fs.writeFileSync('./utils/userData.json' ,  JSON.stringify( jsonData , null , 2  ))


}  )



