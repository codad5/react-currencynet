
# CUURENCYNET REACT VERSION

> Currencynet is a javascript light framework that helps to convert currency between different html tags

<br/>

## Documentation : Usage

### Installing Currencynet

```bash
npm i currencynet
```

or

```bash
yarn add currencynet
```

### Import Currencynet

 Create a new currencyNet Object

```js
    import { CurrencyNet } from 'currencynet'
```

Now add your the `CurrencyNet` jsx element

```jsx
<CurrencyNet buildCurrency="USD" value={10} isfloat={false} />
```

`buildCurrency` - This can be replaced by any of [ISO 4217 CODE](https://en.wikipedia.org/wiki/ISO_4217) based on the currency used in that element

`value` - This is the value of the element in your build currency

`isfloat` - (optional) - This is an optional parameter that determine if the currency should be returned as a float or not , `default` is true

### Using it in a Component

As seen we will always have to redeclare the `buildCurrency` when using it in a component which can be very exhausting , so for best pratice you can create a default component to be used through out your application

```jsx
import React from 'react'
import {CurrencyNet} from 'currencynet'

//Using props
const MyDollarCurrency = (props) => {
    return (
        <CurrencyNet buildCurrency="USD" value={props.value} />
    )
}
// Using Children
const MyEuroCurrency = ({children}) => {
    return (
        <CurrencyNet buildCurrency="EUR" value={Number(children)} />
    )
}
export default const App = () => {
    return (
        <div class="App">
            <MyDollarCurrency value={10} />
            <MyEuroCurrency>
                10
            </MyEuroCurrency>
        </div>

    )
}
```

### Adding a dropdown option

```html
coming soon
```

### For all Example visit [here](https://playcode.io/952114)

### Table for all avaliable currency class

| COUNTRY | ISO 4217 CODE | CLASSNAME |
| :---: | :---:| :---|
| US Dollar | USD | currencynet-init-usd |
| Indian Rupee | INR | currencynet-init-inr |
| Euro  | EUR | currencynet-init-eur |
| Chinese Yuan | CYN | currencynet-init-cyn |
| Nigerian Naira| NGN | currencynet-init-ngn |

more are avaliable at [our documentation](https://codad5.github.io/currencynet/#country_table)

#### TODO

- [ ] Making a google web crawler to make the application use it own personal currency converter
- [ ] Fix Documentation UI
