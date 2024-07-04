import styled from "styled-components";
import { media } from "../../theme/media-mixins";

const ContainerStyleWrapper = styled.div`
max-width: 1800px;
margin: auto 72px;
${media.lg`
margin: auto 32px;
`}
`;
export {ContainerStyleWrapper};