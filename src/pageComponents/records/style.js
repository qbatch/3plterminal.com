import styled from "styled-components";
import { media } from "../../theme/media-mixins";

const RecordsWrapper = styled.div`
.text-overflow-ui{
  display: flex;
  grid-gap: 32px;
  ${media.md`
  display:none;
    `}
  justify-content: space-around;
    padding-top: 44px;
    padding-bottom: 48px;

    ${media.sm`
      overflow: auto;
        grid-gap: 16px;
        justify-content: start;
      `}
    .count-item{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      ${media.xl`
        min-width: auto;
        `}
      ${media.sm`
      min-width: 264px;
      `}
      ${media.xs`
      min-width: 181px;
      `}
      h2{
        font-family: "Caveat", cursive;
        font-size: 90px;
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        margin:0;
        ${media.sm`
          font-size: 50px;
        `}
      }
      h3{
        font-size: ${({ theme }) => theme.fonts.headingH2};
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        color: ${({ theme }) => theme.colors.primaryColor};
        padding-top:21px;
        margin:0;
        ${media.sm`
          padding-top:8px;
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
        `}
      }
    }
}
.marque-slider{
  display:none;
  ${media.md`
  display:block;
  margin: 76px 0px;
    `}
    .card-wrapper {
    display: flex;
    grid-gap: 24px;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-right:50px;
    .count-item{
      max-width:300px;
    h2{
        font-family: "Caveat", cursive;
        font-size: 90px;
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        margin:0;
        ${media.sm`
          font-size: 50px;
        `}
      }
      h3{
        font-size: ${({ theme }) => theme.fonts.headingH2};
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        color: ${({ theme }) => theme.colors.primaryColor};
        padding-top:21px;
        margin:0;
        ${media.sm`
          padding-top:8px;
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
        `}
      }
    }
}
}
`;
export { RecordsWrapper }
