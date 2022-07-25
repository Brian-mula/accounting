export class Invoice {
  method: string;
  client: string;
  invoiceNumber: string;
  invoiceDate: string;
  issueDate: string;
  paymentTerms: string;
  item: string;
  description: string;
  unitPrice: number;
  quantity: number;
  subtotal: number;
  total: number;
  constructor(
    method: string,
    client: string,
    invoiceNumber: string,
    invoiceDate: string,
    issueDate: string,
    paymentTerms: string,
    item: string,
    description: string,
    unitPrice: number,
    quantity: number,
    subtotal: number,
    total: number
  ) {
    this.method = method;
    this.client = client;
    this.invoiceNumber = invoiceNumber;
    this.invoiceDate = invoiceDate;
    this.issueDate = issueDate;
    this.paymentTerms = paymentTerms;
    this.item = item;
    this.description = description;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
    this.subtotal = subtotal;
    this.total = total;
  }
}

export const invoiceConverter = {
  toFirestore: (invoice: Invoice) => {
    return {
      method: invoice.method,
      client: invoice.method,
      invoiceNumber: invoice.invoiceNumber,
      invoiceDate: invoice.invoiceDate,
      issueDate: invoice.issueDate,
      paymentTerms: invoice.paymentTerms,
      item: invoice.item,
      description: invoice.description,
      unitPrice: invoice.unitPrice,
      quantity: invoice.quantity,
      subtotal: invoice.subtotal,
      total: invoice.total,
    };
  },
  fromFirestore: (snapshot) => {
    const data = snapshot.data();
    return new Invoice(
      data.method,
      data.client,
      data.invoiceNumber,
      data.invoiceDate,
      data.issueDate,
      data.paymentTerms,
      data.item,
      data.description,
      data.unitPrice,
      data.quantity,
      data.subtotal,
      data.total
    );
  },
};
