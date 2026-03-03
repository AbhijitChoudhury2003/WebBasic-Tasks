import { expenseService } from "../service/expenseManageService";

export class UI {
  private form: HTMLFormElement;
  private txList: HTMLUListElement;
  private totalIncomeEl: HTMLElement;
  private totalExpenseEl: HTMLElement;
  private balanceEl: HTMLElement;
  private catList: HTMLUListElement;
  private currentDateEl: HTMLElement;
  private filterButtons: NodeListOf<HTMLButtonElement>;

  constructor(private service: expenseService) {
    this.form = document.querySelector("form") as HTMLFormElement;
    this.txList = document.getElementById("tx-list") as HTMLUListElement;
    this.totalIncomeEl = document.getElementById("total-income") as HTMLElement;
    this.totalExpenseEl = document.getElementById("total-expenses") as HTMLElement;
    this.balanceEl = document.getElementById("balance") as HTMLElement;
    this.catList = document.getElementById("cat-list") as HTMLUListElement;
    this.currentDateEl = document.getElementById("current-date") as HTMLElement;
    this.filterButtons = document.querySelectorAll("section button");

    this.init();
  }

  private init(): void {
    this.setCurrentDate();
    this.renderTransactions(this.service.getTransaction);
    this.renderSummary();
    this.renderCategoryBreakdown();
    this.handleFormSubmit();
    this.handleDelete();
    this.handleFilter();
  }


  private renderTransactions(transactions: any[]): void {
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


  private renderSummary(): void {
    this.totalIncomeEl.textContent =
      this.service.getTotalIncome().toFixed(2);

    this.totalExpenseEl.textContent =
      this.service.getTotalExpense().toFixed(2);

    this.balanceEl.textContent =
      this.service.getBalance().toFixed(2);
  }

  

  private renderCategoryBreakdown(): void {
    this.catList.innerHTML = "";

    const expenses = this.service.getAllExpenses();
    const categoryMap: Record<string, number> = {};

    expenses.forEach((tx) => {
      categoryMap[tx.catagory] =
        (categoryMap[tx.catagory] || 0) + tx.amount;
    });

    for (const category in categoryMap) {
      const li = document.createElement("li");
      li.textContent = `${category}: ₹${categoryMap[
        category
      ].toFixed(2)}`;
      this.catList.appendChild(li);
    }
  }

  
  private handleFormSubmit(): void {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      const desc = (document.getElementById("desc") as HTMLInputElement).value;
      const amount = Number(
        (document.getElementById("amount") as HTMLInputElement).value
      );
      const category = (
        document.getElementById("category") as HTMLSelectElement
      ).value;
      const date = (
        document.getElementById("date") as HTMLInputElement
      ).value;

      const selectedType = document.querySelector(
        'input[name="transactionType"]:checked'
      ) as HTMLInputElement;

      if (!selectedType) {
        alert("Please select transaction type");
        return;
      }

      const type = selectedType.value as "expense" | "income";

      try {
        this.service.addTransaction(
          desc,
          amount,
          category,
          date,
          type
        );

        this.renderTransactions(this.service.getTransaction);
        this.renderSummary();
        this.renderCategoryBreakdown();
        this.form.reset();
      } catch (error: any) {
        alert(error.message);
      }
    });
  }

  

  private handleDelete(): void {
    this.txList.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;

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


  private handleFilter(): void {
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



  private setCurrentDate(): void {
    const today = new Date();
    this.currentDateEl.textContent = today.toDateString();
  }
}