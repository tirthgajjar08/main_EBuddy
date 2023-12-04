import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts,selectedProduct,productCateFilter } from "../redux/actions/ProductAction";
import {HiDevicePhoneMobile} from "react-icons/hi2"
import {FaMobileAlt} from "react-icons/fa"
import {HiOutlineDesktopComputer} from "react-icons/hi"
import {MdLaptopChromebook} from "react-icons/md"
import {IoMdTabletLandscape} from "react-icons/io"
import {VscListSelection} from "react-icons/vsc"
function OurStore() {
  // const products=useSelector((state)=>state);
  const products = useSelector((state) => state.allproducts.products);
  const procatfilter = useSelector((state) => state.procatFilter.procatfilter);
  console.log("our store--->", products);
  const dispatch = useDispatch();


  const productcategories=(procate)=>{

    const result=products.filter((curdata)=> curdata.category_name ===procate )
    console.log("resi=ult is--->",result)
    
    // if(result){
    //   console.log("oiajdoj")
    // }
      dispatch(productCateFilter(result));
      console.log("i am setpto-23242332345432----->",productCateFilter(result))
    // setData(result);
  }

  useEffect(() => {
    axios.get("http://localhost:9002/product_list").then((response) => {
      dispatch(setProducts(response.data));
      console.log("Tirth", response.data);
    });
    
  }, []);

  return (
    <div>
      <section className="section_space">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div className="filter_item_categories">
             
                         <ul className="ps-0">
                         <li onClick={()=>productcategories('')}><VscListSelection/>  All </li>
                         <li onClick={()=>productcategories('Mobile')}><FaMobileAlt/> Mobile </li>
                         <li onClick={()=>productcategories('Tablet')}><IoMdTabletLandscape />  Tablet</li>
                         <li onClick={()=>productcategories('Laptop')}><MdLaptopChromebook />   Laptop</li>
                         <li onClick={()=>productcategories('Computer')}><HiOutlineDesktopComputer/>  Computer</li>
                       </ul>
                
                 
                </div>
              </div>
              
             
            </div>
            {/* End left filter navigatio*/}

            {/* Start right display product */}
            <div className="col-10">
              <p>{products.length}</p>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  {products.length === 0 ? (
                    <div className="ourstore_no_product_found">
                      <img src="images/nodatafound.avif" />
                      <h4>Sorry! We couldn't find what you're looking for.</h4>
                    </div>
                  ) : (
                    <ProductCard />
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* .end Row */}
        </div>
      </section>
      {/* End left side navigation */}
    </div>
  );
}

export default OurStore;
