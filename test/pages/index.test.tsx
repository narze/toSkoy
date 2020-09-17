import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent } from '../testUtils'
import { Home } from '../../pages/index'

jest.mock('skoy', () => {
  return {
    convert: jest.fn(() => "สวัศดลียร์")
  }
})

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('calls Skoy.convert on button click', () => {
    const { getByTestId, getByText } = render(<Home />, {})

    fireEvent.change(getByTestId('input'), { target: { value: "สวัสดี" }})
    fireEvent.click(getByText('แปลงเป็นภาษาสก๊อย'))
    expect(getByTestId('output')).toHaveDisplayValue(["สวัศดลียร์"])
  })
})
