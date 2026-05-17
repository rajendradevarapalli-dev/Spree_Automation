import{test,expect} from '@playwright/test'
import { registrationPage } from '../Pages/Registration.po'
import { testData } from '../testdata/utils'

//let random = (Math.random() + 1).toString(36).substring(7);

test('Verify User Registration with valid data',async ({page})=>{

     const registration = new registrationPage(page)
     await registration.launchURL()
    // let email = `spree+${random}@example.com`
     await registration.signinWithDetials('rajendra','d',testData.email,testData.password,testData.password)
     await registration.loginSuccess()


})
