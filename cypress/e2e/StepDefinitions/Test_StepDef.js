import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("request for estimating age of a single name", () => {
  cy.request({
    method: "GET",
    url: "/?",
    qs: { name: "billybob" },
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.age).to.eq(59);
  });
});

When("request for estimation accuracy with localization", () => {
  cy.request({
    method: "GET",
    url: "/?",
    qs: { name: "John", country_id: "US" },
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.age).to.eq(67);
    expect(response.body.country_id).to.eq("US");
  });
});

Then("request for estimating the age of multiple names", () => {
  cy.request({
    method: "GET",
    url: "/?",
    qs: { name: "billybob", name: "john", name: "jane" },
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).has(3);
    expect(response.body[0]).have.property("name", "billybob");
    expect(response.body[1]).have.property("name", "john");
    expect(response.body[2]).have.property("name", "jane");
  });
});
