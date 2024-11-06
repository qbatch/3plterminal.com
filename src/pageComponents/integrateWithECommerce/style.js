import styled from "styled-components";
import { media } from "../../theme/media-mixins";

const IntegrateWithECommerceWrapper = styled.div`
padding: 95px 0;
position: relative;
background: linear-gradient(0deg, rgba(208, 225, 239, 0) 0%, rgba(208, 225, 239, 0.0331063) 2.38%, rgba(208, 225, 239, 0.7) 50.35%, rgba(208, 225, 239, 0.08092) 94.26%, rgba(208, 225, 239, 0) 100%);
${media.sm`
  padding: 76px 0 0;
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
      ${media.sm`
        font-size: ${({ theme }) => theme.fonts.headingH1};
        line-height: 42px;
        `}
      span{
        position: relative;

      }
      img{
        position: absolute;
        left:0;
        top:-28px;
      }
    }
    p{
      margin: 0;
      font-weight: ${({theme}) => theme.fontWeight.regular};
      color: ${({theme}) => theme.colors.bodyText};
      text-align: center;
      line-height: 32px;
      max-width: 903px;
      font-size: ${({theme}) => theme.fonts.headingH2};
      margin-bottom: 56px;
      ${media.sm`
        line-height: 24px;
        font-size: ${({theme}) => theme.fonts.headingH3};
      
        `}
    }
    
}
.roll-image {
    position: absolute;
    left: 0;
    top: -100px;
    ${media.sm`
    display: none;
      `}
}
img.image-0 {
    margin-right: 48px;
    padding-top:8px;
}
img.image-1 {
    margin-right: 48px;
    padding-top:8px;
}
img.image-2 {
    margin-right: 48px;
    padding-top:30px;
}
`;
export { IntegrateWithECommerceWrapper }