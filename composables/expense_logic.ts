import {
  doc,
  setDoc,
  getFirestore,
  collection,
  getDocs,
  getDoc,
  deleteDoc,
} from "firebase/firestore";

// !add a new inbound into database

export const newInbound = async (
  amount: number,
  description: string,
  code_no: number,
  date: string,
  vendor: string,
  category: string,
  journal_account: string,
  image: string
) => {
  const db = getFirestore();
  const expenseRef = doc(collection(db, "expenses")).withConverter(
    expenseConverter
  );
  await setDoc(
    expenseRef,
    new Expense(
      amount,
      description,
      code_no,
      date,
      vendor,
      category,
      journal_account,
      image
    )
  );
};

// !get all inbounds
export const getAllInbounds = async () => {
    const db = getFirestore();
    const expenses=[];
    const expenseSnap= await getDocs(collection(db,'expenses'))
    expenseSnap.forEach((doc)=>{
        expenses.push({...doc.data(),id:doc.id})
    })
    return expenses;
};

// ! get a single inbound basing on a given ID
export const getSingleInbound = async (id: string) => {
    const db =getFirestore();
    var expense=null;
    const expenseRef=doc(db,'expenses',id)
    const expenseSnap= await getDoc(expenseRef)
    if(expenseSnap.exists()){
        expense= expenseSnap.data();
    }else{
        console.log('no such document found')
    }
    return expense;
};

// ! delete a document

export const deleteInbound = async (id: string) => {
    const db=getFirestore()
    await deleteDoc(doc(db,'expenses',id))
};
