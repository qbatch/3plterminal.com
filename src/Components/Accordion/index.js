import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import plusIcon from '../../../Static/plus.svg';
import minusIcon from '../../../Static/minus.svg';  // Make sure this file exists
import { AccordionWrapper } from './style';
import Button from '../Button';

function AccordionComponent({ items, defaultActiveKey, bodyExtra }) {
  const [activeKey, setActiveKey] = useState(defaultActiveKey || null);
  const [visibleCount, setVisibleCount] = useState(3); 

  const handleShow = () => {
    setVisibleCount(visibleCount < items.length ? items.length : 3);
  };
  
  const handleToggle = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };
  const CustomAccordionHeader = ({ children }) => {
    return (
      <h3 className="accordion-header">
        {children}
      </h3>
    );
  };
  return (
    <AccordionWrapper>
      <Accordion activeKey={activeKey} onSelect={handleToggle}>
        {items.slice(0, visibleCount).map((item, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header as={CustomAccordionHeader}>
              <div className="d-flex w-100 align-items-center justify-content-between">
                <p className='heading-wrapper'>{item.header}</p>
                <img
                  src={activeKey === index.toString() ? minusIcon : plusIcon}
                  alt={activeKey === index.toString() ? 'Collapse' : 'Expand'}
                  title={activeKey === index.toString() ? 'Collapse' : 'Expand'}
                  className="ms-2"
                  loading='lazy'
                  style={{ width: '1em', height: '1em' }}
                />
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className='text-wrapper'>
              <p>{item.body}</p>
              {item.bodyExtra ? <p>{item.bodyExtra}</p> : null}
              </div>
              {item.data ? item.data.map((dataItem, dataIndex) => (
                <div className='heading-content' key={dataIndex}>
                  <p className='heading'>{dataItem.heading}</p>
                  <p>{dataItem.text}</p>
                </div>
              )) : null}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
        <Button className="show-button" onClick={handleShow}> {visibleCount < items.length ? 'Show More' : 'Show Less'}</Button>
    </AccordionWrapper>
  );
}

export default AccordionComponent;
