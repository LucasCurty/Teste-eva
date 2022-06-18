import LivrosSec from '../../assets/images/category-1.jpeg'
import EscritorioSec from '../../assets/images/category-2.jpeg'
import VestuarioSec from '../../assets/images/category-3.jpeg'

import Destaques from './destaques'
import Escritorio from './escritorio/escritorio'
import Livro from './livro/livro'
import Vestuario from './vestuario/vestuario'
import NewsLatter from './newsletter/newsletter'

import './style.css'

export default function Body(){

  return(
    <main>
      <section className='categorias'>
        <div>
          <img src={LivrosSec} alt="secao livros" /> 
          <p>Livros</p>
        </div>
        <div>
          <img src={EscritorioSec} alt="secao escritorio" />
          <p>Escritório</p>
        </div>
        <div>
          <img src={VestuarioSec} alt="secao vestuario" />
          <p>Vestuário</p>
        </div>
      </section>
      
      <Destaques />
      <Livro />
      <Escritorio />
      <Vestuario />
      <NewsLatter />
    </main>
  )
}