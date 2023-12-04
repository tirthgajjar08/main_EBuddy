import React,{ useState } from 'react'
import { Outlet } from "react-router";
import { Link } from 'react-router-dom'
import {MdOutlineDensityMedium,MdPayment} from "react-icons/md"
import {AiTwotoneBell,AiFillFileAdd} from "react-icons/ai";
import {RiFileListFill} from "react-icons/ri"
import {FaUserAlt,FaUserEdit,FaTableList,FaPeopleCarry,} from "react-icons/fa"
import {BiLogOutCircle} from "react-icons/bi";
import {GiHandTruck} from "react-icons/gi"
import {MdDashboard} from "react-icons/md";
// import {setSidebarVisible} from "@babel/core"

function AdSidebar() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  
  return (
    <>
  <header className="header fixed-top d-flex align-items-center bg-gray">
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/seller" className="logo d-flex align-items-center">
            <span className="d-none d-lg-block">EBuddy</span>
          </Link>
          <MdOutlineDensityMedium />
        </div>

        <div className="search-bar">
          <form className="search-form d-flex align-items-center" method="POST" action="">
            <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
            <button type="submit" title="Search">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>

        <button
          className="toggle-button d-lg-none" // Show the button only on small screens
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          Toggle Sidebar
        </button>
      </header>

      <button
          className="toggle-button d-lg-none" // Show the button only on small screens
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          Toggle Sidebar 
        </button>

<aside id="sidebar" className={`sidebar ${sidebarVisible ? '' : 'hidden'}`}>

<ul class="sidebar-nav" id="sidebar-nav">

  <li class="nav-item">
    <Link class="nav-link " to="">
      <MdDashboard style={{fontSize:"23px",marginRight:"5px"}}/>
      <span>Dashboard</span>
    </Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to="adminseller">
      <FaPeopleCarry style={{fontSize:"23px",marginRight:"5px"}}/>
      <span>Seller</span>
    </Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to="admincustomer">
      <FaUserAlt style={{fontSize:"19px",marginRight:"6px"}}/>
      <span>Customers</span>
    </Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to="adminmyorder">
      <GiHandTruck style={{fontSize:"25px",marginRight:"5px"}}/>
      <span>MyOrders</span>
    </Link>
  </li>


  <li class="nav-item">
    <Link class="nav-link " to="addproduct">
      <AiFillFileAdd style={{fontSize:"23px",marginRight:"5px"}}/>
      <span>Add Product</span>
    </Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to="productlisting">
      <RiFileListFill style={{fontSize:"23px",marginRight:"5px"}}/>
      <span>Product List</span>
    </Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to="payment">
      <MdPayment style={{fontSize:"23px",marginRight:"5px"}}/>
      <span>Payment</span>
    </Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to="admineditprofile">
    <FaUserEdit style={{fontSize:"23px",marginRight:"5px"}}/>
      
      <span>Edit profile</span>
    </Link>
  </li>

 


 

  

</ul>

</aside>


    <Outlet/>

    </>
  )
}

export default AdSidebar
