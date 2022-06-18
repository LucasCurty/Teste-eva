import LojaSVG from '../../assets/icons/loja.svg'
import WhatsSvg from '../../assets/icons/whatsapp.svg'
import MapaSVG from '../../assets/icons/mapa.svg'
import EmailSVG from '../../assets/icons/email.svg'
import './style.css'

export default function Footer(){
  return(
    <footer>
      <h2>Eva Shop</h2>
      <div className='conteiner'>
        <div className='divmenor'>
          <img className='iconpink' src={LojaSVG} alt="icone da loja" />
          <a href="#">Quem somos</a>
          <a href="#">Políticas de privacidade</a>
          <a href="#">Feedback de clientes</a>
          <a href="#">Trocas e devolições</a>
        </div>
        <div className='divmenor'>
          <img className='iconpink' src={MapaSVG} alt="icone do mapa" />
          <p>Rua Av. Rio Negro, 1100</p>
          <p>Jardim Roselandia</p>
          <p>14406-055</p>
          <p>Franca/SP</p>
        </div>
        <div className='divmenor'>
          <img className='iconpink' src={LojaSVG} alt="icone da loja" />
          <a href='#'><img className='contact' src={WhatsSvg} alt="icone do whats" /> (16) 9 98179-7325</a>
          <a href='#'><img className='contact' src={EmailSVG} alt="icone do email" /> contato@evacommerce.com.br</a>
        </div>
      </div>
    </footer>
  )
}