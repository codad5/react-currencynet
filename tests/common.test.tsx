import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { CurrencyNet } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<CurrencyNet buildCurrency='USD' value={20} />)
  })
})
