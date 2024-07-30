import React, { lazy } from 'react'

import HeadingIcon from '../../../Static/heading-top-icon.svg';
import ArrowIcon from '../../../Static/spring-roll.svg';
import Card1 from '../../../Static/card-1.svg';
import Card2 from '../../../Static/card-2.svg';
import Card3 from '../../../Static/card-3.svg';
import Card4 from '../../../Static/card-4.svg';
import Card5 from '../../../Static/card-5.svg';
import Card6 from '../../../Static/card-6.svg';
import Card7 from '../../../Static/card-7.svg';
import Card8 from '../../../Static/card-8.svg';

import { ExploreContentWrapper } from './style';

const Card = lazy(() => import('../../Components/Card'));
const ResponsiveSlider = lazy(() => import('../../Components/Slider'));
const Container = lazy(() => import('../../Components/Container'));
const Button = lazy(() => import('../../Components/Button'));

const ExploreContent = () => {
  const Data = [
    {
      heading: 'Add Custom Fields For Better Visibility',
      text: 'Customize fields to capture vital product details for easy prep and management.',
      icon: Card1,
      title:'Card1'
    },
    {
      heading: 'PO Builder Integration',
      text: 'Create purchase orders through manual input or file uploads using the integrated PO Builder feature.',
      icon: Card2,
      title:'Card2'
    },
    {
      heading: 'Product Receiving & Storage',
      text: 'Eliminate possible errors in product receiving, storage, and shipment preparation processes.',
      icon: Card3,
      title:'Card3'
    },
    {
      heading: 'Detailed Action Log',
      text: 'Access and maintain a detailed action log for each product, providing a thorough history for enhanced traceability.',
      icon: Card4,
      title:'Card4'
    },
    {
      heading: 'In-App Support Tickets',
      text: 'Foster linear communication with users at any stage of the prep process through our integrated built-in Support Tickets feature.',
      icon: Card5,
      title:'Card5'
    },
    {
      heading: 'Efficient Shipment Management',
      text: 'Expedite shipment processes like Shipment Creation, Shipping, and integrated Box Content tracking when shipping to Amazon and Walmart.',
      icon: Card6,
      title:'Card6'
    },
    {
      heading: 'Invoicing for Financial Transparency',
      text: 'Smart billing module to charge your users for shipments or scheduled cycles for labeling, storage, and shipment services. ',
      icon: Card7,
      title:'Card7'
    },
    {
      heading: 'user Custom Profiles',
      text: 'Customize profiles to match marketplace nuances and business needs effortlessly',
      icon: Card8,
      title:'Card8'
    },
  ]
  const cardRenderItem = (item, index) => (
    <Card key={index} index={index} CardIcon={item.icon} text={item.text} heading={item.heading} />
  );
  return (
    <Container>
      <ExploreContentWrapper id='explore'>
        <div className='header-wrapper'>
          <img className='arrow-image' src={ArrowIcon} title='ArrowIcon' alt="ArrowIcon" />
          <h2><img src={HeadingIcon} title='HeadingIcon' alt="HeadingIcon" /> Explore Full-suite of Prep, Pack,
            and Ship Features</h2>
        </div>
        <div className='card-items-wrapper'>
          {Data.map((item, index) => (
            <Card key={index} CardIcon={item.icon} title={item.title} text={item.text} heading={item.heading} />
          ))}
        </div>
        <ResponsiveSlider data={Data} renderItem={cardRenderItem} />
        <Button>Wanna know how a specific feature works?</Button>
      </ExploreContentWrapper>
    </Container>
  )
}

export default ExploreContent
