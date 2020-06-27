import faker from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  markerContent(): string {
    return `company name is ${this.companyName}
    <br>catch phrase is ${this.catchPhrase}`;
  }

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.companyName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
