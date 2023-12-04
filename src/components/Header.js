import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import {useSelector } from 'react-redux';
import {FaUser,FaShoppingCart} from "react-icons/fa";
import {MdPayment} from "react-icons/md"
import {AiOutlineLogout,AiOutlineUser} from "react-icons/ai";
import {LuHeart} from "react-icons/lu";
import {BiUser} from "react-icons/bi";
import {BsCart4} from "react-icons/bs"

function Header() {

  const data = useSelector((state) => state.cardItems.cartData);


 
  console.warn("header page is---->",data);

  return (
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
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div style={{width:"31.5%"}}>
                
                  <Link
                    to="/becomeseller"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                  <button type="button" className="btn seller_btn_style">Become Seller</button>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    {/* <img src='images/wishlist.svg' alt="wishlist" style={{width:"30%"}}/> */}
                    <LuHeart style={{width:"100%",height:"50%"}}/>
                    <p className="mb-0">
                      Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  {/* <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/user.svg" alt="user" style={{width:"33%"}}/>
                    <p className="mb-0">
                      Log in
                    </p>
                  </Link> */}
                    <div className="dropdown" style={{width:"85px"}}>
                    <button
                            className="bg-transparent border-0 gap-15 d-flex align-items-center"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {/* <img src="images/user.svg" alt="user" style={{width:"33%"}}/> */}
                            <BiUser style={{width:"-10%",color:"white"}}/>
                            <span className="me-5 d-inline-block" style={{color:"white"}}>
                              Profile
                            </span>
                    </button>
                    <ul
                      className="dropdown-menu header_dropdown_menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item" to="/login">
                         <FaUser/>  Hello , Tirth Gajjar
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/myorders">
                          <FaShoppingCart/>  My Orders
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/editprofile">
                          <FaShoppingCart/>  Edit profile
                        </Link>
                      </li>
                      {/* <li>
                        <Link className="dropdown-item" to="">
                       <MdPayment/>  Payment
                        </Link>
                      </li> */}
                      <li>
                        <Link className="dropdown-item" to="">
                          <AiOutlineLogout/>  Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    {/* <img src="images/cart.svg" alt="cart" style={{width:"35%"}}/> */}
                    <BsCart4  style={{width:"100%",color:" #febd69"}}/>
                    <div className="d-flex flex-column gap">
                      <span className="badge bg-white text-dark">{data.length}</span>
                      {/* <p className="mb-0">{data.product_price}</p> */}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


      <header className="header-bottom py-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
              




                  <div className="dropdown">
                    <button
                            className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img src="images/menu.svg" alt="" />
                            <span className="me-5 d-inline-block">
                              Shop Categories
                            </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          1
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          2
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          3
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/ourstore">Our Store</NavLink>
                    {/* <NavLink to="">Blogs</NavLink> */}
                    <NavLink to="/contactus">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </header>
    </div>
  )
}

export default Header
