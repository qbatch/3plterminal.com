import { css } from "styled-components";

 const breakpoints = {
   xs: "480px",
   mobile:'575px',
   sm: "767px",
   md: "991px",
   customElementsBreakPoint:'1871px',
   lg: "1199px",
   standard: "1279px",
   customBrakePoint: "1360px",
   xl: "1399px",
 };

export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export const bgMixin = (color) => css`
  &:hover {
    background-color: ${color};
  }
`;