import React, { useState, lazy, Suspense } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Form } from 'react-bootstrap'

import ArrowDown from '../../../Static/spring-roll-left.svg'
import Checkbox from '../../../Static/checkbox.svg'
import Graph from '../../../Static/chart-image.svg'
import Tab2 from '../../../Static/tab2.svg'
import Tab3 from '../../../Static/tab3.svg'
import Tab4 from '../../../Static/billing.svg'
import Tab5 from '../../../Static/action-log.svg'
import Arrow from '../../../static/arrow-down.svg'

import Loader from '../../Components/Loader'

import { FeaturesTabWrapper } from './style'

const FirstTab = lazy(() => import('./tabCard'));
const Container = lazy(() => import('../../Components/Container'));

const dataTab1 = [
  {
    heading: 'Product Receiving and Storage',
    text: 'Eliminate possible errors in product receiving, storage, and shipment preparation processes.',
  },
  {
    heading: 'Efficient Vendor and Supplier Management',
    text: 'Track supply chain operations ensuring end-to-end consistency.',
  },
  {
    heading: 'Bulk Order Volume',
    text: 'Make space before time for large-scale product bundles and volumes.',
  },
];
const dataTab2 = [
  {
    heading: 'Smart Prepping Instructions',
    text: 'Prepping decisions based on your product type, expiration date, and fragility complying with the marketplace’s requirements. preparation processes.',
  },
  {
    heading: 'Compliant with Packaging SOPs',
    text: 'Pack single-SKU or multi-SKU cartons and generate 2D carton labels without multiple touches during LTL shipments.',
  },
  {
    heading: 'Advanced-level Inventory Management',
    text: 'Seamlessly add SKUs, create bundles, and forecast inventory levels.',
  },
  {
    heading: 'Accurate Labelling',
    text: 'Ensure correct labeling to prevent delays or extra fees during Amazons product receiving process.',
  },
  {
    heading: 'Advanced-level Inventory Management',
    text: 'Seamlessly add SKUs, create bundles, and forecast inventory levels.',
  },
  {
    heading: 'PO Builder Integration',
    text: 'Create purchase orders through manual input or file uploads using the integrated PO Builder feature.',
  },
  {
    heading: 'Batch Processing',
    text: 'Group similar tasks for batch processing, saving time and resources while maintaining accuracy.',
  },
];
const dataTab3 = [
  {
    heading: 'Multiple Warehouse Shipping Management ',
    text: 'Ensure faster shipping across multiple warehouses and build a satisfied client base. ',
  },
  {
    heading: 'Turnkey Shipment Creation',
    text: 'Manage the entire shipment process from carton and pallet creation to accurate labeling.',
  },
  {
    heading: 'Real-Time Tracking',
    text: 'Track orders and inventory in real time and get instant updates.',
  },
  {
    heading: 'Quality Control Checks',
    text: 'Confirm your products meet that marketplace’s standards before shipping, reducing the likelihood of returns or complaints.',
  },
];
const dataTab4 = [
  {
    heading: 'Focused and Happy Team (Operations)',
    text: 'Automate billing, shipment tracking, and spreadsheet management freeing up your teams valuable time.',
  },
  {
    heading: 'Integrated Billing: Billing ',
    text: 'Ditch hiring separate billing and packaging teams when software does all the work.',
  },
  {
    heading: 'Invoicing for Financial Transparency',
    text: 'Smart billing module to charge your users for shipments or scheduled cycles for labeling, storage, and shipment services.',
  },
];
const dataTab5 = [
  {
    heading: 'Detailed Action Log',
    text: 'Access and maintain a detailed action log for each product, providing a thorough history for enhanced traceability.',
  },
  {
    heading: 'Reporting and Analytics ',
    text: 'Access real-time insights like inventory levels, processing times, and revenue for data-driven decisions and performance monitoring.',
  },
  {
    heading: 'In-App Support Tickets',
    text: 'Foster linear communication with users at any stage of the prep process through our integrated built-in Support Tickets feature.',
  },
];
const tabsData = [
  {
    id: 1,
    label: 'Inbound Receiving',
    content: <FirstTab
      title="Inbound Receiving"
      data={dataTab1}
      checkboxImage={Checkbox}
      graphImage={Graph}
    />
  },
  {
    id: 2,
    label: 'Prep and Pack',
    content: <FirstTab
      title="Prep and Pack"
      data={dataTab2}
      checkboxImage={Checkbox}
      graphImage={Tab2}
    />
  },
  {
    id: 3,
    label: 'Outbound Shipments',
    content: <FirstTab
      title="Outbound Shipments"
      data={dataTab3}
      checkboxImage={Checkbox}
      graphImage={Tab3}
    />
  },
  {
    id: 4,
    label: 'Billing',
    content: <FirstTab
      title="Billing"
      data={dataTab4}
      checkboxImage={Checkbox}
      graphImage={Tab4}
    />
  },
  {
    id: 5, label: 'Actions Logs & Support', content: <FirstTab
      title="Actions Logs & Support"
      data={dataTab5}
      checkboxImage={Checkbox}
      graphImage={Tab5}
    />
  }
];

const FeaturesTab = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  return (
    <Suspense fallback={<Loader />}>
    <Container>
    <ScrollAnimation animateIn="fadeIn" delay={400}>
      <FeaturesTabWrapper id="features">
        <p className='label-text'>Features</p>
        <div className='title'>
          <h2>Tired of under reported items and frustrated customers? Give them reasons why <span>you're different and trustworthy.</span></h2>
          <img src={ArrowDown} title='banner-image' alt="arrow" />
        </div>
        <div className='tabs-wrapper'>
          <div className='select-overlay-wrapper'>
          <img className='arrow-select' src={Arrow} alt="Arrow" title='Arrow' loading='lazy'/>

          <Form.Select className='select-wrapper' aria-label="Default select example" value={activeTab} onChange={(e) => setActiveTab(parseInt(e.target.value))}>
            {tabsData.map(tab => (
              <option
                key={tab.id}
                value={tab.id}
                className={activeTab === tab.id ? 'active' : ''}
              >
                {tab.label}
              </option>
            ))}
          </Form.Select>
          </div>
          {tabsData.map(tab => (
            <p
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? 'active' : ''}
            >
              {tab.label}
            </p>
          ))}
        </div>
        <div className='content-wrapper'>
          {tabsData.find(tab => tab.id === activeTab)?.content}
        </div>
      </FeaturesTabWrapper>
      </ScrollAnimation>
    </Container>
    </Suspense>
  )
}

export default FeaturesTab
