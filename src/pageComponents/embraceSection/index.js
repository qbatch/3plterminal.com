import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import Button from '../../../Static/button-1.svg'
import Heading from '../../../Static/bid-farewell-heading.svg'

import { EmbraceSectionWrapper } from './style'
import Container from '../../Components/Container'

const EmbraceSection = () => {
  
  return (
    <EmbraceSectionWrapper>
      <ScrollAnimation animateIn="slideInLeft" delay={200}>
      <Container>
        <div className='banner'>
          <img className='heading' src={Heading} alt="Heading" title="Heading" />
          <p>Spreadsheets for inventory management and visibility</p>
          <p>Confusing and overwhelming fulfillment invoices</p>
          <p>Inability of your 3PL to manage high order volume</p>
          <p>Labelling and shipping orders yourself to end-customers</p>
          <a href='#'><img src={Button} alt="Button" title="Button"/> </a>
        </div>
      </Container>
      </ScrollAnimation>
    </EmbraceSectionWrapper>

  )
}

export default EmbraceSection
