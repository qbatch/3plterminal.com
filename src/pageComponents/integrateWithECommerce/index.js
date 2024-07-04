import React from 'react'
import Container from '../../Components/Container'
import HeadingIcon from '../../../Static/heading-top-icon.svg';
import ArrowIcon from '../../../Static/spring-roll.svg';
import Amazon from '../../../Static/amazon.svg'
import Walmart from '../../../Static/walmart.svg'
import Shopify from '../../../Static/shopify.svg'
import WooCommerce from '../../../Static/wocommerce.svg'
import Magento from '../../../Static/magento.svg'
import BigCommerce from '../../../Static/bigcommerce.svg'
import Ebay from '../../../Static/ebay.svg'
import { IntegrateWithECommerceWrapper } from './style'
import Marquee from 'react-fast-marquee';

const IntegrateWithECommerce = () => {
  const data = [
    {
      img:Amazon
    },
    {
      img:Walmart
    },
    {
      img:Shopify
    },
    {
      img:WooCommerce
    },
    {
      img:Magento
    },
    {
      img:BigCommerce
    },
    {
      img:Ebay
    },
  ]
  return (
      <Container>
    <IntegrateWithECommerceWrapper>
        <div className='header'>
          <h2>Integrate with <span><img src={HeadingIcon} alt="HeadingIcon" />E-commerce</span> Marketplaces</h2>
          <img className='roll-image' src={ArrowIcon} alt="ArrowIcon"/>
          <p>Our Prep and Pack Software makes it easy to create, add, or customize any integration suitable for your business.</p>
        </div>
        <Marquee
        //  gradient={true}
        //  gradientWidth="15%"
         speed={50}
         direction="right"
        >
          <div>
        {data.map((item,index) => (
          <img className={`image-${index}`} key={index} src={item.img} />
        ))}
        </div>
      </Marquee>
    </IntegrateWithECommerceWrapper>
      </Container>
  )
}

export default IntegrateWithECommerce
