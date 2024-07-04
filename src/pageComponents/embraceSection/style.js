import styled from "styled-components";
import { media } from "../../theme/media-mixins";
const EmbraceSectionWrapper = styled.div`
img{
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
}
`;
export { EmbraceSectionWrapper }