import React from 'react'
import './Cards.css'

export default function Cards(props){
  console.log(props);
  return (
    <div>
    
        <div className="product-card">
          <img 
            src={props.src}
            width={250}
            height={250}
            className="product-image"
          />
          <h2>{props.title}</h2>
          <p className="product-name">{props.name}</p>
          <p className="product-price">{props.precio}</p>
        </div>
     
    </div>
  )
}

