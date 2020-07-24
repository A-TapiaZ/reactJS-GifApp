import React from 'react'
import GifGridItem from './GifGridItem';
import { useFetchGifts } from '../hooks/useFetchGifs';


const GifGrid = ({category}) => {

  const {data:images,loading}= useFetchGifts(category)

  return (

    <>
      <h3 className= "animate__animated animate__fadeIn" >{category}</h3>
      <p className="animate__animated animate__flash">{loading && 'Loading'}</p>
      <div className="card-grid">
        {
          images.map( (img) => (
            <GifGridItem 
            {...img} 
            key={img.id} 
            />
          ))
        }
      </div>
    </>
  )
}


export default GifGrid
