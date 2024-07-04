import React from 'react'
import DelayWeb from '../../../Static/No-More-Delays_v-copy.svg'
import DelayMobile from '../../../Static/no-more-delay-mobile.svg'
import { NoMoreDelaysWrapper } from './style'

const NoMoreDelays = () => {
  return (
    <NoMoreDelaysWrapper>
      <img className='web-image' src={DelayWeb} alt={DelayWeb} />
      <img className='mobile-image' src={DelayMobile} alt={DelayMobile} />
    </NoMoreDelaysWrapper>
  )
}

export default NoMoreDelays
