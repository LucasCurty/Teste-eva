import Logo from '../../assets/images/logo.png';
import {Usuario, Carrinho, Cadeado, Caminhao, Cartao, Busca, SetaCategorias} from '../../assets/icons/'
import Banner from '../../assets/images/banner.jpeg'

import './header.css'
import { useState } from 'react';

export default function Header(){
  const [showMenu, setShowMenu] = useState(false)

  return(
    <header>
      <nav>
        <div className='allNav'>
          <img  src={Logo} alt="Logo da pagina" />
          <div className='categorias'>
            <button onClick={()=>{setShowMenu(!showMenu)}}> Categorias <img width="14" src={SetaCategorias} alt="icon seta" /></button> 
            {showMenu &&
              <ul id='category'>
                <a href="#">
                  <li > Livros</li>
                </a>
                <a href="#">
                  <li > Escritório</li>
                </a>
                <a href="#">
                  <li > Vestuário</li>
                </a>
                <a href="#">
                  <li> Informática</li>
                </a>
              </ul>
            }
            <div id="busca">
              <input type="search" className='input_busca' />
              <img src={Busca} alt="icone de busca" />
            </div>
            <div className='MeuCarrinho'>
              <a href='#'>Minha conta 
                <img height={16}  src={Usuario} alt="icone de usuario" />
              </a>
              <a href='#'>Carrinho (2)
                <img height={16} src={Carrinho} alt="icone de busca" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className='background' style={{backgroundImage:`url(${Banner})`}}>
        <h1>Seu livros favoritos</h1>
        <p>estão te esperando aqui!</p>
      <div className='rotate'></div>
      </div>
      <div className='icones_vantagens'>
        <div className='icone_imagens'>
          <img src={Cadeado} alt="icone do cadeado" color='red'/>
          <p>Site seguro</p>
        </div>
        <div className='icone_imagens cartao'>
          <img  src={Cartao} alt="icone do cartao" />
          <p>Até 12x sem juros</p>
        </div>
        <div className='icone_imagens'>
          <img src={Caminhao} alt="icone do caminhao" />
          <p>Entrega para todo o Brasil</p>
        </div>
      </div>
    </header>
  )
}