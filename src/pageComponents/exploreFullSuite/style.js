import styled from "styled-components";
import { media } from "../../theme/media-mixins";

const ExploreContentWrapper = styled.div`
padding-top: 100px;
position: relative;
img.arrow-image{
  position: absolute;
    left: 0;
    top: 0;
    ${media.sm`
    display: none;
      `}
}
h2{
  max-width: 700px;
    margin: auto;
    text-align: center;
    position: relative;
    font-size: 48px;
    font-weight: ${({theme}) => theme.fontWeight.bold};
    line-height: 64px;
    text-align: center;
    ${media.sm`
    font-size:${({theme}) => theme.fonts.headingH1};
    line-height:48px;
      `}
    img{
      position: absolute;
      top: -40px;
    }
}
.card-items-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 32px;
    margin-top:48px;
    ${media.sm`
      grid-template-columns: 1fr 1fr;
      `}
    ${media.xs`
     display: none;
      `}
    img{
      max-width: 100%;
    }
}
button{
  display:flex;
  margin:auto;
  margin-top:48px;
  margin-bottom:100px;
  ${media.xs`
  margin-bottom:48px;
    `}
}
`;
export { ExploreContentWrapper }