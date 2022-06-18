import useAxios from '../../../hooks/useAxios'
import CardItem from "../components/cardItem"

import { useRef } from 'react'

import '../listas.css'

export default function Destaques(){
  const {data} = useAxios('categories')
  const carousel = useRef(null)

  function leftClick(e){
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }
  function rightClick(e){
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return(
    <section>
      <h1>Destaques</h1>
      <div id='List'>
        <ul className='itemsList' ref={carousel}>
          {data?.map(item => 
              <CardItem key={(item.products[0].id).toString()}
              id={item.products[0].id}
              name={item.products[0].name}
              stars={item.products[0].stars}
              oldPrice={item.products[0].price.toString().replace(".", ",")}
              price={item.products[0].promotional_price?.toString().replace(".", ",")} 
              />
          )}  
        </ul>
        <div className='btns'>
          <button className='left' onClick={leftClick}> &lt; </button>
          <button className='right' onClick={rightClick}> &gt; </button>
        </div>
      </div>
    </section>
  )
}