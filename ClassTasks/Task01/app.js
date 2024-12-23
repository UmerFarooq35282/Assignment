let guessNumber = prompt("Guess number");

let addMyAmount = prompt("Add my 50 rupess");

let addFriendsAmount = prompt("Add 50 rupess of your friends");

let charityAMount = prompt("Give half amount to charity");

let friendPaymentBack = prompt("Give My Friend Payment Back");

// now calculate the amount

let totalAmount = (Number(guessNumber) + Number(addMyAmount) + Number(addFriendsAmount)) - Number(charityAMount)  - Number(friendPaymentBack);

console.log(totalAmount);
