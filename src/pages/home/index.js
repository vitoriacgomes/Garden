import React from 'react'
import inspo from "../../img/horta-na-cozinha.jpg"
import plantanamao  from "../../img/planta-crescendo.jpg"
import morangojardim from "../../img/morango.jpg"
import fundoplantas from "../../img/fundo de plantas.jpg"
import plant1 from "../../img/feey.png"

const Home = () => {
  return (
    <div className='home'>

        <section className="home-1 text-gray-600 body-font">
            <div className="container-home mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="texto-1 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">Nós preenchemos 
                        <br className="title-font hidden lg:inline-block"/> sua casa com plantas
                    </h1>
                    <p className="desc-1 mb-8 leading-relaxed">Somos entusiastas de plantas. Nos oferecemoso cuidade de mudas
                    selecionadas, para dentro da sua casa. Temos em nosso catalogo uma diversidade de plantas, desde ervas como 
                    hortela, manjericao, alecrim, até plantas ornamentais.</p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
            </div>
        </section>

        <section class="box-home-1 text-gray-600 body-font">
            <div class="container px-6 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                        <div class="box-1 border p-6">
                            <h2 class="legend-box-1 text-400 font-medium  mb-2">  Inspirações</h2>
                            <p class="leading-relaxed text-base">Veja como preencher sua casa com as mais lindas mudas.</p>
                        </div>
                        <button class="button-1 mt-3 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section class="home-2 text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full w-5/6 mb-10">
                    <img class="img-banner-home-2 object-center rounded" alt="hero" src={inspo} width={350}/>
                </div>
                <div class="texto-2 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">Da semente
                        <br class="hidden lg:inline-block"/> para sua casa
                    </h1>
                    <p class="desc-2 mb-8 leading-relaxed">Cuidamos dos nossos produtos desde o estagio de semente, até chegar na sua mão. Cada planta precisa de cuidados 
                    especificos para se manter saudavel e bonita, e nos fazemos questao de participar desse processo.</p>
                </div>
            </div>
        </section>

        <section className="home-3 text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="texto-1 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">Vamos
                        <br className="title-font hidden lg:inline-block"/> as compras
                    </h1>
                    <p className="desc-1 mb-8 leading-relaxed">Temos ervas, perfeitas pra ficar em vazinhos na sua cozinha, ajudando a deixar suas refeições ainda mais saborosas
                    Além disso, temos as mais lindas folhagens e flores para preencher da sua sala de estar, até quartos e banheiros. </p>
                    <img className='img-plantas-crescendo-3' src={fundoplantas} width={500}/>
                    <div class="button-2 xl:w-1/3 md:w-1/2 p-4">
                        <div class="box-2 border p-6 text-center">
                            <button>VER CATÁLOGO</button>
                        </div>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className='img-plantas-crescendo-1' src={plantanamao}/>
                    <img className='img-plantas-crescendo-2' src={morangojardim}/>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Home;
