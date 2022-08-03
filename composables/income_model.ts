export class Income {
    amount: number;
    description: string;
    code_no: number;
    date: string;
    vendor: string;
    category: string;
    journal_account: string;
    image:string
  
    constructor(
      amount: number,
      description: string,
      code_no: number,
      date: string,
      vendor: string,
      category: string,
      journal_account: string,
      image:string
    ) {
      this.amount = amount;
      this.description = description;
      this.code_no = code_no;
      this.date = date;
      this.vendor = vendor;
      this.category = category;
      this.journal_account = journal_account;
      this.image=image;
    }
  }
  
  export const incomeConverter = {
    toFirestore: (expense: Income) => {
      return {
        amount: expense.amount,
        description: expense.description,
        code_no: expense.code_no,
        date: expense.date,
        vendor: expense.vendor,
        category: expense.category,
        journal_account: expense.journal_account,
        image:expense.image
      };
    },
    fromFirestore: (snapshot) => {
      const data = snapshot.data();
      return new Income(
        data.amount,
        data.description,
        data.code_no,
        data.date,
        data.vendor,
        data.category,
        data.journal_account,
        data.image
      );
    },
  };
  