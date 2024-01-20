import React from 'react';

export default function AboutFooter() {
  return (
        <footer class="text-white bg-[#020E4D] pb-0">
            <div class="container px-14 mx-auto">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div class="sm:col-span-2 py-12">
                        <h1 className="max-w-lg text-[35px] font-semibold text-white xl:text-[35px]">Nos encanta escucharte</h1>

                        <div class="flex  flex-col mt-6 space-y-3 md:space-y-0 md:flex-row">                    
                            <button class="w-full px-6 py-[15px] text-[20px] font-bold tracking-wider text-white transition-colors duration-300 transform md:w-auto focus:outline-none bg-[#035CF7] rounded-lg hover:bg-[#2776ff] focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                Contactanos
                            </button>
                        </div>
                    </div>

                    <div className="border-r border-white md:p-14 pt-16 md:mr-[-70px] ">
                        <p class="text-white text-[18px]">Escríbenos</p>
                        <div class="flex items-start mt-5">
                            <a href="https://wa.link/zahwxr" target="_blank">
                                <img className="rounded-full p-2 mr-2 border border-white transition-colors duration-300 hover:bg-[#ffffff3f] flex z-0 object-cover w-[50px] h-auto"
                                    src="/images/iconwhats.png">     
                                </img>
                            </a>
                            <a href="https://www.facebook.com/desarrollalab" target="_blank">
                                <img className="rounded-full p-[10px] mx-2 border border-white transition-colors duration-300 hover:bg-[#ffffff3f] flex z-0 object-cover w-[50px] h-auto"
                                    src="/images/iconmes.png">     
                                </img> 
                            </a>
                            <a href="https://wa.link/zahwxr" target="_blank">
                                <img className="rounded-full p-[10px] mx-2 border border-white transition-colors duration-300 hover:bg-[#ffffff3f] flex z-0 object-cover w-[50px] h-auto"
                                    src="/images/iconpost.png">     
                                </img> 
                            </a>                         
                        </div>
                    </div>
                    <div className="xl:ml-14 pt-16">
                        <p class="text-white md:text-center md:ml-[58px] text-[18px]">Síguenos en</p>
                        <div class="flex items-start mt-5 md:ml-9">
                            <a href="https://www.facebook.com/desarrollalab" target="_blank">
                                <img className="mt-[2px] flex z-0 object-cover w-[40px] h-auto"
                                    src="/images/iconface.png">     
                                </img>
                            </a>
                            <a href="https://www.tiktok.com/@desarrollalab?lang=es" target="_blank">
                                <img className="mt-[5px] flex z-0 object-cover w-[35px] h-auto"
                                    src="/images/icontik.png">     
                                </img>
                            </a>
                            <a href="https://twitter.com/TechBehemoths/status/1619643523199803393" target="_blank"> 
                                <img className="flex z-0 object-cover w-[45px] h-auto"
                                    src="/images/iconx.png">     
                                </img> 
                            </a>
                            <a href="https://www.instagram.com/desarrollalab/" target="_blank">
                                <img className="mt-[-5px] flex z-0 object-cover w-[55px] h-auto"
                                    src="/images/iconin.png">     
                                </img>
                            </a>
                        </div>
                    </div>
                </div>
                
                <hr class="border-gray-200 h-2" />
                
                <div class="mt-5 mb-10 sm:flex sm:items-start sm:justify-between">
                    <div class=" gap-3 hover:cursor-pointer">
                    <p class="font-semibold text-[28px] text-white">Sobre IA Travel</p>
                        <div class="text-[15px] text-[#c2d4fa] flex flex-col items-start mt-5 space-y-2">
                            <p class="mb-2 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Conócenos</p>
                            <p class="transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Contáctanos</p>
                        </div>                    
                    </div>
                    <div class=" gap-3 hover:cursor-pointer">
                    <p class="font-semibold text-[28px] text-white">De tu interés</p>
                        <div class="text-[15px] text-[#c2d4fa] flex flex-col items-start mt-5 space-y-2">
                            <p class="mb-2 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Anunciarme en iatravel</p>
                            <p class="transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Destinos</p>
                            <p class="transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Prensa</p>
                        </div>                      
                    </div>
                    
                    <div class=" gap-3 hover:cursor-pointer">
                    <p class="font-semibold text-[28px] text-white">Legal</p>
                        <div class="text-[15px] text-[#c2d4fa] flex flex-col items-start mt-5 space-y-2">
                            <p class="mb-2 transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Términos y condiciones</p>
                            <p class="transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Aviso de privacidad</p>
                            <p class="transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Terminos para anunciantes</p>
                        </div>                       
                    </div>
                    <div class=" gap-3 hover:cursor-pointer">
                    <p class="font-semibold text-[28px] text-white">Contacto</p>
                        <div class="text-[15px] text-[#c2d4fa] flex flex-col items-start mt-5 space-y-2">
                            <p class="mb-2 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">hola@iatravel.com</p>
                            <p class="transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">772 117 3345</p>
                            <p class="transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Lunes a viernes de 9 a 9</p>
                        </div>                     
                    </div>
                </div>
                <p class="py-8 text-start md:text-start md:text-[14px] md:px-0 md:py-10">© 2024 iatravel.com</p>
                <p class="text-[#c2d4fa] py-8 text-start md:text-start text-[11px] md:px-0 mt-[-65px]">Página web creada por Desarrollalab.com</p>
            </div>
        </footer>

  )
}
