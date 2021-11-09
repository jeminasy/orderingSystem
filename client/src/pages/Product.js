import React from 'react'
import Menu from '../components/Shop/Menu';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import { RelatedProductsData } from '../data/RelatedProducts';


function Product () {
    return (
        <>
            <ProductDetails/>
            <Menu heading = 'Related Products' data ={RelatedProductsData}/>
           
            
        </>
      )
}

// function Product () {
//     return (
//         <>
//             <ProductDetails/>
//             <Menu/>
           
            
//         </>
//       )
// }

export default Product;