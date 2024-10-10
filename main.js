// Example de Encapsulation


class BankAccount {
    constructor (owner, currency="EUR", initialBalance=0) {
        this.owner = owner
        this.currency = currency
        this.balance = initialBalance
    }
}

const rebootAccount = new BankAccount ('Yeray', 'BTC', 10)

console.log(rebootAccount)
rebootAccount.balance = 1000000
console.log(rebootAccount.balance)