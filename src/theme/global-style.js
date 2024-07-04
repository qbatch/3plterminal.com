import { createGlobalStyle } from 'styled-components';
import { media } from "../theme/media-mixins";

const GlobalStyles = createGlobalStyle`
    body{
        font-family: "Roboto", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
export default GlobalStyles
