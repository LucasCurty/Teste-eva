import axios from 'axios';
import { useState, useEffect } from 'react';

const api  = axios.create({
  baseURL: 'https://www.eva-test-api.plataformaeva.com/'
})

export default function useAxios(url){
  const [data, setData] = useState()

  useEffect(()=>{

    api.get(url)
    .then(response => setData(response.data))

  },[url])

  return { data }
}