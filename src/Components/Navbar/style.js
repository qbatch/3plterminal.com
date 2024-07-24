import styled from "styled-components";
import { media } from "../../theme/media-mixins";
const NavbarStyleWrapper = styled.div`
    background:  ${({ theme }) => theme.colors.whiteColor};
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    z-index: 4;
    box-shadow: 0px 4px 24px 0px #0000000D;
    padding: 13px 0;
    .navbar{
      padding:0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img.logo{
      ${media.xs`
        width: 154px;
      `}
      }
    }
.navbar-links {
    display: flex;
    grid-gap: 40px;
    a{
    color: ${({ theme }) => theme.colors.primaryColor};
    text-decoration: none;
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
    ${media.md`
    display:none;
    `}
}
.navbar-actions{
  display: flex;
  grid-gap: 8px;
  align-items:center;
  ${media.md`
    display:none;
    `}
  a{
  color: ${({ theme }) => theme.colors.primaryColor};
  text-decoration: none;
  padding: 0 24px;
  font-size: ${({ theme }) => theme.fonts.baseFontSize};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
}
  .navbar-links-mobile {
    display: flex;
    flex-direction: column;
    grid-row-gap: 11px;
}
.burger-icon{
  display:none;
  ${media.md`
    display:block;
    `}
}
`
export { NavbarStyleWrapper }