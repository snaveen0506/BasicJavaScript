/// <reference types="Cypress"/>

describe("Test mouse actions", () => {
  it("scroll into view", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("#actions").invoke("removeAttr", "target").scrollIntoView().click();
  });
  it("drag and drop", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("#actions").invoke("removeAttr", "target").scrollIntoView().click();
    //remove target attr from element is used to handle multiple windows.
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    //which: 1- indicates left mouse button
    //mousedown- the initial click on the source element.
    //mouseover- the dragging motion to the target element.
    //mouseup- releasing the mouse button to drop the element.
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });
  it("double click", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("#actions").invoke("removeAttr", "target").scrollIntoView().click();
    cy.get("#double-click").dblclick();
  });
  it.only("click and hold", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("#actions").invoke("removeAttr", "target").scrollIntoView().click();
    cy.get("#click-box")
      .trigger("mousedown", { which: 1 })
      .then((t) => {
        expect(t).to.have.css("background-color", "rgb(0, 255, 0)");
      });
  });
});
