

import{expect} from '@playwright/test'

export class productCheckOut{

    constructor(page){
        this.page = page
        this.checkOutBtn = page.locator("//a[text()='Checkout']")
        this.checkOutDashboardPage = page.locator('(//img[@alt="Spree"])[2]')
        this.PlaceOrderBtn = page.locator("//button[text()='Place Order']")
        this.SuccessOrderMsg = page.locator('//h1[contains(.,"Thanks for your order")]')
    }

    async ProductOrderSuccessfully(page){
        await this.checkOutBtn.click()
        await expect(this.checkOutDashboardPage).toBeVisible()
        await this.PlaceOrderBtn.click()
        await expect(this.SuccessOrderMsg).toBeVisible({timeout:45000})
    }

}