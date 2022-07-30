import { doc, setDoc, collection, getFirestore,getDocs,getDoc,deleteDoc } from "firebase/firestore";

// !new purchase refund
export const newPurchaseRefund=async(
    supplier: string,
      refundNumber: number,
      refundDate: string,
      item: string,
      unit_price: number,
      quantity: number,
      stockAtHand: number,
      newStock: number,
      total: number
)=>{
    const db=getFirestore();
    const invoiceRef= doc(collection(db,'purchaseRefunds')).withConverter(purchaseRefundConverter)
    await setDoc(invoiceRef,new PurchaseRefund(
        supplier,
        refundNumber,
        refundDate,
        item,
        unit_price,
        quantity,
        stockAtHand,
        newStock,
        total
    ))
}

// !get all refunds
export const getAllPurchaseRefunds=async()=>{
    const db=getFirestore();
    const purchaseRefunds=[];
    const invoiceSnapshot=await getDocs(collection(db,'purchaseRefunds'));
    invoiceSnapshot.forEach((doc)=>{
        purchaseRefunds.push({...doc.data(),id:doc.id})
    })
    return purchaseRefunds;
}
// !get a single refunds based on id
export const getSingleRefund=async(id:string)=>{
    const db = getFirestore();
    var purchaseRefund=null
    const invoiceRef= doc(db,'purchaseRefunds',id);
    const invoiceSnap=await getDoc(invoiceRef);
    if(invoiceSnap.exists()){
        purchaseRefund=invoiceSnap.data();
    }else{
        console.log('this document does not exist')
    }
    return purchaseRefund;
}
// !delete a given doc
export const deletePurchaseRefund=async(id:string)=>{
    const db=getFirestore();
    await deleteDoc(doc(db,'purchaseRefunds',id))
}