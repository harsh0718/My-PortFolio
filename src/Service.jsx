import React from "react";
import Ankit from "./Images/ankit.png";
import Harsh from "./Images/Harsh.png";
import Nitin from "./Images/Nitin.png";
import Mobile from "./Images/mobile.png";
import Graphic from "./Images/graphic.jpg";
import Web from "./Images/web.jpg";

const Service = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
            <div className="card mx-auto" style={{ width: "18rem" }}>
              <img src={Web} className="card-img-top card_imgs" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Web Designing</h5>

                <br />
                <p className="card-text">
                  Normally we always get confuse between website design and
                  development. Actually this both terms have their own
                  definitions. Now a days, just to go with functionalities part,
                  we have to focus on customer interaction part as well because
                  design is the
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
            <div className="card mx-auto" style={{ width: "18rem" }}>
              <img src={Graphic} className="card-img-top card_imgs" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Graphic Designing</h5>

                <br />
                <p className="card-text">
                  Infinite Devlopers are a full-service graphic design company
                  in India. We know what it takes to develop and provide the
                  best graphic design for you as we are dedicated to providing
                  excellent graphic design services for all clients all over the
                  globe.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
            <div className="card mx-auto" style={{ width: "18rem" }}>
              <img src={Mobile} className="card-img-top card_imgs" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Mobile Application Devlopment</h5>

                <br />
                <p className="card-text">
                  Mobile application development is the process of creating
                  software applications that run on a mobile device, and a
                  typical mobile application utilizes a network connection to
                  work with remote computing resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
