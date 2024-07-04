import React from 'react';
import { Form } from 'react-bootstrap';
import { InputWrapper } from './style';

const InputGroup = ({
  controlId,
  label,
  type,
  placeholder,
  helperText,
  value,
  onChange,
  error,
  name
}) => {
  return (
    <InputWrapper>
      <Form.Group controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          isInvalid={!!error}
          name={name}
        />
        <Form.Text className="text-muted">
          {helperText}
        </Form.Text>
        {error && <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>}
      </Form.Group>
    </InputWrapper>
  );
};

export default InputGroup;
