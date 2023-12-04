import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Outlet } from 'react-router'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { customertPayment } from "../redux/actions/ProductAction";

function Paymentsuccess() {
  const cuspayment = useSelector((state) => state.paymentCustomer.cuspayment);
  const dispatch = useDispatch();

  console.log("my payment data is----------->", cuspayment);

  // useEffect(() => {
  //   axios.get("http://localhost:9005/cuspayment").then((response) => {
  //     dispatch(customertPayment(response.data));
  //     console.log("Customer payment", response.data);
  //   });

  // }, []);

  return (
    <section class="pay-success mt-5">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card left-side-info" style={{ minWidth: "440px" }}>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <img
                      src="images/payment-1.png
                        "
                      alt=""
                      width="100%"
                      height="auto"
                      class="mt-5 mb-5"
                    />
                  </div>

                  <div class="col-md-6 successful_right">
                    <div class="price-style">
                      <h3>
                        You Successfully Paid<span> ₹ {cuspayment.amount}</span>
                      </h3>
                    </div>

                    <div class="pay-title">
                      <h5 style={{ fontSize: "1.2rem" }}>Payment Details : </h5>

                      <div>
                        <span>Transaction ID :</span>
                        <p> {cuspayment.payment_id}</p>
                      </div>

                      <div>
                        <span>Order ID:</span>
                        <p>{cuspayment.order_id}</p>
                      </div>

                      <div>
                        <span>Total Amount :</span>
                        <p>₹,{cuspayment.amount}</p>
                      </div>

                      <div>
                        <span>Transaction Date :</span>
                        <p>{cuspayment.payment_date}</p>
                      </div>
                    </div>

                    <div class="pay-btn">
                      <button type="button" class="confirm-btn-style">
                        <Link to="/">
                          DONE <i class="far fa-check-circle"></i>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Paymentsuccess;
