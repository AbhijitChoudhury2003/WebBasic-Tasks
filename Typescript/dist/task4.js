//Bank Account System using Access Modifiers (public, private, protected)
class BankAccount {
    accountNumber;
    balance;
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New Balance: $${this.balance}`);
        }
        else {
            console.log('Insufficient funds or invalid amount.');
        }
    }
    getBalance() {
        return this.balance;
    }
}
const account1 = new BankAccount('123456789', 1000);
account1.deposit(500);
account1.withdraw(200);
console.log(`Current Balance: $${account1.getBalance()}`);
export {};
