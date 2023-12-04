import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";


const SpecialProduct = () => {
  return (
    <>
      <div className="col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div className="col">
              <img src="images/mobile1.webp" className="img-fluid" alt="watch" />
            </div>
            <div className="col-6 special-product-content">
                        <h5 className="brand">Apple Iphone 11 </h5>
                        <p className="title">
                        A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.
                        </p>
                        <p className="price">
                            <span className="red-p" style={{fontSize:"1rem",color:"black",fontWeight:"600"}}>₹ 51,000</span> &nbsp; <strike style={{fontSize:"1rem",color:"gray",fontWeight:"600"}}>₹ 60,000 </strike>
                        </p>
                       
                       
                        <div className="discount-till d-flex align-items-center gap-10 mb-3">
                            <p className="mb-0" style={{color:"black",fontSize:'1rem',fontWeight:"500"}}>
                            <b>2 </b>days
                            </p>
                            <div className="d-flex gap-10 align-items-center ">
                            <span className="badge rounded-circle p-3 bg-danger">11</span>:
                            <span className="badge rounded-circle p-3 bg-danger">15</span>:
                            <span className="badge rounded-circle p-3 bg-danger">30</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-10">
                          
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        
                        /><span style={{color:"gray",fontSize:'1rem',fontWeight:"500"}}>4 Star</span>
                        </div>
                       
              <Link className="button mt-4">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default SpecialProduct;
