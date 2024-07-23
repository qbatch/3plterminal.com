import styled from "styled-components";
import { media } from "../../theme/media-mixins";

const FbaPrepSoftwareWrapper = styled.div`
padding: 56px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
background: linear-gradient(0deg, rgba(208, 225, 239, 0.128) 0%, rgba(208, 225, 239, 0.48) 70.5%, rgba(208, 225, 239, 0) 100%);
position: relative;
padding-top: 132px;
a{
  text-decoration: none;
}
${media.sm`
padding: 46px 0px 32px;
padding-top: 100px;
`}
.buttons-group{
  display: flex;
  grid-gap: 24px;
  margin-top: 32px;
  flex-wrap:wrap;
  justify-content:center;
}
img.arrow-image{
  position: absolute;
    bottom: -4%;
    left: 10%;
    ${media.sm`
    display:none;
      `}
}
h1{
  font-size:${({theme}) => theme.fonts.headingLg};
  font-weight:${({theme}) => theme.fontWeight.bold};
  color:${({theme}) => theme.colors.primaryColor};
  margin: 0;
  ${media.sm`
    font-size:${({theme}) => theme.fonts.headingH1};
    `}
}
h2{
  font-size:${({theme}) => theme.fonts.headingH1};
  font-weight:${({theme}) => theme.fontWeight.regular};
  color:${({theme}) => theme.colors.bodyTextVariant};
  margin: 0;
  padding-top: 12px;
  padding-bottom: 24px;
  ${media.sm`
    font-size:${({theme}) => theme.fonts.headingH2};
    `}
}
p{
  font-size:${({theme}) => theme.fonts.headingH3};
  font-weight:${({theme}) => theme.fontWeight.regular};
  color:${({theme}) => theme.colors.bodyText};
  margin: 0;
  max-width: 707px;
  margin: auto;
  ${media.sm`
    font-size:${({theme}) => theme.fonts.headingH3};
    `}
}
.banner-image{
  margin-top: 48px;
  max-width:100%;
}

`;
export {FbaPrepSoftwareWrapper}