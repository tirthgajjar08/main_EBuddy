import React from 'react'

function EditProfile() {
    // for chaging images 
var uimg1=document.getElementById("user-img-changse")
function readURL(input){
    if(input.files)
    {
            var reader=new FileReader();
            reader.readAsDataURL(input.files[0]);
            reader.onload=(e)=>{
                     uimg1.src=e.target.result;
            }
    }
   
}
  return (
    <>
     <div className="container">
      <div className="row">
      

      

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-4 px-4 user_edit_profile_box">

            <div className="box-style">

                        <div className="main-heading">
    
                                  <div className="row ">
                                      <div className="col-md-9">
                                      
                                      </div>
                                      <div className="col-md-3">   
                                          <button className="user_edit_save_changes_style">Save changes</button>
                                      </div>

                                  </div>
                        </div>

                                  
                                  
                      <form action="">
                                                        <div className="pic-name-heading ">

                                                          <div className="row ">
                                                            <div className="col">
                                                            <div className="style-img justify-content-md-center">
                                                                    
                                                                              <img src="images/default.jpg " alt="" className="user-main-img-style  mx-auto d-block"  id="user-img-change"/>
                                                                              
                                                                              <input type="file" className="user-choose-btn-style" onchange="readURL(this)" placeholder="add"/>

                                                                      
                        
                                                      </div>
                                                      
                                                      </div>
                                                      </div>


                                                    
                                                      <div className="row">
                                                                        <div className="col-md-3">
                                                                              <label for="fname">First Name</label> 
                                                                              <input type="text" id="fname" className="textbox-style" placeholder="Enter your irst name.."/>
                                                                        

                                                                        </div>
                                                                        <div className="col-md-3">
                                                                    
                                                                              <label for="lname">Last Name</label> 
                                                                              <input type="text" id="lname" className="textbox-style" placeholder="Enter your last name.."/>
                                                                      

                                                                        </div>
                                                      </div>

                                                  </div>

                                                  <div className="phone-email-heading">
                                                    <h5 style={{color:"gray",fontSize:"1rem",marginBottom:"1.8%"}}>Personal Information</h5>
                                                      <div className="row">
                                                                      <div className="col-md-3">
                                                                          
                                                                      <label for="phone">Phone number</label> 
                                                                      <input type="text" id="phone" className="textbox-style"  placeholder="Enter your phone num.."/>

                                                                      
                                                                  
                                                                 
                                                                      </div>
                                                          <div className="col-md-3">

                                                            
                                                                  <label for="email">Email Id</label> 
                                                                  <input type="email" id="email" className="textbox-style" name="firstname" placeholder="Enter your email id.."/>
                              
                                                                
                                                          
                                                          </div>

                                                          <div className="col-md-3">

                                                        
                                                                  <label for="gender">Gender</label> 
                                                                  
                                                                  <select id="gender" className="drop-style">
                                                                      <option value="Male">Male</option>
                                                                      <option value="Female">Female</option>
                                                                      <option value="Other">Other</option>
                                                                    
                                                                    </select>
                              
                                                                
                                                        
                                                          </div>

                                                    
                                                      </div>


                                                  </div>


                                                  <div className="birth-blood-heading">
                                                      <div className="row ">
                                                                      <div className="col-md-3">
                                                                    
                                                                      <label for="dob">Date of birth</label> 
                                                                      
                                                                      <input type="date" id="dob" className="textbox-style"/>

                                                                      
                                                                  
                                                            
                                                                      </div>
                                                          

                                                          <div className="col-md-3">

                                                        
                                                                  <label for="blood">Blood group</label> 
                                                                  <select id="blood" className="drop-style"  style={{marginTop:"2%"}}>
                                                                    <option value="O+">none</option>
                                                                      <option value="O+">O+</option>
                                                                      <option value="A+">A+</option>
                                                                      <option value="B+">B+</option>

                                                                      <option value="O-">O-</option>
                                                                      <option value="A-">A-</option>
                                                                      <option value="B-">B-</option>

                                                                      <option value="AB+">AB+</option>
                                                                      <option value="AB-">A-</option>
                                                                    
                                                                    </select>
                              
                                                                
                                                        
                                                          </div>

                                                    
                                                      </div>


                                                  </div>
                                                  

                                              
                                                  <div className="address-heading">
                                                      <h5 style={{color:"gray",fontSize:"1rem",marginBottom:"1.5%"}}>Address</h5>
                                                      <div className="row">
                                                                      <div className="col-md-3">
                                                                
                                                                      <label for="phone">House No/Street num/Area</label> 
                                                                      <input type="text" id="phone" className="textbox-style"  placeholder="Enter your house no.."/>

                                                                      
                                                                  
                                                            
                                                                      </div>
                                                          <div className="col-md-3">
                                                            
                                                              <form action="">
                                                                  <label for="street">Colony/Street</label> 
                                                                  <input type="text" id="street" className="textbox-style" name="firstname" placeholder="Enter your colony/s  `-treet.."/>
                              
                                    
                                                              </form>
                                                          </div>

                                                          <div className="col-md-3">

                                                        
                                                                  <label for="city">City</label> 
                                                                  <input type="email" id="city" className="textbox-style" name="firstname" placeholder="Enter your city.."/>
                              
                                                                
                                                            
                                                          </div>

                                                    
                                                      </div>


                                                  </div>
                                                  <div className="address-heading-2">
                                                      
                                                      <div className="row">
                                                                      <div className="col-md-3">
                                                                        
                                                                      <label for="state">State</label> 
                                                                      <input type="text" id="state" className="textbox-style"  placeholder="Enter your state.."/>

                                                                      
                                                                  
                                                                
                                                                      </div>
                                                          <div className="col-md-3">
                                                            
                                                            
                                                                  <label for="country">Country</label> 
                                                                  <input type="text" id="country" className="textbox-style" name="firstname" placeholder="Enter your country.."/>
                              
                                                                
                                                    
                                                          </div>

                                                          <div className="col-md-3">

                                                            
                                                                  <label for="code">Pincode</label> 
                                                                  <input type="text" id="code" className="textbox-style" name="firstname" placeholder="Enter your pincode.."/>
                              
                                                                
                                                              
                                                          </div>

                                                    
                                                      </div>


                                                  </div>
                                                  
                    </form>
                                      

            </div>
        
        </main>
      </div>
    </div>
    </>
  )
}

export default EditProfile
