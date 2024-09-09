import { IHome } from "../interface/IHome";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class homepage implements IHome {
  clickDeposit = "button[ng-click='deposit()']";
  clickWithdraw = "button[ng-click='withdrawl()']";
  clickTransaction = "button[ng-click='transactions()']";
  amountToBeDeposited = "form[ng-submit='deposit()']>div>input";
  amountToBeWithdraw = "form[ng-submit='withdrawl()']>div>input";
  toDepositeTheAmount = "form[ng-submit='deposit()']>button[type='submit']";
  toWithdrawTheAmount = "form[ng-submit='withdrawl()']>button[type='submit']";
  startDate = 'input[id="start"]';
  endDate = 'input[id="end"]';
  Balance: number = 0;
  randomDepositAmount: number = 0;
  randomWithdrawlAmount: number = 0;
  deposit() {
    cy.get(this.clickDeposit).click();
    cy.fixture("example.json").then((data) => {
      let amounts: Array<number> = data.DepositAmounts;
      let randomIndex = Math.floor(Math.random() * amounts.length);
      this.randomDepositAmount = amounts[randomIndex];
      if (this.randomDepositAmount > 99 && this.randomDepositAmount <= 20000) {
        cy.get(this.amountToBeDeposited).type(
          this.randomDepositAmount.toString()
        );
        cy.get(this.toDepositeTheAmount).click();
        cy.wait(3000);
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
      this.randomWithdrawlAmount = amounts[randomIndex];
      if (
        this.randomWithdrawlAmount > 99 &&
        this.randomWithdrawlAmount <= 10000
      ) {
        cy.get(this.amountToBeWithdraw).type(
          this.randomWithdrawlAmount.toString()
        );
        cy.get(".borderM > :nth-child(3) > :nth-child(2)")
          .invoke("text")
          .then((t) => {
            let balanceBeforeWithdrawl = Number(t);
            if (balanceBeforeWithdrawl >= this.randomWithdrawlAmount) {
              cy.get(this.toWithdrawTheAmount).click();
              cy.wait(3000);
              cy.get(".error").should("have.text", "Transaction successful");
              cy.get(".borderM > :nth-child(3) > :nth-child(2)")
                .invoke("text")
                .then((t) => {
                  let currentBalance = Number(t);
                  expect(currentBalance).equal(
                    balanceBeforeWithdrawl - this.randomWithdrawlAmount
                  );
                });
            } else {
              cy.get(this.toWithdrawTheAmount).click();
              cy.get(".error").should(
                "have.text",
                "Transaction Failed. You can not withdraw amount more than the balance."
              );
            }
          });
      } else {
        throw new Error(
          "Amount should be greater than 99 and less than or equal to 10000"
        );
      }
    });
  }
  transaction() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 8);
    time.setMilliseconds(time.getMilliseconds() - 600); //to add or minus the values
    const year = time.getFullYear();
    const month = String(time.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(time.getDate()).padStart(2, "0");
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");
    const millSeconds = String(time.getMilliseconds()).padStart(3);

    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${millSeconds}`;
    cy.log(formattedDate);
    cy.get(this.clickTransaction).click();
    cy.wait(2000);
    // cy.get(this.startDate).then((datePicker) => {
    //   if (datePicker.length > 0) {
    //     const width = 130;
    //     const clickX = width - 1;
    //     const clickY = datePicker.height()! / 2;
    //     //By using the !(Non-Null Assertion Operator) operator, you are telling TypeScript,
    //     //“I know this value will not be null or undefined at runtime, so don’t give me an error about it.”
    //     cy.wrap(datePicker).trigger("mouseover", {
    //       clirntX: clickX,
    //       clientY: clickY,
    //     });
    //     cy.contains("Show local date and time picker").should("be.visible");
    //     cy.wrap(datePicker).click(clickX, clickY);
    //   }
    // });
    // cy.get(this.startDate).clear().type(formattedDate);
    // cy.get(this.endDate).clear().type(formattedDate);
    cy.get("table>tbody>tr").then((rows) => {
      if (rows.length === 2) {
        cy.get("table")
          .contains("td", "Credit")
          .parent("tr")
          .within(() => {
            cy.get("td")
              .eq(1)
              .should("have.text", this.randomDepositAmount.toString());
            cy.get("td").eq(2).should("have.text", "Credit");
          });
        cy.get("table")
          .contains("td", "Debit")
          .parent("tr")
          .within(() => {
            cy.get("td")
              .eq(1)
              .then((t) => {
                expect(t.text()).equal(this.randomWithdrawlAmount.toString());
              });
            cy.get("td").eq(2).should("have.text", "Debit");
          });
      } else {
        cy.get("table")
          .contains("td", "Credit")
          .parent("tr")
          .within(() => {
            cy.get("td")
              .eq(1)
              .should("have.text", this.randomDepositAmount.toString());
            cy.get("td").eq(2).should("have.text", "Credit");
          });
      }
    });
  }
}
