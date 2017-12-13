describe("Cypress tests", () => {
  it("loads", () => {
    cy.visit("http://localhost:3000/")
  })

  it("works with local fetch without stubbing", () => {
    cy.get("#btn2").click()
    cy.get(".App-header").contains("title from public")
  })

  it("works with local fetch stubbed", () => {
    cy.server()
    cy
      .route(/mock/, {
        title: "local title",
      })
      .as("getLocal")

    cy.get("#btn2").click()

    cy
      .wait("@getLocal")
      .its("status")
      .should("eq", 200)

    cy.get("@getLocal").then(xhr => {
      expect(xhr.responseBody).to.have.property("title", "local title")
    })
    cy.get(".App-header").contains("local title")
  })

  it("works with remote fetch without stubbing", () => {
    cy.get("#btn1").click()
    cy
      .get(".App-header")
      .contains(
        "unt aut facere repellat provident occaecati excepturi optio reprehenderit"
      )
  })

  it("works with remote fetch stubbed", () => {
    cy.server()
    cy
      // .route("https://jsonplaceholder.typicode.com/posts/1", {
      // .route(/posts/, {
      .route("/posts/*", {
        title: "remote title",
      })
      .as("getRemote")

    cy.get("#btn1").click()

    cy
      .wait("@getRemote")
      .its("status")
      .should("eq", 200)

    cy.get("@getRemote").then(xhr => {
      expect(xhr.responseBody).to.have.property("title", "remote title")
      cy.get(".App-header").contains("remote title")
    })
  })
})
