import React, { useState } from 'react'
import currencySet from './currencyset.json'
import { setCookie, getCookie } from './cookie'

type currencyCode =
  | (string & 'AFA')
  | 'ALL'
  | 'DZD'
  | 'AOA'
  | 'ARS'
  | 'AMD'
  | 'AWG'
  | 'AUD'
  | 'AZN'
  | 'BSD'
  | 'BHD'
  | 'BDT'
  | 'BBD'
  | 'BYR'
  | 'BEF'
  | 'BZD'
  | 'BMD'
  | 'BTN'
  | 'BTC'
  | 'BOB'
  | 'BAM'
  | 'BWP'
  | 'BRL'
  | 'GBP'
  | 'BND'
  | 'BGN'
  | 'BIF'
  | 'KHR'
  | 'CAD'
  | 'CVE'
  | 'KYD'
  | 'XOF'
  | 'XAF'
  | 'XPF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'KMF'
  | 'CDF'
  | 'CRC'
  | 'HRK'
  | 'CUC'
  | 'CZK'
  | 'DKK'
  | 'DJF'
  | 'DOP'
  | 'XCD'
  | 'EGP'
  | 'ERN'
  | 'EEK'
  | 'ETB'
  | 'EUR'
  | 'FKP'
  | 'FJD'
  | 'GMD'
  | 'GEL'
  | 'DEM'
  | 'GHS'
  | 'GIP'
  | 'GRD'
  | 'GTQ'
  | 'GNF'
  | 'GYD'
  | 'HTG'
  | 'HNL'
  | 'HKD'
  | 'HUF'
  | 'ISK'
  | 'INR'
  | 'IDR'
  | 'IRR'
  | 'IQD'
  | 'ILS'
  | 'ITL'
  | 'JMD'
  | 'JPY'
  | 'JOD'
  | 'KZT'
  | 'KES'
  | 'KWD'
  | 'KGS'
  | 'LAK'
  | 'LVL'
  | 'LBP'
  | 'LSL'
  | 'LRD'
  | 'LYD'
  | 'LTL'
  | 'MOP'
  | 'MKD'
  | 'MGA'
  | 'MWK'
  | 'MYR'
  | 'MVR'
  | 'MRO'
  | 'MUR'
  | 'MXN'
  | 'MDL'
  | 'MNT'
  | 'MAD'
  | 'MZM'
  | 'MMK'
  | 'NAD'
  | 'NPR'
  | 'ANG'
  | 'TWD'
  | 'NZD'
  | 'NIO'
  | 'NGN'
  | 'KPW'
  | 'NOK'
  | 'OMR'
  | 'PKR'
  | 'PAB'
  | 'PGK'
  | 'PYG'
  | 'PEN'
  | 'PHP'
  | 'PLN'
  | 'QAR'
  | 'RON'
  | 'RUB'
  | 'RWF'
  | 'SVC'
  | 'WST'
  | 'SAR'
  | 'RSD'
  | 'SCR'
  | 'SLL'
  | 'SGD'
  | 'SKK'
  | 'SBD'
  | 'SOS'
  | 'ZAR'
  | 'KRW'
  | 'XDR'
  | 'LKR'
  | 'SHP'
  | 'SDG'
  | 'SRD'
  | 'SZL'
  | 'SEK'
  | 'CHF'
  | 'SYP'
  | 'STD'
  | 'TJS'
  | 'TZS'
  | 'THB'
  | 'TOP'
  | 'TTD'
  | 'TND'
  | 'TRY'
  | 'TMT'
  | 'UGX'
  | 'UAH'
  | 'AED'
  | 'UYU'
  | 'USD'
  | 'UZS'
  | 'VUV'
  | 'VEF'
  | 'VND'
  | 'YER'
  | 'ZMK'
