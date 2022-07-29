export class Product {
  name: string;
  sku: number;
  description: string;
  category: string;
  brand: string;
  barcode: string;
  purchase_price: number;
  selling_price: number;
  tax: number;
  initial_stock_level: number;
  low_stock_threshhold: number;

  constructor(
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
  ) {
    this.name = name;
    this.sku = sku;
    this.description = description;
    this.category = category;
    this.brand = brand;
    this.barcode = barcode;
    this.purchase_price = purchase_price;
    this.selling_price = selling_price;
    this.tax = tax;
    this.initial_stock_level = initial_stock_level;
    this.low_stock_threshhold = low_stock_threshhold;
  }
}

export const productConverter = {
  toFirestore: (product: Product) => {
    return {
      name: product.name,
      sku: product.sku,
      description: product.description,
      category: product.category,
      brand: product.brand,
      barcode: product.barcode,
      purchase_price: product.purchase_price,
      selling_price: product.selling_price,
      tax: product.tax,
      initial_stock_level: product.initial_stock_level,
      low_stock_threshhold: product.low_stock_threshhold,
    };
  },
  fromFirestoe: (snapshot) => {
    const data = snapshot.data();
    return new Product(
      data.name,
      data.sku,
      data.description,
      data.category,
      data.brand,
      data.barcode,
      data.purchase_price,
      data.selling_price,
      data.tax,
      data.initial_stock_level,
      data.low_stock_threshhold
    );
  },
};
