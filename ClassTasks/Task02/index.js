let carrency = prompt("Enter Currency Type e.g. ('USD' , 'RIYAL' , 'AUD' , 'EURO')");
let moneyYouHAve = +prompt("Enter how much currency you have");


let USDRATE = 277.16;
let RIYALRATE = 74.02;
let AUDRATE = 177.28;
let EURORATE = 289.25;

let exchangeRate;

if(carrency.toLowerCase() === "usd"){
    exchangeRate = USDRATE * moneyYouHAve;
}
if(carrency.toLowerCase() === "riyal"){
    exchangeRate = RIYALRATE * moneyYouHAve;

}
if(carrency.toLowerCase() === "aud"){
    exchangeRate = AUDRATE * moneyYouHAve;
}

if(carrency.toLowerCase() === "euro"){
    exchangeRate = EURORATE * moneyYouHAve;
}


document.write(`<h1>you have total amount ${exchangeRate}  in PKR </h1>`);