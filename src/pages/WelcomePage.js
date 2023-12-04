import React from "react";
import {IoIosCreate} from "react-icons/io";
import {RiFileList3Fill} from "react-icons/ri";
import {GiProgression} from "react-icons/gi";
import {RiSecurePaymentFill} from "react-icons/ri";
import {MdVerifiedUser} from "react-icons/md"
import { Outlet } from "react-router";
import {MdStart} from "react-icons/md"
import Footer from "../components/Footer";
// import background from "images/aboutus_pic.png";
function WelcomePage() {
  return (
    <>
      {/* <img src="images/aboutus_pic.png" /> */}

      {/* <article className="welcome_article">
        <picture className="welcome_picture">
          <source media="(min-width: 0px)" srcSet="images/aboutus_pic.png" />
          <img src="images/aboutus_pic.png" alt="background" />
        </picture>
        <h1 className="welcome_header">Sell online</h1>
      </article> */}
<div class="data-privacy mb-5">
  <div class="row">
    <div class="col-md-7 become_seller_left">
      <h4 class="h4"><b>Become an EBuddy seller</b></h4>
  <p class="subtext">Start your selling journey on EBuddy and become a part of our 10  seller community</p>
 <button className="start_selling_btn">Start Selling <MdStart style={{fontSize:"20px",marginLeft:"2px"}}/></button>

    </div>
    <div class="col-md-5">
      <img class="" alt="welcome_seller image" title="20+ Countries" src="images/welcome_seller1.gif" width="96%" style={{marginTop:"11%"}}/>

    </div>
  </div>
</div>








  <div className="container welcome_to_seller">
  <h2 className="mb-3">How To Become Seller</h2>
  <div class="welcome_cardsell row ">

  <div class="col-sm-3">
    <div class="card">
    
      <div class="card-body">
        <h5 class="card-title"><IoIosCreate style={{fontSize:"22px",marginRight:"7px"}}/>Create Account</h5>
        <p class="card-text">All you need is :</p>

        <ul>
          <li>GSTIN Number</li>
          <li>Email Id</li>
          <li>Bank Account </li>

        </ul>
        
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"><RiFileList3Fill style={{fontSize:"22px",marginRight:"7px"}}/>List Products</h5>
        <ul>
          <li>List the products you want to sell in your Customer panel</li>
        </ul>
      </div>
    </div>
  </div>


  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"><GiProgression style={{fontSize:"22px",marginRight:"7px"}}/>Get Orders </h5>
        <ul>
          <li>Start getting orders from crores of Indians actively shopping on our platform.</li>
        </ul>
       
      </div>
    </div>
  </div>


  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"><RiSecurePaymentFill style={{fontSize:"22px",marginRight:"7px"}}/>Receive Payments</h5>
        <ul>
          <li>Payments are deposited directly to your bank account following a 7-day payment cycle from order delivery.</li>
        </ul>
        <p class="card-text"></p>
      </div>
    </div>
  </div>
        </div>
      <section className="our-offering spacebetween">
      
        <h2>Why Ebuddy ?</h2>
      <div className="container">
          <div className="row">
              
              <div className="col-md-6">
                  <ul>
                    <li>No trademark registration required to sell your own brand.</li>
                    <li>You capture a huge amount of budget-friendly consumers through resellers. These resellers reach the consumer base through their social media channels.</li>
                    <li>Image guidelines are relaxed and easy to follow. Sellers can upload tabletop and hanger images clicked with mobile phones.</li>
                      <li>All you need is a minimum of 1 unique product to start selling on Ebuddy.</li>
                      
                  </ul>

              </div>
              <div className="col-md-6">
                <ul>
                    <li>Our payments process is the fastest in the industry - get your payments in as little as 7 days of sales.</li>
                    <li>Equal opportunities for all the sellers to grow.</li>
                    <li>Along with the most competitive rate card in the industry you also get on-time and reliable payments.</li>
                    <li>You just need 1 product and 2 documents to start selling online on Ebuddy</li>                    
                </ul>

              </div>
          </div>
        
         
            <div className="row center-block text-center mt-5">
              <div className="col-md-3" style={{marginLeft:"11%"}}>
                <img className="" alt="20+ Countries" title="20+ Countries" src="images/country-icon.svg" height="90px"/>
                <h4 className="h4"><b>20+</b></h4>
                <p className="subtext">Citys</p>

              </div>
              <div className="col-md-3  center-block text-center">
                <img className="" alt="20+ Countries" title="20+ Countries" src="images/patient-icon.svg" height="90px"/>
                <h4 className="h4"><b>250+</b></h4>
            <p className="subtext">Customer per month</p>

              </div>
              <div className="col-md-3  center-block text-center mr-5">
                <MdVerifiedUser style={{fontSize:"90px",color:"#7d7d7df2"}}/>
                {/* <img className="" alt="20+ Countries" title="20+ Countries" src="images/doctor-icon.svg" height="90px"/> */}
                <h4 className="h4"><b>20+</b></h4>
            <p className="subtext">Seller</p>

              </div>
            </div>
      </div>
      </section>
    



        </div>

      <Footer/>  

      <Outlet/>
    </>
  );
}

export default WelcomePage;
