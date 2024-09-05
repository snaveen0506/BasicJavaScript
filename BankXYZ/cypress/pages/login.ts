import { ILogin } from "../interface/Ilogin";

export class loginpage implements ILogin {
  AddCust = "button[ng-click='addCust()']";
  FirstName = "input[placeholder='First Name']";
  LastName = "input[placeholder='Last Name']";
  PostCode = "input[placeholder='Post Code']";
  clickAddCust = "button[type='submit']";
  openAcc = "button[ng-click='openAccount()']";
  checkCust = "button[ng-click='showCust()']";
  backtoHome = "button[ng-click='home()']";
  tBody = "table>tbody td";
  uDetails: string[] = [];
  AccountNumber: number = 0;
  navigate(url: string) {
    cy.visit(url);
  }
  addCustomer() {
    cy.contains("Bank Manager Login").click();
    cy.get(this.AddCust).click();
    cy.fixture("example.json").then((t) => {
      cy.get(this.FirstName).type(t.Firstname);
      cy.get(this.LastName).type(t.Lastname);
      cy.get(this.PostCode).type(t.Postcode);
      cy.get(this.clickAddCust).click();
    });
  }
  openAccount() {
    cy.get(this.openAcc).click();
    cy.fixture("example.json").then((t) => {
      cy.get("#userSelect").select(t.Firstname + " " + t.Lastname);
      cy.get("#currency").select(t.Currency);
      cy.contains("Process").click();
    });
  }
  checkCustomer() {
    cy.get(this.checkCust).click();
    cy.fixture("example.json").then((t) => {
      //   cy.get(this.tBody)
      //     .each((ele, index) => {
      //       this.uDetails[index] = ele.text();
      //     })
      //     .then(() => {
      //       for (let i = 0; i < this.uDetails.length; i++) {
      //         if (this.uDetails[i].includes(t.Firstname)) {
      //           expect(this.uDetails[i]).equal("James");
      //         }
      //         if (this.uDetails[i].includes(t.Lastname)) {
      //           expect(this.uDetails[i]).equal("Anderson");
      //         }
      //         if (this.uDetails[i].includes(t.Postcode)) {
      //           expect(this.uDetails[i]).equal("ABC123");
      //         }
      //       }
      //     });
      cy.get("table")
        .contains("td", t.Firstname)
        .parent("tr")
        .within(() => {
          cy.get("td").eq(0).should("have.text", t.Firstname);
          cy.get("td").eq(1).should("have.text", t.Lastname);
          cy.get("td").eq(2).should("have.text", t.Postcode);
          cy.get("td")
            .eq(3)
            .invoke("text")
            .then((t) => {
              this.AccountNumber = Number(t);
              expect(this.AccountNumber).to.be.a("number");
            });
        });
    });
  }
  backHomeAndLoginWithCustomer() {
    cy.get(this.backtoHome).click();
    cy.contains("Customer Login").click();
    cy.fixture("example.json").then((t) => {
      cy.get("#userSelect").select(t.Firstname + " " + t.Lastname);
      cy.contains("Login").click();
      cy.get(".borderM > :nth-child(1) > strong").then((text) => {
        expect(text.text().trim()).equal(
          "Welcome " + t.Firstname + " " + t.Lastname + " !!"
        );
      });
      cy.get(".borderM > :nth-child(3) > :nth-child(1)").then((e) => {
        let verifyACCNumber: number = parseInt(e.text());
        expect(verifyACCNumber).equal(this.AccountNumber);
      });
    });
  }
}
