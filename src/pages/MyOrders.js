import React from 'react';
import { Link } from 'react-router-dom';
import {FaTruck,FaStar} from "react-icons/fa"


function MyOrders() {
  return (
    <div className='container'>
      
        <div className='row myorder_link_style'>
        <Link to="/orderinformation">
        <div className="col mt-5">
              {/* <div className="carts-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div> */}

            
                    <div className="myorder_data_style py-3 mb-4 d-flex justify-content-between align-items-center">
                  
                      <div className="order-col-1 gap-15 d-flex align-items-center">
                      <img
                            src="images/tab.jpg"
                            className="cart_image_style"
                            alt="product image"
                          />
                        <div>
                         
                        </div>
                        <div className="w-75 mt-2">
                          <h5>Apple Ipad</h5>
                         
                          <p>
                            Size : 8GB + 128GB Color : Blue
                          </p>
                          {/* <p>Color : Blue</p> */}
                        </div>
                      </div>

                      <div className="order-col-2">
                        <h5 className="price">₹700</h5>
                      </div>
                     

                      
                      <div className="order-col-4 mt-2">
                        <h5 className=""><FaTruck/>   Delivered on Jun 7 </h5>
                        <p>Your items has been delivered</p>
                        <h4 style={{color:"darkblue",fontSize:"14.5px"}}><FaStar/> Rate & Review this product</h4>
                      </div>
                      
                      <div className="order-col-2">
                      <Link to="/orderinformation">
                        <button className='button'>View detailes</button>
                        </Link> 
                      </div>
                      <div>
                        {/* <img src="images/close.png" alt="close image" style={{width:"20px"}} /> */}
                      </div>
                    </div>
                  
                    
                  
            </div>
            </Link>
        </div>
    </div>
  )
}

export default MyOrders;
