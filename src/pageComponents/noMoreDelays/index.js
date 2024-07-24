import React from 'react'
import Container from '../../Components/Container'

import Button from '../../../Static/button-2.svg'
import DelayMobile from '../../../Static/no-more-delay-mobile.svg'

import { NoMoreDelaysWrapper } from './style'

const NoMoreDelays = () => {
  return (
    <NoMoreDelaysWrapper>
      <Container>
      {/* <img className='web-image' title='DelayWeb' loading='lazy' src={DelayWeb} alt='DelayWeb' />
      <img className='mobile-image' title='DelayMobile' loading='lazy' src={DelayMobile} alt='DelayMobile' /> */}
      <div className='banner'>
          <h2>No More Delays on Revenue Loss</h2>
          <p>Ensure a smooth, profitable journey without</p>
          <p>sudden chargebacks and disruptions.</p>
          <a href='#'><img src={Button} alt="Button" title="Button"/> </a>
        </div>
      </Container>
    </NoMoreDelaysWrapper>
  )
}

export default NoMoreDelays
