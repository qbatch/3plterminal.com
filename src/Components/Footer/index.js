import React from 'react'
import { Link } from 'gatsby'
import Button from '../Button'
import Logo from '../../../Static/3pl-white-logo.svg'
import FB from '../../../Static/facebook.svg'
import Instagram from '../../../Static/instagram.svg'
import Linkedin from '../../../Static/linkedin.svg'
import Youtube from '../../../Static/youtube.svg'
import Twitter from '../../../Static/twitter.svg'
import { FooterWrapper } from './style'
import Container from '../Container'

const Footer = () => {
  const Data = [
    {
      img:FB,
      href:''
    },
    {
      img:Instagram,
      href:''
    },
    {
      img:Linkedin,
      href:''
    },
    {
      img:Youtube,
      href:''
    },
    {
      img:Twitter,
      href:''
    },
  ]
  return (
    <FooterWrapper>
      <Container>
        <div className='footer'>
          <img src={Logo} alt='Logo' />
          <div className='links-wrapper'>
            <Link>Features</Link>
            <Link>Demo</Link>
            <Link>Pricing</Link>
            <Link>FAQ’s</Link>
          </div>
          <div className='buttons-wrapper'>
            <Button>Login</Button>
            <Button>Sign up</Button>
          </div>
        </div>
        <div className='divider' />
        <div className='copy-right-section'>
          <p>Copyright © {new Date().getFullYear()}. 3PL Terminal. All rights reserved.</p>
          <div className='social-icons'>
            <p>Follow Us at</p>
            {Data.map((item, index) => (
              <Link href={item.href} key={index}><img src={item.img} alt={item.img} /></Link>
            ))}
          </div>
        </div>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
