import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent } from '../testUtils'
import { Home } from '../../pages/index'
import Skoy from 'skoy'

jest.mock('skoy', () => {
  return { convert: jest.fn(() => 'mocked') }
})

afterEach(() => {
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

    Skoy.convert.mockImplementationOnce(() => 'ศ')
    fireEvent.keyDown(getByTestId('input'), { key: 'ส', code: 'KeyM' })
    expect(getByTestId('output')).toHaveDisplayValue(['ศ'])
    expect(Skoy.convert).toHaveBeenCalledTimes(1)

    Skoy.convert.mockImplementationOnce(() => 'เธฮชื่ฮอ่รั๊ย')
    fireEvent.change(getByTestId('input'), { target: { value: 'เธอชื่ออะไร' } })
    expect(getByTestId('output')).toHaveDisplayValue(['เธฮชื่ฮอ่รั๊ย'])
    expect(Skoy.convert).toHaveBeenCalledTimes(2)
  })

  it('calls react copy to clipboard when pressing the button', () => {
    const { getByRole, getByTestId } = render(<Home />, {})

    fireEvent.click(getByRole('button', { name: 'ก๊อป' }))
    expect(getByTestId('message')).toHaveTextContent('ก๊อปเร่รฬฬษ์')

    fireEvent.keyDown(getByTestId('input'), { key: 'ส', code: 'KeyM' })
    expect(getByTestId('message')).toBeEmptyDOMElement()
  })
})
