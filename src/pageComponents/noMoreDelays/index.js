import React, { Suspense } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import Button from '../../../Static/button-2.svg'
import Heading from '../../../Static/no-more-lose-heading.svg'

import Container from '../../Components/Container'
import Loader from '../../Components/Loader'

import { NoMoreDelaysWrapper } from './style'

const NoMoreDelays = () => {

  return (
    <Suspense fallback={<Loader />}>
    <NoMoreDelaysWrapper>
      <Container>
      <ScrollAnimation animateIn="slideInLeft" delay={200}>
      <div className='banner'>
          <img className='heading' src={Heading} alt="Heading" title="Heading"/>
          <p>Ensure a smooth, profitable journey without</p>
          <p>sudden chargebacks and disruptions.</p>
          <a href='#'><img src={Button} alt="Button" title="Button"/> </a>
        </div>
        </ScrollAnimation>
      </Container>
    </NoMoreDelaysWrapper>
    </Suspense>
  )
}

export default NoMoreDelays
