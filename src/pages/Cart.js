import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { useDispatch, useSelector } from "react-redux";
import { addTocart,removeCartProduct } from "../redux/actions/ProductAction";
import { cardItems } from "../redux/reducers/ProductReducer";
// import {removeCartProduct} from "../redux/actions/ProductAction";
import { incQuaNumber, decQuaNumber } from "../redux/actions/ProductAction";
import {AiFillDelete} from "react-icons/ai";

function Cart() {

  const [price, setPrice] = useState(0);

  const products = useSelector((state) => state.allproducts.products);
  const cartData = useSelector((state) => state.cardItems.cartData);

  console.log("cartdata using FETCH API:::::>>", cartData);
  console.log("product:::::>>", products);

  const dispatch = useDispatch();

  console.warn("i am in cart page=====================>", cartData);


    const quaInc = (e) => {
    const product = products.find((p) => p.product_id === e.product_id);
    // console.log('product::',product)
    const cartItem = cartData.find((c) => c.product_id === product.product_id);
    // console.log('cartItem::::',cartItem)

    if (cartItem) {
      e.product_quantity = e.product_quantity + 1;
      // e.product_price= e.product_quantity;
      total();
      dispatch(incQuaNumber(e));
    }
  };

  const quaDec = (e) => {
    const product = products.find((p) => p.product_id === e.product_id);
    // console.log('product::',product)
    const cartItem = cartData.find((c) =>c.product_id === product.product_id && product.product_quantity >= 2
    );
    // console.log('cartItem::::',cartItem)

    if (cartItem) {
      e.product_quantity = e.product_quantity - 1;
      total();
      dispatch(decQuaNumber(e));
    }
  };

  const deleteproduct= (e)=> {
    console.log('on Delete:::::',e)
    // const product = products.find((p) => p.product_id === e.product_id);
    // console.log('product::',product)
    // const cartItem = cartData.find((c) =>c.product_id === product.product_id);
    
    // if (cartItem) {
      dispatch(removeCartProduct(e))
      
      total();
      toast.error('oops! 1 Item remove from your cart', {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",  
    });
      console.log('delte me for while cartItem::::',cartData)
    // }
  }
 

  // main Total calculatation
  const total = () => {
    let price = 0;
    cartData.map((e) => {
      e.total = e.product_price * e.product_quantity;
      console.log("main total is-->", total);
      price = price + e.product_price * e.product_quantity;
      console.log("beee yrrr nai thtu", price);
      console.log("card data in total:::::", cartData);
    });
    setPrice(price);
    // deleteproduct()
  };
  
  useEffect(() => {
    total();
  }, [total]);
  
  return (
    <div>
      <div className="container cart-wrapper home-wrapper-2 py-5">
        {cartData.length === 0 ? (
          <div className="cart_no_data_found">
            <img src="images/cartnotfound.gif" />
            <h4>
              Your cart is <span style={{ color: "red" }}>Empty !</span>
            </h4>
            <p>Add Something to make me happy </p>
            <button>
              <Link to="/ourstore">Continue Shopping</Link>
            </button>
          </div>
        ) : (
          <div className="row">
            <div className="col-8">
              <div className="carts-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
                {/* <h4 className="cart-col-4">Delete</h4> */}

              </div>

              {cartData.map((e) => {
                return (
                  <>
                    <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                      <div
                        className="cart-col-1 gap-15 d-flex align-items-center"
                        key={e.product_id}
                      >
                        <div>
                          <img
                            src={e.product_image}
                            className="img-fluid cart_image_style"
                            alt="product image"
                          />
                        </div>
                        <div className="w-75 mt-2">
                          <p>
                            {e.product_brand} {e.product_name}
                          </p>
                          <p>
                            Size : {e.ram} + {e.storage}{" "}
                          </p>
                          <p>Color :{e.color}</p>
                        </div>
                      </div>

                      <div className="cart-col-2">
                        <h5 className="price">₹{e.product_price}</h5>
                      </div>

                      <div className="cart-col-3 d-flex align-items-center gap-15">
                        <button
                          className="plus_cart_style"
                          onClick={() => {
                            quaInc(e);
                          }}
                        >
                          +
                        </button>
                        <h5 className="price">{e.product_quantity}</h5>

                        <button
                          className="plus_cart_style"
                          onClick={() => {
                            quaDec(e);
                          }}
                        >
                          -
                        </button>
                      </div>
                      <div >
                        <h5 className="price">₹{e.total}</h5>
                      </div>
                      <div>
                        <button className="cart_delete_style" onClick={()=>{deleteproduct(e)}}><AiFillDelete style={{fontSize:"25px",marginTop:"-10px",color:"black"}}/></button>
                        {/* <img src="images/close.png" alt="close image" style={{width:"20px"}} /> */}
                      </div>
              <ToastContainer autoClose={1300}  />

                    </div>
                  </>
                );
              })}
            </div>

            <div className="col-4 order_summary_style">
              <div className="">
                <div className="flex-column align-items-end">
                  <h4 className="order_title">Order Summary</h4>

                  <div className="row">
                    <div className="col-8">
                      <p>Product Subtotal</p>
                    </div>
                    <div className="col-4">
                      <p> ₹{price}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <p>Shipping Charges</p>
                    </div>
                    <div className="col-4">
                      <p> ₹0 </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <p className="total_title">Total Amount</p>
                    </div>
                    <div className="col-4">
                      <p className="total_price">₹ {price}</p>
                    </div>
                    
                  </div>

                  <h4 className=""></h4>
                  <Link to="/checkout" className="button">
                    Place Order
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <Link to="/" className="button mt-5">
                Continue To Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
    // </div>
  );
}

export default Cart;
