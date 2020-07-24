import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import GifGrid from './components/GifGrid'
// import PropTypes from 'prop-types'

const GifExpertApp = props => {
  // const categories=['one punch', 'Samurai X', 'Naruto']

  const [categories, setcategorie] = useState(['One punch'])

/*
  const addCategorie= () => {

    // NO se porqué, pero cuando sale de la funcion no sale como array sino que sale como number (4), por lo que, cuando vuelve a renderizar y llega al punto  de la funcion map, este arroja un error diciendo que .map no es una funcion y tiene logica, que voy a recorrer si solo tengo un numero?. 
    // setcategorie(categories => categorie.push('DBZ'))

    // Esta es la solucion correcta
    setcategorie( [...categorie, 'DBZ'])

  }
*/
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory
        setcategorie={setcategorie}
        />
      <hr />

      <ol>
        {
          categories.map(category => 
            <GifGrid 
            key= {category}
            category={category}/>
          )
        }
      </ol>


    </>
  )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
