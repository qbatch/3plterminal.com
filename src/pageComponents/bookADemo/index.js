import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import ChatIcon from '../../../Static/chat-network.svg'
import Button from '../../Components/Button';
import DemoImage from '../../../Static/demo-image.svg'
import HeadingIcon from '../../../Static/heading-top-icon.svg';
import InputGroup from '../../Components/Input';
import { DemoWrapper } from './style'

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
    { controlId: 'formPhoneNumber', label: 'Phone Number', name: 'phoneNumber', type: 'tel', placeholder: 'Enter' },
    { controlId: 'formCompany', label: 'Company', name: 'company', type: 'text', placeholder: 'Enter' },
    { controlId: 'formCompany', label: 'Company', name: 'company', type: 'text', placeholder: 'Enter' },
    { controlId: 'formDescription', label: 'Description', name: 'description', type: 'text', placeholder: 'Enter' }
  ];


  return (
    <DemoWrapper>
      <div className='demo-wrapper'>
        <div className='demo-items'>
          <div className='heading'>
            <h2>Book Free Demo <img className='heading-icon' src={HeadingIcon} title='HeadingIcon' alt="HeadingIcon" /></h2>
            <p>We created software to simplify FBA inbound prep, making it simple,</p>
            <p>easy, and accurate <span>— for you.</span></p>
          </div>
          <Form onSubmit={handleSubmit}>
            <div className='inputs-wrapper'>
              {inputFields.map((field, index) => {
                if (index === 4) {
                  return (
                    <div className='select-wrapper'>
                      <label>Features</label>
                      <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </div>
                  )
                }

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
