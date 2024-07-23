import React from 'react'
import { CardWrapper } from './style'

const Card = ({heading,CardIcon,text}) => {
  return (
    <CardWrapper>
      <div className='card-item'>
        <img src={CardIcon} loading='lazy' title='CardIcon' alt='CardIcon'/>
        <div className='content'>
          <h3>{heading}</h3>
          <p>{text}</p>
        </div>
      </div>
    </CardWrapper>
  )
}

export default Card
