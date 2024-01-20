import React from 'react';
import AboutFooter from './Footer';
import Carousel from './Carousel';

export default function AboutDestinos() {
  return (
    <div className="relative inset-0 items-start sm:items-start">
      <div>
        <img
          className="absolute z-0 object-cover w-[100%] h-[575px]"
          src="/images/img12.jpg"
        />
      </div>
      <div className="mb-10 px-12 w-full relative top-72 pt-2 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <p className="md:mb-4 mb-1 text-[24px] md:text-[39px] font-bold text-start">Aquí comienza la aventura</p>
            <p className="md:text-[18px] text-[14px] text-start">Hemos detallado experiencias vivas de cada destin,</p>
            <p className="md:text-[18px] text-[14px] text-start">tood comienza explorando el destino,</p>
            <p className="md:text-[18px] text-[14px] text-start">¿A dónde quieres ir hoy?</p>
        </div>
        <div className="px-12 z-10 w-full absolute top-[410px] mt-5 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <input className='border border-white bg-[#ffffff2c] rounded-full p-[12px] px-6 md:w-[270px] w-[220px] placeholder-white' placeholder='Buscar destino'></input>
        </div>
        <div className='mt-[410px] flex'>
          <img
            className=" absolute object-cover w-[100%] h-[300px]"
            src="/images/img10.jpg"
          />
          <div className="h-[300px] bg-gradient-to-r from-[#00168B] to-[#17193831] mb-10 px-[5vw]  lg:pt-[46px] pt-[70px] pb-[25px]  w-full absolute text-white">
              <p className="lg:mb-[6px] mb-1 text-[15px] md:text-[22px] lg:text-[30px] text-start">Explora el mundo con Booking.com</p>
              <p className="mb-[15px] pr-[15px] flex lg:text-[45px] md:text-[30px] text-[20px] font-bold  text-start">Un planeador de viajes fácil y rápido</p>
                <button className=' w-[180px] text-start border border-white bg-[#ffffff00] transition-colors duration-300 hover:bg-[#ffffff52] md:text-[15px] text-[15px] rounded-md p-[12px] px-10 font-semibold'>Renta aquí</button>
              <p className="mt-[25px] flex md:text-[15px] text-[10px] text-start">Consulta términos y condiciones</p>
          </div>
          <img
            className=" absolute object-cover w-auto h-[190px] hidden lg:block mt-[60px] right-[50px]"
            src="/images/booking.png"
          />
        </div>
        <div className='px-5 py-[-10px] w-full absolute top-[910px] left-1/2 transform -translate-x-1/2  font-semibold md:text-[38px] text-[25px] text-center text-black'>
          <h1>Destinos</h1>
        </div>
        <div className='relative w-full h-[300px] top-[480px]'>
          <Carousel/>
        </div>
        <div className=" mt-[600px]">
          <AboutFooter/>
        </div>  
    </div>
  )
}
