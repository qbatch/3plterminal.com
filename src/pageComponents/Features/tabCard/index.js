import React from 'react'
import { MainImage } from 'gatsby-plugin-image';

import { FirstTabWrapper } from './style'


const FirstTab = ({ title, data, checkboxImage, graphImage }) => {
  return (
    <FirstTabWrapper>
      <div className='box'>
        <h2>{title}</h2>
        <div className='box-items-wrapper'>
          {data.map((item, index) => (
            <div key={index} className='bar-item'>
              <MainImage src={checkboxImage} loading='lazy' title='Checkbox' alt="Checkbox" />
              <div className='content-item'>
                <h3>{item.heading}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='box'>
        <MainImage className='graph-image' src={graphImage} title='Graph' alt="Graph" />
      </div>
    </FirstTabWrapper>
  );
};


export default FirstTab
