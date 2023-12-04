import React from 'react';
import {FaUserAlt,FaTruck,FaFileInvoice} from "react-icons/fa"
import { Link } from 'react-router-dom';

function OrderInformation() {
  return (
    <div className='container'>
                <div className='row orderinfo_box_style mt-5'>
                    <div className='col-4' style={{borderRight:"1px solid lightgray",paddingRight:"5%"}}>
                        <h3><FaTruck/> Delivery Address</h3>
                        <h5><FaUserAlt/> Tirth Gajjar</h5>
                        <p>Jaldeep icon, nr torrent power house makarba road,Ahmedabad-380051,Gujarat</p>
                        <p>Phone no :9876541222</p>
                        </div>
                    <div className='col-4'  style={{borderRight:"1px solid lightgray",paddingLeft:"30px"}}>
                        <label className='mt-1'>Order ID : </label>
                        <span>985268</span> <br/>
                        <label className='mt-3'>Order Date : </label>
                        <span>17/06/2022</span> <br/>

                        
                    </div>

                    <div className='col-4' style={{paddingLeft:"30px"}}>
                        <h3>More Actions</h3>
                        <span className='dowinvoice_style'><FaFileInvoice/>Download Invoice</span>
                        <Link to="/invoice"><button className='button'>Dowload</button></Link> 
                    </div>

                </div>
                <div class="row orderinfo_box_style mt-4">
                      <div className='col-5'><div className="gap-15 d-flex align-items-center">
                      <img
                            src="images/iphone_13pro.jpg"
                            className="cart_image_style"
                            alt="product image"
                          />
                       
                        <div className="w-90 mt-2">
                          <h3>Apple Iphone 14</h3>
                         
                          <p>
                            Size : 8GB + 128GB
                            <span style={{marginLeft:"15px"}}>Color : Blue</span> 
                          </p>
                          
                          <p>Seller : RetailNet</p>
                          <h5>₹700</h5>

                        </div>
                      </div></div>
                      <div className='col-7'> 
                      <div class="pt-4 ">
                        <div class="row justify-content-between">
                          <div class="order-tracking completed">
                            <span class="is-complete"></span>
                            <p>Ordered<br/><span>Mon, June 24</span></p>
                          </div>
                          <div class="order-tracking completed">
                            <span class="is-complete"></span>
                            <p>Shipped<br/><span>Tue, June 25</span></p>
                          </div>
                          <div class="order-tracking ">
                            <span class="is-complete "></span>
                            <p>Delivered<br/><span>Fri, June 28</span></p>
                          </div>
                        </div>
                      </div></div>

                     
				        	</div>
      
    </div>
  )
}

export default OrderInformation
