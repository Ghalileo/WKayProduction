import React, { useState } from 'react';
import './style.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  light expand="md" id="Navv">
        <NavbarBrand href="/" id="homeBtn">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/../../pages/About/" id="aboutBtn">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/../../pages/Albums/"id="albumsBtn">Albums</NavLink>
            </NavItem>
        
          </Nav>
          <NavbarText>WK</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;