import { doc, setDoc, getFirestore, collection,getDocs,getDoc,deleteDoc } from "firebase/firestore";

// !add a new inbound into database

export const newOutbound = async (
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
) => {
  const db = getFirestore();
  const outboundRef = doc(collection(db, "outbounds")).withConverter(
    outboundConverter
  );
  await setDoc(
    outboundRef,
    new Outbound(
      requisition,
      date,
      journal_acccount,
      notes,
      inventory,
      num,
      item,
      unit_price,
      quantity,
      stockAtHand,
      newStock,
      total
    )
  );
};

// !get all outbounds
export const getAllOutbounds=async()=>{
    const db = getFirestore();
    const outbounds=[];
    const outboundSnapshot= await getDocs(collection(db,'outbounds'))
    outboundSnapshot.forEach((doc)=>{
        outbounds.push({...doc.data(),id:doc.id})
    })
    return outbounds;
}

// ! get a single outbound basing on a given ID
export const getSingleOutbound=async(id:string)=>{
    const db =getFirestore();
    var outbound=null;
    const outboundRef=doc(db,'outbounds',id)
    const outboundSnap= await getDoc(outboundRef)
    if(outboundSnap.exists()){
        outbound= outboundSnap.data();
    }else{
        console.log('no such document found')
    }
    return outbound;
}

// ! delete a document
export const deleteOutbound=async(id:string)=>{
    const db = getFirestore();
    await deleteDoc(doc(db,'outbounds',id))
}