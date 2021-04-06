import React from 'react'
import "../../static/style/pages/Dealer.css"
import authentication from "../../static/img/pages/authentication.svg"

function Dealer() {
    return (
        <div className = "dealer-page">
         <div className = "dealer-container">
         
         <div className = "kyc-img">
         <img className = "auth-img" src = {authentication} alt = "authentication"></img>
         </div>

         </div>
            
        </div>
    )
}

export default Dealer
