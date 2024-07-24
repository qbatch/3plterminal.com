import styled from "styled-components";

import FarewellBg  from '../../../static/Bif-Farewell_v.svg';

import { media } from "../../theme/media-mixins";
const EmbraceSectionWrapper = styled.div`
background-image: url(${FarewellBg});
background-position: right;
background-repeat: no-repeat;
background-size: cover;
padding: 52px 0px 47px;
${media.lg `
  padding: 52px 24px 47px;
`}
.banner{
  min-height: 315px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
${media.sm`
min-height:auto;
`}
}
/* img{
  max-width: 100%;
  width: 100%;
  &.web-image{
    display: block;
    ${media.sm`
    display: none;
      `}
  }
  &.mobile-image{
    display:none;
    ${media.sm`
    display: block;
      `}
  }
} */
  h2{
  font-family: "Caveat", cursive;
  color:#fff;
}
p{
  position:relative;
  color:#fff;
  margin:0;
  &::after{
    position:absolute;
    top:12px;
    left:-40px;
    content:"";
    width:100px;
    height:2px;
    background-color:#2864BC;
  }
}
a{
img{
  padding-top:21px;
  ${media.lg `
  max-width:100%;
`}
}
}
`;
export { EmbraceSectionWrapper }