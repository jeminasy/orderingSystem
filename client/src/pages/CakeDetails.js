import React from 'react';
import styled from 'styled-components'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

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
margin-bottom: 500px;

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



const CakeDetails = () => {
    return (
<Section class="responsive">
<Container>
<Form class="CakeDeets">
    <br/>
    <center>
<DetailLink to='/cakedetailsform'>Cake Details</DetailLink> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
<CustInfoLink to='/customerinformationform'>Customer Information</CustInfoLink> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
<PayLink to='/paymentform'>Payment</PayLink>
</center>
    <br/>
    <br/>
    
  <Form.Group>
    <Form.Label>Dedication on Cake</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Enter up to a maximum of 20 characters..." />
  </Form.Group>
  <br/>
  <br/>
  <Form.Group>
    <Form.Label>Cake Design Description</Form.Label>
    <Form.Control as="textarea" rows={6} placeholder="Provide a brief description of how you want your selected design to look..."/>
  </Form.Group>
  <br/>
  <br/>
 
  <Form.Group>
    <Form.Label>Cake Design Sample</Form.Label>
    <Form.Text className="text-muted">
    &nbsp;  (Feel free to upload images that you want your cake to be inspired by.)
    </Form.Text>
    <Form.Control type="file" multiple />
  </Form.Group>
  <br/>
  <br/>
  <Form.Group>
    <Form.Label>Additional Remarks</Form.Label>
    <Form.Control as="textarea" rows={6} />
  </Form.Group>
  <br/>
  <br/>
  <Button href='/customerinformationform' className="button" variant="primary">Proceed to Customer Information</Button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  <Button href='/cart' className="button2" variant="link">Return to Cart</Button>
  
</Form>
</Container>
</Section>

)
}
export default CakeDetails;