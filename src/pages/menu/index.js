import React from 'react';
import folhalogo from "../../img/folha.png"

const Menu = () => {
  return (
    <div>
        <header className="nav-bar text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={folhalogo} width={40}/>
                    <span className="logo-title ml-3 text-xl">GARDEN</span>
                </a>
                <nav className="nav- md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">Home</a>
                    <a className="mr-5 hover:text-gray-900">Empresa</a>
                    <a className="mr-5 hover:text-gray-900">Produtos</a>
                    <a className="mr-5 hover:text-gray-900">Sobre</a>
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    </div>
  )
}

export default Menu;
