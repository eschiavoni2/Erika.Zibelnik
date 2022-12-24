import React from 'react';
import {
  Nav,
  NavLogo,
  NavbarContainer,
  Hamburger,
  NavMenu,
  NavItem,
  NavLinks, 
} from './NavbarElements';
import { FaBars } from "react-icons/fa";
import ScrollButton from '../ScrollButton';

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo ><ScrollButton/></NavLogo>
            <Hamburger onClick={toggle}>
              <FaBars /> 
            </Hamburger>
            <NavMenu>
              <NavItem>
                <NavLinks to="about">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="resume">Resume</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="projects">Projects</NavLinks>
              </NavItem>
            </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
