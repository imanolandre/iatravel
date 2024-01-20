import React from 'react';
import Carousel from './Carousel';
import AboutFooter from './Footer';

export default function Inicio() {
  return (
    <div className="relative inset-0 items-start sm:items-start">
      <div>
        <img
          className="absolute z-0 object-cover w-[100%] h-[575px]"
          src="/images/img5.jpg"
        />
      </div>
        <div className="px-5 py-[-10px] w-full relative top-56 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <p className="mb-3 text-[25px] md:text-[39px] font-bold text-center">Busca información de los mejores</p>
            <p className="text-[25px] md:text-[39px] font-bold text-center">destinos del mundo</p>
        </div>
        <div className="px-[20vw] md:px-[29vw] z-10 w-full relative top-[250px] md:top-[205px] mt-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">
          <input className='md:text-[22px] text-[18px] rounded-full p-[20px] px-8 w-full placeholder-neutral-500' placeholder='Buscar destino'></input>
        </div>
        <div className='px-5 py-[-10px] w-full absolute top-[610px] left-1/2 transform -translate-x-1/2  font-semibold md:text-[38px] text-[25px] text-center text-black'>
          <h1>Sugerencias de IATravel</h1>
        </div>
        <div className='relative w-full top-[480px]'>
          <Carousel/>
        </div>
        <div className="row row-deck row-cards px-[21vw] md:px-[34.51vw] z-10 w-full relative top-[550px] mt-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <button className='bg-[#035CF7] transition-colors duration-300 hover:bg-[#2776ff] md:text-[22px] text-[15px] rounded-md p-[16px] px-8 w-full font-semibold'>Explora todos los destinos</button>
        </div>
        <div className='lg:flex'>
        <div className="mb-10 px-16 w-full relative top-[680px] pt-2  text-black">
            <p className="md:mb-3 mb-1 text-[26px] md:text-[30px] text-start">Conoce las</p>
            <div className='flex'>
              <p className="pr-2 text-[#035CF7] flex md:text-[39px] text-[28px] font-bold  text-start">Experiencias </p>
              <p className="md:text-[39px] text-[28px] font-bold  text-start"> de </p>
            </div>
            <p className="flex md:text-[39px] text-[28px] font-bold  text-start">nuestros usuarios</p>
        </div>
        <div className=" lg:w-[1700px] relative top-[640px]  lg:right-[70px] lg:mx-1 mx-3 text-black">
          <div className="grid grid-cols-3 bg-white p-3 pt-6 rounded-xl shadow-custom">
            <img className="p-2 pt-5 col-span-1 w-[185px] h-auto"
              src="/images/img1.png">
            </img>
            <div className="lg:ml-[-20px] col-span-2">
              <div className="flex">
                <p className="mb-4 mt-[-10px] md:text-[23px] sm:text-[18px] text-[12px] font-medium text-start">ESMERALDA GARZA</p>
                <p className="flex mb-4 lg:ml-[75px] sm:ml-[35px] ml-[20px] sm:mt-[-2px] mt-[-7px] sm:text-[15px] text-[8px] font-medium text-start text-[#035CF7]">Viajera Apasionada</p>
              </div>
              <div className="">
                <p className="lg:text-[19px] sm:text-[15px] text-[8px] italic text-start">Soy fan de las aventuras no planeadas, y para mí no hay nada más importante que las experiencias, por eso siempre consulto iatravel antes de ir a cualquier destino </p>
                <p className="mr-[10px] sm:text-[35px] text-[20px] text-yellow-300 text-end">★★★★★</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className='mt-[700px] flex'>
          <img
            className=" absolute object-cover w-[100%] h-[300px]"
            src="/images/img13.jpg"
          />
          <div className="h-[300px] bg-gradient-to-r from-[#00168B] to-[#17193831] mb-10 px-[5vw]  lg:pt-[46px] pt-[70px] pb-[25px]  w-full absolute text-white">
              <p className="lg:mb-[6px] mb-1 text-[15px] md:text-[22px] lg:text-[30px] text-start">¿Listo para viajar?</p>
              <p className="mb-[15px] pr-[15px] flex lg:text-[45px] md:text-[30px] text-[20px] font-bold  text-start">¡Renta un auto desde $399 MXN!</p>
                <button className=' w-[180px] text-start border border-white bg-[#ffffff00] transition-colors duration-300 hover:bg-[#ffffff52] md:text-[15px] text-[15px] rounded-md p-[12px] px-10 font-semibold'>Renta aquí</button>
              <p className="mt-[25px] flex md:text-[15px] text-[10px] text-start">Consulta términos y condiciones</p>
          </div>
          <img
            className=" absolute object-cover w-auto :h-[125px] hidden lg:block mt-[85px] right-[60px]"
            src="/images/hertz.png"
          />
        </div>
        <div className=" mt-[300px]">
          <AboutFooter/>
        </div>  
    </div>
    
  )
}
