import{test,expect} from '@playwright/test'
import { registrationPage } from '../Pages/Registration.po'



test('Verify User Registration with valid data',async ({page})=>{

     const registration = new registrationPage(page)
     await registration.launchURL()
     await registration.signinWithDetials('rajendra','d','spree128@example.com','123456','123456')
     await registration.loginSuccess()


})
