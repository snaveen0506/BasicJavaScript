import { Container } from "inversify";
import "reflect-metadata";
import { ILogin } from "../interface/Ilogin";
import { TYPES } from "./types";
import { loginpage } from "../pages/login";
import { IHome } from "../interface/IHome";
import { homepage } from "../pages/home";

export const container = new Container();
container.bind<ILogin>(TYPES.Login).to(loginpage);
container.bind<IHome>(TYPES.Home).to(homepage);
