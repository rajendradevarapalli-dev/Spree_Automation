import { test,expect } from "@playwright/test";
import { logInPage } from "../Pages/login.po";
import { allProducts } from "../Pages/AllProducts.po";
import {addToCart} from "../Pages/addToCart.po"
import { productCheckOut } from "../Pages/checkOut.po";

test('Verify user can order a product',async({page})=>{
     
    const login = new  logInPage(page)
    const allProduct = new allProducts(page)
    const productAddToCart = new addToCart(page)
    const CheckoutProduct = new productCheckOut(page)

    await login.logInSuccess('spree@example.com','spree123')
    await allProduct.navigateToAllProductsPage()
    await productAddToCart.ProductAddToCart()
    await CheckoutProduct.ProductOrderSuccessfully()

})