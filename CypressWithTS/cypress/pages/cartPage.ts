import { injectable } from "inversify";
import "reflect-metadata";
import { ICart } from "../interface/ICart";

@injectable()
export class cartpage implements ICart {
  cart = ".cart-icon > img";
  CauliName = ":nth-child(1) > :nth-child(2) > .product-name";
  BroName = ":nth-child(2) > :nth-child(2) > .product-name";
  CauliPrice = ":nth-child(1) > :nth-child(5) > .amount";
  BroPrice = ":nth-child(2) > :nth-child(5) > .amount";
  clickCart() {
    cy.get(this.cart).click();
    cy.contains("PROCEED TO CHECKOUT", { timeout: 6000 }).click();
  }
  checkName() {
    cy.fixture("example").then((data) => {
      data.forEach((element: { vegName: string; vegcount: number }) => {
        if (element.vegName === "Cauliflower")
          cy.get(this.CauliName).then((t) => {
            expect(t.text().split(" ")[0]).to.be.equal(element.vegName); //another way to get text
          });
        else
          cy.get(this.BroName)
            .invoke("text")
            .then((text) => {
              expect(text.split(" ")[0]).to.be.equal(element.vegName);
            });
      });
    });
  }
  checkPrice() {
    cy.fixture("example").then((data) => {
      data.forEach(
        (element: { vegName: string; vegcount: number; price: number }) => {
          if (element.vegName === "Cauliflower")
            cy.get(this.CauliPrice)
              .invoke("text")
              .then((text) => {
                expect(Number(text)).to.be.equal(
                  element.price * element.vegcount
                );
              });
          else
            cy.get(this.BroPrice)
              .invoke("text")
              .then((text) => {
                expect(Number(text)).to.be.equal(
                  element.price * element.vegcount
                );
              });
        }
      );
    });
  }
  placeOrder() {
    cy.contains("Place Order").click();
    //DropDown
    cy.get('select[style="width: 200px;"]')
      .select("India")
      .should("have.value", "India");
    //checkBox
    cy.get(".chkAgree").check().should("be.checked");
    cy.get("button").click();
  }
}
