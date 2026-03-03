export class expenseService {
    constructor() {
        this.transaction = [];
        this.loadData();
    }
    loadData() {
        const transactionData = localStorage.getItem("transactionData");
        if (transactionData) {
            this.transaction = JSON.parse(transactionData);
        }
        else {
            this.transaction = [
                {
                    id: 111111,
                    description: "demo",
                    amount: 0,
                    catagory: "demo",
                    date: "demo",
                    expenseType: "income",
                }
            ];
        }
        console.log(this.transaction);
    }
    get getTransaction() {
        return this.transaction;
    }
    saveData() {
        localStorage.setItem("transactionData", JSON.stringify(this.transaction));
    }
    addTransaction(description, amount, catagory, date, expenseType) {
        const newTransaction = {
            id: Date.now(),
            description: description,
            amount: amount,
            catagory: catagory,
            date: date,
            expenseType: expenseType,
        };
        this.transaction.push(newTransaction);
        this.saveData();
        console.log(this.transaction);
    }
    deleteTransaction(id) {
        const deleteTransaction = this.transaction.find((r) => r.id === id);
        if (!deleteTransaction) {
            throw new Error("Transaction not found");
        }
        this.transaction = this.transaction.filter(t => t !== deleteTransaction);
        this.saveData();
        console.log(this.transaction);
    }
    getTotalExpense() {
        let sum = 0;
        let expenses = this.transaction.filter(e => e.expenseType == "expense");
        for (let i = 0; i < expenses.length; i++) {
            sum = sum + expenses[i].amount;
        }
        return sum;
    }
    getTotalIncome() {
        let sum = 0;
        let incomes = this.transaction.filter(e => e.expenseType == "income");
        for (let i = 0; i < incomes.length; i++) {
            sum = sum + incomes[i].amount;
        }
        return sum;
    }
    getBalance() {
        return this.getTotalIncome() - this.getTotalExpense();
    }
    getAllExpenses() {
        return this.transaction.filter(e => e.expenseType == "expense");
    }
    getAllIncome() {
        return this.transaction.filter(e => e.expenseType == "income");
    }
}
