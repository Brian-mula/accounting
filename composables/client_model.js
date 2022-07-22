class Client {
  constructor(
    name,
    phone,
    mobile,
    streetAddress1,
    streetAddress2,
    city,
    state,
    postalCode,
    country
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
  }
}
const clientConverter = {
  toFirestore: (client) => {
    return {
      name: client.name,
      phone: client.phone,
      mobile: client.mobile,
      streetAddress1: client.streetAddress1,
      streetAddress2: client.streetAddress2,
      city: client.city,
      state: client.state,
      postalCode: client.postalCode,
      country: client.country,
    };
  },
  fromFirestore: (snapshot) => {
    const data = snapshot.data();
    return new Client(
      data.name,
      data.phone,
      data.mobile,
      data.streetAddress1,
      data.streetAddress2,
      data.city,
      data.postalCode,
      data.country
    );
  },
};
