

export class Brand {
    brand_id: number
    name: string
    country_of_origin: number
    established_year: number

    constructor(brand_id: number, name: string, country_of_origin: number, established_year: number) {
        this.brand_id = brand_id;
        this.name = name ; 
        this.country_of_origin = country_of_origin;
        this.established_year = established_year;
    }

}