import styled from "styled-components";
import { media } from "../../theme/media-mixins";

const FooterWrapper = styled.div`
background-color: ${({ theme }) => theme.colors.primaryColor};
padding: 56px 0px 32px;
.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${media.sm`
    flex-wrap:wrap ;
    grid-row-gap:16px;
      `}
      ${media.xs`
        flex-wrap:wrap ;
        grid-row-gap:16px;
        justify-content:center;
        align-items:center;
        `}
    .links-wrapper{
      display: flex;
      grid-gap: 56px;
      ${media.md`
        grid-gap: 8px;
        `}
      a{
    color: ${({ theme }) => theme.colors.whiteColor};
    text-decoration: none;
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
    }
    .buttons-wrapper{
      display: flex;
      button{
        &:nth-child(2){
          background-color: #2864BC;
        }
      }
    }
}
.divider{
  width: 100%;
  height:1px;
  background-color: ${({ theme }) => theme.colors.borderColor};
  margin: 40px 0;
}
.copy-right-section {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.whiteColor};
    align-items: center;
    ${media.sm`
    flex-wrap:wrap ;
    grid-row-gap:16px;
      `}
    ${media.xs`
    flex-wrap:wrap ;
    grid-row-gap:16px;
    justify-content:center;
    align-items:center;
      `}
    p{
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    line-height: 24px;
    text-align: center;
    margin: 0;
    }
    .social-icons {
    display: flex;
    align-items: center;
    grid-gap: 16px;
}
}

`;
export { FooterWrapper }