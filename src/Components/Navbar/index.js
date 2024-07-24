import React, { useState, lazy } from 'react';
import { Link } from 'gatsby'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../../Static/3pl-logo.svg'
import ChatIcon from '../../../Static/chat-network.svg'
import BurgerIcon from '../../../Static/burger-icon.svg'
import { NavbarStyleWrapper } from './style';

const Dropdown = lazy(() => import('../Dropdown'));
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
          <Link href='#home'><img className='logo' loading='lazy' src={Logo} alt="Logo" title='Logo' /></Link>
          <div className='navbar-links'>
            <Link href="#features">Features</Link>
            <Link href="#demo">Demo</Link>
            <Link href="#">Pricing</Link>
            <Link href="#faqs">FAQ’s</Link>
          </div>
          <div className='navbar-actions'>
            <Link href="#">Sign In</Link>
            <Link href='#demo'><Button image={ChatIcon} alt="ChatIcon">Book Free Demo</Button></Link>
          </div>
          <a onClick={handleShow} href='#'><img  className='burger-icon' src={BurgerIcon} title='BurgerIcon' alt='BurgerIcon' /></a>
        </div>
        <Offcanvas placement='end' show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title><Link href='/'><img src={Logo} loading='lazy' alt="Logo" title='Logo' /></Link></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body backdropClassName="3pl-drawer">
            <div className='navbar-links-mobile'>
            <a onClick={handleClose} href="#features">Features</a>
            <a onClick={handleClose} href="#demo">Demo</a>
            <a onClick={handleClose} href="#">Pricing</a>
            <a onClick={handleClose} href="#faqs">FAQ’s</a>
            </div>
            <div className='navbar-actions-mobile'>
              <a onClick={handleClose} href="#">Sign In</a>
              <a onClick={handleClose} href="#demo"><Button image={true} alt="ChatIcon">Book Free Demo</Button></a>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </NavbarStyleWrapper>
  );
};
export default Header;

