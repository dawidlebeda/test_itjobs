describe("web loading", () => {
  it("web", () => {
    cy.visit("/");

    cy.get(".col-sm-3 > #keywords").type("tester");

    cy.get(":nth-child(2) > .select > select").select("2");

    cy.get(":nth-child(3) > .select > select").select("10");

    cy.get(".col-sm-1").click();

    cy.get(":nth-child(4) > .nazev > h2 > a > strong").click();

    cy.get(
      ".col-md-2-5 > .job-actions > .grids > :nth-child(1) > .table-area > .table > .table-cell"
    ).click();

    cy.get("#jmeno").type("Dawid");

    cy.get("#prijmeni").type("Lebeda");

    cy.get("#narozeni").type("16.5.1994");

    cy.get("#mobil").type("724560122");

    cy.get("#email").type("dawid.lebeda@gmail.com");

    cy.get(".form-group > .form-control").type(
      "Dobrý den. Jmenuji se Dawid Lebeda a chci pro Vaší firmu pracovat jako Tester."
    );

    cy.get("#file1 > .form-control").selectFile(
      "cypress/fixtures/Lebeda-Tester.pdf"
    );

    /* cy.get("#file1 > .form-control").selectFile(
      "cypress/fixtures/Lebeda-Tester.pdf",
      { action: "drag-drop" }
    ); */

    cy.get(".checkbox > label").click();

    cy.get("#spam").type("????");

    cy.get("#cookies-consent-agree").click();
  });
});
