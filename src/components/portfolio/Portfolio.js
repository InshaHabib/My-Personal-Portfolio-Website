import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Header from './Header';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const PortfolioContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #333;
  line-height: 1.6;
`;

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <Navigation />
      <Header />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioContainer>
  );
};

export default Portfolio;