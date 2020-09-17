describe('homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders heading', () => {
    cy.findByText(/toSkoy/).should('exist')
  })
})
