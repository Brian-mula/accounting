import { doc, setDoc, getFirestore, collection,getDocs,getDoc,deleteDoc } from "firebase/firestore";

// !add a new inbound into database

export const newInbound = async (
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
  const inboundRef = doc(collection(db, "inbounds")).withConverter(
    inboundConverter
  );
  await setDoc(
    inboundRef,
    new Inbound(
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

// !get all inbounds
export const getAllInbounds=async()=>{
    const db = getFirestore();
    const inbounds=[];
    const inboundSnapshot= await getDocs(collection(db,'inbounds'))
    inboundSnapshot.forEach((doc)=>{
        inbounds.push({...doc.data(),id:doc.id})
    })
    return inbounds;
}

// ! get a single inbound basing on a given ID
export const getSingleInbound=async(id:string)=>{
    const db =getFirestore();
    var inbound=null;
    const inboundRef=doc(db,'inbounds',id)
    const inboundSnap= await getDoc(inboundRef)
    if(inboundSnap.exists()){
        inbound= inboundSnap.data();
    }else{
        console.log('no such document found')
    }
    return inbound;
}

// ! delete a document
export const deleteInbound=async(id:string)=>{
    const db = getFirestore();
    await deleteDoc(doc(db,'inbounds',id))
}