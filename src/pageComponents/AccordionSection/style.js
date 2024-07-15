import styled from "styled-components";
import { media } from "../../theme/media-mixins";

const AccordionSectionWrapper = styled.div`
padding-top: 97px;
padding-bottom: 100px;
${media.sm`
  padding-top: 76px;
  padding-bottom: 76px;
`}
.header {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
      font-size: 48px;
      font-weight: ${({theme}) => theme.fontWeight.bold};
      color: ${({theme}) => theme.colors.primaryColor};
      line-height: 64px;
      text-align: center;
      margin-bottom: 16px;
      max-width: 1000px;
      position: relative;
      ${media.sm`
        font-size: ${({ theme }) => theme.fonts.headingH1};
        line-height: 42px;
        margin-bottom:0;
        `}
      img{
        position: absolute;
        left:0;
        top:-28px;
      }
    }
    p{
      margin: 0;
      font-size: ${({theme}) => theme.fonts.headingH2};
      font-weight: ${({theme}) => theme.fontWeight.regular};
      color: ${({theme}) => theme.colors.bodyText};
      line-height: 32px;
      text-align: center;
      max-width: 903px;
      margin-bottom: 56px;
    }
    
}
.roll-image {
    position: absolute;
    right: 0;
    top: -50px;
    ${media.sm`
    display: none;
      `}
}
button.show-button{
  margin:auto;
  margin-top:48px;
  ${media.sm`
  margin-top:24px;
    `}
}
`;
export { AccordionSectionWrapper }