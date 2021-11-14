
import React from 'react';
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { Col, Row} from "react-bootstrap";
import grab from "../images/grab.png"
import lalamove from "../images/lalamove.png"
const Section = styled.section`
width: 100vw;
min-height: 100%;
padding: 4rem 0rem;
background: #F8F1EB;
p{
    font-family: 'Montserrat';
    font-size:30px;
    text-align: center;
    margin: 10px;
    margin-left: 25%;
    margin-right: 25%
}
.responsive{
        
    width: 100%;
    max-width: 400px;
    height: auto;
}

`;
const Container = styled.div`
padding: 3rem calc((100vw - 1000px)/2);
display: flex;
justify-content: center;
margin-bottom: 900px;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}
.button {
    font-size: 1rem;
    padding:  0.5rem 2rem;
    border: none;
    background: #B2784A;
    color: #fff;
    transition: 0.2 ease-out;
    border-radius: 1px;
  }

.button2 {
    font-size: 1rem;
    border: none;
    color: black;
    transition: 0.2 ease-out;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;

  }
  
.header {
    padding-left: 170px;
} 
}
`;
// HEADER PADDING LEFT NOT WORKING

const DetailLink = styled(NavLink)`
    color:#000;
    text-decoration: none;
    margin-top: 500px;
  

    &.active{
        font-weight: bold;
    } 

&:hover{
    color: #DF744A;
    transition: 0.3s ease-out;
}
`;

const CustInfoLink = styled(NavLink)`
    color:#000;
    text-decoration: none;
    margin-top: 500px;
  

    &.active{
        font-weight: bold;
    } 

&:hover{
    color: #DF744A;
    transition: 0.3s ease-out;
}
`;

const PayLink = styled(NavLink)`
    color:#000;
    text-decoration: none;
    margin-top: 500px;
  

    &.active{
        font-weight: bold;
    } 

&:hover{
    color: #DF744A;
    transition: 0.3s ease-out;
}
`;



export default function CustomerInfo() {
return (
    <Section className="responsive">
<Container>
  <div style={{ display: 'block',
        width: 800,
        padding: 10}}>
    <br/>
    <center>
        <DetailLink to='/cakedetailsform'>Cake Details</DetailLink> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <CustInfoLink to='/customerinformationform'>Customer Information</CustInfoLink> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <PayLink to='/paymentform'>Payment</PayLink>
    </center>
    <br/>
    <br/>
  <h4 className="header">Contact Information</h4>
    <hr/>
  <Form>
  <Form.Group>
    <Form.Label>Full Name:</Form.Label>
    <Form.Control type="text"
            placeholder="Enter your full name" />
    </Form.Group>
        <br/>
        <Form.Group>
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="tel" placeholder="Enter your Phone Number" />
    </Form.Group>
        <br/>
    <Form.Group>
    <Form.Label>Email Address:</Form.Label>
    <Form.Control type="email"
            placeholder="Enter your your email address" />
    </Form.Group>
        <br/>
        <Form.Group>
    <Form.Label>Facebook Link</Form.Label>
    <Form.Control type="url" placeholder="Enter your Facebook Account Link" />
    </Form.Group>
        <br/>
        <Form.Group>
    <Form.Label>Instagram Link</Form.Label>
    <Form.Control type="url" placeholder="Enter your Instagram Account Link" />
    </Form.Group>
        <br/>
        <br/>
        <h4 className="header">Delivery Method</h4>
    <hr/>
    <fieldset>
    <Form.Group>
        <Form.Check
          type="radio"
          label={<img src = {grab} style={{height:'5rem',width:'auto'}} alt="grab logo"/>}
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        /> 
        <br/>
        <Form.Check
          type="radio"
          label={<img src = {lalamove} style={{height:'5rem',width:'auto'}}  alt="lalamove logo"/>}
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </Form.Group>
      </fieldset>
      <br/>
        <br/>
        <h4 className="header">Shipping Address</h4>
    <hr/>
  <Form.Group className="mb-3" controlId="formGridAddress1">
  <Form.Label>Street</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor, 1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Barangay</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Region</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip Code</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <br/>
  <br/>
  <Button href='/paymentform' className="button" variant="primary">Proceed to Payment</Button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  <Button href='/cakedetailsform' className="button2" variant="link">Return to Cake Details</Button>
  </Form>
  </div>
    </Container>
</Section>

);
}