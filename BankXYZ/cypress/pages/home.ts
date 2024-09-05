import { error } from "cypress/types/jquery";
import { IHome } from "../interface/IHome";

export class homepage implements IHome {
  clickDeposit = "button[ng-click='deposit()']";
  clickWithdraw = "button[ng-click='withdrawl()']";
  amountToBeDeposited = "form[ng-submit='deposit()']>div>input";
  amountToBeWithdraw = "form[ng-submit='withdrawl()']>div>input";
  toDepositeTheAmount = "form[ng-submit='deposit()']>button[type='submit']";
  toWithdrawTheAmount = "form[ng-submit='withdrawl()']>button[type='submit']";
  Balance: number = 0;
  deposit() {
    cy.get(this.clickDeposit).click();
    cy.fixture("example.json").then((data) => {
      let amounts: Array<number> = data.DepositAmounts;
      let randomIndex = Math.floor(Math.random() * amounts.length);
      let randomAmount = amounts[randomIndex];
      if (randomAmount > 99 && randomAmount <= 20000) {
        cy.get(this.amountToBeDeposited).type(randomAmount.toString());
        cy.get(this.toDepositeTheAmount).click();
        cy.get(".error").should("have.text", "Deposit Successful");
      } else {
        throw new Error(
          "Amount should be greater than 99 and less than or equal to 20000"
        );
      }
    });
  }
  withdraw() {
    cy.get(this.clickWithdraw).click();
    cy.fixture("example.json").then((data) => {
      let amounts: Array<number> = data.WithdrawlAmounts;
      let randomIndex = Math.floor(Math.random() * amounts.length);
      let randomAmount = amounts[randomIndex];
      if (randomAmount > 99 && randomAmount <= 10000) {
        cy.get(this.amountToBeWithdraw).type(randomAmount.toString());
        cy.get(".borderM > :nth-child(3) > :nth-child(2)")
          .invoke("text")
          .then((t) => {
            if (Number(t) > randomAmount) {
              cy.get(this.toWithdrawTheAmount).click();
              cy.get(".error").should("have.text", "Transaction successful");
            } else {
              cy.get(this.clickDeposit)
                .click()
                .then(() => {
                  throw new Error(
                    "Withdrawl amount should be less than your balance"
                  );
                });
            }
          });
      } else {
        throw new Error(
          "Amount should be greater than 99 and less than or equal to 10000"
        );
      }
    });
  }
}
