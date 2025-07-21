import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap, FaBriefcase, FaCode, FaServer, FaPalette } from 'react-icons/fa';

const ResumeSection = styled.section`
  padding: 80px 0;
  background-color: white;
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

const ResumeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ResumeColumn = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #2a5298;
  }
`;

const ResumeItem = styled.div`
  margin-bottom: 40px;
  position: relative;
  padding-left: 30px;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #2a5298;
  }
  
  &:after {
    content: '';
    position: absolute;
    left: 7px;
    top: 36px;
    width: 1px;
    height: calc(100% - 1px);
    background-color: #ddd;
  }
  
  &.experience-last:after {
    display: none;
  }
`;

const ItemTitle = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 5px;
`;

const ItemSubtitle = styled.h5`
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
  margin-bottom: 10px;
`;

const ItemDate = styled.span`
  display: inline-block;
  padding: 3px 10px;
  background-color: #e9f0ff;
  color: #2a5298;
  border-radius: 4px;
  font-size: 0.9rem;
  margin-bottom: 15px;
`;

const ItemDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const SkillsContainer = styled.div`
  margin-top: 60px;
`;

const SkillsTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 30px;
  text-align: center;
  color: #2a5298;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
  h4 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 15px;
  
  .skill-name {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
  }
  
  .skill-bar {
    height: 8px;
    background-color: #e9e9e9;
    border-radius: 4px;
    overflow: hidden;
    
    .skill-level {
      height: 100%;
      background: linear-gradient(90deg, #1e3c72 0%, #2a5298 100%);
      border-radius: 4px;
    }
  }
`;

const Resume = () => {
  return (
    <ResumeSection id="resume">
      <Container>
        <SectionTitle>Resume</SectionTitle>
        
        <ResumeContainer>
          <ResumeColumn>
            <h3><FaGraduationCap /> Education</h3>
            
            <ResumeItem>
              <ItemTitle>Bachelor of Science in Software Engineering</ItemTitle>
              <ItemSubtitle>Foundation University School of Science and Technology</ItemSubtitle>
              <ItemDate>2021 - 2025</ItemDate>
              <ItemDescription>
               A degree focused on programming, web development, software design, and project management. Includes hands-on practice through various projects to develop practical skills for the IT industry.
              </ItemDescription>
            </ResumeItem>
            
            <ResumeItem className="experience-item">
              <ItemTitle>FSC</ItemTitle>
              <ItemSubtitle>Pre-Engineering</ItemSubtitle>
              <ItemDate>2018 - 2020</ItemDate>
              <ItemDescription>
                Studied Mathematics, Physics, and Chemistry, building a strong foundation in analytical thinking and problem-solving skills for engineering and technology fields.
              </ItemDescription>
            </ResumeItem>
          </ResumeColumn>
          
          <ResumeColumn>
            <h3><FaBriefcase /> Experience</h3>
            
            <ResumeItem>
              <ItemTitle>MERN Developer</ItemTitle>
              <ItemSubtitle>Ebryx Pvt. Ltd.</ItemSubtitle>
              <ItemDate>Oct 2024 - June 2025</ItemDate>
              <ItemDescription>
                Built an e-commerce website using the MERN stack (React, Node.js, Express.js, and MongoDB) in collaboration with Ebryx as part of the final year project. Focused on creating a user-friendly interface and ensuring website security and smooth functionality.
                </ItemDescription>
            </ResumeItem>
            
            <ResumeItem>
              <ItemTitle>Web Development Intern</ItemTitle>
              <ItemSubtitle>Disruptive Brain Pvt. Ltd.</ItemSubtitle>
              <ItemDate>July 2023 - Sep 2023</ItemDate>
              <ItemDescription>
               Designed and developed simple websites using HTML, CSS, and JavaScript. Improved website layouts and user interfaces to enhance user experience and accessibility.
                 </ItemDescription>
            </ResumeItem>
            
            <ResumeItem>
              <ItemTitle>Flutter Developer</ItemTitle>
              <ItemSubtitle>E-hunar</ItemSubtitle>
              <ItemDate>July 2024 - Sep 2024</ItemDate>
              <ItemDescription>
              Worked as a Flutter intern, developing mobile apps with responsive designs and API integration.
               </ItemDescription>
            </ResumeItem>
          </ResumeColumn>
        </ResumeContainer>
        
        <SkillsContainer>
          <SkillsTitle><FaCode /> Skills</SkillsTitle>
          
          <SkillsGrid>
            <SkillCategory>
              <h4><FaCode /> Frontend</h4>
              <SkillList>
                <SkillItem>
                  <span className="skill-name">React.js</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '80%' }}></div>
                  </div>
                </SkillItem>
                <SkillItem>
                  <span className="skill-name">Tailwind CSS</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '75%' }}></div>
                  </div>
                </SkillItem>
                 <SkillItem>
                  <span className="skill-name">Front-End Development</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '75%' }}></div>
                  </div>
                </SkillItem>
                <SkillItem>
                  <span className="skill-name">JavaScript</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '80%' }}></div>
                  </div>
                </SkillItem>
                <SkillItem>
                  <span className="skill-name">HTML</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '85%' }}></div>
                  </div>
                </SkillItem>
                <SkillItem>
                  <span className="skill-name">CSS</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '90%' }}></div>
                  </div>
                </SkillItem>
              </SkillList>
            </SkillCategory>
            
            <SkillCategory>
              <h4><FaServer /> Backend</h4>
              <SkillList>
                <SkillItem>
                  <span className="skill-name">Node.js</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '40%' }}></div>
                  </div>
                </SkillItem>
                <SkillItem>
                  <span className="skill-name">Python</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '70%' }}></div>
                  </div>
                </SkillItem>
                <SkillItem>
                  <span className="skill-name">MongoDB</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '50%' }}></div>
                  </div>
                </SkillItem>
                 <SkillItem>
                  <span className="skill-name">AI Chatbot Integration</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '70%' }}></div>
                  </div>
                </SkillItem>
                <SkillItem>
                  <span className="skill-name">Firebase</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '80%' }}></div>
                  </div>
                </SkillItem>
              </SkillList>
            </SkillCategory>
            
            <SkillCategory>
              <h4><FaPalette /> Design & Tools</h4>
              <SkillList>
                <SkillItem>
                  <span className="skill-name">Canva</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '92%' }}></div>
                  </div>
                </SkillItem>
                <SkillItem>
                  <span className="skill-name">Draw.io</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '92%' }}></div>
                  </div>
                </SkillItem>
                <SkillItem>
                  <span className="skill-name">Git & GitHub</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '70%' }}></div>
                  </div>
                </SkillItem>
                <SkillItem>
                  <span className="skill-name">Responsive Design</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '70%' }}></div>
                  </div>
                </SkillItem>
              </SkillList>
            </SkillCategory>
          </SkillsGrid>
        </SkillsContainer>
      </Container>
    </ResumeSection>
  );
};

export default Resume;