import { homepage } from "../pages/home";
import { loginpage } from "../pages/login";

describe("Testing Demo Bank website", () => {
  it("Login to XYZ bank website", () => {
    const login = new loginpage();
    const home = new homepage();
    login.navigate(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
    login.addCustomer();
    login.openAccount();
    login.checkCustomer();
    login.backHomeAndLoginWithCustomer();
    home.deposit();
    home.withdraw();
  });
});
