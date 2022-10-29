import React from 'react'
import "./HeroBanner.css"
export default function HeroBanner(props)  {
  return (
    
    <>
      <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Choice</p>
        <h3>To Equipment</h3>  
        
        <img src="https://dondiario.com/images/2021/01/14/1610615553.jpg"alt="Balones" className="hero-banner-image" />

        <div>
          
            <button type="button">Boton con texto</button>
        
          <div className="desc">
            <h5>Productos</h5>
            <p>Especializado</p>
          </div>
        </div>
      </div>
    </div>
   
    <div className="products-heading">
      <h2>Los Mejores Productos de Entrenamiento</h2>
      <p>Mejora tus fundamentos en basket y futbol</p>
    </div>

   
    </>
  )
}
