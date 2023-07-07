import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/styles.css";
import exchangeService from './exchangeService';
import calculateConversion from './calculator';

function processExchangeData(dollarInput, currencyInput) {
    exchangeService.getExchangeRates()
        .then(function (response) {
            if (response.conversion_rates) {
                printResult(response, dollarInput, currencyInput);
            } else {
                printError(response);
            }
        });
}

let resultStatement = document.querySelector("#result");
const inputForm = document.querySelector("#convertForm");

function printResult(response, dollarInput, currencyInput) {
    if (response.conversion_rates[currencyInput]) {
        let conversionRate = response.conversion_rates[currencyInput];
        let resultConversion = calculateConversion(dollarInput, conversionRate);
        let formattedDollar = new Intl.NumberFormat().format(dollarInput);
        let formattedResult = new Intl.NumberFormat().format(resultConversion);
        resultStatement.innerText = `$${formattedDollar}(USD) is about ${formattedResult}(${currencyInput}).`;
    } else {
        const link = document.createElement("a");
        link.innerText = " exchangerate-api";
        link.setAttribute("href", "https://www.exchangerate-api.com/docs/supported-currencies");
        resultStatement.innerText = `${currencyInput} is not a valid currency type. Please check this link to see a list of all supported currencies:`
        resultStatement.append(link);
    }
}

function printError(error) {
    resultStatement.innerText = `We were unable to process the data at this time: ${error}`;
}

function handleForm(event) {
    event.preventDefault();
    let dollarInput = document.querySelector("#USD").value;
    let currencyInput = document.querySelector("#currencies").value;
    processExchangeData(dollarInput, currencyInput);
    inputForm.reset();
    document.querySelector("#show").removeAttribute("class", "hidden");
}

inputForm.addEventListener("submit", handleForm);

