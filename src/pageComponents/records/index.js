import React, { lazy, Suspense } from 'react'
import Marquee from 'react-fast-marquee';
import ScrollAnimation from 'react-animate-on-scroll';

import { RecordsWrapper } from './style'

const Container = lazy(() => import('../../Components/Container'));

const Records = () => {
  const RecordsData = [
    {
      count: '100K+',
      text: 'Accuracy Rate',
      delay: 100,
      direction: 'slideInLeft'
    },
    {
      count: '1000+',
      text: 'Total Received Batche’s',
      delay: 500,
      direction: 'slideInLeft'
    },
    {
      count: '1000+',
      text: 'Total Shipped Items',
      delay: 700,
      direction: 'slideInLeft'
    },
  ]
  return (
    <RecordsWrapper>
      <Container>
        <div className='text-overflow-ui'>
          {RecordsData.map((item, index) => (
            <ScrollAnimation animateIn={item.direction} delay={item.delay}>
              <div key={index} className='count-item'>
                <h2>{item.count}</h2>
                <h3>{item.text}</h3>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        <div className='marque-slider'>
          <Suspense fallback={null}>
            <Marquee
              speed={50}
              direction="right"
            >
              <div className='card-wrapper'>
                {RecordsData.map((item, index) => (
                  <div key={index} className='count-item'>
                    <h2>{item.count}</h2>
                    <h3>{item.text}</h3>
                  </div>
                ))}
              </div>
            </Marquee>
          </Suspense>
        </div>
      </Container>
    </RecordsWrapper>
  )
}

export default Records
