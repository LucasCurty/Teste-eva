import useAxios from "../../../hooks/useAxios"
import CardItem from "../components/cardItem"

import { useRef } from 'react'

import '../listas.css'

export default function Livros(){
  const {data} = useAxios('category/1') 
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
      <h1>Destaque em livros</h1>
      <div id="List">
        <ul className="itemsList" ref={carousel}>
          {
            data?.products.map(item => (
              <CardItem key={(item.id).toString()}
                id={item.id}
                name={item.name}
                stars={item.stars}
                oldPrice={item.price.toString().replace(".", ",")}
                price={item.promotional_price?.toString().replace(".", ",")} 
              />
            ))
          }
        </ul>
        <div>
            <button className='left' onClick={leftClick}> &lt; </button>
            <button className='right' onClick={rightClick}> &gt; </button>
          </div>
      </div>
    </section>
  )
}