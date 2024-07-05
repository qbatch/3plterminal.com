import React from 'react'
import Button from '../../Components/Button'
import MainBannerImage from '../../../Static/main-banner-image.svg'
import DownArrow from '../../../Static/spring-roll.svg'
import { FbaPrepSoftwareWrapper } from './style'

const FbaPrepSoftware = () => {
  return (
    <FbaPrepSoftwareWrapper>
      <img className='arrow-image' src={DownArrow} alt='DownArrow' title='DownArrow' />
     <h1>FBA Prep and Pack Software n</h1>
     <h2>Neat, Fast, and Accurate Prepping Experiences</h2>
     <p>After years of struggling with prep and pack seller inefficiencies, gazillion PDF files, label resizing tools,
       and bundles of labels, we decided to develop the simplest and most efficient FBA Prep software available!</p>
       <div className='buttons-group'>
        <Button variant="outline">Sign Up</Button>
        <Button image={true}>Book Free Demo</Button>
       </div>
       <img className='banner-image' title='banner-image' src={MainBannerImage} alt="banner-image"/>
    </FbaPrepSoftwareWrapper>
  )
}

export default FbaPrepSoftware
