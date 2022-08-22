import React, { useState, useEffect } from 'react'
import currencySet from './currencyset.json'

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
}

export default function CurrencyNet(props: ExampleProps) {
  const buildCurrency: currencyCode = countryCodes.includes(props.buildCurrency) ? props.buildCurrency : 'USD'
  const [rate, setRate] = useState(1)
  const [clientCurrency, setClientCurrency] = useState(props.buildCurrency)
  const symbols = currencySet[clientCurrency].symbol
  const value: number = props.value

  const fetchUserLoaction = () => {
    if (!navigator.geolocation) {
      return false
    }
    return fetch(`https://ipapi.co/json/`)
      .then((res) => res.json())
      .then((res) => {
        setClientCurrency(res.currency)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const getRate = () => {
    // fetch data from https://localhost then return the data
    return fetch(`https://lovely-puce-shoulder-pads.cyclic.app/${buildCurrency}/${clientCurrency}`)
      .then((res) => res.json())
      .then((res) => {
        setRate(res.conversion_rate)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    try {
      fetchUserLoaction()

      getRate()
    } catch (error) {
      console.log(error)
    }
  }, [props])
  return (
    <span>
      {symbols} {Number(value) * Number(rate)}
    </span>
  )
}
