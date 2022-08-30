import React from 'react'
import ReactDOM from 'react-dom/client'
import { CurrencyNet } from 'currencynet'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>Default counter</h2>
      <CurrencyNet buildCurrency='USD' value={10} isfloat={false} />
    </div>
    <hr />
    <div>
      <h2>Counter with predefined value</h2>
      <CurrencyNet buildCurrency='NPR' value={5} />
    </div>
  </React.StrictMode>,
)
