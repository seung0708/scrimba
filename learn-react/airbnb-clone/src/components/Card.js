import React from 'react'

import star from '../images/star.png'
const Card = ({id, title, description, price, coverImg, stats, location}) => {
  const {rating, reviewCount} = stats
  return (
    <div className='card' key={id}>
        <img src={coverImg} className='card--image'/>
        <div className='card--stats'>
            
            <span className='gray'>{rating} ({reviewCount}) • </span>
            <span className='gray'>USA</span>
        </div>
        <p>{title}</p>
        <p><span className='bold'>From ${price}</span> / person</p>
    </div>
  )
}

export default Card