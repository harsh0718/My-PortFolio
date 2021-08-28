import React from "react";
import dev from "./Images/used.svg";

const Home = () => {
  return (
    <>
      <div className="container-fluid container-lg">
        <div className="row">
          <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center ms-4 ms-sm-0 order-md-1 order-2">
            <h1>
              Grow Your Bussiness With
              <strong className="text-capitalize theme_color">
                &nbsp;Infinity Developer
              </strong>
            </h1>
            <h2>
              we are the team of intelligent and talented developer for making
              website
            </h2>
            <div className="my-3">
              <a href="#" className="btn btn-primary">
                Get Started
              </a>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-lg-end justify-content-center align-items-end  order-md-2 order-1">
            <img src={dev} alt="Coder-img" className="home_img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
