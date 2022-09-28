import { setCookie, getCookie } from './cookie'
import { currencyCode } from './types'

export const fetchUserLoaction = (): Promise<currencyCode> => {
  return getCookie('userLocation')
    ? Promise.resolve(getCookie('userLocation'))
    : fetch(`https://ipapi.co/json/`)
        .then((res) => res.json())
        .then((res) => {
          // console.log(res.currency)
          // setClientCurrency(res.currency)
          setCookie('userLocation', res.currency, 1)
          return res.currency
        })
        .catch((err) => {
          console.log(err)
          return 'USD'
        })
}
export const getRate = (clientDisplay: { currency: currencyCode }, buildCurrency: currencyCode): Promise<number> => {
  // fetch data from https://localhost then return the data
  // if (localStorage.getItem(clientCurrency)) {
  const data: number = parseInt(getCookie(`${clientDisplay.currency}_${buildCurrency}`))
  if (getCookie(`${clientDisplay.currency}_${buildCurrency}`) !== '') {
    return new Promise((resolve) => {
      return resolve(data)
    })
  }
  return fetch(`https://lovely-puce-shoulder-pads.cyclic.app/${buildCurrency}/${clientDisplay.currency}/`)
    .then((res) => res.json())
    .then((res) => {
      // console.log(res.conversion_rate)
      // setRate(res.conversion_rate)
      // localStorage.setItem(clientCurrency, res.conversion_rate)
      setCookie(`${clientDisplay.currency}_${buildCurrency}`, res.conversion_rate, 1)
      return res.conversion_rate
    })
    .catch((err) => {
      console.log(err)
      return false
    })
}

export const shorten_number = (number: number, float = 2): string => {
  if (number < 1000) {
    return number.toString()
  }
  let value: number = number
  let suffix = ''
  if (number < 1000000) {
    value = number / 1000
    suffix = 'K'
  } else if (number < 1000000000) {
    value = number / 1000000
    suffix = 'M'
  } else if (number < 1000000000000) {
    value = number / 1000000000
    suffix = 'B'
  } else {
    return (number / 1000000000000).toFixed(float) + 'T'
  }
  return float > 0 ? value.toFixed(float) + suffix : Math.round(value) + suffix
}

export const output_display = (
  clientDisplay: { currency: currencyCode; rate: number; symbol: string; value: number },
  value: number,
  isfloat = true,
  shortenCurrency = true,
) => {
  const return_value = `${clientDisplay.symbol} ${
    isfloat
      ? shortenCurrency
        ? shorten_number(value * clientDisplay.rate)
        : Number(value * clientDisplay.rate).toFixed(2)
      : shortenCurrency
      ? shorten_number(Math.trunc(Math.round(Number(value * clientDisplay.rate))), 0)
      : Math.trunc(Math.round(Number(value * clientDisplay.rate)))
  }`
  return return_value
}
