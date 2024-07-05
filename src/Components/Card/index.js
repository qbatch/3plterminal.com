import React from 'react'
import { CardWrapper } from './style'

const Card = ({heading,CardIcon,text, title, alt}) => {
  return (
    <CardWrapper>
      <div className='card-item'>
        <img src={CardIcon} title={title} alt={alt}/>
        <div className='content'>
          <h3>{heading}</h3>
          <p>{text}</p>
        </div>
      </div>
    </CardWrapper>
  )
}

export default Card
