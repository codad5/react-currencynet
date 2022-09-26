import React, { useState } from 'react'
import currencySet from './currencyset.json'
import { currencyCode } from './types'
import { countryCodes } from './assets'
import { fetchUserLoaction, getRate, shorten_number } from './Helpers'

interface ExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  buildCurrency: currencyCode
  value: number
  isfloat?: boolean
  shortenCurrency?: boolean
}

export default function CurrencyNet(props: ExampleProps) {
  const buildCurrency: currencyCode = countryCodes.includes(props.buildCurrency) ? props.buildCurrency : 'USD'
  // const [rate, setRate] = useState(1)
  // const [clientCurrency, setClientCurrency] = useState(props.buildCurrency)
  const [clientDisplay, setClientDisplay] = useState({
    currency: props.buildCurrency,
    rate: 1,
    symbol: currencySet[props.buildCurrency].symbol,
    value: props.value,
  })
  // const symbols = currencySet[clientCurrency].symbol
  const value: number = props.value
  const isfloat = props.isfloat ?? true,
    shortenCurrency = props.shortenCurrency ?? false

  try {
    fetchUserLoaction().then((currency) => {
      getRate(clientDisplay, buildCurrency).then((rate) => {
        // console.log(rate)
        if (rate && currency) {
          // setRate(rate)
          // setClientCurrency(currency)
          setClientDisplay((prev) => {
            return { currency: currency, rate: rate, symbol: currencySet[currency].symbol, value: rate * prev.value }
          })
        }
      })
    })
  } catch (error) {
    console.log(error)
  }

  const output_display = (clientDisplay: { currency: currencyCode; rate: number; symbol: string; value: number }) => {
    const return_value = `${clientDisplay.symbol} ${
      isfloat
        ? shortenCurrency
          ? shorten_number(clientDisplay.value)
          : Number(value * clientDisplay.rate).toFixed(2)
        : shortenCurrency
        ? shorten_number(Math.trunc(Math.round(Number(clientDisplay.value))), 0)
        : Math.trunc(Math.round(Number(value * clientDisplay.rate)))
    }`
    return return_value
  }
  return <span>{output_display(clientDisplay)}</span>
}
