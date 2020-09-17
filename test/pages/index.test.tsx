import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent } from '../testUtils'
import { Home } from '../../pages/index'
import Skoy from 'skoy'

jest.mock('skoy', () => {
  return { convert: jest.fn(() => 'สวัศดลียร์') }
})

afterAll(() => {
  Skoy.convert.mockClear()
})

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders default input & output', () => {
    const { getByTestId } = render(<Home />, {})

    expect(getByTestId('input')).toHaveDisplayValue(['สวัสดี'])
    expect(getByTestId('output')).toHaveDisplayValue(['ษวัษดลีร์'])
  })

  it('calls Skoy.convert on input type & change', () => {
    const { getByTestId } = render(<Home />, {})

    fireEvent.keyDown(getByTestId('input'), { key: 'ส', code: 'KeyM' })
    expect(getByTestId('output')).toHaveDisplayValue(['สวัศดลียร์'])
    expect(Skoy.convert).toHaveBeenCalledTimes(1)

    fireEvent.change(getByTestId('input'), { target: { value: 'สวัสดี' } })
    expect(getByTestId('output')).toHaveDisplayValue(['สวัศดลียร์'])
    expect(Skoy.convert).toHaveBeenCalledTimes(1)
  })
})
