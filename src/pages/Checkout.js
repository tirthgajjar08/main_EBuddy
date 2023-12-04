import React, { useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";



const productURl = "http://localhost:9002/product_list";


const Checkout = () => {

  const navigate = useNavigate();
  const phonePrice = 999;
  const [price, setPrice] = useState(0);


  const products = useSelector((state) => state.allproducts.products);
  const cartData = useSelector((state) => state.cardItems.cartData);
  
  console.log("qweasdzczczxczxxz->",cartData)

  const total = () => {
    let price = 0;
    console.log("card data in total:::::", cartData);
    cartData.map((e) => {
      e.total = e.product_price * e.product_quantity;
      console.log("main total is-->", total);
      price = price + e.product_price * e.product_quantity;
      console.log("beee yrrr nai thtu", price);
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, []);


 

  // const[mydata,setMydata]=useState([]);

  return (
    <>
      <div className="container checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-8 ">
            <div className="checkout-left-data">
            
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb mb-3">
                  <li className="breadcrumb-item">
                    <Link className="text-gray total-price" to="/cart">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /&nbsp;
                  <li
                    className="breadcrumb-ite total-price active"
                    aria-current="page"
                  >
                  <Link className="text-black  total-price" to="/checkout">
                    Shipping</Link>
                  </li>
                  
                 
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total mb-3">
                Tirth Gajjar (tirthgajjar08@gmail.com)
                <p>{cartData.product_price}</p>
               

              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                {/* <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select Country
                    </option>
                  </select>
                </div> */}

                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>

                <div className="w-100 mt-2">
                  <input
                    type="text"
                    placeholder="House no, Building name"
                    className="form-control"
                  />
                </div>
                <div className="w-100 mt-2">
                  <input
                    type="text"
                    placeholder="Road name, Area ,Colony.."
                    className="form-control"
                  />
                </div>
                <div className="w-100 mt-2">
                  <input
                    type="text"
                    placeholder="Landmark"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1 mt-2">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                  />
                </div>
                {/* <div className="flex-grow-1 mt-2">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select State
                    </option>
                    <option value="">Gujarat</option>
                    <option value="">Goa</option>
                    <option value="">Goa</option>
                    <option value="">Haryana</option>
                    <option value="">Punjab</option>
                    <option value="">Rajasthan</option>

                    <option value="">Uttar Pradesh</option>



                  </select>
                </div> */}
                <div className="flex-grow-1 mt-2">
                  <input
                    type="text"
                    placeholder="Pincode"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                     <Link to="/payment" className="button mt-3">
                      Payment now
                    </Link> 
                    
                  </div>
                </div>
              </form>
              
            </div>
          </div>
       
          
             <div className="col-4 order_summary_style">
                  <div className="">
                    
                  <div className="position-relative">
                      <img
                      src="images/deliver-1.gif"
                      alt="payment img"
                      style={{ width: "101%",borderRadius:"8px",marginTop:"-70px" }}
                    />
                  
                      </div>
                     
                    <div className="flex-column align-items-end">
                      
                      <h4 className='order_title mt-3'>Price Summary</h4>
                      
  
                      <div className='row'>
                            <div className='col-8'>
                            <p>Product Subtotal: ({cartData.length} items)</p>
                            </div>
                            <div className='col-4'>
                            <p>₹ {price}</p>
                            </div>
                      </div>
                      <div className='row'>
                            <div className='col-8'>
                            <p>Shipping :</p>
                            </div>
                            <div className='col-4'>
                            <p>₹0</p>
                            </div>
                      </div>
                      <div className='row'>
                            <div className='col-8'>
                            <p className='total_title'>Total Amount</p>
                            </div>
                            <div className='col-4'>
                            <p className='total_price'>₹ {price}</p>
                            </div>
                      </div>
  
                      <div className='row'>
                      <div className='col-2'>
                      <img src="https://cdn-icons-png.flaticon.com/512/4289/4289566.png" className="checkout_img_style" alt="payement image"/>
  
                            </div>
                            <div className='col-10'>
                            <h4 className="safe_style">Safe and Secure payment.Easy return.100% Authentic products</h4>
  
                            </div>
  
  
                        
                      </div>
                        
  
                        
                        <div className="date_time_shipping_style">
                              <h4>November 10,2023 | Friday</h4>
                        </div>
                     
                        {/* <div className="payment_now_button_style">
                            <button onClick={() => displayRazorpay(phonePrice)}>Payment now</button>
                        </div> */}
                      </div>
                  
                  
                  
                 
                  
                  </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
