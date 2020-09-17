describe('homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders heading', () => {
    cy.findByText(/Welcome to/i).should('exist')
    cy.findByRole('link', { name: 'Next.js!' }).should('exist')

    cy.findByTestId('subtitle').within(() => {
      cy.findByText(/TypeScript/i).should('exist')
      cy.findByText(/ESLint/i).should('exist')
      cy.findByText(/Jest/i).should('exist')
      cy.findByText(/TailwindCSS/i).should('exist')
      cy.findByText(/Emotion/i).should('exist')
      cy.findByText(/Cypress/i).should('exist')
    })

    cy.findByRole('button', { name: 'Emotion CSS' }).click()
    cy.findByRole('button', { name: 'Emotion React' }).click()
    cy.findByRole('button', { name: 'Chakra-UI' }).click()
  })
})
