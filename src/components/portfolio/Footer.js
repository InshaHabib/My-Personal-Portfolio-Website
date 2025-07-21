import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1e3c72;
  color: white;
  padding: 50px 0 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterLogo = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const FooterNav = styled.nav`
  margin-bottom: 30px;
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 0;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const NavItem = styled.li`
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.3s ease;
    
    &:hover {
      opacity: 0.8;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0.8;
  
  &:hover {
    transform: translateY(-3px);
    opacity: 1;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterLogo>Insha Habib</FooterLogo>
          
          <FooterNav>
            <NavList>
              <NavItem><a href="#about">About</a></NavItem>
              <NavItem><a href="#resume">Resume</a></NavItem>
              <NavItem><a href="#projects">Projects</a></NavItem>
              <NavItem><a href="#contact">Contact</a></NavItem>
            </NavList>
          </FooterNav>
          
          <SocialLinks>
            <SocialIcon href="https://github.com/InshaHabib" target="_blank" aria-label="GitHub Profile">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/insha-habib-414441316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" aria-label="LinkedIn Profile">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="mailto:inshahabib939@gmail.com" aria-label="Email Me">
              <FaEnvelope />
            </SocialIcon>
          </SocialLinks>
          
          <Copyright>&copy; {currentYear} Insha Habib. All rights reserved.</Copyright>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
};

export default Footer;