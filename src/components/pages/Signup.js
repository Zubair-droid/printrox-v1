import React from 'react'
import "../../static/style/pages/Signup.css"
import {Link} from "react-router-dom"
import Navbar from  "../../components/Layout/Navbar"

function Signup() {
    return (
        <div className = "signup-page">
        <Navbar />
        <div className = "signup-container">
        
        <h3 className = "signin-header">Sign Up </h3>
            
            <form className = "signin-form">
            
            <div className = "input">
            <h5 className = "inputText">Email address</h5>
            <input type = "text" className = "inputField" required = "true"></input>
            </div>

            <div className = "input">
            <h5 className = "inputText">Confirm Password</h5>
            <input type = "password" className = "inputField" required = "true"></input>
            </div>

            <div className = "input">
            <h5 className = "inputText">Password</h5>
            <input type = "password" className = "inputField" required = "true"></input>
            </div>

            {/* <span><input type = "checkbox" className = "checkInput"></input>Remember Me</span> */}
            <button className = "btn btn-block btn-primary">Sign Up</button>
            <hr className = "line-break"></hr>
            <h5 className = "newUser">Already a user?</h5>
            <Link to = "/signin">
            <button className = "btn btn-block btn-primary">Back to Login</button>
            </Link>
            </form>

        </div>
            
        </div>
    )
}

export default Signup
