import React from 'react';

function Inicio() {
  return (
    <div className="absolute inset-0 flex items-start sm:items-start">
      <img
        className="w-full"
        src="/images/img5.jpg"
      />
        <div className="absolute top-56 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <h1 style={{ lineHeight: "3.25rem" }} class=" text-4xl font-bold text-center" className="text-center">Busca información de los mejores destinos del mundo</h1>
        </div>
    </div>
  )
}

export default Inicio;