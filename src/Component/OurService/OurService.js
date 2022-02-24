import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import service1 from  "../../asset/image/b1 (2).png"
import service2 from  "../../asset/image/b1.png"
import service3 from  "../../asset/image/b2.png";

const OurService = () => {
    return (
    
            <div className="bg-service ">              
                 <Container className="pt-5 pb-4  ">
                   
                    <Row>
                    <h2 className='services-head'>Our <small>Services</small></h2>
                        <Col lg={4} md={6} sm={12} className="p-3">
                            <div className='box text-center'>
                                <div className='ser-img'>
                                  <img className="services-img" src={service1} alt="" />

                                </div>
                               <h3 className="services-title">Tour and Travel</h3>
                               <p>
                                   I am development static and dynamic websites as per your requirements,"web worlds's home"
                               </p>
                            </div>
                        </Col>
                        <Col  lg={4} md={6} sm={12} className="p-3">
                          <div className='box text-center'>
                          <div className='ser-img'>
                                  <img className="services-img" src={service2} alt="" />

                                </div>
                           <h3 className="services-title">Our Guides</h3>
                            <p>
                               I design modern user interface and other graphical components for your business and institutions.
                            </p>
                          </div>
                        </Col>
                        <Col  lg={4} md={6} sm={12} className="p-3">
                          <div className='box text-center'>
                          <div className='ser-img'>
                                  <img className="services-img" src={service3} alt="" />

                                </div>
                           <h3 className="services-title">Extra Feature</h3>
                           <p>
                               I build native and cross platform mobile app for your business and institution as your requirements.
                           </p>
                          </div>
                        </Col>
                    </Row>
                </Container>
             </div> 
    );
};

export default OurService;