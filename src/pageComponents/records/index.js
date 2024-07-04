import React from 'react'
import Container from '../../Components/Container'
import { RecordsWrapper } from './style'

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
      </Container>
    </RecordsWrapper>
  )
}

export default Records
