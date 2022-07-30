import { doc, setDoc, collection, getFirestore,getDocs,getDoc,deleteDoc } from "firebase/firestore";

// !new purchase invoice
export const newPurchaseInvoice=async(
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
)=>{
    const db=getFirestore();
    const invoiceRef= doc(collection(db,'purchaseInvoices')).withConverter(purchaseInvoiceConverter)
    await setDoc(invoiceRef,new PurchaseInvoice(
        supplier,
        piNumber,
        date,
        paymentTerms,
        item,
        unit_price,
        quantity,
        stockAtHand,
        newStock,
        total
    ))
}

// !get all invoices
export const getAllPurchaseInvoices=async()=>{
    const db=getFirestore();
    const purchaseInvoices=[];
    const invoiceSnapshot=await getDocs(collection(db,'purchaseInvoices'));
    invoiceSnapshot.forEach((doc)=>{
        purchaseInvoices.push({...doc.data(),id:doc.id})
    })
    return purchaseInvoices;
}
// !get a single invoice based on id
export const getSingleInvoice=async(id:string)=>{
    const db = getFirestore();
    var purchaseInvoice=null
    const invoiceRef= doc(db,'purchaseInvoices',id);
    const invoiceSnap=await getDoc(invoiceRef);
    if(invoiceSnap.exists()){
        purchaseInvoice=invoiceSnap.data();
    }else{
        console.log('this document does not exist')
    }
    return purchaseInvoice;
}
// !delete a given doc
export const deletePurchaseInvoice=async(id:string)=>{
    const db=getFirestore();
    await deleteDoc(doc(db,'purchaseInvoices',id))
}