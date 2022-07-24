import { useState, useEffect } from 'react'
import {Email} from '../../../assets/icons/'

import './style.css'

export default function NewsLatter(){
const [name, setName] = useState()
const [email, setEmail] = useState()
const [error, setError ] = useState(false)
const [msg, setMsg] = useState(false)
const [inputColor, setInputColor] = useState('')

useEffect(()=>{
  setError(false)
  setInputColor("")
},[email])

useEffect(()=>{
  setTimeout(()=>{
    setMsg(false)
  },2500)
},[msg === true])

  function CheckInputs(e){
    e.preventDefault()
    if(!name && !email){
      setError(true)
      setInputColor("#E11383")
    }else{
      validateEmail(email)
    }
  }
  function validateEmail(value){
    if(!value.includes('@')){
      setError(true)
      setInputColor("#E11383")
    }else{
      setError(false)
      setEmail('')
      setName('')
      setMsg(true)
      setInputColor("")
    }
  }

  return(
    <section className='sectionNews'>
      <div className='newsletter'>
        <img src={Email} alt="newsletter" />
        <h2>Receba nossas novidades, descontos e muito mais</h2>
        <form  action="" className='form'>
          <div className='inputs'>
            <input type='text'
              placeholder='Digite seu nome'
              value={name}
             onChange={e =>{setName(e.target.value)}}
            />
            

            <input type={'email'}
             placeholder='Digite seu email'
             value={email}
             onChange={e =>{setEmail(e.target.value)}}
             style={{color:`${inputColor}`,
                    border:` 1px solid ${inputColor}`}}
             />

           {error && <span className='email' style={{color:`${inputColor}`}}>Email inválido</span>
             }
          </div>
          {msg ? <h1>Cadastrado com sucesso!</h1>
          :
            <button onClick={CheckInputs}>Eu quero receber novidades!</button>
          }
        </form>
      </div>
    </section>
  )
}