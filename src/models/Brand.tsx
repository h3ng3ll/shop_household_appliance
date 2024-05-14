import { BrandPrototype } from "./interfaces/BrandPrototype";


export class Brand implements BrandPrototype {
    brand_id: number
    name: string
    country_of_origin?: number
    established_year?: number

    constructor(
        brand_id: number,
        prototype: BrandPrototype,

    ) {
        this.brand_id = brand_id;
        this.name = prototype.name;
        this.country_of_origin = prototype.country_of_origin;
        this.established_year = prototype.established_year;
    }


    static fromJson(json: Record<string, any>) {
        return new Brand(
            json['brand_id'],
            {
                name: json['name'],
                country_of_origin: json['country_of_origin'],
                established_year: json['established_year']
            }
             )

    }
}