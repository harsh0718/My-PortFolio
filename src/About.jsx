import React from "react";
import Ankit from "./Images/ankit.png";
import Harsh from "./Images/Harsh.png";
import Nitin from "./Images/Nitin.png";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
            <div className="card mx-auto" style={{ width: "18rem" }}>
              <img src={Ankit} className="card-img-top card_imgs" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Ankit Vishwakarma</h5>
                <h6 className="fw-bolder">Mastery : Graphic Designer</h6>
                <br />
                <p className="card-text">
                  Ankit is a graphic designer. He is a professional within the
                  graphic design and graphic arts industry who assembles
                  together images.
                </p>
                <div className="d-flex align-items-lg-center justify-content-around">
                  <a
                    href="https://www.facebook.com/profile.php?id=100010116459260"
                    className="fs-3"
                    target="_blank"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/ankit.avk/"
                    className="fs-3 text-danger"
                    target="_blank"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://github.com/harsh0718"
                    className="fs-3 text-dark"
                    target="_blank"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
            <div className="card mx-auto" style={{ width: "18rem" }}>
              <img src={Harsh} className="card-img-top card_imgs" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Harsh Wadhwani</h5>
                <h6 className="fw-bolder">Mastery : Fronted Developer</h6>
                <br />
                <p className="card-text">
                  Harsh is a full stack developer. He is an engineer who can
                  handle all the work of databases, servers, systems
                  engineering, and clients.
                </p>
                <div className="d-flex align-items-lg-center justify-content-around">
                  <a
                    href="https://www.facebook.com/harsh.wadhwani.1253/"
                    className="fs-3"
                    target="_blank"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/theharshwadhwani/"
                    className="fs-3 text-danger"
                    target="_blank"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://github.com/HarshW718"
                    className="fs-3 text-dark"
                    target="_blank"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
            <div className="card mx-auto" style={{ width: "18rem" }}>
              <img src={Nitin} className="card-img-top card_imgs" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Nitin Gulabani</h5>
                <h6 className="fw-bolder">Mastery : Backend Developer</h6>
                <br />
                <p className="card-text">
                  Nitin is a full stack developer. He is an engineer who can
                  handle all the work of databases, servers, systems
                  engineering, and clients.
                </p>
                <div className="d-flex align-items-lg-center justify-content-around">
                  <a
                    href="https://www.facebook.com/profile.php?id=100010116459260"
                    className="fs-3"
                    target="_blank"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a
                    href=" https://www.instagram.com/nitin_gulabani_/"
                    className="fs-3 text-danger"
                    target="_blank"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://github.com/NitinGulabani"
                    className="fs-3 text-dark"
                    target="_blank"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
