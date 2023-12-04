import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import { BsCartPlusFill } from "react-icons/bs";
import {AiFillDelete} from "react-icons/ai"
// import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeWishlistProduct } from "../redux/actions/ProductAction";

import { addTocart,wishlistProduct } from "../redux/actions/ProductAction";

const productURl = "http://localhost:9002/product_list";

function WishlistCard(props) {
  const wishlist = useSelector((state) => state.wishlistItems.wishlistData);
  const products = useSelector((state) => state.allproducts.products);
  const cartData = useSelector((state) => state.cardItems.cartData);
  
  // addTocart(cardItems);
  const dispatch = useDispatch();

  console.log("i am wishlist data plase cheACK IT===================>",wishlist)

   const deleteproduct= (e)=> {
    console.log('on Delete:::::',e)
    toast.error('oops! 1 Item remove from your cart', {
      position: toast.POSITION.BOTTOM_RIGHT,
      theme: "dark",  
    });
    dispatch(removeWishlistProduct(e))
      console.log('delte me for while cartItem::::',wishlist)
    // }
  }


  const sendData = (e) => {
    // dispatch(addTocart(e));
    const product = products.find((p) => p.product_id === e.product_id);
    console.log("main addddeddd tooo ", product);

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
  }
 
 
  console.warn(" data is",wishlist)
  // cartData.cartData.find(c => console.log('cccccc',productt));

  return (
    <>

{wishlist.length === 0 ? (
          <div className="wishlist_no_data_found">
            <img src="images/wislist_page.webp" />
            <h4>
              Your wishlist is <span style={{ color: "red" }}>Empty !</span>
            </h4>
            <p>You have no items in your wishlist.Start adding</p>
            <button>
              <Link to="/ourstore">Continue Shopping</Link>
            </button>
          </div>
        ) : (
      wishlist.map((e) => {
        return (
          <>
            <div className="wishlist_box_style" key={e.product_id}>
              <Link to={`/singleproduct/${e.product_id}`}>
                <span className="saleoff_style">75% off</span>
                <img src={e.product_image} alt={e.product_image} />
                <div className="wishlist_heading_style">
                  <h2>{e.product_brand}{e.product_name}</h2>
                  {/* <span>{e.product_details}</span> */}
                  <span>{e.ram} + {e.storage}</span>

                  <p>
                    {e.product_price} &nbsp; <strike>₹900000</strike>
                  </p>
                </div>
              </Link>

            <div className="row">
              <div className="col-10"><button
                className="wishlist_cart_btn"
                onClick={() => {
                  sendData(e);
                }}
              >
                <BsCartPlusFill /> Add To Cart
              </button></div>
              <div className="col-2 mt-2">
              <span style={{background:"#e62e00",pointer:"cursor",color:"white",padding:"9px",marginLeft:"-27px",marginTop:"50rem", borderRadius:"5px"}}
                onClick={() => deleteproduct(e)}
              >
                <AiFillDelete/>
              </span>
              </div>

            </div>
              
             
            </div>
          </>
        );
      })
        )}
    </>
  );
}

export default WishlistCard;
