import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import {MdOutlineDeleteForever} from 'react-icons/md'
import { BiDotsVerticalRounded } from "react-icons/bi"
import { FiEdit } from 'react-icons/fi'
function AdminCustomer() {
  return (
    <>
    <main id="main"   className="main">

<div className="pagetitle mb-4">
  <h1>Customer List</h1>
  
</div>
    <section className="section">
  <div className="row">
    <div className="col-lg-12">

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Customer</h5>
         
         

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
              className='p-1 w-55'
            />
            
            
          </form>
        </div>
          <table className="prolist_style table datatable mt-4">
            <thead>
             
            <tr>
                <th scope="col">No</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Phone number</th>
                <th scope="col">Email Id</th>
                <th scope="col">Join Date</th>
                
                <th scope="col">Status</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
            
            <tr>
                <th scope="row">1</th>
                <td>Tirth Gajjar</td>
                <td>9876543211</td>
                <td>tirth@gmail.com</td>
                <td>15/06/2023 </td>
               
                
                

                <td className="m-2 p-2 badge bg-success ">Verified</td>
                <td><div className="filter">
                                  <Link className="icon" to="" data-bs-toggle="dropdown"><BiDotsVerticalRounded style={{ fontSize: "25px", color: "black" }} /></Link>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li style={{color:'blue',background:'white',borderBottom:'1px solid lightgray'}}><Link className="dropdown-item" to={`/seller/editProduct`}>
                                     
                                      <button className='btn' >
                                        <FiEdit></FiEdit>&nbsp; Edit Detail
                                      </button>
                                    </Link></li>
                                    <li style={{color:'blue',background:'white',borderBottom:'1px solid lightgray'}}><Link className="dropdown-item" to="">
                                      <button className='btn'
                                        
                                      >
                                       
                                       <MdOutlineDeleteForever></MdOutlineDeleteForever>&nbsp;Delete
                                      </button>
                                    </Link></li>
                                  </ul>
                                </div></td>

              
              </tr>
              
              <tr>
                <th scope="row">2</th>
                <td>Mohan Prajapti</td>
                <td>9532147866</td>
                <td>mohan@gmail.com</td>
                <td>15/06/2023 </td>
     
                
                

                <td className="m-2 p-2 badge bg-success ">Verified</td>
                <td><div className="filter">
                                  <Link className="icon" to="" data-bs-toggle="dropdown"><BiDotsVerticalRounded style={{ fontSize: "25px", color: "black" }} /></Link>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li style={{color:'blue',background:'white',borderBottom:'1px solid lightgray'}}><Link className="dropdown-item" to={`/seller/editProduct`}>
                                     
                                      <button className='btn' >
                                      <FiEdit> </FiEdit>&nbsp;Edit Detail
                                      </button>
                                    </Link></li>
                                    <li style={{color:'blue',background:'white',borderBottom:'1px solid lightgray'}}><Link className="dropdown-item" to="">
                                      <button className='btn' 
                                        
                                      >
                                       
                                   <MdOutlineDeleteForever></MdOutlineDeleteForever>&nbsp;Delete
                                      </button>
                                    </Link></li>
                                  </ul>
                                </div></td>

              
              </tr>
              
            
            
            
              
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

export default AdminCustomer
