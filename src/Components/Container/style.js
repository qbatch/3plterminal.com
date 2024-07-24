import styled from "styled-components";
import { media } from "../../theme/media-mixins";

const ContainerStyleWrapper = styled.div`
max-width: 1800px;
margin:auto;
${media.customElementsBreakPoint`
  margin: auto 72px;
`}
${media.xl`
  margin: auto 72px;
`}
${media.lg`
margin: auto 32px;
`}
${media.xs`
margin: auto 24px;
`}
`;
export {ContainerStyleWrapper};