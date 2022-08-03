import {
    doc,
    setDoc,
    getFirestore,
    collection,
    getDocs,
    getDoc,
    deleteDoc,
  } from "firebase/firestore";
  
  // !add a new income into database
  
  export const newIncome = async (
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
    const incomeRef = doc(collection(db, "incomes")).withConverter(
      incomeConverter
    );
    await setDoc(
        incomeRef,
      new Income(
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
  
  // !get all incomes
  export const getAllIncomes = async () => {
      const db = getFirestore();
      const incomes=[];
      const incomeSnap= await getDocs(collection(db,'incomes'))
      incomeSnap.forEach((doc)=>{
        incomes.push({...doc.data(),id:doc.id})
      })
      return incomes;
  };
  
  // ! get a single income basing on a given ID
  export const getSingleInbound = async (id: string) => {
      const db =getFirestore();
      var income=null;
      const incomeRef=doc(db,'incomes',id)
      const incomeSnap= await getDoc(incomeRef)
      if(incomeSnap.exists()){
        income= incomeSnap.data();
      }else{
          console.log('no such document found')
      }
      return income;
  };
  
  // ! delete a document
  
  export const deleteIncome = async (id: string) => {
      const db=getFirestore()
      await deleteDoc(doc(db,'incomes',id))
  };
  