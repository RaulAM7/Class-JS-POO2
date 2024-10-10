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
