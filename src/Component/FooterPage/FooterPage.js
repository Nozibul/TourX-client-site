import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook,FaTwitter,FaPhoneVolume,FaLinkedinIn,FaSms,FaLocationArrow } from "react-icons/fa";
import { Link } from 'react-router-dom';
import footer1 from '../../asset/image/logo.png' ;
import payment1 from '../../asset/image/payment/download.png'
import payment2 from '../../asset/image/payment/download (1).png'
import payment3 from '../../asset/image/payment/download (2).png'
import payment4 from '../../asset/image/payment/download (3).png'
import payment5 from '../../asset/image/payment/download (4).png'


const FooterPage = () => {
    return (
        <div className='footer-bg'>
            
            <Container>
                <Row>
                    <Col lg={3} md={6} sm={12}>
                      <img className='mt-4' src={footer1} alt="" />
                      <p className='footerDescription text'>
                      Your access to this site was blocked by Wordfence, who protects sites from malicious activity.
                      </p>
                      <h3 className='footerTitle '>Follow Us:</h3>
                      <div class="footerSocial mt-3">   
                        <Link to="#"><FaFacebook /></Link>
                        <Link to="#"><FaTwitter /></Link>
                        <Link to="#"><FaLinkedinIn /></Link>
                        <Link to="#"><FaPhoneVolume /></Link>            
                     </div>
                    </Col>
                  
                    <Col lg={3} md={6} sm={12}>
                      <h3 className='footerTitle text-center ms-3'>Contact Us</h3>

                       <div className='footerContact mt-5 '>
                        <p><FaPhoneVolume className='footerIcon me-3'></FaPhoneVolume> 
                       
                         </p>
                           <Link to="#">++88019555554488<br />++88098755444555</Link>
                       </div>

                       <div className='footerContact '>
                          <p><FaSms className='footerIcon me-3'></FaSms> </p>
                           <Link to="#">                          
                            tourx@gmail.com <br />
                            support@gmail.com
                           </Link>
                       </div>

                       <div className='footerContact'>
                       <p><FaLocationArrow className='footerIcon me-3'></FaLocationArrow> </p>

                           <Link to="#">                             
                                2752 Willison Street <br />
                                Eagan, United State.
                           </Link>
                       </div>
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                    <h3 className='footerTitle text-center ms-2'>Support</h3>
                      <div className='support'>
                        <Link className='footerSupport mt-5' to="#">Contact Us</Link>
                        <Link className='footerSupport' to="#">Guide</Link>
                        <Link className='footerSupport' to="#">Packages</Link>
                        <Link className='footerSupport' to="#">Our Blog</Link>
                        <Link className='footerSupport' to="#">Gallery</Link>
                      </div>
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                    <h3 className='footerTitle text-center mt-5'>We Accepts:</h3>
                      <div className='footerPayment mt-5'>
                         <Row className='mb-4'>
                             <Col lg={6} md={6} sm={6}>
                                 <img src={payment1} alt="" />
                             </Col>
                             <Col lg={6} md={6} sm={6} mt-2>
                               <img src={payment2} alt="" />
                             </Col>
                         </Row>  
                         <Row className='mb-4'>
                             <Col lg={6} md={6} sm={6}>
                              <img src={payment3} alt="" />
                             </Col>
                             <Col lg={6} md={6} sm={6}>
                              <img src={payment4} alt="" />
                             </Col>
                         </Row> 
                         <Row className='mb-4'>  
                             <Col lg={6} md={6} sm={6}>
                              <img src={payment5} alt="" />
                             </Col>
                             <Col lg={6} md={6} sm={6}>
                              <img src={payment1} alt="" />
                             </Col>
                         </Row>
                      </div>
                    
                    </Col>
                    <hr className="text-white mt-4" />
                </Row>
                <div className='copyright'>
                    <small className='text-white'> Copyright&copy; 2022 TourX | Developed By Nozibul Islam</small>
                </div>
            </Container>

        </div>
    );
};

export default FooterPage;