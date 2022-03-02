import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faFacebook,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationArrow,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  return (
    <>
      <Container className="p-3">
        <Row className="mt-5 ">
          <Col lg={4} md={6} sm={12} className="contactUs ">
            <Row className="contactBlog">
              <Col className="contact-icon" lg={3} md={3}>
                <FontAwesomeIcon
                  className="contactIcon"
                  icon={faLocationArrow}
                />
              </Col>
              <Col className="contact-titles" lg={9}>
                <h3>Address</h3>
                <h5 className="contact-Des">
                  971-949 8th Ave 949 <br /> New York, NY
                </h5>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={6} sm={12} className="contactUs">
            <Row className="contactBlog">
              <Col className="contact-icon" lg={3} md={3}>
                <FontAwesomeIcon className="contactIcon" icon={faPhoneVolume} />
              </Col>
              <Col className="contact-titles" lg={9}>
                <h3>Email & Phone</h3>
                <h5 className="contact-Des">
                  {" "}
                  +8801456 7890 <br /> tourx@gmail.com
                </h5>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={6} sm={12} className="contactUs">
            <Row className="contactBlog">
              <Col className="contact-icon" lg={3} md={3}>
                <FontAwesomeIcon
                  className="contactIcon"
                  icon={faFacebookMessenger}
                />
              </Col>
              <Col className="contact-titles" lg={9}>
                <h3>Social Media</h3>
                <Link to="#">
                  <FontAwesomeIcon  className="social-contact" icon={faFacebook} />
                </Link>
                <Link to="#">
                  <FontAwesomeIcon  className="social-contact" icon={faYoutube} />
                </Link>
                <Link to="#">
                  <FontAwesomeIcon  className="social-contact" icon={faLinkedinIn} />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactPage;
