import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const FirstTabWrapper = styled.div`
display: flex;
grid-gap: 24px;
${media.md`
      padding: 48px 0;
    `}
${media.sm`
      flex-direction:column;
    `}
.box{
  padding: 32px;
  border-radius:24px;
  background: linear-gradient(182deg, rgba(208, 225, 239, 0.128) 0%, rgba(208, 225, 239, 0.48) 70.5%, rgba(208, 225, 239, 0) 100%);
  box-shadow: 0px 90px 36px 0px #10234103;
  width:100%;
  ${media.sm`
  padding: 36px 11px;
    `}
  h2{
    margin:0;
    font-size: ${({ theme }) => theme.fonts.headingH2};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 32px;
    ${media.md`
    padding-left:24px;
    padding-right:24px;
      `}
}
.box-items-wrapper{
  display: flex;
  flex-direction: column;
  grid-row-gap: 32px;
  .bar-item {
    display: flex;
    align-items: flex-start;
    grid-gap: 12px;
    .content-item{
      display: flex;
      flex-direction: column;
      grid-row-gap: 4px;
      h3{
        margin:0;
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        color: ${({ theme }) => theme.colors.bodyTextVariant};
        line-height: 24px;
        text-align: left;
      }
      p{
        margin:0px;
        font-size:  ${({ theme }) => theme.fonts.headingH4};
        font-weight: ${({ theme }) => theme.fontWeight.regular};
        color: ${({ theme }) => theme.colors.bodyText};
        line-height: 20px;
        text-align: left;

      }
    }
}
}
}
.graph-image{
  max-width:839px;
  ${media.xl`
  max-width:550px;
    `}
  ${media.lg`
  max-width:350px;
    `}
  ${media.md`
  max-width:300px;
    `}
    ${media.sm`
      max-width:100%;
    `}
}
`;

export { FirstTabWrapper }