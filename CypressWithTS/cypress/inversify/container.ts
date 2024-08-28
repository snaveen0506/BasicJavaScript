import { Container } from "inversify";
import "reflect-metadata";
import { TYPES } from "./types";
import { IHome } from "../interface/IHome";
import { homepage } from "../pages/homePage";
import { cartpage } from "../pages/cartPage";
import { ICart } from "../interface/ICart";

export const container = new Container();
container.bind<IHome>(TYPES.HomePage).to(homepage);
container.bind<ICart>(TYPES.CartPage).to(cartpage);
