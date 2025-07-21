import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 15px 0;
  transition: background-color 0.3s ease, padding 0.3s ease, box-shadow 0.3s ease;
  background-color: ${({ scrolled }) => scrolled === 'true' ? 'white' : 'transparent'};
  box-shadow: ${({ scrolled }) => scrolled === 'true' ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  color: ${({ scrolled }) => scrolled === 'true' ? '#1e3c72' : 'white'};
  transition: color 0.3s ease;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ scrolled }) => scrolled === 'true' ? '#1e3c72' : 'white'};
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isopen }) => isopen === 'true' ? '0' : '-100%'};
    width: 250px;
    height: 100vh;
    background-color: white;
    flex-direction: column;
    gap: 0;
    padding: 80px 0 0;
    transition: right 0.3s ease;
    box-shadow: ${({ isopen }) => isopen === 'true' ? '-5px 0 15px rgba(0, 0, 0, 0.1)' : 'none'};
  }
`;

const NavItem = styled.li`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NavLink = styled.a`
  color: ${({ scrolled }) => scrolled === 'true' ? '#333' : 'white'};
  text-decoration: none;
  font-weight: 500;
  padding: 10px 0;
  position: relative;
  transition: color 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ scrolled }) => scrolled === 'true' ? '#1e3c72' : 'white'};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${({ scrolled }) => scrolled === 'true' ? '#1e3c72' : 'rgba(255, 255, 255, 0.8)'};
    
    &:after {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    color: #333;
    display: block;
    padding: 15px 25px;
    border-bottom: 1px solid #eee;
    
    &:after {
      display: none;
    }
    
    &:hover {
      color: #1e3c72;
      background-color: #f9f9f9;
    }
  }
`;

const CloseButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <NavContainer scrolled={scrolled.toString()}>
      <Container>
        <Logo href="#" scrolled={scrolled.toString()}>My Portfolio</Logo>
        
        <MenuButton scrolled={scrolled.toString()} onClick={toggleMenu}>
          <FaBars />
        </MenuButton>
        
        <NavLinks isopen={isMenuOpen.toString()}>
          <CloseButton onClick={closeMenu}>
            <FaTimes />
          </CloseButton>
          
          <NavItem>
            <NavLink href="#about" scrolled={scrolled.toString()} onClick={closeMenu}>About</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink href="#resume" scrolled={scrolled.toString()} onClick={closeMenu}>Resume</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink href="#projects" scrolled={scrolled.toString()} onClick={closeMenu}>Projects</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink href="#contact" scrolled={scrolled.toString()} onClick={closeMenu}>Contact</NavLink>
          </NavItem>
        </NavLinks>
      </Container>
    </NavContainer>
  );
};

export default Navigation;