import{test,expect} from '@playwright/test'
import { logInPage } from '../Pages/login.po'


test('Verify user login with valid credentials',async({page})=>{

    const logIn = new logInPage(page)
    await logIn.logInSuccess('spree@example.com','spree123')
    await expect(page.locator('//h1[text()="Account Overview"]')).toBeVisible()
    
})