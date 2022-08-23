import {
    doc,
    setDoc,
    getFirestore,
    collection,
    getDocs,
    getDoc,
    deleteDoc,
  } from "firebase/firestore";
  
  // !add a new journal into database
  
  export const newJournal = async (
    date: string,
    action: string,
    staff: string,
    jNumber: number,
    accName: string,
    description: string,
    amount: number
  ) => {
    const db = getFirestore();
    const journalRef = doc(collection(db,'journals')).withConverter(
        journalConverter
    );
    await setDoc(
        journalRef,
      new JournalModel(
        date,
        action,
        staff,
        jNumber,
        accName,
        description,
        amount,
        
      )
    );
  };
  
  // !get all journals
  export const getAllJournals = async () => {
      const db = getFirestore();
      const journals=[];
      const journalsSnap= await getDocs(collection(db,'journals'))
      journalsSnap.forEach((doc)=>{
        journals.push({...doc.data(),id:doc.id})
      })
      return journals;
  };
  
  // ! get a single inbound basing on a given ID
  export const getSingleJournal = async (id: string) => {
      const db =getFirestore();
      var journal=null;
      const journalRef=doc(db,'journals',id)
      const journalSnap= await getDoc(journalRef)
      if(journalSnap.exists()){
        journal= journalSnap.data();
      }else{
          console.log('no such document found')
      }
      return journal;
  };
  
  // ! delete a document
  
  export const deletejournal = async (id: string) => {
      const db=getFirestore()
      await deleteDoc(doc(db,'journals',id))
  };
  