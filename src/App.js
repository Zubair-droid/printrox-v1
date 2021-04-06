import React from "react";
import Dealer from "../src/components/pages/Dealer"
import Signup from "../src/components/pages/Signup"
import Signin from "../src/components/pages/Signin"
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import Home from "./components/pages/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <Router>
    <div>
    <Switch>
       
       <Route path = "/dealer">
        <Navbar/>
        <Dealer />
        <Footer />
        </Route>


        <Route path = "/signup">
        <Signup />
        <Footer />
        </Route>

        <Route path = "/signin">
         <Signin />
         <Footer />
        </Route>
        
        
        <Route path = "/">
        <Navbar />
        <Home />
        <Footer />
        </Route>
        
      </Switch>
      
    </div>
    </Router>
  );
};

export default App;
