export class PurchaseRefund {
    supplier: string;
    refundNumber: number;
    refundDate: string;
    item: string;
    unit_price: number;
    quantity: number;
    stockAtHand: number;
    newStock: number;
    total: number;
  
    constructor(
      supplier: string,
      refundNumber: number,
      refundDate: string,
      item: string,
      unit_price: number,
      quantity: number,
      stockAtHand: number,
      newStock: number,
      total: number
    ) {
      this.supplier = supplier;
      this.refundNumber = refundNumber;
      this.refundDate = refundDate;
      this.item = item;
      this.unit_price = unit_price;
      this.quantity = quantity;
      this.stockAtHand = stockAtHand;
      this.newStock = newStock;
      this.total = total;
    }
  }
  export const purchaseInvoiceConverter = {
    toFirestore: (purchase: PurchaseRefund) => {
      return {
        supplier: purchase.supplier,
        refundNumber: purchase.refundNumber,
        refundDate: purchase.refundDate,
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
      return new PurchaseRefund(
        data.supplier,
        data.refundNumber,
        data.refundDate,
        data.item,
        data.unit_price,
        data.quantity,
        data.stockAtHand,
        data.newStock,
        data.total
      );
    },
  };
  