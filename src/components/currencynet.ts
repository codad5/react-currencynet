
import {currencySet, countryset, countryCodes} from './externals'
class currrencyNet{
    default_rate = 1;
    client_currency: String
    build_currency: String
    float_precision: Boolean
    default_classname: "currencynet-init" = "currencynet-init";
    constructor(build_currency : String , float_precision : Boolean){
        this.client_currency = build_currency;
        this.build_currency = build_currency;
        this.float_precision = float_precision;
    
        

        
    }
    async getRate(){
        // fetch data from https://localhost then return the data
        const response = await fetch(`https://lovely-puce-shoulder-pads.cyclic.app/${this.build_currency}/${this.client_currency}`);
        const data = await response.json();
        this.rate = data.conversion_rate;
        return data.conversion_rate;
    }
    async fetchUserLoaction(){
        if(!navigator.geolocation){
            return false;
        }
        const response = await fetch(`https://ipapi.co/json/`);
        const data = await response.json();
        this.user_location = data;
        this.client_currency = data.currency;
        return data;
        
    }
    async getRateFrom(from_currency){
        // fetch data from https://localhost then return the data
        const response = await fetch(`https://lovely-puce-shoulder-pads.cyclic.app/${from_currency}/${this.client_currency}`);
        const data = await response.json();
        this.rate = data.conversion_rate;
        return data.conversion_rate;
    }
    reWriteElement(element, rate){
        let v = element.dataset.currencynetValue || element.innerHTML;
        v = this.float_precision ? parseFloat(v).toFixed(2) : parseInt(v);
        console.log(v, this.client_currency, this.build_currency, currencySet[this.client_currency].symbol);
        const client_currency_logo = currencySet[this.client_currency].symbol;
        if(v && v !== "NaN"){
            element.innerHTML = `${client_currency_logo} ${v * rate}`;
        }
        else{
            console.log(`${v} is not a number in Element with classname ${element.className}`);
            element.innerHTML = `${client_currency_logo} 0`;
        }
        
    }
    selectCurrency(){
        // change client currency depending on select input
        const select = document.querySelector(".currencynet-select");
        // add eventListener to select input
        select.addEventListener("change", async () => {
            this.client_currency = select.value;
            this.default_rate = await this.getRate();
            this.default_element.forEach(element => {
                this.reWriteElement(element, this.default_rate);
            } );
            //loop through all country codes and rewrite the elements
            countryCodes.forEach(async (code) => {
                const rate = await this.getRateFrom(code);
                const elements = document.querySelectorAll(`.currencynet-init-${code}`);
                elements.forEach(element => {
                    this.reWriteElement(element, rate);
                } );
            });

        });
        
        
    }
    async reWrite(desired_currency = false){
        const client_info = await this.fetchUserLoaction();
        if (desired_currency){
            this.client_currency = desired_currency;
        }
        this.default_rate = await this.getRate();
        this.default_element.forEach(element => {
            this.reWriteElement(element, this.default_rate);
        });
        countryCodes.forEach(code => {
            const element = document.querySelectorAll(`.currencynet-init-${code.toLowerCase()}`);
            if(element){
                element.forEach(el => {
                    this.getRateFrom(code).then(rate => {
                        this.reWriteElement(el, rate);
                    });
                });
            }
        });
    }

}
