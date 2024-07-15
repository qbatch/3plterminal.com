import React from 'react'

import HeadingIcon from '../../../Static/heading-top-icon.svg';
import ArrowIcon from '../../../Static/spring-roll-left.svg';
import Container from '../../Components/Container';
import Accordion from '../../Components/Accordion';

import { AccordionSectionWrapper } from './style'

const AccordionSection = () => {
  const accordionItems = [
    {
      header: 'What is FBA prep center management software, and how can it benefit my business?',
      body: 'FBA prep center management software receives, prepares, stores, and ships product batches to their respective fulfillment centers. A good prep center software offers these features: inventory tracking, order management, barcode generation, packaging, quality control checks, batch processing, reporting, billing, and integrations. ',
      bodyExtra:'Software-enabled task automation benefits your business in various ways: real-time insights, improved team efficiency, reduced errors, enhanced customer satisfaction, and focused business growth'
    },
    {
      header: 'How does your software help streamline FBA prep processes for my center?',
      body: 'Our software for prepping services helps streamline FBA prep processes in several ways:',
      data: [
        { heading: 'Multiple Warehouse Shipping Management', text: 'Ensure faster shipping across numerous warehouses and build a satisfied client base.' },
        { heading: 'Focused and Happy Team (Operations)', text: 'Automate billing, shipment tracking, and spreadsheet management freeing up your teams valuable time.' },
        { heading: 'Integrated Billing', text: 'Ditch hiring separate billing and packaging teams when software does all the work.' },
        { heading: 'Error-free Receiving', text: 'Ensure complete deliveries and stay informed about potential damage or loss in advance.' },
        { heading: 'Efficient Vendor and Supplier Management', text: 'Track supply chain operations ensuring end-to-end consistency.' },
        { heading: 'Streamlined Communication', text: 'Centralized communication, eliminating the need for manual calls and intervention.' },
        { heading: 'Predictable Prepping Instructions', text: 'Prepping decisions based on your product type, expiration date, and fragility complying with the marketplace’s requirements. ' },
        { heading: 'Compliance with Packaging Requirements', text: 'Pack single-SKU or multi-SKU cartons and generate 2D carton labels without multiple touches during LTL shipments.' },
        { heading: 'Advanced-level Inventory Management', text: 'Pack single-SKU or multi-SKU cartons and generate 2D carton labels without multiple touches during LTL shipments.' },
        { heading: 'Turnkey Shipment Creation', text: 'Manage the entire shipment process from carton and pallet creation to accurate labeling.' },
        { heading: 'Real-Time Tracking', text: 'Track orders and inventory in real time and get instant updates.' },
        { heading: 'Faster Turnaround Times', text: 'Automate time-consuming tasks, reducing manual rework and ensuring quicker turnarounds.' },
        { heading: 'Focused and Happy Team (Operations)', text: 'Automate billing, shipment tracking, and spreadsheet management freeing up your teams valuable time.' },
        { heading: 'Keep Your Clients Updated', text: 'Keep clients informed with automated notifications for important updates and changes.' },
        { heading: 'Accurate Labelling', text: 'Ensure correct labeling prevents delays or extra fees during Amazons product-receiving process.' },
        { heading: 'Quality Control Checks', text: 'Confirm your products meet that marketplace’s standards before shipping, reducing the likelihood of returns or complaints.' },
        { heading: 'Batch Processing', text: 'Group similar batch-process tasks, saving time and resources while maintaining accuracy.' },
        { heading: 'Reporting and Analytics', text: 'Access real-time insights like inventory levels, processing times, and revenue for data-driven decisions and performance monitoring.' },
      ],
    },
    {
      header: 'Can your software integrate with my existing inventory management systems?',
      body: 'Yes, our software for prep centers integrates seamlessly with existing inventory management systems, ensuring smooth data flow and comprehensive operational oversight.'
    },
    {
      header: 'Is your FBA prep center management software compatible with all Amazon FBA requirements and regulations?',
      body: 'Yes, our FBA prep center software fully complies with all Amazon FBA requirements and regulations.'
    },
    {
      header: 'How user-friendly is your software? Do I need technical expertise to use it?',
      body: 'Our FBA prep center software is highly user-friendly, offering an intuitive interface and navigable features. You dont need extensive technical expertise to use it effectively. We provide easily available customer support to help you understand and use the software effectively.',
      bodyExtra:`Whether you're new to FBA prep management or experienced, our software is accessible for all skill levels.`
    },
    {
      header: 'Can I track multiple client accounts and shipments simultaneously using your software?',
      body: 'Yes, our automation software for prep centers allows you to track, manage, and monitor multiple client accounts and shipments within the same platform, simplifying your processes and providing a total shipment and order overview in real time.'
    },
    {
      header: 'Does your software offer automation features for labeling, packaging, and other repetitive tasks?',
      body: 'Yes, our software offers automation features for labeling, packaging, and other repetitive tasks involved in FBA prep processes. You can set up automated workflows to streamline these tasks, reducing manual effort and increasing efficiency. This automation helps save time and ensures consistency in your operations, ultimately improving productivity and reducing the risk of errors.'
    },
    {
      header:'How does your software handle inventory tracking and ensure accuracy?',
      body:'Our software facilitates inventory accuracy through real-time updates, barcode scanning, batch processing, quality control checks, and integration with multiple marketplaces, minimizing discrepancies and ensuring smooth operations.	'
    },
    {
      header:'What customer support and training options do you provide for your software users?',
      body:'We provide 24/7 customer support, online documentation, training resources like video tutorials, dedicated support representatives, and email/live chat assistance for users.'
    },
    {
      header:'Is your software scalable to accommodate the growth of my FBA prep center business?',
      body:'Yes, our software is scalable to accommodate the growth of your FBA prep center business by offering flexible pricing plans and customizable features to support your business as it expands. Additionally, our software is built on a robust infrastructure that can handle increased volumes of inventory, orders, and users as your business grows.',
      bodyExtra:`Whether you're managing a small operation or a large-scale facility, our software adapts well to your needs. `
    },
    {
      header:'What security measures does your software employ to protect sensitive business data?',
      body:'Our software for Amazon prep centers employs encryption, access control, regular security audits, data backups, and compliance with data protection regulations to protect sensitive business data.'
    },
    {
      header:`Can your software generate reports and analytics to help me analyze and improve my FBA prep center's performance?`,
      body:`Yes, our Amazon automation software for prep centers generates reports and analytics to help you analyze and improve your FBA prep center's performance. You can access key metrics such as inventory turnover, processing times, revenue, etc. These insights enable data-driven decision-making, allowing you to identify areas for improvement, optimize workflows, and enhance overall efficiency and profitability.`
    },
    {
      header:'What pricing plans are available for your FBA prep center management software, and what features are included in each plan?',
      body:'Our FBA prep center management software offers flexible pricing plans based on the number of clients per month, a trial version, and support packages for ease of use.'
    },
  ];
  return (
    <AccordionSectionWrapper>
      <Container>
       <div className='header'>
          <h2>Frequently Asked Questions<img src={HeadingIcon} title='HeadingIcon' alt="HeadingIcon" /></h2>
          <img className='roll-image' loading='lazy' src={ArrowIcon} title='ArrowIcon' alt="ArrowIcon"/>
        </div>
        <Accordion items={accordionItems} bodyExtra={true} defaultActiveKey="0" />
        </Container>
    </AccordionSectionWrapper>
  )
}

export default AccordionSection
