import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 80px 0;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 3px;
    background-color: #2a5298;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutImage = styled.div`
  flex: 1;
  min-width: 300px;
  
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const AboutText = styled.div`
  flex: 1.5;
  
  p {
    font-size: 1.1rem;
    line-height: 1.9;
    margin-bottom: 20px;
    color: #555;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <AboutContent>
          <AboutImage>
            <img src="/logo.jpg" alt="Profile" />
          </AboutImage>
          <AboutText>
            <p>Motivated Software Engineering graduate with a passion for innovation and problem-solving.</p>
              <p>Proficient in modern web development technologies and eager to apply skills to create responsive and user-friendly web applications.</p>
             <p> Seeking opportunities to contribute effectively to dynamic software development projects.</p>
             <p>I also have a good understanding of Python, which I use for building simple programs, learning AI concepts, and enhancing my overall programming skills.</p>
          </AboutText>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;