/// <reference types="cypress" />
//the above line provides code suggestion
describe("template spec", () => {
  // it('Type on Google',()=>{})
  it("Type on Google", function () {
    cy.visit("https://www.google.com");
    // cy.window().then((win) => {
    //   win.location.href = "https://www.google.com";
    // });
    cy.get("#APjFqb").type("Olympics 2024");
    // cy.get("#APjFqb").type("Olympics 2024{enter}"); //to click enter button
    cy.get("#jZ2SBf > .wM6W7d > span").click();
    cy.wait(4000);
    cy.contains("Medals").click({ force: true }); //contains-locate element by text
    //force: true- if cypress not able to interact with element
  });

  //only- reuns this only test alone
  it.only("Login Test", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin"); //username
    cy.wait(1000);
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123"); //password
    cy.wait(1000);
    cy.get(".oxd-button").click(); //click login

    // cy.get(":nth-child(1) > .oxd-main-menu-item").click(); //click admin
    cy.get('[href="/web/index.php/admin/viewAdminModule"]').click(); //custom xpath
    cy.wait(1000);
    cy.get(".orangehrm-header-container > .oxd-button").click(); //click add button
    cy.wait(1000);
    // cy.get(".oxd-button--secondary").click();
    cy.get(".oxd-form-actions").find(".oxd-button--secondary").click();
    //if cypress not able to find descendent element then use find()

    //implicit Assertion
    // cy.get('[type="submit"]')
    //   .should("contain", "Save")
    //   .and("have.class", "oxd-button--secondary")
    //   .should("be.visible")
    //   .should("be.enabled");
    cy.get('[type="submit"]')
      .its("length")
      .then((len) => {
        let length = len;
        cy.get('[type="submit"]').should("have.length", length);
      });

    cy.get('[type="submit"]').invoke("attr", "type").should("equal", "submit");

    //explicit assertion
    //expect
    // expect(true).to.be.true; //there's no diff if pass, if fails you can see error in console

    // let name = "John";
    // expect(name).equal("John");

    // //assert
    // assert.equal(4, "4", "Its not equal");
    // assert.strictEqual(4, "4", "Its not equal"); //type and value should be equal
  });
});
