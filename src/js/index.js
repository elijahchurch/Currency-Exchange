import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/styles.css";
import exchangeService from './exchangeService';

function processExchangeData(dollarInput, currencyInput) {
    exchangeService.getExchangeRates()
        .then(function (response) {
            if (response.conversion_rates) {
                printResult(response, dollarInput, currencyInput);
            } else {
                printError(error)
            }
        });
}

let resultStatement = document.querySelector("#result");

function printResult(response, dollarInput, currencyInput) {

}

function printError(error) {
    resultStatement.innerText = `We were unable to process the data at this time because of an error: ${error}`;
}

function handleForm(event) {
    event.preventDefault();
    let dollarInput = document.querySelector("#USD").value
    let currencyInput = document.querySelector("#currencies").value
    processExchangeData(dollarInput, currencyInput);

}

document.querySelector("#convertForm").addEventListener("submit", handleForm);

