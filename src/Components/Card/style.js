import styled from "styled-components";
import { media } from "../../theme/media-mixins";

const CardWrapper = styled.div`
.card-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    grid-row-gap: 12px;
    img{
      max-width:100%;
      width: 100%;
    }
    ${media.xs`
      align-items: center;
      `}
    .content{
      h3{
        font-size: ${({theme}) => theme.fonts.headingH3};
        font-weight: ${({theme}) => theme.fontWeight.bold};
        color: ${({theme}) => theme.colors.bodyTextVariant};
        line-height: 30px;
        text-align: left;
        margin-bottom: 12px;
        ${media.sm`
          font-size:${({theme}) => theme.fonts.baseFontSize};
          margin-bottom: 4px;
          `}
      }
      p{
        max-width: 100%;
        font-size: ${({theme}) => theme.fonts.baseFontSize};
        font-weight: ${({theme}) => theme.fontWeight.regular};
        color: ${({theme}) => theme.colors.bodyText};
        line-height: 24px;
        text-align: left;
        margin: 0;

      }
    }
}
`;
export {CardWrapper}