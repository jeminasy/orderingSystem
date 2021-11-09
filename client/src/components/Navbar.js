import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import logo from '../images/LOGO.PNG';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';



const Nav = styled.nav`
    height: 55px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((90vw - 900px)/2);
    z-index: 10;
    position: absolute;
    width: 100%;
    background: #F6EEE0;
    border-bottom:  4px solid #7a4850;;
    
`;

const Link = styled(NavLink)`
    color: #000;
    display: flex;
    align-items: center;
    padding: 0 3rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    font-size: 80%;
   
    &.active{
        color: #DF744A;
    }
    &:hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.3);
        color: #DF744A;
    }
`

const Logo = styled(NavLink)`
    background: url(${logo}) 0 45% no-repeat;
    border-radius: 4px;
    background-size: 100% 100%;
    padding: 20px 28px;
    color: #fff;
    border: none;
    outline: none;
    cursor:pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.5);
    }
`;

const MenuBars = styled(FaBars)`
    display:none;

    @media screen and (max-width:768px){
        display:block;
        cursor: pointer;
        position: absolute;
        top:-20px;
        right: 0;
        transform: translate(-150%, 125%);
        font-size:1.8rem;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    
    

    @media screen and (max-width:768px){
        display:none;
    }
`;


const Cart = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
    margin: 6px;
    
    
    
    &:hover{
        transition: all 0.2s ease-in-out;
        // transform: scale(1.3);
    }

    @media screen and (max-width:768px){
        display:none;
    }
`

const Navbar = () => {


    return (
        <Nav >
            <Logo to="/">
             
            </Logo>
            <MenuBars />
            <NavMenu>
                <Link to="/home" >Home</Link>
                <Link to="/about">About</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/customize">Customize</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contactUs">Contact Us</Link>
            </NavMenu>
            {/* <Cart to='/cart'>
            <AiOutlineShoppingCart size={25} color={"black"} />
            </Cart> */}
            <Link to = "/cart">
            <Cart>
            <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined color="action" />
            </Badge>
            </Cart>
            </Link>
            
        </Nav>
    )
}

export default Navbar
