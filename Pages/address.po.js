
import { expect } from "@playwright/test";


export class addressPage{
     
    constructor(page){
     this.page = page
     this.addressLink = page.locator('//a[text()="Addresses"]')
     this.addAddressBtn = page.locator('//button[text()="Add Address"]')
     this.selectCtntry = page.locator('//select[@aria-label="Country"]')
     this.addressInput = page.locator('//input[@id="modal-address1"]')
     this.cityInput = page.locator('//input[@id="modal-city"]')
     this.stateInput = page.locator('//select[@id="modal-state"]')
     this.zipcodeInput =  page.locator('//input[@id="modal-postal_code"]')
     this.saveAddBtn =  page.locator('//button[text()="Save Address"]')
     this.addHeader = page.locator("//h1[text()='Addresses']")
    }

    async navigateToAddressPage(){
        await this.addressLink.click()
    }

    async addAddress(address,city,state,zipcode){
      await this.addAddressBtn.click()
      await this.selectCtntry.selectOption('United States')
      await this.addressInput.fill(address)
      await this.cityInput.fill(city)
      await this.stateInput.selectOption(state,{timeout:45000})
      await this.zipcodeInput.fill(zipcode)
      await this.saveAddBtn.click()

    }

    async addAddsuccess(){

        await expect(this.addHeader).toBeVisible()
    }

}






