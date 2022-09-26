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
  if (number < 1000000) {
    return (number / 1000).toFixed(float) + 'K'
  }
  if (number < 1000000000) {
    return (number / 1000000).toFixed(float) + 'M'
  }
  if (number < 1000000000000) {
    return (number / 1000000000).toFixed(float) + 'B'
  }
  return (number / 1000000000000).toFixed(float) + 'T'

  // switch (true) {
  //   case number >= 1000000000:
  //     return (number / 1000000000).toFixed(1) + 'B'
  //   case number >= 1000000:
  //     return (number / 1000000).toFixed(1) + 'M'
  //   case number >= 1000:
  //     return (number / 1000).toFixed(1) + 'K'
  //   default:
  //     return number.toString()
  // }
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
        ? shorten_number(clientDisplay.value)
        : Number(value * clientDisplay.rate).toFixed(2)
      : shortenCurrency
      ? shorten_number(Math.trunc(Math.round(Number(clientDisplay.value))), 0)
      : Math.trunc(Math.round(Number(value * clientDisplay.rate)))
  }`
  return return_value
}
