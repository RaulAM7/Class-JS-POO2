// Example de Encapsulation
class cuentaBanco {
    constructor (owner, currency="EUR", initialBalance=0) {
        this.owner = owner
        this.currency = currency
        this.balance = initialBalance
    }
}
const rebootAccount = new cuentaBanco ('Yeray', 'BTC', 10)
console.log(rebootAccount)
rebootAccount.balance = 1000000
console.log(rebootAccount.balance)


// Objects Literals
const myObjectLiteral = {
    //Properties
    myProperty: 'myProperty-value',
    config: {
        language: 'EN',
        mode: 'night',
    },
    otherProperty: 'someValue',
    // Methods
    showConfig() {
        console.log(`Current language is: ${this.config.language}`)
    }, //this is a get method
    updateConfig(newConfig) {
        // Small calidation to ensure our module doesnt get corrupted
        if (typeof newConfig === 'object') {
            this.config = newConfig
            console.log(`Your config is : ${this.config}`)
        } else {console.log(`Your config is : ${this.config}`)}
    } // Este seria un set method porque le pasamos un valor y updatea alguna property de este caso un Object Literal
}
myObjectLiteral.showConfig()
myObjectLiteral.updateConfig('Pablito')



// Classes & Private Fields
class BankingAccount {
    #_balance
    constructor(owner='N/A', currency = "EUR", initialBalance = 0) {
        this.owner = owner
        this.currency = currency
        this.#_balance = initialBalance
    }
    get showBalance(){return this.#_balance}
    set settingBalance(qty){this.#_balance = qty}
    set deposit(qty){
        if (qty < 0){
            throw new Error('Amount should be positive')
        } else {
            this.#_balance += qty
            console.log(`You have deposited this amount: ${qty}`)
            console.log(`Your balance is: ${this.#_balance}`)
            return this.#_balance
        }
    }
    set withdraw(qty){
        if (qty < 0) {
            throw new Error('Amount should be positive')
        } else if (qty > this.#_balance){
            throw new Error('Not enough funds')
        } else {
            this.#_balance -= qty
            console.log(`You have transfered this amount: ${qty}`)
            console.log(`Your balance is: ${this.#_balance}`)
            return this.#_balance
        }
    }
    transferToAnotherAccount(qty, account) {
        if(qty < 0) {
            throw new Error('Amount should be positive')
        } else if(qty > this.#_balance) { 
            throw new Error('Not enough funds')
        } else {
            this.#_balance -= qty
            console.log(`You have withdrawed this amount: ${qty} to ${account}`)
            console.log(`Your balance is: ${this.#_balance}`)
            return this.#_balance
        }
    }
}


const newAccount = new BankingAccount ('Raul','EUR',1000)

newAccount.settingBalance = 100
newAccount.deposit = 50
newAccount.withdraw = 100
newAccount.transferToAnotherAccount(10, 'Jose')


console.log(newAccount)
console.log(newAccount.showBalance)