import React, { lazy } from 'react'
import { Link } from 'gatsby'
import Logo from '../../../Static/3pl-white-logo.svg'
import FB from '../../../Static/facebook.svg'
import Instagram from '../../../Static/instagram.svg'
import Linkedin from '../../../Static/linkedin.svg'
import Youtube from '../../../Static/youtube.svg'
import Twitter from '../../../Static/twitter.svg'
import { FooterWrapper } from './style'
const Container = lazy(() => import('../Container'));
const Button = lazy(() => import('../Button'));

const Footer = () => {
  const Data = [
    {
      img: FB,
      alt: 'facebook',
      title: 'facebook',
      href: ''
    },
    {
      img: Instagram,
      alt: 'Instagram',
      title: 'Instagram',
      href: ''
    },
    {
      img: Linkedin,
      alt: 'Linkedin',
      title: 'Linkedin',
      href: ''
    },
    {
      img: Youtube,
      alt: 'Youtube',
      title: 'Youtube',
      href: ''
    },
    {
      img: Twitter,
      alt: 'Twitter',
      title: 'Twitter',
      href: ''
    },
  ]
  return (
    <FooterWrapper>
      <Container>
        <div className='footer'>
        <Link to="/"><img src={Logo} alt='Logo' title='Logo' /></Link>
          <div className='links-wrapper'>
            <Link to="#features">Features</Link>
            <Link to="#demo">Demo</Link>
            <Link to="#">Pricing</Link>
            <Link to="#faqs">FAQ’s</Link>
          </div>
          <div className='buttons-wrapper'>
            <Button>Sign In</Button>
          </div>
        </div>
        <div className='divider' />
        <div className='copy-right-section'>
          <p>Copyright © {new Date().getFullYear()}. 3PL Terminal. All rights reserved.</p>
          <div className='social-icons'>
            <p>Follow Us at</p>
            {Data.map((item, index) => (
              <Link to={item.href} key={index}><img src={item.img} loading='lazy' alt={item.alt} title={item.title} /></Link>
            ))}
          </div>
        </div>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
