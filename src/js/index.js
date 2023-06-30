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

function printResult(response, dollarInput, currencyInput) {
    let conversionRate = response.conversion_rates[`${currencyInput}`];
    let resultConversion = calculateConversion(dollarInput, conversionRate);
    resultStatement.innerText = `$${dollarInput}(USD) is about ${resultConversion}(${currencyInput})`;
}

function printError(error) {
    resultStatement.innerText = `We were unable to process the data at this time because of an ${error}`;
}

function handleForm(event) {
    event.preventDefault();
    let dollarInput = document.querySelector("#USD").value;
    let currencyInput = document.querySelector("#currencies").value;
    processExchangeData(dollarInput, currencyInput);
}

document.querySelector("#convertForm").addEventListener("submit", handleForm);

