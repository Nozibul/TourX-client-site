import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../asset/css/custom.css";
import { FaFacebook,FaTwitter,FaPhoneVolume,FaLinkedinIn } from "react-icons/fa";

import slide1 from "../../asset/image/b1 (2).png";
import slide2 from "../../asset/image/b1.png";
import slide3 from "../../asset/image/b2.png";

const Banner = () => {

  return (
    <>
        <Carousel
          style={{ zIndex: "1" }}
          fade
          interval={6000}
          indicators={false}
          controls={false}
          pause="false"
        >
          <Carousel.Item>
            <img
              className="w-100 d-inline-block"
              height={650}
              src={slide1}
              alt="First slide"
            />
            <Carousel.Caption className="text-start">
              <Row className="align-items-center slide">
                <Col lg={6} md={12} sm={12}>
                  <h1 className="sliderTitle">
                    Amazing Tour <br /> In Indonesia
                  </h1>
                  <p className="sliderDescription"> 8 Days, 9 Night Tour </p>

                  <div className="sliderBtn ">
                    <Link to="#">
                      <span></span>More Info
                    </Link>
                  </div>
                  <div class="social-link">
                  <Link to="#">
                      <FaFacebook />
                    </Link>
                    <Link to="#">
                      <FaTwitter />
                    </Link>
                    <Link to="#">
                    <FaLinkedinIn/>
                    </Link>
                    <Link to="#">
                      <FaPhoneVolume />
                    </Link>
                  </div>
                </Col>
                <Col lg={6} md={12} sm={12}></Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="w-100 d-inline-block"
              height={650}
              src={slide2}
              alt="First slide"
            />
            <Carousel.Caption className="text-start">
              <Row className="align-items-center slide">
                <Col lg={6} md={12} sm={12}>
                  <h1 className="sliderTitle">
                    Amazing Tour <br /> In Spain
                  </h1>
                  <p className="sliderDescription"> 6 Days, 7 Night Tour </p>

                  <div className="sliderBtn ">
                    <Link to="#">
                      <span></span>More Info
                    </Link>
                  </div>
                  <div class="social-link">
                  <Link to="#">
                      <FaFacebook />
                    </Link>
                    <Link to="#">
                      <FaTwitter />
                    </Link>
                    <Link to="#">
                    <FaLinkedinIn/>
                    </Link>
                    <Link to="#">
                      <FaPhoneVolume />
                    </Link>
                  </div>
                </Col>
                <Col lg={6} md={12} sm={12}></Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="w-100 d-inline-block"
              height={650}
              src={slide3}
              alt="First slide"
            />
            <Carousel.Caption className="text-start">
              <Row className="align-items-center slide">
                <Col lg={6} md={12} sm={12}>
                  <h1 className="sliderTitle">
                    Amazing Tour <br /> In Australia
                  </h1>
                  <p className="sliderDescription"> 7 Days, 8 Night Tour </p>

                  <div className="sliderBtn ">
                    <Link to="#">
                      <span></span>More Info
                    </Link>
                  </div>
                  <div class="social-link">
                    <Link to="#">
                      <FaFacebook />
                    </Link>
                    <Link to="#">
                      <FaTwitter />
                    </Link>
                    <Link to="#">
                    <FaLinkedinIn/>
                    </Link>
                    <Link to="#">
                      <FaPhoneVolume />
                    </Link>
                  </div>
                </Col>
                <Col lg={6} md={12} sm={12}></Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </>
  );
};

export default Banner;
