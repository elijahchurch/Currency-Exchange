#  Currency-Exchange

#### By: Jason Elijah Church

#### A webpage that will convert a US dollar amount to a selected currency.

## Technologies Used

* HTML
* JavaScript
* Markdown
* CSS
* Git Bash
* Visual Code Studio
* Node Package Manager
* Webpack
* ESLint
* Jest
* Babel
* ExchangeRate-API
* Postman (for testing the API calls)

## Description:
This application when fully built displays a webpage created and styled with HTML and CSS. It contains a form that takes two data values: the amount in US dollars that the user wants to convert and the currency the user wants it converted to. The dollar amount is taken from a number input and the currency is selected from a drop-down selector. When the user hits submit, a handleForm event occurs through JavaScript. The handle form event stores two inputed values as variables for use: dollarInput --> the US dollar amount as a number, and inputCurrency --> value is listed as a 3-digit country code in the chosen option element. An API call is made to retrieve a JSON response object that contains all the current conversation rates for different countries to USD. A printResult function will then run. It retreives the conversation rate by looking into response.conversation_rates and accessing the desired property there by inputting the stored inputCurrency code. A calculateConversion function then runs that multiplies the dollarInput by the targeted conversation_rate and returns the result as a string to the hundredth decimal point. The inner text of a targeted p element in the DOM  will then display a message that states the dollar input and what its conversation (equal to the result taken from the calculateConverstion function) is to the selected country's currency. If the API call is unsuccessful, an error message will display as the inner text of targeted p element in the DOM in the HTML.

## Setup/ Installation Requirements

* Clone this repository to your desktop.
* In the topmost directory of the project, open up all of the code using Visual Code Studio or a similar application to view the written code.
* If you have Node Package Manager installed on your computer and are running v16.13.1, you can enter npm install in your console while you are in the topmost directory of the project to install all the listed plug-ins in the package.json.
* To run any of the listed tests, type in npm test into your console.
* To have the API call work correctly, you will first need to go to ExchangeRate-API's [website](https://www.exchangerate-api.com/). From there apply for a free API key. Once you have your API key, make a .env file in the topmost directory of the project. Add the code line ".env" to the .gitignore file, then add the code line "API_KEY=(the API key you received is pasted here)" into the .env file. That should correctly save your API key as a variable that will be processed and ran in the fetch call that happens in the exchangeService.js file. 
* To view the live webpage with all the packaged JavaScript, run npm start in your console. That will bundle all files from the src directory and open a live webpage.

## Known Bugs

* I would have liked to display the conversion result in the locale format of the selected country, but was having trouble using Intl.NumberFormat.format correctly. I also made an attempt to use the Enriched data API endpoint that ExchangeRate offers, but realized (the hard way from a 403 error) that that endpoint is part of a paid service. 

## License

MIT License

Copyright (c) (2023) Jason Elijah Church

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.