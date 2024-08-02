import React, { lazy, Suspense } from 'react'
import Marquee from 'react-fast-marquee';

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

const Container = lazy(() => import('../../Components/Container'));

const IntegrateWithECommerce = () => {
  const data = [
    {
      img:Amazon,
      title:'Amazon',
      alt:'Amazon'

    },
    {
      img:Walmart,
      title:'Walmart',
      alt:'Walmart'
    },
    {
      img:Shopify,
      title:'Shopify',
      alt:'Shopify'
    },
    {
      img:WooCommerce,
      title:'WooCommerce',
      alt:'WooCommerce'
    },
    {
      img:Magento,
      title:'Magento',
      alt:'Magento'
    },
    {
      img:BigCommerce,
      title:'BigCommerce',
      alt:'BigCommerce'
    },
    {
      img:Ebay,
      title:'Ebay',
      alt:'Ebay'
    },
  ]
  return (
    <IntegrateWithECommerceWrapper>
      <Container>
        <div className='header'>
          <h2>Integrate with <span><img src={HeadingIcon} loading='lazy' alt="HeadingIcon" title='HeadingIcon' />E-commerce</span> Marketplaces</h2>
          <img className='roll-image' loading='lazy' src={ArrowIcon} title="ArrowIcon" alt="ArrowIcon"/>
          <p>Our Prep and Pack Software makes it easy to create, add, or customize any integration suitable for your business.</p>
        </div>
        <Suspense fallback={null}>
        <Marquee
        //  gradient={true}
        //  gradientWidth="15%"
         speed={50}
         direction="right"
        >
          <div>
        {data.map((item,index) => (
          <img className={`image-${index}`} loading='lazy' key={index} src={item.img} title={item.title} alt={item.alt} />
        ))}
        </div>
      </Marquee>
      </Suspense>
      </Container>
    </IntegrateWithECommerceWrapper>
  )
}

export default IntegrateWithECommerce
