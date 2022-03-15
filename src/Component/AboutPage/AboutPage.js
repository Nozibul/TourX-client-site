import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import About from "../../asset/image/about (2).jpg";
import About3 from "../../asset/image/about3.jpg";

import team1 from "../../asset/image/team/team1.jpg";
import team2 from "../../asset/image/team/team2.jpg";
import team3 from "../../asset/image/team/team3.jpg";

import { FaFacebook,FaTwitter,FaPhoneVolume,FaLinkedinIn } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import { Link } from "react-router-dom";
import Blogs from "../Blogs/Blogs";

const AboutPage = () => {
  return (
    <>
      <Container>
        <Row className="mt-5 g-5">
          <Col lg={1} md={12} sm={12}></Col>
          <Col lg={5} md={12} sm={12}>
            <img src={About} className="about-img" alt="about" />
          </Col>
          <Col className="px-4" lg={6} md={12} sm={12}>
            <h4 className="contactTitle">About Us</h4>
            <h1 className="serviceDescription mt-4">
              The Best Travel <br /> Agency Company.
            </h1>
            <p className="mt-3">
              Fusce aliquam luctus est, eget tincidunt velit scelerisque
              rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis
              mauris. Nunc nec ornare nisi, vel elementum est. Proin malesuada
              venenatis ex, eu fringilla justo scelerisque sit amet. Sed
              fringilla nec purus non venenatis. Aliquam nec turpis pharetra,
              bibendum lorem in, sollicitudin nibh. Nulla sit amet lacus diam.
            </p>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="pe-4" lg={6} md={12} sm={12}>
            <img src={About3} className="about-img " alt="about" />
          </Col>
          <Col className="ps-5" lg={6} md={12} sm={12}>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <div className="about-details">
                  <BsCheck2Circle className="about-icon"></BsCheck2Circle>
                  <h4>Donec Viverra Orci</h4>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="about-details">
                  <BsCheck2Circle className="about-icon"></BsCheck2Circle>
                  <h4>Donec Viverra Orci</h4>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="about-details">
                  <BsCheck2Circle className="about-icon"></BsCheck2Circle>
                  <h4>Donec Viverra Orci</h4>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="about-details">
                  <BsCheck2Circle className="about-icon"></BsCheck2Circle>
                  <h4>Donec Viverra Orci</h4>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="about-details">
                  <BsCheck2Circle className="about-icon"></BsCheck2Circle>
                  <h4>Donec Viverra Orci</h4>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="about-details">
                  <BsCheck2Circle className="about-icon"></BsCheck2Circle>
                  <h4>Donec Viverra Orci</h4>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 mb-5">
          <h4 className="contactTitle mt-5">Tour Guide</h4>
          <h1 className="serviceDescription mt-3">All Guide Are 5 Year <br /> Expart In Travel</h1>
        <Row className="mt-4">
          <Col lg={4} md={6} sm={12}>
            <div className="single-team">
              <div className="teamImg-area">
                <img className="team-img" src={team1} alt="profile" />
                 <div className="team-icon">
                   <ul className="team-list">
                      <li>
                        <Link to="#"><FaFacebook className="team-icons" /></Link>
                      </li>
                      <li>
                         <Link to="#"><FaTwitter className="team-icons" /></Link>
                      </li>
                      <li>
                          <Link to="#"><FaLinkedinIn className="team-icons" /></Link>
                      </li>
                      <li>
                        <Link to="#"><FaPhoneVolume className="team-icons" /></Link>
                      </li>
                  </ul>
                </div>
              </div>
              <div className="img-text">
                 <h4>Alex</h4>
                 <h5>Tour Guide</h5>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
           <div className="single-team">
              <div className="teamImg-area">
                <img className="team-img" src={team2} alt="profile" />
                 <div className="team-icon">
                   <ul className="team-list">
                      <li>
                        <Link to="#"><FaFacebook className="team-icons" /></Link>
                      </li>
                      <li>
                         <Link to="#"><FaTwitter className="team-icons" /></Link>
                      </li>
                      <li>
                          <Link to="#"><FaLinkedinIn className="team-icons" /></Link>
                      </li>
                      <li>
                        <Link to="#"><FaPhoneVolume className="team-icons" /></Link>
                      </li>
                  </ul>
                </div>
              </div>
              <div className="img-text">
                 <h4>Smith</h4>
                 <h5>Tour Guide</h5>
              </div>
            </div>
           </Col>

          <Col lg={4} md={6} sm={12}>
           <div className="single-team">
              <div className="teamImg-area">
                <img className="team-img" src={team3} alt="profile" />
                 <div className="team-icon">
                   <ul className="team-list">
                     <li>
                        <Link to="#"><FaFacebook className="team-icons"></FaFacebook></Link>
                      </li>
                      <li>
                         <Link to="#"><FaTwitter className="team-icons" /></Link>
                      </li>
                      <li>
                          <Link to="#"><FaLinkedinIn className="team-icons"/></Link>
                      </li>
                      <li>
                        <Link to="#"><FaPhoneVolume className="team-icons"/></Link>
                      </li>
                  </ul>
                </div>
              </div>
              <div className="img-text">
                 <h4>Sakura Chain</h4>
                 <h5>Tour Guide</h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
     <Blogs />
    </>
  );
};

export default AboutPage;
