export class Outbound {
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
  
  export const outboundConverter = {
    toFirestore: (outbound: Outbound) => {
      return {
        requisition: outbound.requisition,
        date: outbound.date,
        journal_acccount: outbound.journal_acccount,
        notes: outbound.notes,
        inventory: outbound.inventory,
        num: outbound.num,
        item: outbound.item,
        unit_price: outbound.unit_price,
        quantity: outbound.quantity,
        stockAtHand: outbound.stockAtHand,
        newStock: outbound.newStock,
        total: outbound.total,
      };
    },
    fromFirestore: (snapshot) => {
      const data = snapshot.data();
      return new Outbound(
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
  