

export class Supplier {
    supplier_id  : number; 
    name: string;
    country_of_origin: number;
    contact_email: string | undefined;
    isActive: boolean;

    constructor(supplier_id : number , name: string, country_of_origin: number, contact_email: string | undefined, isActive: boolean) {
        this.supplier_id = supplier_id;
        this.name = name;
        this.country_of_origin = country_of_origin;
        this.contact_email = contact_email;
        this.isActive = isActive;
    }

}