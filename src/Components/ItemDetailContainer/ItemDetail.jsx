import React, {useState, useEffect} from 'react'
import { getUnProduct } from '../../MockApi/MockApi'
import Items from '../Items/Items';
import ItemCount from '../ItemCount/ItemCount';
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import "./ItemDetail.css";

import { useParams } from 'react-router-dom';
export default function ItemDetail(props){
  const [product, setProduct] = useState([]);
  const onAdd = (count) => {
  };
  
  const {itemID} = useParams();
  
  useEffect(
    () =>{
      getUnProduct(itemID).then((data) =>{
        console.log("getProduct");
      setProduct(data);
     });
   },[itemID]
  )

  return (
    <div className='productDetails'>
      <FlexWrapper>
      <Items    
                key={product.id}
                id= {product.id}
                title={product.title}
                src={product.src}
                precio={product.precio}
                detail={product.detail}
                
      />
       <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
       </FlexWrapper>
   </div>

      )
    }