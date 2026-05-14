import { test,expect } from "@playwright/test";
import { profilePage } from "../Pages/Profile.po";

test('verify user modify user profile',async({page}) =>{

    const profile = new profilePage(page)
    await profile.logInSuccess('spree123@example.com','spree123')
    await profile.navigateToProfile()
    await profile.profileUpdateSuccess('Rajendra123','Devara123','raju@example.com','spree123')

})