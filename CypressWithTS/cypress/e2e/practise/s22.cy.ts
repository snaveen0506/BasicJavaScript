/// <reference types="Cypress"/>

describe("Practice from section 22 to 30", () => {
  before(() => {
    cy.clearCookies();
  });
  it("Section 22", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    // using cypress commands and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain.text", "First name:");

    //JQuery approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then(($text) => {
      const fname = $text.find("#field_11").text();
      expect(fname).to.contain("First name:");
      //   expect(fname).contain("First name:");  //another way
    });
  });
  it("Section 23: Iterate through elements", () => {
    cy.visit("https://automationteststore.com/");

    cy.get("a[href*='?rt=product/category']").contains("Hair Care").click();

    cy.get(".fixed .prdocutname").each((ele, index, list) => {
      //   cy.log("Product in Index: " + index + " is " + ele.text());
      if (ele.text() === "Seaweed Conditioner") cy.wrap(ele).click();
    });
  });
  it("Section 24: Aliases & Invoke", () => {
    cy.visit("https://automationteststore.com/");

    // cy.get("a[href*='?rt=product/category']").contains("Hair Care").click();
    //eq- Get an element at a specific index
    //Alias as we used for later purposes and to perform that we got to use @
    // cy.get(".prdocutname").eq(0).invoke("text").as("prodName");
    ////be.gt is short form of greater than
    // cy.get("@prodName").its("length").should("be.gt", 5);
    // cy.get("@prodName").should("contain", "Seaweed Conditioner");
    // cy.get("@prodName").should("include", "Seaweed Conditioner");

    //Exercise
    cy.get(".thumbnail").as("ListedProd");

    cy.get("@ListedProd").its("length").should("eq", 16);
    cy.get(".thumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });
  it.only("Section 24: combine invoke,alias & iterate", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("ListedProd");
    // cy.get("@ListedProd").find(".oneprice").each((ele,index)=>{
    //         cy.log(ele.text());
    // });
    cy.get(".thumbnail")
      .find(".oneprice")
      .invoke("text")
      .then((e) => {});
  });
});
7;
