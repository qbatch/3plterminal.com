import styled from "styled-components";
import { media } from "../../theme/media-mixins";

const AccordionWrapper = styled.div`
margin-top: 48px;
${media.sm`
  margin-top: 32px;
`}
.text-wrapper{
  display: flex;
  flex-direction: column;
  grid-row-gap: 12px;
}
button.accordion-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    outline: none;
    box-shadow:none;
    background: #E1F1FF;
    padding: 24px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    ${media.sm`
    padding: 8px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
      `}
    h3 {
      margin: 0;
      font-size: ${({theme}) => theme.fonts.headingH3};
      font-weight: ${({theme}) => theme.fontWeight.bold};
      color: ${({theme}) => theme.colors.primaryColor};
      line-height: 30px;
      text-align: left;
      ${media.sm`
        font-size: ${({theme}) => theme.fonts.headingH5};
      line-height: 16px;
        `}
}

}
.heading-content{
  h3{
    margin: 0;
      font-size: ${({theme}) => theme.fonts.headingH3};
      font-weight: ${({theme}) => theme.fontWeight.bold};
      color: ${({theme}) => theme.colors.primaryColor};
      line-height: 30px;
      text-align: left;
      margin-top: 8px;
      ${media.sm`
        font-size: ${({theme}) => theme.fonts.headingH5};
      line-height: 16px;
        `}
  }
  p{
      margin: 0;
      font-size: ${({theme}) => theme.fonts.baseFontSize};
      font-weight: ${({theme}) => theme.fontWeight.medium};
      color: ${({theme}) => theme.colors.bodyText};
      line-height: 25px;
      text-align: left; 
  }
}
.accordion-body {
    background: #E1F1FF;
    padding: 24px;
    padding-top: 0px;
    ${media.sm`
      padding: 8px;
        `}
    p{
      margin: 0;
      font-size: ${({theme}) => theme.fonts.baseFontSize};
      font-weight: ${({theme}) => theme.fontWeight.medium};
      color: ${({theme}) => theme.colors.bodyText};
      line-height: 25px;
      text-align: left; 
      ${media.sm`
        font-size: ${({theme}) => theme.fonts.headingH6};
      line-height: 16px;
        `}
    }
}
button.accordion-button::after, ::before {
    display: none;
}
.accordion-header{
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  ${media.sm`
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
      `}
}
.accordion-item {
    border-radius: 24px !important;
    overflow: hidden;
    ${media.sm`
      border-radius: 8px!important;
      `}
}

.accordion {
    display: flex;
    flex-direction: column;
    grid-row-gap: 16px;
}

`;
export { AccordionWrapper };