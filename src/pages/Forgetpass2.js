import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Forgetpass2(){

    
    const [values, setValues] = useState({
        // email: '',
        password: '',
        cpassword: '',
    });

    const [errors, setErrors] = useState([])
    const [isSubmit, setSubmit] = useState(false);


    function Pass2(values){
      const errors = {}
  
      //<----password pagttern---->//
      const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  
      // <---password validation---> //
      if (values.password === ``) {
          errors.password = `Passowrd Required`;
      }
      else if (!password_pattern.test(values.password)) {
          errors.password = `Password did not match`;
      }
  
      // <---confirm password validation--->
      if (values.cpassword === ``) {
          errors.cpassword = `confirm password required`;
      }
      else if (String(values.cpassword) !== String(values.password)) {
          console.log(values.cpassword + `___` + values.password);
          errors.cpassword = `password and confirm password not match`;
      }
  
      return errors;
  }

    function handleChnage(e) {
        const newobj = { ...values, [e.target.name]: [e.target.value] }
        setValues(newobj)
        console.log(values)
    }

    function handleClick(event) {
        event.preventDefault();
        setErrors(Pass2(values));
        setSubmit(true);
    }

    useEffect(() => {
        console.log(errors)
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log(values)
        }
    },);





    
    return(
        <>
            <div className="container forget-box-style ">
                <div className="row">
                    <div className="col-lg-4">    
                    </div>

                    <div className="col-lg-5 mt-5">
                    <img src="images/forget_pass.png"  alt=""/>

                        <h1 className="col-lg 6" >Forgot Password</h1>

                        <div className=" form-group mt-4">
                            <label for="password">New Password<span style={{color:"red"}}>*</span></label>
                            <input type="password" name="password" className="form-control login_text_box" value={values.password} placeholder="Enter new password" onChange={handleChnage} />
                            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                        </div>

                        <div className=" form-group mt-4">
                            <label for="cpassword">Confirm new Password<span style={{color:"red"}}>*</span></label>
                            <input type="password" name="cpassword" className="form-control login_text_box" value={values.cpassword} placeholder="Enter confirm new password"  onChange={handleChnage}/>
                            {errors.cpassword && <p style={{ color: "red" }}>{errors.cpassword}</p>}
                        </div>

                        <div className="mt-4">
                            <button type="submit" onClick={handleClick} className="forget2_button_style">Chnage Password</button>
                        </div>

                        <div className='text1 mt-4'>
                            <p>Back to login? <span><Link to='/Login'>Login</Link></span></p>
                        </div>

                    </div>

                    <div className="col-lg-3">    
                    </div>
                </div>
            </div>
        </>

    );
}

export default Forgetpass2
