import React from 'react'
import "./HeroBanner.css"
export default function HeroBanner()  {
  return (
    <>
      <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Texto PEQUEÑO</p>
        <h3>Texto MEDIANO</h3>  
        
        <img src=""alt="Balones" className="hero-banner-image" />

        <div>
          
            <button type="button">Boton con texto</button>
        
          <div className="desc">
            <h5>Description</h5>
            <p>DESCRIPCION</p>
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
