import React from 'react';
import AboutFooter from './Footer';

export default function AboutContacto() {
  return (
    <div className="relative inset-0 items-start sm:items-start">
      <div>
        <img
          className="absolute z-0 object-cover w-[100%] h-[575px]"
          src="/images/img3.jpg"
        />
      </div>
      <div className="mb-10 px-12 w-full relative top-[350px] pt-2 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <p className="md:mb-1 mb-1 text-[20px] md:text-[39px] font-bold text-start">Nos encanta escucharte,</p>
            <p className="md:mb-1 mb-1 text-[20px] md:text-[39px] font-bold text-start">enserio</p>
            <p className="md:text-[18px] text-[12px] text-start">No importa el día ni la hora, siempre estamos</p>
            <p className="md:text-[18px] text-[12px] text-start">disponibles para atenderte, ¡vamos, contáctanos!</p>
      </div>
        <img className="absolute object-cover top-[650px] right-0 w-[600px] h-auto hidden lg:block" src="/images/formulario.png"/>
        <div className='w-full mt-[388px] md:h-[950px] h-[750px] bg-[#00178F]'>
          <div className='px-5 py-[-10px] md:w-[750px] w-[320px] md:pt-[450px] pt-[380px]  font-semibold md:text-[38px] text-[25px] text-center text-black'>
            <div className="mb-10 md:px-[70px] w-auto relative pt-2 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
                <p className="md:mb-1 mb-1 text-[24px] md:text-[45px] font-bold text-start">Completa el siguiente</p>
                <p className="md:mb-10 mb-1 text-[24px] md:text-[45px] font-bold text-start">formulario</p>
                <div>
                  <p className="md:text-[22px] p-2 font-extralight text-[14px] text-start">Nombre completo</p>
                  <input className='rounded-full md:text-[30px] text-[14px] px-4 py-2 border-2 left-0 w-full border-white bg-transparent text-start font-extralight'></input>
                </div>
                <div className='md:flex'>
                  <div className="md:mr-2">
                    <p className="md:text-[22px] md:mt-5 mt-2 p-2 font-extralight text-[14px] text-start">Nombre completo</p>
                    <input className='rounded-full md:text-[30px] text-[14px] px-4 py-2 border-2 w-full border-white bg-transparent text-start font-extralight'></input>
                  </div>
                  <div className="md:ml-2">
                    <p className="md:text-[22px] md:mt-5 mt-2 p-2 font-extralight text-[14px] text-start">Nombre completo</p>
                    <input className='rounded-full md:text-[30px] text-[14px] px-4 py-2 border-2 w-full border-white bg-transparent text-start font-extralight'></input>
                  </div>
                </div>
                <div>
                  <p className="md:text-[22px] md:mt-5 mt-2 p-2 font-extralight text-[14px] text-start">Mensaje</p>
                  <textarea className='rounded-[40px] align-text-top md:text-[14px] text-[14px] px-4 py-2 border-2 left-0 w-full h-[120px] border-white bg-transparent text-start font-extralight'></textarea>
                </div>
                <p className="md:text-[15px] md:mt-5 mt-2 p-2 font-extralight text-[9px] text-start">Al enviar tu información autorizas que iatravel procese tus datos de acuerdo su Política de Privacidad</p>
                <div className='relative w-full'>
                  <button className='flex md:w-[205px] w-[150px] right-[100%] text-center bg-[#035CF7] transition-colors duration-300 hover:bg-[#2776ff] md:text-[23px] text-[15px] rounded-full md:p-[14px] p-[10px] md:px-12 px-10 font-semibold'>Enviar
                  <img className="flex ml-2 z-0 object-cover md:w-[35px] w-[22px] h-auto"
                      src="/images/enviar.png"></img></button>
                </div>
            </div>
          </div>
        </div>
        <div >
          <AboutFooter/>
        </div>  
    </div>
  )
}