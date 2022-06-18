import './cardItem.css'
import FullStar from "../../../assets/icons/estrela-cheia.svg"
import useAxios from "../../../hooks/useAxios"

export default function CardItem({id,name,stars,price,oldPrice}){

  let arra = []
  function countStars(stars){
    let i = 0;

    while( i < stars){
      arra.push(<img src={FullStar} alt="estrelas" />)
      i++;
    } 
  }
  countStars(stars)

  let {data} = useAxios(`product/${id}`)
 
  return (
    
  <li className='card'>
    <img className='imgItem' src={data?.images_product[0].path} alt={name} />
    <p className='name'>{name}</p>
    <div className='star'>
      {arra.map(item => item)}
    </div>
    
    {
      !price ? 
        <div id='precos'>
          <br />
          <h3 className='price'>R$ {oldPrice}</h3>
        </div>
        :
        <div id='precos'>
          <p className='oldPrice'>{oldPrice}</p>
          <h3 className='price'>R$ {price}</h3>
        </div>
    }
  </li>
  )
}