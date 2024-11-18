import React, { useState, lazy, Suspense } from 'react'
import Form from 'react-bootstrap/Form';
import ScrollAnimation from 'react-animate-on-scroll';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import PhoneInput from 'react-phone-input-2';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { MainImage } from 'gatsby-plugin-image';

import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-input-2/lib/style.css';

import DemoImage from '../../../Static/demo-image.svg';
import HeadingIcon from '../../../Static/heading-top-icon.svg';
import ChatIcon from '../../../Static/chat-network.svg';

import Loader from '../../Components/Loader';

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

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ phoneNumber: '' });

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
  const handlePhoneChange = (value) => {
    setFormValues({
      ...formValues,
      phoneNumber: value // Update phone number separately
    });
    setErrors({
      ...errors,
      phoneNumber: ''
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.username) newErrors.username = 'Username is required';
    if (!formValues.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S{2}/.test(formValues.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formValues.phoneNumber){
      newErrors.phoneNumber = 'Phone Number is required';
    }else if(!isValidPhoneNumber(`+${formValues.phoneNumber}`)){
      newErrors.phoneNumber = 'Phone Number is not correct';
    }
    if (!formValues.company) newErrors.company = 'Company is required';
    if (!formValues.description) newErrors.description = 'Description is required';
    console.log(isValidPhoneNumber)
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsLoading(true);
      emailjs.send(
        'service_13d52i6',
        'template_3ktwn7c',
        {
          to_name: formValues.username,
          from_name: "Qbatch",
          name: formValues.username,
          email: formValues.email,
          phone: formValues.phoneNumber,
          company: formValues.company,
          message: formValues.description
        },
        'bnYC0PBrXo2F-NeF0'
      ).then((response) => {
        // console.log('Email sent successfully:', response);
        toast.success('Mail Send successfully!');
        setFormValues({
          username: '',
          email: '',
          phoneNumber: '',
          company: '',
          description: ''
        });
      }).catch((error) => {
        console.error('Email sending failed:', error);
        toast.error('Failed to send the form. Please try again.');
      }).finally(() => {
        setIsLoading(false);
      });
    }   
  };

  const inputFields = [
    { controlId: 'formUsername', label: 'Username', name: 'username', type: 'text', placeholder: 'Enter' },
    { controlId: 'formEmail', label: 'Email Address', name: 'email', type: 'email', placeholder: 'Enter' },
    { controlId: 'formCompany', label: 'Company', name: 'company', type: 'text', placeholder: 'Enter' },
  ];


  return (
    <Suspense fallback={<Loader />}>
      <DemoWrapper id='demo'>
        <div className='demo-wrapper'>
          <ScrollAnimation animateIn="slideInLeft" delay={200} className='demo-items first-item'>
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
                <div>
                <label>Phone Number</label>
                <PhoneInput
                  country={'us'}
                  value={formValues.phoneNumber}
                  onChange={handlePhoneChange}
                  placeholder="Enter phone number"
                  inputStyle={{ width: '100%' }}
                />
                {errors.phoneNumber && <p style={{ color: 'red', fontSize: 12 }}>{errors.phoneNumber}</p>}
                </div>
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
          </ScrollAnimation>
          <ScrollAnimation animateIn="slideInRight" delay={200} className='demo-items' >
            <MainImage src={DemoImage} title="DemoImage" alt="DemoImage" />
          </ScrollAnimation>
          <ToastContainer position="top-right" autoClose={5000} />
        </div>
        {isLoading && <div className='loader-wrapper'><Loader className="loader" normal="lite" /></div>}
      </DemoWrapper>
    </Suspense>
  )
}

export default Demo
