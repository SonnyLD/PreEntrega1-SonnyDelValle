import React from 'react'
import Cards from '../Cards/Cards'
import FlexWrapper from "../FlexWrapper/FlexWrapper"
import Imagenes from '../Assets/Imagenes'


export default function ItemList(){
  return (
    <div>
       <FlexWrapper>
       <Cards img src= {Imagenes.img1} title="Set completo" name="Equipo de habilidad" precio="$100"/>
       <Cards img src= {Imagenes.img2}title="Correctores" name="Correa y pelota" precio="$60"/>
       <Cards img src= {Imagenes.img3}title="Set de precision" name="Panel de pases" precio="$85"/>
       </FlexWrapper>
    </div>
  )
}

 