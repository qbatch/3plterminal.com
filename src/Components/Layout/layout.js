import * as React from 'react'
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Theme from '../../theme/theme-variable'
import GlobalStyle from "../../theme/global-style";
import Navbar from '../Navbar/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../theme/style.css'
import Footer from '../Footer';



const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={Theme}>
      <Navbar />
      <Helmet>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" /> */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap" rel="stylesheet" /> */}
        <html lang='en-US' />
      </Helmet>
      <GlobalStyle />
      {children}
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
