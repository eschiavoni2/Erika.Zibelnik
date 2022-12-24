import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { GiMushroomHouse } from 'react-icons/gi';

export const Nav = styled.nav`
  background: #010101;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justifty-content: flex-end;
  align-items: centers;
  position: sticky;
  font-size: 1rem;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8x all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100vw;
  padding: 0 24px;
  max-width: 95%;
`;

export const NavLogo = styled(LinkR)`
  z-index: 1;
`;

export const ScrollButtonStyle = styled(GiMushroomHouse)`
  width: 100%;
  height: 100%;
  color: #FFFFFF;
  padding: 10px;
  &:hover{
    color: #D989D3
  }
`;

export const Hamburger = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15%;
    right: 22px;
    transform: translate(-100%; 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #D989D3;
    &:hover{
    color: #F2CEF0;
  };
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  width: 100%;
  height: 80px;
  font-size: 16px;
  &:hover{
    color: #F2CEF0;
  };
`;

export const NavLinks = styled(LinkS)`
  color: #D989D3;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  margin-top: 7px;
  cursor: pointer;
  &:active{
    border-bottom: 3px solid #8C0343
  };
  &:hover{
    color: #F2CEF0;
  };
`;

