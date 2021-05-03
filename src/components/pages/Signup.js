import {React, useState} from 'react'
import "../../static/style/pages/Signup.css"
import {Link, useHistory} from "react-router-dom"
import Navbar from  "../../components/Layout/Navbar"
import {auth} from "../../firebase.js";

function Signup() {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const history = useHistory();
        
    
        const register = e => {
          e.preventDefault();
    
          // Some firebase register logic.........
          auth
          .createUserWithEmailAndPassword(email,password)
          .then((auth) => {
          //User successfully created
          console.log(auth);
          if(auth){
            history.push('/')
          }
        })
        .catch(error => alert(error.message))
    
      }
    return (
        <div className = "signup-page">
        <Navbar />
        <div className = "signup-container">
        
        <h3 className = "signin-header">Sign Up </h3>
            
            <form className = "signin-form">
            
            <div className = "input">
            <h5 className = "inputText">Email address</h5>
            <input type = "text" value ={email} onChange = {e => setEmail(e.target.value)} className = "inputField" required = "true"></input>
            </div>

           <div className = "input">
            <h5 className = "inputText">Password</h5>
            <input type = "password" value = {password} onChange = {e => setPassword(e.target.value)}className = "inputField" required = "true"></input>
            </div>

            <div className = "input">
            <h5 className = "inputText">Confirm Password</h5>
            <input type = "password" className = "inputField" required = "true"></input>
            </div>

            {/* <span><input type = "checkbox" className = "checkInput"></input>Remember Me</span> */}
            <button onClick ={register} className = "btn btn-block btn-primary">Sign Up</button>
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
