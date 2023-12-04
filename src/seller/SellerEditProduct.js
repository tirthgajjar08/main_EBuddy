import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
import axios from "axios";
// import ProductListing from "./ProductListing";

function SellerEditProduct() {

    const [errorMsg, setError] = useState(false);

    const formValidation = () => {
        let checkValid = true;

        if (seller_name === '' || seller_name === null) {
            checkValid = false;
            setError(true);
            console.log(`Please Enter the Seller Name!!`);
        }

        if (sku_id === '' || sku_id === null) {
            checkValid = false;
            setError(true);
            console.log(`Please Enter the Seller SKU ID!!`);
        }

        if (status === '' || status === null) {
            checkValid = false;
            setError(true);
            console.log(`Please Enter the Status!!`);
        }

        if (stock === '' || stock === null) {
            checkValid = false;
            setError(true);
            console.log(`Please Enter the Stock!!`);
        }

        if (dilvery_charges === '' || dilvery_charges === null) {
            checkValid = false;
            setError(true);
            console.log(`Please Enter the Dilvery Charges!!`);
        }

        if (category_name === '' || category_name === null) {
            checkValid = false;
            setError(true);
            console.log(`Please Select the Category!!`);
        }
        if (sub_category_name === null || sub_category_name === '') {
            checkValid = false;
            setError(true);
            console.log(`Please Select the Sub-Category!!`);
        }
        if (product_brand === null || product_brand === '') {
            checkValid = false;
            setError(true);
            console.log(`Please Enter the Brand Name!!`);
        }

        if (product_name === null || product_name === '') {
            checkValid = false;
            setError(true);
            console.log(`Please Enter the Model Name!!`);
        }

        if (product_image === null || product_image === '') {
            checkValid = false;
            setError(true);
            console.log(`Insert the Prodcut-Image!!`);
        }

        if (product_mrpprice === null || product_mrpprice === '') {
            checkValid = false;
            setError(true);
            console.log(`Please Enter the Product-Price!!`);
        }

        if (product_price === null || product_price === '') {
            checkValid = false;
            setError(true);
            console.log(`Please Enter the Selling-Price!!`);
        }

        if (ram === null || ram === '') {
            checkValid = false;
            setError(true);
            console.log(`Please Enter the Ram!!`);
        }

        if (storage === null || storage === '') {
            checkValid = false;
            setError(true);
            console.log(`Pleasen Enter the Storage!!`);
        }

        if (color === null || color === '') {
            checkValid = false;
            setError(true);
            console.log(`Please Enter the Mobile-Color!!`);
        }

        if (display === null || display === '') {
            checkValid = false;
            setError(true);
            console.log(`Please Enter the Display-Details!!`);
        }

        if (processor === null || processor === '') {
            checkValid = false;
            setError(true);
            console.log(`Please Enter the Processor-Details!!`);
        }

        if (os === null || os === '') {
            checkValid = false;
            setError(true);
            console.log(`Please Enter the Operating-Sytem Details!!`);
        }

        if (camera === null || camera === '') {
            checkValid = false;
            setError(true);
            console.log(`Please Enter the Camera Details!!`);
        }

        if (battery === null || battery === '') {
            checkValid = false;
            setError(true);
            console.log(`Please Enter the Battery & Charging Details!!`);
        }

        if (product_details === null || product_details === '') {
            checkValid = false;
            setError(true);
            console.log(`Please Enter the Mobile Discription Details!!`);
        }
        // if (create_date === null || create_date === '') {
        //     checkValid = false;
        //     setError(true);
        //     console.log(`Please Enter the Mobile Discription Details!!`);
        // }
        return checkValid;
    }

    //   const handleSubmit = (e) => {
    //     const newData = { prodcutsValue };
    //     e.preventDefault();

    //     if (formValidation(prodcutsValue)) {
    //       fetch(`http://localhost:9002/product_list`, {
    //         method: "POST",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify(prodcutsValue),
    //       }).then((res) => {
    //         alert(`SucessFully AddProdcut!!!`);
    //         navigate('/seller/productlisting')
    //       }).catch((err) => {
    //         console.log(`Request Error!!!`);
    //       });
    //     }
    //     console.log(newData);
    //   }

    const [id, setId] = useState(0);
    const [product_id, setProductId] = useState(0);
    const [seller_name, setSellerName] = useState('');
    const [sku_id, setSkuId] = useState('');
    const [status, setStatus] = useState('');
    const [stock, setStock] = useState('');
    const [dilvery_charges, setCharges] = useState('');
    const [category_name, setCategory] = useState('');
    const [sub_category_name, setCatName] = useState('');
    const [product_brand, setProductBrand] = useState('');
    const [product_name, setProductName] = useState('');
    const [product_image, setImage] = useState('');
    const [product_mrpprice, setMRP] = useState('');
    const [product_price, setPrice] = useState('');
    const [ram, setRam] = useState('');
    const [storage, setStorage] = useState('');
    const [color, setColor] = useState('');
    const [display, setDisplay] = useState('');
    const [processor, setProcessor] = useState('');
    const [os, setOs] = useState('');
    const [camera, setCamera] = useState('');
    const [battery, setbattery] = useState('');
    const [product_details, setProductDetils] = useState('');
    const [create_date, setDate] = useState('');
    // const [seller_name, setSellerName] =  useState('');

    const dataNavigate = useNavigate();
    useEffect(() => {
        setId(localStorage.getItem('id'));
        setDate(localStorage.getItem('create_date'));
        setProductId(localStorage.getItem('product_id'));
        setSellerName(localStorage.getItem('seller_name'));
        setSkuId(localStorage.getItem('sku_id'));
        setStatus(localStorage.getItem('status'));
        setStock(localStorage.getItem('stock'));
        setCharges(localStorage.getItem('dilvery_charges'));
        setCategory(localStorage.getItem('category_name'))
        setCatName(localStorage.getItem('sub_category_name'));
        setProductBrand(localStorage.getItem('product_brand'));
        setProductName(localStorage.getItem('product_name'))
        setImage(localStorage.getItem('product_image'));
        setMRP(localStorage.getItem('product_mrpprice'));
        setPrice(localStorage.getItem('product_price'));
        setRam(localStorage.getItem('ram'));
        setStorage(localStorage.getItem('storage'));
        setColor(localStorage.getItem('color'));
        setDisplay(localStorage.getItem('display'));
        setProcessor(localStorage.getItem('processor'));
        setOs(localStorage.getItem('os'));
        setCamera(localStorage.getItem('camera'));
        setbattery(localStorage.getItem('battery'));
        setProductDetils(localStorage.getItem('product_details'));
        // dataNavigate('/seller/ProductListing')

    }, [])
    // console.log(product_id);

    const handleUpdateData = (event) => {
        event.preventDefault();
        if (formValidation) {
            axios.put(`http://localhost:9002/product_list/${id}`, {
                product_id: product_id,
                create_date:new Date().toLocaleString(),
                seller_name: seller_name,
                sku_id: sku_id,
                status: status,
                stock: stock,
                dilvery_charges: dilvery_charges,
                category_name: category_name,
                sub_category_name: sub_category_name,
                product_brand: product_brand,
                product_name: product_name,
                product_image: product_image,
                product_mrpprice: product_mrpprice,
                product_price: product_price,
                ram: ram,
                storage: storage,
                color: color,
                display: display,
                processor: processor,
                os: os,
                camera: camera,
                battery: battery,
                product_details: product_details,
                // create_date:create_date,
            })
                .then((res) => {
                    // console.log("Data SuccessFully Updated!!!",res.data);
                    dataNavigate('/seller/productlisting')
                    alert("Succfully Edit!!!");
                }).catch((err) => {
                    console.log("Updated Data Failed!!!");
                    console.log(err);
                })
        }
    }


    return (
        <>
            <main id="main" className="main">
                <div className="pagetitle mb-4">
                    <h1>Update Product</h1>

                </div>

                {/*form start */}

                <form
                    onSubmit={handleUpdateData}
                >
                    <section className="section seller_add_product_style">
                        <div className="row">


                            {/* Left side card */}
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Seller Details</h5>
                                        <div class="row mb-4">
                                            <label for="inputText" class="col-sm-3 col-form-label">
                                                Seller Name
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="text" autoComplete="off" class="form-control" name="seller_name" value={seller_name} onChange={(e) => setSellerName(e.target.value)} />
                                                {errorMsg && seller_name.length <= 0 ? <p style={{ color: "red" }}>Seller Name is Required...</p> : ""}
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="inputText" class="col-sm-3 col-form-label">
                                                Seller SKU ID
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" name="sku_id" value={sku_id} onChange={(e) => setSkuId(e.target.value)} />
                                                {errorMsg && sku_id.length <= 0 ? <p style={{ color: "red" }}>Seller SKU ID is Required...</p> : ""}
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="inputText" class="col-sm-3 col-form-label">
                                                Listing Status
                                            </label>
                                            <div class="col-sm-9">
                                                <select id="inputState" class="form-select" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                                                    {errorMsg && status.length <= 0 ? <p style={{ color: "red" }}>Status is Required...</p> : ""}
                                                    <option selected>Select one</option>
                                                    <option>Active</option>
                                                    <option>Inactive</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="inputText" class="col-sm-3 col-form-label">
                                                Stock
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" name="stock" value={stock} onChange={(e) => setStock(e.target.value)} />
                                                {errorMsg && stock.length <= 0 ? <p style={{ color: "red" }}>Stock is Required...</p> : ""}
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="inputText" class="col-sm-3 col-form-label">
                                                Delivery Charges
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" name="dilvery_charges" value={dilvery_charges} onChange={(e) => setCharges(e.target.value)} />
                                                {errorMsg && dilvery_charges.length <= 0 ? <p style={{ color: "red" }}>Dilvery Charges is Required...</p> : ""}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            {/* Right side card */}
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5>Select Category & Brand</h5>

                                        <div class="col-md-12 mb-4">
                                            <label for="inputState" class="form-label">
                                                Category name{" "}
                                            </label>
                                            <select id="inputState" class="form-select" name="category_name" value={category_name} onChange={(e) => setCategory(e.target.value)}>
                                                {errorMsg && category_name.length <= 0 ? <p style={{ color: "red" }}>Category Name is Required...</p> : ""}
                                                <option selected>Select one</option>
                                                <option>Mobile</option>
                                                <option>Tablet</option>
                                                <option>Laptop</option>
                                                <option>Computer</option>
                                            </select>
                                        </div>
                                        <div class="col-md-12 mb-4">
                                            <label for="inputState" class="form-label">
                                                Sub Category name{" "}
                                            </label>
                                            <select id="inputState" class="form-select" name="sub_category_name" value={sub_category_name} onChange={(e) => setCatName(e.target.value)}>
                                                {errorMsg && sub_category_name.length <= 0 ? <p style={{ color: "red" }}>Sub-Category Name is Required...</p> : ""}
                                                <option selected>Select one</option>
                                                <option>Android</option>
                                                <option>iOS</option>
                                                <option>Windows</option>
                                                <option>MacOs</option>
                                            </select>
                                        </div>

                                        <div class="row" style={{ marginBottom: "35px" }}>
                                            <label for="inputText" class="col-sm-3 col-form-label">
                                                Brand Name
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="text" autoComplete="off" class="form-control" name="product_brand" value={product_brand} onChange={(e) => setProductBrand(e.target.value)} />
                                                {errorMsg && product_brand.length <= 0 ? <p style={{ color: "red" }}>Product-Brand Name is Required...</p> : ""}
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="inputText" class="col-sm-3 col-form-label">
                                                Model Name
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="text" autoComplete="off" class="form-control" name="product_name" value={product_name} onChange={(e) => setProductName(e.target.value)} />
                                                {errorMsg && product_name.length <= 0 ? <p style={{ color: "red" }}>Prodcut-Model Name is Required...</p> : ""}
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="inputText" class="col-sm-3 col-form-label">
                                                Product Images
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="text" autoComplete="off" class="form-control" name="product_image" value={product_image} onChange={(e) => setImage(e.target.value)} />
                                                {errorMsg && product_image.length <= 0 ? <p style={{ color: "red" }}>Prodcut-Image is Required...</p> : ""}
                                            </div>
                                        </div>


                                        <h5 className="card-title">Price Description</h5>
                                        <div class="row mb-4">
                                            <label for="inputText" class="col-sm-3 col-form-label">
                                                MRP Price
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="number" autoComplete="off" class="form-control" name="product_mrpprice" value={product_mrpprice} onChange={(e) => setMRP(e.target.value)} />
                                                {errorMsg && product_mrpprice.length <= 0 ? <p style={{ color: "red" }}>Prodcut-Price is Required...</p> : ""}
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="inputText" class="col-sm-3 col-form-label">
                                                Selling Price
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="number" autoComplete="off" class="form-control" name="product_price" value={product_price} onChange={(e) => setPrice(e.target.value)} />
                                                {errorMsg && product_price.length <= 0 ? <p style={{ color: "red" }}>selling-Price is Required...</p> : ""}
                                            </div>
                                        </div>
                                        <h5 className="card-title">Other Description</h5>
                                        <div class="row mb-4">
                                            <label for="inputText" class="col-sm-3 col-form-label">
                                                Ram
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="text" autoComplete="off" class="form-control" name="ram" value={ram} onChange={(e) => setRam(e.target.value)} />
                                                {errorMsg && ram.length <= 0 ? <p style={{ color: "red" }}>Prodcut-Ram is Required...</p> : ""}
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="inputText" class="col-sm-3 col-form-label">
                                                Storage
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="text" autoComplete="off" class="form-control" name="storage" value={storage} onChange={(e) => setStorage(e.target.value)} />
                                                {errorMsg && storage.length <= 0 ? <p style={{ color: "red" }}>Prodcut-Storage is Required...</p> : ""}
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="inputText" class="col-sm-3 col-form-label">
                                                Color
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="text" autoComplete="off" class="form-control" name="color" value={color} onChange={(e) => setColor(e.target.value)} />
                                                {errorMsg && color.length <= 0 ? <p style={{ color: "red" }}>Product-Color is Required...</p> : ""}
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="inputText" class="col-sm-3 col-form-label">
                                                Display
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="text" autoComplete="off" class="form-control" name="display" value={display} onChange={(e) => setDisplay(e.target.value)} />
                                                {errorMsg && display.length <= 0 ? <p style={{ color: "red" }}>Prodcut-Display is Required...</p> : ""}
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="inputText" class="col-sm-3 col-form-label">
                                                Processor
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="text" autoComplete="off" class="form-control" name="processor" value={processor} onChange={(e) => setProcessor(e.target.value)} />
                                                {errorMsg && processor.length <= 0 ? <p style={{ color: "red" }}>Prodcut-Processor is Required...</p> : ""}
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="inputText" class="col-sm-3 col-form-label">
                                                Operation System
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="text" autoComplete="off" class="form-control" name="os" value={os} onChange={(e) => setOs(e.target.value)} />
                                                {errorMsg && os.length <= 0 ? <p style={{ color: "red" }}>Operating-System is Required...</p> : ""}
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="inputText" class="col-sm-3 col-form-label">
                                                Camera
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="text" autoComplete="off" class="form-control" name="camera" value={camera} onChange={(e) => setCamera(e.target.value)} />
                                                {errorMsg && camera.length <= 0 ? <p style={{ color: "red" }}>Camera-details is Required...</p> : ""}
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="inputText" class="col-sm-3 col-form-label">
                                                Battery & Charging
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="text" autoComplete="off" class="form-control" name="battery" value={battery} onChange={(e) => setbattery(e.target.value)} />
                                                {errorMsg && battery.length <= 0 ? <p style={{ color: "red" }}>Battery-details is Required...</p> : ""}
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="inputText" class="col-sm-3 col-form-label">
                                                Description
                                            </label>
                                            <div class="col-sm-9">
                                                <textarea
                                                    class="form-control"
                                                    rows="4"
                                                    cols="50"
                                                    name="product_details"
                                                    value={product_details} onChange={(e) => setProductDetils(e.target.value)}
                                                >
                                                    {errorMsg && product_details.length <= 0 ? <p style={{ color: "red" }}>Product-Discription is Required...</p> : ""}

                                                </textarea>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>



                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">
                                    Update product
                                </button>

                            </div>
                        </div>
                        {/* row end */}
                    </section>
                </form>
                {/* main form end */}
            </main>
            <Outlet />
        </>
    );
}

export default SellerEditProduct;