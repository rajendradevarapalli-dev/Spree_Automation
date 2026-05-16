
import{test,expect} from '@playwright/test'
import { addressPage } from '../Pages/address.po'
import { profilePage } from '../Pages/Profile.po'


test('verify user add address',async({page})=>{

     const login = new profilePage(page)
     const addAddress = new addressPage(page)

     await login.logInSuccess('spree@example.com','spree123')
     await addAddress.navigateToAddressPage()
     await addAddress.addAddress('marathahalli','Bengalore',"AL",'99501')
     await addAddress.addAddsuccess()



})