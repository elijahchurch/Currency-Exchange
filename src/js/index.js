import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/styles.css";
import exchangeService from './exchangeService';

function processExchangeData() {
    exchangeService.getExchangeRates()
    // .then(function (response) {
    //     if (response.conversion_rates) {
    //         printResult(response, dollarInput, currencyInput);
    //     } else {
    //         printError(response)
    //     }
    // });
}

// let resultStatement = document.querySelector("#result");

// function printResult(response, dollarInput, currencyInput) {

// }

// function printError(response) {
//     resultStatement.innerText = `We were unable to process the data at this time because of an error: ${response}`;
// }

function handleForm(event) {
    event.preventDefault();
    let dollarInput = document.querySelector("#USD").value
    let currencyInput = document.querySelector("#currencies").value
    console.log(dollarInput, currencyInput);
    processExchangeData();

}

document.querySelector("#convertForm").addEventListener("submit", handleForm);

