import React from "react";
import MainBackground from "../../static/img/pages/main-background.svg";
import "../../static/style/pages/home.css";
const Home = () => {
  return (
    <div className="home-page">
      <div className="container-fluid px-0">
        <div className="header-sec">
          <div className="row no-gutters">
            <div className="col-lg-5">
              <p className="heading ">
                {" "}
                Start your <span>hassle free</span> printing today
              </p>
            </div>
            <div className="col-lg-7">
              <img
                className="main-background"
                src={MainBackground}
                alt="main background"
              />
            </div>

            <button className="get-started-btn">Get Started</button>
          </div>
          <div className="printrox">
            <div class="printrox-sec">
              <h2>WE ARE - PRINTROX</h2>
              <div className="border-btm" />
              <div className="row no-gutters">
                <div className="col-md-4">
                  <div className="we-are-card">
                    <i class="fas fa-check-circle"></i>
                    <h3>Easy to use</h3>
                    <p>
                      Get document printed without any hassle with the help of
                      our application.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="we-are-card">
                    <i class="fas fa-business-time"></i>
                    <h3>Cost and Time effective</h3>
                    <p>
                      We assure you that, your documents get printed within
                      given time bound and in lower cost.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="we-are-card">
                    <i class="fas fa-handshake"></i>
                    <h3>Reliable</h3>
                    <p>
                      We are known for our authenticity, so there should not be
                      any other choice when your documents needed to be printed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="how-to">
            <div className="how-to-sec">
              <h2>HOW TO USE</h2>
              <div className="border-btm" />
              <div className="how-block">
                <div className="how-to-step">
                  <div className="how-to-circle">
                    <p>1</p>
                  </div>
                  <p className="step">Copy and paste the link of document</p>
                </div>
                <div className="how-to-step">
                  <div className="how-to-circle">
                    <p>2</p>
                  </div>
                  <p className="step">Select the shops desired shop</p>
                </div>
                <div className="how-to-step">
                  <div className="how-to-circle">
                    <p>3</p>
                  </div>
                  <p className="step">Make payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
