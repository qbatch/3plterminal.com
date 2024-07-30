import React, { useState, lazy } from 'react'
import Form from 'react-bootstrap/Form';

import DemoImage from '../../../Static/demo-image.svg';
import HeadingIcon from '../../../Static/heading-top-icon.svg';
import ChatIcon from '../../../Static/chat-network.svg';

import { DemoWrapper } from './style'

const Button = lazy(() => import('../../Components/Button'));
const InputGroup = lazy(() => import('../../Components/Input'));

const Demo = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    company: '',
    description: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.username) newErrors.username = 'Username is required';
    if (!formValues.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formValues.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
    if (!formValues.company) newErrors.company = 'Company is required';
    if (!formValues.description) newErrors.description = 'Description is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle valid form submission
      console.log('Submitted form:', formValues);
    }
  };

  const inputFields = [
    { controlId: 'formUsername', label: 'Username', name: 'username', type: 'text', placeholder: 'Enter' },
    { controlId: 'formEmail', label: 'Email address', name: 'email', type: 'email', placeholder: 'Enter' },
    { controlId: 'formPhoneNumber', label: 'Phone NO#', name: 'phoneNumber', type: 'tel', placeholder: 'Enter' },
    { controlId: 'formCompany', label: 'Company', name: 'company', type: 'text', placeholder: 'Enter' },
  ];


  return (
    <DemoWrapper id='demo'>
      <div className='demo-wrapper'>
        <div className='demo-items first-item'>
          <div className='heading'>
            <h2>Book Free Demo <img className='heading-icon' src={HeadingIcon} title='HeadingIcon' alt="HeadingIcon" /></h2>
            <p>We created software to simplify FBA inbound prep, making it simple,</p>
            <p>easy, and accurate <span>— for you.</span></p>
          </div>
          <Form onSubmit={handleSubmit}>
            <div className='inputs-wrapper'>
              {inputFields.map((field) => {
                return (
                  <InputGroup
                    key={field.controlId}
                    controlId={field.controlId}
                    label={field.label}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    helperText={field.helperText}
                    value={formValues[field.name]}
                    onChange={handleInputChange}
                    error={errors[field.name]}
                  />
                )
              })}
            </div>
            <InputGroup
                as='textarea'
                controlId='formDescription'
                className="mt-4 pt-1"
                label='Description'
                name='description'
                placeholder='Enter'
                row={3}
                value={formValues.description}
                onChange={handleInputChange}
                error={errors.description}
              />
            <Button image={ChatIcon} type="submit">Start Demo</Button>
          </Form>
        </div>
        <div className='demo-items'>
          <img src={DemoImage} title="DemoImage" alt="DemoImage" />
        </div>
      </div>
    </DemoWrapper>
  )
}

export default Demo
