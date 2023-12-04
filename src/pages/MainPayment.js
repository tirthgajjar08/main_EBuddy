import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { customertPayment } from "../redux/actions/ProductAction";

import axios from "axios";

function MainPayment() {

  const [price, setPrice] = useState(0);
  const products = useSelector((state) => state.allproducts.products);
  const cartData = useSelector((state) => state.cardItems.cartData);
  const cuspayment = useSelector((state) => state.paymentCustomer.cuspayment);
  const dispatch = useDispatch();


  const navigate = useNavigate();

  const phonePrice = 99;

  // const[mydata,setMydata]=useState([]);

  // useEffect(() => {
  //   axios.get(productURl)
  //     .then((response) => {
  //        setMydata(response.data)
  //       console.log("Tirth",response.data)
  //     })
  // }, [])

  // Razorpay Api calling

  const calledSrc = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await calledSrc("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("You are offline.... Please Turn on data network");
      return;
    }
    const options = {
      key: "rzp_test_g2MEBdXcIgtdxT",
      currency: "INR",
      amount: amount * 100,
      name: "Ebuddy",
     
      
      description: "Thanks for purchasing",
      image: "",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfully!");

        const data={
          payment_id:response.razorpay_payment_id,
          amount:amount,
          mode:response.mode,
          order_id:Math.random().toString(36).substr(2),
          payment_date:new Date().toLocaleString(),   
        //   error: function(XMLHttpRequest, textStatus, errorThrown) { 
        //     alert("Status: " + textStatus);
        //     alert("Error: " + errorThrown); 
        // } 
      }
        // const pay={razorpay_payment_id}
        axios.post('http://localhost:9005/cuspayment',data).then((response) => {
          dispatch(customertPayment(response.data));
          console.log("customer payment", response.data);
        }).catch((err)=>{
          alert("Tirth",err)
        });
        navigate("/payment-successful");
      },
      prefill: {
        name: "Ebuddy",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const total = () => {
    let price = 0;
    console.log("card data in total:::::", cartData);
    cartData.map((e) => {
      e.total = e.product_price * e.product_quantity;
      console.log("main total is-->", total);
      price = price + e.product_price * e.product_quantity;
      console.log("beee yrrr nai thtu", price);
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, []);

  return (
    <>
      <div className="container checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-8 ">
            <div className="checkout-left-data">
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb mb-3">
                  <li className="breadcrumb-item">
                    <Link className="text-lightgray  total-price" to="/cart">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /&nbsp;
                  <li
                  
                    className="breadcrumb-ite total-price"
                    aria-current="page"
                  >
                    <Link className="text-lightgray  total-price" to="/checkout">
                    Shipping</Link>
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >

                   <Link className="text-black  total-price" to="/payment">
                    Payment</Link>
                  </li>
                </ol>
              </nav>

              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <img
                      src="images/payment-2.jpg"
                      alt="payment img"
                      style={{ width: "101%",borderRadius:"8px" }}
                    />
                  </div>
                  <div className="col-8">
                    <h4 className="payment_page_title total">
                      Contact Information
                    </h4>
                    <div className="pay_user_name_style">
                      <p className="user-details total mb-3">
                        Tirth Gajjar (tirthgajjar08@gmail.com)
                        {/* <p>{phonePrice}</p> */}
                      </p>
                    </div>

                    <div>
                      <h4 className="payment_page_title mt-4">
                        Delivery Address
                      </h4>
                      <div className="pay_address_style">
                        <p>
                          C-201, Jaldeep Icon Makarba, Ahmedabad, Gujarat 380051
                          C-201, Jaldeep Icon Makarba, Ahmedabad, Gujarat 380051
                          
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <h4>Available Payment mode</h4>
                  <div className="payment_mode_style col-7">
                  <marquee scrollamount="10">
                    
                    <img src="images/pay_methods_branding.png" alt="payment img" style={{width:"100%"}}/>
                  </marquee>

                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="col-4 order_summary_style">
            <div className="">
              <div className="flex-column align-items-end">
                <h4 className="order_title">Price Summary</h4>

                <div className="row">
                  <div className="col-8">
                    <p>Product Subtotal: (3 item)</p>
                  </div>
                  <div className="col-4">
                    <p> ₹{price}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Shipping :</p>
                  </div>
                  <div className="col-4">
                    <p>₹0</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p className="total_title">Total Amount</p>
                  </div>
                  <div className="col-4">
                    <p className="total_price">₹ {price}</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-2">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4289/4289566.png"
                      className="checkout_img_style"
                      alt="payement image"
                    />
                  </div>
                  <div className="col-10">
                    <h4 className="safe_style">
                      Safe and Secure payment.Easy return.100% Authentic
                      products
                    </h4>
                  </div>
                </div>

                <div className="date_time_shipping_style">
                  <h4>June 13,2023 | Monday</h4>
                </div>
                <div className="payment_now_button_style">
                  <button onClick={() => displayRazorpay(price)}>
                    Payment now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPayment;
