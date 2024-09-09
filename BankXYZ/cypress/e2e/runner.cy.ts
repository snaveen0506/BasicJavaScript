import { IHome } from "../interface/IHome";
import { ILogin } from "../interface/Ilogin";
import { container } from "../inversify/container";
import { TYPES } from "../inversify/types";
import { homepage } from "../pages/home";
import { loginpage } from "../pages/login";

describe("Testing Demo Bank website", () => {
  it("Login to XYZ bank website", () => {
    // const login = new loginpage();
    const loginInversify: ILogin = container.get<ILogin>(TYPES.Login);
    const homeInversify: IHome = container.get<IHome>(TYPES.Home);
    // const home = new homepage();
    loginInversify.navigate(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
    loginInversify.addCustomer();
    loginInversify.openAccount();
    loginInversify.checkCustomer();
    loginInversify.backHomeAndLoginWithCustomer();
    homeInversify.deposit();
    homeInversify.withdraw();
    homeInversify.transaction();
  });
});
