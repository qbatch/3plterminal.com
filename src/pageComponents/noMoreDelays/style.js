import styled from "styled-components";
import NoMore from '../../../static/no-more-delay.svg';
import { media } from "../../theme/media-mixins";

const NoMoreDelaysWrapper = styled.div`
background-image: url(${NoMore});
background-position: right;
background-repeat: no-repeat;
background-size: cover;
padding: 52px 0px 47px;
${media.lg`
  padding: 52px 0 47px;
`}
${media.sm`
  padding: 52px 0 47px;
`}
.banner{
  min-height: 313px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
/* margin-left: 55px; */
${media.sm`
min-height:auto;
`}
}
  img.heading{
    margin-bottom:12px;
    max-width:100%;

  }
p{
  color:#fff;
  margin:0;
  font-weight:100;
  font-size:24px;
  ${media.sm`
    font-size:16px;
    `}
}
a{
img{
  padding-top:60px;
  ${media.lg`
  max-width:100%;
`}
}
}
`;
export { NoMoreDelaysWrapper };
