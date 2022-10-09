import React, {useState, useEffect} from 'react'
import { getUnProduct } from '../../MockApi/MockApi'
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemDetail from './ItemDetail';



export default function ItemDetailContainer(props){
  const [product, setProduct] = useState([]);
  
  useEffect(
    () =>{
      getUnProduct().then((data) =>{
        console.log("getProduct");
      setProduct(data);
     });
   },[]
  )

  return (
      <FlexWrapper>
      <ItemDetail product={product}/>
      </FlexWrapper>

      )
    }
