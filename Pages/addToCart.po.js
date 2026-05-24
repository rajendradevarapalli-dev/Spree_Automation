

import { expect } from "@playwright/test";

export  class addToCart{
      
     constructor(page){
        this.page = page
        this.selectProduct = page.locator("(//h3[text()='Temperature Control Kettle 1.7L'])[1]")
        this.AddtoCartBtn = page.locator("//button[text()='Add to Cart']")
        this.CartDashBoard = page.locator("//span[text()='Cart']")

     }

     async ProductAddToCart(page){
       await this.selectProduct.click()
       await this.AddtoCartBtn.click()
       await expect(this.CartDashBoard).toBeVisible()
     }


}