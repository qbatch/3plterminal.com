import styled from "styled-components";
import { media } from "../../theme/media-mixins";

const DemoWrapper = styled.div`
position: relative;
margin-bottom: 99px;
${media.sm`
  margin-bottom: 24px;
`}
button.Toastify__close-button.Toastify__close-button--light{
  margin-top:0;
}
input.form-control {
    height: 41px;
}
label {
    font-size: 16px;
    font-weight: 400;
    line-height: 14px;
    text-align: left;
    color: #535E63;
}
.loader-wrapper {
    position: absolute;
    top: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52%;
    background: #01204747;
    border-radius: 24px;
}
.select-wrapper {
    display: flex;
    flex-direction: column;
    grid-row-gap: 8px;
    label{
    font-size: 16px;
    font-weight: ${({theme}) => theme.fontWeight.regular};
    line-height: 24px;
    text-align: left;
}
    select{
    padding: 7.5px 12px;
    border-radius: 8px;
    border:0.5px solid ${({theme}) => theme.colors.roundStroke};
    padding: 11px 12px 11px 12px;
    border-radius: 8px;
    font-size: 17px;
    font-weight: ${({theme}) => theme.fontWeight.regular};
    line-height: 18px;
    text-align: left;
    color:${({theme}) => theme.colors.bodyText};
    cursor: pointer;
  }
}
  .first-item{
    box-shadow: 0px 1px 32px 0px #7777771A;
    border-radius: 0px 40px 40px 0px;
    padding: 71px 40px 71px 100px;
    ${media.sm`
    box-shadow:none;
      `}
    ${media.lg`
    padding: 32px;
      `}
    ${media.xs`
    padding: 24px;
      `}
  }
.demo-wrapper {
    display: flex;
    justify-content: space-between;
    ${media.sm`
    flex-direction:column;  
      `}
.demo-items{
  width: 100%;
  
  &:nth-child(2){
    display: flex;
    justify-content: center;
    align-items: center;
  }
    img.heading-icon{
      position:absolute;
      left:0;
      top:-30px;
    }
  }
  img{
    ${media.lg`
      max-width: 70%;
      `}
    ${media.sm`
      max-width: 100%;
      display: none;
      `}
  }
  form {
    margin-top:40px;
    .inputs-wrapper{ 
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    align-items: center;
    ${media.sm`
      grid-gap: 24px;
      grid-template-columns: 1fr;
      `}
  }
}
}
button{
  display: flex;
  margin-top: 48px;
  margin-left: auto;
  ${media.sm`
  margin-top:24px;
  margin-left: 0px;
    `}
}
.heading{
  h2{
    font-size: 48px;
    font-weight:${({theme}) => theme.fontWeight.bold};
    line-height: 64px;
    text-align: left;
    color:${({theme}) => theme.colors.primaryColor};
    position:relative;
    img{
      display:block;
    }
    ${media.sm`
      font-size: ${({theme}) => theme.fonts.headingH1};
      line-height: 48px;
    
      `}
  }
}
p{
  margin:0;
  font-size: ${({theme}) => theme.fonts.headingH2};
  font-weight:${({theme}) => theme.fontWeight.regular};
  color:${({theme}) => theme.colors.bodyTextVariant};
  line-height: 24px;
  text-align: left;
  ${media.sm`
  font-size: ${({theme}) => theme.fonts.baseFontSize};
`}
  span{
    font-family: "Caveat", cursive;
  }
}
`;
export { DemoWrapper }