import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifts = (category) => {
  
  const [state, setstate] = useState({
    data:[],
    loading:true,
  })

  // El useEffect es un 'hook' el cual solo se va a ejecutar dependiendo de las depencias (segundo argumento). En otras palabras es una suscripcion a algo, y cada vez que vea que ese algo cambio, se va a volver a ejecutar con el fin de actualizarce.
  useEffect(() => {
    getGifs(category)
      .then(imgs => {
        setstate({
          data:imgs,
          loading:false,
        });
      })
  }, [category])


  return state;
}
