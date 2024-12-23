// let carrency = prompt("Enter Currency Type e.g. ('USD' , 'RIYAL' , 'AUD' , 'EURO')");
// let moneyYouHAve = +prompt("Enter how much currency you have");



let result = document.getElementById('result');
let submit = document.getElementById('btn');

let USDRATE = 277.16;
let AEDRATE = 75.73;
let GBPRATE = 354.83;
let EURORATE = 289.25;

let exchangeRate;

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let amount = document.getElementById('amount').value;
    let carrency = document.getElementById('to').value;
    if(carrency.toLowerCase() === "usd"){
        exchangeRate = USDRATE * amount;
    }
    if(carrency.toLowerCase() === "aed"){
        exchangeRate = AEDRATE * amount;
    
    }
    if(carrency.toLowerCase() === "gbp"){
        exchangeRate = GBPRATE * amount;
    }
    if(carrency.toLowerCase() === "eur"){
        exchangeRate = EURORATE * amount;
    }
    result.innerHTML = `<h3>You have total amount ${Math.floor(exchangeRate) || 0}  in PKR </h3>`;
});

// document.write(`<h1>you have total amount ${exchangeRate}  in PKR </h1>`);