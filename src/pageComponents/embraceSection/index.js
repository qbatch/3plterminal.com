import React from 'react'

import Button from '../../../Static/button-1.svg'
import BifMobile from '../../../Static/Bif-Farewell_v2.svg'

import { EmbraceSectionWrapper } from './style'
import Container from '../../Components/Container'

const EmbraceSection = () => {
  return (
    <EmbraceSectionWrapper>
      <Container>
        <div className='banner'>
          <h2>Bid farewell to ...</h2>
          <p>Spreadsheets for inventory management and visibility</p>
          <p>Confusing and overwhelming fulfillment invoices</p>
          <p>Inability of your 3PL to manage high order volume</p>
          <p>Labelling and shipping orders yourself to end-customers</p>
          <a href='#'><img src={Button} alt="Button" title="Button"/> </a>
        </div>
      </Container>
    </EmbraceSectionWrapper>

  )
}

export default EmbraceSection
