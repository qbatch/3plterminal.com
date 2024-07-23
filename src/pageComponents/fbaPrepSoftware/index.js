import React, { lazy } from 'react'

import MainBannerImage from '../../../Static/main-banner-image.svg'
import DownArrow from '../../../Static/spring-roll.svg'

import { FbaPrepSoftwareWrapper } from './style'

const Button  = lazy(() => import('../../Components/Button'));

const FbaPrepSoftware = () => {
  return (
    <FbaPrepSoftwareWrapper id="home">
      <img className='arrow-image' src={DownArrow} loading='lazy' alt='DownArrow' title='DownArrow' />
     <h1>FBA Prep and Pack Software</h1>
     <h2>Neat, Fast, and Accurate Prepping Experiences</h2>
     <p>After years of struggling with prep and pack seller inefficiencies, gazillion PDF files, label resizing tools,
       and bundles of labels, we decided to develop the simplest and most efficient FBA Prep software available!</p>
       <div className='buttons-group'>
       <a href='#demo'><Button image={true}>Book Free Demo</Button></a>
       </div>
       <img className='banner-image' loading='lazy' title='banner-image' src={MainBannerImage} alt="banner-image"/>
    </FbaPrepSoftwareWrapper>
  )
}

export default FbaPrepSoftware
