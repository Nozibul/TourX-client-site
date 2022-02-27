import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from  "../../asset/image/b2.png";

const SingleService = () => {
    return (
        <>
        
      <Container className="pt-5 pb-4">
      <div className="my-5 text-center  mx-auto">
        <h5 className='serviceTitle'>Choose Your Package</h5>
        <h1 className='serviceDescription'>Select Your Best Package For <br /> Your Travel</h1>
      </div>
        <Row xs={1} md={3} lg={3} className="g-5  mt-5">
          {/* {service.map((service, index) => ( */}
            <Col lg={4} md={6} sm={12} className="service1">
              <Card className="box text-center">
                <Card.Img
                  className="services-img"
                  variant="top"
                  src={image1}
                />
                <Card.Body>
                  <div className="service-meta">
                    <Card.Text className='text1'>
                        <h5>$180/Per Person</h5>
                    </Card.Text> 
                    <Card.Text>
                        <h5>5 Days/6 Night</h5>
                    </Card.Text>
                  </div>
                
                  <Card.Title className="services-title">
                     <h3>Lake Garda, Italy</h3>
                  </Card.Title>
                  {/* <p> {service.description.slice(0, 85)}</p> */}            
               
                  <div className="service-meta text2">
                    <Card.Text className="text1">
                        <h5>rating</h5>
                    </Card.Text>
                    <Card.Text>
                        <h5>icon</h5>
                    </Card.Text>
                  </div>
                

                    {/* <Link className="card-btn" to={`/order/${service._id}`}> */}
                    <Link className="card-btn" to="#">
                      More Info
                    </Link>
          
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="service1">
              <Card className="box text-center">
                <Card.Img
                  className="services-img"
                  variant="top"
                  src={image1}
                />
                <Card.Body>
                  <div className="service-meta">
                    <Card.Text className='text1'>
                        <h5>$180/Per Person</h5>
                    </Card.Text> 
                    <Card.Text>
                        <h5>5 Days/6 Night</h5>
                    </Card.Text>
                  </div>
                
                  <Card.Title className="services-title">
                     <h3>Lake Garda, Italy</h3>
                  </Card.Title>
                  {/* <p> {service.description.slice(0, 85)}</p> */}            
               
                  <div className="service-meta text2">
                    <Card.Text className="text1">
                        <h5>rating</h5>
                    </Card.Text>
                    <Card.Text>
                        <h5>icon</h5>
                    </Card.Text>
                  </div>
                

                    {/* <Link className="card-btn" to={`/order/${service._id}`}> */}
                    <Link className="card-btn" to="#">
                      More Info
                    </Link>
          
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="service1">
              <Card className="box text-center">
                <Card.Img
                  className="services-img"
                  variant="top"
                  src={image1}
                />
                <Card.Body>
                  <div className="service-meta">
                    <Card.Text className='text1'>
                        <h5>$180/Per Person</h5>
                    </Card.Text> 
                    <Card.Text>
                        <h5>5 Days/6 Night</h5>
                    </Card.Text>
                  </div>
                
                  <Card.Title className="services-title">
                     <h3>Lake Garda, Italy</h3>
                  </Card.Title>
                  {/* <p> {service.description.slice(0, 85)}</p> */}            
               
                  <div className="service-meta text2">
                    <Card.Text className="text1">
                        <h5>rating</h5>
                    </Card.Text>
                    <Card.Text>
                        <h5>icon</h5>
                    </Card.Text>
                  </div>
                

                    {/* <Link className="card-btn" to={`/order/${service._id}`}> */}
                    <Link className="card-btn" to="#">
                      More Info
                    </Link>
          
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="service1">
              <Card className="box text-center">
                <Card.Img
                  className="services-img"
                  variant="top"
                  src={image1}
                />
                <Card.Body>
                  <div className="service-meta">
                    <Card.Text className='text1'>
                        <h5>$180/Per Person</h5>
                    </Card.Text> 
                    <Card.Text>
                        <h5>5 Days/6 Night</h5>
                    </Card.Text>
                  </div>
                
                  <Card.Title className="services-title">
                     <h3>Lake Garda, Italy</h3>
                  </Card.Title>
                  {/* <p> {service.description.slice(0, 85)}</p> */}            
               
                  <div className="service-meta text2">
                    <Card.Text className="text1">
                        <h5>rating</h5>
                    </Card.Text>
                    <Card.Text>
                        <h5>icon</h5>
                    </Card.Text>
                  </div>
                

                    {/* <Link className="card-btn" to={`/order/${service._id}`}> */}
                    <Link className="card-btn" to="#">
                      More Info
                    </Link>
          
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="service1">
              <Card className="box text-center">
                <Card.Img
                  className="services-img"
                  variant="top"
                  src={image1}
                />
                <Card.Body>
                  <div className="service-meta">
                    <Card.Text className='text1'>
                        <h5>$180/Per Person</h5>
                    </Card.Text> 
                    <Card.Text>
                        <h5>5 Days/6 Night</h5>
                    </Card.Text>
                  </div>
                
                  <Card.Title className="services-title">
                     <h3>Lake Garda, Italy</h3>
                  </Card.Title>
                  {/* <p> {service.description.slice(0, 85)}</p> */}            
               
                  <div className="service-meta text2">
                    <Card.Text className="text1">
                        <h5>rating</h5>
                    </Card.Text>
                    <Card.Text>
                        <h5>icon</h5>
                    </Card.Text>
                  </div>
                

                    {/* <Link className="card-btn" to={`/order/${service._id}`}> */}
                    <Link className="card-btn" to="#">
                      More Info
                    </Link>
          
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="service1">
              <Card className="box text-center">
                <Card.Img
                  className="services-img"
                  variant="top"
                  src={image1}
                />
                <Card.Body>
                  <div className="service-meta">
                    <Card.Text className='text1'>
                        <h5>$180/Per Person</h5>
                    </Card.Text> 
                    <Card.Text>
                        <h5>5 Days/6 Night</h5>
                    </Card.Text>
                  </div>
                
                  <Card.Title className="services-title">
                     <h3>Lake Garda, Italy</h3>
                  </Card.Title>
                  {/* <p> {service.description.slice(0, 85)}</p> */}            
               
                  <div className="service-meta text2">
                    <Card.Text className="text1">
                        <h5>rating</h5>
                    </Card.Text>
                    <Card.Text>
                        <h5>icon</h5>
                    </Card.Text>
                  </div>
                

                    {/* <Link className="card-btn" to={`/order/${service._id}`}> */}
                    <Link className="card-btn" to="#">
                      More Info
                    </Link>
          
                </Card.Body>
              </Card>
            </Col>
          {/* ) */}
          {/* )} */}
        </Row>
       
      </Container>
   
            
        </>
    );
};

export default SingleService;