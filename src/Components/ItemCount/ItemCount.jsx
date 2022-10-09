
import React, { useState } from "react";
import './ItemCount'

export default function ItemCount({ stock, initial, onAdd})  {

    const [count, setCount] = useState(initial);

    const addProduct = (num) => {
        setCount(count + num);
  
    };
  return (
    <div className="count-container">
      <div className="count-container__contador">
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
      <button
        className="button-primary"
        onClick={() => onAdd(count)}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};
  
