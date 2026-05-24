
import { expect } from "@playwright/test";

export class allProducts{

    constructor(page){

        this.page = page
        this.menuBtn = page.locator('//div[@class="relative w-5 h-5"]')
        this.AllProductLink = page.locator("(//a[text()='All Products'])[2]")
        this.AllProductDashBoard = page.locator("//h1[text()='All Products']")
    }
   
    async navigateToAllProductsPage(){
        await this.menuBtn.click()
        await this.AllProductLink.click()
        await expect(this.AllProductDashBoard).toBeVisible()

    }

}