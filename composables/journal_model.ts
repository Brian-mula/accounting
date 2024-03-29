export class JournalModel {
  date: string;
  action: string;
  staff: string;
  jNumber: number;
  accName: string;
  description: string;
  amount: number;

  constructor(
    date: string,
    action: string,
    staff: string,
    jNumber: number,
    accName: string,
    description: string,
    amount: number
  ) {
    this.date = date;
    this.action = action;
    this.staff = staff;
    this.jNumber = jNumber;
    this.accName = accName;
    description = description;
    amount = amount;
  }
}

export const journalConverter = {
  toFirestore: (journal: JournalModel) => {
    return {
      date: journal.date,
      action: journal.action,
      staff: journal.staff,
      jNumber: journal.jNumber,
      name: journal.accName,
      description: journal.description,
      amount: journal.amount,
    };
  },
  fromFirestore: (snapshot) => {
    const data = snapshot.data();

    return new JournalModel(
      data.date,
      data.action,
      data.staff,
      data.jNumber,
      data.accName,
      data.description,
      data.amount
    );
  },
};
