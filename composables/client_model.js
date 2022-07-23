import {
  addDoc,
  Timestamp,
  getFirestore,
  collection,
} from "firebase/firestore";

 export class Client {
  constructor(
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
  ) {
    this.name = name;
    this.phone = phone;
    this.mobile = mobile;
    this.streetAddress1 = streetAddress1;
    this.streetAddress2 = streetAddress2;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.country = country;
    this.codeNumber=codeNumber;
    this.invoiceMethod=invoiceMethod;
    this.openingBal=openingBal;
    this.startingBalDate=startingBalDate;
    this.currency=currency;
    this.email=email
  }
} 

export const clientConverter={
  toFirestore:(client)=>{
    return{
      name:client.name,
      phone:client.phone  ,
      mobile :client.mobile,
      streetAddress1 : client.streetAddress1,
      streetAddress2 : client.streetAddress2,
      city : client.city,
      state :client.state,
      postalCode : client.postalCode,
      country : client.country,
      codeNumber : client.codeNumber,
      invoiceMethod : client.invoiceMethod,
      openingBal : client.openingBal,
      startingBalDate : client.startingBalDate,
      currency :client.currency,
      email:client.email
    }
  },
  fromFirestore:(snapshot)=>{
    const data=snapshot.data()
    return new Client(
      data.name,
      data.phone,
      data.mobile,
      data.streetAddress1,
      data.streetAddress2,
      data.city,
      data.state,
      data.postalCode,
      data.country,
      data.country,
      data.codeNumber,
      data.invoiceMethod,
      data.openingBal,
      data.startingBalDate,
      data.currency,
      data.email
    )
  }
}


export const addClient = async (
  name,
  phone,
  mobile,
  streetAddress1,
  streetAddress2,
  city,
  state,
  postalCode,
  country
) => {
  const db = getFirestore();
  const clientRef = collection(db, "clients");
  // const ref = doc(db, 'clients').withConverter(clientConverter);
  await addDoc(clientRef, {
    name: name,
    phone: phone,
    mobile: mobile,
    streetAddress1: streetAddress1,
    streetAddress2: streetAddress2,
    city: city,
    state: state,
    postalCode: postalCode,
    country: country,
    time: Timestamp.fromDate(new Date()),
  });
};
