import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Pass1 from "./validation/Pass1";

function Forgetpassword() {

    const [values, setValues] = useState({
        email: '',
        // password: '',
    });

    const [errors, setErrors] = useState([])
    const [isSubmit, setSubmit] = useState(false);

    function Pass1(values){
        const errors = {}
    
        // email pattern //
        const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
        
        // email validation //
        if (values.email === ``) {
            errors.email = `Email addresss is required`;
        }else if (!email_pattern.test(values.email)) {
            errors.email = `Email address did not match`;
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
        setErrors(Pass1(values));
        setSubmit(true);
    }

    useEffect(() => {
        console.log(errors)
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log(values)
        }
    },);

    return (
        // <>
        <>
            <div className="container forget-box-style pb-5">
                <div className="row">
                    <div className="col-lg-4">
                    </div>

                    <div className="col-lg-5 mt-5">
                    <img src="images/forget_pass.png"  alt=""/>

                        <h1 className="col-lg 6 " >Forgot Password?</h1>
                        <p className="forget_login_details">Please enter the email-id you use to sign-in to eBuddy </p>


                        <div className="form-group mt-4">

                            <label for="email">Email Address<span style={{color:"red"}}>*</span></label>
                            <input type="email" className="form-control login_text_box" id="myEmail" value={values.email} placeholder="Enter your email address" name="email" onChange={handleChnage} />
                            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                        </div>

                        <div className="mt-4">
                            <button type="submit" className="forget_button_style" onClick={handleClick} >Continue</button>
                        
                        </div>

                        <div className='text1'>
                        
                            <p className="mt-4">Don't have an account ?<span><Link to='/Signup'>Signup</Link></span> <Link to='/forgetpassword2'>2</Link></p>
                        </div>

                    </div>

                    <div className="col-lg">
                    </div>
                </div>
            </div>
        </>
        // </>
    );
}

export default Forgetpassword
