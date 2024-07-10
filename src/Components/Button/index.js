import React, { lazy } from 'react';
import ChatIcon from '../../../Static/chat-network.svg';
import { ButtonStyleWrapper } from './style';


const Button = (props) => {
  const { icon, image, children, variant, alt, title, onClick,...rest } = props;
  return (
    <ButtonStyleWrapper {...rest} onClick={onClick} variant={variant}>
        {image ? <img src={ChatIcon || image} loading='lazy' alt="ChatIcon" title={title}/> : null}
        {children}
    </ButtonStyleWrapper>
  );
};

export default Button;
