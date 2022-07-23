import {  addDoc, Timestamp,getFirestore,collection } from "firebase/firestore"; 



export const addClient=async(
    name,
    phone,
    mobile,
    streetAddress1,
    streetAddress2,
    city,
    state,
    postalCode,
    country,)=>{
const db=getFirestore();
const clientRef=collection(db,'clients')
// const ref = doc(db, 'clients').withConverter(clientConverter);
await addDoc(clientRef,{
    name : name,
    phone : phone,
    mobile : mobile,
    streetAddress1 :streetAddress1,
    streetAddress2 :streetAddress2,
    city : city,
    state : state,
    postalCode : postalCode,
    country : country,
    time:Timestamp.fromDate(new Date())
    });


}