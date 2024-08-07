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
  const jsonLdData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "3PL Terminal | Best Automation Software for Prep Centers",
    "url": "https://3plterminal.com/",
    "sameAs": [
      "https://www.linkedin.com/company/3plterminal/",
      "https://facebook.com/3plterminal",
      "https://www.youtube.com/@3plterminal",
      "https://www.instagram.com/3pl.terminal",
      "https://www.pinterest.com/3plterminal/",
      "https://x.com/3pl_terminal"
    ],
    "description": "3PL Terminal is the top software for prep centers to streamline your FBA and FBM operations. Optimize inventory for Amazon sellers and enhance efficiency.",
    "image": "https://3plterminal.com/static/main-banner-image-d998b8a233c5074694cb71763b1d97ac.svg",
    "additionalType": "",
    "alternateName": "Best Automation Software for Prep Centers | 3PL Terminal",
    "copyrightHolder": {
      "@type": "Organization",
      "logo": {
        "@type": "ImageObject",
        "url": "https://3plterminal.com/3pl-terminal.svg",
        "height": "200",
        "width": "200"
      },
      "name": "3PL Terminal",
      "url": "https://3plterminal.com/",
      "image": "https://3plterminal.com/3pl-terminal.svg",
      "sameAs": [
        "https://www.linkedin.com/company/3plterminal/",
        "https://facebook.com/3plterminal",
        "https://www.youtube.com/@3plterminal",
        "https://www.instagram.com/3pl.terminal",
        "https://www.pinterest.com/3plterminal/",
        "https://x.com/3pl_terminal"
      ],
      "alternativeName": "Best Automation Software for Prep Centers"
    },
    "headline": "FBA Prep and Pack Software",
    "keywords": "3pl software for small business, fba software, 3pl warehouse management software, 3pl warehouse management system, FBA prep center software, 3pl e-commerce supply chain management, software for prep centers, best 3pl warehouse management software",
    "mainEntityOfPage": "https://3plterminal.com/"
  };


  return (
    <ThemeProvider theme={Theme}>
      <Navbar />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap" rel="stylesheet" />
        <html lang='en-US' />
        <script type="application/ld+json">
        {JSON.stringify(jsonLdData)}
      </script>
      </Helmet>
      <GlobalStyle />
      {children}
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
