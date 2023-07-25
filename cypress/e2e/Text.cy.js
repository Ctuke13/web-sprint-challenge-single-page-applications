describe("Text", () => {
  it("can add name to name input", () => {
    cy.visit("/");
    cy.get("a[data-cy='pizza']").click();
    cy.get("input[data-cy='name']").type("CT").should("have.value", "CT");
  });

  it("can check multiple toppings", () => {
    cy.visit("/");
    cy.get("a[data-cy='pizza']").click();
    cy.get("input[data-cy='pepperoni']").click().should("be.checked");
    cy.get("input[data-cy='sausage']").click().should("be.checked");
    cy.get("input[data-cy='jalepenos']").click().should("be.checked");
    cy.get("input[data-cy='mushrooms']").click().should("be.checked");
  });

  it("can submit form", () => {
    cy.visit("/");
    cy.get("a[data-cy='pizza']").click();
    cy.get("button[data-cy='order-button']").click();
  });
});
