import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { CurrencyNet, NumberShortener, CurrencyConverter } from '../src'

describe('CurrencyNet converter', () => {
  it('renders without crashing', () => {
    render(<CurrencyNet buildCurrency='USD' value={20} />)
  })
})
describe('NumberShortener render', () => {
  it('renders without crashing', () => {
    render(<NumberShortener value={20} />)
  })
})
describe('CurrencyConverter render', () => {
  it('renders without crashing', () => {
    render(<CurrencyConverter from={'USD'} to={'NGN'} value={20} />)
  })
})
