import React,{useState} from 'react';
import { Row, Col, Container, Form } from "react-bootstrap";
import "../../asset/css/custom.css"


const FindPage = () => {
    const [selected, setSelected] = useState("Choose");

      //selected on changed function
  const handleSelect = (event) => {
    return setSelected(event.target.value);
  };
    return (
        <>
          {/* <Container  >
           <Row >
            <Col lg={1} md={1} sm={2}></Col>
            <Col lg={10} md={8} sm={8}  className="findBox" >
             <Form  className='fromSection'>
                 <input type="text" placeholder='country name'  className='findInput' required/>
                 <select className='selectItem'
                    value={selected}
                    
                    onChange={(event) => {
                      handleSelect(event);
                    }}
                  >
                    <option  className='findOption' value="Choose">Travel Type</option>
                    <option  className='findOption' value="vacation">Vacation Tour</option>
                    <option  className='findOption' value="city">City Tour</option>
                    <option  className='findOption' value="couple">Couple Tour</option>
                    <option  className='findOption' value="adventure">Adventure Tour</option>
                    <option  className='findOption' value="group">Group Tour</option>
                  </select>
                  <input className='findBtn' type="submit" value="Find Now" />                
                
               </Form>            
            </Col>
            <Col lg={1} md={1} sm={2} ></Col>
  
            </Row>
         </Container>   */}
        </>
    );
};

export default FindPage;


