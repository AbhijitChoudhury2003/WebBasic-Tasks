type transactionType="expense"|"income"

export interface transactionModel{
    id:number,
    description:string,
    amount:number,
    catagory:string,
    date:string,
    expenseType:transactionType,
}