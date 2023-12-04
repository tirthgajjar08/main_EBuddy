import React from 'react';
import { NavLink, Link, Outlet } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import {useSelector } from 'react-redux';
import {MdStart} from "react-icons/md";
import {FaUserCircle} from "react-icons/fa";

function WelHeader() {

  const data = useSelector((state) => state.cardItems.cartData);
  console.warn("header page is---->",data);

  return (
    <>
    <div>
      {/* Navigation*/}
      <header className="header-upper py-3">
        <div className="container-xxl">
          {/* LOGO */}
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white">EBuddy</Link>
              </h2>
            </div>


            <div className="col-5">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control search_style"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            
            <div className="col-5">
              <div className="header-upper-links d-flex">
                <div style={{width:"31.5%",marginLeft:"30%"}}>
                
                  <Link
                    to="/seller"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                  <button type="button" className="btn welcome_seller_btn_style">Start Selling   <MdStart style={{fontSize:"20px",marginLeft:"2px"}}/></button>
                  </Link>
                </div>


                <div>

                <div style={{width:"170.5%",marginLeft:"40px"}}>
                
                <Link
                  to="/sellerlogin"
                  className="d-flex align-items-center gap-10 text-white"
                >
                <button type="button" className="btn welcome_login_seller_btn_style"><FaUserCircle style={{fontSize:"20px",marginRight:"5px"}}/>Login</button>
                </Link>
              </div>
                </div>
               
                
              </div>
            </div>
          </div>
        </div>
      </header>


   
    </div>
    <Outlet/>
    </>
  )
}

export default WelHeader
