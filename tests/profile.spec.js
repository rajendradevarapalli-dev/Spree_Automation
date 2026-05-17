import { test, expect } from "@playwright/test";
import { profilePage } from "../Pages/Profile.po";
import { registrationPage } from "../Pages/Registration.po";
import { testData } from "../testdata/utils";


test('verify user modify user profile', async ({ page }) => {

    const login = new profilePage(page)
    const profile = new profilePage(page)
    await login.logInSuccess('spree123@example.com','spree123')
    await profile.navigateToProfile()
    await profile.profileUpdateSuccess('Rajendra123', 'Devara123')
    
})