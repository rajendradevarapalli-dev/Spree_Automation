import { expect } from "@playwright/test";

export class registrationPage {

      constructor(page){
        this.page = page
        this.firstNameInput = page.locator('#firstName')
        this.lastNameInput = page.locator('#lastName')
        this.emailInput  = page.locator('(//input[@placeholder="you@example.com"])[1]')
        this.passwordInput = page.locator('(//input[@id="password"])[1]')
        this.cnfmpasswordInput = page.locator('(//input[@id="passwordConfirmation"])[1]')
        this.privacyCheckBox = page.locator('#policy-consent')
        this.createAccountBtn = page.locator('//button[text()="Create Account"]')
        this.signInlink = page.locator('//a[text()="Sign in"]')
        this.signUplink = page.locator('//a[@href="/us/en/account/register"]')
      }

      async launchURL(){
        await this.page.goto('https://demo.spreecommerce.org/us/en/account')
        await this.signUplink.click()
      }

      async signinWithDetials(firstName,lastName,email,password,cnfmPassword){
       await this.firstNameInput.fill(firstName)
       await this.lastNameInput.fill(lastName)
       await this.emailInput.fill(email)
       await this.passwordInput.fill(password)
       await this.cnfmpasswordInput.fill(cnfmPassword)
       await this.privacyCheckBox.check()
       await this.createAccountBtn.click()
      }

      async SigninSuccess(){
        await expect(this.page.locator('//h1[text()="Account Overview"]')).toBeVisible()
      }

}