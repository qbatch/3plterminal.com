import React from 'react'
import Bif from '../../../Static/Bif-Farewell.svg'
import BifMobile from '../../../Static/Bif-Farewell_v2.svg'
import { EmbraceSectionWrapper } from './style'

const EmbraceSection = () => {
  return (
    <EmbraceSectionWrapper>
      <img className='web-image' src={Bif} title='Bif' alt="Bif"/>
      <img className='mobile-image' src={BifMobile} title='BifMobile' alt="BifMobile"/>
    </EmbraceSectionWrapper>

  )
}

export default EmbraceSection
