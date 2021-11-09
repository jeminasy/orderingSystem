import React from 'react'
import styled from 'styled-components'
import image from '../images/OURCAKES.jpeg'
import Custom from '../components/Customize/Custom';
import { CakeBase, FrostingData, AddOnsData, DesignData } from '../data/CustomData';
import Selected from '../components/Customize/Selected';
function Customize () {
    return (
        <>
          
          <Banner />
            <Custom heading = '1. Pick your cake base:' data ={CakeBase}/>
            <Custom heading = '2. Select frosting:' data ={FrostingData}/> 
            <Custom heading = '3. Any add-ons?' data ={AddOnsData}/> 
            <Custom heading = '4. Last but not least, choose a design:' data ={DesignData}/> 
            <Selected />
        </>
      )
}

export default Customize;

const BannerContainer = styled.div`
    background: url(${image});
    height: 100vh;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
    text-align: center;
    padding: 0 1rem;
    border-bottom: 4px solid #7a4850;
    border-top: 4px solid #7a4850;
   
    
h2{
    margin-top: 3rem;
    font-size: clamp(3rem, 5vw, 5rem);
    font-weight: 500;
    font-family: 'Abril Fatface';
 
    color: #59371C;
}

p{
    margin-top: 3rem; 
      font-size:clamp(1rem, 3vw, 2rem);
      font-weight: 100;
    color: #59371C;
    
  }
`


const Banner = () => {
    return (
        <BannerContainer>
            
            <h2>Customize</h2>
            <p>Please note: all custom cakes come with a free candle, along with your dedication (max 20 characters) </p>
            
            
        </BannerContainer>
    )
}