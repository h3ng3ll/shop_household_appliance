import { createProduct, fetchAllCategories, fetchBrands, fetchSuppliers, fetchTypes } from "http/productApi";
import { Context } from "index";
import { observer } from "mobx-react-lite";
import { Brand } from "models/Brand";
import { Category } from "models/Category";
import { Supplier } from "models/Supplier";
import { Type } from "models/Type";
import {  useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";



const AddProductForm = observer(() => {

    const devices = useContext(Context).devices;
    const user_id = useContext(Context).user.user!.user_id;

    const { t } = useTranslation();

    const [type, changeType] = useState<string>();
    const [brand, changeBrand] = useState<string>();
    const [supplier, changeSupplier] = useState<string>();
    const [category, changeCategory] = useState<string>();

    const [productName, changeProductName] = useState<string>();
    const [productModelName, changeModelName] = useState<string>();
    const [price, changePrice] = useState<number>();

    const [image, changeImage] = useState<File>();
    const [details, changeDetails] = useState<string>();
    
    // Add product values
    let type_index = 0;
    let brand_index = 0;
    let supplier_index = 0;
    let category_index = 0;



    useEffect(() => {
        fetchTypes().then((types) => {

            const list: Type[] = [];

            (types as Array<Record<string, any>>).map((type) => {
                const objType = Type.fromJson(type);
                list.push(objType);
            })
            devices.setTypes(list)
        });

        fetchBrands().then((brands) => {

            const list: Brand[] = [];

            (brands as Array<Record<string, any>>).map((brand) => {
                const objType = Brand.fromJson(brand);
                list.push(objType);
            })
            devices.setBrands(list)
        });
        fetchSuppliers().then((suppliers) => {

            const list: Supplier[] = [];

            (suppliers as Array<Record<string, any>>).map((supplier) => {
                const objType = Supplier.fromJson(supplier);
                list.push(objType);
            })
            devices.setSuppliers(list)
        });
        fetchAllCategories().then((categories) => {

            const list: Category[] = [];

            (categories as Array<Record<string, any>>).map((category) => {
                const objType = Category.fromJson(category);
                list.push(objType);
            })
            devices.setCategories(list)
        });
    }, [])


    async function  uploadProducts()  {
        if (productName && productModelName && price && image) {
            await createProduct({
                name: productName,
                type_id: devices.types[type_index].type_id,
                brand_id: devices.brands[brand_index].brand_id,
                supplier_id: devices.suppliers[supplier_index].supplier_id,
                user_id: user_id,
                category_id: devices.categories[category_index].id,
                model_name: productModelName,
                price: price,
                img: image,
                details: details,
            })
            alert(t("added_item"))
        }
    }

    function clearButton() {
        type_index = 0;
        brand_index = 0;
        supplier_index = 0;
        category_index = 0;
        changeProductName("");
        changeModelName("");
        changePrice(0);
        changeDetails("");
        changeImage(undefined)
    }

    /// return true if not check conditions
    function check(value: string): boolean {
        if (value) {
            return false;
        }
        alert(t("fill_field_correctly"));
        return true;
    }

    /// return true if cotain given value
    function checkContains(value: string, list: any): boolean {
        return list.indexOf(value) != -1
    }


    return (
        <div style={{ margin: "0 auto", justifyContent: "center" }} className="max_size">

            <h3 style={{ textAlign: "center" }}>{t("add_product")} </h3>
            <div className=" grid_cont">
                <div>
                    <div className="grid-item" > {t("name")}</div>
                    <div className="grid-item" > {t("model_name")}</div>
                    <div className="grid-item" > {t("price")}</div>
                    <div className="grid-item" > {t("image")}</div>
                    <div className="grid-item" > {t("type")}</div>
                    <div className="grid-item" > {t("brand")}</div>
                    <div className="grid-item" > {t("supplier")}</div>
                    <div className="grid-item" > {t("category")}</div>
                    <div className="grid-item" > {t("details")}</div>
                </div>
                <div>

                    <input
                        value={productName}
                        onChange={(e) => changeProductName(e.target.value)}
                        placeholder={t("product_name")}
                        className="form_input_text_style grid-item"
                        type="text"
                    />

                    <input
                        value={productModelName}
                        onChange={(e) => changeModelName(e.target.value)}
                        placeholder={t("product_modelname")}
                        className="form_input_text_style grid-item"
                        type="text"
                    />

                    <input
                        value={price}
                        onChange={(e) => changePrice(parseInt(e.target.value))}
                        placeholder={t("product_price")}
                        className="form_input_text_style grid-item"
                        type="text"
                    />

                    <input
                        placeholder={t("product_price")}
                        onChange={(e) => e.target.files![0] != null ? changeImage(e.target.files![0]) : null}
                        className="form_input_text_style grid-item"
                        type="file" />

                    {/* Types  */}
                    <div>
                        <select
                            onChange={(value) => { type_index = parseInt(value.currentTarget.value); }}
                            className="form_input_text_style grid-item">
                            {devices.types.map((type, index) => {
                                return <option value={index}> {type.name}</option>
                            })}
                        </select>
                        <div className="add_remove_form">
                            <input
                                value={type}
                                onChange={(e) => changeType(e.target.value)}
                                placeholder={t("add_or_remove_type")}
                                className="form_input_text_style grid-item"
                                type="text" />
                            <button
                                onClick={_ => {
                                    const types = devices.types.map((rtype) => rtype.name);
                                    if (check(type as string)) return;
                                    else if (checkContains((type as string), types)) {
                                        return alert(t("item_exists"));
                                    }
                                    devices.addType(type!)
                                        .then(_ => alert(t("item_added") + "!"));

                                }}
                                className="form_button"> {t("add")}</button>

                            <button
                                onClick={_ => {
                                    const types = devices.types.map((rtype) => rtype.name);
                                    if (check(type as string)) return;
                                    else if (!checkContains((type as string), types)) {
                                        return alert(t("item_not_exists"));
                                    }
                                    const type_index = types.indexOf(type!);
                                    const type_id = devices.types[type_index].type_id

                                    devices.deleteType(type_id)
                                        .then(_ => alert(t("item_removed") + "!"));

                                }}

                                id="remove_btn" className="form_button" > {t("remove")}</button>
                        </div>

                    </div>
                    {/* Brands  */}
                    <div>
                        <select
                            onChange={(value) => { brand_index = parseInt(value.currentTarget.value); }}
                            className="form_input_text_style grid-item">
                            {devices.brands.map((brand) => {
                                return <option id={brand.brand_id.toString()} value={brand.brand_id.toString()}> {brand.name}</option>
                            })}
                        </select>
                        <div className="add_remove_form">
                            <input
                                value={brand}
                                onChange={(e) => changeBrand(e.target.value)}
                                placeholder={t("add_or_remove_brand")}
                                className="form_input_text_style grid-item"
                                type="text" />
                            <button
                                onClick={_ => {
                                    const brands = devices.brands.map((rbrand) => rbrand.name);
                                    if (check(brand as string)) return;
                                    else if (checkContains((brand as string), brands)) {
                                        return alert(t("item_exists"));
                                    }
                                    devices.addBrand(brand!)
                                        .then(_ => alert(t("item_added") + "!"));

                                }}
                                className="form_button"> {t("add")}</button>
                            <button

                                onClick={_ => {
                                    const brands = devices.brands.map((rbrands) => rbrands.name);
                                    if (check(brand as string)) return;
                                    else if (!checkContains((brand as string), brands)) {
                                        return alert(t("item_not_exists"));
                                    }
                                    const brand_index = brands.indexOf(brand!);
                                    const brand_id = devices.brands[brand_index].brand_id

                                    devices.deleteBrand(brand_id)
                                        .then(_ => alert(t("item_removed") + "!"));

                                }}

                                id="remove_btn" className="form_button" > {t("remove")}</button>
                        </div>
                    </div>
                    {/* Suppliers  */}
                    <div>
                        <select
                            onChange={(value) => { supplier_index = parseInt(value.currentTarget.value); }}
                            className="form_input_text_style grid-item">
                            {devices.suppliers.map((supplier) => {
                                return <option id={supplier.supplier_id.toString()} value={supplier.supplier_id.toString()}> {supplier.name}</option>
                            })}
                        </select>

                        <div className="add_remove_form">
                            <input
                                value={supplier}
                                onChange={(e) => changeSupplier(e.target.value)}
                                placeholder={t("add_or_remove_supplier")}
                                className="form_input_text_style grid-item"
                                type="text" />
                            <button

                                onClick={_ => {
                                    const suppliers = devices.types.map((rsupplier) => rsupplier.name);
                                    if (check(supplier as string)) return;
                                    else if (checkContains((supplier as string), suppliers)) {
                                        return alert(t("item_exists"));
                                    }
                                    devices.addSupplier(supplier!)
                                        .then(_ => alert(t("item_added") + "!"));

                                }}
                                className="form_button"> {t("add")}</button>
                            <button


                                onClick={_ => {
                                    const suppliers = devices.suppliers.map((supplier) => supplier.name);
                                    if (check(supplier as string)) return;
                                    else if (!checkContains((supplier as string), suppliers)) {
                                        return alert(t("item_not_exists"));
                                    }
                                    const supplier_index = suppliers.indexOf(supplier!);
                                    const supplier_id = devices.suppliers[supplier_index].supplier_id

                                    devices.deleteSupplier(supplier_id)
                                        .then(_ => alert(t("item_removed") + "!"));

                                }}

                                id="remove_btn" className="form_button" > {t("remove")}</button>
                        </div>

                    </div>
                    {/* Categories */}
                    <div>
                        <select
                            onChange={(value) => { category_index = parseInt(value.currentTarget.value); }}
                            className="form_input_text_style grid-item">
                            {devices.categories.map((category) => {
                                return <option id={category.id.toString()} value={category.id.toString()}> {category.name}</option>
                            })}
                        </select>

                        <div className="add_remove_form">
                            <input
                                value={category}
                                onChange={(e) => changeCategory(e.target.value)}
                                placeholder={t("add_or_remove_category")}
                                className="form_input_text_style grid-item"
                                type="text" />
                            <button

                                onClick={_ => {
                                    const categories = devices.categories.map((rcategory) => rcategory.name);
                                    if (check(category as string)) return;
                                    else if (checkContains((category as string), categories)) {
                                        return alert(t("item_exists"));
                                    }
                                    devices.addCategory(category!)
                                        .then(_ => alert(t("item_added") + "!"));

                                }}
                                className="form_button"> {t("add")}</button>
                            <button

                                onClick={_ => {
                                    const categories = devices.categories.map((rcategory) => rcategory.name);
                                    if (check(category as string)) return;
                                    else if (!checkContains((category as string), categories)) {
                                        return alert(t("item_not_exists"));
                                    }
                                    const category_index = categories.indexOf(category!);
                                    const category_id = devices.categories[category_index].id

                                    devices.deleteCategory(category_id)
                                        .then(_ => alert(t("item_removed") + "!"));

                                }}

                                id="remove_btn" className="form_button" > {t("remove")}</button>
                        </div>

                    </div>
                    <div>
                        <textarea value={details} onChange={(e) => changeDetails(e.target.value)} placeholder={t("details")} name="" id="" cols={30} rows={10}/>                                
                        
                    </div>
              
                </div>

            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <input onClick={() => uploadProducts()} className="form_button sub_button" type="button" value={t("add_product")} />
                <input onClick={() => clearButton()} className="form_button sub_button" type="button" value={t("clear")} />
            </div>
        </div>
    )
})


export default AddProductForm