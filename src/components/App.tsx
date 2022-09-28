import React, { useState } from 'react'
import currencySet from './currencyset.json'
import { currencyCode } from './types'
import { countryCodes } from './assets'
import { fetchUserLoactionCurrencyCode, getRate, output_display, shorten_number } from './Helpers'

interface CurrencyNetProps extends React.HTMLAttributes<HTMLDivElement> {
  buildCurrency: currencyCode
  value: number
  isfloat?: boolean
  shortenCurrency?: boolean
}
interface ConverterProps extends React.HTMLAttributes<HTMLDivElement> {
  from: currencyCode
  to: currencyCode
  value: number
  isfloat?: boolean
  shortenCurrency?: boolean
}
interface NumberShortenerProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  isfloat?: boolean
  precision?: number
}

export function CurrencyNet(props: CurrencyNetProps) {
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
    fetchUserLoactionCurrencyCode().then((currency) => {
      getRate(buildCurrency, clientDisplay.currency).then((rate) => {
        // console.log(rate)
        if (rate && currency) {
          // setRate(rate)
          // setClientCurrency(currency)
          setClientDisplay(() => {
            return { currency: currency, rate: rate, symbol: currencySet[currency].symbol, value: rate * props.value }
          })
        }
      })
    })
  } catch (error) {
    console.log(error)
  }

  return <span>{output_display(clientDisplay, value, isfloat, shortenCurrency)}</span>
}
export function CurrencyConverter(props: ConverterProps) {
  const buildCurrency: currencyCode = countryCodes.includes(props.from) ? props.from : 'USD'
  const ClientCurrency: currencyCode = countryCodes.includes(props.to) ? props.to : 'USD'
  // const [rate, setRate] = useState(1)
  // const [clientCurrency, setClientCurrency] = useState(props.buildCurrency)
  const [clientDisplay, setClientDisplay] = useState({
    currency: props.from,
    rate: 1,
    symbol: currencySet[props.from].symbol,
    value: props.value,
  })
  // const symbols = currencySet[clientCurrency].symbol
  const value: number = props.value
  const isfloat = props.isfloat ?? true,
    shortenCurrency = props.shortenCurrency ?? false

  try {
    // fetchUserLoaction().then((currency) => {
    getRate(buildCurrency, props.to).then((rate) => {
      // console.log(rate)
      if (rate && ClientCurrency) {
        // setRate(rate)
        // setClientCurrency(currency)
        setClientDisplay((prev) => {
          return { currency: props.to, rate: rate, symbol: currencySet[props.to].symbol, value: rate * prev.value }
        })
      }
    })
    // })
  } catch (error) {
    console.log(error)
  }

  return <span>{output_display(clientDisplay, value, isfloat, shortenCurrency)}</span>
}
export function NumberShortener(props: NumberShortenerProps) {
  const value: number = props.value
  const precision = props.precision ?? 2
  const float: number = props.isfloat ? precision : 0

  return <span>{shorten_number(value, float)}</span>
}
