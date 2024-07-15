import React, { lazy } from 'react'

import { RecordsWrapper } from './style'
import Marquee from 'react-fast-marquee';

const Container = lazy(() => import('../../Components/Container'));

const Records = () => {
  const RecordsData = [
    {
      count: '100K+',
      text: 'Accuracy Rate'
    },
    {
      count: '1000+',
      text: 'Total Received Batche’s'
    },
    {
      count: '1000+',
      text: 'Total Shipped Items'
    },
  ]
  return (
    <RecordsWrapper>
      <Container>
        <div className='text-overflow-ui'>
          {RecordsData.map((item, index) => (
            <div key={index} className='count-item'>
              <h2>{item.count}</h2>
              <h3>{item.text}</h3>
            </div>
          ))}
        </div>
          <div className='marque-slider'>
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
          </div>
      </Container>
    </RecordsWrapper>
  )
}

export default Records
