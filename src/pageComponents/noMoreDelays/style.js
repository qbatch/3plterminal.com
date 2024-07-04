import styled from "styled-components";
import { media } from "../../theme/media-mixins";

const NoMoreDelaysWrapper = styled.div`
margin-top:95px;
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
}

`;
export {NoMoreDelaysWrapper}