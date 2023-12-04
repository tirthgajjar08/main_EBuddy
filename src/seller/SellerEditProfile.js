import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import {MdFileUpload} from "react-icons/md"
import {AiFillDelete} from "react-icons/ai"

function SellerEditProfile() {
  return (
   <>
<main id="main" class="main">

<div class="pagetitle mb-4">
  <h1>Profile</h1>  
  
</div>

<section class="section profile">
  <div class="row">
    <div class="col-xl-4">

      <div class="card">
        <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">

          <img src="../images/default.jpg" alt="Profile" class="rounded-circle"/>
          <h2>Tirth Mohan</h2>
          <h3>Seller</h3>
         
        </div>
      </div>

    </div>

    <div class="col-xl-8">

      <div class="card">
        <div class="card-body pt-3">
       
          <ul class="nav nav-tabs nav-tabs-bordered">

            <li class="nav-item">
              <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
            </li>

            <li class="nav-item">
              <button class="nav-link " data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
            </li>

          

          </ul>
          <div class="tab-content pt-2">

            <div class="tab-pane fade show active profile-overview" id="profile-overview">
              <h5 class="card-title">About</h5>
              <p class="small fst-italic">The Ebuddy Buyer-Seller Messaging Service simplifies and protects communication with third-party sellers.</p>

              <h5 class="card-title">Profile Details</h5>

              <div class="row">
                <div class="col-lg-3 col-md-4 label ">Full Name</div>
                <div class="col-lg-9 col-md-8">Tirth</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Last Name</div>
                <div class="col-lg-9 col-md-8">Mohan</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Phone number</div>
                <div class="col-lg-9 col-md-8">99876542</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Email ID</div>
                <div class="col-lg-9 col-md-8">tirthmohan@gmail.com</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Gender</div>
                <div class="col-lg-9 col-md-8">Male</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Date of Birth</div>
                <div class="col-lg-9 col-md-8">01/01/2023</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Blood Group</div>
                <div class="col-lg-9 col-md-8">A+</div>
              </div>


              <div class="row">
                <div class="col-lg-3 col-md-4 label">House No</div>
                <div class="col-lg-9 col-md-8">c-201 ks School</div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-md-4 label">Colony/Street</div>
                <div class="col-lg-9 col-md-8">University Road</div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-md-4 label">City</div>
                <div class="col-lg-9 col-md-8">Ahmedabad</div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-md-4 label">State</div>
                <div class="col-lg-9 col-md-8">Gujarat</div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-md-4 label">Country</div>
                <div class="col-lg-9 col-md-8">India</div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-md-4 label">Pincode</div>
                <div class="col-lg-9 col-md-8">380055</div>
              </div>

            </div>

            <div class="tab-pane fade profile-edit pt-3" id="profile-edit">

             
              <form>
                <div class="row mb-3">
                  <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                  <div class="col-md-8 col-lg-9">
                    <img src="../images/default.jpg" alt="Profile"/>
                    <div class="pt-2">
                      <Link to="" class="btn btn-primary btn-sm mr-5" title="Upload new profile image"><MdFileUpload/></Link>
                      <Link to="" class="btn btn-danger btn-sm" title="Remove my profile image"><AiFillDelete/></Link>
                    </div>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="fullName" class="col-md-4 col-lg-3 col-form-label">First Name</label>
                  <div class="col-md-8 col-lg-9">
                    <input type="text" class="form-control" placeholder='Enter First Name'/>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Last Name</label>
                  <div class="col-md-8 col-lg-9">
                    <input type="text" class="form-control"  placeholder='Enter Last Name'/>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Phone Number</label>
                  <div class="col-md-8 col-lg-9">
                    <input type="text" class="form-control" placeholder='Enter Phone number'/>
                  </div>
                </div>

                

                <div class="row mb-3">
                  <label for="company" class="col-md-4 col-lg-3 col-form-label">Email Id</label>
                  <div class="col-md-8 col-lg-9">
                    <input  type="text" class="form-control" placeholder='Enter Email id'/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Job" class="col-md-4 col-lg-3 col-form-label">Gender</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="job" type="text" class="form-control" placeholder='Enter Gender'/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Country" class="col-md-4 col-lg-3 col-form-label">Date of Birth</label>
                  <div class="col-md-8 col-lg-9">
                    <input type="text" class="form-control" placeholder='Date of Birth'/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Address" class="col-md-4 col-lg-3 col-form-label">Blood Group</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="address" type="text" class="form-control" placeholder='Enter Blood Group'/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Phone" class="col-md-4 col-lg-3 col-form-label">House No</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="phone" type="text" class="form-control" placeholder='Enter House no'/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Email" class="col-md-4 col-lg-3 col-form-label">Colony/street</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="email" type="email" class="form-control" placeholder='Enter Colony/Street'/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Twitter" class="col-md-4 col-lg-3 col-form-label">City</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="twitter" type="text" class="form-control" placeholder='Enter City'/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Facebook" class="col-md-4 col-lg-3 col-form-label">State</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="facebook" type="text" class="form-control" placeholder='Enter State'/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Instagram" class="col-md-4 col-lg-3 col-form-label">Country</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="instagram" type="text" class="form-control" placeholder='Enter Country'/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Linkedin" class="col-md-4 col-lg-3 col-form-label">Pincode</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="linkedin" type="text" class="form-control" placeholder='Enter pincode'/>
                  </div>
                </div>

                <div class="text-center">
                  <button type="submit" class="btn btn-primary">Save Changes</button>
                </div>
              </form>

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

export default SellerEditProfile
