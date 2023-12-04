import React from 'react'
import { Outlet } from "react-router";
import { Link } from 'react-router-dom'
import {MdOutlineDensityMedium,MdPayment} from "react-icons/md"
import {AiTwotoneBell,AiFillFileAdd} from "react-icons/ai";
import {RiFileListFill} from "react-icons/ri"
import {FaUserAlt,FaUserEdit,FaTableList} from "react-icons/fa"
import {BiLogOutCircle} from "react-icons/bi";
import {MdDashboard} from "react-icons/md";
function Sidebar() {
  return (
    <>
  <header id="header" class="header fixed-top d-flex align-items-center">

<div class="d-flex align-items-center justify-content-between">
  <Link to="/seller" class="logo d-flex align-items-center">
  
    <span class="d-none d-lg-block">EBuddy</span>
  </Link>
  <MdOutlineDensityMedium/>
</div>

<div class="search-bar">
  <form class="search-form d-flex align-items-center" method="POST" action="">
    <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
    <button type="submit" title="Search"><i class="bi bi-search"></i></button>
  </form>
</div>

<nav class="header-nav ms-auto">
  <ul class="d-flex align-items-center">

    <li class="nav-item d-block d-lg-none">
      <Link class="nav-link nav-icon search-bar-toggle " to="#">
        <i class="bi bi-search"></i>
      </Link>
    </li>

    <li class="nav-item dropdown">

      <Link class="nav-link nav-icon" to="#" data-bs-toggle="dropdown">
        <AiTwotoneBell style={{fontSize:"23px"}}/>
        <span class="badge bg-primary badge-number">4</span>
      </Link>

      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li class="dropdown-header">
          You have 4 new notifications
          <Link to="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></Link>
        </li>
        <li>
          <hr class="dropdown-divider"/>
        </li>

       
       


        <li>
          <hr class="dropdown-divider"/>
        </li>

        <li class="notification-item">
          <i class="bi bi-check-circle text-success"></i>
          <div>
            <h4>Vivo v27 pro</h4>
            <p>Order Complete</p>
            <p>2 hrs. ago</p>
          </div>
        </li>

        <li>
          <hr class="dropdown-divider"/>
        </li>


        <li>
          <hr class="dropdown-divider"/>
        </li>
        <li class="dropdown-footer">
          <Link to="">Show all notifications</Link>
        </li>

      </ul>
    </li>



    <li class="nav-item dropdown pe-3">

      <Link class="nav-link nav-profile d-flex align-items-center pe-0" to="#" data-bs-toggle="dropdown">
        <FaUserAlt style={{fontSize:"22 px"}}/>
        <span class="d-none d-md-block dropdown-toggle ps-2">Tirth Mohan</span>
      </Link>

      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li class="dropdown-header">
          <h6>Tirth Gajjar</h6>
     
        </li>
        <li>
          <hr class="dropdown-divider"/>
        </li>

        <li>
          <Link class="dropdown-item d-flex align-items-center" to="users-profile.html">
            <FaUserEdit style={{fontSize:"23px",marginRight:"5px"}}/>
            <span>My Profile</span>
          </Link>
        </li>
        <li>
          <hr class="dropdown-divider"/>
        </li>

        

      

        <li>
          <Link class="dropdown-item d-flex align-items-center" to="">
            <BiLogOutCircle style={{fontSize:"23px",marginRight:"5px"}}/>
            <span>Sign Out</span>
          </Link>
        </li>

      </ul>
          </li>

  </ul>
</nav>

</header>


<aside id="sidebar" class="sidebar">

<ul class="sidebar-nav" id="sidebar-nav">

  <li class="nav-item">
    <Link class="nav-link " to="">
      <MdDashboard style={{fontSize:"23px",marginRight:"5px"}}/>
      <span>Dashboard</span>
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
    <Link class="nav-link " to="editprofile">
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

export default Sidebar
