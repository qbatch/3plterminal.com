import React from 'react'
import { FirstTabWrapper } from './style'


const FirstTab = ({ title, data, checkboxImage, graphImage }) => {
  return (
    <FirstTabWrapper>
      <div className='box'>
        <h2>{title}</h2>
        <div className='box-items-wrapper'>
          {data.map((item, index) => (
            <div key={index} className='bar-item'>
              <img src={checkboxImage} alt="Checkbox" />
              <div className='content-item'>
                <h3>{item.heading}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='box'>
        <img className='graph-image' src={graphImage} alt="Graph" />
      </div>
    </FirstTabWrapper>
  );
};


export default FirstTab
