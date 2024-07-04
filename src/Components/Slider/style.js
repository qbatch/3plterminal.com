import styled from "styled-components";
import { media } from "../../theme/media-mixins";

const SliderStyleWrapper = styled.div`
margin: 0;
display: none;
margin-top:48px;
${media.xs`
display:block;
`}
.slick-dots {
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
}
li.slick-active button {
    background: ${({theme}) => theme.colors.primaryColor};
    width: 32px !important;
    border-radius: 24px;
    height: 8px;
    font-size: 0px;
    margin: 0px ;
    background: ${({theme}) => theme.colors.primaryColor};

}
li.slick-active button::before {
  background: ${({theme}) => theme.colors.primaryColor};
    width: 32px !important;
    border-radius: 24px;
    height: 8px;
    font-size: 0px;
    color: ${({theme}) => theme.colors.primaryColor} !important;
}
ul.slick-dots {
    display: flex !important;
    justify-content: center;
    align-items: center;
    grid-gap: 8px;
    margin-top: 0;
    position: relative;
}
li button{
  width: 0px !important;
}
li {
  margin: 0px !important;
  width: auto !important;
}
li button::before {
  background: ${({theme}) => theme.colors.SliderDots};
    width: 8px !important;
    border-radius: 24px;
    height: 8px !important;
    font-size: 0px !important;
    color: ${({theme}) => theme.colors.SliderDots} !important;
}

`;
export { SliderStyleWrapper }