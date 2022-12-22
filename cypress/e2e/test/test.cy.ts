/// <reference types="cypress" />

describe("Run tests on the calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("check if the default value is 0", () => {
    cy.get(".screen").should("have.text", "0");
  });
  // Plus Operator
  it("test the plus operator", () => {
    cy.get("button.1").click();
    cy.get("button.7").click();
    cy.get("button.plus").click();
    cy.get("button.1").click();
    cy.get("button.7").click();
    cy.get("button.equals").click();
    cy.get(".screen").should("have.text", "34");
  });
  // Multiply Operator
  it("test the multiply operator", () => {
    cy.get("button.1").click();
    cy.get("button.7").click();
    cy.get("button.multiply").click();
    cy.get("button.1").click();
    cy.get("button.7").click();
    cy.get("button.equals").click();
    cy.get(".screen").should("have.text", "289");
  });
  // Minus Operator
  it("test the minus operator", () => {
    cy.get("button.1").click();
    cy.get("button.7").click();
    cy.get("button.minus").click();
    cy.get("button.1").click();
    cy.get("button.7").click();
    cy.get("button.equals").click();
    cy.get(".screen").should("have.text", "0");
  });
  // Division Operator
  it("test the division operator", () => {
    cy.get("button.1").click();
    cy.get("button.7").click();
    cy.get("button.divide").click();
    cy.get("button.1").click();
    cy.get("button.7").click();
    cy.get("button.equals").click();
    cy.get(".screen").should("have.text", "1");
  });
  // Reset Button
  it("test the reset button", () => {
    cy.get("button.1").click();
    cy.get("button.7").click();
    cy.get("button.reset").click();
    cy.get(".screen").should("have.text", "0");
  });
  // Delete Button
  it("test the delete button", () => {
    cy.get("button.1").click();
    cy.get("button.7").click();
    cy.get("button.deleteBtn").click();
    cy.get(".screen").should("have.text", "1");
  });
  // The Dot Notation Operator
  it("test the dot button", () => {
    cy.get("button.1").click();
    cy.get("button.7").click();
    cy.get("button.dot").click();
    cy.get("button.1").click();
    cy.get("button.7").click();
    cy.get("button.plus").click();
    cy.get("button.1").click();
    cy.get("button.7").click();
    cy.get("button.equals").click();
    cy.get(".screen").should("have.text", "34.17");
  });
});
