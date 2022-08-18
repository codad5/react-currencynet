import React, {useState, useEffect}  from 'react';
import {currencySet, countryset, countryCodes} from './externals'

interface ExampleProps extends React.HTMLAttributes<HTMLDivElement> {
    buildCurrency: String,
    value: Number
}



export default function CurrencyNet(props: ExampleProps) {
    const buildCurrency : String = props.buildCurrency
    const [rate, setRate] = useState(1);
    const [clientCurrency, setClientCurrency] = useState(props.buildCurrency)
    const [symbols, setSymbols] = useState(currencySet[clientCurrency].symbol)

    const fetchUserLoaction = async () => {
        if(!navigator.geolocation){
            return false;
        }
        fetch(`https://ipapi.co/json/`)
        .then(res => res.json())
        .then(res => {
            setClientCurrency(res.currency)
        })
        .catch(err => {
            console.log(err)
        }

    
        
    }
    const getRate = async () => {
        // fetch data from https://localhost then return the data
        await fetch(`https://lovely-puce-shoulder-pads.cyclic.app/${buildCurrency}/${clientCurrency}`)
        .then(res => res.json())
        .then(res => {
            setRate(res.conversion_rate)
        }).catch(err => {
            console.log(err)
        }
    )
        

    useEffect(() => {
        fetchUserLoaction()
        

    }, [count]);
    return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        </div>
    );
    }