import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'


import axios from 'axios';

import { useDispatch, useSelector } from "react-redux";
import { customertPayment,sellerpaymentFilter } from "../redux/actions/ProductAction";

function SellerPayment() {
  const cuspayment = useSelector((state) => state.paymentCustomer.cuspayment);
  const sellerpayFilter = useSelector((state) => state.sellerpayFilter.sellerpayfilter);

  const dispatch = useDispatch();
  console.log("my payment data is----------->",cuspayment);

 

  useEffect(() => {
    axios.get("http://localhost:9005/cuspayment").then((response) => {
      dispatch(customertPayment(response.data));
      console.log("Customer payment", response.data);
    });

  }, [])

  const handleFilter = (e) => {
    const inputValue = e.target.value.toLowerCase();

    const result=cuspayment.filter((item) => {

    return item.payment_id.toLowerCase().includes(inputValue);
      // const isProductNameMatch = item.amount.toLowerCase().includes(inputValue);
      //  item.order_id.toLowerCase().includes(inputValue);
      // const isCategoryNameMatch = item.payment_date.toLowerCase().includes(inputValue);

      // Combine the conditions using logical OR (||) to include items that match any of the criteria
      // return isProductBrandMatch || isProductNameMatch || isRamMatch || isCategoryNameMatch;
    })

    dispatch(sellerpaymentFilter(result));

    // setFilterData(filteredData);
  }
  return (
  <>
      <main id="main"   className="main">

<div className="pagetitle mb-4">
  <h1>Payment List</h1>
  
</div>

<section className="section">
  <div className="row">
    <div className="col-lg-12">

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Payment</h5>
         
         

          <div className="search-bar justify-content-end">
          <form
            className="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
             <input
                        type="text"
                        name="query"
                        placeholder="Search Product"
                        title="Enter search keyword"
                        className='p-1 w-40'
                        onChange={handleFilter}
                        autoComplete='off'
                      />
            
          </form>
        </div>
          <table className="prolist_style table datatable mt-4">
            <thead>
             
              <tr>
                <th scope="col">No</th>
                <th scope="col">Payment Id</th>
                <th scope="col">Order Id</th>
                <th scope="col">Amount</th>
                <th scope="col">Date & Time</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
            {
            sellerpayFilter.length <=0 ?
            cuspayment.map((payment)=>{
              return(
                <>
                <tr>
                <th scope="row">{payment.id}</th>
                
                <td>{payment.payment_id}</td>
                <td>{payment.order_id}</td>
                <td>{payment.amount}</td>

                <td>{payment.payment_date}
                </td>


                <td className="m-2 p-2 badge bg-success ">Complete</td>

              
              </tr>
              
            
            
                </>
              )
              
            }):"no data found"}
            </tbody>
          </table>
       
        </div>
      </div>

    </div>
  </div>
</section>

</main>
    <Outlet/>
    </>
  )
}

export default SellerPayment
