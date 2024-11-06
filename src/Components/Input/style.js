import styled from "styled-components";

const InputWrapper = styled.div`
  label{
    font-size: 16px;
    font-weight: ${({theme}) => theme.fontWeight.regular};
    line-height: 14px;
    text-align: left;
    color:${({theme}) => theme.colors.bodyText};
}
input{
  border:0.5px solid ${({theme}) => theme.colors.roundStroke};
  padding: 11px 12px 11px 12px;
  border-radius: 8px;
  font-size: 17px;
  font-weight: ${({theme}) => theme.fontWeight.regular};
  line-height: 18px;
  text-align: left;
  color:${({theme}) => theme.colors.bodyTextVariant};
}

`;
export { InputWrapper }