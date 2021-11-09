import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from "styled-components"
import { Button1 } from '../../components/Button'
// import TresLeches from '../../images/BanoffeePie.jpg'
// import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import { publicRequest } from '../../requestMethods'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Container = styled.div`
width: 100vw;
min-height: 80vh;
padding: 5rem calc((100vw - 1500px)/2);
background: #F8F1EB;
color: #000;
`
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    @media only screen and (max-width: 780px){
     flex-direction: column;
     padding: 20px;
    }
    
`
const ImgContainer = styled.div`
    flex:1;
    
`
const Image = styled.img`
    width: 100%;
    object-fit: cover;
    @media only screen and (max-width: 780px){
     width: 70%;
    }
`
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    @media only screen and (max-width: 780px){
     margin-top: 15px;
     padding: 5px;
    }
    
`
const Title = styled.h1`
    margin-top: 1rem;

`
const Desc = styled.p`
    padding-right: 6rem;
    margin: 20px 0px;
    text-align: justify;
    line-height: 3rem;
`
const Price = styled.span`
   
    font-size: 40px;
`

const AddContainer = styled.div`
    width: 50% auto;
    display: flex;
    align-items: center;
    margin-top: 2rem;
    /* justify-content: space-between; */
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #B2784A;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`


// const Product = () => {
//     const location = useLocation();
//     const id = location.pathname.split("/")[2];
//     const [product, setProduct] = useState({});

//     useEffect(() => {
//         const getProduct = async () => {
//             try{
//                 const res = await publicRequest.get("/products/" +id);
//                 setProduct(res.data);
//             }catch{
                
//             }
//         }
//         getProduct()
//     }, [id])

//     return (
//         <Container>
//         <Wrapper>
//             <ImgContainer>
//                 <Image src={product.image} />
//             </ImgContainer>
//             <InfoContainer>
//                 <Title>TresLeches</Title>
//                 <Desc>The perfect blend of banana and toffee for a sweet and fruity combo. (size 8")</Desc>
//                 <Price>P500.00</Price>
                
//                 <AddContainer>
//                 <AmountContainer>
//                     <Remove/>
//                     <Amount>1</Amount>
//                     <Add/>
                    
//                 </AmountContainer>
//                 <Button1>ADD TO CART</Button1>
//                 </AddContainer>
//             </InfoContainer>
            
//         </Wrapper>
//         </Container>
//     )
// }

const Product = ({ match }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchProduct();
    }, []);
    const fetchProduct = () => {
        axios
            .get(
                `http://localhost:5000/shop/?id=${match.params._id}`
            )
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err))
    };

    return (
        <Container>
            {data.map((item) => {
                return (
                    <Wrapper key={item._id}>
                        <ImgContainer>
                            <Image src={item.image} alt=' ' />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.name}</Title>
                            <Desc>{item.desc}</Desc>
                            <Price>{item.price}</Price>
                        </InfoContainer>
                    </Wrapper>
                )
            })}
        </Container>
    );
    // return (
        //         <Container>
        //         <Wrapper>
        //             <ImgContainer>
        //                 <Image src={product.image} />
        //             </ImgContainer>
        //             <InfoContainer>
        //                 <Title>TresLeches</Title>
        //                 <Desc>The perfect blend of banana and toffee for a sweet and fruity combo. (size 8")</Desc>
        //                 <Price>P500.00</Price>
                        
        //                 <AddContainer>
        //                 <AmountContainer>
        //                     <Remove/>
        //                     <Amount>1</Amount>
        //                     <Add/>
                            
        //                 </AmountContainer>
        //                 <Button1>ADD TO CART</Button1>
        //                 </AddContainer>
        //             </InfoContainer>
                    
        //         </Wrapper>
        //         </Container>
        //     )
}

export default Product;
