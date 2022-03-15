import React from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../asset/css/custom.css"

import { FaPhoneVolume,FaDoorOpen,FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BsYoutube, BsFillChatDotsFill, BsClockHistory} from "react-icons/bs";

const ContactPage = () => {
  

  // farr likhle arrow function create hobe
  // cl console.log er jonno cl 


  return (
    <>
      <Container className="p-3">
        <Row className="mt-5 ">
          <Col lg={4} md={6} sm={12} className="contactUs ">
            <Row className="contactBlog">
              <Col className="contact-icon" lg={3} md={3}>
                <FaDoorOpen className="contactIcon"></FaDoorOpen>
  
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
                <FaPhoneVolume className="contactIcon"></FaPhoneVolume> 
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
              <BsFillChatDotsFill className="contactIcon"></BsFillChatDotsFill>
              </Col>
              <Col className="contact-titles" lg={9}>
                <h3>Social Media</h3>
                <Link to="#">
                  <FaFacebook  className="social-contact"></FaFacebook>
                </Link>
                <Link to="#">
                  <BsYoutube className="social-contact"></BsYoutube>
                </Link>
                <Link to="#">
                  <FaLinkedinIn className="social-contact"></FaLinkedinIn>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5 ">
          <Col  lg={5} md={12} sm={12}>
          <h2 className="mt-3 contactTitle">Get In Touch</h2>
          <p>Suspendisse dolor risus, congue ac diam id, viverra facilisis dolor. Cras nec purus sagittis, varius tortor at, maximus erat. Sed at tellus id tellus lobortis dictum. Mauris dignissim, sapien arcu aliquam arcu, in viverra quam est ac ex. Cras sed lectus.</p>
           <Row className="contactBlogs">
              <Col className="contact-icon" lg={3}>
                <BsClockHistory className="contactIcon"  />
              </Col>
              <Col className="contact-titles" lg={9}>
                <h3 className="contactTitle">Open Hour</h3>
                <h5 className="contact-Des">
                  Sat - Thu At <br /> 10.00Am to 10.00PM
                </h5>
              </Col>
            </Row>
            <Row className="contactBlogs m-3">
              <Col className="contact-icon" lg={3}>
                <BsClockHistory className="contactIcon" />
              </Col>
              <Col className="contact-titles" lg={9}>
                <h3 className="contactTitle">Close Hour</h3>
                <h5 className="contact-Des">
                   Friday Office Close
                </h5>
              </Col>
            </Row>
          </Col>
         
          <Col className="form-area" lg={7} md={12} sm={12}>
           <Form className="contact-form">
               <Row>
                <Col className="form-col">
                  <div className="contactInput">
                    <input type="text"  required/>
                    <span className="texts">Full Name</span>
                    <span className="line"></span>
                  </div>
                </Col>
                <Col className="form-col">
                 <div className="contactInput">
                  <input type="text" required/>
                  <span className="texts">Email</span>
                  <span className="line"></span>
                 </div>
                </Col>
              </Row>

              <Row>
                <Col className="form-col">
                 <div className="contactInput">
                  <input type="text"  required/>
                  <span className="texts">Address</span>
                  <span className="line"></span>
                 </div>
                </Col>
                <Col className="form-col">
                <div className="contactInput">
                  <input type="text"  required/>
                  <span className="texts">Phone</span>
                  <span className="line"></span>
                </div>
                </Col>
              </Row>

              <Row>
                 <Col className="form-col">
                  <div className="contactInput textarea">
                   <textarea rows="4" cols="50" required ></textarea>
                   <span className="texts">Type your message here...</span>
                   <span className="line"></span>
                  </div>
                 </Col>

              </Row>

              <Row>
               <Col className="form-col">           
                <input className='contactBtn' type="submit" value="submit" />                    
                </Col>
              </Row>
            </Form>
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactPage;
