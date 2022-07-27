import { NumberSymbol } from "@angular/common";

export class Customer {
  customerNo :  number;
  name : string;
  address : string;
  city : string;
  country : string;

  constructor(customerNo: number, name: string, address: string, city: string, country: string){
    this.customerNo = customerNo;
    this.name = name;
    this.address = address;
    this.city = city;
    this.country = country;
  }
}
