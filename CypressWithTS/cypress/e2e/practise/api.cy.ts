/// <reference types="Cypress"/>

describe("API Integration", () => {
  let result;
  it("getRequest", () => {
    result = cy.request("https://reqres.in/api/users");
    result.its("status").should("equal", 200);
  });
  it("Validate key and values", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users/2",
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));
      cy.log(body);
      expect(response.status).to.eql(200);
      expect(body.data.first_name).has.equal("Janet");
      expect(body.support["url"]).has.equal(
        "https://reqres.in/#support-heading"
      );

      //   body.forEach((ele: any) => {
      //     expect(ele).to.have.all.keys("id", "email", "");
      //   });
    });
  });
});
