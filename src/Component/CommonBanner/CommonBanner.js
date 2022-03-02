import React, { Fragment } from 'react';
import { Col, Container, Row } from "react-bootstrap";

const CommonBanner = (props) => {
    return (
        <Fragment>
         <Container fluid className="topFixedBanner p-0">
          <div className="topFixedOverlay">
            <Container>
              <Row>
                <Col className="topFixedContent">
                <div className="topFixedTitle">
                  <h2>{props.pageTitle}</h2>
                </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
};

export default CommonBanner;