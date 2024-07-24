import styled from "styled-components";
import NoMore  from '../../../static/no-more-delay.svg';
import { media } from "../../theme/media-mixins";

const NoMoreDelaysWrapper = styled.div`
background-image: url(${NoMore});
background-position: right;
background-repeat: no-repeat;
background-size: cover;
padding: 52px 0px 47px;
${media.lg `
  padding: 52px 0 47px;
`}
.banner{
  min-height: 313px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
${media.sm`
min-height:auto;
`}
}
/* margin-top:95px;
${media.sm`
  margin-top:76px;
`}
img{
  max-width: 100%;
width: 100%;
&.web-image{
  display:block;
${media.sm`
display:none;
`}
}
&.mobile-image{
  display:none;
  ${media.sm`
    display:block;
`}
}
} */
h2{
  font-family: "Caveat", cursive;
  color:#fff;
}
p{
  color:#fff;
  margin:0;
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
export {NoMoreDelaysWrapper}