import React from 'react'
import star from '../images/star.png'

const Card = ({item}) => {
  const {coverImg, stats, openSpots, location, title, price } = item

  let badgeText;
  if(openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (location === 'Online') {
    badgeText = 'ONLINE'
  }

  return (
    <div className='card'>
        {badgeText && <div className='card--badge'>{badgeText}</div>}
        <img src={coverImg} className='card--image'/>
        <div className='card--stats'>
            <img src={star} className='card--star' />
            <span className='gray'>{stats.rating} ({stats.reviewCount}) • </span>
            <span className='gray'>{location}</span>
        </div>
        <p className='card--title'>{title}</p>
        <p className='card--price'><span className='bold'>From ${price}</span> / person</p>
    </div>
  )
}

export default Card