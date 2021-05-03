import {React, useState} from 'react'
import {Link, useHistory} from "react-router-dom"
import Navbar from "../../components/Layout/Navbar"
// import Logo from "../../static/img/layout/logo.png"
import "../../static/style/pages/Signin.css";
import {auth} from "../../firebase.js";


function Signin() {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const history = useHistory();
        
        const signIn = e => {
          e.preventDefault();
    
          // Some firebase signIn logic.......
          auth
              .signInWithEmailAndPassword(email,password)
              .then(auth => {
                history.push('/')
                console.log(auth)
              })
              .catch(error => alert(error.message))
        }
    
    
    return (
     <div className = "signin-page">
      <Navbar />
        <div className = "signin-container">
           
            {/* <Link to = "/">
            <div className = "logo-div">
            <img className = "logo-img" src = {Logo} alt = "logo" />
            </div>
            </Link> */}
            <h3 className = "signin-header">Sign In </h3>
            
            <form className = "signin-form">
            
            <div className = "input">
            <h5 className = "inputText">Email address</h5>
            <input type = "text" value = {email} onChange ={e => setEmail(e.target.value)} className = "inputField" required = "true"></input>
            </div>

            <div className = "input">
            <h5 className = "inputText">Password</h5>
            <input type = "password" value = {password}onChange ={e => setPassword(e.target.value)}className = "inputField" required = "true"></input>
            </div>
            {/* <span><input type = "checkbox" className = "checkInput"></input>Remember Me</span> */}
            <button  onClick = {signIn} className  = "btn btn-block btn-primary">Sign In</button>
            <hr className = "line-break"></hr>
            <h5 className = "newUser">New User?</h5>
            <Link to = "/signup">
            <button className = "btn btn-block btn-primary">Register</button>
            </Link>
            </form>
        </div>
    </div>
    )
}

export default Signin
