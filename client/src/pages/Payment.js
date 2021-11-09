import React from 'react';
import styled from 'styled-components'
import Table from 'react-bootstrap/Table'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';


const Section = styled.section`
width: 100vw;
min-height: 100%;
padding: 4rem 0rem;
background: #F8F1EB;
p{
    font-family: 'Montserrat';
    font-size:12px;
}
.responsive{
        
    width: 100%;
    max-width: 400px;
    height: auto;
}

`;

const Container = styled.div`
padding: 3rem calc((100vw - 900px)/2);
display: flex;
flex-direction: column;
margin-bottom: 100px;


@media screen and (max-width: 768px){
    
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
}
`;

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

export default function Payment() {
    return (
<Section class="responsive">
  
<Container>
<br/>
    <center>
<DetailLink to='/cakedetailsform'>Cake Details</DetailLink> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
<CustInfoLink to='/customerinformationform'>Customer Information</CustInfoLink> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
<PayLink to='/paymentform'>Payment</PayLink>
</center>
    <br/>
    <br/>
<div>
  <Table responsive="md" style={{ background : "white"}}>
    <tbody>
      <tr>
        <th>Orders</th>
        <td>1 Minimalist Cake</td>
        <td>2000</td>
      </tr>
      <tr>
        <th>Shipping Fee</th>
        <td>Tondo, Manila</td>
        <td>200</td>
      </tr>
      <tr>
        <th colSpan="2">Total</th>
        <td>2200</td>
      </tr>
    </tbody>
  </Table>
</div>
<br/>
<div>
  <h4>Payment Method</h4>
    <hr/>
    <br/>
    <p>Downpayment is needed to accept your orders.</p>
<center>
  <Row>
  &nbsp; <Col md={4}>GCash</Col>
  </Row>
</center>
  <Row>
    <Col md={{ span: 3, offset: 3 }}>09178570190</Col>
  </Row>
  <Row>
    <Col md={{ span: 3, offset: 3 }}>Celine Angela Dela Cruz</Col>
  </Row>
  <br/>
  <center>
  <Row>
    <Col md={4}>BDO</Col>
  </Row>
</center>
  <Row>
    <Col md={{ span: 3, offset: 3 }}>8888 8888 8888 8888</Col>
  </Row>
  <Row>
    <Col md={{ span: 3, offset: 3 }}>Celine Angela Dela Cruz</Col>
  </Row>
  <br/>
  <br/>
  <br/>
  <br/>
  <h4>Proof of Downpayment</h4>
    <hr/>
    <br/>
    <p>Please upload a photo or screenshot of your proof of downpayment.</p>
    <Form>
    <Form.Control type="file" multiple />
    </Form>
  <br/>
  <br/>
  <br/>
  <br/>
  <Button href='/success' className="button" variant="primary">Place Order</Button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  <Button href='/customerinformationform' className="button2" variant="link">Return to Information</Button>
</div>
</Container>
</Section>
);
}