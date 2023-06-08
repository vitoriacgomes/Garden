import React, { useState } from 'react';
import folhalogo from "../../img/folha.png";
import { RiPlantLine } from "react-icons/ri";

const Menu = ({onProdutosButtonClick}) => {
  return (
    <div className='container menu '>
        <header className="nav-bar">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font items-center mb-4 md:mb-0">
                    <img src={folhalogo} width={40}/>
                    <span className="logo-title ml-3">GARDEN</span>
                </a>
                <nav className="nav- md:ml-auto flex flex-wrap items-center justify-center">
                    <button className="mr-5">Home</button>
                    <button className="mr-5 ">Empresa</button>
                    <button className="mr-5 " onClick={onProdutosButtonClick}>Produtos</button>
                    <button className="mr-5 ">Sobre</button>
                    <button className='plant-icon'> <RiPlantLine/> </button>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Menu;
