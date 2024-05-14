import { SupplierPrototype } from "./interfaces/SupplierPrototype";


export class Supplier implements SupplierPrototype{
    supplier_id  : number; 
    name: string;
    country_of_origin?: number;
    contact_email?: string | undefined;
    isActive: boolean;

    constructor(supplier_id : number , supplier : SupplierPrototype) {
        this.supplier_id = supplier_id;
        this.name = supplier.name;
        this.country_of_origin = supplier.country_of_origin;
        this.contact_email = supplier.contact_email;
        this.isActive = supplier.isActive ?? false;
    }

    static fromJson(json : Record<string , any>) {
        return  new Supplier(
            json['supplier_id'],
            {
                name: json['name'],
                country_of_origin: json['country_of_origin'],
                contact_email: json['contact_email'],
                isActive : json['isActive'],
            }
        )
    }
}