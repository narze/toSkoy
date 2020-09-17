import React from 'react'
import { render } from '../testUtils'
import { Home } from '../../pages/index'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders with buttons alert', () => {
    const { getByText } = render(<Home />, {})

    getByText('Emotion CSS')
    getByText('Emotion React')
    getByText('Chakra-UI')
  })
})
