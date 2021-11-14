import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { Button2 } from '../Button';
import axios from 'axios';
import './style.css';


const MenuContainer =  styled.div`
width: 100vw;
min-height: 80vh;
padding: 5rem calc((100vw - 1500px)/2);
background: #F8F1EB;
color: #000;
margin-bottom: -5rem;

`

const MenuWrapper= styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    margin: 0 auto;
`

const ProductCard = styled.div`
margin:0 2rem;
width: 300px;
`
const ProductImg = styled.img`
height: 270px;
min-width: 300px;
max-width: 100%;
box-shadow: 8px 8px #DCC4AC;
margin-top: 2rem;
`
const MenuHeading = styled.h1`
    font-size: clamp(4rem, 3vw, 5rem);
    text-align: left;
    margin-bottom: -1rem;
    color:#59371C;
    font-family:'Cormorant Garamond', serif; ;
    font-weight: 100;
`

const ProductTitle = styled.h2`
font-weight: 600;
font-size: 1.5rem;

`

const ProductInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem;
text-align: center;
`

const ProductPrice = styled.p`
margin-bottom: 0rem;
margin-top: 3rem;
font-size: 2rem;
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

const CustomCake = () => {

    //Base
    const [bases, setBases] = useState([]);

    useEffect(() => {
        fetchBases();
    }, []);

    const fetchBases = () => {
        axios
            .get('http://localhost:5000/custom/base')
            .then((res) => {
                console.log(res);
                setBases(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    var a = 0; //base price
    var baseId = "";
    var baseName ="";

    var b = 0; //frosting price
    var frostingId = "";
    var frostingName ="";
    
    var c = 0; //addon price
    var addonId ="";
    var addonName = "";

    var designId ="";
    var designName = "";

    var amount = 0;

    function calculateAmount() {
        var basePrice = parseInt(a);
        var frostingPrice = parseInt(b);
        var addonPrice = parseInt(c);
        amount = basePrice + frostingPrice + addonPrice;
        document.getElementById('amount').innerHTML = "P" + amount;
    }

    function chooseBase(id, name, price) {
        baseId = id;
        baseName = name;
        a = price;
        console.log("Base: " + baseName + ", " + baseId);
        document.getElementById('base').innerHTML = "Base: " + baseName;
        calculateAmount();
    }
    //Frosting
    const [frostings, setFrostings] = useState([]);

    useEffect(() => {
        fetchFrostings();
    }, []);

    const fetchFrostings = () => {
        axios
            .get('http://localhost:5000/custom/frosting')
            .then((res) => {
                console.log(res);
                setFrostings(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    function chooseFrosting(id, name, price) {
        frostingId = id;
        frostingName = name;
        b = price;
        console.log("Frosting: " + frostingName + ", " + frostingId);
        document.getElementById('frosting').innerHTML = "Frosting: " + frostingName;
        calculateAmount();
    }

    //Addon
    const [addons, setAddons] = useState([]);

    useEffect(() => {
        fetchAddons();
    }, []);

    const fetchAddons = () => {
        axios
            .get('http://localhost:5000/custom/addon')
            .then((res) => {
                console.log(res);
                setAddons(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    function chooseAddon(id, name, price) {
        addonId = id;
        addonName = name;
        c = price;
        console.log("Addon: " + addonName + ", " + addonId);
        document.getElementById('addon').innerHTML = "Add-on: " + addonName;
        calculateAmount();
    }

    //Design
    const [designs, setDesigns] = useState([]);

    useEffect(() => {
        fetchDesigns();
    }, []);

    const fetchDesigns = () => {
        axios
            .get('http://localhost:5000/custom/design')
            .then((res) => {
                console.log(res);
                setDesigns(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    function chooseDesign(id, name) {
        designId = id;
        designName = name;
        console.log("Design: " + designName + ", " + designId);
        document.getElementById('design').innerHTML = "Design: " + designName;
    }

    return (
        <MenuContainer>
            <MenuHeading>1. Pick your cake base:</MenuHeading>
            <MenuWrapper>
                {bases.map((base) => (
                    <ProductCard key={base._id}>
                        <ProductImg src={base.img} alt={base.img}/>
                            <ProductInfo>
                                <ProductTitle>{base.name}</ProductTitle>
                                <ProductPrice>P{base.price}</ProductPrice>
                                <Button2 onClick={() => chooseBase(`${base._id}`, `${base.name}`, `${base.price}`)}>Select</Button2>
                                {/* <button onClick={() => chooseBase(`${base._id}`)}>Select</button> */}
                            </ProductInfo>
                    </ProductCard>
                ))}
            </MenuWrapper>

            <MenuHeading>2. Select frosting:</MenuHeading>
            <MenuWrapper>
                {frostings.map((frosting) => (
                    <ProductCard key={frosting._id}>
                        <ProductImg src={frosting.img} alt={frosting.img}/>
                            <ProductInfo>
                                <ProductTitle>{frosting.name}</ProductTitle>
                                <ProductPrice>P{frosting.price}</ProductPrice>
                                <Button2 onClick={() => chooseFrosting(`${frosting._id}`, `${frosting.name}`, `${frosting.price}`)}>Select</Button2>
                                {/* <button onClick={() => chooseBase(`${base._id}`)}>Select</button> */}
                            </ProductInfo>
                    </ProductCard>
                ))}
            </MenuWrapper>

            <MenuHeading>3. Any add-ons?</MenuHeading>
            <MenuWrapper>
                {addons.map((addon) => (
                    <ProductCard key={addon._id}>
                        <ProductImg src={addon.img} alt={addon.img}/>
                            <ProductInfo>
                                <ProductTitle>{addon.name}</ProductTitle>
                                <ProductPrice>P{addon.price}</ProductPrice>
                                <Button2 onClick={() => chooseAddon(`${addon._id}`, `${addon.name}`, `${addon.price}`)}>Select</Button2>
                                {/* <button onClick={() => chooseBase(`${base._id}`)}>Select</button> */}
                            </ProductInfo>
                    </ProductCard>
                ))}
            </MenuWrapper>

            <MenuHeading>4. Last but not least, choose a design:</MenuHeading>
            <MenuWrapper>
                {designs.map((design) => (
                    <ProductCard key={design._id}>
                        <ProductImg src={design.img} alt={design.img}/>
                            <ProductInfo>
                                <ProductTitle>{design.name}</ProductTitle>
                                <Button2 onClick={() => chooseDesign(`${design._id}`, `${design.name}`)}>Select</Button2>
                                {/* <button onClick={() => chooseBase(`${base._id}`)}>Select</button> */}
                            </ProductInfo>
                    </ProductCard>
                ))}
            </MenuWrapper>

            <Wrapper>
                <Hr/>
                    <Card>
                        <Selected>
                                <SelectedTitle>YOU HAVE SELECTED:</SelectedTitle>
                                <SelectedItem id='base'>Base: <span className="empty">none</span></SelectedItem>
                                <SelectedItem id='frosting'>Frosting: <span className="empty">none</span></SelectedItem>
                                <SelectedItem id='addon'>Add-on: <span className="empty">none</span></SelectedItem>
                                <SelectedItem id='design'>Design: <span className="empty">none</span></SelectedItem>
                                <br />
                        </Selected>
                        <Total>
                                <Amount id='amount'>P0</Amount>
                                <Button2>  CONFIRM AND ADD TO CART</Button2>
                        </Total>
                       
                    </Card>
                
            </Wrapper>

        </MenuContainer> 
    )
}

export default CustomCake;