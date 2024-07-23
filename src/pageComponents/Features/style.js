import styled from "styled-components";
import { media } from "../../theme/media-mixins";

const FeaturesTabWrapper = styled.div`
padding-top: 100px;
${media.sm`
padding: 0;
`}
.label-text{
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.baseFontSize};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.bodyText};
}
.title{
  display: flex;
  max-width: 1300px;
margin: auto;
${media.md`
position: relative;
`}
  ${media.sm`
   padding: 0 16px;
    `}
img{
${media.md`
  position: absolute;
  right:0;
  top:0;
  `}
  ${media.sm`
    display:none;
    `}
    ${media.md`
      top:-170px;
    `}
}
h2{
  text-align: center;
  font-size: 48px;
  font-weight: ${({theme}) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primaryColor};
  margin: auto;
  ${media.sm`
    font-size: ${({ theme }) => theme.fonts.headingH1};
  
    `}
  span{
    font-family: "Caveat", cursive;
    color: ${({ theme }) => theme.colors.success};
  }
}
}
.tabs-wrapper {
  display: flex;
  overflow: auto;
  grid-gap:8px;
  padding: 48px 0;
  .select-wrapper{
    display:none;
    ${media.xs`
    display: block;
      `}
  }
  ${media.sm`
      padding: 76px 0 0;
      `}
    p{
      padding: 16px 47px 16px 47px;
      gap: 0px;
      width:222px;
      text-align:center;
      white-space: nowrap;
      border:1px solid ${({theme}) => theme.colors.borderColor};
      font-size:${({theme}) => theme.fonts.headingH5};
      font-weight:${({theme}) => theme.fontWeight.medium};
      border-radius: 30px;
      box-shadow: 0px 4px 24px 0px #0000000D;
      background: ${({theme}) => theme.colors.whiteColor};
      color: ${({theme}) => theme.colors.bodyText};
      cursor: pointer;
      ${media.sm`
        padding: 13px 25px;
        `}
        ${media.xs`
        display: none;
          `}
      &.active{
        background: ${({theme}) => theme.colors.primaryColor};
        color: ${({theme}) => theme.colors.whiteColor};
}
    }
}
`;
export { FeaturesTabWrapper }