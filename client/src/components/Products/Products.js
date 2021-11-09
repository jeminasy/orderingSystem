import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Button1 } from '../Button'
import axios from "axios"

const MenuContainer =  styled.div`

    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1500px)/2);
    background: #F8F1EB;
    color: #000;
`

const MenuWrapper= styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
margin-top: 0rem;
font-size: 2rem;
`

function Products() {
    const [products, setProducts] = useState([{
        name: '',
        price: '',
        desc: '',
        image: '',
        _id: ''
    }]);
    
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios
            .get('http://localhost:5000/shop')
            .then((res) => {
                console.log(res);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <MenuContainer>
                <MenuHeading>Cakes</MenuHeading>
                <MenuWrapper>
                    {products.map((product) => {
                        return (
                            <ProductCard key ={product._id}>
                            <ProductImg src={product.image} alt={product.name} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductPrice>{product.price}</ProductPrice>
                                <Button1 to={`/product/${product._id}`}>View</Button1>
                            </ProductInfo>
                        </ProductCard>
                        )
                    })}
                </MenuWrapper>
            </MenuContainer>
        </div>
    )
}

export default Products;