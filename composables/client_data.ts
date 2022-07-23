import { doc, setDoc,getFirestore,collection } from "firebase/firestore"; 
export const postClient=async(
    name:string,
    phone :string,
    mobile : string,
    streetAddress1:string,
    streetAddress2:string,
    city:string,
    state:string,
    postalCode:string,
    country:string,
    codeNumber:string,
    invoiceMethod:string,
    openingBal:string,
    startingBalDate:string,
    currency:string,
    email:string)=>{
    const db=getFirestore();
    const clientRef=doc(collection(db,'clients')).withConverter(clientConverter);
    await setDoc(clientRef,new Client(
        name,
        phone,
        mobile,
        streetAddress1,
        streetAddress2,
        city,
        state,
        postalCode,
        country,
        codeNumber,
        invoiceMethod,
        openingBal,
        startingBalDate,
        currency,
        email

    ))

}