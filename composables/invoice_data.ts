import { doc, setDoc, getFirestore, collection } from "firebase/firestore";

export const newInvoice = async (
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
) => {
  const db = getFirestore();
  const invoiceRef = doc(collection(db, "invoices")).withConverter(
    invoiceConverter
  );
  await setDoc(
    invoiceRef,
    new Invoice(
      method,
      client,
      invoiceNumber,
      invoiceDate,
      issueDate,
      paymentTerms,
      item,
      description,
      unitPrice,
      quantity,
      subtotal,
      total
    )
  );
  console.log('posted')
};
