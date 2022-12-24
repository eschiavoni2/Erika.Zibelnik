import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RiLinkedinBoxFill, RiGithubFill } from 'react-icons/ri';
import { SiIndeed } from 'react-icons/si';



export const FooterContainer = styled.footer`
  background-color: #010101;
  padding-top: 24px;
`;

export const FooterLink = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
  font-size: 14px;
  &:hover{
    color: #D989D3;
    transition: 0.3s ease-out
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  text-align: left;
  color: #FFFFFF;
  gap: 50px;
  @media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 18px;
  color: #FFFFFF;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

export const FooterWrap = styled.div`
  padding: 24px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const LinkedinLogo = styled(RiLinkedinBoxFill)`
  height: 50px;
  width: 50px;
`;

export const GithubLogo = styled(RiGithubFill)`
  height: 50px;
  width: 50px;
`;

export const Indeed = styled(SiIndeed)`
  height: 50px;
  width: 100%;
`;





