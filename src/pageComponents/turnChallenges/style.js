import styled from "styled-components";
import { media } from "../../theme/media-mixins";

const TurnChallengesWrapper = styled.div`
margin-bottom: 48px;
.heading-wrapper.animated.bounce {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    img{
      ${media.sm`
    display: none;
      `}
    }
}
h2{
font-size: 40px;
font-weight: ${({ theme }) => theme.fontWeight.bold};
color: ${({ theme }) => theme.colors.primaryColor};
line-height: 56px;
text-align: left;
max-width: 1233px;
margin-bottom: 0;
margin-top: 100px;
${media.sm`
  font-size: ${({ theme }) => theme.fonts.headingH1};
  line-height: 42px;
  margin-top: 76px;
`}
span{
  color: ${({ theme }) => theme.colors.success};
  font-family: "Caveat", cursive;
  position: relative;
img{
  position: absolute;
  right: -43px;
  top: -9px;
}
}

}
.slick-track{
  height: 600px;
}
.items-wrapper {
    display: flex;
    justify-content: center;
    max-width: 1209px;
    width: 100%;
    margin: auto;
    margin-top: 64px;
    ${media.customBrakePoint`
      overflow: auto;
      `}
    ${media.lg`
      justify-content:start;
      `}
      ${media.sm`
        margin-top: 36px;
      `}
      ${media.xs`
        overflow:inherit;
        margin: none;
        display: none;
        justify-content: inherit;
        `}
        &.slider-div{
          display:block;
        }

      .items{
          min-width:403px;
          ${media.xs`
          min-width:100%;
            `}
.header {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 10px;
    border: 1px solid #CECECE80;
    padding: 42px 0;
    background: #FAFAFA;
    ${media.xs`
    padding: 16px;
      `}
    &.header-2{
      background-color: #FFDCDC;
    }
    &.header-3{
      background-color: #E7FFD4;
    }
    h3{
      margin: 0;
      font-size: ${({theme}) => theme.fonts.headingH2};
      font-weight: 600;
    }
}
.content{
  &.content-2 {
    box-shadow: 0px 55px 106px 0px #00000014;
    background: #fff;
    border-bottom-right-radius: 23px;
    ${media.xs`
      box-shadow: none;
      `}
    p{
      &:last-child {
    border-bottom-right-radius: 24px;
    overflow: hidden;
}
    }
}
  p{
    border: 1px solid #CECECE80;
    padding: 16px 40px 40px;
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.colors.whiteBlack};
    line-height: 24px;
    text-align: left;
    margin: 0;
    min-height: 106px;
    ${media.xs`
    padding: 16px;
    min-height:82px;
      `}
  }
}
}
}
`;
export { TurnChallengesWrapper }