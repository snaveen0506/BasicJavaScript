/// <reference types="Cypress"/>

describe("Parse the Cat response and validate against content", () => {
  before(() => {
    cy.visit("https://cat-fact.herokuapp.com/#/");
    cy.get('[ng-click="openApp()"]').click();
  });
  it("Navigate to the herokuapp website & click on Open App", () => {
    cy.intercept({
      method: "GET",
      url: "https://cat-fact.herokuapp.com/facts?animal_type=cat",
    }).as("result");
    let facts: string[] = [];
    cy.get('.grid-col--1 > [style=""] > .ng-binding')
      .invoke("text")
      .then((t) => facts.push(t.trim()));
    cy.get('.grid-col--2 > [style=""] > .ng-binding')
      .invoke("text")
      .then((t) => facts.push(t.trim()));
    cy.get(".grid-col--4 > .grid-item > .ng-binding")
      .invoke("text")
      .then((t) => facts.push(t.trim()));
    cy.get(".grid-col--1 > :nth-child(2) > .ng-binding")
      .invoke("text")
      .then((t) => facts.push(t.trim()));
    cy.get(".grid-col--2 > :nth-child(2) > .ng-binding")
      .invoke("text")
      .then((t) => facts.push(t.trim()));
    cy.wait("@result").then((res) => {
      let result: Array<{ text: string }> = res.response?.body;
      //In the line let result = res.response?.body;, the optional chaining operator(.?) is used to access the
      //body property of the response object only if response is not null or undefined. If response is null or undefined,
      //return undefined instead of throwing an error.
      result.forEach((ele, index) => {
        expect(ele.text).equal(facts[index]);
      });
      //another way
      // let fact1: string;
      // cy.get('.grid-col--1 > [style=""] > .ng-binding')
      //   .invoke("text")
      //   .then((t) => (fact1 = t.trim()));
      // let fact2: string;
      // cy.get('.grid-col--2 > [style=""] > .ng-binding')
      //   .invoke("text")
      //   .then((t) => (fact2 = t.trim()));
      // let fact3: string;
      // cy.get(".grid-col--4 > .grid-item > .ng-binding")
      //   .invoke("text")
      //   .then((t) => (fact3 = t.trim()));
      // let fact4: string;
      // cy.get(".grid-col--1 > :nth-child(2) > .ng-binding")
      //   .invoke("text")
      //   .then((t) => (fact4 = t.trim()));
      // let fact5: string;
      // cy.get(".grid-col--2 > :nth-child(2) > .ng-binding")
      //   .invoke("text")
      //   .then((t) => (fact5 = t.trim()));
      // cy.wait("@result").then((res) => {
      //   let result: Array<{ text: string }> = res.response?.body;
      //   result.forEach((ele, index) => {
      //     expect(ele.text).equal(eval("fact" + `${index + 1}`));
      //     //eval("fact" + ${index + 1}) becomes eval("fact1"), which retrieves the value of the variable fact1.
      //   });
      // });
    });
  });
});
