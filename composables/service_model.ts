import { snapshot } from "unstorage";

export class Service {
  name: string;
  sku: number;
  description: string;
  category: string;
  purchase_price: string;
  unit_price: string;
  tax: number;

  constructor(
    name: string,
    sku: number,
    description: string,
    category: string,
    purchase_price: string,
    unit_price: string,
    tax: number
  ) {
    this.name = name;
    this.sku = sku;
    this.description = description;
    this.category = category;
    this.purchase_price = purchase_price;
    this.unit_price = unit_price;
    this.tax = tax;
  }
}

export const serviceConverter = {
  toFirestore: (service: Service) => {
    return {
      name: service.name,
      sku: service.sku,
      description: service.description,
      category: service.category,
      purchase_price: service.purchase_price,
      unit_price: service.unit_price,
      tax: service.tax,
    };
  },
  fromFirestore: (snapshot) => {
    const data = snapshot.data();
    return new Service(
      data.name,
      data.sku,
      data.description,
      data.category,
      data.purchase_price,
      data.unit_price,
      data.tax
    );
  },
};
