import { doc, setDoc, collection, getFirestore,getDocs,getDoc,deleteDoc } from "firebase/firestore";


// !add new product to database
export const newProduct = async (
  date:string,
  staff:string,
  action:string,
  jNumber:number,
  name: string,
  sku: number,
  description: string,
  category: string,
  brand: string,
  barcode: string,
  purchase_price: number,
  selling_price: number,
  tax: number,
  initial_stock_level: number,
  low_stock_threshhold: number
) => {
  const db = getFirestore();
  const productRef = doc(collection(db, "products")).withConverter(
    productConverter
  );
  await setDoc(
    productRef,
    new Product(
      name,
      sku,
      description,
      category,
      brand,
      barcode,
      purchase_price,
      selling_price,
      tax,
      initial_stock_level,
      low_stock_threshhold
    )
  );
  // !add new journal record for a given product
  await setDoc(doc(db, "journals", productRef.id), {
    date:date,
        action:action,
        staff:staff,
        jNumber:jNumber,
        accName:name,
        description:description,
        amount:purchase_price
  })
};

// !get all products
export const getAllProducts=async()=>{
    const db=getFirestore();
    const products=[];
    const productSnapshot=await getDocs(collection(db,'products'))
    productSnapshot.forEach((doc)=>{
      products.push({...doc.data(),id:doc.id})
    })
    return products;
}

// !get a single product

export const getSingleProduct=async(id:string)=>{
  var product=null;
  const db=getFirestore();
  const productRef=doc(db,'products',id);
  const productSnap=await getDoc(productRef);
  if(productSnap.exists()){
    product=productSnap.data();
  }
  return product;
}

// !delete a given product
export const deleteProduct=async(id:string)=>{
  const db=getFirestore();
  await deleteDoc(doc(db,'products',id))
}