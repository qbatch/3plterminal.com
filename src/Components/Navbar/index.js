import React, { useState, lazy } from 'react';
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
          <a href='#home'><img className='logo' loading='lazy' src={Logo} alt="Logo" title='Logo' /></a>
          <div className='navbar-links'>
            <a href="#features">Features</a>
            <a href="#demo">Demo</a>
            <a href="#">Pricing</a>
            <a href="#faqs">FAQ’s</a>
          </div>
          <div className='navbar-actions'>
            <a href="#">Sign In</a>
            <Button image={ChatIcon} alt="ChatIcon">Book Free Demo</Button>
          </div>
          <img onClick={handleShow} className='burger-icon' src={BurgerIcon} title='BurgerIcon' alt='BurgerIcon' />
        </div>
        <Offcanvas placement='end' show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title><a href='/'><img src={Logo} loading='lazy' alt="Logo" title='Logo' /></a></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body backdropClassName="3pl-drawer">
            <div className='navbar-links-mobile'>
              <Dropdown />
              <a href="#">Demo</a>
              <a href="#">Pricing</a>
              <a href="#">FAQ’s</a>
            </div>
            <div className='navbar-actions-mobile'>
              <a href="#">Sign In</a>
              <Button image={true} alt="ChatIcon">Book Free Demo</Button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </NavbarStyleWrapper>
  );
};
export default Header;

