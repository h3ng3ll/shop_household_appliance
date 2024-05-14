

export interface ProductPrototype {
    name: string; 
    type_id: number;
    brand_id: number;
    supplier_id: number;
    category_id : number; 
    user_id: number;
    model_name: string;
    price: number;
    img: File;
    details?: string;
}