import { expenseService } from "./service/expenseManageService.js";
import { UI } from "./ui/ui.js";
let es = new expenseService();
new UI(es);
// es.addTransaction(
//     "desc",
//     500,
//     "lunch",
//     "5th march",
//     "expense",
// )
// // es.deleteTransaction(5544);
// console.log("Income : ",es.getTotalIncome());
// console.log("Expense :",es.getTotalExpense());
// console.log("Balance :",es.getBalance());
