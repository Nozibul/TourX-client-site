import React from "react";
import { Container } from "react-bootstrap";
import review1 from '../../asset/image/profile.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const UserReview = () => {

  return (
    <>
      <Container >
          <div className="swiper mySwiper">
            <div className="swiper-wrapper content">
              <div className="swiper-slide review-card">
                  <div className="card-content">
                      <div className="card-image">
                          <img src={review1} alt="" />
                      </div>
                      <div className="card-icon">
                        <Link className="media-icon" to="#"><FontAwesomeIcon icon={ faFacebook } /></Link>
                        <Link className="media-icon" to="#"><FontAwesomeIcon icon={ faYoutube } /></Link>
                        <Link className="media-icon" to="#"><FontAwesomeIcon icon={ faLinkedinIn } /></Link>
                      </div>
                      <div className="user-name">
                         <h3 className="names">Nozibul</h3>
                         <p className="reviews">
                            This is awesome tour and 
                         </p>
                      </div>
                      {/* <div className="user-comment">
                          
                      </div> */}
                  </div>
              </div>
          </div>
         </div>  
          {/* </Row> */}
      </Container>
    </>
  );
};

export default UserReview;
