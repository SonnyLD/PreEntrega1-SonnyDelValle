import React  from 'react'
import './Items.css'
import {Link} from 'react-router-dom';
export default function Items(props){
 
  return (
    <div>
       <Link to={`/product/${props.id}`} >
        <div className="product-card">
          <img 
            src={props.src}
            alt="Imagen de detail"
           
            className="product-image"
          />
          <h2>{props.title}</h2>
          <p className="product-detail">{props.detail}</p>
          <p className="product-price">$ {props.precio}</p>
      
        </div>
        </Link>
     
    </div>
  
  )
  
}

