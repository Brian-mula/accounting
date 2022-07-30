export class PurchaseInvoice {
  supplier: string;
  piNumber: number;
  date: string;
  paymentTerms: number;
  item: string;
  unit_price: number;
  quantity: number;
  stockAtHand: number;
  newStock: number;
  total: number;

  constructor(
    supplier: string,
    piNumber: number,
    date: string,
    paymentTerms: number,
    item: string,
    unit_price: number,
    quantity: number,
    stockAtHand: number,
    newStock: number,
    total: number
  ) {
    this.supplier = supplier;
    this.piNumber = piNumber;
    this.date = date;
    this.paymentTerms = paymentTerms;
    this.item = item;
    this.unit_price = unit_price;
    this.quantity = quantity;
    this.stockAtHand = stockAtHand;
    this.newStock = newStock;
    this.total = total;
  }
}
export const purchaseInvoiceConverter = {
  toFirestore: (purchase: PurchaseInvoice) => {
    return {
      supplier: purchase.supplier,
      piNumber: purchase.piNumber,
      date: purchase.date,
      paymentTerms: purchase.paymentTerms,
      item: purchase.item,
      unit_price: purchase.unit_price,
      quantity: purchase.quantity,
      stockAtHand: purchase.stockAtHand,
      newStock: purchase.newStock,
      total: purchase.total,
    };
  },
  fromFirestore: (snapshot) => {
    const data = snapshot.data();
    return new PurchaseInvoice(
      data.supplier,
      data.piNumber,
      data.date,
      data.paymentTerms,
      data.item,
      data.unit_price,
      data.quantity,
      data.stockAtHand,
      data.newStock,
      data.total
    );
  },
};
