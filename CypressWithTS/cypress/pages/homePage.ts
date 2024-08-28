import { injectable } from "inversify";
import "reflect-metadata";
import { IHome } from "../interface/IHome";

@injectable()
export class homepage implements IHome {
  addToCart = ".product-action > button";
  increment = "a[class='increment']";
  quantity = "input[class='quantity']";

  navigate(url: string) {
    cy.visit(url);
  }
  addVegetableToCart() {
    cy.fixture("example").then((data) => {
      data.forEach(
        (element: { vegName: string; vegcount: number; price: number }) => {
          cy.get(".search-keyword").clear().type(element.vegName);
          cy.wait(3000);
          cy.get(this.quantity).clear();
          for (let i: number = 1; i <= element.vegcount; i++) {
            cy.get(this.increment).click();
          }
          cy.get(this.addToCart).click({
            force: true,
          });
        }
      );
    });
  }
}
