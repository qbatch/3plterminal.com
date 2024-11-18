import styled from "styled-components";

export const Loader = styled.div`
    height: ${({normal}) => normal === 'lite' ? 'auto' : '100vh'};
    display: flex;
    justify-content: center;
    align-items: center;
.loader {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: 
    radial-gradient(farthest-side,#002046 94%,#0000) top/8px 8px no-repeat,
    conic-gradient(#0000 30%,#002046);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
  animation: l13 1s infinite linear;
}
@keyframes l13{ 
  100%{transform: rotate(1turn)}
}
`;
