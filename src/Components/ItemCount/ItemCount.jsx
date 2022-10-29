
import React, { useState } from "react";
import './ItemCount.css'

export default function ItemCount({ stock, initial, onAddToCart})  {

    const [count, setCount] = useState(initial);

    const addProduct = (num) => {
        setCount(count + num);
  
    };
  return (
 
    <div className="count-container">
      <div className="count-container__contador">
 
    <div className="buttons">
    <button type="button" className="add-to-cart" onClick={()=> {onAddToCart(count)}}>Add to Cart</button>
    

  </div>
  
        <button
          className="count-container__button"
          onClick={() => addProduct(-1)}
          disabled={count === initial ? true : null}
        >
          -
        </button>
        <span className="count-container__count">{count}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
          disabled={count === stock ? true : null}
        >
          +
        </button>
       
      </div> 
    </div>
  );
};
  
