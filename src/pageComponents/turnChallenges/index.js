import React, { lazy } from 'react'

import HeadingIcon from '../../../Static/heading-top-icon.svg';
import Factor from '../../../Static/Factors.svg';
import WithSoftware from '../../../Static/with-Software.svg';
import WithOutSoftware from '../../../Static/without-Software.svg';

import { TurnChallengesWrapper } from './style'
import Slider from '../../Components/Slider';

const Container = lazy(() => import('../../Components/Container'));


const TurnChallenges = () => {
  const data = [
    {
      header: { imgSrc: Factor, title: 'Factors' },
      content: [
        'Compliance Confidence',
        'Time-Efficient Prep',
        'Inventory Management',
        'Simplified Shipping',
        'Insightful Decision-Making',
        'Efficient Order Processing'
      ]
    },
    {
      header: { imgSrc: WithOutSoftware, title: 'Without Software' },
      content: [
        'Complying with Amazons evolving guidelines is daunting.',
        'Spending too much time on prep tasks.',
        'Overstocking or stockouts lead to missed sales.',
        'Choosing shipping methods and ensuring timely deliveries',
        'Limited insights hinder growth.',
        'Limited insights hinder growth.',
      ]
    },
    {
      header: { imgSrc: WithSoftware, title: 'With Software' },
      content: [
        'Total compliance and reduced risk of account issues.',
        'Handle prep efficiently, freeing your business toward focused growth',
        'Get real-time control over inventory levels, preventing stockouts.',
        'Simplify shipping decisions, offering cost-effective methods and real-time tracking.',
        'Make business-critical decisions via insightful reports and analytics.',
        'Make business-critical decisions via insightful reports and analytics. ',
      ]
    }
  ];
  const renderItem = (item, index) => (
    <div className='items' key={item.id || index}>
      <div className={`header ${index === 0 ? 'header' : index === 1 ? 'header-2' : index === 2 ? 'header-3' : ''}`}>
        <img src={item.header.imgSrc} loading='lazy' title={item.header.title} alt={item.header.title} />
        <h3>{item.header.title}</h3>
      </div>
      <div className={`content ${index === 2 ? 'content-2' : ''}`}>
        {item.content.map((text, textIndex) => (
          <p className='label' key={textIndex}>{text}</p>
        ))}
      </div>
    </div>
  );
  
  return (
    <TurnChallengesWrapper>
      <Container>
        <h2>Turn challenges into wins with our prep and pack software powering your 3PL centers — <span>building a thriving business.<img src={HeadingIcon} al="HeadingIcon" /></span></h2>
        <div className='items-wrapper'>
        {data.map((item, index) => renderItem(item, index))}
        </div>
        <div className='items-wrapper slider-div'>
        <Slider data={data} renderItem={renderItem} />
        </div>
      </Container>
    </TurnChallengesWrapper>
  )
}

export default TurnChallenges
