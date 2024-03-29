"use client";
import React, {useState} from "react";
import clsx from "clsx";

export default function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    return(
        <div className="bg-[#00178F]">
            <header class="flex lg:absolute items-center justify-between flex-wrap bg-transparent p-5 w-full z-10 top-0">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <a class="text-white pt-2 no-underline hover:text-white hover:no-underline" href="/">
                        <span class="text-4xl pl-8 font-semibold"><i class="em em-grinning"></i> iatravel</span>
                    </a>
                </div>

                <div class="block lg:hidden">
                            <button class="rounded bg-transparent p-2 text-white transition-colors duration-300 hover:text-[#00178F] hover:bg-white" onClick={() => setOpenMobileMenu(!openMobileMenu)}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            </button>
                </div>

                <div className={clsx({ 'hidden': !openMobileMenu, 'lg:flex': openMobileMenu }) + ' w-full flex-grow lg:flex lg:items-center lg:w-auto pt-6 lg:pt-0'}>
                    <ul class="list-reset lg:flex justify-end flex-1 items-center text-2xl font-normal">
                        <li class="mr-5">
                            <a class="inline-block text-white no-underline transition-colors duration-300 hover:text-gray-200 hover:border-b border-white py-2 px-4" href="/">Inicio</a>
                        </li>
                        <li class="mr-5">
                            <a class="inline-block text-white no-underline transition-colors duration-300 hover:text-gray-200 hover:border-b border-white py-2 px-4" href="/destinos">Destinos</a>
                        </li>
                        <li class="mr-10">
                            <a class="inline-block text-white no-underline transition-colors duration-300 hover:text-gray-200 hover:border-b border-white py-2 px-4" href="/contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
        
    )
}
