///<reference types="Cypress" />

describe("Practice from section 44 to 50", () => {
  it("Section 44, Custom commands", () => {
    cy.visit("https://automationteststore.com/");

    cy.get("a[href*='?rt=product/category']").contains("Hair Care").click();

    // cy.get(".fixed .prdocutname").each((ele, index, list) => {
    //   //   cy.log("Product in Index: " + index + " is " + ele.text());
    //   if (ele.text() === "Seaweed Conditioner") cy.wrap(ele).click();
    cy.selectProduct("Seaweed Conditioner"); //custom command
  });
});
