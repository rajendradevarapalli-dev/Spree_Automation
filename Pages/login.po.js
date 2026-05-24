import { expect } from "@playwright/test";

export class logInPage {

   constructor(page){
        this.page = page
        this.emailInput = page.locator('#email')
        this.passwordInput = page.locator('#password')
        this.signInBtn = page.getByRole('button', { name: /sign ?in/i })
   }
      
       async logInSuccess(email,password){

        await this.page.goto('https://demo.spreecommerce.org/us/en/account')
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.signInBtn.click()
    }
   

   
}