import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from '../Container';
import Button from '../Button';
import Dropdown from '../Dropdown';
import Logo from '../../../Static/3pl-logo.svg'
import ChatIcon from '../../../Static/chat-network.svg'
import BurgerIcon from '../../../Static/burger-icon.svg'
import { NavbarStyleWrapper } from './style';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <NavbarStyleWrapper>
      <Container>
        <div className='navbar'>
          <a href='/'><img className='logo' src={Logo} alt="Logo" /></a>
          <div className='navbar-links'>
            <Dropdown />
            <a href="">Demo</a>
            <a href="">Pricing</a>
            <a href="">FAQ’s</a>
          </div>
          <div className='navbar-actions'>
            <a href=''>Sign In</a>
            <Button image={ChatIcon} alt="ChatIcon">Book Free Demo</Button>
          </div>
          <img onClick={handleShow} className='burger-icon' src={BurgerIcon} alt='BurgerIcon' />
        </div>
        <Offcanvas placement='end' show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title><a href='/'><img src={Logo} alt="Logo" /></a></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body backdropClassName="3pl-drawer">
            <div className='navbar-links-mobile'>
              <Dropdown />
              <a href="">Demo</a>
              <a href="">Pricing</a>
              <a href="">FAQ’s</a>
            </div>
            <div className='navbar-actions-mobile'>
              <a href=''>Sign In</a>
              <Button image={true} alt="ChatIcon">Book Free Demo</Button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </NavbarStyleWrapper>
  );
};
export default Header;

