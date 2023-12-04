import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-4" style={{marginTop:"68px"}}>
        <div className="container-xxl">
          
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for great discount</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
        
            
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Jaldeep icon<br /> makarba, Ahmedabad <br />
                  PinCode: 380051
                </address>
                <a
                  href="tel:+91 8264954234"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +91 8264954234
                </a>
                <a
                  href="mailto:Ebuddy@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  Ebudyy@gmail.com
                </a>
               
              </div>
            </div>
           
            <div className="col-3">
              <h4 className="text-white mb-4">Get to know us</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link to="/ourstore" className="text-white py-2 mb-1">Our Store</Link>
                <Link to="/contactus"className="text-white py-2 mb-1">Contact Us</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Products</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Mobile</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Computer</Link>
              </div>
            </div>

            <div className="col-3">
            <h4 className="text-white mb-4">#EBudyy</h4>
          
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Ebuddy
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
