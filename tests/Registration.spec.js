import{test,expect} from '@playwright/test'
import { registrationPage } from '../Pages/Registration.po'
import { testData } from '../testdata/utils'

//let random = (Math.random() + 1).toString(36).substring(7);

test('Verify User Registration with valid data',async ({page})=>{

     const registration = new registrationPage(page)
     await registration.launchURL()
     await registration.signinWithDetials('rajendra','d','spree1224@example.com','123456','123456')
     await registration.loginSuccess()


})
