import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { addProdcut } from "./Redux1/Action";

function AddProduct() {

  const [prodcutsValue, setProdcutValue] = useState({

    product_id: Math.floor(Math.random() * 100),
    create_date: new Date().toLocaleString(),
    product_quantity:1,
    seller_name: '',
    sku_id: '',
    status: '',
    stock: '',
    dilvery_charges: '',
    category_name: '',
    sub_category_name: '',
    product_brand: '',
    product_name: '',
    product_image: '',
    product_mrpprice:parseInt(),
    product_price: parseInt(),
    ram: '',
    storage: '',
    color: '',
    display: '',
    processor: '',
    os: '',
    camera: '',
    battery: '',
    product_details: ''
  });

  const [errorMsg, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newObj = { ...prodcutsValue, [name]: value };
    // console.log(value);
    setProdcutValue(newObj);
    console.log(event.target.name);
    // console.log(name, value);
  };

  // const dispatch =  useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const productObj = { prodcutsValue }
  //   console.log("Hi loda", productObj);
  //   dispatch(addProdcut(productObj));
  // }


  const formValidation = () => {
    let checkValid = true;

    if (prodcutsValue.seller_name === '' || prodcutsValue.seller_name === null) {
      checkValid = false;
      setError(true);
      console.log(`Please Enter the Seller Name!!`);
    }

    if (prodcutsValue.sku_id === '' || prodcutsValue.sku_id === null) {
      checkValid = false;
      setError(true);
      console.log(`Please Enter the Seller SKU ID!!`);
    }

    if (prodcutsValue.status === '' || prodcutsValue.status === null) {
      checkValid = false;
      setError(true);
      console.log(`Please Enter the Status!!`);
    }

    if (prodcutsValue.stock === '' || prodcutsValue.stock === null) {
      checkValid = false;
      setError(true);
      console.log(`Please Enter the Stock!!`);
    }

    if (prodcutsValue.dilvery_charges === '' || prodcutsValue.dilvery_charges === null) {
      checkValid = false;
      setError(true);
      console.log(`Please Enter the Dilvery Charges!!`);
    }

    if (prodcutsValue.category_name === '' || prodcutsValue.category_name === null) {
      checkValid = false;
      setError(true);
      console.log(`Please Select the Category!!`);
    }
    if (prodcutsValue.sub_category_name === null || prodcutsValue.sub_category_name === '') {
      checkValid = false;
      setError(true);
      console.log(`Please Select the Sub-Category!!`);
    }
    if (prodcutsValue.product_brand === null || prodcutsValue.product_brand === '') {
      checkValid = false;
      setError(true);
      console.log(`Please Enter the Brand Name!!`);
    }

    if (prodcutsValue.product_name === null || prodcutsValue.product_name === '') {
      checkValid = false;
      setError(true);
      console.log(`Please Enter the Model Name!!`);
    }

    if (prodcutsValue.product_image === null || prodcutsValue.product_image === '') {
      checkValid = false;
      setError(true);
      console.log(`Insert the Prodcut-Image!!`);
    }

    if (prodcutsValue.product_mrpprice === null || prodcutsValue.product_mrpprice === '') {
      checkValid = false;
      setError(true);
      console.log(`Please Enter the Product-Price!!`);
    }

    if (prodcutsValue.product_price === null || prodcutsValue.product_price === '') {
      checkValid = false;
      setError(true);
      console.log(`Please Enter the Selling-Price!!`);
    }

    if (prodcutsValue.ram === null || prodcutsValue.ram === '') {
      checkValid = false;
      setError(true);
      console.log(`Please Enter the Ram!!`);
    }

    if (prodcutsValue.storage === null || prodcutsValue.storage === '') {
      checkValid = false;
      setError(true);
      console.log(`Pleasen Enter the Storage!!`);
    }

    if (prodcutsValue.color === null || prodcutsValue.color === '') {
      checkValid = false;
      setError(true);
      console.log(`Please Enter the Mobile-Color!!`);
    }

    if (prodcutsValue.display === null || prodcutsValue.display === '') {
      checkValid = false;
      setError(true);
      console.log(`Please Enter the Display-Details!!`);
    }

    if (prodcutsValue.processor === null || prodcutsValue.processor === '') {
      checkValid = false;
      setError(true);
      console.log(`Please Enter the Processor-Details!!`);
    }

    if (prodcutsValue.os === null || prodcutsValue.os === '') {
      checkValid = false;
      setError(true);
      console.log(`Please Enter the Operating-Sytem Details!!`);
    }

    if (prodcutsValue.camera === null || prodcutsValue.camera === '') {
      checkValid = false;
      setError(true);
      console.log(`Please Enter the Camera Details!!`);
    }

    if (prodcutsValue.battery === null || prodcutsValue.battery === '') {
      checkValid = false;
      setError(true);
      console.log(`Please Enter the Battery & Charging Details!!`);
    }

    if (prodcutsValue.discription === null || prodcutsValue.discription === '') {
      checkValid = false;
      setError(true);
      console.log(`Please Enter the Mobile Discription Details!!`);
    }
    return checkValid;
  }

  const handleSubmit = (e) => {
    const newData = { prodcutsValue };
    e.preventDefault();

    if (formValidation(prodcutsValue)) {
      fetch(`http://localhost:9002/product_list`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(prodcutsValue),
      }).then((res) => {
        alert(`SucessFully AddProdcut!!!`);
        navigate('/seller/productlisting')
      }).catch((err) => {
        console.log(`Request Error!!!`);
      });
    }
    console.log(newData);
  }

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle mb-4">
          <h1>Add Product</h1>

        </div>

        {/*form start */}

        <form onSubmit={handleSubmit}>
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
                        <input type="text" autoComplete="off" class="form-control" name="seller_name" value={prodcutsValue.seller_name} onChange={handleChange} />
                        {errorMsg && prodcutsValue.seller_name.length <= 0 ? <p style={{ color: "red" }}>Seller Name is Required...</p> : ""}
                      </div>
                    </div>
                    <div class="row mb-4">
                      <label for="inputText" class="col-sm-3 col-form-label">
                        Seller SKU ID
                      </label>
                      <div class="col-sm-9">
                        <input type="text" class="form-control" autoComplete="off" name="sku_id" value={prodcutsValue.sku_id} onChange={handleChange} />
                        {errorMsg && prodcutsValue.sku_id.length <= 0 ? <p style={{ color: "red" }}>Seller SKU ID is Required...</p> : ""}
                      </div>
                    </div>
                    <div class="row mb-4">
                      <label for="inputText" class="col-sm-3 col-form-label">
                        Listing Status
                      </label>
                      <div class="col-sm-9">
                        <select id="inputState" class="form-select" name="status" value={prodcutsValue.status} onChange={handleChange}>
                          <option selected>Select one</option>
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                        {errorMsg && prodcutsValue.status.length <= 0 ? <p style={{ color: "red" }}>Status is Required...</p> : ""}
                      </div>
                    </div>
                    <div class="row mb-4">
                      <label for="inputText" class="col-sm-3 col-form-label">
                        Stock
                      </label>
                      <div class="col-sm-9">
                        <input type="text" class="form-control" autoComplete="off" name="stock" value={prodcutsValue.stock} onChange={handleChange} />
                        {errorMsg && prodcutsValue.stock.length <= 0 ? <p style={{ color: "red" }}>Stock is Required...</p> : ""}
                      </div>
                    </div>
                    <div class="row mb-4">
                      <label for="inputText" class="col-sm-3 col-form-label">
                        Delivery Charges
                      </label>
                      <div class="col-sm-9">
                        <input type="text" class="form-control" autoComplete="off" name="dilvery_charges" value={prodcutsValue.dilvery_charges} onChange={handleChange} />
                        {errorMsg && prodcutsValue.dilvery_charges.length <= 0 ? <p style={{ color: "red" }}>Dilvery Charges is Required...</p> : ""}
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
                      <select id="inputState" class="form-select" autoComplete="off" name="category_name" value={prodcutsValue.category_name} onChange={handleChange}>

                        <option selected>Select one</option>
                        <option>Mobile</option>
                        <option>Tablet</option>
                        <option>Laptop</option>
                        <option>Computer</option>
                      </select>
                      {errorMsg && prodcutsValue.category_name.length <= 0 ? <p style={{ color: "red" }}>Category Name is Required...</p> : ""}
                    </div>
                    <div class="col-md-12 mb-4">
                      <label for="inputState" class="form-label">
                        Sub Category name{" "}
                      </label>
                      <select id="inputState" class="form-select" autoComplete="off" name="sub_category_name" value={prodcutsValue.sub_category_name} onChange={handleChange}>

                        <option selected>Select one</option>
                        <option>Android</option>
                        <option>iOS</option>
                        <option>Windows</option>
                        <option>MacOs</option>
                      </select>
                      {errorMsg && prodcutsValue.sub_category_name.length <= 0 ? <p style={{ color: "red" }}>Sub-Category Name is Required...</p> : ""}
                    </div>

                    <div class="row" style={{ marginBottom: "35px" }}>
                      <label for="inputText" class="col-sm-3 col-form-label">
                        Brand Name
                      </label>
                      <div class="col-sm-9">
                        <input type="text" autoComplete="off" class="form-control" name="product_brand" value={prodcutsValue.product_brand} onChange={handleChange} />
                        {errorMsg && prodcutsValue.product_brand.length <= 0 ? <p style={{ color: "red" }}>Product-Brand Name is Required...</p> : ""}
                      </div>
                    </div>
                    <div class="row mb-4">
                      <label for="inputText" class="col-sm-3 col-form-label">
                        Model Name
                      </label>
                      <div class="col-sm-9">
                        <input type="text" autoComplete="off" class="form-control" name="product_name" value={prodcutsValue.product_name} onChange={handleChange} />
                        {errorMsg && prodcutsValue.product_name.length <= 0 ? <p style={{ color: "red" }}>Prodcut-Model Name is Required...</p> : ""}
                      </div>
                    </div>
                    <div class="row mb-4">
                      <label for="inputText" class="col-sm-3 col-form-label">
                        Product Images
                      </label>
                      <div class="col-sm-9">
                        <input type="text" autoComplete="off" class="form-control" name="product_image" value={prodcutsValue.product_image} onChange={handleChange} />
                        {errorMsg && prodcutsValue.product_image.length <= 0 ? <p style={{ color: "red" }}>Prodcut-Image is Required...</p> : ""}
                      </div>
                    </div>


                    <h5 className="card-title">Price Description</h5>
                    <div class="row mb-4">
                      <label for="inputText" class="col-sm-3 col-form-label">
                        MRP Price
                      </label>
                      <div class="col-sm-9">
                        <input type="number" autoComplete="off" class="form-control" name="product_mrpprice" value={prodcutsValue.product_mrpprice} onChange={handleChange} />
                        {errorMsg && prodcutsValue.product_mrpprice.length <= 0 ? <p style={{ color: "red" }}>Prodcut-Price is Required...</p> : ""}
                      </div>
                    </div>
                    <div class="row mb-4">
                      <label for="inputText" class="col-sm-3 col-form-label">
                        Selling Price
                      </label>
                      <div class="col-sm-9">
                        <input type="number" autoComplete="off" class="form-control" name="product_price" value={prodcutsValue.product_price} onChange={handleChange} />
                        {errorMsg && prodcutsValue.product_price.length <= 0 ? <p style={{ color: "red" }}>selling-Price is Required...</p> : ""}
                      </div>
                    </div>
                    <h5 className="card-title">Other Description</h5>
                    <div class="row mb-4">
                      <label for="inputText" class="col-sm-3 col-form-label">
                        Ram
                      </label>
                      <div class="col-sm-9">
                        <input type="text" autoComplete="off" class="form-control" name="ram" value={prodcutsValue.ram} onChange={handleChange} />
                        {errorMsg && prodcutsValue.ram.length <= 0 ? <p style={{ color: "red" }}>Prodcut-Ram is Required...</p> : ""}
                      </div>
                    </div>
                    <div class="row mb-4">
                      <label for="inputText" class="col-sm-3 col-form-label">
                        Storage
                      </label>
                      <div class="col-sm-9">
                        <input type="text" autoComplete="off" class="form-control" name="storage" value={prodcutsValue.storage} onChange={handleChange} />
                        {errorMsg && prodcutsValue.storage.length <= 0 ? <p style={{ color: "red" }}>Prodcut-Storage is Required...</p> : ""}
                      </div>
                    </div>
                    <div class="row mb-4">
                      <label for="inputText" class="col-sm-3 col-form-label">
                        Color
                      </label>
                      <div class="col-sm-9">
                        <input type="text" autoComplete="off" class="form-control" name="color" value={prodcutsValue.color} onChange={handleChange} />
                        {errorMsg && prodcutsValue.color.length <= 0 ? <p style={{ color: "red" }}>Product-Color is Required...</p> : ""}
                      </div>
                    </div>
                    <div class="row mb-4">
                      <label for="inputText" class="col-sm-3 col-form-label">
                        Display
                      </label>
                      <div class="col-sm-9">
                        <input type="text" autoComplete="off" class="form-control" name="display" value={prodcutsValue.display} onChange={handleChange} />
                        {errorMsg && prodcutsValue.display.length <= 0 ? <p style={{ color: "red" }}>Prodcut-Display is Required...</p> : ""}
                      </div>
                    </div>
                    <div class="row mb-4">
                      <label for="inputText" class="col-sm-3 col-form-label">
                        Processor
                      </label>
                      <div class="col-sm-9">
                        <input type="text" autoComplete="off" class="form-control" name="processor" value={prodcutsValue.processor} onChange={handleChange} />
                        {errorMsg && prodcutsValue.processor.length <= 0 ? <p style={{ color: "red" }}>Prodcut-Processor is Required...</p> : ""}
                      </div>
                    </div>
                    <div class="row mb-4">
                      <label for="inputText" class="col-sm-3 col-form-label">
                        Operation System
                      </label>
                      <div class="col-sm-9">
                        <input type="text" autoComplete="off" class="form-control" name="os" value={prodcutsValue.os} onChange={handleChange} />
                        {errorMsg && prodcutsValue.os.length <= 0 ? <p style={{ color: "red" }}>Operating-System is Required...</p> : ""}
                      </div>
                    </div>
                    <div class="row mb-4">
                      <label for="inputText" class="col-sm-3 col-form-label">
                        Camera
                      </label>
                      <div class="col-sm-9">
                        <input type="text" autoComplete="off" class="form-control" name="camera" value={prodcutsValue.camera} onChange={handleChange} />
                        {errorMsg && prodcutsValue.camera.length <= 0 ? <p style={{ color: "red" }}>Camera-details is Required...</p> : ""}
                      </div>
                    </div>
                    <div class="row mb-4">
                      <label for="inputText" class="col-sm-3 col-form-label">
                        Battery & Charging
                      </label>
                      <div class="col-sm-9">
                        <input type="text" autoComplete="off" class="form-control" name="battery" value={prodcutsValue.battery} onChange={handleChange} />
                        {errorMsg && prodcutsValue.battery.length <= 0 ? <p style={{ color: "red" }}>Battery-details is Required...</p> : ""}
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
                          value={prodcutsValue.product_details}
                          onChange={handleChange}>


                        </textarea>
                        {errorMsg && prodcutsValue.product_details.length <= 0 ? <p style={{ color: "red" }}>Product-Discription is Required...</p> : ""}
                      </div>
                    </div>


                  </div>
                </div>
              </div>



              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Add product
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

export default AddProduct;