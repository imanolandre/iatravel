import React from 'react';

export default function AboutContacto() {
  return (
    <div className="absolute inset-0 flex items-start sm:items-start">
      <img
        className="w-full"
        src="/images/img3.jpg"
      />
        <div className="absolute top-72 left-72 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <h1 style={{ lineHeight: "3.25rem" }} class=" text-4xl font-bold text-center" className="text-center">Nos encanta escucharte,</h1>
            <h1 style={{ lineHeight: "3.25rem" }} class=" text-4xl font-bold text-start" className="text-start">enserio</h1>
        </div>
    </div>
  )
}