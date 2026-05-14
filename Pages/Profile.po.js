import { expect } from "@playwright/test";

export class profilePage{

    constructor(page){
        
        this.page = page
        this.navigateToProfilePage = page.locator('//a[text()="Profile"]')
        this.firstNameInput = page.locator('#first_name')
        this.lastNameInput = page.locator('#last_name')
        this.emailInput = page.locator('#email')
        this.saveChangesBtn = page.locator('//button[@type="submit"]')
        this.emailInput = page.locator('#email')
        this.passwordInput = page.locator('#password')
        this.signInBtn = page.locator('//button[text()="Sign In"]')
        this.crntPassword = page.locator('//input[@autocomplete="current-password"]')
    }

    async logInSuccess(email,password){

        await this.page.goto('https://demo.spreecommerce.org/us/en/account')
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.signInBtn.click()
    }

    async navigateToProfile(){
        await this.navigateToProfilePage.click()
    }

    async profileUpdateSuccess(firstname,lastname,email,cnfmpswd){
        await this.firstNameInput.fill(firstname)
        await this.lastNameInput.fill(lastname)
        await this.emailInput.fill(email)
        await this.crntPassword.fill(cnfmpswd)
        await this.saveChangesBtn.click()
    }

}