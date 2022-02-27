import React from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

const NewsLetter = () => {
  return (
    <>
      <div className="p-5 mt-5 newsletter">
        <h1 className="newsTitle">
          Subscribe To Our Newsletter <br /> For Latest Update
        </h1>
        <Form>
         <InputGroup className="newsForm">
            <FormControl
             className="newsInput"
             type="text"
             placeholder="Enter Your Email"
             required
            />
            <Button  className="newsBtn">
              SUBSCRIBE
            </Button>
          </InputGroup>
        </Form>
      </div>
    </>
  );
};

export default NewsLetter;
