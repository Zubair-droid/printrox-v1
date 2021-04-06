import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import "../../static/style/pages/Dealer.css"
import authentication from "../../static/img/pages/authentication.svg"

function Dealer() {
    return (
        <div className = "dealer-page">
         <div className = "dealer-container">
         
         <div className = "kyc-img">
         <img className = "auth-img" src = {authentication} alt = "authentication"></img>
         </div>

         <div className = "dealer-verify">
         
         <h4>Would like to do business with us?</h4>
         <h5>Simple!. As a dealer, you can create your DTP with us by verifying your KYC</h5>
         <p>Verifying KYC is a one stop solution for your business setup to do in a go.</p>
         <p>Click below and get it done.<CheckCircleIcon color = "primary" fontSize = "large" /> </p>
         <button type = "submit" className = "btn btn-block btn-primary">Complete KYC</button>
         </div>
            
        </div>
        </div>
    )
}

export default Dealer
