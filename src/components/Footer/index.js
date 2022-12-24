import React from 'react';
import { FooterContainer, FooterLink, GithubLogo, LinkedinLogo, FooterLinks, FooterLinkTitle, FooterWrap, Indeed } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinkTitle>
        Socials
      </FooterLinkTitle>
      <FooterWrap>
        <FooterLinks>
          <FooterLink as="a" href="https://www.linkedin.com/in/erika-zibelnik/" target="_blank" rel="noopener noreferrer">
            <LinkedinLogo />
          </FooterLink>
          <FooterLink as="a" href="https://my.indeed.com/p/erikaz-jn16n3y" target="_blank" rel="noopener noreferrer">
            <Indeed />
          </FooterLink>
          <FooterLink as="a" href="https://github.com/eschiavoni2" target="_blank" rel="noopener noreferrer">
            <GithubLogo />
          </FooterLink>
        </FooterLinks>
      </FooterWrap>
    </FooterContainer>
    );
};

export default Footer;
