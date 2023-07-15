import React, {useState} from "react";
import { google } from "./googel";
import { facebook } from "./facebook";



const SignUpForm = () =>{
    return(
        <div className="centered">
            <div className="create">
                <h3>Create Account</h3>
            </div>
            <div className="othersign">
                <span >
                    <div className="gooogle">
                    <img style={{width:25, height:25}} src={google} alt="google"/>
                    <span>Sign Up With Google</span>
                    </div>
                </span>
                <span >
                    <div className="facebook">
                    <img style={{width:25, height:25}} src={facebook} alt="facebook"/>
                    <span>Sign Up With Facebook</span>
                    </div>
                </span>
            </div>
            <div className="form-input">
                <input className="borderbottom" type="text" placeholder="Full Name"></input>
            </div>
            <div className="form-input">
                <input className="borderbottom" type="email" placeholder="Email Address"></input>
            </div>
            <div className="form-input">
                <input className="borderbottom" type="password" placeholder="Password"></input>
              

            </div>
            <div className="form-input">
                <input className="borderbottom" type="password" placeholder="Confirm Password"></input>
            </div>
            <div className="btn">
            <button type="submit">Create Account</button>
            </div>
        </div>
    )

}

export default SignUpForm