import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setcategorie}) => {

  const [inputValue, setInputValue] = useState('')
  
  const handleInputChange= (e) => {
    setInputValue(e.target.value);
  }
  
  const handleSubmit= (e) => {
    // Previene que por ejemplo en un submit se recargue el formulario.
    e.preventDefault();

    // De esta forma no sirve porque no  estoy enviando categorie en los props, entonces no encuentra una referencia de que es categorie.
    // setcategorie( [...categorie, 'DBZ'])

    
    if(inputValue.trim().length>2){
      
      // Tendria que ser de esta forma, ya que al momento de llamar la funcion esta se puede llamar con un callback que tiene el estado anterior.
      setcategorie( (categorie)=> [inputValue,...categorie,])

      // Con esto evitamos que ingrese el mismo valor aprentado solo enter
      setInputValue('')
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

AddCategory.propTypes={
  setcategorie:PropTypes.func.isRequired
}