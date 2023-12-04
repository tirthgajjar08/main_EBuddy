import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { AiFillDelete } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsDatabaseFillCheck, BsDatabaseFillSlash } from "react-icons/bs";
import { FaStoreAltSlash } from "react-icons/fa"
import { RiEditBoxFill } from "react-icons/ri"
import axios from 'axios';
// import {VscLayersActive} from "react-icons/vsc"

function AdminProductList() {

  const [prodcutsValue, setDisplayProdcut] = useState(['']);
  const[filterData, setFilterData] = useState([]);

  function getProdctData() {
    axios.get('http://localhost:9002/product_list')
      .then((res) => {
        setDisplayProdcut(res.data);
        setFilterData(res.data);
        console.log("Local Storage DATA::::::::> ", res.data);
      })
  }

  function setDataTOStorage(id, product_id, seller_name, sku_id, status, stock, dilvery_charges, category_name, sub_category_name, product_brand, product_name, product_image, product_mrpprice, product_price, ram, storage, color, display, processor, os, camera, battery, product_details) {
    localStorage.setItem('id', id);
    localStorage.setItem('product_id', product_id);
    localStorage.setItem('seller_name', seller_name);
    localStorage.setItem('sku_id', sku_id);
    localStorage.setItem('status', status);
    localStorage.setItem('stock', stock);
    localStorage.setItem('dilvery_charges', dilvery_charges);
    localStorage.setItem('category_name', category_name);
    localStorage.setItem('sub_category_name', sub_category_name);
    localStorage.setItem('product_brand', product_brand);
    localStorage.setItem('product_name', product_name);
    localStorage.setItem('product_image', product_image);
    localStorage.setItem('product_mrpprice', product_mrpprice);
    localStorage.setItem('product_price', product_price);
    localStorage.setItem('ram', ram);
    localStorage.setItem('storage', storage);
    localStorage.setItem('color', color);
    localStorage.setItem('display', display);
    localStorage.setItem('processor', processor);
    localStorage.setItem('os', os);
    localStorage.setItem('camera', camera);
    localStorage.setItem('battery', battery);
    localStorage.setItem('product_details', product_details);
  }


  //delete productdata
  function productDelete(id) {
    axios.delete(`http://localhost:9002/product_list/${id}`)
      .then(() => {
        getProdctData();
        // console.log(getProdctData());
      })
  }

  useEffect(() => {
    getProdctData();
    // console.log(getProdctData());
  }, [])

  const handleFilter = (e) => {
    setFilterData(prodcutsValue.filter(f => f.product_brand.toLowerCase().includes(e.target.value)));
  }

  return (
    <>
      <main id="main" className="main">

        <div className="pagetitle mb-1">
          <h1>Product List</h1>

        </div>
        <div className='row prolist_up_style'>
          <div className='col-4'>
            <div className='prolist_active_style'>
              <h3><BsDatabaseFillCheck style={{ fontSize: "29px", marginRight: "13px" }} />10</h3>
              <p style={{ color: "green" }}>Active Listing:</p>
            </div>

          </div>
          <div className='col-4'>   <div className='prolist_active_style'>
            <h3><BsDatabaseFillSlash style={{ fontSize: "29px", marginRight: "13px" }} />25</h3>
            <p style={{ color: "red" }}>In Active Listing:</p>
          </div>
          </div>

          <div className='col-4'>   <div className='prolist_active_style'>
            <h3><FaStoreAltSlash style={{ fontSize: "29px", marginRight: "13px" }} />25</h3>
            <p>Out Of stock:</p>
          </div></div>

        </div>

        <section className="section">
          <div className="row">

            <div className="col-lg-12">

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Single Listing</h5>
                  <div className="search-bar justify-content-end">
                    <form
                      className="search-form d-flex align-items-center"
                      method="POST"
                      action="#"
                    >
                      <input
                        type="text"
                        name="query"
                        placeholder="Search Product"
                        title="Enter search keyword"
                        className='p-1 w-40'
                        onChange={handleFilter}
                        autoComplete='off'
                      />
                      <Link className='btn' to="/seller/addproduct">
                        <button className='btn' style={{backgroundColor:"red"}}>Add Product</button>
                      </Link>

                    </form>
                  </div>
                  <table className="prolist_style table datatable mt-4">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Product Detail</th>
                        <th scope="col">Category</th>
                        <th scope="col">Created date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      {
                        filterData.map((items, index) => {
                          return (
                            <>
                              <tr key={index}>
                                <th scope="row">{items.product_id}</th>

                                <td> <div
                                  className="sellerprolist-col-1  d-flex align-items-center"

                                >
                                  <div>
                                    <img src={items.product_image} className="img-fluid sellerprolist_image_style" alt={items.product_image} />
                                  </div>
                                  <div className="w-75 mt-2">
                                    <p>{items.product_brand}  {items.product_name}</p>
                                    <p>Size :{items.ram} + {items.storage}</p>
                                    <p>Color :{items.color}</p>
                                  </div>
                                </div></td>
                                <td>{items.category_name}</td>
                                <td>{items.created_date}</td>
                                <td className="m-2 p-2 badge bg-success ">{items.status}</td>
                                {/* <td className="m-2 p-2 badge bg-danger ">{items.status}</td> */}

                                <td><div className="filter">
                                  <Link className="icon" to="" data-bs-toggle="dropdown"><BiDotsVerticalRounded style={{ fontSize: "25px", color: "black" }} /></Link>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li><Link className="dropdown-item" to={`/seller/editProduct`}>
                                      {/* <RiEditBoxFill onClick={
                                        // () => setDataTOStorage(items.seller_name, items.sku_id, items.status, items.stock, items.dilvery_charges, items.category_name, items.sub_category_name, items.product_brand, items.product_name, items.product_image, items.product_mrpprice, items.product_price, items.ram, items.storage, items.color, items.display, items.processor, items.os, items.camera, items.battery, items.product_details)
                                        () => setDataTOStorage(items.product_id,items.product_image, items.product_brand, items.product_name, items.category_name, items.ram, items.storage, items.color)
                                      }
                                        style=
                                        {
                                          {
                                            fontSize: "23px", marginRight: "5px"
                                          }
                                        } /> */}
                                      <button className='btn btn-primary'
                                        onClick={() => setDataTOStorage(items.id, items.product_id, items.seller_name, items.sku_id, items.status, items.stock, items.dilvery_charges, items.category_name, items.sub_category_name, items.product_brand, items.product_name, items.product_image, items.product_mrpprice, items.product_price, items.ram, items.storage, items.color, items.display, items.processor, items.os, items.camera, items.battery, items.product_details)
                                          // (items.product_id, items.product_image, items.product_brand, items.product_name, items.category_name, items.ram, items.storage, items.color)
                                        }>
                                        Edit Product
                                      </button>
                                    </Link></li>
                                    <li><Link className="dropdown-item" to="">
                                      <button className='btn btn-danger'
                                        style={{ width: "120px" }}
                                        onClick={() => {
                                          if (window.confirm(`Are you sure to Delte Product??`)) {
                                            productDelete(items.id)
                                          }
                                        }
                                        }
                                      >
                                        {/* <AiFillDelete style={{ fontSize: "23px", marginRight: "5px" }} /> */}
                                        Delete
                                      </button>
                                    </Link></li>
                                  </ul>
                                </div></td>
                              </tr>
                            </>
                          )
                        })
                      }
                    </tbody>
                  </table>

                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Outlet />
    </>
  )
}

export default AdminProductList