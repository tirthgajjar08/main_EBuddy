import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import {BsFillCartCheckFill} from "react-icons/bs"
import {BiSolidUser} from "react-icons/bi";
import {FaPercent,FaUserAlt} from "react-icons/fa"
// import Sidebar from "../components/seller_com/Sidebar"

function Dashboard() {
  return (
   <>
   {/* <Sidebar/> */}
    <main id="main" className="main">

<div className="pagetitle mb-4">
  <h1>Dashboard</h1>
 
</div>
<section className="section dashboard">
  <div className="row">

    <div className="col-lg-12">
      <div className="row">

    
        <div className="col-xxl-4 col-md-6">
          <div className="card info-card sales-card">

            <div className="filter">
              <Link to="" data-bs-toggle="dropdown">
             <i className="bi bi-three-dots"></i></Link>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><Link to="" className="dropdown-item">Today</Link></li>
                <li><Link to="" className="dropdown-item">This Month</Link></li>
                <li><Link to="" className="dropdown-item">This Year</Link></li>
              </ul>
            </div>

            <div className="card-body">
              <h5 className="card-title">Sales <span>| Today</span></h5>

              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <BsFillCartCheckFill style={{color:"rgb(0 14 126)"}}/>
                </div>
                <div className="ps-3">
                  <h6>145</h6>
                  <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                </div>
              </div>
            </div>

          </div>
        </div>


        <div className="col-xxl-4 col-md-6">
          <div className="card info-card revenue-card">

            <div className="filter">
              <Link className="icon" to="" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
             
            </div>

            <div className="card-body">
              <h5 className="card-title">Revenue <span>| This Month</span></h5>

              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <FaPercent style={{color:"black"}}/>
                </div>
                <div className="ps-3">
                  <h6>3,264</h6>
                  <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                </div>
              </div>
            </div>
            

          </div>
        </div>


        <div className="col-xxl-4 col-xl-12">

          <div className="card info-card customers-card">

            <div className="filter">
              <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><Link className="dropdown-item" to="#">Today</Link></li>
                <li><Link className="dropdown-item" to="#">This Month</Link></li>
                <li><Link className="dropdown-item" to="#">This Year</Link></li>
              </ul>
            </div>

            <div className="card-body">
              <h5 className="card-title">Customers <span>| This Year</span></h5>

              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <FaUserAlt/>
                </div>
                <div className="ps-3">
                  <h6>1244</h6>
                  <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>

                </div>
              </div>

            </div>
          </div>

        </div>

    
        <div className="col-12">
          <div className="card">

            <div className="filter">
              <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><Link className="dropdown-item" to="#">Today</Link></li>
                <li><Link className="dropdown-item" to="#">This Month</Link></li>
                <li><Link className="dropdown-item" to="#">This Year</Link></li>
              </ul>
            </div>

            <div className="card-body">
              <h5 className="card-title">Reports <span>/Today</span></h5>

          
              <div id="reportsChart"></div>

              {/* <script>
                document.addEventListener("DOMContentLoaded", () => {
                  new ApexCharts(document.querySelector("#reportsChart"), {
                    series: [{
                      name: 'Sales',
                      data: [31, 40, 28, 51, 42, 82, 56],
                    }, {
                      name: 'Revenue',
                      data: [11, 32, 45, 32, 34, 52, 41]
                    }, {
                      name: 'Customers',
                      data: [15, 11, 32, 18, 9, 24, 11]
                    }],
                    chart: {
                      height: 350,
                      type: 'area',
                      toolbar: {
                        show: false
                      },
                    },
                    markers: {
                      size: 4
                    },
                    colors: ['#4154f1', '#2eca6a', '#ff771d'],
                    fill: {
                      type: "gradient",
                      gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.3,
                        opacityTo: 0.4,
                        stops: [0, 90, 100]
                      }
                    },
                    dataLabels: {
                      enabled: false
                    },
                    stroke: {
                      curve: 'smooth',
                      width: 2
                    },
                    xaxis: {
                      type: 'datetime',
                      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                    },
                    tooltip: {
                      x: {
                        format: 'dd/MM/yy HH:mm'
                      },
                    }
                  }).render()
                });
              </script> */}
          

            </div>

          </div>
        </div>

  
        <div className="col-12">
          <div className="card recent-sales overflow-auto">

            <div className="filter">
              <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><Link className="dropdown-item" to="#">Today</Link></li>
                <li><Link className="dropdown-item" to="#">This Month</Link></li>
                <li><Link className="dropdown-item" to="#">This Year</Link></li>
              </ul>
            </div>

            <div className="card-body">
              <h5 className="card-title">Recent Sales <span>| Today</span></h5>

              <table className="table table-borderless datatable">
                <thead>
                  <tr>
                    <th scope="col">Customer ID</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><Link to="#">#2457</Link></th>
                    <td>Brandon Jacob</td>
                    <td><Link to="#" className="text-primary">At praesentium minu</Link></td>
                    <td>₹64</td>
                    <td><span className="badge bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <th scope="row"><Link to="#">#2147</Link></th>
                    <td>Bridie Kessler</td>
                    <td><Link to="#" className="text-primary">Blanditiis dolor omnis similique</Link></td>
                    <td>₹47</td>
                    <td><span className="badge bg-warning">Pending</span></td>
                  </tr>
                  <tr>
                    <th scope="row"><Link to="#">#2049</Link></th>
                    <td>Ashleigh Langosh</td>
                    <td><Link to="#" className="text-primary">At recusandae consectetur</Link></td>
                    <td>₹147</td>
                    <td><span className="badge bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <th scope="row"><Link to="#">#2644</Link></th>
                    <td>Angus Grady</td>
                    <td><Link to="#" className="text-primar">Ut voluptatem id earum et</Link></td>
                    <td>₹67</td>
                    <td><span className="badge bg-danger">Rejected</span></td>
                  </tr>
                  <tr>
                    <th scope="row"><Link to="#">#2644</Link></th>
                    <td>Raheem Lehner</td>
                    <td><Link to="#" className="text-primary">Sunt similique distinctio</Link></td>
                    <td>₹165</td>
                    <td><span className="badge bg-success">Approved</span></td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>
        </div>

        <div className="col-12">
          <div className="card top-selling overflow-auto">

            <div className="filter">
              <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><Link className="dropdown-item" to="#">Today</Link></li>
                <li><Link className="dropdown-item" to="#">This Month</Link></li>
                <li><Link className="dropdown-item" to="#">This Year</Link></li>
              </ul>
            </div>

            <div className="card-body pb-0">
              <h5 className="card-title">Top Selling <span>| Today</span></h5>

              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Product Details</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total Sold</th>
                    <th scope="col">Revenue </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                     1
                          </th>
                    <td>Vivo v27 pro
                      {/* <Link to="#" className="text-primary fw-bold">Ut inventore ipsa voluptas nulla</Link> */}
                      </td>
                    <td>₹27000</td>
                    <td>₹22124</td>
                    <td>₹5,828</td>
                  </tr>
                  <tr>
                  <th scope="row">
                     1
                          </th>
                    <td>Apple Ipad </td>
                    <td>₹46666</td>
                    <td >₹99998</td>
                    <td>₹4,508</td>
                  </tr>
                  <tr>
                  <th scope="row">
                     1
                          </th>
                    {/* <td><Link to="#" className="text-primary fw-bold">Doloribus nisi exercitationem</Link></td> */}
                    <td>Oppo Reno 7</td>
                    <td>₹30,000</td>
                    <td>₹4,508</td>

                    <td>₹4,366</td>
                  </tr>
                  <tr>
                  <th scope="row">
                     1
                          </th>
                    {/* <td><Link to="#" className="text-primary fw-bold">Officiis quaerat sint rerum error</Link></td> */}
                    <td>₹32</td>
                    <td>₹30,000</td>
                    <td>₹2,016</td>
                    <td>₹4,508</td>

                  </tr>
                  <tr>
                  <th scope="row">
                     1
                          </th>
                    {/* <td><Link to="#" className="text-primary fw-bold">Sit unde debitis delectus repellendus</Link></td> */}
                    <td>₹79</td>
                    <td>₹30,000</td>
                    <td>₹3,239</td>
                    <td>₹4,508</td>

                  </tr>
                </tbody>
              </table>

            </div>

          </div>
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

export default Dashboard
