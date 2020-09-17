describe('homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders name', () => {
    cy.findAllByText(/toSkoy/).should('exist')
  })
})
