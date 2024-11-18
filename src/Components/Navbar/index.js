import React, { useState, lazy } from 'react';
import { Link } from 'gatsby'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../../Static/3pl-terminal.svg'
import ChatIcon from '../../../Static/chat-network.svg'
import BurgerIcon from '../../../Static/burger-icon.svg'
import { NavbarStyleWrapper } from './style';
import { MainImage } from 'gatsby-plugin-image';

const Container = lazy(() => import('../Container'));
const Button  = lazy(() => import( '../Button'));

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <NavbarStyleWrapper>
      <Container>
        <div className='navbar'>
          <Link rel="preload" to='#home'><MainImage className='logo' loading='lazy' src={Logo} alt="Logo" title='Logo' /></Link>
          <div className='navbar-links'>
            <Link rel="preload" to="#features">Features</Link>
            <Link rel="preload" to="#demo">Demo</Link>
            <Link rel="preload" to="#">Pricing</Link>
            <Link rel="preload" to="#faqs">FAQ’s</Link>
          </div>
          <div className='navbar-actions'>
            <Link rel="preload" to="https://app.3plterminal.com/">Sign In</Link>
            <Link rel="preload" to='#demo'><Button image={ChatIcon} alt="ChatIcon">Book Free Demo</Button></Link>
          </div>
            <img onClick={handleShow} className='burger-icon' src={BurgerIcon} title='BurgerIcon' alt='BurgerIcon' />
        </div>
        <Offcanvas placement='end' show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title> <Link to='#home'><img className='logo' loading='lazy' src={Logo} alt="Logo" title='Logo' /></Link></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body backdropClassName="3pl-drawer">
            <div className='navbar-links-mobile'>
            <a rel="preload" onClick={handleClose} href="#features">Features</a>
            <a rel="preload" onClick={handleClose} href="#demo">Demo</a>
            <a rel="preload" onClick={handleClose} href="#">Pricing</a>
            <a rel="preload" onClick={handleClose} href="#faqs">FAQ’s</a>
            </div>
            <div className='navbar-actions-mobile'>
              <a rel="preload" onClick={handleClose} href="https://app.3plterminal.com/">Sign In</a>
              <a rel="preload" onClick={handleClose} href="#demo"><Button image={true} alt="ChatIcon">Book Free Demo</Button></a>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </NavbarStyleWrapper>
  );
};
export default Header;

