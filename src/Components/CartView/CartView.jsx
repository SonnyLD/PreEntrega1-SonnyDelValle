import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

import UserForm from "../UserForm/UserForm";


function CartView(){
    const { cart, removeItem, getTotalPrecio } = useContext(cartContext);

    return (
        <FlexWrapper>
          {cart.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <h4>Precio: ${product.precio}</h4>
              <h4>Productos: {product.count}</h4>
              <h4>Precio Total: ${product.precio * product.count}</h4>
              <button onClick={()=>removeItem(product.id)}>borrar</button>
            </div>
          ))} 

        <UserForm cart={cart} getTotalPrecio={getTotalPrecio} />
        </FlexWrapper>
      );
    }
    
    export default CartView;