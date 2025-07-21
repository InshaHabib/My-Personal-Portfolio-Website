import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 100px 0 50px;
  text-align: center;
`;

const Name = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 10px;
  font-weight: 700;

   @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 30px;
  font-weight: 300;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
   flex-wrap: wrap;
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

const ContactButton = styled.a`
  display: inline-block;
  margin-top: 40px;
  padding: 12px 30px;
  background-color: #ffffff;
  color: #1e3c72;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Name>Insha Habib</Name>
      <Title>Passionate Frontend & Python Developer</Title>
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
             <ContactButton href="#contact">Contact Me</ContactButton>
    </HeaderContainer>
  );
};

export default Header;