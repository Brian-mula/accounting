import { doc, setDoc, collection, getFirestore,getDocs,getDoc,deleteDoc } from "firebase/firestore";


// !add new service to database
export const newService = async (
    name: string,
    sku: number,
    description: string,
    category: string,
    purchase_price: string,
    unit_price: string,
    tax: number
 
) => {
  const db = getFirestore();
  const serviceRef = doc(collection(db, "services")).withConverter(
    serviceConverter
  );
  await setDoc(
    serviceRef,
    new Service(
      name,
      sku,
      description,
      category,
      purchase_price,
      unit_price,
      tax,
     
    )
  );
};

// !get all services
export const getAllServices=async()=>{
    const db=getFirestore();
    const services=[];
    const serviceSnapshot=await getDocs(collection(db,'services'))
    serviceSnapshot.forEach((doc)=>{
        services.push({...doc.data(),id:doc.id})
    })
    return services;
}

// !get a single service

export const getSingleService=async(id:string)=>{
  var service=null;
  const db=getFirestore();
  const serviceRef=doc(db,'services',id);
  const serviceSnap=await getDoc(serviceRef);
  if(serviceSnap.exists()){
    service=serviceSnap.data();
  }
  return service;
}

// !delete a given service
export const deleteService=async(id:string)=>{
  const db=getFirestore();
  await deleteDoc(doc(db,'services',id))
}