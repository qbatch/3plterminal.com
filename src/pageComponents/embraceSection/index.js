import React, { Suspense } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { MainImage } from 'gatsby-plugin-image'

import Button from '../../../Static/button-1.svg'
import Heading from '../../../Static/bid-farewell-heading.svg'

import Container from '../../Components/Container'
import Loader from '../../Components/Loader'

import { EmbraceSectionWrapper } from './style'

const EmbraceSection = () => {
  
  return (
    <Suspense fallback={<Loader />}>
    <EmbraceSectionWrapper>
      <ScrollAnimation animateIn="slideInLeft" delay={200}>
      <Container>
        <div className='banner'>
          <MainImage className='heading' src={Heading} alt="Heading" title="Heading" />
          <p>Spreadsheets for inventory management and visibility</p>
          <p>Confusing and overwhelming fulfillment invoices</p>
          <p>Inability of your 3PL to manage high order volume</p>
          <p>Labelling and shipping orders yourself to end-customers</p>
          <a href='#demo'><MainImage src={Button} alt="Button" title="Button"/> </a>
        </div>
      </Container>
      </ScrollAnimation>
    </EmbraceSectionWrapper>
</Suspense>
  )
}

export default EmbraceSection
