import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { BsCartPlusFill } from "react-icons/bs";
// import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/ProductAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addTocart, productCateFilter } from "../redux/actions/ProductAction";

const productURl = "http://localhost:9010/homeproduct_list";

function HomeProduct() {
  const cartData = useSelector((state) => state.cardItems.cartData);
  const products = useSelector((state) => state.allproducts.products);
  const procatfilter = useSelector((state) => state.procatFilter.procatfilter);

  // addTocart(cardItems);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(productURl).then((response) => {
      dispatch(setProducts(response.data));
      console.log("Tirth", response.data);
    });
    document.title = "Product Listing Page";
  }, []);

  const sendData = (e) => {
    // dispatch(addTocart(e));
    const product = products.find((p) => p.product_id === e.product_id);
    console.log("product::", product);
    const cartItem = cartData.find((c) => c.product_id === product.product_id);

    console.log("cartItem::::", cartItem);
    if (cartItem) {
      cartItem.product_quantity = cartItem.product_quantity + 1;
      toast.success("1 more product quantity added to your cart!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "light",
      });
      // toast("1 More item quantity added successfully!");
    } else {
      dispatch(addTocart(e));
      toast.success("1 Item has been added to your cart!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
      });
    }
  };
  console.warn(" data is", cartData);
  // cartData.cartData.find(c => console.log('cccccc',productt));
  console.log(
    "new task is filter--->",
    dispatch(productCateFilter(procatfilter))
  );

  return products.map((product) => {
    return (
      <>
        <div className="itemlist_box_style_home" key={product.product_id}>
          <Link to={`/singleproduct/${product.product_id}`}>
            <span className="saleoff_style">
              {(
                ((product.product_mrpprice - product.product_price) /
                  product.product_mrpprice) *
                100
              ).toFixed(0)}
              % OFF
            </span>
            <img src={product.product_image} alt={product.product_image} />
            <div className="item_list_heading_style">
              <h2>
                {product.product_brand}
                {product.product_name}
              </h2>
              <span>{product.product_details}</span>
              <p>
                ₹{product.product_price} &nbsp;{" "}
                <strike>₹{product.product_mrpprice}</strike>
              </p>
            </div>
          </Link>

          <button
            className="ourstore_cart_btn"
            onClick={() => {
              sendData(product);
            }}
          >
            <BsCartPlusFill /> Add To Cart
          </button>

          <ToastContainer autoClose={1300} />
        </div>
      </>
    );
  });
}

export default HomeProduct;
