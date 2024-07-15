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
        <html lang='en-US' />
      </Helmet>
      <GlobalStyle />
      {children}
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
