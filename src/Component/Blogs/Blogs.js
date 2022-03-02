import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import image1 from  "../../asset/image/b1.png";
import image2 from  "../../asset/image/b2.png";
import image3 from "../../asset/image/b1 (2).png";


const Blogs = () => {
  return (
    <>
      <Container className="blogSection">
      <div className="my-5 text-center  mx-auto">
        <h5 className='serviceTitle'>Latest Blog</h5>
        <h1 className='serviceDescription'>Stay Updated And New <br /> Post Our Blog</h1>
      </div>
          <Row ClassName="blog mt-3">
            <Col sm={12} md={6} lg={4} className="mb-3">
              <div className="blogBox">
                <img src={image1} alt="" />
                <h5 className="mt-2">Mobile Application</h5>
                <p className="mt-2">Adipisicing elit. Nesciunt expedita voluptatibus, voluptates asperiores.</p>
                <Link to="/blogsDetails" className="detailBtn"><span></span>Read More</Link>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4} className="mb-3">
              <div className="blogBox">
                <img src={image2} alt="" />
                <h5 className="mt-2">Web Development</h5>
                <p className="mt-2">Adipisicing elit. Nesciunt expedita voluptatibus, voluptates asperiores.</p>
               <Link to="/blogsDetails" className="detailBtn"><span></span>Read More</Link>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4} className="mb-3">
              <div className="blogBox">
                <img src={image3} alt="" />
                <h5 className="mt-2">Web Design</h5>
                <p className="mt-2">Adipisicing elit. Nesciunt expedita voluptatibus, voluptates asperiores.</p>
                <Link to="/blogsDetails" className="detailBtn"><span></span>Read More</Link>
              </div>
            </Col>
          </Row>
        </Container>
    </>
  );
};

export default Blogs;
