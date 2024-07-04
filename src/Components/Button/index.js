import React from 'react';
import ChatIcon from '../../../Static/chat-network.svg'
import { ButtonStyleWrapper } from './style';

const Button = (props) => {
  const { icon, image, children, variant, alt, onClick,...rest } = props;
  return (
    <ButtonStyleWrapper {...rest} onClick={onClick} variant={variant}>
        {image ? <img src={ChatIcon || image} alt={alt}/> : null}
        {children}
    </ButtonStyleWrapper>
  );
};

export default Button;
