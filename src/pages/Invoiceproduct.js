import React from "react";

function Invoiceproduct() {
  return (
    <div>
      <main
        role="main"
        className="col-md-12 ml-sm-auto col-lg-12 pt-4 px-4 invoice_style"
      >
        <div className="row bottom-line nav-style">
          <div className="col">
          </div>

          <div className="col bill-dt">
            <span className="mt-3">Date: 17/03/2022</span>
          </div>
          <div className="row img-side-card mt-1">
            <div className="col-md-3 bg-white img-style">
              <img
                src="images/invoice4-removebg-preview.png"
                alt=""
                width="100%"
                style={{ marginTop: "50%", marginLeft: "0%" }}
              />
            </div>

            <div className="col-md-9">
              <div className="box-style">
                <div className="row">
                  <div className="col-6">
                    <h5 className="main-heading">Invoice</h5>
                  </div>
                  <div className="col-6">
                    <h5 className="main_invoice_number">Invoice Number : 8976542138</h5>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-5 main-info-style">
                    <h6>Order Information</h6>

                    <span>Order Id :</span>
                    <p> pro51</p>

                    <span>Order Date :</span>
                    <p>10/07/2023</p>
                    <span>Payment Mode:</span>
                    <p>UPI</p>
                    <span>User Name :</span>
                    <p>Tirth Gajjar</p>
                  </div>
                  <div className="col-md-7 main-info-style">
                    <h6>Other Information</h6>

                    <div className="row">
                      <div className="col-6">
                        {" "}
                        <span>Bill To :</span>
                        <p>Tirth Gajjar</p>
                        <p className="w">
                          C-201, Jaldeep icon,in front of Richmond grand flats,
                          Makarba torrent house, Makarba road. Ahmedabad 380054
                          Gujarat
                        </p>
                      </div>
                      <div className="col-6">
                        <span>Ship to :</span>
                        <p>Tirth Gajjar</p>
                        <p>
                          C-201, Jaldeep icon,in front of Richmond grand flats,
                          Makarba torrent house, Makarba road. Ahmedabad 380054
                          Gujarat
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row main-info-style">
                    <h6> Total Item : 1</h6>
                  <div className="col-12">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Product</th>
                          <th scope="col">Title</th>
                          <th scope="col">Qty</th>
                          <th scope="col">Gross Amount</th>

                          <th scope="col">Taxable Amount</th>

                          <th scope="col">Total</th>

                        </tr>
                      </thead>
                      <tbody >
                        <tr>
                          <th>Mobile</th>
                          <td className="invoice_product_det">Vivo V27 pro,8 GB +128GB Vivo V27 pro,8 GB +128GB Vivo V27 pro,8 GB +128GB Vivo V27 pro,8 GB +128GB Vivo V27 pro,8 GB +128GB Vivo V27 pro,8 GB +128GB </td>
                          <td>01</td>
                          <td>27000</td>
                          <td>500</td>
                          <td>27500</td>

                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="row mt-5 mb-5">
                  <div className="col amt-style">
                    <p>Totla Amount : 700</p>
                  </div>
                </div>

           
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Invoiceproduct;
