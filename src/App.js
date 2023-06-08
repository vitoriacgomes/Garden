import React, { useState } from 'react';
import './App.css';
import Menu from './pages/menu';
import Home from './pages/home';
import Footer from './pages/Footer';
import Produtos from "./pages/Produtos"

function App() {
  //navegation
  const [currentPage, setCurrentPage] = useState('home');

  function goToProdutos() {
    setCurrentPage('produtos');
  }

  function goToHome() {
    setCurrentPage('home');
  }

  return (
    <div className='container-app'>
      <Menu 
      onHomeButtonClick={goToHome}  
      onProdutosButtonClick={goToProdutos}
      />
      {currentPage === 'home' && <Home onProdutosButtonClick={goToProdutos} /> }
      {currentPage === 'produtos' && <Produtos />}
      <Footer/>
    </div>
  );
}

export default App;
