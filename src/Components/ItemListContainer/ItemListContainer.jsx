
import React, {useState, useEffect} from 'react';

import { getProduct, getProductByCategory} from '../../MockApi/MockApi';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

export default function ItemListContainer(props){
  const [productList, setProductList] = useState([]);
  const params = useParams();
  const categoryID = params.categoryID;

  useEffect(() => {
    if (categoryID === undefined) {
      getProduct().then((data) => {
        setProductList(data);
      });
    } else {
      getProductByCategory(categoryID).then((data) => {
        setProductList(data);
      });
    }
  }, [categoryID]);
  return (
    console.log(props),
    <div>
      <ItemList productList={productList}/>
    </div>
  )
}

 

 