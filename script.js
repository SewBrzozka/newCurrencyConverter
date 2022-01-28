const button = document.querySelector(".js-button");
const currencyPLN = document.querySelector(".js-PLN");
const currency = document.querySelector(".js-chooseCurrency");
let result = document.querySelector(".js-result");
const form = document.querySelector(".js-form");
let changedMoney = document.querySelector(".js-changedMoney");
let changedPLN = document.querySelector(".js-changedPLN");
let currencyValue = document.querySelector(".js-currencyValue");

let exchangeRate = 4.00;

currency.addEventListener("input", () => {
    switch (currency.value) {
        case " EUR ":
            exchangeRate = 4.54;
            break;
        case " USD ":
            exchangeRate = 4.00;
            break;
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let PLN = currencyPLN.value;
    let rate = exchangeRate;
    let score = PLN / rate;
    
    result.innerHTML = `${PLN} PLN = <strong>${score.toFixed(2)} ${currency.value}</strong>`;
});
