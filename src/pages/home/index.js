import React from 'react'

const Home = () => {
  return (
    <div>

        <section className="home-1 text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="texto-1 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">Nós preenchemos 
                        <br className="title-font-2 hidden lg:inline-block"/> sua casa com plantas
                    </h1>
                    <p className="desc-1 mb-8 leading-relaxed">Somos entusiastas de plantas. Nos oferecemoso cuidade de mudas
                    selecionadas, para dentro da sua casa. Temos em nosso catalogo uma diversidade de plantas, desde ervas como 
                    hortela, manjericao, alecrim, até plantas ornamentais.</p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
            </div>
        </section>

        <section class="box-home text-gray-600 body-font">
            <div class="container px-6 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg">
                            <h2 class="text-lg text-400 font-medium  mb-2">Inspirações</h2>
                            <p class="leading-relaxed text-base">Veja como preencher sua casa com as mais lindas mudas.</p>
                        <a class="mt-3 text-500 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
                </div>
                <div class="texto-2 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">Da semente
                        <br class="hidden lg:inline-block"/> para sua casa
                    </h1>
                    <p class="desc-2 mb-8 leading-relaxed">Cuidamos dos nossos produtos desde o estagio de semente, até chegar na sua mão. Cada planta precisa de cuidados 
                    especificos para se manter saudavel e bonita, e nos fazemos questao de participar desse processo.</p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                    </div>
                </div>
            </div>
        </section>

        <section className="home-1 text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="texto-1 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">Vamos
                        <br className="title-font-2 hidden lg:inline-block"/> as compras
                    </h1>
                    <p className="desc-1 mb-8 leading-relaxed">Olhe nosso catalogo de produtos e adquira as suas ervas, flores e folhagens favoritas</p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
            </div>
        </section>

    </div>
  )
}

export default Home;
