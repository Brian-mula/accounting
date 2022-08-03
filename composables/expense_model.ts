export class Expense {
  amount: number;
  description: string;
  code_no: number;
  date: string;
  vendor: string;
  category: string;
  journal_account: string;

  constructor(
    amount: number,
    description: string,
    code_no: number,
    date: string,
    vendor: string,
    category: string,
    journal_account: string
  ) {
    this.amount = amount;
    this.description = description;
    this.code_no = code_no;
    this.date = date;
    this.vendor = vendor;
    this.category = category;
    this.journal_account = journal_account;
  }
}

export const expenseConverter = {
  toFirestore: (expense: Expense) => {
    return {
      amount: expense.amount,
      description: expense.description,
      code_no: expense.code_no,
      date: expense.date,
      vendor: expense.vendor,
      category: expense.category,
      journal_account: expense.journal_account,
    };
  },
  fromFirestore: (snapshot) => {
    const data = snapshot.data();
    return new Expense(
      data.amount,
      data.description,
      data.code_no,
      data.date,
      data.vendor,
      data.category,
      data.journal_account
    );
  },
};
