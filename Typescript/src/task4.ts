//Bank Account System using Access Modifiers (public, private, protected)
class BankAccount {
  private accountNumber: string
  private balance: number
  constructor(accountNumber: string, initialBalance: number) {
    this.accountNumber = accountNumber
    this.balance = initialBalance
  }
  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount
      console.log(`Deposited: $${amount}. New Balance: $${this.balance}`)
    }
  }
  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount
      console.log(`Withdrew: $${amount}. New Balance: $${this.balance}`)
    } else {
      console.log('Insufficient funds or invalid amount.')
    }
  }
  public getBalance(): number {
    return this.balance
  }
}
const account1 = new BankAccount('123456789', 1000)
account1.deposit(500)
account1.withdraw(200)
console.log(`Current Balance: $${account1.getBalance()}`)


