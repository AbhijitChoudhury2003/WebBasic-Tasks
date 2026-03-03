export class UI {
    constructor(service) {
        this.service = service;
        this.form = document.querySelector("form");
        this.txList = document.getElementById("tx-list");
        this.totalIncomeEl = document.getElementById("total-income");
        this.totalExpenseEl = document.getElementById("total-expenses");
        this.balanceEl = document.getElementById("balance");
        this.catList = document.getElementById("cat-list");
        this.currentDateEl = document.getElementById("current-date");
        this.filterButtons = document.querySelectorAll("section button");
        this.init();
    }
    init() {
        this.setCurrentDate();
        this.renderTransactions(this.service.getTransaction);
        this.renderSummary();
        this.renderCategoryBreakdown();
        this.handleFormSubmit();
        this.handleDelete();
        this.handleFilter();
    }
    renderTransactions(transactions) {
        this.txList.innerHTML = "";
        transactions.forEach((tx) => {
            const li = document.createElement("li");
            li.innerHTML = `
        <strong>${tx.description}</strong> 
        (${tx.catagory}) 
        - ₹${tx.amount.toFixed(2)} 
        <small>${tx.date}</small>
        <button data-id="${tx.id}" class="deleteBtn">Delete</button>
      `;
            this.txList.appendChild(li);
        });
    }
    renderSummary() {
        this.totalIncomeEl.textContent =
            this.service.getTotalIncome().toFixed(2);
        this.totalExpenseEl.textContent =
            this.service.getTotalExpense().toFixed(2);
        this.balanceEl.textContent =
            this.service.getBalance().toFixed(2);
    }
    renderCategoryBreakdown() {
        this.catList.innerHTML = "";
        const expenses = this.service.getAllExpenses();
        const categoryMap = {};
        expenses.forEach((tx) => {
            categoryMap[tx.catagory] =
                (categoryMap[tx.catagory] || 0) + tx.amount;
        });
        for (const category in categoryMap) {
            const li = document.createElement("li");
            li.textContent = `${category}: ₹${categoryMap[category].toFixed(2)}`;
            this.catList.appendChild(li);
        }
    }
    handleFormSubmit() {
        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            const desc = document.getElementById("desc").value;
            const amount = Number(document.getElementById("amount").value);
            const category = document.getElementById("category").value;
            const date = document.getElementById("date").value;
            const selectedType = document.querySelector('input[name="transactionType"]:checked');
            if (!selectedType) {
                alert("Please select transaction type");
                return;
            }
            const type = selectedType.value;
            try {
                this.service.addTransaction(desc, amount, category, date, type);
                this.renderTransactions(this.service.getTransaction);
                this.renderSummary();
                this.renderCategoryBreakdown();
                this.form.reset();
            }
            catch (error) {
                alert(error.message);
            }
        });
    }
    handleDelete() {
        this.txList.addEventListener("click", (event) => {
            const target = event.target;
            if (target.classList.contains("deleteBtn")) {
                const id = target.getAttribute("data-id");
                if (id) {
                    this.service.deleteTransaction(Number(id));
                    this.renderTransactions(this.service.getTransaction);
                    this.renderSummary();
                    this.renderCategoryBreakdown();
                }
            }
        });
    }
    handleFilter() {
        this.filterButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                if (btn.textContent === "All") {
                    this.renderTransactions(this.service.getTransaction);
                }
                if (btn.textContent === "Expenses") {
                    this.renderTransactions(this.service.getAllExpenses());
                }
                if (btn.textContent === "Income") {
                    this.renderTransactions(this.service.getAllIncome());
                }
            });
        });
    }
    setCurrentDate() {
        const today = new Date();
        this.currentDateEl.textContent = today.toDateString();
    }
}
