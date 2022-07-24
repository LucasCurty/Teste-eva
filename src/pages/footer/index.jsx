import {Loja, Mapa, Whatsapp, Email} from '../../assets/icons/'
import './style.css'

export default function Footer(){
  return(
    <footer>
      <h2>Eva Shop</h2>
      <div className='conteiner'>
        <div className='divmenor'>
          <img className='iconpink' src={Loja} alt="icone da loja" />
          <a href="#">Quem somos</a>
          <a href="#">Políticas de privacidade</a>
          <a href="#">Feedback de clientes</a>
          <a href="#">Trocas e devolições</a>
        </div>
        <div className='divmenor'>
          <img className='iconpink' src={Mapa} alt="icone do mapa" />
          <p>Rua Av. Rio Negro, 1100</p>
          <p>Jardim Roselandia</p>
          <p>14406-055</p>
          <p>Franca/SP</p>
        </div>
        <div className='divmenor'>
          <img className='iconpink' src={Loja} alt="icone da loja" />
          <a href='#'><img className='contact' src={Whatsapp} alt="icone do whats" /> (16) 9 98179-7325</a>
          <a href='#'><img className='contact' src={Email} alt="icone do email" /> contato@evacommerce.com.br</a>
        </div>
      </div>
    </footer>
  )
}