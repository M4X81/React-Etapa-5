import React from 'react'

export default function Boton( { texto, botonClick, eventClick } ) {
  return (
 <button
 className={ botonClick ? 'boton-click' : 'boton-reiniciar' }
 onClick={ eventClick }>
{texto}
 </button>

  );
}