const countryCodes: string[] = [
  'AFA',
  'ALL',
  'DZD',
  'AOA',
  'ARS',
  'AMD',
  'AWG',
  'AUD',
  'AZN',
  'BSD',
  'BHD',
  'BDT',
  'BBD',
  'BYR',
  'BEF',
  'BZD',
  'BMD',
  'BTN',
  'BTC',
  'BOB',
  'BAM',
  'BWP',
  'BRL',
  'GBP',
  'BND',
  'BGN',
  'BIF',
  'KHR',
  'CAD',
  'CVE',
  'KYD',
  'XOF',
  'XAF',
  'XPF',
  'CLP',
  'CNY',
  'COP',
  'KMF',
  'CDF',
  'CRC',
  'HRK',
  'CUC',
  'CZK',
  'DKK',
  'DJF',
  'DOP',
  'XCD',
  'EGP',
  'ERN',
  'EEK',
  'ETB',
  'EUR',
  'FKP',
  'FJD',
  'GMD',
  'GEL',
  'DEM',
  'GHS',
  'GIP',
  'GRD',
  'GTQ',
  'GNF',
  'GYD',
  'HTG',
  'HNL',
  'HKD',
  'HUF',
  'ISK',
  'INR',
  'IDR',
  'IRR',
  'IQD',
  'ILS',
  'ITL',
  'JMD',
  'JPY',
  'JOD',
  'KZT',
  'KES',
  'KWD',
  'KGS',
  'LAK',
  'LVL',
  'LBP',
  'LSL',
  'LRD',
  'LYD',
  'LTL',
  'MOP',
  'MKD',
  'MGA',
  'MWK',
  'MYR',
  'MVR',
  'MRO',
  'MUR',
  'MXN',
  'MDL',
  'MNT',
  'MAD',
  'MZM',
  'MMK',
  'NAD',
  'NPR',
  'ANG',
  'TWD',
  'NZD',
  'NIO',
  'NGN',
  'KPW',
  'NOK',
  'OMR',
  'PKR',
  'PAB',
  'PGK',
  'PYG',
  'PEN',
  'PHP',
  'PLN',
  'QAR',
  'RON',
  'RUB',
  'RWF',
  'SVC',
  'WST',
  'SAR',
  'RSD',
  'SCR',
  'SLL',
  'SGD',
  'SKK',
  'SBD',
  'SOS',
  'ZAR',
  'KRW',
  'XDR',
  'LKR',
  'SHP',
  'SDG',
  'SRD',
  'SZL',
  'SEK',
  'CHF',
  'SYP',
  'STD',
  'TJS',
  'TZS',
  'THB',
  'TOP',
  'TTD',
  'TND',
  'TRY',
  'TMT',
  'UGX',
  'UAH',
  'AED',
  'UYU',
  'USD',
  'UZS',
  'VUV',
  'VEF',
  'VND',
  'YER',
  'ZMK',
]
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
  const isfloat = props.isfloat || true,
    shortenCurrency = props.shortenCurrency || false

  const fetchUserLoaction = (): Promise<currencyCode> => {
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
  const getRate = () => {
    // fetch data from https://localhost then return the data
    // if (localStorage.getItem(clientCurrency)) {
    if (getCookie(`${clientDisplay.currency}_${buildCurrency}`)) {
      return new Promise((resolve) => {
        return resolve(getCookie(`${clientDisplay.currency}_${buildCurrency}`))
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

  try {
    fetchUserLoaction().then((currency) => {
      getRate().then((rate) => {
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

  const shorten_number = (number: number): string => {
    if (number < 1000) {
      return number.toString()
    }
    if (number < 1000000) {
      return (number / 1000).toFixed(1) + 'K'
    }
    if (number < 1000000000) {
      return (number / 1000000).toFixed(1) + 'M'
    }
    if (number < 1000000000000) {
      return (number / 1000000000).toFixed(1) + 'B'
    }
    return (number / 1000000000000).toFixed(1) + 'T'
  
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
  const output_display = (clientDisplay: { currency: currencyCode; rate: number; symbol: string; value: number }) => {
    const return_value = `${clientDisplay.symbol} ${
      isfloat
        ? shortenCurrency
          ? shorten_number(clientDisplay.value)
          : Number(value * clientDisplay.rate).toFixed(2)
        : shortenCurrency
        ? shorten_number(Math.trunc(Math.round(Number(clientDisplay.value))))
        : Math.trunc(Math.round(Number(value * clientDisplay.rate)))
    }`
    return return_value
  }
  return <span>{output_display(clientDisplay)}</span>
}
