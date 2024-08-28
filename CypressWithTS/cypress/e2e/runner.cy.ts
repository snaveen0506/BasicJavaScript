/// <reference types='cypress' />

import { IHome } from "../interface/IHome";
import { container } from "../inversify/container";
import { TYPES } from "../inversify/types";
import { ICart } from "../interface/ICart";

it("login test", () => {
  //const home=new homepage();
  const homeInversify: IHome = container.get<IHome>(TYPES.HomePage);
  // const cart = new cartpage();
  const cartInversify: ICart = container.get<ICart>(TYPES.CartPage);
  homeInversify.navigate("https://rahulshettyacademy.com/seleniumPractise/#/");
  homeInversify.addVegetableToCart();
  cy.wait(2000);
  cartInversify.clickCart();
  cartInversify.checkName();
  cartInversify.checkPrice();
  cartInversify.placeOrder();
});
