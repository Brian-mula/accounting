export class Inbound {
  requisition: string;
  date: string;
  journal_acccount: string;
  notes: string;
  inventory: string;
  num: number;
  item: string;
  unit_price: number;
  quantity: number;
  stockAtHand: number;
  newStock: number;
  total: number;

  constructor(
    requisition: string,
    date: string,
    journal_acccount: string,
    notes: string,
    inventory: string,
    num: number,
    item: string,
    unit_price: number,
    quantity: number,
    stockAtHand: number,
    newStock: number,
    total: number
  ) {
    (this.requisition = requisition),
      (this.date = date),
      (this.journal_acccount = journal_acccount),
      (this.notes = notes),
      (this.inventory = inventory),
      (this.num = num),
      (this.item = item),
      (this.unit_price = unit_price),
      (this.quantity = quantity),
      (this.stockAtHand = stockAtHand),
      (this.newStock = newStock),
      (this.total = total);
  }
}

export const inboundConverter = {
  toFirestore: (inbound: Inbound) => {
    return {
      requisition: inbound.requisition,
      date: inbound.date,
      journal_acccount: inbound.journal_acccount,
      notes: inbound.notes,
      inventory: inbound.inventory,
      num: inbound.num,
      item: inbound.item,
      unit_price: inbound.unit_price,
      quantity: inbound.quantity,
      stockAtHand: inbound.stockAtHand,
      newStock: inbound.newStock,
      total: inbound.total,
    };
  },
  fromFirestore: (snapshot) => {
    const data = snapshot.data();
    return new Inbound(
      data.requisition,
      data.date,
      data.journal_acccount,
      data.notes,
      data.inventory,
      data.num,
      data.item,
      data.unit_price,
      data.quantity,
      data.stockAtHand,
      data.newStock,
      data.total
    );
  },
};
