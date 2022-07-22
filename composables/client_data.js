import { doc, setDoc, Timestamp,getFirestore } from "firebase/firestore"; 
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
const ref = doc(db, "clients").withConverter(clientConverter);
await setDoc(ref,new City(
    name,
    phone,
    mobile,
    streetAddress1,
    streetAddress2,
    city,
    state,
    postalCode,
    country,
    Timestamp.fromDate(new Date.now())
))


}