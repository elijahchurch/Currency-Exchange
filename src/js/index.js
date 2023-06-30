import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/styles.css";
import exchangeService from './exchangeService';

function processExchangeData() {
    exchangeService.getExchangeRates()
    // .then(function (response) {
    //     if (response.conversion_rates) {
    //         printResult(response);
    //     } else {
    //         printError(response)
    //     }
    // });
}

// function printResult(response) {

// }

// function printError(response) {

// }

function handleForm(event) {
    event.preventDefault();
    processExchangeData();

}

document.querySelector("#convertForm").addEventListener("submit", handleForm);

