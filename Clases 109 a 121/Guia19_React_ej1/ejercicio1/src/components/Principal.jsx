import React from 'react'
import punteroMouse from './Img/pngwing.com.png'
import Boton from './Boton';
import Contador from './Contador';
import { useState } from 'react';

export default function Principal() {

const [numeroClicks, setNumeroCliks] = useState(0);

  const hacerClick = () => {
    setNumeroCliks(numeroClicks + 1);
  };

  const reiniciarCont = () => {
    setNumeroCliks(0);
  };

  return (

    <div className='contenedor-ppal'>
      
      <img className='puntero' src={punteroMouse} alt=' imagen puntero mouse' />
      
      <div className='contenedor'>
       
        <Contador numeroClicks={numeroClicks} />

        <Boton
          texto={'Click'}
          botonClick={true}
          eventClick={hacerClick}
        />
        <Boton
          texto={'Reiniciar'}
          botonClick={false}
          eventClick={reiniciarCont}
        />

      </div>

    </div>
  )
}
