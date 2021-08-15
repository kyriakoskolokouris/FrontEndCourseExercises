// Create a Function constructor that creates Bank Accounts
function Account(name) {
	this.name = name;
    this.IBAN = Account.IBAN;
    // Automatically give a new IBAN number to new accounts. (Static property)
    Account.IBAN++;
    this.balance = 0;
// Implement the following prototype methods:
// 2.1. deposit: will deposit an amount to the current balance
this.deposit = function (amount) {
    return this.balance = this.balance + amount;
};
// 2.2. withdraw: will withdraw an amount from the current balance
//  and return the withdrawn amount
this.withdraw = function (amount) {
// Validation rules include:
// 2.2.1. Amount must not be negative number
// 2.2.2. Amount must be of type Number
if (typeof amount !== "number" || amount <= 0){
    return "Error 'Invalid amount'"
  }
// 2.2.3. Amount must not exceed current balance
if (amount > this.balance) {
    return "Error 'Insufficient balance!'"
  } return this.balance = this.balance - amount;
};
// 2.3. getBalance: will return the current balance
this.getBalance = function () {
    return this.balance;
};
}

const newAccount = new Account("Kyriakos Kolokouris");


console.log(newAccount.getBalance()); // 0
console.log(newAccount.deposit(100));
console.log(newAccount.getBalance()); // 100
console.log(newAccount.withdraw(50));
console.log(newAccount.getBalance()); // 50
console.log(newAccount.withdraw(500)); // Error 'Insufficient balance!'
console.log(newAccount.withdraw("50")); // Error 'Invalid amount'
