
import React from 'react'
import styled from 'styled-components'
import { Button1 } from '../Button'


const Container = styled.div`
    width: 100vw;
    min-height: 20vh;
    padding: 5rem calc((100vw - 1500px)/2);
    background: #F8F1EB;
    color: #000;
 
`
const Wrapper= styled.div`
    padding: 20px;
    margin-top: 1rem;
    @media screen and (max-width: 380px){
     display: none;
    }

`





const Hr = styled.hr`
    background-color: #DBBC9C;
    border: none;
    height: 1px;
    margin-top: 2rem;
    margin-bottom: 2rem;


  
`
const Card = styled.div`
    
    margin-bottom: -2rem;
    display: flex;
    justify-content: center;
   
`

const Selected = styled.div`
    
    display: flex;
    padding: 20px;
    flex-direction: column;
    
`

const SelectedTitle = styled.span`
 font-size: 30px;
 margin-bottom: 1rem;
 font-weight: 600;
`
const SelectedItem = styled.span`
 font-size: 20px;
 margin-left: 1rem;
 line-height: 2rem;
`

const Total = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`

const Amount = styled.div`
    font-size: 40px;
    margin: 5px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`



  

const cart = () => {
    return (
        <Container>
            <Wrapper>
                <Hr/>
                    <Card>
                        <Selected>
                                <SelectedTitle>YOU HAVE SELECTED:</SelectedTitle>
                                <SelectedItem>Vanilla Sponge</SelectedItem>
                                <SelectedItem>Vanilla Buttercream Frosting</SelectedItem>
                                <SelectedItem>Fresh Strawberries</SelectedItem>
                                <SelectedItem>Basic Lettering</SelectedItem>
                        </Selected>
                        <Total>
                                <Amount>P1,150.00</Amount>
                                <Button1>  CONFIRM AND ADD TO CART</Button1>
                        </Total>
                       
                    </Card>
                
            </Wrapper>
        </Container>
       
    )
}

export default cart
