import React from 'react'

import styled from 'styled-components'
import Menu from '../components/Shop/Menu';
import { MenuData } from '../data/MenuData';
import { MenuData2 } from '../data/MenuData';
import image from '../images/welcome.jpeg'



function Shop () {
    return (
        <>
            <Banner />
            <Menu heading = 'Cakes' data ={MenuData}/>
            <Menu heading = 'Pastries and Cookies' data ={MenuData2}/>
            
        </>
      )
}

export default Shop;

const BannerContainer = styled.div`
    background: url(${image});
    height: 100vh;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    background-attachment: fixed;
    justify-content: center;
    align-items: center;
    color: #000;
    text-align: center;
    padding: 0 1rem;
    border-bottom: 4px solid #7a4850;
    border-top: 4px solid #7a4850;
   
    
h2{
    font-size: clamp(3rem, 5vw, 5rem);
    font-weight: 500;
    font-family: 'Abril Fatface';
    
    color: #59371C;
}
`



const Banner = () => {
    return (
        <BannerContainer>
            
            <h2>Menu</h2>
            
            
        </BannerContainer>
    )
}